let userScore = 0;
let computerScore = 0;

let computerRNG = () => {
    let computer = Math.floor(Math.random()*3); 
    if(computer == 0){
        return 'rock';
    } else if(computer == 1){
        return 'paper';
    } else{
        return 'scissors';
    }}; 

let btn = document.querySelectorAll('.btn');


for (i of btn){
    i.addEventListener('click', gameRound);
    };    

function gameRound(){
    if(userScore !== 5 && computerScore !== 5){ // play for Bo5
        let computerSelection = computerRNG();
        let playerSelection = this.id;
        let result;
        if (computerSelection == 'rock' && playerSelection == 'rock'){
            result = 'tie';
        } else if (computerSelection == 'rock' && playerSelection == 'paper'){
            result = 'win';
        } else if (computerSelection == 'rock' && playerSelection == 'scissors'){
            result = 'lose';
        } else if (computerSelection == 'paper' && playerSelection == 'rock'){
            result = 'lose';
        } else if (computerSelection == 'paper' && playerSelection == 'paper'){
            result = 'tie';
        } else if (computerSelection == 'paper' && playerSelection == 'scissors'){
            result = 'win';
        } else if (computerSelection == 'scissors' && playerSelection == 'rock'){
            result = 'win';
        } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
            result = 'lose';
        } else if (computerSelection == 'scissors' && playerSelection == 'scissors'){
            result = 'tie';
        }
        currentSelection(computerSelection, playerSelection);
        updateScore(result);
        winCheck();
    } else return;
};
let playerCurrent = document.getElementById('current-user');
let computerCurrent = document.getElementById('current-computer');

function currentSelection(computer, player){
    if(computer == 'rock'){
        computerCurrent.textContent = '🪨';
    } else if(computer == 'paper'){
        computerCurrent.textContent = '📄';
    } else if(computer == 'scissors'){
        computerCurrent.textContent = '️✂️';
    } if(player == 'rock'){
        playerCurrent.textContent = '🪨';
    } else if(player == 'paper'){
        playerCurrent.textContent = '📄';
    } else if(player == 'scissors'){
        playerCurrent.textContent = '️✂️';       
}};


let userScoreBoard = document.getElementById('player');
let compScoreBoard = document.getElementById('computer');
function updateScore(result){
    let score = document.getElementById('results');
    if(result == 'win'){
        userScore += 1;
        score.innerHTML = 'You <span style= "color: #74A57F; font-weight: bold">WIN</span> this round';
    } else if(result == 'lose'){
        computerScore +=1;
        score.innerHTML = 'You <span style= "color: #A50104; font-weight: bold">LOSE</span> this round'
    } else if(result == 'tie'){
        score.innerHTML = 'This round was a <span style= "color: #6091B5; font-weight: bold">TIE</span>!'
    };
    
    userScoreBoard.textContent = userScore;
    compScoreBoard.textContent = computerScore;
};

function winCheck(){
    if(userScore == 5){
        restartGame('win');
    } else if(computerScore == 5){
        restartGame('lose');
    }

};
let container = document.getElementById('restart-container');

function restartGame(status){
    let p = document.getElementById('result');
    let btn = document.getElementById('restart-button');
    if(status === 'win'){
        container.style.display = 'flex';
        p.textContent = 'You won!';
        btn.addEventListener('click', reset)
    } else if(status === 'lose'){
        container.style.display = 'flex';
        p.textContent = 'Oh no, you lost!';
        btn.addEventListener('click', reset)
    }
}

function reset(){
    userScore = 0;
    computerScore = 0;
    container.style.display = 'none';
    userScoreBoard.textContent = userScore;
    compScoreBoard.textContent = computerScore;
    computerCurrent.textContent = ' ';
    playerCurrent.textContent = ' ';
};
