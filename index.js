
// the game consists of three main parts:
// User and computer scores, used to determine who wins
// for loop of 5 rounds. For each iteration:
    // Computer picks between rock(0)-paper(1)-scissors(2)
    // User is prompted to choose rock-paper-scissors
    // Each result is stored in a corresponding variable
    // there is a gameRound:
        // those two variables are compared
        // a winner is decided 
        // winner's score is incremented by 1
    //


function game(){ 
    
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        function getComputerChoice(){
            computer = Math.floor(Math.random()*3); // Returns a random number between 0-3
            return computer.toString() // Converted to string to avoid logic problems
        }
    function getPlayerChoice(){ // Prompts user for rock, paper or scissors, and converts it to all lowercase
        user = prompt('Select between "rock", "paper" or "scissors":'); 
        return user.toLowerCase();
    }

    let computerSelection = getComputerChoice(); // holds that number in a variable
    let playerSelection = getPlayerChoice(); // holds player prompt in a variable

    function gameRound(computerSelection, playerSelection){
        let result;
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

    gameResult = gameRound(computerSelection, playerSelection);
    console.log(`Result of game ${i} is ${gameResult}`);
    
    if (gameResult == 'win'){
        userScore++;
    } else if (gameResult == 'lose'){
        computerScore++;
    }
    }
    // outside for loop, we now have our updated scores for best of 5 gameRounds
    
    if (userScore > computerScore){
        console.log('You win!');
    } else{
        console.log('You lose!')
    }
}