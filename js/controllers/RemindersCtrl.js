/**
 * Created by Agnieszka on 04.05.2017.
 */
'use strict';

mycarapp.controller('RemindersCtrl', ['$scope', '$rootScope', '$stateParams', '$translate', function($scope, $rootScope, $stateParams, $translate) {

    //$scope.costToRemind = $stateParams.costToRemind;

    $scope.getTechReview = function () {
        if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $http.get('ajax/getTechReview.php', {
                params: {
                    carId: $rootScope.currentCar.id
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.records != undefined && response.data.records.length > 0) {

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

                }
            });
        }
    };
    $scope.getInsurance();

}]);