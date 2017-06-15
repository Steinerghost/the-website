var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/index', function (req, res, next) {

	var templateArgs ={
	}

	res.render('index', templateArgs);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
	console.log("== Server listening on port", port);
});
