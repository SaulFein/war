var cardsInSuit = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

var deck = [];
var deck1 = [];
var deck2 = [];

function Card(suit, value, name, img) {
  this.suit = suit;
  this.value = value;
  this.name = name;
  this.img = img;
}

function createSuit(suit){
  for (var i = 0; i < 13; i++) {
    // console.log(cardsInSuit[i] + suit);
    deck.push(new Card ( suit, parseInt([i]) + 2, cardsInSuit[i] + " of " + suit, '<img src="img/' + cardsInSuit[i] + suit + '.png">'));
  }
}

function shuffleDeck () {
  deck.sort(function() { return 0.5 - Math.random() });
  for (var i = 0; i < deck.length; i += 2){
      deck1.push(deck[i]);
      deck[i + 1] && deck2.push(deck[i + 1]);
  };
}

  var i = 0;
  var j = 0;

  function displayWinner() {
    if(deck1[i].value > deck2[j].value) {
      $('#winner').text("player one wins the round");
    } else {
      $('#winner').text("player two wins the round");
    }
    console.log(deck1[i].value, deck2[j].value);
  }


$('#next').on('click', function() {
    i += 1;
    j += 1;
    $('#winner').text("");
    $('#warspace').html(deck1[i].img + " " + "vs" + " " + deck2[j].img);
    // $('#warspace').html(this.img);
  setTimeout('displayWinner()', 500)
  }
);

createSuit("Clubs");
createSuit("Spades");
createSuit("Diamonds");
createSuit("Hearts");
shuffleDeck();
