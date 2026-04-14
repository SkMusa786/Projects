let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

// Generate Computer Choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Draw
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Show Winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Game Logic
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin;

    if (userChoice === "rock") {
      userWin = compChoice === "scissors";
    } 
    else if (userChoice === "paper") {
      userWin = compChoice === "rock";
    } 
    else {
      userWin = compChoice === "paper";
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Click Events
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});