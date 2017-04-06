(function () {
	'use strict';

	angular.module('life')
		.provider('dummyDataService', [dummyDataService]);

	function dummyDataService() {
		
	    var menus = [
	                 { title: '所有任务', badge: 25, groupId: -1, display: true, edit:false},
	                 { title: '已完成', badge: 6, groupId: -2, display: false, edit:false},
	                 { title: '今天', badge: 2, groupId: -3, display: true, edit:false},
	                 { title: '隐私', badge: 5, groupId: 1, display: true, edit:true},
	                 { title: '购物', badge: 7, groupId: 2, display: true, edit:true},
	                 { title: '想看的电影', badge: 9, groupId: 3, display: true, edit:true},
	                 { title: '愿望', badge: 4, groupId: 4, display: true, edit:true},
	                 { title: '日程安排', badge: 0, groupId: 5, display: true, edit:true}
	             ];
	    var tasks = [
	                 { id: 1, type: 1, status: 1, groupId: 1, importance: 2, classname: 'checkbox-energized', title: '下午有个会！', date: '2014/01/01' },
	                 { id: 2, type: 2, status: 1, groupId: 1, importance: 3, classname: 'checkbox-assertive', title: '晚上有个饭局', date: '2014/01/02' },
	                 { id: 3, type: 1, status: 2, groupId: 3, importance: 0, classname: 'checkbox-calm', title: '《变形金刚4：绝迹重生》', date: '2014/01/03' },
	                 { id: 4, type: 2, status: 1, groupId: 3, importance: 1, classname: 'checkbox-calm', title: '《X战警：逆转未来》', date: '2014/01/04' },
	                 { id: 5, type: 1, status: 1, groupId: 2, importance: 0, classname: 'checkbox-stable', title: '买衣服！', date: '2014/01/05' },
	                 { id: 6, type: 2, status: 1, groupId: 2, importance: 0, classname: 'checkbox-stable', title: '买鞋子', date: '2014/01/06' },
	                 { id: 7, type: 1, status: 2, groupId: 2, importance: 2, classname: 'checkbox-energized', title: '买巧克力！', date: '2014/01/07' },
	                 { id: 8, type: 2, status: 1, groupId: 2, importance: 3, classname: 'checkbox-assertive', title: '买玩具！', date: '2014/01/08' },
	                 { id: 9, type: 1, status: 1, groupId: 2, importance: 0, classname: 'checkbox-calm', title: '买裤子！', date: '2014/01/09' },
	                 { id: 10, type: 2, status: 2, groupId: 3, importance: 1, classname: 'checkbox-calm', title: '《2012》', date: '2014/01/10' },
	                 { id: 11, type: 1, status: 1, groupId: 3, importance: 0, classname: 'checkbox-stable', title: '《加勒比海盗》', date: '2014/05/21' },
	                 { id: 12, type: 2, status: 1, groupId: 3, importance: 0, classname: 'checkbox-stable', title: '《黑客帝国》', date: Date.today().toString("yyyy/MM/dd") },
	                 { id: 13, type: 1, status: 1, groupId: 3, importance: 2, classname: 'checkbox-energized', title: '《1942》', date: '2014/05/23' },
	                 { id: 14, type: 2, status: 1, groupId: 4, importance: 3, classname: 'checkbox-assertive', title: '愿望B-太阳从西边出来吧！', date: '2014/05/24' },
	                 { id: 15, type: 1, status: 1, groupId: 4, importance: 0, classname: 'checkbox-calm', title: '愿望C-捡到一分钱!', date: '2014/05/25' },
	                 { id: 16, type: 2, status: 2, groupId: 4, importance: 1, classname: 'checkbox-calm', title: '愿望D-彩票中奖！', date: Date.today().toString("yyyy/MM/dd") },
	                 { id: 17, type: 1, status: 1, groupId: 3, importance: 0, classname: 'checkbox-stable', title: '《建国大业》', date: '2014/05/26' },
	                 { id: 18, type: 2, status: 2, groupId: 1, importance: 0, classname: 'checkbox-stable', title: '买张彩票', date: '2014/05/28' },
	                 { id: 19, type: 1, status: 1, groupId: 4, importance: 2, classname: 'checkbox-energized', title: '愿望A-天上掉馅儿饼吧！', date: '2014/05/29' },
	                 { id: 20, type: 2, status: 1, groupId: 1, importance: 3, classname: 'checkbox-assertive', title: '给老总发个邮件', date: '2014/05/30' },
	                 { id: 21, type: 1, status: 1, groupId: 1, importance: 0, classname: 'checkbox-calm', title: '早点回家吃饭', date: '2014/08/21' },
	                 { id: 22, type: 2, status: 2, groupId: 2, importance: 1, classname: 'checkbox-calm', title: '买手表！', date: '2014/08/22' },
	                 { id: 23, type: 1, status: 1, groupId: 2, importance: 0, classname: 'checkbox-stable', title: '买电脑!', date: '2014/08/23' },
	                 { id: 24, type: 2, status: 1, groupId: 3, importance: 0, classname: 'checkbox-stable', title: '《蜘蛛侠2》', date: '2014/08/24' },
	                 { id: 25, type: 1, status: 1, groupId: 3, importance: 0, classname: 'checkbox-stable', title: '《达芬奇密码》', date: '2014/08/25' }
	             ];
	    
	    var specials = [
	                 { id: 11, type: '1', img: 'life/img/logo/kfc.jpg', loc: '肯德基（顺义隆华店）', star: ['energized','energized','energized','energized','energized'], spend: 27, reservation: 156, distance: 1.8, display: true},
	                 { id: 12, type: '1', img: 'life/img/logo/McDonalds.jpg', loc: '麦当劳（顺义西单店）', star: ['energized','energized','energized','energized','dark'], spend: 36, reservation: 226, distance: 2.1, display: true},
	                 { id: 13, type: '1', img: 'life/img/logo/pizza.jpg', loc: '必胜客（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 78, reservation: 33, distance: 2.2, display: true},
	                 { id: 14, type: '1', img: 'life/img/logo/qiaojiangnan.jpg', loc: '俏江南（顺义新世界店）', star: ['energized','energized','energized','energized','dark'], spend: 108, reservation: 33, distance: 2.2, display: true},
	                 { id: 15, type: '1', img: 'life/img/logo/haidilao.jpg', loc: '海底捞（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 88, reservation: 123, distance: 2.2, display: true},
	                 { id: 16, type: '1', img: 'life/img/logo/xiabu.jpg', loc: '呷哺（顺义宜宾店）', star: ['energized','energized','energized','energized','energized'], spend: 50, reservation: 133, distance: 3.8, display: true},
	                 { id: 21, type: '2', img: 'life/img/logo/alibuyi.jpg', loc: '阿布莱依（顺义隆华店）', star: ['energized','energized','energized','energized','energized'], spend: 27, reservation: 156, distance: 1.8, display: true},
	                 { id: 22, type: '2', img: 'life/img/logo/angwei.jpg', loc: '昂威（顺义西单店）', star: ['energized','energized','energized','energized','dark'], spend: 36, reservation: 226, distance: 2.1, display: true},
	                 { id: 23, type: '2', img: 'life/img/logo/palma.jpg', loc: '彪马（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 78, reservation: 33, distance: 2.2, display: true},
	                 { id: 24, type: '2', img: 'life/img/logo/taizilong.jpg', loc: '太子龙（顺义新世界店）', star: ['energized','energized','energized','energized','dark'], spend: 108, reservation: 33, distance: 2.2, display: true},
	                 { id: 25, type: '2', img: 'life/img/logo/yiyi.jpg', loc: '依依（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 88, reservation: 123, distance: 2.2, display: true},
	                 { id: 26, type: '2', img: 'life/img/logo/yifanni.jpg', loc: '依凡尼（顺义宜宾店）', star: ['energized','energized','energized','energized','energized'], spend: 50, reservation: 133, distance: 3.8, display: true},
	                 { id: 31, type: '3', img: 'life/img/logo/kfc.jpg', loc: '肯德基（顺义隆华店）', star: ['energized','energized','energized','energized','energized'], spend: 27, reservation: 156, distance: 1.8, display: true},
	                 { id: 32, type: '3', img: 'life/img/logo/McDonalds.jpg', loc: '麦当劳（顺义西单店）', star: ['energized','energized','energized','energized','dark'], spend: 36, reservation: 226, distance: 2.1, display: true},
	                 { id: 33, type: '3', img: 'life/img/logo/pizza.jpg', loc: '必胜客（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 78, reservation: 33, distance: 2.2, display: true},
	                 { id: 34, type: '3', img: 'life/img/logo/qiaojiangnan.jpg', loc: '俏江南（顺义新世界店）', star: ['energized','energized','energized','energized','dark'], spend: 108, reservation: 33, distance: 2.2, display: true},
	                 { id: 35, type: '3', img: 'life/img/logo/haidilao.jpg', loc: '海底捞（顺义新世界店）', star: ['energized','energized','energized','energized','energized'], spend: 88, reservation: 123, distance: 2.2, display: true},
	                 { id: 36, type: '3', img: 'life/img/logo/xiabu.jpg', loc: '呷哺（顺义宜宾店）', star: ['energized','energized','energized','energized','energized'], spend: 50, reservation: 133, distance: 3.8, display: true}
	             ];
	    
	    this.$get = function() {
	        return {menus: menus, tasks: tasks, specials: specials};
	    };
	}
})();