const conversationSchema = require('../validations/conversationSchema');
const conversationModel = require('../model/conversation.model');
const messageModel = require('../model/message.model');
const conversationRepository = require('../repositories/conversation.repository');
const returnReponseUtil = require('../utils/returnResponse');

class ConversationController {
    static async createConversation(req, res) {
        try {
            await conversationSchema.validate(req.body);

            const name_conversation = req.body.name;

            const result = await conversationRepository.createConversation(name_conversation);

            if (result) {
                returnReponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Successfully created conversation",
                    result.insertId
                );
            }
        } catch (error) {
            console.error("Error creating conversation:", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "An error has occurred, please try again"
            );
        }
    }

    static async getAllConversations(req, res) {
        try {
            const conversations = await conversationRepository.getAllConversations();
            returnReponseUtil.returnResponse(res, 200, true, 'Danh sách cuộc trò chuyện', conversations);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách cuộc trò chuyện:', error);
            returnReponseUtil.returnResponse(res, 500, false, 'Đã xảy ra lỗi server');
        }
    }

    static async getConversationById(req, res) {
        try {
            const conversationId = req.params.id;
            const conversation = await conversationRepository.getConversationById(conversationId);

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
    
    static async getAllMessagesInConversation(req, res) {
        try {
            const conversationId = req.params.id;
    
            returnReponseUtil.returnResponse(
                res,
                200,
                true,
                "Danh sách tin nhắn trong cuộc trò chuyện",
                messages
            );
        } catch (error) {
            console.error("Lỗi khi lấy tin nhắn trong cuộc trò chuyện:", error);
            returnReponseUtil.returnResponse(
                res,
                500,
                false,
                "Đã xảy ra lỗi, vui lòng thử lại"
            );
        }
    }


    static async updateConversation(req, res) {
        try {
            const conversationId = req.params.id;
            const updatedData = req.body;

            const result = await conversationRepository.updateConversation(
                conversationId,
                updatedData
            );

            if (result) {
                returnReponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Successfully updated conversation",
                    result
                );
            } else {
                returnReponseUtil.returnResponse(
                    res,
                    404,
                    false,
                    "Conversation not found"
                );
            }
        } catch (error) {
            console.error("Error updating conversation:", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "An error has occurred, please try again"
            );
        }
    }

    static async deleteConversation(req, res) {
        try {
            const conversationId = req.params.id;

            const result = await conversationRepository.deleteConversation(conversationId);

            if (result) {
                returnReponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Successfully deleted conversation",
                    result
                );
            } else {
                returnReponseUtil.returnResponse(
                    res,
                    404,
                    false,
                    "Conversation not found"
                );
            }
        } catch (error) {
            console.error("Error deleting conversation:", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "An error has occurred, please try again"
            );
        }
    }
}

module.exports = ConversationController;
