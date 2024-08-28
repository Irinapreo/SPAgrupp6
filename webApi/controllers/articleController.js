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
    const articles = await articleModel.getArticles(sortBy, limit); // Använder await för att hämta artiklar
    res.json(articles); // Returnera resultaten som JSON
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).send("Error fetching articles");
  }
};

module.exports = { addArticle, getArticles };
