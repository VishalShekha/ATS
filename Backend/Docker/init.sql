CREATE DATABASE mydb;

\c mydb;

CREATE TABLE admin (
  admin_id INT NOT NULL,
  admin_name VARCHAR(100),
  PRIMARY KEY (admin_id)
);

INSERT INTO admin (admin_id, admin_name)
VALUES
(1, 'Alice'),
(2, 'Bob'),
(3, 'Charlie'),
(4, 'David'),
(5, 'Eva');
