import express from 'express';
import cors from 'cors';
import countryRoutes from './routes/countryRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', countryRoutes);

export default app;
