"use strict";

const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    let choiceText = prompt("Rock, paper or scissors?");
    choiceText = choiceText.trim().toLowerCase();
    return OPTIONS.indexOf(choiceText);
}

function playRound(playerSelection, computerSelection) {
    let result = (playerSelection - computerSelection + 3) % 3;

    if (result == 0) {
        return "It's a tie!";
    }

    if (result == 1) {
        return `You win! ${OPTIONS[playerSelection]} beats ${OPTIONS[computerSelection]}`;
    }
    
    if (result == 2) {
        return `You lose! ${OPTIONS[computerSelection]} beats ${OPTIONS[playerSelection]}`;
    }
}

console.log(playRound(0,0));
console.log(playRound(0,1));
console.log(playRound(0,2));
console.log(playRound(1,0));
console.log(playRound(1,1));
console.log(playRound(1,2));
console.log(playRound(2,0));
console.log(playRound(2,1));
console.log(playRound(2,2));