/**
 * Created by aggus on 14.05.2017.
 */
'use strict';

mycarapp.controller('RegisterCtrl', ['$scope', '$rootScope', '$translate', '$http', 'growl', '$state', function($scope, $rootScope, $translate, $http, growl, $state) {

    $scope.register = function (user) {
        $http.post("ajax/addUser.php", user).then(function (response) {
            if (response.status === 200) {
                growl.addSuccessMessage("NOTIFICATION_ADD_NEW_USER");
                $state.go('login');
            }
        });
    }
}]);

