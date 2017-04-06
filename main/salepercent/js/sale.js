angular.module('sale',[])
.controller('salePercentCtrl',['$scope',function($scope){
	$scope.back = function(){
		history.go(-1);
	}
	$scope.year = "2017";
    $scope.month = "02";
	$scope.getMonth = function(month1){
        var callBack = "monthChangeCallback";
        var inJson = "{'callBack':'"+callBack+"','date':'"+month1+"'}";
        webGetDate(inJson);
    };
    monthChangeCallback = function(res){
        $scope.$apply(function(){
            $scope.year = res.split("-")[0];
            $scope.month = res.split("-")[1];
        });
    };
	$scope.isShow = false;
	$scope.showSaleCondition = function(){
		console.log("SalePercentCtrl--showSaleCondition--begin");
		$scope.isShow = true;
	};
	$scope.hideSaleCondition = function(){
		console.log("SalePercentCtrl--showSaleCondition--end");
		$scope.isShow = false;
	};
	$scope.toDetail = function(){
		window.location.href = "#/tab/order";
	}
	$scope.saleList = [
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	},
    	{
    		"name":"深圳市罗湖区赛和信商行",
    		"type":"三十档",
    		"data1":"80",
    		"data2":"1038",
    		"data3":"186.97"
    	}
    ];
}]);