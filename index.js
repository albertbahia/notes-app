var express = require('express');
var app = express();
var router = require('./routes/router');

app.use('/', router);

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
	console.log("Listening on PORT: " + PORT);
})