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
}

while (true){
    console.log(getPlayerChoice());
}