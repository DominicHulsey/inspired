export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.temperature = ((9 / 5) * (data.main.temp - 273) + 32).toFixed(0)
    this.hourImg = hour()

    function hour() {
      let d = new Date
      let hour = d.getHours()
      if (hour <= 8 || hour >= 20) {
        return `assets/moon.png`
      }
      else if (hour <= 16) {
        return `assets/sun.png`
      }
      else if (hour > 16 || hour < 20) {
        return `assets/sunSet.png`
      }
    }
  }
  getTemplate() {
    return `
    <div class="col-3">
<h3 class="quote" id="back">${this.city}<hr> ${this.temperature}°</h3></div>
<div class="col-9">
<img class="weatherLogo" src="${this.hourImg}" /></div>
`
  }

}