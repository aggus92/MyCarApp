/**
 * Created by aggus on 28.05.2017.
 */
'use strict';

mycarapp.controller('StartCtrl', ['$scope', '$rootScope', '$translate', '$http', '$state', 'growl', function($scope, $rootScope, $translate, $http, $state, growl) {

    $scope.registration = {};
    $scope.techReview = {};
    $scope.isRegistration = false;

    $scope.getRegistration = function () {
        if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $http.get('ajax/getRegistration.php', {
                params: {
                    carId: $rootScope.currentCar.id
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.records != undefined && response.data.records.length > 0) {
                    var date = response.data.records[0].registration_date;
                    $scope.registration = response.data.records[0];
                    $scope.registration.registration_date = new Date(date);
                    $scope.registration.registration_odometer = parseInt($scope.registration.registration_odometer, 10);
                    $scope.isRegistration = true;
                }
            });
        }
    };
    $scope.getRegistration();

    $scope.getTechReview = function () {
        if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $http.get('ajax/getTechReview.php', {
                params: {
                    carId: $rootScope.currentCar.id
                }
            }).then(function (response) {
                console.log(response);
                if (response.data.records != undefined && response.data.records.length > 0) {
                    var date = response.data.records[0].date;
                    $scope.techReview = response.data.records[0];
                    $scope.techReview.date = new Date(date);
                }
            });
        }
    };
    $scope.getTechReview();

    $scope.saveRegistration = function() {
        if ($scope.isRegistration) {
            $http.get('ajax/updateRegistration.php', {
                params: {
                    carId: $rootScope.currentCar.id,
                    registration_date: $scope.registration.registration_date,
                    registration_odometer: $scope.registration.registration_odometer,
                    plate_no: $scope.registration.plate_no
                }
            }).then(function (response) {
                $scope.afterSaveRegistration(response);
            });
        } else {
            $scope.registration.car_id = $rootScope.currentCar.id;
            $http.get('ajax/addRegistration.php', $scope.registration).then(function (response) {
                $scope.afterSaveRegistration(response);
            });
        }
    };

    $scope.afterSaveRegistration = function (response) {
        if (response.status === 200) {
            growl.addSuccessMessage("NOTIFICATION_UPDATE");
            $scope.getRegistration();
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
