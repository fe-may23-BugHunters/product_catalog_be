import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router as productsRouter } from './routes/products';

import { connect } from './utils/db';

connect();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
}));
app.use(express.json());

app.use('/products', productsRouter);

export default app;
