CREATE DATABASE something_strange;

CREATE TABLE users
(
  userID SERIAL PRIMARY KEY,
  username varchar(40),
  email varchar(40),
  pass varchar(40),
  token varchar(40)
);