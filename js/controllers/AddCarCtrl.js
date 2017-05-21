'use strict';

mycarapp.controller('AddCarCtrl', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate) {
	
	$scope.isDefault = $stateParams.isFirstCar;
	
	$scope.saveCar = function() {
		$scope.car.is_default = $scope.isDefault;
		$scope.car.id_user = $rootScope.globals.currentUser.id;
		$http.post("ajax/addCar.php", $scope.car).then(function (response) {
        });
    }
}]);