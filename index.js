// Computer Equivalence: 
// 0 : rock
// 1: paper
// 2: scissors



function getComputerChoice(){
    computer = Math.floor(Math.random()*3); // Returns a random number between 0-3
    return computer.toString() // Converted to string to avoid logic problems
}
function getPlayerChoice(){
    user = prompt('Select:');
    return user.toLowerCase();
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

