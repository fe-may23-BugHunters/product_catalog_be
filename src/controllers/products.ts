/* eslint-disable no-shadow */
import * as ProductsService from '../services/products';
import { Request, Response } from 'express';
import { SortField } from '../types/SortField';
import { Category } from '../types/Category';

const sortFields = ['name', 'priceRegular', 'capacity'];

export async function getAll(
  req: Request,
  res: Response,
) {
  const limit = req.query.limit && !isNaN(+req.query.limit)
    ? +req.query.limit
    : 10;
  const offset = req.query.offset && !isNaN(+req.query.offset)
    ? +req.query.offset
    : 0;
  const sortBy = sortFields.includes(req.query.sortBy as SortField)
    ? req.query.sortBy
    : 'name';
  const category = Object.keys(Category)
    .includes(req.query.category as Category)
    ? req.query.category as Category
    : undefined;

  const result = await ProductsService.getAllFromCategory(
    limit,
    offset,
    sortBy as SortField,
    category as Category,
  );

  return res.json(result);
}

export async function getById(
  req: Request,
  res: Response,
) {
  const result = await ProductsService.getById(req.params.productId);

  res.json(result);
}

export async function getRandom10(
  req: Request,
  res: Response,
) {
  const limit = 10;

  const min = 1;
  const max = (await ProductsService.getAll(1, 1)).count - limit;

  const offset = Math.floor(Math.random() * (max - min)) + min;

  const result = await ProductsService.getRandom(limit, offset);

  return res.json(result);
}

export async function getByVariant(
  req: Request,
  res: Response,
) {
  const color = req.query.color;
  const capacity = req.query.capacity;
  const namespaceId = req.query.namespaceId;

  const result = await ProductsService.getVariant(
    color as string,
    capacity as string,
    namespaceId as string,
  );

  return res.json(result);
}

export async function searchProducts(
  req: Request,
  res: Response,
) {
  const query = req.query.query as string;

  if (!query) {
    return res.status(400).json({ error: "'query' is required" });
  }

  const limit = req.query.limit && !isNaN(+req.query.limit)
    ? +req.query.limit
    : 10;
  const offset = req.query.offset && !isNaN(+req.query.offset)
    ? +req.query.offset
    : 0;

  try {
    const results = await ProductsService.searchProductsByQuery(
      query,
      limit,
      offset,
    );

    return res.json(results);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
