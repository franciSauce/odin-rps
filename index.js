function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound() {
    let machine = getComputerChoice();
    let man = getHumanChoice();

    console.log(`Computer chose: ${machine}`);
    console.log(`Human chose: ${man}`);

    if (machine === "rock" && man === "scissors") {
        console.log("Computer wins! Rock beats Scissors");
        return "computer";
    } else if (machine === "paper" && man === "rock") {
        console.log("Computer wins! Paper beats Rock");
        return "computer";
    } else if (machine === "scissors" && man === "paper") {
        console.log("Computer wins! Scissors beats Paper");
        return "computer";
    } else if (machine === "scissors" && man === "rock") {
        console.log("You win! Rock beats Scissors");
        return "human";
    } else if (machine === "rock" && man === "paper") {
        console.log("You win! Paper beats Rock");
        return "human";
    } else if (machine === "paper" && man === "scissors") {
        console.log("You win! Scissors beats Paper");
        return "human";
    } else if (
        machine === "rock" && man === "rock" ||
        machine === "paper" && man === "paper" ||
        machine === "scissors" && man === "scissors"
     ) {
        console.log("It's a tie!");
        return "tie";
        }

        console.log(humanScore);
        console.log(computerScore);
}

// playRound();

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        let result = playRound();
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();
