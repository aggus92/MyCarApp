/**
 * Created by aggus on 14.05.2017.
 */
'use strict';

mycarapp.controller('RegisterCtrl', ['$scope', '$rootScope', '$translate', '$http', function($scope, $rootScope, $translate, $http) {

    $scope.register = function (user) {
        $http.post("ajax/addUser.php", user).then(function (response) {
                $scope.newUser = response.data.user;
                console.log(response.data.user);
        });
    }

}]);


