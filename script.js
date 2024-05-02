/*
    what is everything you need to play a game of tic-tac-toe?
        a board
        players
        a 'game' - a time the players agree to sit down and play on the board

    when playing tic-tac-toe, what does...
        the board do?
            the board is a 3x3 grid that serves as a visual
            display that displays the actions of the players
        the player do?
            the player marks the board with their 'team' in an unoccupied spot
            on the board
        the game do?
            the game goes until a player has connected three of their
            'team' in a row, column, or diagonal, or the players have placed
            their 'team' in all 9 squares and can no longer make moves
    
    so, therefore, the board needs...
        something to store the values of nine distinct spaces, and i think thats it?
    and the player needs...
        a 'team' with which to mark the board
    and the game needs...
        something to, after every move, determine if the game has been won or
        if there are no more legal moves, and it is a draw

    great, now let's look from the outside in...
        the board acts on the players by using turn order to deteremine who acts
        and when
            the players act on the board by marking the individual spaces
            with their 'team'
                the board displays the values

    what does this mean?
        assume that the game must be able to read both the player and the board
            assume that the player must be able to read the board

    and now work from the inside out.
        begin with the board. create something to store 9 distinct values.
            create the player, something which has a 'team'
                create the game, something that checks for winners or a draw
*/

function createBoard() {
    // board has 9 distinct values corresponding to the 3x3 grid
    let array = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];

    const getArray = () => array;
    const setArray = (team) => {
        let square = -1;
        do {
            square = prompt("Please select a square (1-9)");
            square--;
        } while ((square < 0 || square > 8) ||
            (array[square] === 'X' || array[square] === 'O'));
        array.splice(square, 1, team);
        document.getElementById(`${square}`).innerHTML = team;
        return square;
    };

    const checkWinner = (square, team) => {
        let winner = false;
        switch(square) {
            /*
                Case 0 - 1st Square - 3 possible wins
            */
            case 0:
                if(getArray()[1] === team && getArray()[2] === team) {
                    // 1st Win - Row 1 (0, 1, 2)
                    console.log(`Row 1 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[3] === team && getArray()[6] === team) {
                    // 2nd Win - Column 1 (0, 3, 6)
                    console.log(`Column 1 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[4] === team && getArray()[8] === team) {
                    // 3rd Win - Diagonal 1 (0, 4, 8)
                    console.log(`Diagonal 1 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 1 - 2nd Square - 2 possible wins
            */
            case 1:
                if(getArray()[0] === team && getArray()[2] === team) {
                    // 1st Win - Row 1 (0, 1, 2)
                    console.log(`Row 1 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[4] === team && getArray()[7] === team) {
                    // 2nd Win - Column 2 (1, 4, 7)
                    console.log(`Column 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 2 - 3rd Square - 3 possible wins
            */
            case 2:
                if(getArray()[0] === team && getArray()[1] === team) {
                    // 1st Win - Row 1 (0, 1, 2)
                    console.log(`Row 1 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[5] === team && getArray()[8] === team) {
                    // 2nd Win - Column 3 (2, 5, 8)
                    console.log(`Column 3 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[4] === team && getArray()[6] === team) {
                    // 3rd Win - Diagonal 2 (2, 4, 6)
                    console.log(`Diagonal 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 3 - 4th Square - 2 possible wins
            */
            case 3:
                if(getArray()[4] === team && getArray()[5] === team) {
                    // 1st Win - Row 2 (3, 4, 5)
                    console.log(`Row 2 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[0] === team && getArray()[6] === team) {
                    // 2nd Win - Column 1 (0, 3, 6)
                    console.log(`Column 1 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 4 - 5th Square - 4 possible wins
            */
            case 4:
                if(getArray()[3] === team && getArray()[5] === team) {
                    // 1st Win - Row 2 (3, 4, 5)
                    console.log(`Row 2 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[1] === team && getArray()[7] === team) {
                    // 2nd Win - Column 2 (1, 4, 7)
                    console.log(`Column 2 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[0] === team && getArray()[8] === team) {
                    // 3rd Win - Diagonal 1 (0, 4, 8)
                    console.log(`Diagonal 1 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[2] === team && getArray()[6] === team) {
                    // 3rd Win - Diagonal 2 (2, 4, 6)
                    console.log(`Diagonal 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 5 - 6th Square - 2 possible wins
            */
            case 5:
                if(getArray()[3] === team && getArray()[4] === team) {
                    // 1st Win - Row 2 (3, 4, 5)
                    console.log(`Row 2 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[2] === team && getArray()[8] === team) {
                    // 2nd Win - Column 3 (2, 5, 8)
                    console.log(`Column 3 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 6 - 7th Square - 3 possible wins
            */
            case 6:
                if(getArray()[7] === team && getArray()[8] === team) {
                    // 1st Win - Row 3 (6, 7, 8)
                    console.log(`Row 3 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[0] === team && getArray()[3] === team) {
                    // 2nd Win - Column 1 (0, 3, 6)
                    console.log(`Column 1 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[2] === team && getArray()[4] === team) {
                    // 3rd Win - Diagonal 2 (2, 4, 6)
                    console.log(`Diagonal 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 7 - 8th Square - 2 possible wins
            */
            case 7:
                if(getArray()[6] === team && getArray()[8] === team) {
                    // 1st Win - Row 3 (6, 7, 8)
                    console.log(`Row 3 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[1] === team && getArray()[4] === team) {
                    // 2nd Win - Column 2 (1, 4, 7)
                    console.log(`Column 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 8 - 8th Square - 3 possible wins
            */
            case 8:
                if(getArray()[6] === team && getArray()[7] === team) {
                    // 1st Win - Row 3 (6, 7, 8)
                    console.log(`Row 3 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[2] === team && getArray()[5] === team) {
                    // 2nd Win - Column 3 (2, 5, 8)
                    console.log(`Column 3 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[0] === team && getArray()[4] === team) {
                    // 3rd Win - Diagonal 1 (0, 4, 8)
                    console.log(`Diagonal 1 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            // Default - something has gone wrong
            default:
                console.log("Error! Something bad happened!");
                break;
        }
        return winner;
    };

    return { getArray, setArray, checkWinner };
}

function createPlayer(team) {
    return { team };
}

function createGame() {
    let turn = 1;

    const getTurn = () => turn;
    const nextTurn = () => turn++;

    const player1 = createPlayer('X');
    const player2 = createPlayer('O');

    const board = createBoard();

    const playGame = () => {
        /*
            game starts at turn 1
            game ends when someone has won OR 9 turns have passed
            player 1 acts on odd turns and player 2 on even?
        */
       let winner = false;
        while(turn <= 9) {
            if(winner) {
                break;
            }
            if(getTurn() % 2) {
                let square = board.setArray(player1.team);
                winner = board.checkWinner(square, player1.team);
            } else {
                let square = board.setArray(player2.team);
                winner = board.checkWinner(square, player2.team);
            }
            nextTurn();
        }

    };

    return { player1, player2, board, playGame };
}

const playGame = document.getElementById('play-game');

playGame.addEventListener('click', () => {
    const game = createGame();
    game.playGame();
});

/*

(function startGame (board) {
        document.querySelectorAll('.game-square').forEach((square) => {
            square.innerHTML = '';
            square.addEventListener('click', () => {
                board.setArray(square.id, team);
                winner = board.checkWinner(Number(square.id), team);
            });
        });
    })(game.board);


const gameBoard = document.getElementById('game-board');
let winner = false;

/*
    Factory Functions

function createPlayer(team) {
    return { team };
};

function createGame() {
    let { getBoard } = createGameBoard();
}

function createGameBoard() {
    const gameBoardArray = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];

    const getBoard = () => gameBoardArray;
    console.log(getBoard);

    function markBoard (team) {
        // run if statement
        // if statement can resolve, let it resolve
        // if not, run if again
        if(!gameBoardArray.includes('.') || winner) {
            return;
        }
        let square;
        do {
            square = prompt("Please select a square (1-9)");
            square--;
            if(gameBoardArray[square] !== 'X' && gameBoardArray[square] !== 'O') {
                gameBoardArray.splice(square, 1, team);
            }
        } while (gameBoardArray[square] !== 'X' && gameBoardArray[square] !== 'O');
    
        console.log(gameBoardArray);
        checkGameState(square, team);
    };

    return { markBoard, getBoard };
};

let board = createGameBoard();
let game = createGame();

const Sinclair = createPlayer('X');
const Adam = createPlayer('O');

/*
    Functions


/*
    This function checks the state of the board to determine if a winner
    can be declared.

function checkGameState (square, team) {
    // Switch case to check board based on most recent square marked
    switch(square) {
        /*
            Case 0 - 1st Square - 3 possible wins
        
        case 0:
            if(game.getBoard[1] === team && gameBoardArray[2] === team) {
                // 1st Win - Row 1 (0, 1, 2)
                console.log(`Row 1 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[3] === team && gameBoardArray[6] === team) {
                // 2nd Win - Column 1 (0, 3, 6)
                console.log(`Column 1 victory! ${team} team wins!`);
                winner = true;
            } else if (gameBoardArray[4] === team && gameBoardArray[8] === team) {
                // 3rd Win - Diagonal 1 (0, 4, 8)
                console.log(`Diagonal 1 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        /*
            Case 1 - 2nd Square - 2 possible wins
        
        case 1:
            if(gameBoardArray[0] === team && gameBoardArray[2] === team) {
                // 1st Win - Row 1 (0, 1, 2)
                console.log(`Row 1 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[4] === team && gameBoardArray[7] === team) {
                // 2nd Win - Column 2 (1, 4, 7)
                console.log(`Column 2 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        /*
            Case 2 - 3rd Square - 3 possible wins
        
        case 2:
            if(gameBoardArray[0] === team && gameBoardArray[1] === team) {
                // 1st Win - Row 1 (0, 1, 2)
                console.log(`Row 1 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[5] === team && gameBoardArray[8] === team) {
                // 2nd Win - Column 3 (2, 5, 8)
                console.log(`Column 3 victory! ${team} team wins!`);
                winner = true;
            } else if (gameBoardArray[4] === team && gameBoardArray[6] === team) {
                // 3rd Win - Diagonal 2 (2, 4, 6)
                console.log(`Diagonal 2 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        /*
            Case 3 - 4th Square - 2 possible wins
        
        case 3:
            if(gameBoardArray[4] === team && gameBoardArray[5] === team) {
                // 1st Win - Row 2 (3, 4, 5)
                console.log(`Row 2 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[0] === team && gameBoardArray[6] === team) {
                // 2nd Win - Column 1 (0, 3, 6)
                console.log(`Column 1 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        /*
            Case 4 - 5th Square - 4 possible wins
        
        case 4:
            if(gameBoardArray[3] === team && gameBoardArray[5] === team) {
                // 1st Win - Row 2 (3, 4, 5)
                console.log(`Row 2 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[1] === team && gameBoardArray[7] === team) {
                // 2nd Win - Column 2 (1, 4, 7)
                console.log(`Column 2 victory! ${team} team wins!`);
                winner = true;
            } else if (gameBoardArray[0] === team && gameBoardArray[8] === team) {
                // 3rd Win - Diagonal 1 (0, 4, 8)
                console.log(`Diagonal 1 victory! ${team} team wins!`);
                winner = true;
            } else if (gameBoardArray[2] === team && gameBoardArray[6] === team) {
                // 3rd Win - Diagonal 2 (2, 4, 6)
                console.log(`Diagonal 2 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        /*
            Case 5 - 6th Square - 2 possible wins
        
        case 5:
            if(gameBoardArray[3] === team && gameBoardArray[4] === team) {
                // 1st Win - Row 2 (3, 4, 5)
                console.log(`Row 2 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[2] === team && gameBoardArray[8] === team) {
                // 2nd Win - Column 3 (2, 5, 8)
                console.log(`Column 3 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        /*
            Case 6 - 7th Square - 3 possible wins
        
        case 6:
            if(gameBoardArray[7] === team && gameBoardArray[8] === team) {
                // 1st Win - Row 3 (6, 7, 8)
                console.log(`Row 3 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[0] === team && gameBoardArray[3] === team) {
                // 2nd Win - Column 1 (0, 3, 6)
                console.log(`Column 1 victory! ${team} team wins!`);
                winner = true;
            } else if (gameBoardArray[2] === team && gameBoardArray[4] === team) {
                // 3rd Win - Diagonal 2 (2, 4, 6)
                console.log(`Diagonal 2 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        /*
            Case 7 - 8th Square - 2 possible wins
        
        case 7:
            if(gameBoardArray[6] === team && gameBoardArray[8] === team) {
                // 1st Win - Row 3 (6, 7, 8)
                console.log(`Row 3 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[1] === team && gameBoardArray[4] === team) {
                // 2nd Win - Column 2 (1, 4, 7)
                console.log(`Column 2 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        /*
            Case 8 - 8th Square - 3 possible wins
        
        case 8:
            if(gameBoardArray[6] === team && gameBoardArray[7] === team) {
                // 1st Win - Row 3 (6, 7, 8)
                console.log(`Row 3 victory! ${team} team wins!`);
                winner = true;
            } else if(gameBoardArray[2] === team && gameBoardArray[5] === team) {
                // 2nd Win - Column 3 (2, 5, 8)
                console.log(`Column 3 victory! ${team} team wins!`);
                winner = true;
            } else if (gameBoardArray[0] === team && gameBoardArray[4] === team) {
                // 3rd Win - Diagonal 1 (0, 4, 8)
                console.log(`Diagonal 1 victory! ${team} team wins!`);
                winner = true;
            }
            break;
        // Default - something has gone wrong
        default:
            console.log("Error! Something bad happened!");
            break;
    }
    return;
}

const playGame = document.getElementById('play-game');

playGame.addEventListener('click', () => {
    winner = false;
    do {
        board.markBoard(Sinclair.team);
        board.markBoard(Adam.team);
    } while (!winner);
});

// there should be two players: one with team X, one with team O
// the players go back and forth, updating the game board as they play
// markBoard seems to work for taking in a square and team value and altering array
// how to make players change every turn?
// checkGameState seems to work for determining a winner accurately
// need to make function for playing game and switching players */