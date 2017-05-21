/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('CarListCtrl', ['$scope', '$rootScope', '$translate', '$state', 'growl', function($scope, $rootScope, $translate, $state, growl) {
	
	$scope.userCars = [];
	
	$scope.getCarList = function() {
		$http.get('ajax/getCars.php', {
			params: {
				userId: $rootScope.globals.currentUser.id
			}
		}).then(function (response) {
		});
	};
	
	$scope.switchCar = function(car) {
		
	};
	
	$scope.addNewCar = function() {
		var isFirstCar = $scope.userCars.length === 0;
		$state.go('car-list.add', {'isFirstCar': isFirstCar});
	}
}]);