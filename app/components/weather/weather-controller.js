app.controller('WeatherController', function(WeatherService){
	var wc = this;
	WeatherService.getWeather().then(function(weather){
		wc.weather = weather;
	})
	// DO NOT EDIT ABOVE
	
	
	
})