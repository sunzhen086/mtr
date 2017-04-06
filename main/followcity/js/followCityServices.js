(function() {
	angular.module('followCity')
		.factory('followCityService', ['$q', '$log', '$http', function($q, $log, $http) {
			
			function getFollowCity() {
				var cityArr = [{
					id:0,
					name: '北京'
				}, {
					id:1,
					name: '济南'
				}, {
					id:2,
					name: '上海'
				}, {
					id:3,
					name: '广州'
				}];
				
				return cityArr;
			}

			return {
				getFollowCity: getFollowCity
			}
			
		}])
})();