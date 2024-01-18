const connection = require("../configs/MySQLConnect");

class MessagesRepository {

    static async insertMessages(
        content,
        status
    ) {
        const query = ` INSERT INTO Messages(content, status) VALUES (?, ?) `
        const params = [content, status];
        const result = await connection.query(query, params);
        return result;
    }

    static async getMessagesInConversation(conversation_id) {
        const query = `
            SELECT Messages.id AS message_id,
            Messages.content,
            FROM Messages
            JOIN Conversations ON Messages.conversation_id = Conversations.id
            WHERE Messages.conversation_id = ?;
        `;
        const params = [conversation_id];
    
        try {
            const result = await connection.query(query, params);
            return result;
        } catch (error) {
            console.error("Lỗi khi truy xuất tin nhắn trong cuộc trò chuyện:", error);
            throw error;
        }
    }
    
}

module.exports = MessagesRepository;