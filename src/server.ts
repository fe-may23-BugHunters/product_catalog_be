import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.CLIENT_URL,
}));
app.use(express.json());

app.use('/', (req, res) => {
  res.send('Product catalog');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${process.env.CLIENT_URL}`);
});