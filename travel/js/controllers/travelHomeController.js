(function () {
    'use strict';

    angular.module('travel')
    	.controller('travel.travelHomeController', ['$scope', '$state', '$ionicPopover', '$ionicLoading', '$timeout', travelHomeController]);
    	
    function travelHomeController($scope, $state, $ionicPopover, $ionicLoading, $timeout) {
    	
    	/*
    	$ionicLoading.show({
            templateUrl: 'common/templates/spinner.html'
        });
    	
    	var init = function(){
    		
    		//动态加载大图片，加载过程中显示“数据加载中...",加载完成以后自动关闭。
    		//避免大图片加载过程中，出现白屏的情况，
        	var imgID = new Image();        	        	
            imgID.src = "travel/img/a4.jpg";
            
            imgID.onload = function(){
            	document.getElementById("t-img").innerHTML = "<img src="+imgID.src+" width=\"100%\" />";            	
            	$ionicLoading.hide();
            }
    	}
    	
    	init();
    	*/   	

    }
})();