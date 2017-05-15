/**
 * Created by aggus on 14.05.2017.
 */
'use strict';

mycarapp.controller('LoginCtrl', ['$scope', '$rootScope', '$translate', '$http', function($scope, $rootScope, $translate, $http) {

    $scope.login = function(user) {
        $http.get("ajax/getUser.php", user).then(function (response) {
            console.log(response);
        });
    }
}]);