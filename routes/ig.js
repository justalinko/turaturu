var express = require('express');
var router = express.Router();
var ig = require('instagram-scraping');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    ig.scrapeUserPage('xalinko').then(result => {
        res.json(result)
    });
});

router.get('/tag/:tag' , function(req, res, next){
    ig.scrapeTag(req.params.tag).then(result => {
       res.json(result)
    });
});


module.exports = router;
