const status = document.getElementById('game-status')
let gameActive = true, currentPlayer = 'X', gameState = ['', '', '', '', '', '', '', '', '']

const validCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

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

const handleResult = () => {
    let won = false
    
    for (let i = 0; i <= 7; i++) {
        const winCombo = validCombos[i]
        let a = gameState[winCombo[0]], b = gameState[winCombo[1]], c = gameState[winCombo[2]]

        if (a === '' || b === '' || c === '') {
            continue
        }
        if (a === b && b === c) {
            won = true
            break
        }
    }
    if (won) {
        status.innerHTML = winBanner()
        gameActive = false
        return 
    }

    let draw = !gameState.includes('')
    if (draw) {
        status.innerHTML = drawBanner()
        gameActive = false
        return 
    }

    playerChange()
}

document.querySelectorAll('.cell').forEach(cell =>
    cell.addEventListener('click', handleClick))
document.getElementById('reset-btn').addEventListener('click', handleReset)