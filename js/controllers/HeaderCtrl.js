/**
 * Created by Agnieszka on 03.05.2017.
 */
'use strict';

mycarapp.controller('HeaderCtrl', ['$scope', '$rootScope', '$translate', '$cookies', '$location', function($scope, $rootScope, $translate, $cookies, $location) {

    $scope.switchLanguage = function(lang) {
        $translate.use(lang);
        $rootScope.language = lang;
    };
	
	$scope.logout = function() {
		$rootScope.globals = {};
		$cookies.remove('globals');
		$location.path('/login');
	}
}]);
