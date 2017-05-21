'use strict';

mycarapp.controller('AddCarCtrl', ['$scope', '$rootScope', '$translate','$stateParams', function($scope, $rootScope, $translate, $stateParams) {
	
	$scope.isDefault = $stateParams.isFirstCar;
	
	$scope.saveCar = function() {
		$scope.car.is_default = $scope.isDefault;
		$scope.car.id_user = $rootScope.globals.currentUser.id;
		$http.post("ajax/addCar.php", $scope.car).then(function (response) {
        });
    }
}]);