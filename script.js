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

function playOneRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const resultString = determineWinner(playerSelection, computerSelection);
  console.log(resultString);
}

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    playOneRound(e.target.textContent.toLowerCase());
  })
);
