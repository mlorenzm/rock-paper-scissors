// Computer Equivalence: 
// 0 : rock
// 1: paper
// 2: scissors



function getComputerChoice(){
    computer = Math.floor(Math.random()*3); // Returns a random number between 0-3
    return computer.toString() // Converted to string to avoid logic problems
}
function getPlayerChoice(){
    user = prompt('Select between "rock", "paper" or "scissors":');
    return user.toLowerCase();
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

function gameRound(computerSelection, playerSelection){
    let result
    if (computerSelection == '0' && playerSelection == 'rock'){
        result = 'tie';
    } else if (computerSelection == '0' && playerSelection == 'paper'){
        result = 'win';
    } else if (computerSelection == '0' && playerSelection == 'scissors'){
        result = 'lose';
    } else if (computerSelection == '1' && playerSelection == 'rock'){
        result = 'lose';
    } else if (computerSelection == '1' && playerSelection == 'paper'){
        result = 'tie';
    } else if (computerSelection == '1' && playerSelection == 'scissors'){
        result = 'win';
    } else if (computerSelection == '2' && playerSelection == 'rock'){
        result = 'win';
    } else if (computerSelection == '2' && playerSelection == 'paper'){
        result = 'lose';
    } else if (computerSelection == '2' && playerSelection == 'scissors'){
        result = 'tie';
    }
    return result;
}