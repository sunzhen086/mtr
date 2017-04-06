// Ionic Starter App Router

// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
(function () {
    'use strict';
    
    angular.module('travel')
    
    	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
 		
       		$stateProvider.state('app.travel', {
    		    url: '/travel',
    		    abstract: true,
    		    views: {
    		        'tab-travel' :{
    		        	templateUrl: 'travel/templates/layout.html',
    		        }
    		    }
    		});

    		$stateProvider.state('app.travel.travelHome', {
    		    url: '/home',
    		    views: {
    		        'travel' :{
    		        	templateUrl: 'travel/templates/travelHome.html',
    		        	controller: 'travel.travelHomeController'
    		        }
    		    }
    		});
    		
    		$stateProvider.state('app.travel.hotelReservation', {
    		    url: '/hotelReservation',
    		    views: {
    		        'travel' :{
    		        	templateUrl: 'travel/templates/hotelReservation.html',
    		        	controller: 'travel.hotelReservationController'
    		        }
    		    }
    		});

    	}]);
})();