(function (){
	
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		//What can you do with this weather object?
	})
	
	
	
	
	
}())
