'use strict';

mycarapp.controller('CarEditCtrl', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate) {
	
	$scope.car = $stateParams.carToEdit;

}]);