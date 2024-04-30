console.log("Hello World!");

// create a variable, with array containing rock, paper, scissors
const choice = ["Rock", "Paper", "Scissors"];
// write function "getComputerChoice"
// function RANDOMLY return rock, paper, scissors, rememeber value be in STRINGS
// utilize Math.random to randomly return the choice
function getComputerChoice() {
  const CompChoice = choice[Math.floor(Math.random() * 3)];
  return "Computer Choose:" + CompChoice;
}

console.log(getComputerChoice());

// create new function "getHumanChoice"
// Create prompt message requesting user to input the choices
// I need to somehow store the STRING value of user input into the function and return "HumanChoice"
function getHumanChoice() {
  const HumanChoice = prompt(
    "Rock? Paper? Scissors?",
    "Please input your choice here"
  );
  return "You Choose:" + HumanChoice;
}

console.log(getHumanChoice());
