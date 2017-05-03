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

    $urlRouterProvider.otherwise('start');

    $stateProvider
        .state('start', {
            url: '/start',
            templateUrl: 'views/startTemplate.html',
            ncyBreadcrumb: {
                label: 'BREADCRUMB_START'
            }
        })
});
