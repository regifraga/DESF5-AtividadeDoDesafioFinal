import express from 'express';
import clientRoutes from './routes/clientRoutes';
import { initDatabase } from './config/database';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', clientRoutes);

const startServer = async () => {
    try {
        await initDatabase();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();