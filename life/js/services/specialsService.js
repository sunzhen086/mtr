(function () {
	'use strict';

	angular.module('life')
		.factory('specialsService', ['$q', 'dummyDataService', specialsService]);

	function specialsService($q, dummyDataService) {
		
		var svc = {
			findByType: findByType			
		};

		return svc;

        function findByType(type) {
        	
        	var deferred = $q.defer();
                	
            var results = dummyDataService.specials.filter(function(element) {
                if (type === undefined) {
                    return true;
                } else {
                    return type === element.type;
                }
            });
            deferred.resolve(results);
                        
            return deferred.promise;
        }
        
	}
})();