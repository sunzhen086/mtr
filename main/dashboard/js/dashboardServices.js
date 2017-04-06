(function() {
	angular.module('dashboard')
		.factory('dashboardService', ['$q', '$log', '$http', function($q, $log, $http) {
			
			var svc = {			
				getMainYearSum: getMainYearSum,
				getChartData: getChartData
			};
	
			return svc;

			function getMainYearSum(){
				var quota = [{
					key: 'saleCount',
					title: '卷烟销量(箱)',
					value: '98826',
					active: true
				}, {
					key: 'saleMoney',
					title: '销售金额(元)',
					value: '25626',
					active: false
				}, {
					key: 'saleSingle',
					title: '单箱结构(元)',
					value: '29046',
					active: false
				}];
				return quota;
			}
			
			function getChartData(quotoType){
				var random = function (min,max) {
				    return Math.floor(Math.random()*(max-min+1)+min);
				};
				var month = ['3月','4月','5月','6月','7月','8月','9月','10月','11月','12月','1月','2月'];
				var data = [];
				for(var i=0;i<12;i++){
					data.push(random(10000,20000));
				}
				
				return {
					month:month,
					data:data
				}
			}
		}])
})();