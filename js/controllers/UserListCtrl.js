/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('UserListCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
	$scope.user = $rootScope.globals.currentUser;
	
	$scope.save = function() {
		$http.get('ajax/updateUser.php', {
			params: {
				idUser: $scope.user.id,
				firstName: $scope.user.firstName,
				lastName: $scope.user.lastName
			}
		}).then(function (response) {
		});
	}
}]);