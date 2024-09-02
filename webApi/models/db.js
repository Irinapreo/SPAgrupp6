const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "sys23m",
//   database: "newssite",
// });

const db = mysql.createConnection({
  host: process.env.DB_HOST, // Byt ut mot RDS-endpoint
  user: process.env.DB_USER, // Byt ut mot ditt RDS-användarnamn
  password: process.env.DB_PASS, // Byt ut mot ditt RDS-lösenord
  database: process.env.DB_NAME, // Byt ut mot ditt RDS-databasnamn
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the AWS RDS database");

  const dropTableQuery = `DROP TABLE IF EXISTS articles`;

  const articlesTableQuery = `CREATE TABLE IF NOT EXISTS articles (
    Title VARCHAR(255) NOT NULL,
    Summary TEXT,
    Link VARCHAR(255) DEFAULT NULL,
    Published DATE DEFAULT NULL,
    Topic VARCHAR(100) DEFAULT NULL
  )`;

  db.query(dropTableQuery, (err, result) => {
    if (err) {
      console.error("Error dropping articles table after connection:", err);
    } else {
      console.log('Table "articles" dropped. Result:', result);
    }
  });

  db.query(articlesTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating articles table after connection:", err);
    } else {
      console.log('Table "articles" created successfully. Result:', result);
    }
  });

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
