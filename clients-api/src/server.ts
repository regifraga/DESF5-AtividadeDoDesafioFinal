import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger';
import clientRoutes from './routes/clientRoutes';
import { initDatabase } from './config/database';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', clientRoutes);

const startServer = async () => {
    try {
        await initDatabase();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();