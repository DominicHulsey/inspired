app.service('WeatherService', function($q, $http){
	this.getWeather =  function(){
		var w = localStorage.getItem('weather');
		if(w){
			var deferred = $q.defer();
			deferred.resolve(JSON.parse(w))
			console.log('Weather Data:', JSON.parse(w))
			return deferred.promise;
		}
		
		return $http.get('http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35').then(function(res){
			localStorage.setItem('weather', JSON.stringify(res.data))
			console.log('Weather Data:', res.data)
			return res.data;
		})
	}
})