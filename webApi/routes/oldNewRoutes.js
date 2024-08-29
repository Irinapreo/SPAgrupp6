const express = require("express");
const router = express.Router();
const articleController = require("../models/oldNewSort");

router.get("/", async (req, res) => {
  try {
    // Anropar den asynkrona getArticles-funktionen
    await articleController.getArticles(req, res);
  } catch (error) {
    console.error("Error in route handler:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
