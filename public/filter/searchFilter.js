angular.module("app").
filter('searchFilter', function () {
    return function(arr,searchString){
    	if(!searchString){
    		return arr;
    	}
    	var result = [];
    	searchString = searchString.toLowerCase();

    	for(var i = 0;i < arr.length;i++){
    		if((arr[i].name.toLowerCase().indexOf(searchString) !== -1) || (arr[i].artist.toLowerCase().indexOf(searchString) !== -1)){
    			result.push(arr[i]);
    		}
    	}


    	return result;
    }
});