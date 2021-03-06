var express = require('express');
var app = express();
var router = require('./routes/router');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var models = require('./models')

/********************************************/
/**********    Template Engine     **********/
/********************************************/
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/********************************************/
/**********      Node PORT         **********/
/********************************************/
var PORT = process.env.PORT || 8080;

/********************************************/
/****** Middleware to Encode Form Data ******/
/********************************************/
app.use(bodyParser.urlencoded({ extended: false }));

/********************************************/
/**********        Router          **********/
/********************************************/
app.use('/', router);

models.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on PORT: " + PORT);
	});
})