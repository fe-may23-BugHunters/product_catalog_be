import { Sequelize } from 'sequelize-typescript';
import 'dotenv/config';

// eslint-disable-next-line max-len
const URI = `postgres://admin:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

export const sequelize = new Sequelize(URI, {
  models: [],
  dialectOptions: {
    ssl: true,
  }
});

export async function connect() {
  try {
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error);
  }
}