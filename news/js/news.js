angular.module('news', [])
.controller('NewsCtrl',['$scope',function($scope){
	$scope.news_title = "10月份全行业最新动态";
	$scope.news_abstract = "省级卷烟营销平台本月新增6个上线地市。10月份全国36个重点城市卷烟销售90万箱，同15年相比下降12.2%。从1-10月份累计来看，重点城市销售卷烟1063.4万箱，同比下降5.32%。从全行业来看，10月份全国销售卷烟90万箱，同比下降6.4%，同15相比下降12.02%。从1-10月份累计来看，全国销售卷烟3998.44万箱，同比下降6.16%。";
	$scope.data = [
		{
			"title":"一、平台上线情况",
			"content":"截止到2016年11月15日，省级卷烟营销平台上线200个地市级公司，本月新增加6个。覆盖230万零售客户，1990万箱卷烟销量。其中，参与改革试点的63个城市全部上线运行，占比达到32%。",
			"url":"#/tab/news/onlineDtl",
			"image":"news/img/news_img1.png"
		},
		{
			"title":"一、平台上线情况",
			"content":"截止到2016年11月15日，省级卷烟营销平台上线200个地市级公司，本月新增加6个。覆盖230万零售客户，1990万箱卷烟销量。其中，参与改革试点的63个城市全部上线运行，占比达到32%。",
			"url":"#/tab/news/saleDtl",
			"image":"news/img/news_img2.png"
		}
	]
}])
.controller('OnlineDetailCtrl',['$scope',function($scope){
	$scope.back = function(){
		history.go(-1);
	};
	$scope.toTab1 = function(){
        document.getElementById("online_tab_bottom1").style.visibility = "visible";
        document.getElementById("online_tab_bottom2").style.visibility = "hidden";
        document.getElementById("online_name1").style.color = "#14b9ef";
        document.getElementById("online_name2").style.color = "#999999";

        document.getElementById("online_tab1").style.display = "block";
        document.getElementById("online_tab2").style.display = "none";
    };

    $scope.toTab2 = function(){
        document.getElementById("online_tab_bottom1").style.visibility = "hidden";
        document.getElementById("online_tab_bottom2").style.visibility = "visible";
        document.getElementById("online_name1").style.color = "#999999";
        document.getElementById("online_name2").style.color = "#14b9ef";

        document.getElementById("online_tab1").style.display = "none";
        document.getElementById("online_tab2").style.display = "block";
    };
    var arr = [{'city':'北京','no1':1,'no2':1},
        {'city':'天津','no1':1,'no2':1},
        {'city':'河北','no1':11,'no2':11},
        {'city':'陕西','no1':11,'no2':1},
        {'city':'内蒙古','no1':14,'no2':1},
        {'city':'辽宁','no1':13,'no2':1},
        {'city':'大连','no1':1,'no2':1},
        {'city':'吉林','no1':9,'no2':1},
        {'city':'黑龙江','no1':21,'no2':21},
        {'city':'江苏','no1':14,'no2':1},
        {'city':'浙江','no1':11,'no2':0},
        {'city':'安徽','no1':16,'no2':1},
        {'city':'福建','no1':9,'no2':2},
        {'city':'江西','no1':1,'no2':1},
        {'city':'山东','no1':1,'no2':1},
        {'city':'河南','no1':1,'no2':1},
        {'city':'湖北','no1':1,'no2':1},
        {'city':'湖南','no1':1,'no2':1}];
    var toDecimal = function(x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return;
        }
        f = Math.round(x*10)/10;
        return f;
    }
    for(var i=0; i<arr.length; i++){
        var percent = toDecimal(arr[i].no2*100/arr[i].no1);
        arr[i].percent = percent;
    }
    $scope.data = arr;
}])
.controller('SaleDetailCtrl',['$scope',function($scope){
	$scope.back = function(){
		history.go(-1);
	};
	$scope.toTab1 = function(){
        document.getElementById("sale_tab_bottom1").style.visibility = "visible";
        document.getElementById("sale_tab_bottom2").style.visibility = "hidden";
        document.getElementById("name_year").style.color = "#14b9ef";
        document.getElementById("name_month").style.color = "#999999";
    };

    $scope.toTab2 = function(){
        document.getElementById("sale_tab_bottom1").style.visibility = "hidden";
        document.getElementById("sale_tab_bottom2").style.visibility = "visible";
        document.getElementById("name_year").style.color = "#999999";
        document.getElementById("name_month").style.color = "#14b9ef";
    };
    $scope.data = [{'city':'兰州','no1':0.7,'no2':-34.6},
        {'city':'沈阳','no1':2.6,'no2':-24.6},
        {'city':'郑州','no1':2.4,'no2':-34.6},
        {'city':'乌鲁木齐','no1':1.7,'no2':-14.6},
        {'city':'贵阳','no1':0.2,'no2':-31.5},
        {'city':'大连','no1':2.7,'no2':-24.2},
        {'city':'天津','no1':2.4,'no2':-24.4},
        {'city':'重庆','no1':1.2,'no2':-32.6},
        {'city':'武汉','no1':2.1,'no2':-24.6},
        {'city':'石家庄','no1':2.8,'no2':-14.6},
        {'city':'合肥','no1':2.7,'no2':-24.2},
        {'city':'长沙','no1':1.6,'no2':-32.5},
        {'city':'南昌','no1':1.5,'no2':-32.6},
        {'city':'哈尔滨','no1':2.9,'no2':-12.3},
        {'city':'昆明','no1':1.1,'no2':-24.9},
        {'city':'北京','no1':1.2,'no2':-17.4},
        {'city':'济南','no1':1.3,'no2':-23.7},
        {'city':'成都','no1':2.9,'no2':-36.2}];
}]);