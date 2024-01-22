class ConversationModel{
    constructor(
        id,
        name_conversation,
        created_at,
        account_id,
    ) {
        this.id = id;
        this.name_conversation = name_conversation;
        this.created_at = created_at;
        this.account_id = account_id;
    }
}

module.exports = ConversationModel;
