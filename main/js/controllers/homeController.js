(function () {
    'use strict';

    angular.module('main')
    	.controller('main.homeController', ['$scope', '$state', '$stateParams', '$ionicPopover', homeController]);
    	
    function homeController($scope, $state, $stateParams, $ionicPopover) {
    	
    	if($stateParams.id == 1){
    		$("#myLifeHome").show();
    		$("#travelHome").hide();
    		$("#hotelHome").hide();
    		$("#userCenterHome").hide();
    	}else if($stateParams.id == 2){
    		$("#myLifeHome").hide();
    		$("#travelHome").show();
    		$("#hotelHome").hide();
    		$("#userCenterHome").hide();
    		
    	}else if($stateParams.id == 3){
    		$("#myLifeHome").hide();
    		$("#travelHome").hide();
    		$("#hotelHome").show();
    		$("#userCenterHome").hide();
    		
    	}else{
    		
    		$("#myLifeHome").hide();
    		$("#travelHome").hide();
    		$("#hotelHome").hide();
    		$("#userCenterHome").show();    		
    	}
    	
    	$ionicPopover.fromTemplateUrl('main/templates/tools.html', {
    	    scope: $scope,
    	  }).then(function(toolPopover) {
    	    $scope.toolPopover = toolPopover;
    	  });
    	
    	$ionicPopover.fromTemplateUrl('auth/templates/login.html', {
    	    scope: $scope,
    	  }).then(function(loginPopover) {    		
    	    $scope.loginPopover = loginPopover;
    	  });

    	$scope.gotoLogin = function() {
    	    // 默认进入“今天”的任务列表
    	    $state.go('app.myLife.login', {});
    	}
    	
    	$scope.login = function() {
      		$scope.closeLoginPopover();
    	}
    	
		$scope.openLoginPopover = function($event) {
			$scope.loginPopover.show($event);
		};
		
		$scope.closeLoginPopover = function() {			
			$scope.loginPopover.hide();
			$state.go('app.myLife.taskList',{groupId:-3});
		};
		
		//Cleanup the popover when we're done with it!
		$scope.$on('$destroy', function() {
			$scope.loginPopover.remove();
		});
		
		// Execute action on hide popover
		$scope.$on('loginPopover.hidden', function() {
			// Execute action
		});
		
		// Execute action on remove popover
		$scope.$on('loginPopover.removed', function() {
			// Execute action
		});
    }
})();