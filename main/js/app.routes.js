// Ionic Starter App Router

// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
(function () {
    'use strict';
    
    angular.module('main')
    
    	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    		$stateProvider.state('prologue', {
    		    url: '/',
    		    templateUrl: 'main/templates/prologue.html',
    		    controller: 'main.prologueController'
    		});
    		
    		$stateProvider.state('app', {
    		    url: '/app',
    		    abstract: true,
    		    templateUrl: 'main/templates/tabs.html'
    		    //controller: 'auth.loginController'
    		}); 
    		
    		$stateProvider.state('app.home', {
    		    url: '/home/:id',
    		    views: {
    		        '@' :{
    		        	templateUrl: 'main/templates/home.html',
    		        	controller: 'main.homeController'
    		        }
    		    }
    		});

    		$urlRouterProvider.otherwise('/');
    	}]);
})();