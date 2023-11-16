document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        return null;
    }

    function checkDraw() {
        return !gameBoard.includes('');
    }

    function handleClick(index) {
        if (gameBoard[index] || !gameActive) return;

        gameBoard[index] = currentPlayer;
        renderBoard();

        const winner = checkWinner();
        if (winner) {
            result.textContent = `${winner} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            result.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function renderBoard() {
        board.innerHTML = '';
        gameBoard.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell;
            cellElement.addEventListener('click', () => handleClick(index));
            board.appendChild(cellElement);
        });
    }

    function resetGame() {
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        result.textContent = '';
        renderBoard();
    }

    resetBtn.addEventListener('click', resetGame);

    renderBoard();
});
