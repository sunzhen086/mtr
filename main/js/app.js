// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

(function () {
    'use strict';
    
    angular.module('main', ['ionic', 'nsPopover', 'auth', 'common', 'life', 'travel', 'pick', 'userCenter'])
    	
    	/*
    	 * 常量配置
    	 */
    	.constant('loginResultConstant',{'SUCCESS':'000','PWDERR':'001','USERNAMEERR':'002'})
   
    	/*
    	 * 配置块。
    	 * AngularJS在模块加载时会执行这个函数。
    	 */
    	.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', 
    	         function($stateProvider, $urlRouterProvider,$ionicConfigProvider){
    		    		
    		//在 iOS中, tabs一直处于底部.
    		//在android中, tabs一直在顶部
    		//ionic中默认安装后导航在底部解决方案
    		$ionicConfigProvider.platform.ios.tabs.style('standard');
            $ionicConfigProvider.platform.ios.tabs.position('bottom');            
            $ionicConfigProvider.platform.android.tabs.style('standard');
            $ionicConfigProvider.platform.android.tabs.position('bottom');

            $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
            $ionicConfigProvider.platform.android.navBar.alignTitle('center');

            $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
            $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

            $ionicConfigProvider.platform.ios.views.transition('ios');
            $ionicConfigProvider.platform.android.views.transition('android');
    	}])    	
    	
    	/*
    	 * 运行块。
    	 * AngularJS在注入器创建后会执行这个函数。
    	 */
    	.run(['$rootScope', '$ionicPlatform', '$state', '$location', '$window', '$ionicPopup', 
    	      '$ionicHistory', '$ionicLoading', '$timeout', 'authService', 
    	      function ($rootScope, $ionicPlatform, $state, $location, $window, $ionicPopup, 
    	    		  $ionicHistory, $ionicLoading, $timeout, authService) {
    		
    		/*
    		 * 
    		 */
    		$ionicPlatform.ready(function () {
    			
    			//推送插件初始化
                window.plugins.jPushPlugin.init();
                
    			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    			// for form inputs)
    			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
    				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    			}
    			
    			if (window.StatusBar) {
    				// org.apache.cordova.statusbar required
    				StatusBar.styleDefault();
    			}
    			
    			//判断网络状态
                document.addEventListener("deviceready", function () {
                	
                	document.addEventListener("offline", onOffline, false);  
                    //document.addEventListener("online", onOnline, false);
                    
                    function onOffline(e) {  
                        // Handle the offline event    
                    	
                        $ionicLoading.show({
                            template: '网络未连接，请稍后重试！'
                        });
                        
                        $timeout(function(){
                        	$ionicLoading.hide();
                        }, 3000);
                        
                    }  
               
                    function onOnline() {  
                        // Handle the online event  
                    	
                        $ionicLoading.show({
                            template: '网络已恢复正常，已连接到服务器！'
                        });
                        
                        $timeout(function(){
                        	$ionicLoading.hide();
                        }, 1000);
                    }                	

                }, false);
    		});

    		/*
    		 *主页面显示退出提示框
    		 */
            $ionicPlatform.registerBackButtonAction(function (e) {

                e.preventDefault();

                function showConfirm() {
                    var confirmPopup = $ionicPopup.confirm({
                        title: '<div align="left"><i class="icon ion-android-alert assertive"><strong>&nbsp;提示：</strong></i></div>',
                        template: '<div><strong>您确定要退出应用吗?</strong></div>',
                        okText: '退出',
                        cancelText: '取消'
                    });

                    confirmPopup.then(function (res) {
                        if (res) {
                            ionic.Platform.exitApp();
                        } else {
                            // Don't close
                        }
                    });
                }

                // Is there a page to go back to?
                if ($location.path() == '/app/life/home' 
                	|| $location.path() == '/app/travel/home' 
                		|| $location.path() == '/app/pick/home' 
                			|| $location.path() == '/app/userCenter/home') {
                    showConfirm();
                } else if ($ionicHistory.backView()) {                 
                    // Go back in history                    
                    $ionicHistory.goBack();
                } else {
                    // This is the last page: Show confirmation popup
                    showConfirm();
                }

                return false;
                
            }, 101);            		
    		
    		/*
    		 * 当状态开始改变阶段，判断目标页面是否需要用户登录，
    		 * 需要情况：
    		 * 	  1、如果用户未登录，跳转到登录页面；
    		 * 	  2、如果用户已登录，直接跳转目标页面；
    		 * 不需要情况：
    		 *    1、直接跳转目标页面；
    		 */
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            	
            	/*
            	for(var name in $rootScope)
            		console.log(name + ":" + $rootScope[name]);
            	*/
            	
            	/**/ 		
            	console.log('main: ##############################');
            	console.log('main: isLogin: ' + $rootScope.isLogin);
        		
            	console.log('main: fromState.name:' + fromState.name);
            	console.log('main: fromParams:' + fromParams);            	
    			console.log('main: toState.name:' + toState.name);
    			console.log('main: toParams:' + toParams);
    			
            	var isFilter = authService.isFilterState(toState.name);
            	
            	if(!isFilter){
            		
            		if($rootScope.isLogin == undefined || !$rootScope.isLogin){
            			
                		if(toState.name == 'app.login'){
                			
                			console.log('main: The state is app.login, so go directly to login page!');
                			
                		}else{
                			
                			console.log('main: The user has not logged in, so go to login page!');
                			                			
                			var nextURL = authService.findUrlByState(toState.name);
                			
                			//参数替换
                			for(var name in toParams){
                				
                				var paramName = ':' + name;
                				
                				if(nextURL.indexOf(paramName) != -1){
                					
                					nextURL = nextURL.replace(paramName,toParams[name]);
                				}
                			}
                			
                			console.log('main: nextURL: ' + nextURL);
                			
                			//$location存在页面不跳转的情况，原因不明。
                			//$location.path('/app/login/' + encodeURIComponent(authURL));
                			
                			//$window.location.href = '#/app/login?nextURL=' + encodeURIComponent(nextURL);
                			
                			/**
                			 * Modal模式。
                			 * 支持$window.location.href、$state.go、$location.path状态或页面跳转方式。
                			 */
                			//未登录，阻止页面跳转。
                			//event.preventDefault();
                			//弹出登录页面
                			//$rootScope.openLoginModal(nextURL);
   
                		}
            		}else{
            			console.log('main: The user has been logged in, so skip app.login!');
            		}
            	}else{
            		console.log('main: The state is in the filterURLs, so is out of authentication, go directly to this state:' + toState.name);
            	}
            	
            });
            
    		
    		/*
    		 * 状态未发现事件
    		 */
            $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){ 
            	
            });           
    	}]);
})();
