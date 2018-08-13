import WeatherController from "./components/weather/weather-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController()
    }
  }
}

window.app = new app()  