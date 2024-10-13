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

