const connection = require("../configs/MySQLConnect");

class ConversationRepository {

    static async createConversation(name_conversation, account_id) {
        const query = `INSERT INTO Conversations(name_conversation, account_id) VALUES (?, ?)`;
        const params = [name_conversation, account_id];
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
        const result = await connection.query(query, [conversationId]);

        if (result.length > 0) {
            return result[0];
        } else {
            return null;
        }
    }

    static async getConversationsByAccountID(accountID) {
        const query = 'SELECT * FROM conversations WHERE account_id = ?';
        const result = await connection.query(query, [accountID]);

        return result.length > 0 ? result : null;ç
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
