/**
 * Created by aggus on 28.05.2017.
 */
'use strict';

mycarapp.controller('StartCtrl', ['$scope', '$rootScope', '$translate', '$http', '$state', 'growl', function($scope, $rootScope, $translate, $http, $state, growl) {

    $scope.registration = {};
    $scope.techReview = {};
    $scope.isRegistration = false;

    $scope.getRegistration = function () {
        $http.get('ajax/getRegistration.php', {
            params: {
                carId: $rootScope.currentCar.id
            }
        }).then(function (response) {
            console.log(response);
            if (response.data.records != undefined && response.data.records.length > 0) {
                $scope.registration = response.data.records;
                $scope.isRegistration = true;
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

}]);
