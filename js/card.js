(function(module) {

  function Card(suit, value, name, img) {
    this.suit = suit;
    this.value = value;
    this.name = name;
    this.img = img;
  }

  Card.takeUserInput = function(){
    playerOne = $('#userinputfield').val();
    console.log(playerOne);
  };

  Card.createSuit = function(suit){
    for (var i = 0; i < 13; i++) {
      deck.push(new Card ( suit, parseInt([i]) + 2, cardsInSuit[i] + ' of ' + suit, '<img src="img/' + cardsInSuit[i] + suit + '.png">'));
    }
  };

  Card.shuffleDeck = function() {
    deck.sort(function() { return 0.5 - Math.random();});
    for (var i = 0; i < deck.length; i += 2){
      deck1.push(deck[i]);
      deck[i + 1] && deck2.push(deck[i + 1]);
    };
  };

  Card.createSuit('Clubs');
  Card.createSuit('Spades');
  Card.createSuit('Diamonds');
  Card.createSuit('Hearts');
  Card.shuffleDeck();
  Game.playGame();

  module.Card = Card;
})(window);
