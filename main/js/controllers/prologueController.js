(function () {
    'use strict';
    
	// *******************
	// 向导页面
	// *******************
    angular.module('main')
    	.controller('main.prologueController', ['$scope', '$state', '$ionicHistory', prologueController]);
    	
    function prologueController($scope, $state, $ionicHistory) {
    	
    	window.localStorage['prologue'] = false;
    	
    	var startApp = function() {
    		
    		//console.log('Prologue isLogin: ' + $rootScope.isLogin);
    		//$ionicViewService.clearHistory();
    		$ionicHistory.clearHistory();
    	    $state.go('app.life.lifeHome', {});
    	    window.localStorage['prologue'] = true;

    	};
    	
   	
    	if(window.localStorage['prologue'] == "true") {
    	    console.log('Skip intro');
    	    // 向导页面只显示一次
    	    startApp();
    	} else {
    	    setTimeout(function () {
    	      navigator.splashscreen.hide();
    	    }, 750);
    	}

    	// "立即体验"按钮Event
    	$scope.gotoMain = function() {
    	    startApp();
    	}

    	$scope.slideHasChanged = function(index) {
    	};
    }
})();