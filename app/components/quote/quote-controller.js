import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let quote = _qs.quotes
  document.getElementById('quote').innerHTML = quote.getTemplate()
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quotes', drawQuote)
    _qs.getQuotes()
  }
}
