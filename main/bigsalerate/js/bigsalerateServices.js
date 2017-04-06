(function() {
	angular.module('bigsalerate')
		.factory('bigsalerateService', ['$q', '$log', '$http', function($q, $log, $http) {

			var getChartData = function() {
				return 27;
			}

			var getSmallData = function() {
				var option = {
					t1: '52.06%',
					t2: '18.59%',
					t3: '48.26%'
				};
				return option;
			}

			var getDetailData = function() {
				var option = {
					t1: '35728户',
					t2: '35198.88箱',
					t3: '4.26%',
					t4: '45.19%',
					t5: '6.03%',
					t6: '52.06%',
					t7: '18.59%',
					t8: '48.48%',
					t9: '60.20%',
					t10: '71.50%',
					t11: '2.06%'
				}
				return option;
			}
			return {
				getChartData: getChartData,
				getSmallDate: getSmallData,
				getDetailData: getDetailData
			}

		}])
})();