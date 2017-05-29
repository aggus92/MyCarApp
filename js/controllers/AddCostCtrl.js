/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('AddCostCtrl', ['$scope', '$rootScope', '$translate', '$state', '$stateParams', '$http', 'growl', function($scope, $rootScope, $translate, $state, $stateParams, $http, growl) {

    $scope.registration = {};
	$scope.operatingCost = {
        odometer: 1,
        total_cost: 1
    };

    $scope.objectTypes = [
        {type:'COMMON_COST_PETROL', value: 'PETROL'},
        {type:'COMMON_COST_OPERATING', value: 'OPERATING'},
        {type:'COMMON_COST_TECH_REVIEW', value: 'TECHREVIEW'},
        {type:'COMMON_COST_REGISTRATION', value: 'REGISTRATION'},
        {type:'COMMON_COST_GENERAL', value: 'GENERAL'}
    ];

    $scope.type = {
        costType: {type: 'COMMON_COST_GENERAL', value: 'GENERAL'}
    };
	
	$scope.saveOperatingCost = function() {
        $scope.operatingCost.car_id = $rootScope.currentCar.id;
        $scope.operatingCost.type = $scope.type.costType.value;
        $http.post("ajax/addCost.php", $scope.operatingCost).then(function (response) {
            console.log(response);
            if (response.status === 200) {
                growl.addSuccessMessage("NOTIFICATION_ADD_NEW_COST");
            }
        });
	};

	$scope.saveRegistration = function() {
        $scope.registration.car_id = $rootScope.currentCar.id;
        $http.get('ajax/addRegistration.php', $scope.registration).then(function (response) {
            if (response.status === 200) {
                growl.addSuccessMessage("NOTIFICATION_UPDATE");
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