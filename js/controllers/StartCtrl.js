/**
 * Created by aggus on 28.05.2017.
 */
'use strict';

mycarapp.controller('StartCtrl', ['$scope', '$rootScope', '$translate', '$http', '$state', function($scope, $rootScope, $translate, $http, $state) {

    $scope.registration = {};
    $scope.techReview = {};

    $scope.getRegistration = function () {
        $http.get('ajax/getRegistration.php', {
            params: {
                carId: $rootScope.currentCar.id
            }
        }).then(function (response) {
            console.log(response);
            if (response.data.records != undefined && response.data.records.length > 0) {
                $scope.registration = response.data.records;
            }
        });
    };
    $scope.getRegistration();

    $scope.getTechReview = function () {
        $http.get('ajax/getTechReview.php', {
            params: {
                carId: $rootScope.currentCar.id
            }
        }).then(function (response) {
            console.log(response);
            if (response.data.records != undefined && response.data.records.length > 0) {
                $scope.techReview = response.data.records;
            }
        });
    };
    $scope.getTechReview();

    $scope.saveRegistration = function() {
        $http.get('ajax/updateRegistration.php', {
            params: {
                carId: $rootScope.currentCar.id,
                registration_date: $scope.registration.registration_date,
                registration_odometer: $scope.registration.registration_odometer,
                plate_no: $scope.registration.plate_no
            }
        }).then(function (response) {
            console.log(response);
            if (response.data.records != undefined && response.data.records.length > 0) {
                $scope.registration = response.data.records;
            }
        });
    }
}]);
