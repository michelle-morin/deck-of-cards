$(document).ready(function() {
  var cardTypes = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

  var suitTypes = ["clubs", "spades", "diamonds", "hearts"];

  var deckOfCards = [];
  cardTypes.forEach(function(cardType) {
    deckOfCards.push(cardType + " of " + suitTypes[0]);
    deckOfCards.push(cardType + " of " + suitTypes[1]);
    deckOfCards.push(cardType + " of " + suitTypes[2]);
    deckOfCards.push(cardType + " of " + suitTypes[3]);
  });
  console.log(deckOfCards);

  deckOfCards.forEach(function(card) {
    $("ul").append("<li>" + card + "</li>");
  });
});
