angular.module("app").factory("photosFactory", ["$http", "$q", function($http, $q){
	var firebase = "https://troop555.firebaseio.com/"
	var o = {};
	o.photos = [];

	o.sendPhotoInfo = function(id){
		for(var i = 0; i < o.photos.length;i++){
			if(o.photos[i]._id === id){
				o.sendInfo =  o.photos[i];
			}		
		}
	}


	o.addPhoto = function(photo){
		var q = $q.defer();
		$http.post(firebase + ".json", photo)
		.success(function(data){
			q.resolve();
			console.log("ran fine");
		})
		.error(function(data){
			q.reject();
		})
		return q.promise;
	}

	o.getPhotos = function(){
		var q = $q.defer();
		$http.get(firebase + ".json")
		.success(function(res){
			o.photos.length = 0;
			for(var prop in res){

				res[prop]._id = prop;
				o.photos.push(res[prop]);
			}
			q.resolve(o.photos);
		})
		.error(function(res){
			q.reject(res);
			console.log("Could not get Photos");
		})
		return q.promise;
	}
	o.deletePhoto = function(id){
		var q = $q.defer();
		$http.delete(firebase + id + "/.json")
		.success(function(data){
			q.resolve();
		})
		.error(function(data){
			console.log("delete has failed");
		})
		return q.promise;
	}
	o.editPhoto = function(newPhoto){
		var q = $q.defer();
		$http.put(firebase + newPhoto._id + "/.json", newPhoto)
		.success(function(res){
			console.log("Edited in server");
			console.log(res);
			q.resolve();
		})
		.error(function(res){
			console.log(res);
			console.log("Error could not update photo on firebase");
		})
		return q.promise;
	}

	return o;
}]);

