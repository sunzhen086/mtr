(function () {
    'use strict';
    
    angular.module('auth')
    	.controller('auth.loginController', ['$rootScope', '$scope', '$ionicPopup', '$ionicPopover', '$ionicModal', '$window', '$ionicHistory', '$state', 'loginResultConstant', 'authService', loginController]);
        	
    function loginController($rootScope, $scope, $ionicPopup, $ionicPopover, $ionicModal, $window, $ionicHistory, $state, loginResultConstant, authService) {
    	
    	
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//模态窗口登录
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    	
    	$rootScope.data = {};
    	
    	$rootScope.isLogin = false;
				
		$rootScope.nextURL = "#/";
		
		$ionicModal.fromTemplateUrl('auth/templates/loginModal.html', {
		    scope: $rootScope
		    //animation:'slide-right-left'
		}).then(function(loginModal) {
			$rootScope.loginModal = loginModal;
		});
		  
		$rootScope.openLoginModal = function(nextURL) {
			$rootScope.nextURL = nextURL;
			$rootScope.loginModal.show();
		};
		
		$rootScope.closeLoginModal = function() {
			$rootScope.loginModal.hide();
		};
		
		//当我们用到模型时，清除它！
		$rootScope.$on('$destroy', function() {
			$rootScope.loginModal.remove();
		});
		
		
		// 当隐藏的模型时执行动作
		$rootScope.$on('modal.hide', function() {
			// Execute action	
		});
		
		// 当移动模型时执行动作
		$rootScope.$on('modal.removed', function() {
			// Execute action	
		});
		
		//登录
		$rootScope.login = function() {
			
			console.log('auth.loginController.login: data: ' + $rootScope.data);
    		
    		console.log('auth.loginController.login: nextURL: ' + $rootScope.nextURL);
    		
    		/**/
    		if(!$rootScope.data.userName || !$rootScope.data.password){
    			
    			$rootScope.alertNamePwdNull();
    			
    			return;
    		}
    		
    		var authResult = authService.auth($rootScope.data.userName,$rootScope.data.password);
    		
    		//authResult = '000';
    		    		    		
			if(loginResultConstant.SUCCESS === authResult){
				
				$rootScope.isLogin = true;
				
				$rootScope.closeLoginModal();
				
				$window.location.href = $rootScope.nextURL;
				
			}else if(loginResultConstant.PWDERR === authResult){
				
				$rootScope.alertPwdError();
								
			}else if(loginResultConstant.USERNAMEERR === authResult){
				
				$rootScope.alertUserNameError();				
			}
      	}
    	
    	//退出
		$rootScope.logout = function() {
	    	
    		var confirmPopup = $ionicPopup.confirm({ 		       
                title: '<div align="left"><i class="icon ion-android-alert assertive"><strong>&nbsp;提示：</strong></i></div>',
                template: '<div><strong>您确定要注销该用户吗?</strong></div>',
                okText: '注销',
                cancelText: '取消'
 		     });		     
 		     
 		     confirmPopup.then(function(res) {
 		       if(res) {
 		    	  $rootScope.isLogin = false;
 		       }
 		     });    		
    	}
    	
    	//关闭
		$rootScope.close = function() {
   		
    		//模态窗口登录
			$rootScope.closeLoginModal();
    	}
		
		//用户名或密码为空提示
		$rootScope.alertNamePwdNull = function(){
			
			var alertPopup = $ionicPopup.alert({
		    	 title: '<div align="left"><i class="icon ion-android-alert assertive"><strong>&nbsp;提示：</strong></i></div>',
		    	 template: '<div><strong>用户名或密码不能为空！</strong></div>'
		     });
		     
		     alertPopup.then(function(res) {
		    	 //Todo
		     });
		}
		
		//用户名错误提示
		$rootScope.alertUserNameError = function(){
			
			var alertPopup = $ionicPopup.alert({
		    	 title: '<div align="left"><i class="icon ion-android-alert assertive"><strong>&nbsp;提示：</strong></i></div>',
		    	 template: '<div><strong>用户不存在，请确认后重新输入！</strong></div>'
		     });
		     
		     alertPopup.then(function(res) {
		    	 //Todo
		     });
		}
		
		//密码错误提示
		$rootScope.alertPwdError = function(){
			
			var alertPopup = $ionicPopup.alert({
		    	 title: '<div align="left"><i class="icon ion-android-alert assertive"><strong>&nbsp;提示：</strong></i></div>',
		    	 template: '<div><strong>密码错误，请重新输入！</strong></div><div><strong>最多重试密码3次！ </strong></div><div><strong>超过3次，账户将被锁定！</strong></div>'
		     });
		     
		     alertPopup.then(function(res) {
		    	 //Todo
		     });
		}	
		 		 
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//统一页面跳转，实现页面的统一认证功能
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				 
		//根据URL进行页面跳转
		$rootScope.gotoURL = function(targetURL){	
			
			/**
			 * 使用全局事件监听机制实现身份认证机制。
			 * 参考main/js/app.js文件。
			 */
			$window.location.href = targetURL;
			
			/**
			 * 自定义身份认证机制。
			 * 如果采用该方式，只能通过URL方式进行页面跳转。
			 * 同时需要屏蔽掉main/js/app.js文件中相关监听功能。
			 */
			/*
			if($rootScope.isLogin){				 
				$window.location.href = targetURL;
			}else{
				$rootScope.nextURL = targetURL;
				$rootScope.openLoginModal(targetURL);				
			}
			*/
		}
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//通用工具栏
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		$ionicPopover.fromTemplateUrl('main/templates/tools.html', {
    	    scope: $scope
    	}).then(function(toolPopover) {
    	    $scope.toolPopover = toolPopover;
    	});
		
		$scope.openToolPopover = function($event) {
			$scope.toolPopover.show($event);
		};
		
		$scope.closetoolPopover = function() {		
			$scope.toolPopover.hide();			
		};
		
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//回退按钮
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		$scope.goBack = function(){
    		
			$ionicHistory.goBack();
    	}
    }
})();