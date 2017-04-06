(function() {
	angular.module('dashboard', [])
		.controller('dashboardCtrl', ['$scope', 'dashboardService','$timeout','$element',
			function($scope, dashboardService,$timeout,$element) {
				
				$scope.city={
					name:$scope.clist[$scope.index].name,
					//滑动结束
					onchange:function(data){
						//
					}
				}
				$scope.index = $scope.index;
				/**
				 *获取各指标数据
				 */
				$scope.quota = dashboardService.getMainYearSum();
				/**
				 * 点击各个指标触发事件
				 * @param {Object} item
				 */
				$scope.changeQuota = function(item) {
					for(var i = 0, j = $scope.quota.length; i < j; i++) {
						$scope.quota[i].active = false;
					}
					item.active = true;
					drawChart(item.key);
				}

				/**
				 *绘制折线图 
				 */
				drawChart($scope.changeQuota);
          		
				function drawChart(quotoType) {
					var option = getChartOption(quotoType);
					var myChart = echarts.init($element.find("mainchart")[0]);
					myChart.setOption(option);
				}
				
				$scope.gotoURL=function(url){
					window.location.href=url;
				}

				function getChartOption(quotoType) {
					var dataObj = dashboardService.getChartData(quotoType);
					
					var option = {
						tooltip: {
							show: false
						},
						grid: {
							left: '0px',
							right: '22px',
							containLabel: true,
							bottom: '10px',
							top: '30px'
						},
						xAxis: {
							axisLine: { //横坐标线是否显示
								show: false
							},
							axisTick: {
								show: false
							},
							type: 'category',
							nameTextStyle: {
								fontSize: '1rem',
								fontFamily: 'inhert',
								color: '#abbae1'
							},
							boundaryGap: false,
							data: dataObj.month
						},
						dataZoom: [{
							type: 'inside',
							xAxisIndex: [0],
							start: 50,
							end: 100
						}],
						yAxis: {
							show: false,
							min: 0
						},
						lineStyle: {
							normal: {
								color: '#acb7e0',
								shadowColor: '#fff',
								width: 4
							}
						},
						textStyle: {
							color: '#acb7e0'
						},
						series: [{
							name: '邮件营销',
							type: 'line',
							stack: '总量',
							label: {
								normal: {
									show: true,
									offset: [0, -5]
								}
							},
							lineStyle: {
								color: '#acb7e0'
							},
							symbolSize: 10,
							color: '#acb7e0',
							itemStyle: {
								normal: {
									borderColor: '#acb7e0'
								}
							},
							data: dataObj.data
						}]
					}
				
				return option;
				}
			}
		])

})();