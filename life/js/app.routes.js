// Ionic Starter App Router

// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
(function () {
    'use strict';
    
    angular.module('life')
    
    	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
 
       		$stateProvider.state('app.life', {
    		    url: '/life',
    		    abstract: true,
    		    views: {
    		        'tab-life' :{
    		        	templateUrl: 'life/templates/layout.html',
    		        }
    		    }
    		});
       		
    		$stateProvider.state('app.life.lifeHome', {
    		    url: '/home',
    		    views: {
    		        'life' :{
    		        	templateUrl: 'life/templates/lifeHome.html',
    		        	controller: 'life.lifeHomeController'
    		        }
    		    }
    		});
    		
    		$stateProvider.state('app.life.storeDetail', {
    		    url: '/storeDetail',
    		    views: {
    		        'life' :{
    		        	templateUrl: 'life/templates/storeDetail.html',
    		        	controller: 'life.storeDetailController'
    		        }
    		    }
    		});
            
            $stateProvider.state('app.life.foods', {
    		    url: '/foods',
    		    views: {
    		        'life' :{
    		        	templateUrl: 'life/templates/foods.html',
    		        	controller: 'life.foodsController'
    		        }
    		    }
    		});

    	}]);
})();