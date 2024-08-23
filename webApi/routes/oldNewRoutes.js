const express = require('express');
const router = express.Router();
const articleController = require('../models/oldNewSort');

router.get('/', articleController.getArticles);

module.exports = router;