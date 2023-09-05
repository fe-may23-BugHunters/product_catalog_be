/* eslint-disable max-len */
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router as productsRouter } from './routes/products';
import { router as favouritesRouter } from './routes/favourites';

import { connect } from './utils/db';
import { Favourites } from './utils/db_favourites';

connect();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
}));
app.use(express.json());

app.use('/products', productsRouter);
app.use('/favourites', favouritesRouter);

Favourites.create({ userId: 'f3bbb3e2-4bf6-11ee-be56-0242ac120002', productId: '1b1a9b42-4bfc-11ee-b283-fed709f87b70' });

export default app;
