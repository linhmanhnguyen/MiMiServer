const connection = require("../configs/MySQLConnect");
const bcrypt = require("bcrypt");

class AccountRepository {

  /**
   * Function Repository: Thêm thông tin tài khoản cho 1 người dùng
   */

    static async InsertAcount(
        user_name,
        password,
        create_at,
        refreshToken
    ) {
        const query = `
            INSERT INTO Accounts (user_name, password, create_at, refreshToken)
            VALUES (?, ?, ?, ?)
        `;

        const hashedPassword = await bcrypt.hash(Password, 10);

        const params = [
            user_name,
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

    static async GetAllAccounts() {
        const query = `
            SELECT (id, user_name, create_at) FROM Accounts
        `;
        const params = []
        const result = await connection.query(query, params);
        return result;
    }

  /**
   * Function Repository: Lấy thông tin chi tiết của 1 tài khoản bằng ID
   */

    static async GetAccountByID() {
        const query = `
            SELECT (id, user_name, create)
            FROM Accounts
            WHERE id = ?
        `;
        const params = [id];
        const result = await connection.query(query, params);
        return result;
    }

 /**
   * Function Repository: Cập nhập thông tin chi tiết của 1 tài khoản bằng ID
   */

    static async UpdateAccountByID(password, id) {
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

    static async DeleteAccountByID(id){
        const query = `DELETE FROM Accounts WHERE id = ?`
        const params = [id];
        const result = await connection.query(query, params);
        return result;
    }

  /**
   * Function Repository: Gán tài khoản vừa được tạo với role ID
   */
  static async InsertRoleForAccount(
    account_id,
    role_id,
    create_at,
    status
  ) {
    const query = `
        INSERT INTO AccountRoles (account_id, role_id, create_at, status) 
        VALUES (?, ?, ?, ?)
    `;
    const params = [account_id, role_id, create_at, status];
    const result = await connection.query(query, params);
    return result;
  }

}

module.exports = AccountRepository;