const express = require('express');
const homeController = require('../app/controllers/HomeController');

const router = express.Router();

router.get('/', homeController.getHome);

module.exports = router;

