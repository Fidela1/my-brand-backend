const Joi = require("joi");

exports.person = Joi.object()
  .keys({
    email: Joi.string().email().required(),
     password: Joi.string().min(6)
     .max(12)
     .required()
  });