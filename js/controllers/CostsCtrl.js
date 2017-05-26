/**
 * Created by SobocinskaAgnieszka on 2017-05-13.
 */
'use strict';

mycarapp.controller('CostsCtrl', ['$scope', '$rootScope', '$translate', '$state', '$http', function($scope, $rootScope, $translate, $state, $http) {
	
	$scope.maxDate = new Date();
    $scope.maxDate.setDate($scope.maxDate.getDate());
    var dateEnd = new Date();
    dateEnd.setHours(23);
    dateEnd.setMinutes(59);
    dateEnd.setSeconds(59);
    var dateStart = new Date(dateEnd);
    dateStart.setDate(dateEnd.getDate() - 7);
    dateStart.setHours(0);
    dateStart.setMinutes(0);
    dateStart.setSeconds(1);
	
	$scope.dates = {
        endDate: new Date(dateEnd),
        startDate: dateStart
    }
	
	$scope.objectTypes = [
       
    ];
	
	$scope.addCost = function() {
		$state.go('costs.add');
	}
	
	$scope.search = function() {
	}
	
	$scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.state = {
            open: true
        };
    };

    $scope.open2 = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.state = {
            open2: true
        };
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1
    };
	
}]);