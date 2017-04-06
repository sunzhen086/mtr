(function() {
	angular.module('followCity', ['ionic'])
		.controller('followCityController', ['$scope','followCityService','$state',
			function($scope, followCityService, $state) {

				$scope.data = {
					showReorder: false,
					showDelete: false
				};

				$scope.followCityArr = followCityService.getFollowCity();

				$scope.onReorderItem = function(item, fromIndex, toIndex) {
					$scope.followCityArr.splice(fromIndex, 1);
					$scope.followCityArr.splice(toIndex, 0, item);
				};

				$scope.onItemDelete = function(item) {
					$scope.followCityArr.splice($scope.followCityArr.indexOf(item), 1);
				};
				
				$scope.goCity = function(item){
					$state.go('tab.mainpage',{activeId:item.id});
				}

			}
		])
		.controller('citySelectController', ['$scope', '$ionicModal', '$http', '$ionicSlideBoxDelegate','$timeout','$ionicScrollDelegate','$state',
			function($scope,$ionicModal, $http, $ionicSlideBoxDelegate, $timeout, $ionicScrollDelegate,$state) {

				var selectedAddress = {};
				var addressData;

				$http.get('lib/citypicker/Area_Datas_v2.json').success(function(res) {
					addressData = res;
					$scope.provincesData = addressData['86'];
				}).error(function(err) {
					console.log('area_datas err = ' + angular.toJson(err));
				});
				$ionicModal.fromTemplateUrl('main/followcity/templates/citySelect.html', {
					scope: $scope,
					animation: 'slide-in-up'
				}).then(function(modal) {
					$scope.PCTModal = modal;
					$scope.PCTModal.show();
					$scope.PCTModal.hide();
				})
				
				$scope.onCityChange=function(selectedCity){
					
					$state.go('tab.mainpage',{newCity:selectedCity});

				}

				$scope.lockSlide = function() {
					$ionicSlideBoxDelegate.$getByHandle('PCTSelectDelegate').enableSlide(false);
				};

				$scope.$watch('default', function(newValue) {
					if(newValue) {
						$scope.selectedCity = newValue;
					}
				});

				$scope.addNewFollowCity = function() {
					$scope.showBackBtn = false;
					$ionicSlideBoxDelegate.$getByHandle('PCTSelectDelegate').slide(0);
					$ionicScrollDelegate.$getByHandle('PCTSelectProvince').scrollTop();
					$scope.PCTModal.show();
				};

				//选择省
				$scope.chooseProvince = function(selectedProvince) {
					var selectedProvinceIndex;

					angular.forEach($scope.provincesData, function(item, index) {
						if(item === selectedProvince) {
							selectedProvinceIndex = index;
							return;
						}
					});

					selectedAddress = {};
					$scope.showBackBtn = true;
					$scope.citiesData = addressData['' + selectedProvinceIndex + ''];

					$ionicSlideBoxDelegate.$getByHandle('PCTSelectDelegate').next();
					$ionicSlideBoxDelegate.$getByHandle('PCTSelectDelegate').update();
					$ionicScrollDelegate.$getByHandle('PCTSelectCity').scrollTop();
					selectedAddress.province = selectedProvince;
				};

				//选择市
				$scope.chooseCity = function(selectedCity) {
					var selectedCityIndex;

					angular.forEach($scope.citiesData, function(item, index) {
						if(item === selectedCity) {
							selectedCityIndex = index;
							return;
						}
					});

					$scope.townData = addressData['' + selectedCityIndex + ''];

					selectedAddress.city = selectedCity;
					$scope.onCityChange(selectedCity);
					if(true) {
						//	 if (!$scope.townData) {
						selectedAddress.town = '';
						$scope.selectedAddress = selectedAddress;

						$timeout(function() {
							$scope.PCTModal.hide();
						}, 200);
					} else {
						$ionicSlideBoxDelegate.$getByHandle('PCTSelectDelegate').next();
						$ionicSlideBoxDelegate.$getByHandle('PCTSelectDelegate').update();
						$ionicScrollDelegate.$getByHandle('PCTSelectTown').scrollTop();
					}

				};

				//选择县
				$scope.chooseTown = function(selectedTown) {
					selectedAddress.town = selectedTown;
					$scope.selectedAddress = selectedAddress;

					$timeout(function() {
						$scope.PCTModal.hide();
					}, 200);
				};

				//slide返回上一级
				$scope.goBackSlide = function() {
					var currentIndex = $ionicSlideBoxDelegate.$getByHandle('PCTSelectDelegate').currentIndex();
					if(currentIndex > 0) {
						$ionicSlideBoxDelegate.$getByHandle('PCTSelectDelegate').previous();
					}
					if(currentIndex === 1) {
						$scope.showBackBtn = false;
					}
				};

				$scope.$on('$destroy', function() {
					$scope.PCTModal.remove();
				});

			}
		])
})();