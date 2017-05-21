'use strict';

mycarapp.controller('CarEditCtrl', ['$scope', '$rootScope', '$translate', '$stateParams', function($scope, $rootScope, $translate, $stateParams) {
	
	$scope.car = $stateParams.carToEdit;

}]);