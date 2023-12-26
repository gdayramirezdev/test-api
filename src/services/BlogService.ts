import BlogsModel, { BlogAttributes, BlogModelStatic } from "../models/blogs";
import { BlogSchema } from "../schemas/BlogSchema";
import tools from "../tools";

export class BlogService {
  static async getAll(params: any): Promise<any> {
    try {
      const userData = await BlogsModel.findAll(params);
      return userData;
    } catch (error: any) {
      console.log('Error on BlogService.getAll, params:', params)
      return [];
    }
  };

  static async getOne(id: Number): Promise<any> {
    try {
      return await BlogsModel.findByPk(id);
    } catch (error: any) {
      console.log('Error on BlogService.getOne, id:', id)
      return {};
    }
  };

  static async createOne(blog: BlogAttributes): Promise<BlogAttributes | {}>{
    try {
      const validatedObject = BlogSchema.validate(blog);
      if (validatedObject.error) {
        return tools.getJoiDetails(validatedObject.error);
      } else {
        return await BlogsModel.create(blog);
      }
    } catch (error: any) {
      console.log('Error on BlogService.create, message:', error?.message);
      console.log('Error on BlogService.create, blog:', blog);
      return {};
    }
  };
}

export default BlogService;
