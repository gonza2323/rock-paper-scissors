"use strict";

const OPTIONS = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
const choices = document.querySelector('.choices');
const result = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(e) {
    let playerSelection = OPTIONS.indexOf(e.target.getAttribute('id'));
    let computerSelection = getComputerChoice();

    let roundResult = (playerSelection - computerSelection + 3) % 3;

    if (roundResult == 0) choices.textContent = "It's a tie!";
    else if (roundResult == 1) {
        choices.textContent = `You win! ${OPTIONS[playerSelection]} beats ${OPTIONS[computerSelection]}`;
        playerScore++;
    }
    else if (roundResult == 2) {
        choices.textContent = `You lose! ${OPTIONS[computerSelection]} beats ${OPTIONS[playerSelection]}`;
        computerScore++;
    }

    result.textContent = `Current score is ${playerScore} - ${computerScore}`;
    checkIfGameWon();
}

function checkIfGameWon() {
    if (playerScore >= 5) {
        result.textContent += ". Player wins!";
    }
    else if (computerScore >= 5) {
        result.textContent += ". Computer wins!";
    }
    else {
        return;
    }
    playerScore = computerScore = 0;
}

buttons.forEach(button => button.addEventListener('click', playRound));
