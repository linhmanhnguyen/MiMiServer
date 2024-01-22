CREATE SCHEMA MiMi;

USE MiMi;

CREATE TABLE Roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(255)
);

INSERT INTO Roles(role_name) VALUES ('user'), ('admin');

CREATE TABLE Accounts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    account_name VARCHAR(255),
    password VARCHAR(255),
    create_at TIMESTAMP,
    refreshToken VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES Roles(id)
);

INSERT INTO Accounts(account_name, password, refreshToken, role_id)
VALUES ('linhnm', '123456', '', 1), ('demo1', '123456', '', 2), ('demo2', '123456', '',2);

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    user_name VARCHAR(255),
    FOREIGN KEY (account_id) REFERENCES Accounts(id)
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

SELECT * FROM Messages WHERE conversation_id = 1;

SELECT * FROM Messages;
SELECT * FROM Conversations;

