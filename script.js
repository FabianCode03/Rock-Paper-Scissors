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
    return `\u{2696}\uFE0F Draw! ${playerSelection} and ${computerSelection} are equal`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `\u{274c} You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `\u{2705} You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `\u{2705} You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `\u{274c} You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `\u{274c} You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `\u{2705} You win! ${playerSelection} beats ${computerSelection}`;
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
  return resultString;
}

function updateUI(resultString) {
  const playerScoreElement = document.querySelector(".result-counter-player");
  const computerScoreElement = document.querySelector(
    ".result-counter-computer"
  );
  const dialog = document.querySelector(".dialog");

  const endOfGameHeading = document.querySelector(".end-of-game-heading");
  const outputDiv = document.querySelector(".result-string");

  let playerScore = parseInt(playerScoreElement.textContent.charAt(8));
  let computerScore = parseInt(computerScoreElement.textContent.charAt(10));

  if (resultString.substring(0, 1) === "\u{2696}") {
    console.log("draw");
  } else if (resultString.substring(0, 1) === "\u{274c}") {
    console.log("lose");
    computerScoreElement.textContent = `computer: ${++computerScore}`;
  } else {
    console.log("win");
    playerScoreElement.textContent = `player: ${++playerScore}`;
  }

  outputDiv.textContent = resultString;

  console.log(isEndOfGame(playerScore, computerScore));

  if (isEndOfGame(playerScore, computerScore)) {
    playerScore === 5
      ? (endOfGameHeading.textContent =
          "Gratulation, you defeated the computer")
      : (endOfGameHeading.textContent = "Sorry, the computer defeated you");
    dialog.showModal();
  } else {
    return;
  }
}

const isEndOfGame = (playerScore, computerScore) =>
  playerScore === 5 || computerScore === 5 ? true : false;

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const resultString = playOneRound(e.target.textContent.toLowerCase());
    updateUI(resultString);
  })
);
