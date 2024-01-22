const Joi = require('joi');

const messageSchema = Joi.object({
    content: Joi.string().required(),
    account_id: Joi.number().integer().positive().required(),
    conversation_id: Joi.number().integer().positive().required(),
    status: Joi.string().valid('Chưa gửi', 'Đang gửi', 'Đã gửi', 'Lỗi').required()
});

module.exports = messageSchema;
