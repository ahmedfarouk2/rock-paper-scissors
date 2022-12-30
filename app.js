/*
Project: Rock, Paper or Scissors,
You basically get asked would you like to choose Rock, Paper or Scissors and after you choose one
it gets saved as player choice and you will play against computer, whoever gets to 5 first wins
a message containing the winner name should be printed
*/




// variables

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const winningScore = 5;
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;
let roundNumbers = (rounds) => {
    if (playerScore === 5){
        rounds = 0;
        return Number(rounds);
    }
    else if (computerScore === 5){
        rounds = 0;
        return Number(rounds);
    }
    else {
        rounds = 20
        return Number(rounds);
    }
};

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Helper functions

function getComputerChoice(){
    const words = [rock, paper, scissors];
    const random = Math.floor(Math.random()*words.length);
    return words[random];
}

function endResult(){
    if (playerScore === winningScore){
        alert("Player wins!");
    }
    else if (computerScore === winningScore){
        alert("Computer wins");
    }
}

function scoreTrack(playerWin){
    if (playerWin){
        playerScore++;
    }
    else {
        computerScore++
    }
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


// Main functions

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Kindly choose a tool", "").toLowerCase()
    computerSelection = getComputerChoice();
    currentRound++

        if (playerSelection === rock && computerSelection === rock){ //Draw
            alert("You & Computer both chose rock! It's a tie!");
        }
        else if (playerSelection === rock && computerSelection === paper){ // Computer wins
            alert("Computer chose paper! You lost!");
            scoreTrack(0)
        }
        else if (playerSelection === rock && computerSelection === scissors){ // Player wins
            alert("Computer chose scissors! You won!");
            scoreTrack(1);
        }
        else if (playerSelection === paper && computerSelection === rock){ // Player wins
            alert("Computer chose rock! You won!");
            scoreTrack(1);
        }
        else if (playerSelection === paper && computerSelection === paper){ // Draw
            alert("You & Computer both chose paper! It's a tie!");
        }
        else if (playerSelection === paper && computerSelection === scissors){ // Computer wins
            alert("Computer chose scissors! You lost!");
            scoreTrack(0);
        }
        else if (playerSelection === scissors && computerSelection === rock){ // Computer wins
            alert("Computer chose rock! You lost!");
            scoreTrack(0)
        }
        else if (playerSelection === scissors && computerSelection === paper){ // Player wins
            alert("Computer chose paper! You won!");
            scoreTrack(1);
        }
        else if (playerSelection === scissors && computerSelection === scissors){ // Draw
            alert("You & Computer both chose scissors! It's a tie!");
        }
        else {
            return alert("Kindly choose a correct tool to play. Rock, Paper or Scissors!");
        }
        const roundMessage = `Computer : ${computerScore} \n Player : ${playerScore}`;
        alert(roundMessage);
        endResult()
    }

function game(){
    for (let i=0; i<roundNumbers(); i++){
        playRound();
    }
}

game();

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
