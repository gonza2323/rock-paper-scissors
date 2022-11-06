"use strict";

const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(e) {
    let playerSelection = OPTIONS.indexOf(e.target.getAttribute('id'));
    let computerSelection = getComputerChoice();

    let result = (playerSelection - computerSelection + 3) % 3;

    if (result == 0) {
        console.log("It's a tie!");
        return 0;
    }

    if (result == 1) {
        console.log(`You win! ${OPTIONS[playerSelection]} beats ${OPTIONS[computerSelection]}`);
        return 1;
    }

    if (result == 2) {
        console.log(`You lose! ${OPTIONS[computerSelection]} beats ${OPTIONS[playerSelection]}`);
        return -1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    let gameResult;

    for (let i = 0; i < 5; i++) {
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        playerScore += Math.max(roundResult, 0);
        computerScore -= Math.min(roundResult, 0);
        console.log(`Player Score: ${playerScore}\tComputer Score ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("It's a tie! No one won!");
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playRound));