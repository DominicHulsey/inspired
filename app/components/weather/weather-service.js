function WeatherService(){
	
	this.getWeather =  function(callWhenDone){
		var w = localStorage.getItem('weather');
		if(w){
			w = JSON.parse(w);
			console.log('Weather Data:', w)
			return callWhenDone(w)
		}
		
		$.get('http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35', function(res){
			localStorage.setItem('weather', JSON.stringify(res))
			callWhenDone(res);
		})
	}
}
