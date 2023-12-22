import { Request, Response } from 'express';
import BlogService from '../services/BlogService';

export class BlogController {
  static OK(_: Request, response: Response): void {
    BlogService.OK()
      .then((result) => response.status(result).send({ message: 'success' }))
      .catch(() => response.status(500).send({ message: 'error' }));
  }
}

export default BlogController;
