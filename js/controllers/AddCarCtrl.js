'use strict';

mycarapp.controller('AddCarCtrl', ['$scope', '$rootScope', '$translate','$stateParams', '$http', function($scope, $rootScope, $translate, $stateParams, $http) {
	
	$scope.isDefault = $stateParams.isFirstCar;
	
	$scope.saveCar = function() {
		$scope.car.is_default = $scope.isDefault;
		$scope.car.user_id = $rootScope.globals.currentUser.id;
		console.log($scope.car);
		$http.post("ajax/addCar.php", $scope.car).then(function (response) {
			console.log(response);
        });
    }
}]);
