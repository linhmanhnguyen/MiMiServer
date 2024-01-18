class ConversationModel{
    constructor(
        id,
        name_conversation,
        created_at,
    ) {
        this.id = id;
        this.name_conversation = name_conversation;
        this.created_at = created_at;
    }
}

module.exports = ConversationModel;
