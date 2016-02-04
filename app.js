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
  var warPot = [];

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

  Card.handleWar = function() {
    $('#warspace').text('');
    Card.flip();
    if(deck1.length -1 === 0 || deck2.length -1 === 0){
      Card.gameOver();
    } else {
      $('#winner').text('');
      setTimeout('Card.displayCard1();', 500);
      setTimeout('Card.displayCard2();', 500);
      setTimeout('Card.displayWinner();', 1000);
      setTimeout('$("#next").show();', 1000);
    }
  };

  Card.playerOneWins = function(){
    $('#winner').text(playerOne + ' wins the round');
    p1s++;
    deck1.push(deck2[j], deck1[i]);
    deck2.splice(j, 1);
    deck1.splice(i, 1);
    deck1 = deck1.concat(warPot);
    warPot = [];
    console.log(deck1);
    console.log(deck2);
  };

  Card.playerTwoWins = function(){
    $('#winner').text('Computer wins the round');
    p2s++;
    deck2.push(deck1[i], deck2[j]);
    deck1.splice(i, 1);
    deck2.splice(j, 1);
    deck2 = deck2.concat(warPot);
    warPot = [];
    console.log(deck1);
    console.log(deck2);
  };

  Card.war = function() {
    console.log('WAR!!!!');
    $('#winner').text('WAR!!!');
    $('#next').hide();
    warPot.push(deck1[i], deck2[j]);
    deck1.splice(i, 1);
    deck2.splice(j, 1);
    console.log(warPot);
    setTimeout('Card.handleWar();', 2000);
  };

  Card.displayWinner = function() {
    if (deck1[i].value == deck2[j].value){
      Card.war();
    } else if (deck1[i].value > deck2[j].value) {
      Card.playerOneWins();
    } else {
      Card.playerTwoWins();
    }
    console.log(playerOne + ' has ' + deck1.length + ' cards');
    console.log('The computer has ' + deck2.length + ' cards');
    console.log('------------------------------------');
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

  var logCards = function() {
    console.log('i = ' + i + ' j = ' + j);
    console.log('player = ' + deck1[i].name + ' computer = ' + deck2[j].name);

  };

  Card.flip = function() {
    if (i >= deck1.length -1) {
      i = 0;
      console.log(playerOne + ' hit the end of their deck');
      logCards();
    } else if (j >= deck2.length -1) {
      j = 0;
      console.log('The Computer hit the end of its deck');
      logCards();
    } else {
      i++;
      j++;
      logCards();
    }
  };

  Card.playGame = function() {
    $('#next').on('click', function() {
      Card.flip();
      $('#winner').text('');
      $('#warspace').text('');
      if(deck1.length -1 === 0 || deck2.length -1 === 0){
        Card.gameOver();
      } else {
        // Card.displayCard1();
        // Card.displayCard2();
        setTimeout('Card.displayCard1()', 500);

        setTimeout('Card.displayCard2()', 500);
        setTimeout('Card.displayWinner()', 1000);
      }
    }
  );};

  Card.displayCard1 = function() {
    $('#warspace').html(deck1[i].img + ' ' + 'vs');
  };

  Card.displayCard2 = function() {
    $('#warspace').append(' ' + deck2[j].img);
  };

  Card.createSuit('Clubs');
  Card.createSuit('Spades');
  Card.createSuit('Diamonds');
  Card.createSuit('Hearts');
  Card.shuffleDeck();
  Card.playGame();

  module.Card = Card;
})(window);
