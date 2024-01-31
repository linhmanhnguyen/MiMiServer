const messageSchema = require('../validations/messageSchema');
const messageRepository = require('../repositories/message.repository');
const returnReponseUtil = require('../utils/returnResponse');

class MessageController {
    static async insertMessages(req, res) {
        try {
            await messageSchema.validateAsync(req.body);

            const content = req.body.content;
            const account_id = req.body.account_id;
            const conversation_id = req.body.conversation_id;
            const status = req.body.status;

            const result = await messageRepository.insertMessages(
                content,
                account_id,
                conversation_id,
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

    static async getMessagesByConversationId(req, res) {
        try {
            const conversation_id = req.params.conversation_id;
            const conversation = await messageRepository.getMessagesByConversationId(conversation_id);

            if (!conversation) {
                returnReponseUtil.returnResponse(res, 404, false, 'Không tìm thấy cuộc trò chuyện');
            } else {
                returnReponseUtil.returnResponse(res, 200, true, 'Thông tin cuộc trò chuyện', conversation);
            }
        } catch (error) {
            console.error('Lỗi khi lấy thông tin cuộc trò chuyện:', error);
            returnReponseUtil.returnResponse(res, 500, false, 'Đã xảy ra lỗi server');
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
                    "Tin nhắn đã bị xoá",
                    result
                );
            } else {
                returnReponseUtil.returnResponse(
                    res,
                    404,
                    false,
                    "Không tìm thấy tin nhắn"
                );
            }
        } catch (error) {
            console.error("Lỗi khi xoá tin nhắn", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "Đã xảy ra lỗi, vui lòng thử lại"
            );
        }
    }
}

module.exports = MessageController;
