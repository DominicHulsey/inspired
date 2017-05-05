function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);

	this.getWeather = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			callWhenDone(res);
		})
	}
}
