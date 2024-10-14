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

    if (machine === "rock" && man === "scissors") {
        alert("Computer wins! Rock beats Scissors");
        return computerScore++;
    } else if (machine === "paper" && man === "rock") {
        alert("Computer wins! Paper beats Rock");
        return computerScore++;
    } else if (machine === "scissors" && man === "paper") {
        alert("Computer wins! Scissors beats Paper");
        return computerScore++;
    } else if (machine === "scissors" && man === "rock") {
        alert("Human wins! Rock beats Scissors");
        return humanScore++;
    } else if (machine === "rock" && man === "paper") {
        alert("Human wins! Paper beats Rock");
        return humanScore++;
    } else if (machine === "paper" && man === "scissors") {
        alert("Human wins! Scissors beats Paper");
        return humanScore++;
    } else if (
        machine === "rock" && man === "rock" ||
        machine === "paper" && man === "paper" ||
        machine === "scissors" && man === "scissors"
     ) {
        alert("It's a tie!");
        }

        console.log(humanScore);
        console.log(computerScore);
}

playRound();
