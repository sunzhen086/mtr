(function () {
	'use strict';

	angular.module('auth')
		.factory('testService', ['$q', '$interval', '$timeout', '$window', 'configService', testService]);

	function testService($q, $interval, $timeout, $window, configService) {
		
		var svc = {
			test: test
		};

		return svc;

        function test(){
        	
        	testObject();
        	//testType();
        	//testPrototype();
        	//test_proto_();
        	//testClosure();
        	
        	//testAngularJSModule();
        	
        	/*
        	var obj1 = {};
        	var obj2 = {'name':'obj2','age':2};
        	testArguments(obj1,obj2);
        	*/
        	//testOr();
        	/*
        	var win = {}; 
        	setupModuleLoader(win);
        	console.log(win);
        	
        	console.log(window.angular.module);
        	*/
        	
        	//testCaller();
        }
        
        function testCaller(){
        	
        	function p(fn){
        		while(fn.caller){
        			console.log(fn.caller);
        			fn = fn.caller;
        		}
        			
        	}
        	
        	function t2(){
        		p(t2);
        	}
        	
        	function t1(){
        		t2();
        	}

        	function t0(){
        		t1();
        	}     	
        	
        	t0();
        }
        
        function setupModuleLoader(window) {

        	  //var $injectorMinErr = minErr('$injector');
        	  //var ngMinErr = minErr('ng');

        	  function ensure(obj, name, factory) {
        	    return obj[name] || (obj[name] = factory());
        	  }

        	  var angular = ensure(window, 'angular_1', Object);

        	  // We need to expose `angular.$$minErr` to modules such as `ngResource` that reference it during bootstrap
        	  //angular.$$minErr = angular.$$minErr || minErr;

        	  return ensure(angular, 'module', function() {
        	    /** @type {Object.<string, angular.Module>} */
        	    var modules = {};
        	   
        	    return function module(name, requires, configFn) {
        	    	
        	      var assertNotHasOwnProperty = function(name, context) {
        	        if (name === 'hasOwnProperty') {
        	          //throw ngMinErr('badname', 'hasOwnProperty is not a valid {0} name', context);
        	        }
        	      };

        	      assertNotHasOwnProperty(name, 'module');
        	      if (requires && modules.hasOwnProperty(name)) {
        	        modules[name] = null;
        	      }
        	      return ensure(modules, name, function(){

            /** @type {!Array.<Array.<*>>} */
            var invokeQueue = [];

            /** @type {!Array.<Function>} */
            var configBlocks = [];

            /** @type {!Array.<Function>} */
            var runBlocks = [];

            var config = invokeLater('$injector', 'invoke', 'push', configBlocks);

            /** @type {angular.Module} */
            var moduleInstance = {
            		
              // Private state
              _invokeQueue: invokeQueue,
              _configBlocks: configBlocks,
              _runBlocks: runBlocks,

              //requires: requires,

              //name: name,

              provider: invokeLater('$provide', 'provider'),

              factory: invokeLater('$provide', 'factory'),

              service: invokeLater('$provide', 'service'),

              value: invokeLater('$provide', 'value'),

              constant: invokeLater('$provide', 'constant', 'unshift'),
              
              animation: invokeLater('$animateProvider', 'register'),

              filter: invokeLater('$filterProvider', 'register'),
              
              controller: invokeLater('$controllerProvider', 'register'),
              
              directive: invokeLater('$compileProvider', 'directive'),

              config: config,

              run: function(block) {
                runBlocks.push(block);
                return this;
              }
            };

//            if (configFn) {
//              config(configFn);
//            }

            return moduleInstance;

            function invokeLater(provider, method, insertMethod, queue) {
              if (!queue) queue = invokeQueue;
              return function() {
                queue[insertMethod || 'push']([provider, method, arguments]);
                return moduleInstance;
              };
            }
        	      });
        	    };
        	  });
        }
        
        function testOr(){
        	
        	var obj1 = {};
        	var obj2 = {'name':'obj2','age':2}; 
        	
        	var obj3 = undefined;
        	
        	var obj = obj3 || obj2 || obj3;//Object {name: "obj2", age: 2} 
        	
        	var obj4 = (1 === 2) || obj3 || obj2 || obj3;//Object {name: "obj2", age: 2} 
        	
        	var obj4 = (1 === 1) || obj3 || obj2 || obj3;//true
        	
        	console.log(obj4);
        }
        
        function testArguments(){
        	for (var i = 0, ii = arguments.length; i < ii; i++) {
        	    var obj = arguments[i];
        	    if (obj) {
        	      var keys = Object.keys(obj);
        	      for (var j = 0, jj = keys.length; j < jj; j++) {
        	        var key = keys[j];
        	        //dst[key] = obj[key];
        	        console.log(key + ':' + obj[key]);
        	      }
        	    }
        	}        	    
        }
        
        function testAngularJSModule(){
        	
        	var tm = angular.module('test',[]);
        	
        	console.log(tm);
        	
        	console.log(tm.prototype);
        	
        	console.log($window);
        	
        	var obj = {};
        	
        	obj.c1 = {};
        	
        	obj.c1.name = 'c1.name';
        	
        	obj.name = 'obj.name';
        	obj.meth = function(){
        
        		var m1 = function(){
        			
        		};
        		
        		return m1;
        	} 
        	
        	console.log(obj);

        }
        
        function testClosure(){
        	
        	var cls = function(id){
        		console.log("Test Closure!" + id);
        	}
        	
        	$timeout((function(){
        		return cls;})(),2000);
        }
        
        function testType(){
        	
        	console.log('---------------type')
        	// 1) primitive types
        	console.log(typeof 1);                          // number
        	console.log(typeof "");                         // string
        	console.log(typeof false);                      // boolean
        	console.log(typeof undefined);                  // undefined
        	console.log(typeof null);                       // object       null是个特列，属于原生类型；
        	console.log(null instanceof Object);            // false
        	
        	// 2) object types.
        	console.log(typeof new Object);                 // object        	
        	console.log(typeof new Array);                  // object
        	console.log(typeof new Date);                  // object
        	console.log(typeof new Function);               // function
        	
        	console.log(typeof Object);                 // function
        	console.log(typeof Function);               // function
        	console.log(typeof Array);                  // function
        	console.log(typeof Date);                  // function
        	
        	        	
        	var Company = function(name){
        	    this.name = name;
        	};
        	
        	function Employee(name){
        		this.name = name;
        	}
        	
        	console.log(typeof Company);				//function       	
        	console.log(typeof Employee);				//function
        	                                                  
        	
        	function opts(){
        		//this.name = name;
        	}
        	
        	console.log(opts.call(new Object));             // [object Object]
        	console.log(opts.call(new Function));           // [object Function]
        	console.log(opts.call(new Array));              // [object Array]
        }
        
        function testPrototype(){
        	
        	console.log('---------------prototype')
        	// 1) prototype属性：一般只有function对象拥有
        	console.log((new Object).prototype);                    // undefined
        	console.log([].prototype);                              // undefined
        	console.log((new Function).prototype);                  // object {}
        	
        	// Function, Object, Array是function对象
        	console.log(Function.prototype);                        // function()        	
        	console.log(Object.prototype);                          // Object {}
        	console.log(Array.prototype);                           // []
        	console.log(Date.prototype);            				// Invalid Date
        	
        	// 2) __proto__属性：指向该对象原型链的上一端
        	console.log((Object.prototype).__proto__);              // null
        	console.log((Function.prototype).__proto__);            // Object {}
        	console.log(Object.__proto__);                          // function()
        	console.log(Function.__proto__);                        // function()
        	// function对象Company的prototype属性所指的对象处于实例对象的原型链上
        	var Company = function(name){
        	    this.name = name;
        	};
        	var c1 = new Company("IBM");
        	var c2 = new Company("Alibaba");
        	console.log(c1.__proto__ == Company.prototype); // true
        	console.log(c2.__proto__ == Company.prototype); // true
        	
        }
        
        function test_proto_(){
        	
        	console.log('---------------_proto_')
        	// 原型链的顶端
        	console.log((Object.prototype).__proto__);                                      // null
        	console.log(Function.prototype.__proto__ == Object.prototype);                  // true
        	console.log(Object.__proto__            == Function.prototype);                 // true
        	console.log(Function.__proto__          == Function.prototype);                 // true
        	console.log(Array.__proto__             == Function.prototype);                 // true
        	console.log(Company.__proto__           == Function.prototype);                 // true
        	//console.log(Object.__proto__            == Function.prototype);                 // true
        	console.log(Company.prototype.__proto__ == Object.prototype);                   // true
        	console.log(c1.__proto__                == Company.prototype);                  // true
        }
        
        
        function testObject(){
        	
			function Animal(name){ 
				this.name = name; 
			} 
			
//			function Person(name, age){
//				
//				Animal.call(this,name);
//				
//				this.age = age;
//			}
			
			Animal.prototype.id = 1;
			Animal.prototype.age = 100;
			Animal.prototype.hello = function(){
				console.log('Hello World!');
			}
				
			console.log('Animal: ' + Animal);
			
			console.log('Animal.constructor : ' + Animal.constructor);	
			
			console.log('Animal.prototype : ' + Animal.prototype);
			
			console.log('Animal.prototype.constructor : ' + Animal.prototype.constructor);
			
			var pt = Animal.prototype;
			
			console.log(pt);
			
			console.log('Animal.prototype == Animal : ' + (Animal.prototype == {}));
			
			console.log('Animal.prototype.constructor == Animal : ' + (Animal.prototype.constructor == Animal));
						
			console.log('Animal.__proto__ : ' + Animal.__proto__);

			var a1 = new Animal('a1');
			
			console.log('a1 : ' + (a1.__proto__ == Animal.prototype));
			
			Animal.prototype = 1;
			
			var a2 = new Animal('a2'); 	
						
			console.log('Animal.prototype : ' + Animal.prototype);
			
			console.log('a2 : ' + (a2.__proto__ == Animal.prototype));
			console.log('a2 : ' + (a2.__proto__ == Object.prototype));
			
			
			var Dev = function(name){
				this.name = name;
			}
			
			console.log('Dev.constructor : ' + Dev.constructor);	
			
			console.log('Dev.prototype : ' + Dev.prototype);							
						
			console.log('Dev.__proto__ : ' + Dev.__proto__);
			
			console.log(Animal.constructor == Dev.constructor);
			
			console.log(Animal.prototype == Dev.prototype);
			
			console.log(Animal.__proto__ == Dev.__proto__);
			
			var Fly = new Function();
			
			console.log('Fly.constructor : ' + Fly.constructor);	
			
			console.log('Fly.prototype : ' + Fly.prototype);							
						
			console.log('Fly.__proto__ : ' + Fly.__proto__);
			
			var t = new Animal('t');
			
			console.log('Animal.prototype: ' + (t.__proto__ == Animal.prototype));
			
			console.log('Animal.prototype: ' + (Animal.prototype.__proto__ == Object.prototype));
			
			console.log('Animal type: ' + typeof Animal);
			
			console.log('New Animal type: ' + typeof new Animal);
			
			var dog = new Animal('dog'); 
			
			dog.age = 10;
						
			console.log('Dog name :' + dog.name);
			
			console.log('Dog age :' + dog.age);
			
			var cat = new Animal('cat');
			
			console.log('cat name :' + cat.name);
			
			console.log('cat age :' + cat.age);
			
			console.log('Animal.prototype:' + Animal.prototype);
			
			
			var obj = new Animal('t');
			console.log('obj constructor :' + obj.constructor);
			console.log('obj prototype :' + obj.prototype);
			console.log('obj __proto__ :' + obj.__proto__);
			console.log('obj __proto__ :' + (obj.__proto__ == Animal.prototype));
			
			obj.prototype = {'name':'1'};
			console.log('obj prototype :' + obj.prototype);			
				
			obj = new Object();
			
			console.log('obj constructor :' + obj.constructor);
			console.log('obj prototype :' + obj.prototype);
			console.log('obj __proto__ :' + obj.__proto__);
			console.log('obj __proto__ :' + (obj.__proto__ == Object.prototype));
			
			obj = {};
			
			obj.a = 1;
			obj.b = 2;
			
			console.log('obj : ' + obj);
			
			console.log('obj constructor :' + obj.constructor);
			console.log('obj prototype :' + obj.prototype);
			console.log('obj __proto__ :' + obj.__proto__);
			console.log('obj __proto__ :' + (obj.__proto__ == Object.prototype));
        }
        
        function testThis(){
        	

        	var t1 = function(name,age){
        		
        		this.name = name;
        		this.age = age;
        		
        		console.log(this.name + ':' + this.age);
        		
        		/*
        		var obj = {
        			name: 'name',
        			age: 'age',
        			show: function(){
        				console.log(this.name + ':' + this.age);
        			}
        		};
        		
        		return obj;
				*/
        	}

        	function t2(name,age){
        		
        		this.name = name;
        		this.age = age;
        		
        		console.log(this.name + ':' + this.age);        		

        	}
        	
        	var temp = new t1('temp',1);
        	
        	console.log('temp:' + temp.name + ':' + temp.age); 
        	
        	/*
        	console.log(typeof Function);
        	console.log(typeof Array);        	
        	console.log(typeof Date);
        	console.log(typeof (new Array()));
        	console.log(typeof (new Date()));
        	
        	console.log(typeof t1);
        	console.log(typeof temp);
        	*/       	
        	
        	//t1('name',10);
        	
        	/*
        	var obj1 = {name:'s',age:0};
        	
        	var obj = {name:'s',age:0};
        	
        	obj.t1 = t1;
        	
        	console.log(obj.hasOwnProperty('name'));
        	
        	obj.t1('123',123);
        	*/
        	//obj.prototype = obj1;
        	
        	//t1.call(obj1,'t1',100);
        	
        	//t1.call(obj,'t',200);
        	
        	
        	/*
        	function rainman(){
                // rainman函数体内存在三个局部变量 i j k
                var i = 0;
                if ( 1 ) {
                    var j = 0;
                    for(var k = 0; k < 3; k++) {
                    	console.log( k );    //分别弹出 0 1 2
                    }
                    console.log( k );        //弹出3
                }
                console.log( j );            //弹出0
            }
        	rainman();
        	*/
            
        	//console.log(t1().name + ':' + t1().age);
        }
        
        function testCallback(){
            var callback = function(fn,args){
            	console.log('Call back');
            	return function(){
            		fn.call(fn,'Result');
            	}
            }
            
            var fn = function(a){
            	console.log('This is call back fn!');
            	console.log('Arguments a:' + a);
            }
            
            callback(fn,'OK')();
        }        
        
        function testPromise(){

        	var deferred = $q.defer();
        	
        	/*
        	var progress = 0;
        	
        	var interval = $interval(function() {
        		if(progress >= 100) {
        			$interval.cancel(interval);
        			deferred.resolve('All done!');
        		}
        		progress += 10;
        		deferred.notify(progress + '%...');
        	}, 100);
        	*/
        	
            /*
            $timeout(function(){
            	deferred.notify('-----------------=================');
            	deferred.resolve('All done!');
            },1000);            
        	*/
        	
        	/* */
            var percentageComplete = 0;
            
        	for(var i=0; i<1000; i++){
            	if(i%100 == 0){
            		//console.log('i:' + i);
            		
            		percentageComplete = i;
            		
            		deferred.notify('-----------------=================');
            		
            		//deferred.resolve('Part done!');
            	}
            }
        	
        	//deferred.resolve('All done!');
        	
        	return deferred.promise;
        }
        
        function testPromise1(){
        	
        	var promise = test();
        	
        	promise.then(function success(data) {
        	    console.log(data);
        	  },
        	  function error(error) {
        	    console.error(error);
        	  },
        	  function notification(notification) {
        	    console.info(notification);
        	  });
        	
        }
        
        function findAuthURLByState(state){
        	
        	testThis();
        	
        	/**/
        	var deferred = $q.defer();
        	
        	/*
        	for(var name in deferred){
        		console.log(name + ':' + deferred[name]);
        	}
        	*/
        	
        	/*
            var results = urlService.authURLs.filter(function(element) {
                if (state === undefined) {
                    return true;
                } else {
                	console.log('state: ' + state);
                	console.log('element.state: ' + element.state);
                	
                    return state === element.state;
                }
            });
            */
        	
        	/*
            var results = function(){
            	return ['1','2','3'];
            }();
            */
        	
        	var results = ['1','2','3'];
        	
            console.log('results: ' + results.length);
            
            var percentageComplete = 0;
            
            for(var i=0; i<1000; i++){
            	if(i%100 == 0){
            		//console.log('i:' + i);
            		
            		percentageComplete = i;
            		
            		deferred.notify(100);
            	}
            }
            	
            //deferred.resolve(results);
            
            //deferred.reject('Result is null!');     
            
            //console.log('promise: ' + deferred.promise);
            
                       
            return deferred.promise;
            
        	
        	/*
            var results = urlService.authURLs.filter(function(element) {
            	
                if (state === undefined) {
                    return '';
                } else {
                	console.log('state: ' + state);
                	console.log('element.state: ' + element.state);
                	if(state === element.state){
                		return element.url;
                	}else{
                		return '';
                	}
                }
            });
            */
            
        	/*
        	var authURLs = configService.authURLs;
        	
        	var url = '';
        	
        	for(var i=0; i<authURLs.length; i++){
        		
        		if(authURLs[i].state === state){
        			url = authURLs[i].url;
        			break;
        		}
        	}
        	
        	console.log("authService.findAuthURLByState: authURLs: " + authURLs.length);
        	
            console.log('authService.findAuthURLByState: url: ' + url);
            
            return url;
            */
        }
         
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
	}
})();