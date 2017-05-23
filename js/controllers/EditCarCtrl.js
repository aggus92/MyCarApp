'use strict';

mycarapp.controller('EditCarCtrl', ['$scope', '$rootScope', '$translate', '$stateParams', function($scope, $rootScope, $translate, $stateParams) {
	
	$scope.car = $stateParams.carToEdit;
	
	$scope.saveCar = function() {
		console.log($scope.car);
		$http.post("ajax/updateCar.php", {
			params: {
				id: $scope.car.id,
				is_default: $scope.car.is_default,
				model: $scope.car.model,
				year: $scope.car.year,
				color: $scope.car.color
			}
		}).then(function (response) {
			console.log(response);
        });
    }

}]);