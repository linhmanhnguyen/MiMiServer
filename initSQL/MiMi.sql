CREATE SCHEMA MiMi;

USE MiMi;

CREATE TABLE Users(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(25),
    role_id INT
);

CREATE TABLE Roles(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(25)
);

CREATE TABLE Conversations(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_conversation VARCHAR(25),
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

