(function(module) {

  var cardsInSuit = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

  var deck = [];
  var deck1 = [];
  var deck2 = [];
  var i = 0;
  var j = 0;
  var p1s = 0;
  var p2s = 0;
  var playerOne;

  function Card(suit, value, name, img) {
    this.suit = suit;
    this.value = value;
    this.name = name;
    this.img = img;
  }

  Card.takeUserInput = function(){
    // $('#userinput').show().siblings().hide();
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

  Card.displayWinner = function() {
    $('#warspace').append(' ' + deck2[j].img);
    if(deck1[i].value > deck2[j].value) {
      $('#winner').text(playerOne + ' wins the round');
      p1s++;
    } else {
      $('#winner').text('computer wins the round');
      p2s++;
    }
    console.log(deck1[i].value, deck2[j].value);
  };

  Card.gameOver = function() {
    alert('game over! ' + playerOne + ' score = ' + p1s + ' Computer score ' + p2s);
    $('#next').hide();
    var $ngb = $('<input type="button" value="New Game" />');
    $ngb.appendTo($('#newgame'));
    $('#newgame').show();
    $ngb.on('click', function(){
      window.location.reload();
    });
  };

  Card.playGame = function() {
    $('#next').on('click', function() {
      i += 1;
      j += 1;
      $('#winner').text('');
      if(i == 26){
        Card.gameOver();
      } else {
        $('#warspace').html(deck1[i].img + ' ' + 'vs');
        setTimeout('Card.displayWinner()', 500);
      }
    }
  );};

  // Card.takeUserInput();
  Card.playGame();
  Card.createSuit('Clubs');
  Card.createSuit('Spades');
  Card.createSuit('Diamonds');
  Card.createSuit('Hearts');
  Card.shuffleDeck();

  module.Card = Card;
})(window);
