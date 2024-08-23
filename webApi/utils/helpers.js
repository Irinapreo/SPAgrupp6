const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sys23m",
  database: "newssite",
});

function insertPost(title, summary, link, published, topic) {
  const sql = `
    INSERT INTO articles (Title, Summary, Link, Published, Topic)
    VALUES (?, ?, ?, ?, ?);
  `;
  return new Promise((resolve, reject) => {
    db.query(sql, [title, summary, link, published, topic], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = { insertPost };
