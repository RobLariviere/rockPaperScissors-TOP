let computerPlay;
let userPlay = prompt("Rock, Paper, or Scissors?");
let youWin  = "You Win";
let youLose = "You Lose";
let winStatus;
let youTie = "You Tie, play again";
let userSelection;
let computerSelection;



//Define Computer's Play
computerPlay = Math.floor(Math.random() * 3) + 1;

if (computerPlay == 1) {
    computerSelection = "Rock";
  } else if (computerPlay == 2) {
  computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }
//Define User's Play
  if (userPlay.toLowerCase() == "rock") {
      userSelection = "Rock";
  } else if (userPlay.toLowerCase() == "paper"){
    userSelection = "Paper";
}
    else {
    userSelection = "Scissors"
    }
    
  console.log(`Computer plays ${computerSelection}`)
  console.log(`User Plays ${userSelection}`)

  //Define the rules
function playRound(userSelection, computerSelection){
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

//Play a Round, output winner
winStatus = playRound(userSelection, computerSelection)
console.log(winStatus)
