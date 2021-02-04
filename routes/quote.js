var express = require('express');
var router = express.Router();
var request = require('request');
const { render } = require('..');
/* GET home page. */
router.get('/',function(req, res, next) {
    
  	request('https://kuzuluy.app/check?quote' , function(err,resx,body)
	{

		var js = JSON.parse(body);
		 res.render('quote' , {random_quote : js.quote });
	});
});


module.exports = router;
