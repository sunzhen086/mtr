(function () {
    'use strict';

    angular.module('userCenter')
    	.controller('userCenter.aboutController', ['$scope', '$ionicNavBarDelegate', '$ionicHistory', aboutController]);
    	
    function aboutController($scope, $ionicNavBarDelegate, $ionicHistory) {
    	
    	/*
    	$scope.goBack = function(){
    		
    		//$ionicNavBarDelegate.back();
    		
    		$ionicHistory.goBack();
    	}
    	*/
    }
})();