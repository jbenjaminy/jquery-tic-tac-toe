$(document).ready(function(){

	var playerOne = "Player 1"
	var playerTwo = "Player 2"
	var currentTurn = playerOne

	displayStatus();
	
$('.square').click(function(){
	// if player 1 -- .text X
	// if player 2 -- .text O
		// 
});

// finish turn button
// Side div displays which player's turn

// logic for winner
// display alert Congrats, Player X wins!
// start new game button

function displayStatus() {
	$('.status').text(currentTurn + "'s" + " turn");

};

});
