export default class Quote {
  constructor(data) {
    this.quote = data.body
    this.author = data.author
  }

  getTemplate() {
    return `<h5 class="quote"><i>${this.quote}</i></h5>`
  }
}