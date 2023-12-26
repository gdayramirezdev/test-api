import Joi from "joi";

export const BlogSchema = Joi.object({
  title: Joi.string().required(),
  autor: Joi.string().required(),
  puiblishAt: Joi.date().required(),
  content: Joi.string().required(),
});
