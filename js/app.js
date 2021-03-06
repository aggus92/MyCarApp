'use strict';
/**
 * Created by Agnieszka on 30.04.2017.
 */

var mycarapp = angular.module('mycarapp', [
    'ngRoute',
    'ncy-angular-breadcrumb',
    'pascalprecht.translate',
    'ngCookies',
    'angular-growl',
	'base64',
    'ui.bootstrap',
    'ui.select'
]);

mycarapp.config(function(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
});

mycarapp.config(['growlProvider', function(growlProvider) {
    growlProvider.globalTimeToLive(3000);
    growlProvider.onlyUniqueMessages(false);
}]);

mycarapp.config(function($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('pl');
    $translateProvider.useStaticFilesLoader({
        prefix: 'js/languages/',
        suffix: '.json'
    });
});