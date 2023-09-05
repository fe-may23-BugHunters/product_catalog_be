/* eslint-disable max-len */
/* eslint-disable no-shadow */
import * as FavouritesService from '../services/favourites';
import { Request, Response } from 'express';

export async function getAll(
  req: Request,
  res: Response,
) {
  const result = await FavouritesService.getAll(req.params.userId);

  return res.status(200).json(result);
}

export async function addFavourite(
  req: Request,
  res: Response,
) {
  const result = await FavouritesService.addFavourite(req.params.userId, req.params.productId);

  return res.status(201).json(result);
}

export async function deleteFavourite(
  req: Request,
  res: Response,
) {
  const result = await FavouritesService.deleteFavourite(req.params.userId, req.params.productId);

  return res.status(200).json(result);
}
