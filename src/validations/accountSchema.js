const Joi = require("joi");

const accountSchema = Joi.object({
  account_name: Joi.string().pattern(/^(03|05|07|08|09)[0-9]{8}$/),
  password: Joi.string().required(),
  created_at: Joi.date().iso().required(),
  role_id: Joi.number().integer().positive().required(),
  user_id: Joi.number().integer().positive().required(),
});

const registerAccountSchema = Joi.object({
  username: Joi.string().pattern(/^(03|05|07|08|09)[0-9]{8}$/),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
  user_id: Joi.number().integer().positive().required(),
  role_id: Joi.number().integer().positive().required(),
});

const updateAccountSchema = Joi.object({
  password: Joi.string().required(),
});

module.exports = {
  accountSchema,
  updateAccountSchema,
  registerAccountSchema,
};
