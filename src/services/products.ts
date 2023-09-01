import { Product } from '../utils/db_product_table';

export async function getAll(limit: number, offset: number) {
  return Product.findAndCountAll({
    order: [
      'created_at',
    ],
    limit,
    offset,
  });
}

// some changes

export async function getById(id: string) {
  return Product.findByPk(id);
}
