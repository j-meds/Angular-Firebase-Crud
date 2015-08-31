angular.module("app").controller("editController", ["photosFactory","$modalInstance", function(photosFactory, $modalInstance){
	var vm = this;
	vm.photo = {};

	vm.photo = photosFactory.sendInfo;

	vm.addPhoto = function(){
		$modalInstance.close(vm.photo);
	}
	vm.close = function(){
		$modalInstance.dismiss();
	}

}]);