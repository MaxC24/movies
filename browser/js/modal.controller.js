app.controller('modalCtrl', function($scope, movie, movies, $uibModalInstance){
	$scope.movie = movie;
	
	$scope.closeModal = function(){
		$uibModalInstance.close();
	};

	$scope.toNextMovie = function(){
		var movieArr = movies.results;
		for(var i = 0; i < movieArr.length; i++){
			if(!movieArr[i+1]){
				$scope.closeModal();
				break;
			} else if(movieArr[i].id === $scope.movie.id){
				$scope.movie = movieArr[i+1];
				break;
			} 		
		}
	};
});