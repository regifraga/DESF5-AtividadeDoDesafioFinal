import express from 'express';
import { json } from 'body-parser';
import clientRoutes from './routes/clientRoutes';
import errorHandler from './middlewares/errorHandler';

const app = express();

// Middleware
app.use(json());

// Routes
app.use('/api/clients', clientRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;