const Joi = require("joi");

exports.person = Joi.object()
  .keys({
    title: Joi.string()
      .min(3)
      .max(40)
      .required(),
      description: Joi.string()
      .min(3)
      .max(40)
      .required()
  });

