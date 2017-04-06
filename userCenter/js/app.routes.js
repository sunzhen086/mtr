// Ionic Starter App Router

// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
(function () {
    'use strict';
    
    angular.module('userCenter')
    
    	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
 		
       		$stateProvider.state('app.userCenter', {
    		    url: '/userCenter',
    		    abstract: true,
    		    views: {
    		        'tab-userCenter' :{
    		        	templateUrl: 'userCenter/templates/layout.html',
    		        }
    		    }
    		});

    		$stateProvider.state('app.userCenter.userCenterHome', {
    		    url: '/home',
    		    views: {
    		        'userCenter' :{
    		        	templateUrl: 'userCenter/templates/userCenterHome.html',
    		        	controller: 'userCenter.userCenterHomeController'
    		        }
    		    }
    		});
    		
    		$stateProvider.state('app.userCenter.settings', {
    		    url: '/settings',
    		    views: {
    		        'userCenter' :{
    		        	templateUrl: 'userCenter/templates/settings.html',
    		        	controller: 'userCenter.settingsController'
    		        }
    		    }
    		});
    		
    		$stateProvider.state('app.userCenter.about', {
    		    url: '/about',
    		    views: {
    		        'userCenter' :{
    		        	templateUrl: 'userCenter/templates/about.html',
    		        	controller: 'userCenter.aboutController'
    		        }
    		    }
    		});    		
    		
    	}]);
})();