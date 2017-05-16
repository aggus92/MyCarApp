/**
 * Created by Agnieszka on 03.05.2017.
 */
'use strict';

mycarapp.controller('HeaderCtrl', ['$scope', '$rootScope', '$translate', function($scope, $rootScope, $translate) {

    $scope.switchLanguage = function(lang) {
        $translate.use(lang);
        $rootScope.language = lang;
    };
}]);
