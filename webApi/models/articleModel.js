const db = require("./db");

const createArticle = async (Title, Summary, Link, Published, Topic) => {
  const query = `INSERT INTO articles (Title, Summary, Link, Published, Topic) VALUES (?, ?, ?, ?, ?)`;
  return new Promise((resolve, reject) => {
    db.query(
      query,
      [Title, Summary, Link, Published, Topic],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const getArticles = async (sortBy, limit) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM articles";
    if (sortBy === "newest") {
      query += " ORDER BY Published DESC";
    }
    if (limit) {
      query += ` LIMIT ${parseInt(limit, 10)}`;
    }

    db.query(query, (error, results) => {
      if (error) {
        return reject(error); // Vid fel, avbryt och returnera felet.
      }
      resolve(results); // Annars returnera resultaten.
    });
  });
};

module.exports = { createArticle, getArticles };
