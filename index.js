// Variables to keep track of wins
let playerWin = 0;
let computerWin = 0;
let gameOver = 0;

//Event listeners for the buttons
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => playRound("Rock"));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => playRound("Paper"));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => playRound("Scissors"));

const playAgainBtn = document.querySelector("#play-again");
playAgainBtn.addEventListener("click", resetGame);

const results = document.querySelector(".result");
results.setAttribute("style", "white-space: pre");

// Function to play a round of the game
function playRound(playerChoice) {
    if (gameOver) return;
    const computerChoice = getComputerChoice();
    let resultMessage = "";

    if (playerChoice === computerChoice) {
        resultMessage = `You both picked ${playerChoice}.\r\nIt's a tie. Neither wins`;
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        playerWin++;
        resultMessage = `You picked ${playerChoice}. Computer picked ${computerChoice}.\r\n${playerChoice} beats ${computerChoice}. You win.`;
    } else {
        computerWin++;
        resultMessage = `You picked ${playerChoice}. Computer picked ${computerChoice}.\r\n${computerChoice} beats ${playerChoice}. You lose.`;
    }

    results.textContent = `${resultMessage}\r\n\r\nPlayer: ${playerWin}\r\nComputer: ${computerWin}`;

    // Check if either player has reached 5 wins to end the game
    if (playerWin === 5) {
        endGame ("You Win!");
    } else if (computerWin === 5) {
        endGame ("You lose!");
    }
}

//Functions
function getComputerChoice() {
    let choices = ["Rock","Paper","Scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function endGame(message) {
    results.textContent = `${message}\r\n\r\nPlayer: ${playerWin}\r\nComputer: ${computerWin}`;
    gameOver = true;
    document.querySelector("#play-again").classList.remove("hidden");
}

function resetGame() {
    playerWin = 0;
    computerWin = 0;
    gameOver = false;
    results.textContent = "";
    playAgainBtn.classList.add("hidden");
}
