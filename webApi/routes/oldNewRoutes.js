const express = require('express');
const router = express.Router();
const articleController = require('../controllers/oldNewSort');

router.get('/', articleController.getArticles);

module.exports = router;