//  tabuleiro
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];


let player = 'X';


function printBoard() {
    for (let i = 0; i < 3; i++) {
        console.log(board[i].join(' | '));
        if (i < 2) {
            console.log('---------');
        }
    }
}

function checkganhador() {
   
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }

    for (let j = 0; j < 3; j++) {
        if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
            return true;
        }
    }
    // diagonais
    if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        return true;
    }
    return false;


function checkEmpate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}


function playerMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        if (checkWin()) {
            console.log(`Parabéns! Você venceu!`);
            printBoard();
            return;
        } else if (checkDraw()) {
            console.log('Empate!');
            printBoard();
            return;
        }
    
        currentPlayer = 'O';
        console.log("Vez do console:");
        setTimeout(computerMove, 1000); 
        printBoard();
    } else {
        console.log('Essa posição já está ocupada. Escolha outra.');
    }
}

function consoleMove() {
    let row, col;
    do {
        row = Math.floor(Math.random() * 3);
        col = Math.floor(Math.random() * 3);
    } while (board[row][col] !== '');
    board[row][col] = currentPlayer;
    if (checkWin()) {
        console.log(`O console venceu!`);
        printBoard();
        return;
    } else if (checkDraw()) {
        console.log('Empate!');
        printBoard();
        return;
    }
   
    player = 'X';
    console.log("Sua vez:");
}}
