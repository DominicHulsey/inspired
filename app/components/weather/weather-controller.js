import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let weather = _weatherService.Weather
	document.getElementById('weather').innerHTML = weather.getTemplate()
}
export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()

	}

}
