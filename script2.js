let computerPlay;
let youWin  = "You Win";
let youLose = "You Lose";
let winStatus;
let youTie = "You Tie, play again";
let userSelection;
let computerSelection;
let userScore = 0;
let computerScore = 0;
let resultMessage;

function game() {

function playRound() {

//Define Computer's Play
computerPlay = Math.floor(Math.random() * 3) + 1;

if (computerPlay == 1) {
    computerSelection = "Rock";
  } else if (computerPlay == 2) {
  computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }

//Promts the user for input, stores it in the userSelection variable, plays a

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
  console.log(`Computer plays ${computerSelection}`)

  //Defines the rules
   
      
      if (userSelection == "Rock" && computerSelection == "Paper") {
      resultMessage = ("You lose, Paper beats Rock");
      return winStatus = youLose, 
      computerScore = computerScore + 1;
    }
    else if (userSelection == "Paper" && computerSelection == "Scissors") {
      resultMessage = "You lose, Scissors beat Paper"
      return winStatus= youLose, 
      computerScore = computerScore + 1;
    }
    else if (userSelection == "Scissors" && computerSelection == "Rock"){
      resultMessage = "You lose, Rock Beats Scissors"
      return winStatus = youLose, 
      computerScore = computerScore + 1;
    }
    else if (userSelection == "Paper" && computerSelection == "Rock"){
      resultMessage = "You win, Rock beats Paper"
      return winStatus=youWin, 
      userScore = userScore + 1;
    }
    else if (userSelection == "Scissors" && computerSelection == "Paper"){
      resultMessage = "You win, Scissors beat paper"
      return winStatus=youWin, 
      userScore = userScore + 1;
    }
    else if (userSelection == "Rock" && computerSelection == "Scissors"){  
    return winStatus=youWin, 
    resultMessage = "You win, Rock beats Scissors",
    userScore = userScore + 1;
    }
  else { 
    resultMessage = "You Tie, Play Again"
      return youTie;
    }
  }
  //calls the game function, which calls the round function 5 times
  
playRound()
console.log(resultMessage)
console.log(userScore)
console.log(computerScore)
playRound()
console.log(resultMessage)
console.log(userScore)
console.log(computerScore)
playRound()
console.log(resultMessage)
console.log(userScore)
console.log(computerScore)
playRound()
console.log(resultMessage)
console.log(userScore)
console.log(computerScore)
playRound()
console.log(resultMessage)
console.log(userScore)
console.log(computerScore)
}
game()

//displays end message, win, lose or draw
if (userScore > computerScore) {
  console.log("You win the Match!")
}
else if (userScore < computerScore) {
  console.log("You LOSE!!!")
}
else console.log("You Tie, Go again")


