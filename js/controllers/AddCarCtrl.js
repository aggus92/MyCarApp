'use strict';

mycarapp.controller('AddCarCtrl', ['$scope', '$rootScope', '$translate', '$stateParams', '$http', 'growl', function($scope, $rootScope, $translate, $stateParams, $http, growl) {
	
	$scope.isDefault = $stateParams.isFirstCar;
	
	$scope.saveCar = function() {
		$scope.car.is_default = $scope.isDefault;
		$scope.car.user_id = $rootScope.globals.currentUser.id;
		console.log($scope.car);
		$http.post("ajax/addCar.php", $scope.car).then(function (response) {
			console.log(response);
            if (response.status === 200) {
                growl.addSuccessMessage("NOTIFICATION_ADD_NEW_CAR");
            }
        });
    }
}]);
