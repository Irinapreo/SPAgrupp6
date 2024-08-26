const argon2 = require("argon2");
const db = require("./db");

const createArticle = (Title, Summary, Link, Published, Topic, callback) => {
  const query = `INSERT INTO articles (Title, Summary, Link, Published, Topic) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [Title, Summary, Link, Published, Topic], callback);
};

const getArticles = (sortBy, callback) => {
  let query = `SELECT * FROM articles`;
  if (sortBy === `newest`) {
    query += ` ORDER BY Published DESC`;
    
const getArticles = (sortBy, limit, callback) => {
  let query = "SELECT * FROM articles";
  if (sortBy === "newest") {
    query += " ORDER BY Published DESC";
  }
  if (limit) {
    query += ` LIMIT ${parseInt(limit, 10)}`;
  }
  db.query(query, callback);
};

module.exports = { createArticle, getArticles };
