const db = require("../models/db");
const articleModel = require("../models/articleModel");

const addArticle = (req, res) => {
  const { Title, Summary, Link, Published, Topic } = req.body;
  articleModel.createArticle(Title, Summary, Link, Published, Topic, (err) => {
    if (err) {
      console.error("Error adding article:", err);
      return res.status(500).send("Error adding article");
    }
    res.send("Ny artikel har lagts till.");
  });
};

const getArticles = (req, res) => {
  const sortBy = req.query.sortBy || "newest";
  const searchString = req.query.searchString || "";

  // Uppdaterad SQL-fråga med LIKE för att hantera sökningar
  let query = "SELECT * FROM articles WHERE Title LIKE ?";
  if (sortBy === "newest") {
    query += " ORDER BY Published DESC";
  }

  // Använd % för att matcha alla titlar som innehåller searchString
  db.query(query, [`%${searchString}%`], (error, results) => {
    if (error) {
      console.error("Error fetching articles:", error);
      return res.status(500).send("Error fetching articles");
    }
    res.json(results);
  });
};

module.exports = { addArticle, getArticles };
