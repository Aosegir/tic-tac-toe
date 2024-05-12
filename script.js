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

/*
    GLOBAL VARIABLES?
*/
let matchWinner = false;
let winnerDisplay = document.getElementById('winner-display');

function createBoard() {
    // board has 9 distinct values corresponding to the 3x3 grid
    let array = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];

    const getArray = () => array;

    const checkArray = (square) => {
        return ((array[square] === 'X' || array[square] === 'O') ? false : true);
    }

    const setArray = (square, team) => {
        array.splice(square, 1, team);
        let image = document.createElement('img');
        image.src = `./images/${team}.png`;
        document.getElementById(`${square}`).appendChild(image);
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
                    winnerDisplay.innerHTML = (`Row 1 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[3] === team && getArray()[6] === team) {
                    // 2nd Win - Column 1 (0, 3, 6)
                    winnerDisplay.innerHTML = (`Column 1 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[4] === team && getArray()[8] === team) {
                    // 3rd Win - Diagonal 1 (0, 4, 8)
                    winnerDisplay.innerHTML = (`Diagonal 1 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 1 - 2nd Square - 2 possible wins
            */
            case 1:
                if(getArray()[0] === team && getArray()[2] === team) {
                    // 1st Win - Row 1 (0, 1, 2)
                    winnerDisplay.innerHTML = (`Row 1 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[4] === team && getArray()[7] === team) {
                    // 2nd Win - Column 2 (1, 4, 7)
                    winnerDisplay.innerHTML = (`Column 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 2 - 3rd Square - 3 possible wins
            */
            case 2:
                if(getArray()[0] === team && getArray()[1] === team) {
                    // 1st Win - Row 1 (0, 1, 2)
                    winnerDisplay.innerHTML = (`Row 1 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[5] === team && getArray()[8] === team) {
                    // 2nd Win - Column 3 (2, 5, 8)
                    winnerDisplay.innerHTML = (`Column 3 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[4] === team && getArray()[6] === team) {
                    // 3rd Win - Diagonal 2 (2, 4, 6)
                    winnerDisplay.innerHTML = (`Diagonal 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 3 - 4th Square - 2 possible wins
            */
            case 3:
                if(getArray()[4] === team && getArray()[5] === team) {
                    // 1st Win - Row 2 (3, 4, 5)
                    winnerDisplay.innerHTML = (`Row 2 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[0] === team && getArray()[6] === team) {
                    // 2nd Win - Column 1 (0, 3, 6)
                    winnerDisplay.innerHTML = (`Column 1 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 4 - 5th Square - 4 possible wins
            */
            case 4:
                if(getArray()[3] === team && getArray()[5] === team) {
                    // 1st Win - Row 2 (3, 4, 5)
                    winnerDisplay.innerHTML = (`Row 2 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[1] === team && getArray()[7] === team) {
                    // 2nd Win - Column 2 (1, 4, 7)
                    winnerDisplay.innerHTML = (`Column 2 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[0] === team && getArray()[8] === team) {
                    // 3rd Win - Diagonal 1 (0, 4, 8)
                    winnerDisplay.innerHTML = (`Diagonal 1 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[2] === team && getArray()[6] === team) {
                    // 3rd Win - Diagonal 2 (2, 4, 6)
                    winnerDisplay.innerHTML = (`Diagonal 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 5 - 6th Square - 2 possible wins
            */
            case 5:
                if(getArray()[3] === team && getArray()[4] === team) {
                    // 1st Win - Row 2 (3, 4, 5)
                    winnerDisplay.innerHTML = (`Row 2 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[2] === team && getArray()[8] === team) {
                    // 2nd Win - Column 3 (2, 5, 8)
                    winnerDisplay.innerHTML = (`Column 3 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 6 - 7th Square - 3 possible wins
            */
            case 6:
                if(getArray()[7] === team && getArray()[8] === team) {
                    // 1st Win - Row 3 (6, 7, 8)
                    winnerDisplay.innerHTML = (`Row 3 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[0] === team && getArray()[3] === team) {
                    // 2nd Win - Column 1 (0, 3, 6)
                    winnerDisplay.innerHTML = (`Column 1 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[2] === team && getArray()[4] === team) {
                    // 3rd Win - Diagonal 2 (2, 4, 6)
                    winnerDisplay.innerHTML = (`Diagonal 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 7 - 8th Square - 2 possible wins
            */
            case 7:
                if(getArray()[6] === team && getArray()[8] === team) {
                    // 1st Win - Row 3 (6, 7, 8)
                    winnerDisplay.innerHTML = (`Row 3 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[1] === team && getArray()[4] === team) {
                    // 2nd Win - Column 2 (1, 4, 7)
                    winnerDisplay.innerHTML = (`Column 2 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            /*
                Case 8 - 8th Square - 3 possible wins
            */
            case 8:
                if(getArray()[6] === team && getArray()[7] === team) {
                    // 1st Win - Row 3 (6, 7, 8)
                    winnerDisplay.innerHTML = (`Row 3 victory! ${team} team wins!`);
                    winner = true;
                } else if(getArray()[2] === team && getArray()[5] === team) {
                    // 2nd Win - Column 3 (2, 5, 8)
                    winnerDisplay.innerHTML = (`Column 3 victory! ${team} team wins!`);
                    winner = true;
                } else if (getArray()[0] === team && getArray()[4] === team) {
                    // 3rd Win - Diagonal 1 (0, 4, 8)
                    winnerDisplay.innerHTML = (`Diagonal 1 victory! ${team} team wins!`);
                    winner = true;
                }
                break;
            // Default - something has gone wrong
            default:
                break;
        }
        return winner;
    };

    return { getArray, checkArray, setArray, checkWinner };
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
        (function startGame (board) {
            document.querySelectorAll('.game-square').forEach((square) => {
                square.innerHTML = '';
                square.addEventListener('click', () => {
                    if(!matchWinner) {
                        let currentPlayer;
                        if(getTurn() % 2) {
                            currentPlayer = player1.team;
                        } else {
                            currentPlayer = player2.team;
                        }
                        if (board.checkArray(square.id)) {
                            board.setArray(square.id, currentPlayer);
                            if(board.checkWinner(Number(square.id), currentPlayer)) matchWinner = true;
                            nextTurn();
                        }
                    }
                });
            });
        })(board);
    };

    return { player1, player2, board, playGame };
}

const playGame = document.getElementById('play-game');
const reset = document.getElementById('reset');

playGame.addEventListener('click', () => {
    const game = createGame();
    game.playGame();
    playGame.classList.replace('visible', 'invisible');
    reset.classList.replace('invisible', 'visible');
});


reset.addEventListener('click', () => {
    window.location.reload();
});