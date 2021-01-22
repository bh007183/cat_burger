CREATE DATABASE burgar_db;
USE burgar_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (name) VALUES ('Bacon');
INSERT INTO burgers (name) VALUES ('Cheese');
INSERT INTO burgers (name, devour) VALUES ('Horse', true);
