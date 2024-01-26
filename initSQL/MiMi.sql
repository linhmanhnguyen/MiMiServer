CREATE SCHEMA MiMi;

USE MiMi;

CREATE TABLE Roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(255)
);

INSERT INTO Roles(role_name) VALUES ('user'), ('admin');

CREATE TABLE Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    birthday DATETIME,
    gender VARCHAR(255),
    country VARCHAR(255)
);

insert into Users(user_name, gender, country) values ('linh manh nguyen', 'male', 'VietNam');

CREATE TABLE Accounts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    account_name VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    create_at TIMESTAMP,
    refreshToken VARCHAR(255),
    role_id INT,
    user_id INT,
    FOREIGN KEY (role_id) REFERENCES Roles(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
SELECT * FROM Accounts WHERE account_name = 'abcd';
UPDATE Accounts
SET role_id = 2
WHERE account_name = 'abcd';


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

SELECT * FROM Roles;
SELECT * FROM Users;
SELECT * FROM Accounts;
SELECT * FROM Conversations;
SELECT * FROM Messages;
