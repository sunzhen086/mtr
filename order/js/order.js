var os = "weichat";
var monthChangeCallback;
angular.module('order',[])
.controller('MonthOrderCtrl',['$scope',function($scope){
	$scope.back = function(){
		history.go(-1);
	};
	document.getElementById("order_show").style.display = "block";
	document.getElementById("order_month").style.display = "none";
	document.getElementById("order_hide").style.display = "none";
	$scope.showCondition = function(){
		document.getElementById("order_show").style.display = "none";
		document.getElementById("order_month").style.display = "block";
		document.getElementById("order_hide").style.display = "block";
	};
	$scope.hideCondition = function(){
		document.getElementById("order_show").style.display = "block";
		document.getElementById("order_month").style.display = "none";
		document.getElementById("order_hide").style.display = "none";
	};
	$scope.year = "2016";
    $scope.month = "01";
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
    
    $scope.toTab1 = function(){
        document.getElementById("order_tab_bottom1").style.visibility = "visible";
        document.getElementById("order_tab_bottom2").style.visibility = "hidden";
        document.getElementById("order_name1").style.color = "#14b9ef";
        document.getElementById("order_name2").style.color = "#999999";

        document.getElementById("order_tab1").style.display = "block";
        document.getElementById("order_tab2").style.display = "none";
    };

    $scope.toTab2 = function(){
        document.getElementById("order_tab_bottom1").style.visibility = "hidden";
        document.getElementById("order_tab_bottom2").style.visibility = "visible";
        document.getElementById("order_name1").style.color = "#999999";
        document.getElementById("order_name2").style.color = "#14b9ef";

        document.getElementById("order_tab1").style.display = "none";
        document.getElementById("order_tab2").style.display = "block";
    };
    
    $scope.data = [
    	{
    		"brand1":"双喜",
    		"brand2":"（硬精品好日子）",
    		"price":"93.28",
    		"count":"1002",
    	},
    	{
    		"brand1":"双喜",
    		"brand2":"（软真品好日子）",
    		"price":"137.80",
    		"count":"548",
    	},
    	{
    		"brand1":"双喜",
    		"brand2":"（硬金樽好日子）",
    		"price":"243.80",
    		"count":"543",
    	},
    	{
    		"brand1":"红塔山",
    		"brand2":"（硬经典）",
    		"price":"66.78",
    		"count":"529",
    	},
    	{
    		"brand1":"龙凤呈祥",
    		"brand2":"（硬真品）",
    		"price":"93.28",
    		"count":"1002",
    	},
    	{
    		"brand1":"黄山",
    		"brand2":"（硬新一品）",
    		"price":"93.28",
    		"count":"1002",
    	},
    	{
    		"brand1":"南京",
    		"brand2":"（红）",
    		"price":"93.28",
    		"count":"1002",
    	},
    	{
    		"brand1":"利群",
    		"brand2":"（硬新版）",
    		"price":"93.28",
    		"count":"1002",
    	},
    	{
    		"brand1":"中华",
    		"brand2":"（硬）",
    		"price":"93.28",
    		"count":"1002",
    	}
    ];
    $scope.orderList = [
    	{
    		"order_id":"LH0000077232",
    		"order_type":"网上订单",
    		"order_date":"20170101",
    		"order_data1":"80",
    		"order_data2":"1038",
    		"order_data3":"186.97"
    	},
    	{
    		"order_id":"LH0000077232",
    		"order_type":"网上订单",
    		"order_date":"20170101",
    		"order_data1":"80",
    		"order_data2":"1038",
    		"order_data3":"186.97"
    	},
    	{
    		"order_id":"LH0000077232",
    		"order_type":"网上订单",
    		"order_date":"20170101",
    		"order_data1":"80",
    		"order_data2":"1038",
    		"order_data3":"186.97"
    	}
    ];
    $scope.toDetail = function(){
    	window.location.href = "#/tab/order-detail"
    }
}])
.controller('OrderDetailCtrl',['$scope',function($scope){
	$scope.back = function(){
		history.go(-1);
	};
	$scope.data = [
		{
			"brand1":"云烟",
			"brand2":"（硬紫）",
			"data1":"168",
			"data2":"500",
			"data3":"168",
		},
		{
			"brand1":"云烟",
			"brand2":"（硬紫）",
			"data1":"168",
			"data2":"500",
			"data3":"168",
		},
		{
			"brand1":"云烟",
			"brand2":"（硬紫）",
			"data1":"168",
			"data2":"500",
			"data3":"168",
		},
		{
			"brand1":"云烟",
			"brand2":"（硬紫）",
			"data1":"168",
			"data2":"500",
			"data3":"168",
		},
		{
			"brand1":"云烟",
			"brand2":"（硬紫）",
			"data1":"168",
			"data2":"500",
			"data3":"168",
		},
		{
			"brand1":"云烟",
			"brand2":"（硬紫）",
			"data1":"168",
			"data2":"500",
			"data3":"168",
		}
	];
}]);
