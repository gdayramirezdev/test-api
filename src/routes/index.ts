import { Router } from 'express';
import BlogController from '../controllers/BlogController';

const router = Router();

router.get('/', BlogController.getAllBlogs);

router.get('/:id', BlogController.getOneBlog);

router.post('/', BlogController.createBlog);

export default router;