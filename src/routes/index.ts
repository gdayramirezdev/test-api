import { Router } from 'express';
import BlogController from '../controllers/BlogController';

const router = Router();

router.get('/', BlogController.OK);

export default router;