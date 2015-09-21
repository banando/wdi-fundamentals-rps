////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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
    if (move===null)getInput;
    else return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move===null)randomPlay();
    else return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove=='rock'){
        switch (computerMove){
            case 'paper':
            winner = 'computer';
            break;
            case 'scissors':
            winner = 'player';
            break;
            default: 
            winner = 'tie';
        }
    }
    else if (playerMove=='paper'){
        switch(computerMove){
            case 'scissors':
            winner='computer';
            break;
            case 'rock':
            winner = 'player';
            break;
            default:
            winner='tie';
        }
    }
    else {
        switch(computerMove){
            case 'rock':
            winner = 'computer';
            break;
            case 'paper':
            winner = 'player';
            break;
            default:
            winner = 'tie';
        }
    } 
    // Write code that will set winner to either 'player', 'computer', 
    // or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have 
    // are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' 
    // beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}   

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var playerChoice, compChoice;
    while(playerWins<5 && computerWins<5){
        playerChoice= getInput();
        compChoice=randomPlay();
        winner = getWinner(playerChoice,compChoice);
        console.log("player chose "+playerChoice+" and computer chose "+ compChoice);
        if (winner=='tie'){
            console.log("It's a tie.");
        }
        else{
        console.log("The winner is " + winner);
        if(winner=='player'){
            playerWins +=1;
        }
        else {
            computerWins +=1;
        }
    }
}


    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
playToFive();
console.log(playerWins + ' '+ computerWins);