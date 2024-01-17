CREATE SCHEMA MiMi;

USE MiMi;

CREATE TABLE Accounts (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    password VARCHAR(255),
    create_at TIMESTAMP,
    refreshToken VARCHAR(255)
);

CREATE TABLE Users(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    role_id INT
);

CREATE TABLE Roles(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(255),
    account_id INT
);

CREATE TABLE AccountRoles(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
	role_id INT,
    create_at TIMESTAMP,
    status ENUM('Thành công','Thất bại')
);

CREATE TABLE Conversations(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_conversation VARCHAR(255),
    create_at TIMESTAMP
);

CREATE TABLE Conversations_Messages(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    conversation_id INT,
    message_id INT,
    status ENUM('Thành công','Thất bại')
);

CREATE TABLE Messages(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    content TEXT,
    status ENUM('Chưa gửi','Đang gửi','Đã gửi', 'Lỗi')
);   

INSERT INTO Messages(content) values ('Hello World');

SELECT * FROM Messages;
