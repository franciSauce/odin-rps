function getComputerChoice() {
    let choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

console.log(getComputerChoice());
