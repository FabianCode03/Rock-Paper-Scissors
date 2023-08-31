//planning the project with pseudocode for easier implementation later

/*

-write a function getComputerChoice() that randomly selects rock, paper
 or scissors and returns it as string
    
    -write a math expression that randomly selects 0, 1 or 2
    -map 0, 1 and 2 to rock, paper nad scissors and return it as string

*/

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3); //selects 0, 1 or 2 at random
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



-write a function determineWinner(playerSelection, computerSelection) that determines the winner of the 
 round and returns a string with the winner and the interaction that decided the outcome in the style of "You Lose! Paper beats Rock"
    
    -implement switch that returns the resultString depending on the playerSelection and the computerSelection



- write a function playOneRound() that executes a complete round of the game with the required output

    -initialize and assign the playerSelection by running getPlayerChoice()
    -check if valid user input:
        -if true continue
        -if false terminate program with notification about wrong input
    -initialize and assign the computerSelection by running getComputerChoice()
    -initialize and assign the resultString by running determineWinner(playerSelection, computerSelection) 
    -log the resultString to the console

*/
