let computerPlay;
let userPlay = prompt("Rock, Paper, or Scissors?");
let youWin;
let youLose;
let winStatus;
let tie;
let userSelection;
let computerSelection;



//Define Computer's Play

computerPlay = Math.floor(Math.random() * 3) + 1;

if (computerPlay == 1) {
    computerSelection = "Rock";
  } else if (computerPlay == 2) {
  computerSelection = "Paper";
  } else {
    computerSelection = "Scisssors";
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

//Define the Game Function
  function playRound(userThrow, computerThrow){
    if (userThrow == "Rock" && computerThrow == "Paper") {
      winStatus = 0;
    }
    else if (userThrow == "Paper" && computerThrow == "Scissors") {
      winStatus = 0;
    }
    else if (userThrow == "Scissors" && computerThrow == "Rock"){
    winStatus = 0;
    }
    else if (userThrow == "Paper" && computerThrow == "Rock"){
      winStatus = 1;
    }
    else if (userThrow == "Scissors" && computerThrow == "Paper"){
      winStatus = 1;
    }
    else if (userThrow == "Rock" && computerThrow == "Scissors"){  
            winStatus = 1;
    }
  else { winStatus = 2;
  }
}
//Play the round
playRound(userSelection, computerSelection)

if (winStatus = 0) {
console.log("You Lose")
}
else if (winStatus = 1) {
  console.log("You Win")
}
else {
  console.log("You Tie")
}
