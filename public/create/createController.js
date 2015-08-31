angular.module("app").controller("createController", ["$modalInstance", function($modalInstance){
	var vm = this;
	vm.photo = {};

	vm.addPhoto = function(){
		$modalInstance.close(vm.photo);
	}
	vm.close = function(){
		$modalInstance.dismiss();
	}

}]);
