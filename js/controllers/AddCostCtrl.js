/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('AddCostCtrl', ['$scope', '$rootScope', '$translate', '$state', '$http', function($scope, $rootScope, $translate, $state, $http) {
	
	$scope.saveCost = function() {
		$http.post("ajax/addCost.php").then(function (response) {
			console.log(response);
        });
	}
}]);