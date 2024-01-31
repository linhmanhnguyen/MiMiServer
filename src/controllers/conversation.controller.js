const conversationSchema = require('../validations/conversationSchema');
const conversationRepository = require('../repositories/conversation.repository');
const returnReponseUtil = require('../utils/returnResponse');

class ConversationController {
    static async createConversation(req, res) {
        try {
            await conversationSchema.validate(req.body);

            const name_conversation = req.body.name_conversation;
            const account_id = req.body.account_id;

            const result = await conversationRepository.createConversation(name_conversation, account_id);

            if (result) {
                returnReponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Tạo cuộc trò chuyện thành công",
                    result.insertId
                );
            }
        } catch (error) {
            console.error("Lỗi khi tạo cuộc trò chuyện", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "Đã có lỗi xảy ra, vui lòng thử lại"
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

    static async getConversationsByAccountID(req, res) {
        try {
            const accountID = req.params.account_id;
            const result = await conversationRepository.getConversationsByAccountID(accountID);
            
            if (!result) {
                returnReponseUtil.returnResponse(res, 404, false, 'Không tìm thấy cuộc trò chuyện');
            } else {
                returnReponseUtil.returnResponse(res, 200, true, 'Danh sách cuộc trò chuyện', result);
            }

        } catch (error) {
            console.error('Lỗi khi lấy ra danh sách', error);
            returnReponseUtil.returnResponse(res, 500, false, 'Đã xảy ra lỗi server');
        }
        
    }

    static async getConversationByConversationName(req, res) {
        try {
            const conversationName =  req.body.name_conversation;
            const result = await conversationRepository.getConversationByConversationName(conversationName);
            
            console.log(conversationName)
            console.log(result)

            if (!result) {
                returnReponseUtil.returnResponse(res, 404, false, 'Không tìm thấy cuộc trò chuyện');
            } else {
                returnReponseUtil.returnResponse(res, 200, true, 'Danh sách cuộc trò chuyện', result);
            }
        } catch (error) {
            console.error('Lỗi khi lấy ra danh sách', error);
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
                    "Thông tin cuộc trò hội thoại đã được cập nhật",
                    result
                );
            } else {
                returnReponseUtil.returnResponse(
                    res,
                    404,
                    false,
                    "Không tìm thấy cuộc hội thoại"
                );
            }
        } catch (error) {
            console.error("Đã có lỗi xảy ra, vui lòng thử lại", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "Đã có lỗi xảy ra, vui lòng thử lại"
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
                    "Cuộc hội thoại đã bị xoá",
                    result
                );
            } else {
                returnReponseUtil.returnResponse(
                    res,
                    404,
                    false,
                    "Không tìm thấy cuộc hội thoại"
                );
            }
        } catch (error) {
            console.error("Lỗi khi xoá cuộc hội thoại", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "Đã có lỗi xảy ra, vui lòng thử lại"
            );
        }
    }
}

module.exports = ConversationController;
