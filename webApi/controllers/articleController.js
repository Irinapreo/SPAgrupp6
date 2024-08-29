const db = require("../models/db");
const articleModel = require("../models/articleModel");

const addArticle = async (req, res) => {
  try {
    const { Title, Summary, Link, Published, Topic } = req.body;
    await articleModel.createArticle(Title, Summary, Link, Published, Topic);
    res.send("Ny artikel har lagts till.");
  } catch (err) {
    console.error("Error adding article:", err);
    return res.status(500).send("Error adding article");
  }
};

const getArticles = async (req, res) => {
  try {
    const sortBy = req.query.sortBy || "newest";
    const limit = req.query.limit || "";
    const topic = req.query.topic || "";
    let query = "SELECT * FROM articles";

    if (topic) {
      query += ` WHERE Topic = '${topic}'`;
    }

    // Korrekt hantering av sortering
    if (sortBy === "newest") {
      query += " ORDER BY Published DESC";
    } else if (sortBy === "oldest") {
      query += " ORDER BY Published ASC";
    }

    if (limit) {
      query += ` LIMIT ${parseInt(limit, 10)}`;
    }

    console.log("SQL Query:", query); // Debugging SQL query

    db.query(query, (error, results) => {
      if (error) {
        return res.status(500).send("Error fetching articles");
      }
      res.json(results);
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).send("Error fetching articles");
  }
};

module.exports = { addArticle, getArticles };
