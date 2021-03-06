/**
 * Created by Agnieszka on 04.05.2017.
 */
'use strict';

mycarapp.controller('ReportsCtrl', ['$scope', '$rootScope', '$translate', '$http', 'reportsFactory', function($scope, $rootScope, $translate, $http, reportsFactory) {

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
        {type:'COMMON_COST_TECH_REVIEW', value: 'TECHREVIEW'},
        {type:'COMMON_COST_INSURANCE', value: 'INSURANCE'},
        {type:'COMMON_COST_GENERAL', value: 'GENERAL'}
    ];

    $scope.downloadReport = function() {
        if ($scope.dates.objectType.value === 'PETROL' && $rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $http.get('ajax/getPetrolList.php', {
                params: {
                    carId: $rootScope.currentCar.id,
                    startDate: $scope.dates.startDate,
                    endDate: $scope.dates.endDate
                }
            }).then(function (response) {
                if (response.data.records != undefined && response.data.records.length > 0) {
                    $scope.downloadCSV(response.data.records);
                }
            });
        } else {
            if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
                $http.get('ajax/getCosts.php', {
                    params: {
                        carId: $rootScope.currentCar.id,
                        type: $scope.dates.objectType.value,
                        startDate: $scope.dates.startDate,
                        endDate: $scope.dates.endDate
                    }
                }).then(function (response) {
                    if (response.data.records != undefined && response.data.records.length > 0) {
                        $scope.downloadCSV(response.data.records);
                    }
                });
            }
        }
    };

    $scope.downloadCSV = function(records) {
        reportsFactory.downloadCSV(records);
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

    $scope.format = 'yyyy-MM-dd';
    
}]);

