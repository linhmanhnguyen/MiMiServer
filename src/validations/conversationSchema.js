const Joi = require('joi');

const conversationSchema = Joi.object({
    name_conversation: Joi.string().required(),
    created_at: Joi.date().iso().required(),
    account_id: Joi.number().integer().positive().required(),
});

module.exports = conversationSchema;
