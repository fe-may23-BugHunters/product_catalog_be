import { Sequelize } from 'sequelize';
import { Product } from '../utils/db_product_table';
import { SortField } from '../types/SortField';
import { Category } from '../types/Category';

export async function getAllFromCategory(
  limit: number,
  offset: number,
  sortBy: SortField,
  category?: Category,
) {
  if (!category) {
    return getAll(limit, offset, sortBy);
  }

  return Product.findAndCountAll({
    where: {
      category,
    },
    order: [
      sortBy,
    ],
    limit,
    offset,
  });
}

export async function getAll(
  limit: number,
  offset: number,
  sortBy: SortField = 'name',
) {
  return Product.findAndCountAll({
    order: [sortBy],
    limit,
    offset,
  });
}

export async function getById(id: string) {
  return Product.findByPk(id);
}

export async function getRandom(limit: number, offset: number) {
  return Product.findAll({
    order: Sequelize.literal('rand()'),
    limit,
    offset,
  });
}
