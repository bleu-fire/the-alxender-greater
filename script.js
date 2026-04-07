const buttons = document.querySelectorAll("#choice button");
const scoreEl = document.getElementById("score");
const computerEl = document.getElementById("computer");

let userScore = 0;
let computerScore = 0;

const choices = ["stone", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
