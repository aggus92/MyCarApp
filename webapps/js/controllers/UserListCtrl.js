/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('UserListCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $scope.getAllUsers = function() {
        $http.get("ajax/getUsers.php").then(function (response) {
            $scope.users = response.data.records;
            console.log(response.data.records);
        });

    };

    $scope.getAllUsers();

}]);