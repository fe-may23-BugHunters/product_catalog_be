import { Model } from 'sequelize';
import * as ProductsService from '../services/product';
import { Request, Response } from 'express';

export async function getAll(
  req: Request,
  res: Response,
) {
  const limit = req.query.limit ? +req.query.limit : 10;
  const offset = req.query.offset ? +req.query.offset : 0;

  const result = await ProductsService.getAll(limit, offset);

  if (res) {
    res.json(result);
  }
}

export async function getById(
  req: Request,
  res: Response,
) {
  const result = await ProductsService.getById(+req.params.id);

  res.json(result);
}
