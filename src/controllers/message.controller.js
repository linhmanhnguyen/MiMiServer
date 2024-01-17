const messageSchema = require('../validations/messageSchema');
const messageModel = require('../model/message.model');
const messageRepository = require('../repositories/message.repository')
const returnReponseUtil = require('../utils/returnResponse')

class MessageController {
    static async InsertMessages(req, res){
        try {
            await messageSchema.validateAsync(req.body);
            
            const content = req.body.content;
            const status = req.body.status;
            
            var result = await messageRepository.InsertMessages(
                content,
                status
            );

            if (result) {
                returnReponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Successfully",
                    result.insertId
                );
            }
        } catch (error) {
            console.error("Error inserting message:", error);
            returnReponseUtil.returnResponse(
                res,
                400,
                false,
                "An error has occurred, pls try again"
            );
        }
    }
}

module.exports = MessageController;
