let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const resultMsg = document.querySelector(".result-msg");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const lizardDiv = document.getElementById("lizard");
const spockDiv = document.getElementById("spock");
const endDiv = document.querySelector(".end-game");

function gameLogic(userChoice){
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "paperrock":
    case "scissorspaper":
    case "rockscissors":
    case "rocklizard":
    case "lizardspock":
    case "spockscissors":
    case "scissorslizard":
    case "lizardpaper":
    case "paperspock":
    case "spockrock":
      gameWin(userChoice, compChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
    case "lizardrock":
    case "spocklizard":
    case "scissorsspock":
    case "lizardscissors":
    case "paperlizard":
    case "spockpaper":
    case "spockrock":
     gameLose(userChoice, compChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
      gameDraw(userChoice, compChoice);
      break; 
}
}

function getCompChoice(){
  const compChoice = ["rock", "paper", "scissors", "lizard", "spock"];
  const compRand = Math.floor(Math.random() *5);
  return compChoice[compRand];
}

function gameWin(user, comp) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  resultMsg.innerHTML = `<p>You Won: ${user} beats ${comp}!</p>`;

}

function gameLose(user, comp) {
  compScore++;
  compScoreSpan.innerHTML = compScore;
  resultMsg.innerHTML = `<p>You Lost: ${comp} beats ${user}!</p>`;
}

function gameDraw(user, comp) {
  resultMsg.innerHTML = `<p>It's a draw! You both selected ${comp}!</p>`;
}

function gameEnd () {
  userScore = 0;
  compScore = 0;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  resultMsg.innerHTML = "<p>Make a selection!</p>"
}

function clickListen(){
  rockDiv.addEventListener('click', () => gameLogic('rock'));
  paperDiv.addEventListener('click', () => gameLogic('paper'));
  scissorsDiv.addEventListener('click', () => gameLogic('scissors'));
  lizardDiv.addEventListener('click', () => gameLogic('lizard'));
  spockDiv.addEventListener('click', () => gameLogic('spock'));
  endDiv.addEventListener('click', () => gameEnd());
}

clickListen();