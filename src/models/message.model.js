class MessageModel {
    constructor(
        id,
        content,
        userId,
        conversationId,
        status
    ){
        this.id = id;
        this.content = content;
        this.userId = userId;
        this.conversationId = conversationId;
        this.status = status;
    }
}

module.exports = MessageModel;
