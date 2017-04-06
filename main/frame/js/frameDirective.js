"use strict";

angular.module('mainpage')
	.directive('slidePage', function() {
		
		return {
			restrict: 'EA',
			scope: {
				clist: '=clist',
				index: '=index'
			},
			replace: true,
			transclude: true,
			templateUrl: "main/frame/templates/mainpageTemplate.html",
			controller: function($scope, $rootScope) {

			}
		}
	})
	


