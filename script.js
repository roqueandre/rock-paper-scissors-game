//
 let computerScore = 0;
 let humanScore = 0;

// Computer choice

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1
    let cpuChoice;

    switch (random) {
        case 1:
            cpuChoice = "rock";
            break;
        case 2:
            cpuChoice = "paper";
            break;
        case 3:
            cpuChoice = "scissor";
            break;
    }

    return cpuChoice; 
}

//Player Choice

function getHumanChoice() {
    let playerChoice = prompt("Rock, Paper or Scissor?");
    return playerChoice;
    
}

// Validade results and score count

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win! Rock beats Scissor!");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore += 1;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! Scissor beats paper!");
        humanScore += 1;
    } else if (humanChoice === computerChoice) {
        console.log("Draw!");
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore += 1;
    }
}

// Main

function playGame() {
    let round = 1;

    while (round <= 5) {    
        const playerSelection = getHumanChoice();
        const cpuSelection = getComputerChoice();    
        playRound(playerSelection.toLowerCase(), cpuSelection);
        round += 1;
    }
    
    console.log(`Final Score: ${humanScore} - ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("Congratulations. You win!");
    } else {
        console.log("You lose.");
    }

}

playGame();