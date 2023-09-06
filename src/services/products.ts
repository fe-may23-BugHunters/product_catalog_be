import { Product } from '../utils/db_product_table';
import { SortField } from '../types/SortField';
import { Category } from '../types/Category';

export async function getAllFromCategory(
  limit: number,
  offset: number,
  sortBy: SortField,
  category: Category,
) {
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

export async function getAll(limit: number, offset: number) {
  return Product.findAndCountAll({
    order: [
      'name',
    ],
    limit,
    offset,
  });
}

export async function getById(id: string) {
  return Product.findByPk(id);
}

export async function getRandom(limit: number, offset: number) {
  return Product.findAll({
    order: [
      'createdAt',
    ],
    limit,
    offset,
  });
}

export async function getVariant(
  color: string,
  capacity: string,
  namespaceId: string,
) {
  return Product.findAll({
    where: {
      color,
      capacity,
      namespaceId,
    },
    order: [
      'createdAt',
    ],
  });
}
