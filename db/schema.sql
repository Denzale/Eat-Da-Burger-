DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger(
  id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(40),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);