/**
 * Created by aggus on 14.05.2017.
 */
'use strict';

mycarapp.controller('LoginCtrl', ['$scope', '$rootScope', '$translate', '$http', '$state', '$base64', '$cookies', function($scope, $rootScope, $translate, $http, $state, $base64, $cookies) {

    $scope.login = function(user) {
		$http.get('ajax/getUser.php', {
			params: {
				username: user.username,
				password: user.password
			}
		}).then(function (response) {
			if (response.data.records.length === 1) {
				var authdata = $base64.encode(response.data.records[0].username + ':' + response.data.records[0].username.password);
				$rootScope.globals = {
					currentUser: {
						username: response.data.records[0].username,
						firstName: response.data.records[0].firstName,
						lastName: response.data.records[0].lastName,
						id: response.data.records[0].id,
						authdata: authdata
					}
				};
				// set default auth header for http requests
				$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
 
				// store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
				var cookieExp = new Date();
				cookieExp.setDate(cookieExp.getDate() + 7);
				$cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
				$rootScope.getDefaultUserCar();
			}
		});
    }
}]);
