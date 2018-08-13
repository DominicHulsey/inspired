const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);

const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class WeatherService {

	getWeather(callWhenDone) {
		console.log('Calling the Weatherman')
		weatherApi.get(apiUrl)
			.then(function (res) {
				localStorage.setItem('weather', JSON.stringify(res.data))
				// HEY FUN FACT 
				// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
				// res.data.temp is the temperature in Kelvin
				// You should probably convert the temperature data to either F or C
				callWhenDone(res);
			})
	}
}
