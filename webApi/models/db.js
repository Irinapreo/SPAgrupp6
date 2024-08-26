const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sys23m",
  database: "newssite",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");

  // Skapa artikeltabell om den inte finns
  const articlesTableQuery = `CREATE TABLE IF NOT EXISTS articles (
    Title VARCHAR(255) NOT NULL,
    Summary TEXT,
    Link VARCHAR(255) DEFAULT NULL,
    Published DATE DEFAULT NULL,
    Topic VARCHAR(100) DEFAULT NULL
  )`;

  db.query(articlesTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating articles table after connection:", err);
    } else {
      console.log('Table "articles" created successfully. Result:', result);
    }
  });

  // Skapa användartabell om den inte finns
  const usersTableQuery = `CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
  )`;

  db.query(usersTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating users table after connection:", err);
    } else {
      console.log('Table "users" created successfully. Result:', result);
    }
  });
});

module.exports = db;
