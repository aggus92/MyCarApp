//Created by Agnieszka on 03.05.2017.
'use strict';

mycarapp.config(function($stateProvider, $urlRouterProvider, $controllerProvider) {
    mycarapp.controller = $controllerProvider.register;

    var usedControllers = [];

    function loadScript(path) {
        if (usedControllers.indexOf(path) === -1) {
            usedControllers.push(path);
            var result = $.Deferred(),
                script = document.createElement("script");
            script.async = "async";
            script.type = "text/javascript";
            script.src = path;
            script.onload = script.onreadystatechange = function (_, isAbort) {
                if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                    if (isAbort)
                        result.reject();
                    else
                        result.resolve();
                }
            };
            script.onerror = function () { result.reject(); };
            document.querySelector("head").appendChild(script);
            return result.promise();
        }
    }

    function loader(arrayName){
        return {
            load: function($q){
                var deferred = $q.defer(),
                    map = arrayName.map(function(name) {
                        return loadScript('js/controllers/'+name+".js");
                    });

                $q.all(map).then(function(r){
                    deferred.resolve();
                });

                return deferred.promise;
            }
        };
    }

    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/startTemplate.html'
        })
        .state('reports', {
            //params: {'reports': null},
            url: '/reports',
            templateUrl: 'views/reportsTemplate.html',
            controller: 'ReportsCtrl',
            resolve: loader(['ReportsCtrl'])
        })
        .state('statistics', {
            url: '/statistics',
            templateUrl: 'views/statisticsTemplate.html',
            controller: 'StatisticsCtrl',
            resolve: loader(['StatisticsCtrl'])
        })
        .state('reminders', {
            url: '/reminders',
            templateUrl: 'views/remindersTemplate.html',
            controller: 'RemindersCtrl',
            resolve: loader(['RemindersCtrl'])
        })
});
