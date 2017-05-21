/**
 * Created by Agnieszka on 03.05.2017.
 */
'use strict';

mycarapp.run(['$rootScope', '$translate', '$cookieStore', '$http', '$location', function($rootScope, $translate, $cookieStore, $http, $location) {

    $rootScope.globals = $cookieStore.get('globals') || {};
	
	$rootScope.currentCar = null;

    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    };

    var setPreferredLanguage = function(lang) {
        if (lang !== null && lang !== undefined) {
            $translate.use(lang);
        }
    };
    setPreferredLanguage('pl');
	
	$rootScope.getDefaultUserCar = function() {
		$http.get('ajax/getDefaultCar.php', {
			params: {
				userId: $rootScope.globals.currentUser.id
			}
		}).then(function (response) {
			if (response.data.records.length === 1) {
				$rootScope.currentCar = {
					user_id: response.data.records[0].user_id,
					is_default: response.data.records[0].is_default,
					model: response.data.records[0].model,
					color: response.data.records[0].color,
					year: response.data.records[0].year,
					id: response.data.records[0].id
					
				};
				$rootScope.getDefaultUserCar();
				$state.go('home');
			}
		});
		
	};

    $rootScope.log = function(log) {
        if (typeof log === 'object') {

            switch (log.level) {
                case 'ERROR':
                    console.error(log.message, ':', log.data);
                    break;
                case 'WARN':
                    console.warn(log.message, ':', log.data);
                    break;
            };

            switch (log.level) {
                case 'INFO':
                    console.info(log.message, ':', log.data);
                    break;
                case 'DEBUG':
                    console.log(log.message, ':', log.data);
                    break;
                case 'TRACE':
                    console.trace();
                    break;
            };
        }
    };

    $rootScope.backFromButton = false;

    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
        $rootScope.log({ 'level': 'INFO', 'message': 'ROUTER state changed', 'data': { 'state': { 'previous': from.name, 'current': to.name, 'toParams': toParams, 'fromParams': fromParams } } });
        if (!$rootScope.backFromButton) {
            $rootScope.moveToPostion = 0;
        }
        $rootScope.previousState = from.name;
        $rootScope.previousParams = fromParams;
        $rootScope.currentState = to.name;
    });

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });


}]);
