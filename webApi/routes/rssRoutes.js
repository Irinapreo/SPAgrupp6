const express = require("express");
const router = express.Router();
const rssController = require("../controllers/rssController");

router.get("/fetch-and-store-rss", rssController.fetchAndStoreRSS);

module.exports = router;
