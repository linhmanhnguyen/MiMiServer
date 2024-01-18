const messageSchema = require('../validations/messageSchema');
const messageModel = require('../model/message.model');
const messageRepository = require('../repositories/message.repository');
const conversationRepository = require('../repositories/conversation.repository');
const returnReponseUtil = require('../utils/returnResponse');

class MessageController {
    static async insertMessages(req, res) {
        try {
            await messageSchema.validateAsync(req.body);

            const user_id = req.body.user_id;
            const conversation_id = req.body.conversation_id;
            const content = req.body.content;
            const status = req.body.status;

            const result = await messageRepository.insertMessages(
                user_id,
                conversation_id,
                content,
                status
            );

            if (result) {
                returnReponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Tin nhắn được thêm vào cuộc hội thoại thành công",
                    result.insertId
                );
            }
        } catch (error) {
            console.error("Lỗi khi thêm tin nhắn:", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "Đã xảy ra lỗi, vui lòng thử lại"
            );
        }
    }
    
    static async deleteMessage(req, res) {
        try {
            const messageId = req.params.id;

            const result = await messageRepository.deleteMessage(messageId);

            if (result) {
                returnReponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Message deleted successfully",
                    result
                );
            } else {
                returnReponseUtil.returnResponse(
                    res,
                    404,
                    false,
                    "Message not found"
                );
            }
        } catch (error) {
            console.error("Error deleting message:", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "An error has occurred, please try again"
            );
        }
    }
}

module.exports = MessageController;
