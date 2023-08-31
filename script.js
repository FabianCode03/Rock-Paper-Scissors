//planning the project with pseudocode for easier implementation later

/*

-write a function getComputerChoice() that randomly selects rock, paper
 or scissors and returns it as string
    
    -write a math expression that randomly selects 0, 1 or 2
    -map 0, 1 and 2 to rock, paper nad scissors and return it as string

*/

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

/*

-write a function getPlayerChoice() that prompts the user to select rock, paper 
 or scissors and returns that value in a normalized/uniform way
 
    -prompt the user for his choice
    -convert to lower case
    -return the normalized (lower case) choice

*/

function getPlayerChoice() {
  const userInput = window.prompt("Enter your choice: rock, paper or scissors");
  const userInputToLower = userInput.toLowerCase();
  return userInputToLower;
}

/*

-write a function determineWinner(playerSelection, computerSelection) that determines the winner of the 
 round and returns a string with the winner and the interaction that decided the outcome in the style of "You Lose! Paper beats Rock"
    
    -implement switch that returns the resultString depending on the playerSelection and the computerSelection

*/

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

/*

- write a function validatePlayerSelection(playerSelection)

*/

function validatePlayerSelection(playerSelection) {
  return playerSelection === "rock" ||
    playerSelection === "paper" ||
    playerSelection === "scissors"
    ? true
    : false;
}

/*

- write a function playOneRound() that executes a complete round of the game with the required output

    -initialize and assign the playerSelection by running getPlayerChoice()
    -check if valid user input:
        -if true continue
        -if false terminate program with notification about wrong input
    -initialize and assign the computerSelection by running getComputerChoice()
    -initialize and assign the resultString by running determineWinner(playerSelection, computerSelection) 
    -log the resultString to the console

*/

function playOneRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const resultString = validatePlayerSelection(playerSelection)
    ? determineWinner(playerSelection, computerSelection)
    : "no valid argument, you can chose rock, paper or scissors";
  console.log(resultString);
}

/*

- write a function games() that handles how many games are played

*/

function games() {
  const numberOfGames = window.prompt("How many games do you want to play?");
  for (let i = 0; i < numberOfGames; i++) {
    playOneRound();
  }
}

games();
