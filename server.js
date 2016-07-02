// I decided to create a server to avoid using the api key in the front-end and to serve
// the modal template statically as it wouldn't work in chrome.

var express = require('express');
var app = express();
var path = require('path');
var port = Number(process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'browser')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/api', require('./routes'));

app.get('/*', function(req, res, next){
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(){ console.log('listening on port ', port); });