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

INSERT INTO Users (user_name, birthday, gender, country)
VALUES ('John Doe', '1990-05-15 00:00:00', 'Male', 'USA');

INSERT INTO Users (user_name, birthday, gender, country)
VALUES ('Jane Smith', '1985-08-22 00:00:00', 'Female', 'Canada');

INSERT INTO Users (user_name, birthday, gender, country)
VALUES ('Alice Johnson', '1995-03-10 00:00:00', 'Female', 'UK');

CREATE TABLE Accounts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    account_name VARCHAR(255),
    password VARCHAR(255),
    create_at TIMESTAMP,
    refreshToken VARCHAR(255),
    role_id INT,
    user_id INT,
    FOREIGN KEY (role_id) REFERENCES Roles(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
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



