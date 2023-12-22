import BlogsModel from "../models/blogs";

export class BlogService {
  static async getAll(): Promise<any> {
    try {
      const userData = await BlogsModel.findAll();

      console.log('Connection has been established successfully.');
      return userData;
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      return [];
    }
  }
}

export default BlogService;
