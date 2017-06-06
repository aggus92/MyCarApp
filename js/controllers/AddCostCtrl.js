/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('AddCostCtrl', ['$scope', '$rootScope', '$translate', '$state', '$stateParams', '$http', 'growl', function($scope, $rootScope, $translate, $state, $stateParams, $http, growl) {

	$scope.cost = {};
    $scope.petrol = {};

    $scope.objectTypes = [
        {type:'COMMON_COST_PETROL', value: 'PETROL'},
        {type:'COMMON_COST_OPERATING', value: 'OPERATING'},
        {type:'COMMON_COST_TECH_REVIEW', value: 'TECHREVIEW'},
        {type:'COMMON_COST_INSURANCE', value: 'INSURANCE'},
        {type:'COMMON_COST_GENERAL', value: 'GENERAL'}
    ];

    $scope.type = {
        costType: {type: 'COMMON_COST_PETROL', value: 'PETROL'}
    };

    $scope.fuelTypes = [
        {type:'COMMON_FUEL_BENZINE', value: 'BENZINE'},
        {type:'COMMON_FUEL_DIESEL', value: 'DIESEL'},
        {type:'COMMON_FUEL_LPG', value: 'LPG'}
    ];

    $scope.fuelType = {
        type: {type: 'COMMON_FUEL_BENZINE', value: 'BENZINE'}
    };
	
	$scope.saveCost = function() {
        if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $scope.cost.car_id = $rootScope.currentCar.id;
            $scope.cost.type = $scope.type.costType.value;
            console.log($scope.cost);
            $http.post("ajax/addCost.php", $scope.cost).then(function (response) {
                if (response.status === 200) {
                    growl.addSuccessMessage("NOTIFICATION_ADD_NEW_COST");
                }
            });
        }
	};

    $scope.savePetrol = function() {
        if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $scope.petrol.car_id = $rootScope.currentCar.id;
            $scope.petrol.fuelType = $scope.fuelType.type.value;
            $http.post("ajax/addPetrol.php", $scope.petrol).then(function (response) {
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

    $scope.format = 'yyyy-MM-dd';
}]);