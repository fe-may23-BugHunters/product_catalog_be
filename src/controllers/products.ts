/* eslint-disable no-shadow */
import * as ProductsService from '../services/products';
import { Request, Response } from 'express';

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

  const result = await ProductsService.getAll(limit, offset);

  return res.json(result);
}

export async function getById(
  req: Request,
  res: Response,
) {
  const result = await ProductsService.getById(req.params.productId);

  res.json(result);
}
