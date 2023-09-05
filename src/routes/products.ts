import * as ProductController from '../controllers/products';
import express from 'express';

export const router = express.Router();

router.get('/:category', ProductController.getAll);
router.get('/:productId', ProductController.getById);
router.get('/:productId/recommended', ProductController.getById);
router.get('/recommended', ProductController.getById);
router.get('/new', ProductController.getById);
router.get('/discount', ProductController.getById);
