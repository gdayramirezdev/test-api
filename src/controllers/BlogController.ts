import { Request, Response } from 'express';
import BlogService from '../services/BlogService';
import { TBlog } from '../types';
import { Op } from '@sequelize/core';
import tools from '../tools';

export class BlogController {
  static getAllBlogs(request: Request, response: Response): void {
    const { title, autor, content } = request.query;
    let params = {
      where: {},
    };

    if (tools.is.string(title)) {
      params.where = {
        ...params.where,
        title: {
          [Op.like]: `%${tools.sanitize(title)}%`
        }
      }
    }

    if (tools.is.string(autor)) {
      params.where = {
        ...params.where,
        autor: {
          [Op.like]: `%${tools.sanitize(autor)}%`
        }
      }
    }

    if (tools.is.string(content)) {
      params.where = {
        ...params.where,
        content: {
          [Op.like]: `%${tools.sanitize(content)}%`
        }
      }
    }

    BlogService.getAll(params)
      .then((result) => response.status(200).send({ message: 'success', data: result }))
      .catch((error) => response.status(400).send({ message: 'error', data: error }));
  }

  static getOneBlog(request: Request, response: Response): void {
    const { id } = request.params;
    BlogService.getOne(parseInt(id))
      .then((result) => response.status(200).send({ message: 'success', data: result }))
      .catch((error) => response.status(400).send({ message: 'error', data: error }));
  }

  static createBlog(request: Request, response: Response): void{
    const { body } = request;
    console.log('Body', body)
    BlogService.createOne(body)
      .then((result) => response.status(200).send({ message: 'success', data: result }))
      .catch((error) => response.status(400).send({ message: 'error', data: error }));
  }

}

export default BlogController;
