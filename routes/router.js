var express = require('express');
var router = express.Router();
var Note = require('../models/note');


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

/*************   CREATE Routes  *************/
router.post('/create', function(req, res) {
	console.log(req.body);
	var formInput = req.body;

	Note.sync({force: true}).then(function() {
		Note.create(formInput);
		res.redirect('/');
	});

});

module.exports = router;



