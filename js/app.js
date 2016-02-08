var cardsInSuit = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

var deck = [];
var deck1 = [];
var deck2 = [];
var playerOne;

(function(module) {

  var Game = {};
  var i = -1;
  var j = -1;
  var p1s = 0;
  var p2s = 0;
  var warPot = [];

  Game.playerOneWins = function(){
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

  Game.playerTwoWins = function(){
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

  Game.handleWar = function() {
    $('#warspace').text('');
    Game.flip();
    if(deck1.length -1 === 0 || deck2.length -1 === 0){
      Game.gameOver();
    } else {
      $('#winner').text('');
      setTimeout('Game.displayCard1();', 500);
      setTimeout('Game.displayCard2();', 500);
      setTimeout('Game.displayWinner();', 1000);
      setTimeout('$("#next").show();', 1000);
    }
  };

  Game.war = function() {
    console.log('WAR!!!!');
    $('#winner').text('WAR!!!');
    $('#next').hide();
    for(var k = 0; k <= 3; k++){
      warPot.push(deck1[i], deck2[j]);
      deck1.splice(i, 1);
      deck2.splice(j, 1);
      Game.flip();
    }
    warPot.push(deck1[i], deck2[j]);
    deck1.splice(i, 1);
    deck2.splice(j, 1);
    console.log(warPot);
    setTimeout('Game.handleWar();', 2000);
  };

  Game.flip = function() {
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

  Game.displayWinner = function() {
    if (deck1[i].value == deck2[j].value){
      Game.war();
    } else if (deck1[i].value > deck2[j].value) {
      Game.playerOneWins();
    } else {
      Game.playerTwoWins();
    }
    console.log(playerOne + ' has ' + deck1.length + ' cards');
    console.log('The computer has ' + deck2.length + ' cards');
    console.log('------------------------------------');
  };

  Game.gameOver = function() {
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

  Game.playGame = function() {
    $('#next').on('click', function() {
      $('.button').prop('disabled', true);
      Game.flip();
      $('#winner').text('');
      $('#warspace').text('');
      if(deck1.length -1 === 0 || deck2.length -1 === 0){
        Game.gameOver();
      } else {
        setTimeout('Game.displayCard1()', 500);
        setTimeout('Game.displayCard2()', 500);
        setTimeout('Game.displayWinner()', 1000);
        setTimeout('$(".button").prop("disabled", false);', 1000);
      }
    }
  );};

  Game.displayCard1 = function() {
    $('#warspace').html(deck1[i].img + ' ' + 'vs');
  };

  Game.displayCard2 = function() {
    $('#warspace').append(' ' + deck2[j].img);
  };

  module.Game = Game;
})(window);
