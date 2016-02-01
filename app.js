(function(module) {

  var cardsInSuit = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

  var deck = [];
  var deck1 = [];
  var deck2 = [];
  var i = -1;
  var j = -1;
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
    // if (deck1[i].value == deck2[j].value){
    //   console.log('WAR!!!!');
    // } else
    if (deck1[i].value > deck2[j].value) {
      $('#winner').text(playerOne + ' wins the round');
      p1s++;
      deck1.push(deck2[j]);
      deck1.push(deck1[i]);
      deck2.splice(j, 1);
      deck1.splice(i, 1);
      // console.log(deck1);
      // console.log(deck2);
    } else {
      $('#winner').text('computer wins the round');
      p2s++;
      deck2.push(deck1[i]);
      deck2.push(deck2[j]);
      deck1.splice(i, 1);
      deck2.splice(j, 1);
      // console.log(deck1);
      // console.log(deck2);
    }
    console.log(playerOne + ' has ' + deck1.length + ' cards');
    console.log('The computer has ' + deck2.length + ' cards');
    // console.log(deck1[i].value, deck2[j].value);
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

  Card.flip = function(){
    if (i >= deck1.length -1) {
      i = 0;
      console.log(playerOne + ' hit the end of their deck');
    }
    if (j >= deck2.length -1) {
      j = 0;
      console.log('The Computer hit the end of its deck');
    } else {
      i += 1;
      j += 1;
      console.log('i = ' + i + ' j = ' + j);
    }
  };

  Card.playGame = function() {
    $('#next').on('click', function() {
      Card.flip();
      $('#winner').text('');
      if(deck1.length -1 === 0 || deck2.length -1 === 0){
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
