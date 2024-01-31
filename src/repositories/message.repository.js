const connection = require("../configs/MySQLConnect");

class MessagesRepository {
    
    static async insertMessages(
        content,
        account_id,
        conversation_id,
        status
    ) {
        const query = ` INSERT INTO Messages(content, account_id, conversation_id, status) VALUES (?, ?, ?, ?) `
        const params = [content, account_id, conversation_id, status];
        const result = await connection.query(query, params);
        return result;
    }
    static async getMessagesByConversationId(conversation_id) {
        const query = `    
            SELECT 
                Messages.id AS message_id,
                Messages.content,
                Messages.account_id AS account_id,
                Conversations.id AS conversation_id,
                Conversations.name_conversation,
                Messages.status
            FROM 
                Messages
            JOIN 
                Conversations ON Messages.conversation_id = Conversations.id
            WHERE 
                Messages.conversation_id = ?;
        `;
        const result = await connection.query(query, [conversation_id]);

        return result.length > 0 ? result : null;
    }
}

module.exports = MessagesRepository;