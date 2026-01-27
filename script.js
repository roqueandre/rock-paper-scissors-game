// Variables
 let computerScore = 0;
 let humanScore = 0;
 let round = 0;
 let result = document.querySelector(".result")
 let finalResult = document.querySelector(".finalMessage")


// Deal with player choice

const btn = document.querySelectorAll("button");
let btnList = Array.from(btn);

btnList.forEach((button) => {
    button.addEventListener("click", playRound);
});


// Randomize computer choice
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

// Main - 

function playRound(e) {
    let humanChoice = e.target.value;
    let computerChoice = getComputerChoice();
   
    
    if (humanChoice === "rock" && computerChoice === "scissor") {
        text = "You win! ROCK beats SCISSOR!";
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        text = "You win! PAPER beats ROCK!";
        humanScore += 1;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        text = "You win! SCISSOR beats PAPER!";
        humanScore += 1;
    } else if (humanChoice === computerChoice) {
        text = "Draw!";
    } else {
        text = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}!`;
        computerScore += 1;
    }

    round += 1;
    result.textContent = text;



    // Control end game scenario and display results. Then creates a reset button to clear info.
    if (round === 5) {      
        finalResult.textContent = `Final Score: ${humanScore} - ${computerScore}`;

        if (humanScore === computerScore) {
            result.textContent = "DRAW. Play again."
        } else {
            result.textContent = humanScore > computerScore ? "You Win" : "You Lose";
        }

        const box = document.querySelector(".box");
        const reset = document.createElement("button");
        reset.textContent = "Play Again";
        box.appendChild(reset);

        reset.addEventListener("click", () => {
            round = 0;
            humanScore = 0;
            computerScore = 0;

            result.textContent = "";
            finalResult.textContent = "";

            box.removeChild(reset);

        })


    }

}



