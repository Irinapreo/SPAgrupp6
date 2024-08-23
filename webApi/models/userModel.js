const db = require("./db");
const bcrypt = require("bcryptjs");

const createUserTable = () => {
  const query = `CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
  )`;

  db.query(query, (err) => {
    if (err) {
      console.error("Error creating users table:", err);
    }
  });
};

const registerUser = (username, password, callback) => {
  const hashedPassword = bcrypt.hashSync(password, 8);
  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;

  db.query(query, [username, hashedPassword], callback);
};

const findUserByUsername = (username, callback) => {
  const query = `SELECT * FROM users WHERE username = ?`;
  db.query(query, [username], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results[0]);
  });
};

module.exports = { createUserTable, registerUser, findUserByUsername };
