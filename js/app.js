$(document).ready(function(){
	// DECLARE VARIABLES FOR PLAYER 1, 2, CURRENT TURN
	var playerOne = "Player 1";
	var playerTwo = "Player 2";
	var currentTurn = playerOne;
	var turnNumber = 0

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
			turnNumber++;
		} 
		else {
			$(this).text('O');
			currentTurn = playerOne;
			turnNumber++;
		}
		// UPDATE STATUS
		displayStatus();

		for (var i = 1; i <= 3; i++) {
			$('#row1')
				// if we find x set counter, if xcounter = 3, win
		}


		// CHECKS IF GAME ENDS IN DRAWS
		if (turnNumber === 9) {
			$('.status').text("Draw!");
			gameOver();
		} 
	});
	
	// FUNCTION: DISPLAY PLAY AGAIN BUTTON AT THE END
	function gameOver () {
		$('#start-new').show();
	}

	// NEW GAME CLEARS BOARD, RESET TURN AND STATUS
	$('#start-new').click(function() {
		$('.square').text('');
		currentTurn = playerOne;
		turnNumber = 0;
		$('#start-new').hide();
		displayStatus();

	});

	// FUNCTION: DISPLAYS CURRENT PLAYER STATUS
	function displayStatus() {
		$('.status').text(currentTurn + "'s" + " turn");

	}
});
