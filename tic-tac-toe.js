const key = 'tic-tac-toe-game-state';
let currentPlayerSymbol = 'x';
let squareValues = ['', '', '', '', '', '', '', '', ''];
let gameStatus = '';

function checkGameStatus() {
    for (let i = 0; i < 9; i += 3) {
        if (squareValues[i] !== "" && squareValues[i] === squareValues[i + 1] && squareValues[i + 1] === squareValues[i + 2]) {
            gameStatus = squareValues[i];
            break;
        }
    }
 // check columns
    for (let i = 0; i < 3; i += 1) {
        if (squareValues[i] !== "" && squareValues[i] === squareValues[i + 3] && squareValues[i + 3] === squareValues[i + 6]) {
            gameStatus = squareValues[i];
            break;
        }
    }

    if (squareValues[0] !== "" && squareValues[0] === squareValues[4] && squareValues[4] === squareValues[8]) {
        gameStatus = squareValues[0];
    }

    if (squareValues[2] !== "" && squareValues[2] === squareValues[4] && squareValues[4] === squareValues[6]) {
        gameStatus = squareValues[2];
    }

if (gameStatus !== '') {
    document.getElementById('game-status-message').innerHTML = `Winner : ${gameStatus.toUpperCase()}`
}


    let boardIsFild = true;
    for (let i = 0; i < 9; i++) {
        if (squareValues[i] === "") {
            boardIsFild = false;
            break;
        }
    }
    if (boardIsFild) {
        gameStatus = "none";
        document.getElementById("new-game").removeAttribute("disabled");
        document.getElementById("give-up")
            .disabled = true;
    }

    if (gameStatus !== '') {
        document
            .getElementById("game-status-message")
            .innerHTML = `Winner: ${gameStatus.toUpperCase()}`;
        document.getElementById("new-game").disabled = false;
    }
}
window.addEventListener('DOMContentLoaded', (event) => {


    document
        .getElementById("tic-tac-toe-board")
        .addEventListener("click", event => {
            const targetId = event.target.id;

            if (!targetId.startsWith("square-")) return;

            const squareIndex = Number.parseInt(targetId[targetId.length - 1]);

            if (squareValues[squareIndex] !== "") return;

            const img = document.createElement('img');
            img.src = `https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-${currentPlayerSymbol}.svg`;
            event.target.appendChild(img);
            squareValues[squareIndex] = currentPlayerSymbol;

            if (currentPlayerSymbol === 'x') {
                currentPlayerSymbol = 'o';
            } else {
                currentPlayerSymbol = "x";
            }
            checkGameStatus();
        });


  document.getElementById('new-game').addEventListener('click', () => {
        gameStatus = '';
        document.getElementById("game-status-message")
            .innerHTML = "";
        for (let i = 0; i < 9; i++) {
            document.getElementById(`square-${i}`)
                .innerHTML = "";
        }
        currentPlayerSymbol = 'x';
        document.getElementById("new-game")
            .disabled = true;
        squareValues = ['', '', '', '', '', '', '', '', ''];

    });

    document.getElementById("give-up")
        .addEventListener("click", (event) => {
            if (currentPlayerSymbol === "x") {
                gameStatus = "o";
            } else {
                gameStatus = "x";
            }
            document
                .getElementById("game-status-message")
                .innerHTML = `Winner: ${gameStatus.toUpperCase()}`;

            document.getElementById("give-up")
                .disabled = true;

            document.getElementById("new-game")
                .disabled = false;
                
        saveGameState();
        });

});


