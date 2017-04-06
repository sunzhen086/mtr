(function () {
    'use strict';

    angular.module('life')
    	.controller('life.lifeHomeController', ['$scope', '$state', '$window', '$ionicLoading', '$location', '$timeout', 'specialsService', 'testService', lifeHomeController]);
    	
    function lifeHomeController($scope, $state, $window, $ionicLoading, $location, $timeout, specialsService, testService) {
    	
    	/**/
    	
    	$ionicLoading.show({
            templateUrl: 'common/templates/spinner.html'
        });
    	
    	var findAllSpecials = function(){
    		
    		specialsService.findByType('1')
    			.then(function(specialsList){
    				
    				$scope.specialsList = specialsList;
    				
    				$ionicLoading.hide();
    				});
    	}
    	
    	findAllSpecials();
    	
    	$scope.doRefresh = function(){
    		
    		$timeout(function(){
    			$scope.$broadcast('scroll.refreshComplete');
    		},2000);    		    		
    	}
    	
    	$scope.moreDataCanBeLoaded = false;
    	
    	//测试用
    	$scope.type ='2';
    	
    	$scope.loadMore = function(){
    		
    		$timeout(function(){
    			specialsService.findByType($scope.type)
				.then(function(specialsList){					
					
					$scope.specialsList = $scope.specialsList.concat(specialsList);					
		
					if(specialsList.length == 0){
						$scope.moreDataCanBeLoaded = true;						
					}
					
					$scope.$broadcast('scroll.infiniteScrollComplete');
					
					$scope.type ='4';

				});   	
    		},2000);
   		
    			
    		
    	}   	 	
    	
    	/*
    	$scope.$on('stateChangeSuccess', function() {
    		
    		console.log('###############1');
    		
    	    $scope.loadMore();
    	
    	});
    	*/
		$scope.gotoTaskList = function(){
			
			//$window.location.href = '#/app/myLife/taskList/-3';
			//$state.go('app.myLife.taskList',{groupId:-3});
			//$location.path('app/myLife/taskList/-3');
			testService.test();
			
		}
    }
})();