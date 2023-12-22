import { Router } from 'express';
import BlogController from '../controllers/BlogController';

const router = Router();

router.get('/', BlogController.getAllBlogs);

export default router;