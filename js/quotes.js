const quotes = [
  {
    quote: "happess depends upon ourselves",
    author: "somi",
  },
  {
    quote: "happess depends upon only me",
    author: "somi22",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todatyQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todatyQuote.quote;
author.innerText = todatyQuote.author;