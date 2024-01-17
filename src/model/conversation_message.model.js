class ConversationMessageModel {
    constructor(
        user_id,
        conversation_id,
        message_id,
        status
    ) {
        this.user_id = user_id;
        this.conversation_id = conversation_id;
        this.message_id = message_id;
        this.status = status
    }
}

module.exports = ConversationMessageModel;