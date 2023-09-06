/* eslint-disable no-console */
import { Sequelize } from 'sequelize';
import { sequelize } from './db';
import { DataType } from 'sequelize-typescript';

export const Product = sequelize.define('Product', {
  id: {
    type: DataType.UUID,
    defaultValue: Sequelize.literal('uuid_generate_v1()'),
    allowNull: false,
    primaryKey: true,
  },
  namespaceId: {
    type: DataType.STRING,
    allowNull: false,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  category: {
    type: DataType.ENUM('phones', 'tablests', 'accessories'),
    allowNull: false,
  },
  capacityAvailable: {
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  },
  capacity: {
    type: DataType.STRING,
    allowNull: false,
  },
  priceRegular: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  priceDiscount: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  colorsAvailable: {
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  },
  color: {
    type: DataType.STRING,
    allowNull: false,
  },
  images: {
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  },
  description: {
    type: DataType.JSON,
    allowNull: false,
  },
  screen: {
    type: DataType.STRING,
    allowNull: false,
  },
  resolution: {
    type: DataType.STRING,
    allowNull: false,
  },
  processor: {
    type: DataType.STRING,
    allowNull: false,
  },
  ram: {
    type: DataType.STRING,
    allowNull: false,
  },
  zoom: {
    type: DataType.STRING,
    allowNull: false,
  },
  camera: {
    type: DataType.STRING,
    allowNull: false,
  },
  cell: {
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  },
}, {
  modelName: 'products',
  updatedAt: false,
  createdAt: false,
});

Product.sync()
  .then(() => {
    console.log('Table synced with database');
  })
  .catch((error) => {
    console.error('Error syncing table:', error);
  });
