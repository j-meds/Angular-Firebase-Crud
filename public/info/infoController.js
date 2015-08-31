angular.module("app").controller("infoController", ["$modalInstance","photosFactory", function($modalInstance, photosFactory){
	var vm = this;
	console.log("hello!!!");
	vm.photoInfo = {};
	vm.photoInfo = photosFactory.sendInfo;
	
	vm.cancel = function(){
		$modalInstance.dismiss();
	}

}]);