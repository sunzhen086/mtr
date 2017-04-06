(function () {
    'use strict';

    angular.module('life')
    	.controller('life.foodsController', ['$scope', '$ionicHistory', '$ionicLoading', 'specialsService', foodsController]);
    	
    function foodsController($scope, $ionicHistory, $ionicLoading, specialsService) {
    	
    	$ionicLoading.show({
            templateUrl: 'common/templates/spinner.html'
        });
    	
    	var findAllFoods = function(){
    		
    		specialsService.findByType('1')
    			.then(function(foodsList){
    				
    				$scope.foodsList = foodsList;
    				
    				$ionicLoading.hide();
    				});
    	}
    	
    	findAllFoods();
    	
    }
})();