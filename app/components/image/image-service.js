app.service('ImageService', function($http){
	this.getImage =  function(){
		return $http.get('http://www.splashbase.co/api/v1/images/random').then(function(res){
			console.log('Image Data:', res.data)
			return res.data;
		})
	}
})