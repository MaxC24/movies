

app.controller('moviesListCtrl', function($scope, MoviesFactory, $log, $uibModal){

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
	};

	$scope.openMovieModal = function(movie){
		var movieModalInstance = $uibModal.open({
			templateUrl: "modal.template.html",
			controller: 'modalCtrl',
			resolve: {
				movie: function() {
					return movie;
				},
				movies: function() {
					return $scope.movies;
				}
			}
		});
	};

});