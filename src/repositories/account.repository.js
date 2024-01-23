const connection = require("../configs/MySQLConnect");
const bcrypt = require('bcrypt');

class AccountRepository {

  /**
   * Function Repository: Thêm thông tin tài khoản cho 1 người dùng
   */

    static async insertAcount(
        user_name,
        password,
        create_at,
        refreshToken, 
        role_id,
        user_id,
    ) {
        const query = `
            INSERT INTO Accounts (account_name, password, create_at, refreshToken, role_id, user_id)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const hashedPassword = await bcrypt.hash(Password, 10);

        const params = [
            user_name,
            hashedPassword,
            create_at,
            refreshToken,
            role_id,
            user_id,
        ];

        const result = await connection.query(query, params);
        return result;

    }
  /**
   * Function Repository: Lấy toàn bộ danh sách tài khoản
   */

    static async getAllAccounts() {
        const query = `
            SELECT id, account_name, create_at, role_id, user_id FROM Accounts
        `;
        const params = []
        const result = await connection.query(query, params);
        return result;
    }

  /**
   * Function Repository: Lấy thông tin chi tiết của 1 tài khoản bằng ID
   */

    static async getAccountByID(id) {
        const query = `
            SELECT id, account_name, create_at, role_id, user_id
            FROM Accounts
            WHERE id = ?
        `;
        const params = [id];
        const result = await connection.query(query, params);
        return result;
    }

 /**
   * Function Repository: Đổi mật khẩu tài khoản bằng ID
   */

    static async updateAccountByID(id, password) {
        const query = `
            UPDATE Accounts 
            SET password = ?
            WHERE id = ?;
        `;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const params = [hashedPassword, id];
        const result = await connection.query(query, params);
        return result;
    }
 /**
   * Function Repository: Xóa thông tin tài khoản trong 1 thông tin người dùng
   */

    static async deleteAccountByID(id){
        const query = `DELETE FROM Accounts WHERE id = ?`
        const params = [id];
        const result = await connection.query(query, params);
        return result;
    }
}

module.exports = AccountRepository;