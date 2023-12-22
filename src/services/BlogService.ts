import BlogsModel from "../models/blogs";
import { TBlog } from "../types";

export class BlogService {
  static async getAll(params: any): Promise<any> {
    try {
      const userData = await BlogsModel.findAll(params);
      return userData;
    } catch (error) {
      return [];
    }
  }

  static async getOne(id: Number): Promise<any> {
    try {
      const userData = await BlogsModel.findByPk(id);
      return userData;
    } catch (error) {
      return {};
    }
  }

  static async createOne(blog: TBlog): Promise<TBlog | {}>{
    try {
      await BlogsModel.create(blog);
      return blog;
    } catch (error) {
      return {}
    }
  }
}

export default BlogService;
