export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }

  getTemplate() {
    return `<h3 class="quote">"${this.quote}"</h3>`
  }
}