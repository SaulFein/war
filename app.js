var twoClubs = new Card ('clubs', 2, 'two of clubs');
var threeClubs = new Card ('clubs', 3, 'three of clubs');
var fourClubs = new Card ('clubs', 4, 'four of clubs');
var fiveClubs = new Card ('clubs', 5, 'five of clubs');
var sixClubs = new Card ('clubs', 6, 'six of clubs');
var sevenClubs = new Card ('clubs', 7, 'seven of clubs');
var eightClubs = new Card ('clubs', 8, 'eight of clubs');
var nineClubs = new Card ('clubs', 9, 'nine of clubs');
var tenClubs = new Card ('clubs', 10, 'ten of clubs');
var jackClubs = new Card ('clubs', 11, 'jack of clubs');
var queenClubs = new Card ('clubs', 12, 'queen of clubs');
var kingClubs = new Card ('clubs', 13, 'king of clubs');
var aceClubs = new Card ('clubs', 14, 'ace of clubs');

var twoHearts = new Card ('hearts', 2, 'two of hearts');
var threeHearts = new Card ('hearts', 3, 'three of hearts');
var fourHearts = new Card ('hearts', 4, 'four of hearts');
var fiveHearts = new Card ('hearts', 5, 'five of hearts');
var sixHearts = new Card ('hearts', 6, 'six of hearts');
var sevenHearts = new Card ('hearts', 7, 'seven of hearts');
var eightHearts = new Card ('hearts', 8, 'eight of hearts');
var nineHearts = new Card ('hearts', 9, 'nine of hearts');
var tenHearts = new Card ('hearts', 10, 'ten of hearts');
var jackHearts = new Card ('hearts', 11, 'jack of hearts');
var queenHearts = new Card ('hearts', 12, 'queen of hearts');
var kingHearts = new Card ('hearts', 13, 'king of hearts');
var aceHearts = new Card ('hearts', 14, 'ace of hearts');

var twoSpades = new Card ('spades', 2, 'two of spades');
var threeSpades = new Card ('spades', 3, 'three of spades');
var fourSpades = new Card ('spades', 4, 'four of spades');
var fiveSpades = new Card ('spades', 5, 'five of spades');
var sixSpades = new Card ('spades', 6, 'six of spades');
var sevenSpades = new Card ('spades', 7, 'seven of spades');
var eightSpades = new Card ('spades', 8, 'eight of spades');
var nineSpades = new Card ('spades', 9, 'nine of spades');
var tenSpades = new Card ('spades', 10, 'ten of spades');
var jackSpades = new Card ('spades', 11, 'jack of spades');
var queenSpades = new Card ('spades', 12, 'queen of spades');
var kingSpades = new Card ('spades', 13, 'king of spades');
var aceSpades = new Card ('spades', 14, 'ace of spades');

var twoDiamonds = new Card ('diamonds', 2, 'two of diamonds');
var threeDiamonds = new Card ('diamonds', 3, 'three of diamonds');
var fourDiamonds = new Card ('diamonds', 4, 'four of diamonds');
var fiveDiamonds = new Card ('diamonds', 5, 'five of diamonds');
var sixDiamonds = new Card ('diamonds', 6, 'six of diamonds');
var sevenDiamonds = new Card ('diamonds', 7, 'seven of diamonds');
var eightDiamonds = new Card ('diamonds', 8, 'eight of diamonds');
var nineDiamonds = new Card ('diamonds', 9, 'nine of diamonds');
var tenDiamonds = new Card ('diamonds', 10, 'ten of diamonds');
var jackDiamonds = new Card ('diamonds', 11, 'jack of diamonds');
var queenDiamonds = new Card ('diamonds', 12, 'queen of diamonds');
var kingDiamonds = new Card ('diamonds', 13, 'king of diamonds');
var aceDiamonds = new Card ('diamonds', 14, 'ace of diamonds');

var deck = [twoClubs, threeClubs, fourClubs, fiveClubs, sixClubs, sevenClubs, eightClubs, nineClubs, tenClubs, jackClubs, queenClubs, kingClubs, aceClubs, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts, jackHearts, queenHearts, kingHearts, aceHearts, twoSpades, threeSpades, fourSpades, fiveSpades, sixSpades, sevenSpades, eightSpades, nineSpades, tenSpades, jackSpades, queenSpades, kingSpades, aceSpades, twoDiamonds, threeDiamonds, fourDiamonds, fiveDiamonds, sixDiamonds, sevenDiamonds, eightDiamonds, nineDiamonds, tenDiamonds, jackDiamonds, queenDiamonds, kingDiamonds, aceDiamonds];

function Card(suit, value, name) {
  this.suit = suit;
  this.value = value;
  this.name = name;
}

function shuffleDeck () {
  deck.sort(function() { return 0.5 - Math.random() });
}

var i = 0;
var j = 1;

$('#next').on('click', function() {

    i += 1;
    j += 1; //need to set one to odd #s and one to even #s only

    $('#warspace').text(deck[i].name + " " + "vs" + " " + deck[j].name);
    if(deck[i].value > deck[j].value) {
      $('#winner').text("player one wins the round");
    } else {
      $('#winner').text("player two wins the round");
    }
    console.log(deck[i].value, deck[j].value);
  }
);

shuffleDeck();
// display();
// displayWinner();
// console.log(deck[0], deck[1]);
