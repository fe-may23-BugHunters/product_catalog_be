import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use(express.json());

app.use('/', (req, res) => {
  res.send('Product catalog');
});

export default app;
