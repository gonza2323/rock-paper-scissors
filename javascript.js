"use strict";

const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "It's a tie!";
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats rock";
        } else if (computerSelection == "scissors") {
            return "You win! Rock beats scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock";
        } else if (computerSelection == "paper") {
            return "It's a tie!";
        } else if (computerSelection == "scissors") {
            return "You lose! Scissors beats paper";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors";
        } else if (computerSelection == "paper") {
            return "You win! Scissors beats paper";
        } else if (computerSelection == "scissors") {
            return "It's a tie!";
        }
    }
}

