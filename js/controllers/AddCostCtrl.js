/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('AddCostCtrl', ['$scope', '$rootScope', '$translate', '$state', '$stateParams', '$http', 'growl', function($scope, $rootScope, $translate, $state, $stateParams, $http, growl) {

	$scope.cost = {
        odometer: 1,
        total_cost: 1
    };

    $scope.objectTypes = [
        {type:'COMMON_COST_PETROL', value: 'PETROL'},
        {type:'COMMON_COST_OPERATING', value: 'OPERATING'},
        {type:'COMMON_COST_TECH_REVIEW', value: 'TECHREVIEW'},
        {type:'COMMON_COST_INSURANCE', value: 'INSURANCE'},
        {type:'COMMON_COST_GENERAL', value: 'GENERAL'}
    ];

    $scope.type = {
        costType: {type: 'COMMON_COST_GENERAL', value: 'GENERAL'}
    };
	
	$scope.saveCost = function() {
        $scope.cost.car_id = $rootScope.currentCar.id;
        $scope.cost.type = $scope.type.costType.value;
        $http.post("ajax/addCost.php", $scope.cost).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                growl.addSuccessMessage("NOTIFICATION_ADD_NEW_COST");
            }
        });
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