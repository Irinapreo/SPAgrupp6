const express = require("express");
const argon2 = require("argon2");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.post("/add-article", articleController.addArticle);
router.get("/articles", articleController.getArticles);

module.exports = router;
