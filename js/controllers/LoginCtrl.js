/**
 * Created by aggus on 14.05.2017.
 */
'use strict';

mycarapp.controller('LoginCtrl', ['$scope', '$rootScope', '$translate', '$http', '$state', function($scope, $rootScope, $translate, $http, $state) {

    $scope.login = function(user) {
		$http.get('ajax/getUser.php', {
			params: {
				username: user.username,
				password: user.password
			}
		}).then(function (response) {
			if (response.data.records.length === 1) {
				$rootScope.globals = {
					currentUser: {
						username: response.data.records[0].username,
						firstName: response.data.records[0].firstName,
						lastName: response.data.records[0].lastName,
						id: response.data.records[0].id
					}
				};
				$rootScope.getDefaultUserCar();
				$state.go('home');
			}
		});
    }
}]);