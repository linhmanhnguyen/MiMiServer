const Joi = require('joi');

const conversationSchema = Joi.object({
    name: Joi.string().required(),
    created_at: Joi.date().iso().required()
});

module.exports = conversationSchema;
