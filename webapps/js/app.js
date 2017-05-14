'use strict';
/**
 * Created by Agnieszka on 30.04.2017.
 */

var mycarapp = angular.module('mycarapp', [
    'ngRoute',
    'ncy-angular-breadcrumb',
    'pascalprecht.translate',
    'ngCookies'
]);

mycarapp.config(function($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('pl');
    $translateProvider.useStaticFilesLoader({
        prefix: 'js/languages/',
        suffix: '.json'
    });
});