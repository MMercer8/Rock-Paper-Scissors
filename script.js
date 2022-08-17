let playerChoice = "Rock";
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

function chooseWinner(playerChoice, computerChoice) {

    let choice = playerChoice.toLowerCase();
    console.log("Player choice is: " + choice);
    console.log("Computer choice is: " + computerChoice);
    if (choice === "rock") {
        if(computerChoice === "Rock") {
            //console.log("TIE!! Rock vs Rock");
            return "TIE!! Rock vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("You lose! Rock vs Paper");
            return "You lose! Rock vs Paper";
        } else {
            //console.log("You Win! Rock vs Scissors");
            return "You Win! Rock vs Scissors";
        }
    } else if (playerChoice === "paper") {
        if(computerChoice === "Rock") {
            //console.log("You Win! Paper vs Rock");
            return "You Win! Paper vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("TIE!! Paper vs Paper");
            return "TIE!! Paper vs Paper";
        } else {
            //console.log("TIE!! Paper vs Scissors");
            return "TIE!! Paper vs Scissors";
        }
    } else if (playerChoice === "scissors") {
        if(computerChoice === "Rock") {
            //console.log("You Lose!! Scissors vs Rock");
            return "You Lose!! Scissors vs Rock";
        }else if (computerChoice === "Paper") {
            //console.log("You Win!! Scissors vs Paper");
            return "You Win!! Scissors vs Paper";
        } else {
           // console.log("TIE!! Scissors vs Scissors");
            return "TIE!! Scissors vs Scissors";
        }
    } else {
        //console.log("wrong entry");
        return "Not a valid entry."
    }

}




console.log(chooseWinner(playerChoice, getComputerChoice()));

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



*/

//play a single round
//take input of player choice (any case, upper case, lower case, mixed)
//make computer choice
//compare two and choose winner
//display winner or loser