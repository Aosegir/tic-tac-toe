const gameBoard = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];

function markBoard (square, team) {
    
    if(gameBoard[square] !== 'X' && gameBoard[square] !== 'O') {
        gameBoard.splice(square, 1, team);
    } else {
        console.log("Hey! That's an illegal move! You lose your turn!");
    }
    console.log(gameBoard);
    checkGameState(square, team);
}

/*
    This function checks the state of the board to determine if a winner
    can be declared.
*/
function checkGameState (square, team) {
    // Switch case to check board based on most recent square marked
    switch(square) {
        /*
            Case 0 - 1st Square - 3 possible wins
        */
        case 0:
            if(gameBoard[1] === team && gameBoard[2] === team) {
                // 1st Win - Row 1 (0, 1, 2)
                console.log(`Row 1 victory! ${team} team wins!`);
            } else if(gameBoard[3] === team && gameBoard[6] === team) {
                // 2nd Win - Column 1 (0, 3, 6)
                console.log(`Column 1 victory! ${team} team wins!`);
            } else if (gameBoard[4] === team && gameBoard[8] === team) {
                // 3rd Win - Diagonal 1 (0, 4, 8)
                console.log(`Diagonal 1 victory! ${team} team wins!`);
            }
            break;
        /*
            Case 1 - 2nd Square - 2 possible wins
        */
        case 1:
            if(gameBoard[0] === team && gameBoard[2] === team) {
                // 1st Win - Row 1 (0, 1, 2)
                console.log(`Row 1 victory! ${team} team wins!`);
            } else if(gameBoard[4] === team && gameBoard[7] === team) {
                // 2nd Win - Column 2 (1, 4, 7)
                console.log(`Column 2 victory! ${team} team wins!`);
            }
            break;
        /*
            Case 2 - 3rd Square - 3 possible wins
        */
        case 2:
            if(gameBoard[0] === team && gameBoard[1] === team) {
                // 1st Win - Row 1 (0, 1, 2)
                console.log(`Row 1 victory! ${team} team wins!`);
            } else if(gameBoard[5] === team && gameBoard[8] === team) {
                // 2nd Win - Column 3 (2, 5, 8)
                console.log(`Column 3 victory! ${team} team wins!`);
            } else if (gameBoard[4] === team && gameBoard[6] === team) {
                // 3rd Win - Diagonal 2 (2, 4, 6)
                console.log(`Diagonal 2 victory! ${team} team wins!`);
            }
            break;
        /*
            Case 3 - 4th Square - 2 possible wins
        */
        case 3:
            if(gameBoard[4] === team && gameBoard[5] === team) {
                // 1st Win - Row 2 (3, 4, 5)
                console.log(`Row 2 victory! ${team} team wins!`);
            } else if(gameBoard[0] === team && gameBoard[6] === team) {
                // 2nd Win - Column 1 (0, 3, 6)
                console.log(`Column 1 victory! ${team} team wins!`);
            }
            break;
        /*
            Case 4 - 5th Square - 4 possible wins
        */
        case 4:
            if(gameBoard[3] === team && gameBoard[5] === team) {
                // 1st Win - Row 2 (3, 4, 5)
                console.log(`Row 2 victory! ${team} team wins!`);
            } else if(gameBoard[1] === team && gameBoard[7] === team) {
                // 2nd Win - Column 2 (1, 4, 7)
                console.log(`Column 2 victory! ${team} team wins!`);
            } else if (gameBoard[0] === team && gameBoard[8] === team) {
                // 3rd Win - Diagonal 1 (0, 4, 8)
                console.log(`Diagonal 1 victory! ${team} team wins!`);
            } else if (gameBoard[2] === team && gameBoard[6] === team) {
                // 3rd Win - Diagonal 2 (2, 4, 6)
                console.log(`Diagonal 2 victory! ${team} team wins!`);
            }
            break;
        /*
            Case 5 - 6th Square - 2 possible wins
        */
        case 5:
            if(gameBoard[3] === team && gameBoard[4] === team) {
                // 1st Win - Row 2 (3, 4, 5)
                console.log(`Row 2 victory! ${team} team wins!`);
            } else if(gameBoard[2] === team && gameBoard[8] === team) {
                // 2nd Win - Column 3 (2, 5, 8)
                console.log(`Column 3 victory! ${team} team wins!`);
            }
            break;
        /*
            Case 6 - 7th Square - 3 possible wins
        */
        case 6:
            if(gameBoard[7] === team && gameBoard[8] === team) {
                // 1st Win - Row 3 (6, 7, 8)
                console.log(`Row 3 victory! ${team} team wins!`);
            } else if(gameBoard[0] === team && gameBoard[3] === team) {
                // 2nd Win - Column 1 (0, 3, 6)
                console.log(`Column 1 victory! ${team} team wins!`);
            } else if (gameBoard[2] === team && gameBoard[4] === team) {
                // 3rd Win - Diagonal 2 (2, 4, 6)
                console.log(`Diagonal 2 victory! ${team} team wins!`);
            }
            break;
        /*
            Case 7 - 8th Square - 2 possible wins
        */
        case 7:
            if(gameBoard[6] === team && gameBoard[8] === team) {
                // 1st Win - Row 3 (6, 7, 8)
                console.log(`Row 3 victory! ${team} team wins!`);
            } else if(gameBoard[1] === team && gameBoard[4] === team) {
                // 2nd Win - Column 2 (1, 4, 7)
                console.log(`Column 2 victory! ${team} team wins!`);
            }
            break;
        /*
            Case 8 - 8th Square - 3 possible wins
        */
        case 8:
            if(gameBoard[6] === team && gameBoard[7] === team) {
                // 1st Win - Row 3 (6, 7, 8)
                console.log(`Row 3 victory! ${team} team wins!`);
            } else if(gameBoard[2] === team && gameBoard[5] === team) {
                // 2nd Win - Column 3 (2, 5, 8)
                console.log(`Column 3 victory! ${team} team wins!`);
            } else if (gameBoard[0] === team && gameBoard[4] === team) {
                // 3rd Win - Diagonal 1 (0, 4, 8)
                console.log(`Diagonal 1 victory! ${team} team wins!`);
            }
            break;
        // Default - something has gone wrong
        default:
            console.log("Error! Something bad happened!");
            break;
    }
}

markBoard(1, 'X');
markBoard(4, 'X');
markBoard(7, 'X');

// there should be two players: one with team X, one with team O
// the players go back and forth, updating the game board as they play
// markBoard seems to work for taking in a square and team value and altering array
// how to make players change every turn?