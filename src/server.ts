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
  origin: [
    process.env.CLIENT_URL_LOCAL || '',
    process.env.CLIENT_URL_PROD || '',
  ],
}));
app.use(express.json());

app.use('/products', productsRouter);
app.use('/favourites', favouritesRouter);

Favourites.destroy({ where: { userId: '1' } });

export default app;
