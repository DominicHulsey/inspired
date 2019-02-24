export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.temperature = ((9 / 5) * (data.main.temp - 273) + 32).toFixed(0)
  }

  getTemplate() {
    return `<h4 class="quote">${this.city}</h4>
<h4 class="quote">${this.temperature}°</h4`
  }

}