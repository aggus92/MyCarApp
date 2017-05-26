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

    // $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/loginTemplate.html',
            controller: 'LoginCtrl',
            resolve: loader(['LoginCtrl'])
        })
        .state('register', {
            url: '/register',
            templateUrl: 'views/registerTemplate.html',
            controller: 'RegisterCtrl',
            resolve: loader(['RegisterCtrl'])
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/startTemplate.html'
        })
        .state('costs', {
            url: '/costs',
            templateUrl: 'views/costsTemplate.html',
            controller: 'CostsCtrl',
            resolve: loader(['CostsCtrl'])
        })
		.state('costs.add', {
            url: '/add',
			views: {
                '@': {
                    templateUrl: 'views/addCostTpl.html',
                    controller: 'AddCostCtrl'
                }
            },
            resolve: loader(['AddCostCtrl'])
        })
        .state('reports', {
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
        .state('user-edit', {
            url: '/user-edit',
            templateUrl: 'views/userListTpl.html',
            controller: 'UserListCtrl',
            resolve: loader(['UserListCtrl'])
        })
        .state('car-list', {
            url: '/car-list',
            templateUrl: 'views/carListTpl.html',
            controller: 'CarListCtrl',
            resolve: loader(['CarListCtrl'])
        })
		.state('car-list.edit', {
			params: {'carToEdit': null},
            url: '/edit',
			views: {
                '@': {
                    templateUrl: 'views/editCarTpl.html',
                    controller: 'EditCarCtrl'
                }
            },
            resolve: loader(['EditCarCtrl']),
            onEnter: function($state, $stateParams) {
                if ($stateParams.carToEdit === null) {
                    $state.go('car-list');
                };
            }
        })
		.state('car-list.add', {
			params: {'isFirstCar': null},
            url: '/add',
			views: {
                '@': {
                    templateUrl: 'views/addCarTpl.html',
                    controller: 'AddCarCtrl'
                }
            },
            resolve: loader(['AddCarCtrl']),
            onEnter: function($state, $stateParams) {
                if ($stateParams.isFirstCar === null) {
                    $state.go('car-list');
                };
            }
        })
});
