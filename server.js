var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {

	var templateArgs ={
	}

	res.render('home', templateArgs);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res){
	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function() {
	console.log("== Server listening on port", port);
});

