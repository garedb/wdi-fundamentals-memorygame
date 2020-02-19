const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
let checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

let flipCard = function(cardId) {
	flipCard(0);
	flipCard(2);
		if (cardsInPlay === 2) {
	}else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again.")
	}
	console.log("User flipped queen" + cards[cardId] || "User flipped king" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	}