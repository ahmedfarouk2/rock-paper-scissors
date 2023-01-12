// variables

const winningScore = 5;
const rockImg = document.querySelector('#rock');
const paperImg = document.querySelector('#paper');
const scissorsImg = document.querySelector('#scissors');
const resultSpan = document.querySelector('#result');
const playerScoreSpan = document.querySelector('#playerscore');
const computerScoreSpan = document.querySelector('#computerscore');
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

playerScoreSpan.append(playerScore);
computerScoreSpan.append(computerScore)

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