angular.module('analysis', [])
	.controller('AnalysisCtrl', ['$scope','$ionicPopup',function($scope,$ionicPopup) {
		$scope.showMessage = function() {
			var alertPopup = $ionicPopup.alert({
				title: '信息提示',
				template: '相关数据查询正在开发'
			});

		}
		$scope.data = [{
				"image": "analysis/img/market_analysis.png",
				"name": "市场分析"
			},
			{
				"image": "analysis/img/brand.png",
				"name": "品牌专区"
			},
			{
				"image": "analysis/img/customer.png",
				"name": "客户分析"
			},
			{
				"image": "analysis/img/report.png",
				"name": "分析报告"
			},
			{
				"image": "analysis/img/subject.png",
				"name": "专题研究"
			}
		];
	}]);