var express = require('express');
var app = express();
var path = require('path');
var port = 1337;
var morgan = require('morgan');

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'template')));

app.use(morgan('dev'));

app.use('/api', require('./routes'));

app.get('/*', function(req, res, next){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(){ console.log('listening on port ', port)});