/**
 * Created by Agnieszka on 03.05.2017.
 */
'use strict';

mycarapp.run(['$rootScope','$translate', function($rootScope, $translate) {

    var setPreferredLanguage = function(lang) {
        if (lang !== null && lang !== undefined) {
            $translate.use(lang);
        }
    };
    setPreferredLanguage('pl');

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

    $rootScope.getDefaultUser = function() {
        
    }

}]);