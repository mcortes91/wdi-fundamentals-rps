////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

var playerMove = getPlayerMove();
var computerMove = getComputerMove();

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === computerMove) 
        {
            winner = 'Tie';
        } 
    else if (playerMove === "paper") 
        {
            if (computerMove === "rock")
                {
                    winner = 'player';
                }
            else 
                {
                    winner = 'computer';
            
                }
        } 
    else if (playerMove === "scissors") 
        {
            if (computerMove === "paper") 
                {
                    winner = 'player';
                } 
            else 
                {
                    winner = 'computer';
                }
        }
    else if (playerMove === "rock") 
        {
            if (computerMove === "scissors") 
                {
                    winner = 'player';
                }
            else
                {
                    winner = 'computer';
                }
        }
    else 
        {
        console.log("please enter something");   
        }
    
    return winner;
}
getWinner();

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

while (playerWins < 5 && computerWins < 5) {

    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var champion = getWinner(playerMove, computerMove);

    if (champion == "player") {
        playerWins +=1;
    }
    else if (champion == "computer") {
        computerWins +=1;
    }
    else {computerWins +=1;
        playerWins +=1;}

console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
console.log('Player has ' + playerWins + ' and Computer has ' + computerWins + '\n');
}
    return [playerWins, computerWins];
}
playToFive();