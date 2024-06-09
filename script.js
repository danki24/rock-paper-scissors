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
  function playRoundScissors() {
    const computerChoice = getComputerChoice();

    if (computerChoice === "scissors") {
      result.textContent = "It's a tie! Scissors vs Scissors";
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
    } else if (computerChoice === "paper") {
      humanScore++;
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
      if (computerScore < 5 || humanScore < 5) {
        result.textContent = "You won! Scissors beats Paper";
      }
      if (computerScore == 5) {
        result.textContent = "You Lost the game!";
        computerScore = 0;
        humanScore = 0;
      }
      if (humanScore == 5) {
        result.textContent = "Congratulations, you won!!!";
        computerScore = 0;
        humanScore = 0;
      }
    } else if (computerChoice === "rock") {
      computerScore++;
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
      if (computerScore < 5 || humanScore < 5) {
        result.textContent = "You lost! Rock beats Scissors";
      }
      if (computerScore == 5) {
        result.textContent = "You Lost the game!";
        computerScore = 0;
        humanScore = 0;
      }
      if (humanScore == 5) {
        result.textContent = "Congratulations, you won!!!";
        computerScore = 0;
        humanScore = 0;
      }
    }
  }
  function playRoundPaper() {
    const computerChoice = getComputerChoice();

    if (computerChoice === "paper") {
      result.textContent = "It's a tie! Paper vs Paper";
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
    } else if (computerChoice === "scissors") {
      computerScore++;
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
      if (computerScore < 5 || humanScore < 5) {
        result.textContent = "You lost! Scissors beats Paper";
      }
      if (computerScore == 5) {
        result.textContent = "You Lost the game!";
        computerScore = 0;
        humanScore = 0;
      }
      if (humanScore == 5) {
        result.textContent = "Congratulations, you won!!!";
        computerScore = 0;
        humanScore = 0;
      }
    } else if (computerChoice === "rock") {
      humanScore++;
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
      if (computerScore < 5 || humanScore < 5) {
        result.textContent = "You won! Paper beats Rock";
      }
      if (computerScore == 5) {
        result.textContent = "You Lost the game!";
        computerScore = 0;
        humanScore = 0;
      }
      if (humanScore == 5) {
        result.textContent = "Congratulations, you won!!!";
        computerScore = 0;
        humanScore = 0;
      }
    }
  }
  function playRoundRock() {
    const computerChoice = getComputerChoice();

    if (computerChoice === "rock") {
      result.textContent = "It's a tie! Rock vs Rock";
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
    } else if (computerChoice === "scissors") {
      humanScore++;
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
      if (computerScore < 5 || humanScore < 5) {
        result.textContent = "You won! Rock beats Scissors";
      }
      if (computerScore == 5) {
        result.textContent = "You Lost the game!";
        computerScore = 0;
        humanScore = 0;
      }
      if (humanScore == 5) {
        result.textContent = "Congratulations, you won!!!";
        computerScore = 0;
        humanScore = 0;
      }
    } else if (computerChoice === "paper") {
      computerScore++;
      para.textContent = `computerScore: ${computerScore}
      yourScore: ${humanScore}`;
      if (computerScore < 5 || humanScore < 5) {
        result.textContent = "You lost! Paper beats Rock";
      }
      if (computerScore == 5) {
        result.textContent = "You Lost the game!";
        computerScore = 0;
        humanScore = 0;
      }
      if (humanScore == 5) {
        result.textContent = "Congratulations, you won!!!";
        computerScore = 0;
        humanScore = 0;
      }
    }
  }

  const container = document.querySelector("#container");
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  const result = document.querySelector("#result");
  const para = document.createElement("p");
  container.appendChild(para);

  let computerScore = 0;
  let humanScore = 0;

  rock.addEventListener("click", playRoundRock);
  paper.addEventListener("click", playRoundPaper);
  scissors.addEventListener("click", playRoundScissors);
}

playGame();
