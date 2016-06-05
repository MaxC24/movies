

var app = angular.module('newMovies', [])
.controller('moviesListCtrl', function($scope, MoviesFactory, $log){
	MoviesFactory.getNowPlayingMovies()
	.then(function(movies) {
		console.log(movies);
	})
	.catch($log);
})
.factory('MoviesFactory', function($http){
	return {
		getNowPlayingMovies: function() { 
			return $http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c')
			.then(function(res) {
				return res.data;
			});
		}
	};
});