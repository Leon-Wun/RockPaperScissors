console.log("Hello World!");

// create a variable, with array containing rock, paper, scissors
const choice = ["Rock", "Paper", "Scissors"];
// write function "getComputerChoice"
// function RANDOMLY return rock, paper, scissors, rememeber value be in STRINGS
// utilize Math.random to randomly return the choice
function getComputerChoice() {
  const CompChoice = choice[Math.floor(Math.random() * 3)];
  CompChoice.toUpperCase();
  return CompChoice;
}

// console.log(getComputerChoice());

// create new function "getHumanChoice"
// Create prompt message requesting user to input the choices
// I need to somehow store the STRING value of user input into the function and return "HumanChoice"

// to modify playround function from typing to respond to click
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const sciBtn = document.querySelector(".sciBtn");

function getHumanChoice() {
  const HumanChoice = prompt("Rock? Paper? Scissors?");
  return HumanChoice;
}

// console.log(getHumanChoice());

// Create scoring variables
let humanScore = 0;
let computerScore = 0;

// Create single round function named "playRound"
// Takes 2 parameter: humanChoice, computerChoice
// Make the function case insensitive, google how to do it
// Write the logic using if else statement and logical operators
// console.log the result of WIN/LOSE with string value
// Increment the score based on the outcome

function playRound(humanChoice, computerChoice) {
  switch (true) {
    // Human Wins
    // Case Rock Wins
    case humanChoice === "ROCK" && computerChoice === "SCISSORS":
      humanScore++;
      console.log("You Win! Rock Smashes Scissors!");
      break;
    // Case Paper Wins
    case humanChoice === "PAPER" && computerChoice === "ROCK":
      humanScore++;
      console.log("You Win! Paper wrapped Rock!");
      break;
    // Case Scissors Wins
    case humanChoice === "SCISSORS" && computerChoice === "PAPER":
      humanScore++;
      console.log("You Win! Scissors cut Paper!");
      break;
    // Computer Wins
    // Case Rock Wins
    case humanChoice === "SCISSORS" && computerChoice === "ROCK":
      computerScore++;
      console.log("You Lose! Rock Smashes Scissors!");
      break;
    // Case Paper Wins
    case humanChoice === "ROCK" && computerChoice === "PAPER":
      computerScore++;
      console.log("You Lose! Paper wrapped Rock!");
      break;
    // Case Scissors Wins
    case humanChoice === "PAPER" && computerChoice === "SCISSORS":
      computerScore++;
      console.log("You Lose! Scissors cut Paper!");
      break;
    // Case Draw
    case humanChoice === computerChoice:
      console.log("It's a tie!");
      break;
    default:
      console.log("Did you type the correct stuff?");
  }
}

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
sciBtn.addEventListener("click", playRound);

// create entire game with variable "playGame"
// need to play 5 round, so probably LOOP 5 times
// move "playRound" inside "playGame"
/*
function playGame() {
  for (let round = 1; round < 6; round++) {
    let humanSelection = getHumanChoice().toUpperCase();
    let computerSelection = getComputerChoice().toUpperCase();

    console.log("Round " + round);
    playRound(humanSelection, computerSelection);
    console.log("You Choose " + humanSelection);
    console.log("Computer Choose " + computerSelection);
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
  }
  if (humanScore > computerScore) {
    alert("Congratulations! You win against the Computer!");
  } else if (computerScore > humanScore) {
    alert("You lose! You failure! EMOTIONAL DAMAGE!!");
  } else if (humanScore === computerScore) {
    alert("It's a tie!");
  }
}

playGame();
*/
