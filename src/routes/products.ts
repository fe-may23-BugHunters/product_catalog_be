import * as ProductController from '../controllers/products';
import express from 'express';

export const router = express.Router();

router.get('/', ProductController.getAll);
router.get('/:productId', ProductController.getById);
