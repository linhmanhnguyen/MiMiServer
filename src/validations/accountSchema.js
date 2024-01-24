const Joi = require("joi");

const accountSchema = Joi.object({
  account_name: Joi.string().required(),
  password: Joi.string().required(),
  created_at: Joi.date().iso().required(),
  role_id: Joi.number().integer().positive().required(),
  user_id: Joi.number().integer().positive().required(),
});

const registerAccountSchema = Joi.object({
  account_name: Joi.string().required(),
  password: Joi.string().required(),
  full_name: Joi.string().required()
});

const updateAccountSchema = Joi.object({
  password: Joi.string().required(),
});

module.exports = {
  accountSchema,
  updateAccountSchema,
  registerAccountSchema,
};
