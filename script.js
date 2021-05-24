const status = document.getElementById('game-status')
let gameActive = true, currentPlayer = 'X', gameState = ['', '', '', '', '', '', '', '', '']

const winBanner = () => `Player ${currentPlayer} has won!`
const drawBanner = () => 'Game ended in a draw!'
const whoseTurn = () => `It's ${currentPlayer}'s turn`

status.innerHTML = whoseTurn()

const handleCell = (clickedCell, clickedCellIndex) => {
    gameState[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer 
}

const playerChange = () => {}

const handleReset = () => {}

const handleClick = (clickedCellEvent) => {
    const clickedCell = clickedCellEvent.target
    
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell'))

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return
    }

    handleCell(clickedCell, clickedCellIndex)
    handleResult()
}

const handleResult = () => {}

document.querySelectorAll('.cell').forEach(cell =>
    cell.addEventListener('click', handleClick))
document.getElementById('reset-btn').addEventListener('click', handleReset)