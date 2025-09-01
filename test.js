console.log('Hello World!')

function getComputerChoice() {
  const randomNumber = Math.random();

  let computerChoice = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerChoice = 'rock';
  }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerChoice = 'paper';
  }else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerChoice = 'scissor';
  }

  return computerChoice;
}

console.log(getComputerChoice());

function getHumanChoice() {
  const pickChoice = prompt('Pick rock, paper or scissor')
}

console.log(getHumanChoice());

