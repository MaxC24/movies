

var app = angular.module('newMovies', ['ui.bootstrap'])
.controller('moviesListCtrl', function($scope, MoviesFactory, $log){
	MoviesFactory.getNowPlayingMovies()
	.then(function(movies) {
		$scope.movies = MoviesFactory.fixPosterPath(movies);
	})
	.catch($log);

	$scope.pageChanged = function() {
		var pageNumber = $scope.currentPage;
		MoviesFactory.getNowPlayingMovies(pageNumber)
		.then(function(movies) {
			$scope.movies = MoviesFactory.fixPosterPath(movies);
		})
		.catch($log);
	}

})
.factory('MoviesFactory', function($http){
	return {
		getNowPlayingMovies: function(page) { 
			page = page || 1;
			return $http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=' + page)
			.then(function(res) {
				return res.data;
			});
		},
		fixPosterPath: function(movies) {
			var posterPath = "http://image.tmdb.org/t/p/w342";
			movies.results.forEach(function(movie){
				if(!movie.poster_path) movie.poster_path = "http://i.kinja-img.com/gawker-media/image/upload/s---zKMfGT0--/c_scale,fl_progressive,q_80,w_800/19fk32sw3nt1wjpg.jpg";
				else movie.poster_path = posterPath + movie.poster_path;
			});
			return movies;
		}
	};
});