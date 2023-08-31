import * as ProductController from '../controllers/products';
import express from 'express';

export const router = express.Router();

router.get('/products', ProductController.getAll)
router.get('/products/:id', ProductController.getById)
