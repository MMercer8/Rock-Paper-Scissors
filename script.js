let playerChoice = "Rock";
let playerWins = 0;
let playerTies = 0;
let playerLosses = 0;
function getComputerChoice() {
    let choices = ((Math.floor(Math.random()*3))+1);
    if(choices === 1) {
        return "Rock"
        //console.log("Rock");
    } else if (choices === 2) {
        return "Paper"
        //console.log("Paper");
    } else {
        return "Scissors"
        //console.log("Scissors");
    }
    console.log(choices);
}
getComputerChoice();

function playRound(playerChoice, computerChoice) {

    let choice = playerChoice.toLowerCase();
    console.log("Player choice is: " + choice);
    console.log("Computer choice is: " + computerChoice);
    if (choice === "rock") {
        if(computerChoice === "Rock") {
            //console.log("TIE!! Rock vs Rock");
            playerTies++;
            return "TIE!! Rock vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("You lose! Rock vs Paper");
            playerLosses++;
            return "You lose! Rock vs Paper";
        } else {
            //console.log("You Win! Rock vs Scissors");
            playerWins++;
            return "You Win! Rock vs Scissors";
        }
    } else if (playerChoice === "paper") {
        if(computerChoice === "Rock") {
            //console.log("You Win! Paper vs Rock");
            playerWins++;
            return "You Win! Paper vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("TIE!! Paper vs Paper");
            playerTies++;
            return "TIE!! Paper vs Paper";
        } else {
            //console.log("You Lose!! Paper vs Scissors");
            playerLosses++;
            return "You Lose!! Paper vs Scissors";
        }
    } else if (playerChoice === "scissors") {
        if(computerChoice === "Rock") {
            //console.log("You Lose!! Scissors vs Rock");
            playerLosses++;
            return "You Lose!! Scissors vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("You Win!! Scissors vs Paper");
            playerWins++;
            return "You Win!! Scissors vs Paper";
        } else {
           // console.log("TIE!! Scissors vs Scissors");
            playerTies++;
            return "TIE!! Scissors vs Scissors";
        }
    } else {
        //console.log("wrong entry");
        return "Not a valid entry."
    }

}

function game() {
    playerWins = 0;
    playerTies = 0;
    playerLosses = 0;
    
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Choose your weapon: Rock, Paper, Scissors.");
        console.log(playRound(playerChoice, getComputerChoice()));
        
    }
    console.log("Wins: " + playerWins + " Player Losses: " + playerLosses + " Ties: " + playerTies);
    if (playerWins >= 3) {
        //player wins!
        console.log("Player Wins!");
    } else if (playerLosses >= 3) {
        //player loses
        console.log("Player loses!");
    } else if (playerWins == 2 && playerLosses <= 1) {
        //player wins
        console.log("Player Wins!");
    } else if (playerWins == 1 && playerLosses == 0) {
        //player wins
        console.log("Player Wins!");
    } else if (playerLosses == 2 && playerWins <= 1) {
        //player loses
        console.log("Player loses!");
    } else if (playerLosses == 1 && playerWins == 0) {
        //player loses 
        console.log("Player loses!");
    } else {
        //player tied
        console.log("Players Tied!");
    }
}

game();




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

