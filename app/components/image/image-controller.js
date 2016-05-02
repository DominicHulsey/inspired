app.controller('ImageController', function(ImageService){
	var ic = this;
	ImageService.getImage().then(function(imageData){
		ic.imageData = imageData;
	})
	// DO NOT EDIT ABOVE
	
})