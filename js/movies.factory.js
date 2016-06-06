

app.factory('MoviesFactory', function($http){
	var theBestMoviePoster = "http://i.kinja-img.com/gawker-media/image/upload/s---zKMfGT0--/c_scale,fl_progressive,q_80,w_800/19fk32sw3nt1wjpg.jpg";
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
				movie.backdrop_path = posterPath + movie.backdrop_path;
			});
			return movies;
		}
	};
});