var express = require('express');
var app = express();
var router = require('./routes/router');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');


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

app.listen(PORT, function() {
	console.log("Listening on PORT: " + PORT);
})