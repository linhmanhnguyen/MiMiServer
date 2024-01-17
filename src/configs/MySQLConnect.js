const mysql = require("mysql2/promise");
const dotenv = require("dotenv"); //Module dotenv được sử dụng để tải các biến môi trường từ tệp .env vào process.env. nhằm bảo vệ thông tin

dotenv.config(); //Tải các biến môi trường từ tệp .env vào process.env

class Database {
    constructor() { // Sử dụng constructor để đảm bảo chỉ có một thể hiện của kết nối CSDL được tạo ra
        // Kiểm tra nếu Database.instance không tồn tại thì khởi tạo kết nối database bằng cách gọi _initConnection và đặt Database.instance thành thể hiện tại
        if (!Database.instance) {
            this._initConnection();
            Database.instance = this;
        }
        return Database.instance;
    }
    async _initConnection(){
        this.connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        })
    }
    // Cung cấp một phương thức có tên là query để thực thi các truy vấn SQL trên cơ sở dữ liệu.
    // Nhận một chuỗi truy vấn SQL (sql) và các tham số tùy chọn (params) và trả về kết quả của truy vấn.
    async query(sql, params) {
        const [rows] = await this.connection.query(sql, params);
        return rows;
    }
}
// Tạo một thể hiện của lớp Database, gọi là instance, từ đó khởi tạo kết nối cơ sở dữ liệu.
const instance = new Database();
// Xuất thể hiện đã được tạo ra, làm cho nó có sẵn để sử dụng trong các phần khác của ứng dụng.
module.exports = instance;  