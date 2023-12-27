import Joi from "joi";

export const BlogSchema = Joi.object({
  title: Joi.string().required().max(200),
  autor: Joi.string().required().max(200),
  publishAt: Joi.date().required(),
  content: Joi.string().required(),
});
