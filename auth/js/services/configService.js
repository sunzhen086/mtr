(function () {
	'use strict';

	angular.module('auth')
		.provider('configService', [configService]);

	function configService() {
		
	    var filterURLs = [
	                 { id: '1', state: 'prologue', url: '#/'},
	                 { id: '2', state: 'app.myLife.myLifeHome', url: '#/app/myLife/home'},
 	                 { id: '3', state: 'app.travel.travelHome', url: '#/app/travel/home'},
 	                 { id: '4', state: 'app.hotel.hotelHome', url: '#/app/hotel/home'},
 	                 { id: '5', state: 'app.userCenter.userCenterHome', url: '#/app/userCenter/home'},
 	                 { id: '6', state: 'app.settings.settingsHome', url: '#/app/settings/home'},
 	                 { id: '7', state: 'app.pick.pickHome', url: '#/app/pick/home'}
	             ]; 
	    
	    var urls = [
	 	             { id: '000', state: 'prologue', url: '#/'},
	                 { id: '100', state: 'app.myLife.myLifeHome', url: '#/app/myLife/home'},
	                 { id: '101', state: 'app.myLife.storeDetail', url: '#/app/myLife/storeDetail'},
 	                 { id: '102', state: 'app.myLife.taskList', url: '#/app/myLife/taskList/:groupId'},
 	                 { id: '103', state: 'app.myLife.foods', url: '#/app/myLife/foods'},
 	                 { id: '200', state: 'app.travel.travelHome', url: '#/app/travel/home'},
 	                 { id: '201', state: 'app.travel.hotelReservation', url: '#/app/travel/hotelReservation'},
 	                 { id: '300', state: 'app.pick.pickHome', url: '#/app/pick/home'},
 	                 { id: '400', state: 'app.userCenter.userCenterHome', url: '#/app/userCenter/home'}, 	                 
 	                 { id: '401', state: 'app.userCenter.settings', url: '#/app/userCenter/settings'},
 	                 { id: '402', state: 'app.userCenter.about', url: '#/app/userCenter/about'} 	                 
	 	         ]; 
	    
	    var users = [
	 	             { id: '1', name: 'admin', password: '123456'},
	                 { id: '2', name: 'shandx', url: '123456'}	                 
	 	         ]; 
	    
	    this.$get = function() {
	        return {filterURLs: filterURLs, urls: urls, users: users};
	    };
	}
})();