const connection = require("../configs/MySQLConnect");

class ConversationRepository {

    static async createConversation(name_conversation) {
        const query = `INSERT INTO Conversations(name_conversation) VALUES (?)`;
        const params = [name_conversation];
        const result = await connection.query(query, params);
        return result;
    }

    static async getAllConversations() {
        const query = 'SELECT * FROM conversations';
        const conversations = await connection.query(query);
        return conversations;
    }

    static async getConversationById(conversationId) {
        const query = 'SELECT * FROM conversations WHERE id = ?';
        const conversation = await connection.query(query, [conversationId]);

        if (conversation.length > 0) {
            return conversation[0];
        } else {
            return null;
        }
    }

    static async updateConversation(conversationId, updatedData) {
        const { name_conversation } = updatedData;
        const query = `UPDATE Conversations SET name_conversation = ? WHERE id = ?`;
        const params = [name_conversation, conversationId];
        const result = await connection.query(query, params);
        return result.affectedRows > 0 ? updatedData : null;
    }

    static async deleteConversation(conversationId) {
        const query = `DELETE FROM Conversations WHERE id = ?`;
        const params = [conversationId];
        const result = await connection.query(query, params);
        return result.affectedRows > 0 ? { id: conversationId } : null;
    }
}

module.exports = ConversationRepository;
