const Joi = require('joi');

exports.createCategorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

exports.updateCategorySchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
}).min(1);