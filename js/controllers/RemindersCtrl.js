/**
 * Created by Agnieszka on 04.05.2017.
 */
'use strict';

mycarapp.controller('RemindersCtrl', ['$scope', '$rootScope', '$stateParams', '$translate', function($scope, $rootScope, $stateParams, $translate) {

    //$scope.costToRemind = $stateParams.costToRemind;

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
                    var date = response.data.record[0].date;
                    var daysToEnd = Math.round((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
                    $scope.remindersList.push({
                        type: 'COMMON_COST_TECH_REVIEW',
                        date: response.data.record[0].date,
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
                    var date = response.data.record[0].date;
                    var daysToEnd = Math.round((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
                    $scope.remindersList.push({
                        type: 'COMMON_COST_INSURANCE',
                        date: response.data.record[0].date,
                        daysToEnd: daysToEnd
                    })
                }
            });
        }
    };
    $scope.getInsurance();

}]);