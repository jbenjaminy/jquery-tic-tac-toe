$(document).ready(function(){
	// DECLARE VARIABLES FOR PLAYER 1, 2, CURRENT TURN
	var playerOne = "Player 1";
	var playerTwo = "Player 2";
	var currentTurn = playerOne;

	//DISPLAY GAMESTART STATUS (PLAYER 1'S TURN)
	displayStatus();
	
	$('.square').click(function(){
		// STOP USER FROM OVERRIDING OCCUPIED CELL
		if ($(this).text() !== '') {
			return;
		} 
		// PLACES X FOR 1, O FOR 2, THEN SWITCHES TURN
		if (currentTurn === playerOne) {
			$(this).text('X');
			currentTurn = playerTwo;
		} 
		else {
			$(this).text('O');
			currentTurn = playerOne;
		}
		// UPDATE STATUS
		displayStatus();

		// CHECKS IF GAME ENDS IN DRAWS
		// if ($('#board-table td').text() !== '') {
		// 	$('.status').text("Draw!");
		// 	gameOver();
		// } 
	});
	
	// FUNCTION: DISPLAY PLAY AGAIN BUTTON AT THE END
	function gameOver () {
		$('#start-new').show();
	}

	// NEW GAME CLEARS BOARD, RESET TURN AND STATUS
	$('#start-new').click(function() {
		$('.square').text('');
		currentTurn = playerOne;
		displayStatus();

	});

	// FUNCTION: DISPLAYS CURRENT PLAYER STATUS
	function displayStatus() {
		$('.status').text(currentTurn + "'s" + " turn");

	}
});
