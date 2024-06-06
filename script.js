function getComputerChoice() {
  let choice;
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    choice = "rock";
  }
  if (randomNumber == 1) {
    choice = "paper";
  }
  if (randomNumber == 2) {
    choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  let playerChoice = prompt(
    "Choose rock, paper or scissors: ",
    ""
  ).toLowerCase();
  return playerChoice;
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
      console.log(`It's a tie! ${computerChoice} vs ${humanChoice}`);
    } else {
      if (computerChoice === "rock") {
        if (humanChoice === "paper") {
          console.log(`You win! Paper beats Rock`);
          humanScore++;
        }
        if (humanChoice === "scissors") {
          console.log(`You lose! Rock beats Scissors`);
          computerScore++;
        }
      }

      if (computerChoice === "paper") {
        if (humanChoice === "rock") {
          console.log(`You lose! Paper beats Rock`);
          computerScore++;
        }
        if (humanChoice === "scissors") {
          console.log(`You win! Scissors beats Paper`);
          humanScore++;
        }
      }

      if (computerChoice === "scissors") {
        if (humanChoice === "paper") {
          console.log(`You lose! Scissors beats Paper`);
          computerScore++;
        }
        if (humanChoice === "rock") {
          console.log(`You win! Rock beats Scissors`);
          humanScore++;
        }
      }
    }
  }

  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());

  console.log(`computerScore: ${computerScore}
    your score: ${humanScore}`);
}

playGame();
