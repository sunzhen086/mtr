// Ionic Starter App Router

// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
(function () {
    'use strict';
    
    angular.module('hotel')
    
    	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
 
       		$stateProvider.state('app.hotel', {
    		    url: '/hotel',
    		    abstract: true,
    		    views: {
    		        'tab-hotel' :{
    		        	templateUrl: 'hotel/templates/layout.html',
    		        }
    		    }
    		});
       		
    		$stateProvider.state('app.hotel.hotelHome', {
    		    url: '/home',
    		    views: {
    		        'hotel' :{
    		        	templateUrl: 'hotel/templates/hotelHome.html',
    		        	controller: 'hotel.hotelHomeController'
    		        }
    		    }
    		});    		

    	}]);
})();