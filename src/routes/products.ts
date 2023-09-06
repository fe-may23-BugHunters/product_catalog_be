import * as ProductController from '../controllers/products';
import express from 'express';

export const router = express.Router();

router.get('/', ProductController.getAll);
router.get('/:productId', ProductController.getById);
router.get('/:productId/recommended', ProductController.getRandom10);
router.get('/recommended', ProductController.getRandom10);
router.get('/new', ProductController.getRandom10);
router.get('/discount', ProductController.getRandom10);
