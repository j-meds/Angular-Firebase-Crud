angular.module("app").controller("photosController", ["photosFactory", "$modal", function(photosFactory,$modal){
	var vm = this;
	vm.photos = [];

	vm.sortField = "name";
	vm.reverse = false;



	var getPhotos = function() {
      photosFactory.getPhotos().then(function(photos){
         vm.photos = photos;
      });
  }
  getPhotos();

	vm.openCreateModal = function(){
		var createModal = $modal.open({
			templateUrl: "/create/createPhotos.html",
			controller: "createController",
			controllerAs: "vm",
			size: "md"
		});
		createModal.result.then(function(photo){
			photosFactory.addPhoto(photo).then(function(){ 
				getPhotos();
			})
		})
	}
	vm.openInfoModal = function(id){
		photosFactory.sendPhotoInfo(id);
		
		var infoModal = $modal.open({
			templateUrl: "/info/photoInfo.html",
			controller: "infoController",
			controllerAs: "vm",
			size: "lg"
		});
	}
	vm.deletes = function(id){
		photosFactory.deletePhoto(id).then(function(){
			getPhotos();
		})
	}
	vm.openEditModal = function(id){
		photosFactory.sendPhotoInfo(id);
		var editModal = $modal.open({
			templateUrl: "/edit/editPhoto.html",
			controller: "editController",
			controllerAs: "vm",
			size: "md"
		});
		editModal.result.then(function(photo){
			photosFactory.editPhoto(photo).then(function(){
				getPhotos();
			})
		})
	}


}]);






