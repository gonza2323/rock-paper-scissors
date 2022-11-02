"use strict";

const OPTIONS = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
    choiceText = prompt("Rock, paper or scissors?");
    return OPTIONS.findIndex(choiceText.toLowerCase());
}
