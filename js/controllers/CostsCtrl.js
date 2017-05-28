/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('CostsCtrl', ['$scope', '$rootScope', '$translate', '$state', '$http', function($scope, $rootScope, $translate, $state, $http) {
	
	$scope.maxDate = new Date();
    $scope.maxDate.setDate($scope.maxDate.getDate());
    var dateEnd = new Date();
    var dateStart = new Date(dateEnd);
    dateStart.setDate(dateEnd.getDate() - 7);
	
	$scope.dates = {
        objectType: {type: 'COMMON_COST_PETROL', value: 'PETROL'},
        endDate: new Date(dateEnd),
        startDate: dateStart
    };
	
	$scope.objectTypes = [
        {type:'COMMON_COST_PETROL', value: 'PETROL'},
        {type:'COMMON_COST_OPERATING', value: 'OPERATING'},
        {type:'COMMON_COST_TECH_REVIEW', value: 'TECH'},
        {type:'COMMON_COST_REGISTRATION', value: 'REGISTRATION'},
        {type:'COMMON_COST_GENERAL', value: 'GENERAL'}
    ];

    $scope.search = function() {
        console.log($scope.dates);
        if ($scope.dates.objectType.value === 'GENERAL') {
            $http.get('ajax/getGeneralCosts.php', {
                params: {
                    carId: $rootScope.currentCar.id
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.records != undefined && response.data.records.length > 0) {
                    $scope.costsList = response.data.records;
                }
            });
        } else {
            $http.get('ajax/getCosts.php', {
                params: {
                    carId: $rootScope.currentCar.id,
                    type: $scope.dates.objectType.value,
                    startDate: $scope.dates.startDate,
                    endDate: $scope.dates.endDate
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.records != undefined && response.data.records.length > 0) {
                    $scope.costsList = response.data.records;
                }
            });
        }
    };

    $scope.search();
	
	$scope.addCost = function() {
		$state.go('costs.add');
	};
	
	$scope.open = function() {
        $scope.state = {
            open: true
        };
    };

    $scope.open2 = function() {
        $scope.state = {
            open2: true
        };
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1
    };

    $scope.state = {
        open: false
    };

    $scope.state = {
        open2: false
    };

    $scope.format = 'dd-MM-yyyy';
	
}]);