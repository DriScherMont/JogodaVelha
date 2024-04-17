    public class Jogo {

        private char[][] board = {

                {' ', ' ', ' '},

                {' ', ' ', ' '},

                {' ', ' ', ' '}

        };


        private char currentPlayer = 'X';


        public void printBoard() {

            for (int i = 0; i < 3; i++) {

                for (int j = 0; j < 3; j++) {

                    System.out.print(board[i][j] + " | ");

                }

                System.out.println();

                if (i < 2) {

                    System.out.println("---------");

                }

            }

        }


        public boolean checkWin() {

            for (int i = 0; i < 3; i++) {

                if (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) {

                    return true;

                }

            }


            for (int j = 0; j < 3; j++) {

                if (board[0][j] == currentPlayer && board[1][j] == currentPlayer && board[2][j] == currentPlayer) {

                    return true;

                }

            }


            if (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) {

                return true;

            } else if (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer) {

                return true;

            }


            return false;

        }


        public boolean checkDraw() {

            for (int i = 0; i < 3; i++) {

                for (int j = 0; j < 3; j++) {

                    if (board[i][j] == ' ') {

                        return false;

                    }

                }

            }

            return true;

        }


        public void playerMove(int row, int col) {

            if (board[row][col] == ' ') {

                board[row][col] = currentPlayer;

                if (checkWin()) {

                    System.out.println("Congratulations! You won!");

                    printBoard();

                } else if (checkDraw()) {

                    System.out.println("It's a draw!");

                    printBoard();

                } else {

                    currentPlayer = (currentPlayer == 'X')? 'O' : 'X';

                    System.out.println("It's the computer's turn:");

                    computerMove();

                    printBoard();

                }

            } else {

                System.out.println("That space is already occupied. Choose another one.");

            }

        }


        public void computerMove() {

            Random random = new Random();

            int row, col;

            do {

                row = random.nextInt(3);

                col = random.nextInt(3);

            } while (board[row][col]!= ' ');

            board[row][col] = currentPlayer;

            if (checkWin()) {

                System.out.println("The computer won!");

                printBoard();

            } else if (checkDraw()) {

                System.out.println("It's a draw!");

                printBoard();

            } else {

                currentPlayer = (currentPlayer == 'X')? 'O' : 'X';

                System.out.println("It's your turn:");

            }

        }


        public void main(String[] args) {

            Jogo game = new Jogo();

            Scanner scanner = new Scanner(System.in);

            while (true) {

                game.printBoard();

                System.out.println("Enter row and column (1-3):");

                int row = scanner.nextInt() - 1;

                int col = scanner.nextInt() - 1;

                game.playerMove(row, col);

            }

        }

    
