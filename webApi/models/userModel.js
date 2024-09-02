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

const registerUser = (username, password) => {
  const hashedPassword = bcrypt.hashSync(password, 8);
  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;

  return new Promise((resolve, reject) => {
    db.query(query, [username, hashedPassword], (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

const findUserByUsername = (username) => {
  const query = `SELECT * FROM users WHERE username = ?`;

  return new Promise((resolve, reject) => {
    db.query(query, [username], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results[0]);
    });
  });
};

module.exports = { createUserTable, registerUser, findUserByUsername };
