import { Product } from "../utils/db_product_table";

export async function getAll(limit: number, offset: number) {
  return Product.findAndCountAll({
    order: [
      'created_at'
    ],
    limit,
    offset,
  })
}

export async function getById(id: number) {
  return Product.findByPk(id);
}
