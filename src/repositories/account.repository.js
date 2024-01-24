const connection = require("../configs/MySQLConnect");
const bcrypt = require('bcrypt');

class AccountRepository {

    /*
    *Funcition Repository: Tìm kiếm tài khoản bằng tên tài khoản
    */

    static async searchAccountByAccountName(accountname) {
        const query = ` 
            SELECT 
                Accounts.id, Accounts.account_name, Accounts.password, Accounts.role_id, Roles.role_name, Users.id, Users.user_name
            FROM 
                Accounts
            JOIN 
                Users ON Accounts.user_id = Users.id
            JOIN 
                Roles ON Accounts.role_id = Roles.id
            WHERE 
                Accounts.account_name = ?;
        `;

        const params = [accountname];
        const result = await connection.query(query, params);
        return result;
    }

  /**
   * Function Repository: Thêm thông tin tài khoản cho 1 người dùng
   */

    static async insertAccount(
        account_name,
        password,
        create_at,
        refreshToken
    ) {
        const query = `
            INSERT INTO Accounts (account_name, password, create_at, refreshToken)
            VALUES (?, ?, ?, ?)
        `;

        const hashedPassword = await bcrypt.hash(password, 10);

        const params = [
            account_name,
            hashedPassword,
            create_at,
            refreshToken
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

  /**
   * Function Repository: Tìm tài khoản bằng username
   */
  static async checkExistAccount(account_name) {
    const query = `SELECT * FROM Accounts WHERE account_name = ?`;
    const params = [account_name];
    const result = await connection.query(query, params);
    return result;
  }
}

module.exports = AccountRepository;