import express from 'express';
import dotenv from 'dotenv';
import router from '@/router';
import { serverErrorHandler } from '@/middleware/errorHandler';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/v1', router);

app.use(serverErrorHandler);

export default app;
