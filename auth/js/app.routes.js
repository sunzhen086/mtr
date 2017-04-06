// Ionic Starter App Router

// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
(function () {
    'use strict';
    
    angular.module('auth')
    
    	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {  		
 		
//    		$stateProvider.state('app.login', {
//    		    url: '/login/:nextURL',
//    		    views: {
//    		        '@' :{
//    		        	templateUrl: 'auth/templates/login.html'
//    		        	//controller: 'auth.loginController'
//    		        }
//    		    }
//    		});
    		
    		$stateProvider.state('app.login', {
    		    url: '/login?nextURL',
    		    views: {
    		        '@' :{
    		        	templateUrl: 'auth/templates/login.html'
    		        	//controller: 'auth.loginController'
    		        }
    		    }
    		});


    	}]);
})();