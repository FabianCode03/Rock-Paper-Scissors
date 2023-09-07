function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3); //selects 0, 1 or 2 at random
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  const userInput = window.prompt("Enter your choice: rock, paper or scissors");
  const userInputToLower = userInput.toLowerCase();
  return userInputToLower;
}

function determineWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw! ${playerSelection} and ${computerSelection} are equal`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

//alternative solution to determineWinner(playerSelection, computerSelection) using ternary operator
function detWin(playerSelection, computerSelection) {
  return playerSelection === computerSelection
    ? `Draw! ${playerSelection} and ${computerSelection} are equal`
    : playerSelection === "rock" && computerSelection === "paper"
    ? `You lose! ${computerSelection} beats ${playerSelection}`
    : playerSelection === "rock" && computerSelection === "scissors"
    ? `You win! ${playerSelection} beats ${computerSelection}`
    : playerSelection === "paper" && computerSelection === "rock"
    ? `You win! ${playerSelection} beats ${computerSelection}`
    : playerSelection === "paper" && computerSelection === "scissors"
    ? `You lose! ${computerSelection} beats ${playerSelection}`
    : playerSelection === "scissors" && computerSelection === "rock"
    ? `You lose! ${computerSelection} beats ${playerSelection}`
    : `You win! ${playerSelection} beats ${computerSelection}`;
}

function validatePlayerSelection(playerSelection) {
  return playerSelection === "rock" ||
    playerSelection === "paper" ||
    playerSelection === "scissors"
    ? true
    : false;
}

function playOneRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const resultString = validatePlayerSelection(playerSelection)
    ? determineWinner(playerSelection, computerSelection)
    : "no valid argument, you can chose rock, paper or scissors";
  console.log(resultString);
}

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    console.log(e.target.textContent.toLowerCase());
  })
);
