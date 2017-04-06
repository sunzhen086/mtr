(function(){
	

angular.module('directsalesupply',[])
.controller('directSaleSupplyCtrl',['$scope','$element',function($scope,$element){
	$scope.supplyConf = {
		small: true,
		more: false,
		btnText:'查看更多'
	};
	$scope.smallChartContainerLoad = function() {
		
		var homeRate = echarts.init($element.find("directSaleSupplyRate")[0]);
		homeRate.setOption(chartOption(8.34));
	}
	
	function chartOption(data) {
		var option = {
			tooltip: {
				formatter: "{a} <br/>{c} {b}%"
			},
			toolbox: {
				show: false,
			},
			series: [{
				name: '超5倍均量客户销量占比',
				type: 'gauge',
				z: 3,
				min: 0,
				max: 40,
				splitNumber: 4,
				radius: '100%',
				startAngle: 180,
				endAngle: 0,
				axisLine: { // 坐标轴线
					lineStyle: { // 属性lineStyle控制线条样式
						color: [
							[0.25, 'green'],
							[0.75, '#ff8500'],
							[1, '#c23531']
						],
						opacity: 0,
					}
				},
				axisTick: { // 坐标轴小标记
					length: 15, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				splitLine: { // 分隔线
					length: 20, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {
					formatter: function(value) {
						return value + '%';
					}
				},
				pointer: {
					width: 3,
					length: '70%'
				},
				title: {
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder',
						fontSize: 20,
						fontStyle: 'italic'
					}
				},
				grid: {
					bottom: '5px',
					left: '0px',
					right: '0px',
					width: '100%',
					height: '100%'

				},
				detail: {
					textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'normal',
						fontSize: '16'
					},
					offsetCenter: [0, '55%'],
					formatter: function(value) {
						if(value > 10 && value < 30) {
							return "偏高"
						} else if(value >= 30) {
							return "过高"
						} else {
							return "正常"
						}
					}
				},
				data: [{
					value: data,
					name: ''
				}]
			}]
		};
		return option;
	}
}]);
})();