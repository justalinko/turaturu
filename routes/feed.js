var express = require('express');
var router = express.Router();
var ig = require('instagram-scraping');
const { render } = require('..');
/* GET home page. */
router.get('/',async function(req, res, next) {
    
    var result = await ig.scrapeUserPage('xalinko');

    res.render('feed',{dataig:JSON.stringify(result)});
});

router.get('/tag/:tag' ,async function(req, res, next){
   var result= await ig.scrapeTag(req.params.tag);

    res.render('feed' , {dataig : JSON.stringify(result)});

});

router.post('/search' , function(req,res,next){
    var tags = req.body.tag;
    res.redirect(`/feed/tag/${tags}`);
});
module.exports = router;
