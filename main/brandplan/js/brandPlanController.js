(function() {

	angular.module('BrandPlan', [])
		.controller('brandPlanCtrl', ['$scope', '$element', function($scope, $element) {
			$scope.supplyConf = {
				small: true,
				more: false,
				btnText: '查看更多'
			};
		}]);
})();