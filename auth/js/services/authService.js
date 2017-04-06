(function () {
	'use strict';

	angular.module('auth')
		.factory('authService', ['$q', '$interval', '$timeout', 'configService', authService]);

	function authService($q, $interval, $timeout, configService) {
		
		var svc = {			
			findUrlByState: findUrlByState,
			isFilterState: isFilterState,
			auth: auth
		};

		return svc;
       
        /*
         * 根据状态名称查找指定状态对应的URL。
         */
        function findUrlByState(state){
        	
        	$timeout(function(){
        		
        	},10);
            
        	/* */
        	var urls = configService.urls;
        	
        	var url = '';
        	
        	for(var i=0; i<urls.length; i++){
        		
        		if(urls[i].state === state){
        			url = urls[i].url;
        			break;
        		}
        	}
        	
        	console.log('authService.findAuthURLByState: authURLs: ' + urls.length);
        	
            console.log('authService.findAuthURLByState: url: ' + url);
            
            return url;
            
        }
        
        /*
         * 判断状态 是否在过滤列表内，如果是，则表示此状态不需要权限认证。
         */
        function isFilterState(state){
        	
        	var filterURLs = configService.filterURLs;
        	
        	var isFilter = false;
        	
        	for(var i=0; i<filterURLs.length; i++){
        		
        		if(filterURLs[i].state === state){
        			isFilter = true;
        			break;
        		}
        	}
        	
            console.log('authService.isFilterState: isFilter:' + isFilter);
            
            return isFilter;
        	
        }
        
        /*
         * 用户身份认证
         */
        function auth(name, password){
        	
        	var users = configService.users;        	
        	
        	var result = '001';
        	
        	for(var i=0; i<users.length; i++){
        		
        		if(users[i].name === name){
        			
        			var realPassword = users[i].password;
        			 
        			if(password === realPassword)
        				result = '000';
        			
        			break;
        		}
        	}
        	
        	if(i === users.length)
        		result = '002';
        	
        	console.log('authService.auth: name: ' + name + '; password: ' + password);
        	
            console.log('authService.auth: result: ' + result);
            
            return result;
        }
	}
})();