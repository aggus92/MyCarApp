/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('AddCostCtrl', ['$scope', '$rootScope', '$translate', '$state', '$stateParams', '$http', 'growl', function($scope, $rootScope, $translate, $state, $stateParams, $http, growl) {

	$scope.saveCost = function() {
		if ($scope.costTypes === 'operatingCosts') {
            $http.post("ajax/addCost.php").then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    growl.addSuccessMessage("NOTIFICATION_ADD_NEW_COST");
                }
            });
		} else {
		    $scope.generalCost.car_id = $rootScope.currentCar.id;
            $http.post("ajax/addGeneralCost.php", $scope.generalCost).then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    growl.addSuccessMessage("NOTIFICATION_ADD_NEW_COST");
                }
            });
		}
	};

    $scope.open = function() {
        $scope.state = {
            open: true
        };
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1
    };

    $scope.state = {
        open: false
    };

    $scope.format = 'dd-MM-yyyy';
}]);