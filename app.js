let rock = "Rock";

let paper = "Paper";

let scissors = "Scissors";

let words = [rock, paper, scissors];

let random = Math.floor(Math.random()*words.length);

function getComputerChoice(){
        return words[random];
}

function oneRoundOfPlay(playerSelection, computerSelection) {
        playerSelection = prompt("Kindly choose a tool", "")
        computerSelection = getComputerChoice();
        if (playerSelection === rock && computerSelection === rock){
            alert("You & Computer both chose rock! It's a tie!");
        }
        else if (playerSelection === rock && computerSelection === paper){
            alert("Computer chose paper! You lost!");
        }
        else if (playerSelection === rock && computerSelection === scissors){
            alert("Computer chose scissors! You won!");
        }
        else if (playerSelection === paper && computerSelection === rock){
            alert("Computer chose rock! You won!");
        }
        else if (playerSelection === paper && computerSelection === paper){
            alert("You & Computer both chose paper! It's a tie!");
        }
        else if (playerSelection === paper && computerSelection === scissors){
            alert("Computer chose scissors! You lost!");
        }
        else if (playerSelection === scissors && computerSelection === rock){
            alert("Computer chose rock! You lost!");
        }
        else if (playerSelection === scissors && computerSelection === paper){
            alert("Computer chose paper! You won!");
        }
        else if (playerSelection === scissors && computerSelection === scissors){
            alert("You & Computer both chose scissors! It's a tie!");
        }
        else {
            alert("Kindly choose a correct tool to play. Rock, Paper or Scissors!");
        }
}

oneRoundOfPlay()