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

function playRound(getComputerChoice, getHumanChoice) {
    if (
        (getComputerChoice === "rock" && getHumanChoice === "scissors") ||
        (getComputerChoice === "paper" && getHumanChoice === "rock") ||
        (getComputerChoice === "scissors" && getHumanChoice === "paper")
    ) {
        alert("Comp win!");
    } else if (getComputerChoice === getHumanChoice) {
        alert("It's a tie!");
    } else {
        alert("You win!");
    }
}
console.log(playRound());

