console.log("Hello World!");
const gameButton = document.querySelectorAll(".gameBtn");
const result = document.getElementById("result");
const choice = ["ROCK", "PAPER", "SCISSORS"];
let humanScoreDisplay = document.getElementById("humanScore");
let computerScoreDisplay = document.getElementById("computerScore");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const CompChoice = choice[Math.floor(Math.random() * 3)];
  return CompChoice;
}

function updateScoreDisplay() {
  humanScoreDisplay.textContent = `Human: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function disableButtons() {
  gameButton.forEach((btn) => (btn.disabled = true));
}

function checkForWinner() {
  if (humanScore == 5) {
    result.textContent = "You Win!";
    disableButtons();
  } else if (computerScore == 5) {
    result.textContent = "Computer Win!";
    disableButtons();
  }
}

// use the method where condition not met it will exit and repeat the loop
function playRound(humanChoice, computerChoice) {
  switch (true) {
    // Human Wins
    // Case Rock Wins
    case humanChoice === "ROCK" && computerChoice === "SCISSORS":
      humanScore++;
      result.textContent = "You Win! Rock Smashes Scissors!";
      break;
    // Case Paper Wins
    case humanChoice === "PAPER" && computerChoice === "ROCK":
      humanScore++;
      result.textContent = "You Win! Paper wrapped Rock!";
      break;
    // Case Scissors Wins
    case humanChoice === "SCISSORS" && computerChoice === "PAPER":
      humanScore++;
      result.textContent = "You Win! Scissors cut Paper!";
      break;
    // Computer Wins
    // Case Rock Wins
    case humanChoice === "SCISSORS" && computerChoice === "ROCK":
      computerScore++;
      result.textContent = "You Lose! Rock Smashes Scissors!";
      break;
    // Case Paper Wins
    case humanChoice === "ROCK" && computerChoice === "PAPER":
      computerScore++;
      result.textContent = "You Lose! Paper wrapped Rock!";
      break;
    // Case Scissors Wins
    case humanChoice === "PAPER" && computerChoice === "SCISSORS":
      computerScore++;
      result.textContent = "You Lose! Scissors cut Paper!";
      break;
    // Case Draw
    case humanChoice === computerChoice:
      result.textContent = "It's a tie!";
      break;
    default:
      console.log("Did you type the correct stuff?");
  }

  updateScoreDisplay();
  checkForWinner();
}

gameButton.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let humanChoice = e.target.textContent;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
