const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.post("/add-article", articleController.addArticle);
router.get("/articles", articleController.getArticles);

module.exports = router;
