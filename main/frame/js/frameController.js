(function() {
	angular.module('mainpage', ['dashboard','bigsalerate','followCity','supply','sale','order','directsalesupply','BrandPlan'])
		.controller('frameCtrl', ['$scope','$rootScope','followCityService','$stateParams',
			
			function($scope,$rootScope,followCityService,$stateParams){
				
				$scope.followCity= followCityService.getFollowCity();
				$scope.slideActive = 0;
				
				if($stateParams.newCity){
					$scope.followCity= followCityService.getFollowCity();
					$scope.followCity.push({
						id:Math.random(),
						name:$stateParams.newCity
					})
					$scope.slideActive = $scope.followCity.length - 1;
				}
				if($stateParams.activeId){
					for(var i=0;i<$scope.followCity.length;i++){
						var item = $scope.followCity[i];
						if(item.id == $stateParams.activeId){
							$scope.slideActive = i;
							console.log($scope.slideActive);
						}
					}
				}
			}
		])
})();