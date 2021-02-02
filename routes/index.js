var express = require('express');
var router = express.Router();
var ig = require('instagram-scraping')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index')
});

module.exports = router;
