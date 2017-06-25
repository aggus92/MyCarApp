/**
 * Created by Agnieszka on 04.05.2017.
 */
'use strict';

mycarapp.controller('RemindersCtrl', ['$scope', '$rootScope', '$stateParams', '$translate', '$http', function($scope, $rootScope, $stateParams, $translate, $http) {

    $scope.remindersList = [];

    $scope.getTechReview = function () {
        if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $http.get('ajax/getTechReview.php', {
                params: {
                    carId: $rootScope.currentCar.id
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.records != undefined && response.data.records.length > 0) {
                    var currentDate = new Date();
                    var date = new Date(response.data.records[0].date);
                    var daysToEnd = 365 - (Math.round((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)));
					var endDate = new Date();
                    endDate.setYear(date.getFullYear() + 1);
                    $scope.remindersList.push({
                        type: 'COMMON_COST_TECH_REVIEW',
                        date: response.data.records[0].date,
                        endDate: endDate,
                        daysToEnd: daysToEnd
                    })
                }
            });
        }
    };
    $scope.getTechReview();

    $scope.getInsurance = function () {
        if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $http.get('ajax/getInsurance.php', {
                params: {
                    carId: $rootScope.currentCar.id
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.records != undefined && response.data.records.length > 0) {
                    var currentDate = new Date();
                    var date = new Date(response.data.records[0].date);
                    var daysToEnd = 365 - (Math.round((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)));
					var endDate = new Date();
                    endDate.setYear(date.getFullYear() + 1);
                    $scope.remindersList.push({
                        type: 'COMMON_COST_INSURANCE',
                        date: response.data.records[0].date,
                        endDate: endDate,
                        daysToEnd: daysToEnd
                    })
                }
            });
        }
    };
    $scope.getInsurance();

}]);