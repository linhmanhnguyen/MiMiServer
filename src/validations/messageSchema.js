const Joi = require('joi');

const messageSchema = Joi.object({
    user_id: Joi.number().integer().positive().required(),
    conversation_id: Joi.number().integer().positive().required(),
    content: Joi.string().required(),
    status: Joi.string().valid('Chưa gửi', 'Đang gửi', 'Đã gửi', 'Lỗi').required()
});

module.exports = messageSchema;
