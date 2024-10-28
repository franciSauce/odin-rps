// Variables to keep track of wins
let playerWin = 0;
let computerWin = 0;
let gameOver = 0;

//Event listeners for the buttons
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => playRound("rock"));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => playRound("paper"));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => playRound("scissors"));

const playAgainBtn = document.querySelector(".play-again");
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
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
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
    let choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function endGame(message) {
    results.textContent = `${message}\r\n\r\nPlayer: ${playerWin}\r\nComputer: ${computerWin}`;
    gameOver = true;
    document.querySelector(".play-again").classList.remove("hidden");
}

function resetGame() {
    playerWin = 0;
    computerWin = 0;
    gameOver = false;
    results.textContent = "";
    playAgainBtn.classList.add("hidden");
}
// function getComputerChoice() {
//     let choices = ["rock","paper","scissors"];
//     let random = Math.floor(Math.random() * 3);
//     return choices[random];
// }

// console.log(getComputerChoice());

// function getHumanChoice() {
//     let humanChoice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
//     return humanChoice;
// }

// console.log(getHumanChoice());

// let humanScore = 0;
// let computerScore = 0;


// function playRound() {
//     let machine = getComputerChoice();
//     let man = getHumanChoice();

//     console.log(`Computer chose: ${machine}`);
//     console.log(`Human chose: ${man}`);

//     if (machine === "rock" && man === "scissors") {
//         console.log("Computer wins! Rock beats Scissors");
//         return "computer";
//     } else if (machine === "paper" && man === "rock") {
//         console.log("Computer wins! Paper beats Rock");
//         return "computer";
//     } else if (machine === "scissors" && man === "paper") {
//         console.log("Computer wins! Scissors beats Paper");
//         return "computer";
//     } else if (machine === "scissors" && man === "rock") {
//         console.log("You win! Rock beats Scissors");
//         return "human";
//     } else if (machine === "rock" && man === "paper") {
//         console.log("You win! Paper beats Rock");
//         return "human";
//     } else if (machine === "paper" && man === "scissors") {
//         console.log("You win! Scissors beats Paper");
//         return "human";
//     } else if (
//         machine === "rock" && man === "rock" ||
//         machine === "paper" && man === "paper" ||
//         machine === "scissors" && man === "scissors"
//      ) {
//         console.log("It's a tie!");
//         return "tie";
//         }

//         console.log(humanScore);
//         console.log(computerScore);
// }

// // playRound();

// function playGame() {
//     humanScore = 0;
//     computerScore = 0;

//     for (let i = 1; i <= 5; i++) {
//         console.log(`Round ${i}`);
//         let result = playRound();
//         if (result === "human") {
//             humanScore++;
//         } else if (result === "computer") {
//             computerScore++;
//         }
//         console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
//     }
//     console.log("Game Over!");
//     if (humanScore > computerScore) {
//         console.log(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
//     } else if (computerScore > humanScore) {
//         console.log(`Computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
//     } else {
//         console.log(`It's a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
//     }
// }

// playGame();
