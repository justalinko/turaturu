var express = require('express');
var router = express.Router();
var urlShort = require("node-url-shortener");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('uler', {urlShort : false})
});

router.post('/post' , function(req,res,next){

		var uri = req.body.url;
		urlShort.short(uri, function(err,url)
		{
			res.render('uler', {urlShort: url , LongUrl : uri});
		});

});

module.exports = router;
