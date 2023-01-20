const Joi = require("joi");

exports.person = Joi.object()
  .keys({
    title: Joi.string()
      .min(3)
      .max(900)
      .required(),
      description: Joi.string()
      .min(3)
      .max(10000)
      .required(),
      image: Joi.string()
      .min(3)
      .max(900)
      .required()
  });

