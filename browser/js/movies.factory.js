

app.factory('MoviesFactory', function($http){
	var theBestMoviePoster = "http://posterwire.com/wp-content/uploads/empire_strikes_back_style_a.jpg";
	return {
		getNowPlayingMovies: function(page) { 
			page = page || 1;
			return $http.get('/api/movies/' + page)
			.then(function(res) {
				return res.data;
			});
		},
		fixPosterPath: function(movies) {
			var posterPath = "http://image.tmdb.org/t/p/w342";
			movies.results.forEach(function(movie){
				if(!movie.poster_path) movie.poster_path = theBestMoviePoster;
				else movie.poster_path = posterPath + movie.poster_path;
			});
			return movies;
		}
	};
});