const Joi = require("joi");

// Định nghĩa schema cho Account
const accountSchema = Joi.object({
  user_name: Joi.string().pattern(/^(03|05|07|08|09)[0-9]{8}$/),
  password: Joi.string().required(),
  user_id: Joi.number().integer().positive().required(),
  status: Joi.boolean().required(),
  role_id: Joi.number().integer().positive().required(),
});

const registerAccountSchema = Joi.object({
  username: Joi.string().pattern(/^(03|05|07|08|09)[0-9]{8}$/),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
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
