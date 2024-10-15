const Joi = require('joi');

exports.createHouseSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  location: Joi.string().required(),
  image: Joi.string().required(),
  categoryId: Joi.string().required(),
});

exports.updateHouseSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  price: Joi.number().positive(),
  location: Joi.string(),
  image: Joi.string().required(),
  categoryId: Joi.string(),
}).min(1);
