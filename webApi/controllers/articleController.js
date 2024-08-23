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
  articleModel.getArticles(sortBy, (error, results) => {
    if (error) {
      console.error("Error fetching articles:", error);
      return res.status(500).send("Error fetching articles");
    }
    res.json(results);
  });
};

module.exports = { addArticle, getArticles };
