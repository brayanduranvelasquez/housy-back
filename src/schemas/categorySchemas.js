const Joi = require('joi');

exports.createCategorySchema = Joi.object({
  name: Joi.string().required(),
});

exports.updateCategorySchema = Joi.object({
  name: Joi.string(),
}).min(1);
