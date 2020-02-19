const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = []; {
let checkForMatch = function() {
	} if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

let flipCard = function(cardId) {
	} flipCard(0); {
	} flipCard(2); {
		 if (cardsInPlay === 2) {
	} else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again.")

	console.log("User flipped " + cards[cardId].rank); 
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardImage]);
	console.log(cards[suit]);
}