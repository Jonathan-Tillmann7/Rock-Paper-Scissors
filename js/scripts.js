function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "scissors";
    } else {
        return "paper";
    }
}
let playerSelection;
let computerChoice = getComputerChoice();
let wins = 0;
let losses = 0;
let ties = 0;
function playRound(playerSelection, computerChoice) {
    computerChoice = getComputerChoice();
    playerSelection = prompt("Let's play rock paper scissors! Make your choice!");
    if (playerSelection.toLowerCase() === 'rock' && computerChoice === 'scissors') {
        ++wins
        alert("You win! Rock beats Scissors")
    } else if (playerSelection.toLowerCase() === 'paper' && computerChoice === 'rock') {
        ++wins
        alert("You win! Paper beats Rock")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        ++wins
        alert("You win! Scissors beats Paper")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerChoice === 'scissors') {
        ++ties
        alert("You tie! Scissors matches Scissors")
    } else if (playerSelection.toLowerCase() === 'paper' && computerChoice === 'paper') {
        ++ties
        alert("You tie! Paper matches Paper")
    } else if (playerSelection.toLowerCase() === 'rock' && computerChoice === 'rock') {
        ++ties
        alert("You tie! Rock matches Rock")
    } else if (playerSelection.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        ++losses
        alert("You lose! Scissors loses to Rock")
    } else if (playerSelection.toLowerCase() === 'paper' && computerChoice === 'scissors') {
        ++losses
        alert("You lose! Paper loses to Scissors")
    } else if (playerSelection.toLowerCase() === 'rock' && computerChoice === 'paper') {
        ++losses
        alert("You lose! Rock loses to Paper")
    } else {
        alert("Not a valid selection")
    }
}
function game() {
    wins = 0;
    losses = 0;
    ties = 0;
    for (i = 0; i <5; i++) {
        playRound(playerSelection, computerChoice);
        console.log("You have " + wins + " wins, "  + losses + " losses, and " + ties + " ties");
        if (wins === 3 || ties === 3 && wins === 2 || ties === 4 && wins === 1) {
            return "You have won!"
            }
        else if (losses === 3 || ties === 3 && losses === 2 || ties === 4 && losses === 1) {
            return "You have lost!"
        } else if (ties === 5 || wins === 2 && losses === 2 && ties === 1) {
            return "You have tied!"
        }
    }
}
