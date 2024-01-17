const connection = require("../configs/MySQLConnect");

class MessagesRepository {
    static async InsertMessages(
        content,
        status
    ) {
        const query = ` INSERT INTO Messages(content, status) VALUES (?, ?) `
        const params = [content, status];
        const result = await connection.query(query, params);
        return result;
    }

}

module.exports = MessagesRepository;