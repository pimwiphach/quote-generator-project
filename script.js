const quotes = [
  {
    name: "Tim Notke",
    quote: "Hard work beats talent when talent fails to work hard."
  },
  {
    name: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop."
  },
  {
    name: "Henry Ford",
    quote:
      "One of the greatest discoveries a person makes is to find they can do what they were afraid they couldn't do."
  },
  {
    name: "Leonardo da Vinci",
    quote: "Learning never exhausts the mind."
  },
  {
    name: "Alina Wheeler",
    quote: "Design is intelligence made visible."
  },
  {
    name: "Steve Jobs",
    quote:
      "Design is not just what it looks like and feels like. Design is how it works."
  },
  {
    name: "Paul Rand",
    quote: "Design is the silent ambassador of your brand."
  }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
