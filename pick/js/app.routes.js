// Ionic Starter App Router

// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
(function () {
    'use strict';
    
    angular.module('pick')
    
    	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
 
       		$stateProvider.state('app.pick', {
    		    url: '/pick',
    		    abstract: true,
    		    views: {
    		        'tab-pick' :{
    		        	templateUrl: 'pick/templates/layout.html',
    		        }
    		    }
    		});
       		
    		$stateProvider.state('app.pick.pickHome', {
    		    url: '/home',
    		    views: {
    		        'pick' :{
    		        	templateUrl: 'pick/templates/pickHome.html',
    		        	controller: 'pick.pickHomeController'
    		        }
    		    }
    		});    		

    	}]);
})();