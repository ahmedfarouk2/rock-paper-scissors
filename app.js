// variables

const winningScore = 5;
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const rockImg = document.querySelector('#rock');
const paperImg = document.querySelector('#paper');
const scissorsImg = document.querySelector('#scissors');
const resultSpan = document.querySelector('#result');
const playerScoreSpan = document.querySelector('#playerscore');
const computerScoreSpan = document.querySelector('#computerscore');
let playerScore = 0;
let computerScore = 0;

///////////////////////////////////////////////////////////////////////////////////////////////////// 

// Helper functions

function resetScore(){
    if (playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        alert(' COMPUTER WINS :( SORRY BRO/SIS');
        playerScoreSpan.textContent = '';
        resultSpan.textContent = '';
        computerScoreSpan.textContent = '';
    }

    else if (computerScore === 5){
        PlayerScore = 0;
        computerScore = 0;
        alert(' YOU WIN BRO/SIS! GOOD JOB!');
        playerScoreSpan.textContent = '';
        resultSpan.textContent = '';
        computerScoreSpan.textContent = '';
    }
}


function getComputerChoice(){
    const words = [rock, paper, scissors];
    const random = Math.floor(Math.random()*words.length);
    return words[random];
}


function scoreTrack(playerWin){
    if (playerWin){
        playerScore++;
    }
    else {
        computerScore++
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////// 

// Events and other stuff

rockImg.addEventListener('mouseover', (e) => {
    rockImg.classList.add('playing');
})

paperImg.addEventListener('mouseover', (e) => {
    paperImg.classList.add('playing');
})

scissorsImg.addEventListener('mouseover', (e) => {
    scissorsImg.classList.add('playing');
})

rockImg.addEventListener('mouseout', (e) => {
    rockImg.classList.remove('playing');
})

paperImg.addEventListener('mouseout', (e) => {
    paperImg.classList.remove('playing');
})

scissorsImg.addEventListener('mouseout', (e) => {
    scissorsImg.classList.remove('playing');
})


rockImg.addEventListener('click', (computerSelection) => {
        computerSelection = getComputerChoice();
            if (computerSelection === rock){ //Draw
                resultSpan.textContent = "You & Computer both chose rock! It's a tie!"
            }
            else if (computerSelection === paper){ // Computer wins
                resultSpan.textContent = "Computer chose paper! You lost!"
                scoreTrack(1);
            }
            else if (computerSelection === scissors){ // Player wins
                resultSpan.textContent = "Computer chose scissors! You won!";
                scoreTrack(0);
            }
            playerScoreSpan.textContent = playerScore;
            computerScoreSpan.textContent =  computerScore;
            resetScore();
            endResult();
});

paperImg.addEventListener('click', (computerSelection) => {
    resultSpan.innerText = '';
    computerSelection = getComputerChoice();
        if (computerSelection === paper){ //Draw
            resultSpan.textContent = "You & Computer both chose paper! It's a tie!"
        }
        else if (computerSelection === scissors ){ // Computer wins
            resultSpan.textContent = "Computer chose scissors! You lost!"
            scoreTrack(1);
        }
        else if (computerSelection === rock){ // Player wins
            resultSpan.textContent = "Computer chose rock! You won!";
            scoreTrack(0);
        }
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent =  computerScore;
        resetScore();
});

scissorsImg.addEventListener('click', (computerSelection) => {
    computerSelection = getComputerChoice();
        if (computerSelection === scissors){ //Draw
            resultSpan.textContent = "You & Computer both chose scissors! It's a tie!";
        }
        else if (computerSelection === rock){ // Computer wins
            resultSpan.textContent = "Computer chose rock! You lost!";
            scoreTrack(1);
        }
        else if (computerSelection === paper){ // Player wins
            resultSpan.textContent = "Computer chose paper! You won!";
            scoreTrack(0);
        }
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent =  computerScore;
        resetScore();
});

