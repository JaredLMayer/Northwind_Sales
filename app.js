var express = require('express');
var app = express();
var db = require('./models');
var router = require('./routes');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.join(__dirname, '/node_modules/angular')));
app.use('/api', router);

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.listen(3000, function(){
	console.log("listening on port 3000");
});

module.exports = app; 