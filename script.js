let playerChoice = "";
let playerWins = 0;
let playerTies = 0;
let playerLosses = 0;


// Setup
const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playRound("Rock", getComputerChoice())
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    playRound("Paper", getComputerChoice())
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', function() {
    playRound("Scissors", getComputerChoice())
});

const playAgain = document.querySelector('#playAgain');
playAgain.addEventListener('click', function() {
    resetGame()
});


let main = document.querySelector('#main');
let mainStyle = document.querySelector('#main').style;

let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let ties = document.querySelector('#ties');




function resetGame() {
    playerWins = 0;
    playerTies = 0;
    playerLosses = 0;
    setScore();
    main.textContent = "New Game: Pick your weapon. First To 5.";
}


function setScore() {
    playerScore.textContent = "Player: " + playerWins;
    computerScore.textContent = "Computer: " + playerLosses;  
    ties.textContent = "Ties: " + playerTies;
}


function getComputerChoice() {
    let choices = ((Math.floor(Math.random()*3))+1);
    if(choices === 1) {
        return "Rock";
    } else if (choices === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}



function playRound(playerChoice, computerChoice) {
    let choice ='';
    if(playerChoice != null) {
        choice = playerChoice.toLowerCase();
        console.log("choice now " + choice);
    }
    console.log("Player choice is: " + playerChoice);
    console.log("Computer choice is: " + computerChoice);
    if (choice === "rock") {
        if(computerChoice === "Rock") {
            //console.log("TIE!! Rock vs Rock");
            playerTies++;
            setScore();
            checkForWinner();
            return "TIE!! Rock vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("You lose! Rock vs Paper");
            playerLosses++;
            setScore();
            checkForWinner();
            return "You lose! Rock vs Paper";
        } else {
            //console.log("You Win! Rock vs Scissors");
            playerWins++;
            setScore();
            checkForWinner();
            return "You Win! Rock vs Scissors";
        }
    } else if (choice === "paper") {
        if(computerChoice === "Rock") {
            //console.log("You Win! Paper vs Rock");
            playerWins++;
            setScore();
            checkForWinner();
            return "You Win! Paper vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("TIE!! Paper vs Paper");
            playerTies++;
            setScore();
            checkForWinner();
            return "TIE!! Paper vs Paper";
        } else {
            //console.log("You Lose!! Paper vs Scissors");
            playerLosses++;
            setScore();
            checkForWinner();
            return "You Lose!! Paper vs Scissors";
        }
    } else if (choice === "scissors") {
        if(computerChoice === "Rock") {
            //console.log("You Lose!! Scissors vs Rock");
            playerLosses++;
            setScore();
            checkForWinner();
            return "You Lose!! Scissors vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("You Win!! Scissors vs Paper");
            playerWins++;
            setScore();
            checkForWinner();
            return "You Win!! Scissors vs Paper";
        } else {
           // console.log("TIE!! Scissors vs Scissors");
            playerTies++;
            setScore();
            checkForWinner();
            return "TIE!! Scissors vs Scissors";
        }
    } else {
        return "Not a valid entry."
    }

}

function game() {
    playerWins = 0;
    playerTies = 0;
    playerLosses = 0;
    
    for (let i = 0; i < 1; i++) {
        //playerChoice = prompt("Choose your weapon: Rock, Paper, Scissors.");
        //playerChoice = "Rock";
        //console.log(playRound(playerChoice, getComputerChoice()));
        
    }
    
}
let firstTo = 5;

function checkForWinner() {
    console.log("Wins: " + playerWins + " Player Losses: " + playerLosses + " Ties: " + playerTies);
    if (playerWins >= firstTo) {
        //player wins!
        gameOverWin();
    } else if (playerLosses >= firstTo) {
        //player loses
        gameOverLose();
    } else if (playerTies >= firstTo) {
        //player ties
        gameOverTie();
    } 


}

function gameOverWin() {
    main.textContent = "You Win!";
    main.classList.add('winner');
}

function gameOverLose() {

    main.textContent = "HAHAHA you lost!";

}

function gameOverTie() {

    main.textContent = "Damn, you only tied!";

}













/*
function checkForWinner() {
    console.log("Wins: " + playerWins + " Player Losses: " + playerLosses + " Ties: " + playerTies);
    if (playerWins >= firstTo) {
        //player wins!
        gameOverWin();
        console.log("Player Wins!");
    } else if (playerLosses >= firstTo) {
        //player loses
        gameOverLose();
        console.log("Player loses!");
    } else if (playerWins == 2 && playerLosses <= 1) {
        //player wins
        gameOverWin();
        console.log("Player Wins!");
    } else if (playerWins == 1 && playerLosses == 0 ) {
        //player wins
        gameOverWin();
        console.log("Player Wins!");
    } else if (playerLosses == 2 && playerWins <= 1 ) {
        //player loses
        gameOverLose();
        console.log("Player loses!");
    } else if (playerLosses == 1 && playerWins == 0) {
        //player loses 
        gameOverLose();
        console.log("Player loses!");
    } else {
        //player tied
        gameOverTie();
        console.log("Players Tied!");
    }


}
*/
//console.log(playRound(playerChoice, getComputerChoice()));

//hat will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
//when called generate random number
// use number to pick one of 3 choices: rock, paper, scissors
// return string of choice.

/* 
1) rock  rock
2) rock   Paper
3) Rock scissor

4) Paper rock
5) Paper paper
6) Paper Scissor

7) Scissor Rock
8) Scissor Paper
9) Scissor Scissor

Game()
call play round function
play 5 rounds.
keep track of wins
at end of 5 rounds show winner or loser

*/

//play a single round
//take input of player choice (any case, upper case, lower case, mixed)
//make computer choice
//compare two and choose winner
//display winner or loser

