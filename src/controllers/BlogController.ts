import { Request, Response } from 'express';
import BlogService from '../services/BlogService';

export class BlogController {
  static getAllBlogs(_: Request, response: Response): void {
    BlogService.getAll()
      .then((result) => response.status(200).send({ message: 'success', data: result }))
      .catch((error) => response.status(400).send({ message: 'error', data: error }));
  }


}

export default BlogController;
