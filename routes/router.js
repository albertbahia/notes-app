var express = require('express');
var router = express.Router();


/********************************************/
/******    Middleware to Log Time     *******/
/********************************************/
router.use(function timeLog(req, res, next) {
	console.log('Time: ' + Date.now());
	next();
});


/********************************************/
/**************    Routes    ****************/
/********************************************/

/*************    Main  Page   **************/
router.get('/', function(req, res) {
	res.render('index');
});

module.exports = router;



