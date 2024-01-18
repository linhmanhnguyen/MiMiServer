CREATE SCHEMA MiMi;

USE MiMi;

CREATE TABLE Accounts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    account_name VARCHAR(255),
    password VARCHAR(255),
    create_at TIMESTAMP,
    refreshToken VARCHAR(255),
    role_id INT
);

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    user_name VARCHAR(255),
    FOREIGN KEY (account_id) REFERENCES Accounts(id)
);

CREATE TABLE Roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(255),
    account_id INT,
    FOREIGN KEY (account_id) REFERENCES Accounts(id)
);

CREATE TABLE AccountRoles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    role_id INT,
    create_at TIMESTAMP,
    status ENUM('Thành công', 'Thất bại'),
    FOREIGN KEY (account_id) REFERENCES Accounts(id),
    FOREIGN KEY (role_id) REFERENCES Roles(id)
);

CREATE TABLE Conversations (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_conversation VARCHAR(255),
    create_at TIMESTAMP,
    account_id INT
);

CREATE TABLE Messages (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content TEXT,
    account_id INT,
    conversation_id INT,
    status ENUM('Chưa gửi', 'Đang gửi', 'Đã gửi', 'Lỗi'),
    FOREIGN KEY (account_id) REFERENCES Accounts(id),
    FOREIGN KEY (conversation_id) REFERENCES Conversations(id)
);

