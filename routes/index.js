

var router = require('express').Router();
var http = require('http');
var secrets = require('../secrets');
var apiUrl = 'http://api.themoviedb.org/3/movie/now_playing?api_key=';

router.get('/movies/:page', function(req, res, next){
	var page = req.params.page;
	http.get(apiUrl + secrets.theMovieDatabaseApiKey + '&page=' + page, function(response){
		var body = '';
		response.on('data', function(chunk){
			body += chunk;
		});
		response.on('end', function(){
			res.send(body);
		});
	});
});

module.exports = router;