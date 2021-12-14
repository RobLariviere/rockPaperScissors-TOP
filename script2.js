let computerPlay;
let youWin  = "You Win";
let youLose = "You Lose";
let winStatus;
let youTie = "You Tie, play again";
let userSelection;
let computerSelection;
let userScore = 0
let computerScore = 0



//Define Computer's Play, Display it
computerPlay = Math.floor(Math.random() * 3) + 1;

if (computerPlay == 1) {
    computerSelection = "Rock";
  } else if (computerPlay == 2) {
  computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }

  console.log(`Computer plays ${computerSelection}`)

  //Promts the user for input, stores it in the userSelection variable
function playRound() {
let userPlay = prompt("Rock, Paper, or Scissors?");


if (userPlay.toLowerCase() == "rock") {
    userSelection = "Rock";
} else if (userPlay.toLowerCase() == "paper"){
  userSelection = "Paper";
}
  else {
  userSelection = "Scissors"
  }

  //Displays User Choice
  console.log(`User Plays ${userSelection}`)

  //Defines the rules
    if (userSelection == "Rock" && computerSelection == "Paper") {
      return `${youLose}, Paper beats Rock`;
    }
    else if (userSelection == "Paper" && computerSelection == "Scissors") {
      return `${youLose}, Scissors beat Paper`;
    }
    else if (userSelection == "Scissors" && computerSelection == "Rock"){
    return `${youLose}, Rock beats Scissors`;
    }
    else if (userSelection == "Paper" && computerSelection == "Rock"){
      return `${youWin}, Paper beats Rock`;
    }
    else if (userSelection == "Scissors" && computerSelection == "Paper"){
      return `${youWin}, Scissors beat Paper`;
    }
    else if (userSelection == "Rock" && computerSelection == "Scissors"){  
      return `${youWin}, Rock beats Scissors`;
    }
  else { 
      return youTie;
  }
}


//Plays a round, assigns winStatus to one of the three defined variables, tallies who won the round,
function game() {
    
    winStatus = playRound()  
    

   if (winStatus === `${youWin}, Paper beats Rock`){
        userScore = (userScore + 1);
    }
    else if (winStatus === `${youWin}, Rock beats Scissors`){
        userScore = (userScore + 1);
     }
    else if (winStatus === `${youWin}, Scissors beat Rock`){
        userScore = (userScore + 1);
    }
    else if (winStatus === `${youLose}, Scissors beat Paper`) {
        computerScore = (computerScore + 1);
    }
    else if (winStatus === `${youLose}, Paper beats Rock`) {
        computerScore = (computerScore + 1);
    }
    else if (winStatus === `${youLose}, Rock beats Scissors`) {
        computerScore = (computerScore + 1);
    }
    else {
        computerScore = computerScore, userScore = userScore;
    }
}

game()
console.log(winStatus)
console.log(userScore)
console.log(computerScore)




