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

console.log(getHumanChoice());
