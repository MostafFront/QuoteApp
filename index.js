
var quotes = 
[
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
        "Imagination is more important than knowledge. - Albert Einstein",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];


var previousIndex = -1;

function displayQuote() {
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === previousIndex);

  document.getElementById("quote").textContent = quotes[randomIndex];

  previousIndex = randomIndex;
}
