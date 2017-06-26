/**
 * Created by Agnieszka on 04.05.2017.
 */
'use strict';

mycarapp.controller('StatisticsCtrl', ['$scope', '$rootScope', '$translate', '$filter', '$http', function($scope, $rootScope, $translate, $filter, $http) {

    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    $scope.statData = [];

    var startDate = new Date();
    var start = new Date(startDate);
    var end = new Date(startDate);
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);

    $scope.dates = {
        objectType: {type: 'COMMON_COST_PETROL', value: 'PETROL'},
        dateType: 'day',
        startDate: startDate
    };

    $scope.objectTypes = [
        {type:'COMMON_COST_PETROL', value: 'PETROL'},
        {type:'COMMON_COST_OPERATING', value: 'OPERATING'},
        {type:'COMMON_COST_TECH_REVIEW', value: 'TECHREVIEW'},
        {type:'COMMON_COST_INSURANCE', value: 'INSURANCE'},
        {type:'COMMON_COST_GENERAL', value: 'GENERAL'}
    ];

    $scope.open = function() {
        $scope.state = {
            open: true
        };
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1
    };

    $scope.state = {
        open: false
    };

    $scope.format = 'yyyy-MM-dd';

    $scope.getCostsStatistics = function(start, end) {
        if ($scope.dates.objectType.value === 'PETROL' && $rootScope.currentCar != null && $rootScope.currentCar.id != null) {
            $scope.petrolList = {};
            $http.get('ajax/getPetrolList.php', {
                params: {
                    carId: $rootScope.currentCar.id,
                    startDate: start,
                    endDate: end
                }
            }).then(function (response) {
                if (response.data.records != undefined && response.data.records.length > 0) {
                    $scope.statData = response.data.records;
                    $scope.statusCallback();
                }
            });
        } else {
            if ($rootScope.currentCar != null && $rootScope.currentCar.id != null) {
                $scope.costsList = {};
                $http.get('ajax/getCosts.php', {
                    params: {
                        carId: $rootScope.currentCar.id,
                        type: $scope.dates.objectType.value,
                        startDate: start,
                        endDate: end
                    }
                }).then(function (response) {
                    if (response.data.records != undefined && response.data.records.length > 0) {
                        $scope.statData = response.data.records;
                        $scope.statusCallback();
                    }
                });
            }
        }
    };

    $scope.getCostsStatistics(start, end);

    $scope.statusCallback = function() {
        var costs = [];

        for (var i in $scope.statData) {
            costs.push([$scope.statData[i].date, $scope.statData[i].total_cost]);
        }

        console.log(costs);

        stockChart.addSeries({
            data: costs,
            name: $filter('translate')($scope.dates.objectType.type) + ' - ' + $filter('translate')('CHART_COSTS'),
            type: 'column',
            color: '#85DD32',
            gapSize: 5
        });
    };

    $scope.getStats = function() {
        stockChart.setTitle({text: $filter('translate')($scope.dates.objectType.type) + ' - ' + $filter('translate')('CHART_COSTS_STATISTICS')}, {text: ""});
        $scope.getData();
    };

    $scope.getData = function() {
        while (stockChart.series.length > 0 ) {
            stockChart.series[0].remove( false );
        }

        if (stockChart.get('sec-axis') !== null) {
            stockChart.get('sec-axis').remove();
        }

        var start = new Date($scope.dates.startDate);
        var end = new Date($scope.dates.startDate);

        start.setHours(0);
        start.setMinutes(0);
        start.setSeconds(0);

        end.setHours(23);
        end.setMinutes(59);
        end.setSeconds(59);
        $scope.dates.startDate = end;

        if ($scope.dates.dateType === 'day') {
            $scope.getCostsStatistics(start, end);
        } else if ($scope.dates.dateType === 'month') {
            start.setMonth(start.getMonth()-1);
            $scope.getCostsStatistics(start, end);
        }
    };

    function str_pad(n) {
        return String("00" + n).slice(-2);
    }

    var stockChart = Highcharts.chart('container', {
        title: {
            text: $filter('translate')($scope.dates.objectType.type) + ' - ' + $filter('translate')('CHART_COSTS_STATISTICS')
        },
        yAxis: {
            title: {
                text: $filter('translate')('CHART_COSTS_STATISTICS')
            },
            id: 'calls-axis',
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%d %b %Y'    //ex- 01 Jan 2016
            }
        }
    });

}]);