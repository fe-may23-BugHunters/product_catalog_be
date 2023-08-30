import { Sequelize } from 'sequelize';
import { sequelize } from './db';
import { DataType } from 'sequelize-typescript';

export const Product = sequelize.define('Product', {
  id: {
    type: DataType.UUID,
    defaultValue: Sequelize.literal('uuid_generate_v1()'),
    primaryKey: true,
  },
  category: {
    type: DataType.ENUM('phones', 'tablets', 'accessories'),
    allowNull: false,
  },
  phoneId: {
    type: DataType.STRING,
    allowNull: false,
  },
  itemId: {
    type: DataType.STRING,
    allowNull: false,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  fullPrice: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  screen: {
    type: DataType.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataType.STRING,
    allowNull: false,
  },
  color: {
    type: DataType.STRING,
    allowNull: false,
  },
  ram: {
    type: DataType.STRING,
    allowNull: false,
  },
  year: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataType.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataType.DATE,
    field: 'created_at',
    allowNull: false,
    defaultValue: Sequelize.literal('now()'),
  },
}, {
  modelName: 'products',
  updatedAt: false,
});

Product.sync()
  .then(() => {
    console.log('Table synced with database');
  })
  .catch((error) => {
    console.error('Error syncing table:', error);
  });
  