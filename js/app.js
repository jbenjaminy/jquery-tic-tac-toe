$(document).ready(function(){
'use strict';
	/* ---------- VARIABLES ----------*/
	var playerOne = "X";
	var playerTwo = "O";
	var currentTurn = playerOne;
	var turnNumber = 0;  // TURN-COUNTER
	var checkMark = '';  // STATUS OF EACH BOX

	/* ---------- FUNCTIONS ----------*/
	function displayStatus() {  // DISPLAYS STATUS
		$('.status').text(currentTurn + "'s" + " turn");
	}

	function checkDiagonalRight (player) {  // CHECK WINNING CONDITION DIAGONALLY (FROM RIGHT)
		return $('#3-1').text() === player && $('#2-2').text() === player && $('#1-3').text() === player;
	}

	function checkDiagonalLeft (player) {  // CHECK WINNING CONDITION DIAGONALLY (FROM LEFT)
		return $('#1-1').text() === player && $('#2-2').text() === player && $('#3-3').text() === player;
	}

	function showNewGame () {  // SHOW NEW GAME BUTTON
		$('#start-new').show();
	}

	/* ---------- CODE-BODY ----------*/
	displayStatus();  //DISPLAY GAMESTART STATUS (PLAYER 1'S TURN)
	
	$('.square').click(function(){
		// STOP USER FROM OVERRIDING OCCUPIED CELL
		if ($(this).text() !== '') {
			return;
		} 
		// PLACES MARK ( X OR O ) THEN SWITCHES TURN
		if (currentTurn === playerOne) {
			$(this).text('X');
			currentTurn = playerTwo;
			turnNumber++;
		} else {
			$(this).text('O');
			currentTurn = playerOne;
			turnNumber++;
		}
		// UPDATE STATUS
		displayStatus();

		// WIN CONDITION FOR VERTICAL SETS
		for (var i = 1; i <= 3; i++) {
			checkMark = $('#1-' + i).text();
			if (checkMark !== '') {
				if (checkDiagonalRight(checkMark)) {
					$('.status').text(checkMark + ' Wins');
					showNewGame();
					break;  // FOR BUG-FIX (DRAW OVERRIDING LAST-TURN WIN)
				} else if (checkDiagonalLeft(checkMark)) {
					$('.status').text(checkMark + ' Wins');
					showNewGame();
					break;
				} else if ($('#2-' + i).text() === checkMark) {
					if ($('#3-' + i).text() === checkMark) {
						$('.status').text(checkMark + ' Wins');
						showNewGame();
						break;
					}
				} else if (turnNumber === 9) {
					$('.status').text("Draw!");
					showNewGame();
					break;
				}
			}
		}

		// WIN CONDITION FOR HORIZONTAL SETS
		for (var j = 1; j <= 3; j++) {
			checkMark = $('#' + j + '-1').text();
			if (checkMark !== '') {
				if (checkDiagonalRight(checkMark)) {
					$('.status').text(checkMark + ' Wins');
					showNewGame();
					break;
				} else if (checkDiagonalLeft(checkMark)) {
					$('.status').text(checkMark + ' Wins');
					showNewGame();
					break;
				} else if ($('#' + j + '-2').text() === checkMark) {
					if ($('#' + j + '-3').text() === checkMark) {
						$('.status').text(checkMark + ' Wins');
						showNewGame();
						break;
					}
				} else if (turnNumber === 9) {
					$('.status').text("Draw!");
					showNewGame();
					break;
				}
			}
		}
	});
	
	// NEW GAME CLEARS BOARD, RESET TURN AND STATUS
	$('#start-new').click(function() {
		$('.square').text('');
		currentTurn = playerOne;
		turnNumber = 0;
		checkMark = '';
		$('#start-new').hide();
		displayStatus();

	});
});
