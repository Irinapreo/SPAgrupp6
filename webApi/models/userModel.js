const db = require("./db");
const argon2 = require("argon2");

const createUserTable = () => {
  const query = `CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY ('username')
  )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`;

  db.query(query, (err) => {
    if (err) {
      console.error("Error creating users table:", err);
    }
  });
};

const registerUser = (username, password, callback) => {
  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  db.query(query, [username, password], callback);
};

const findUserByUsername = (username, callback) => {
  const query = `SELECT * FROM users WHERE username = ?`;
  db.query(query, [username], (err, results) => {
    if (err) {
      return callback(err);
    }
    console.log("Retrieved user:", results[0]); // Add this line
    callback(null, results[0]);
  });
};

module.exports = { createUserTable, registerUser, findUserByUsername };
