let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
  let options = ["rock", "paper", "Scissors"];
  let randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

const drawGame = () => {
  console.log("Game was Drawn");
  msg.innerText = "Game Drawn,Please Play Again.";
  msg.style.backgroundColor = "purple";
};

const showWinner = (userwin, userchoice, computerChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userchoice} beats ${computerChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You loose ${computerChoice} beats Your ${userchoice}.`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  console.log("user choice", userchoice);
  const computerChoice = genComputerChoice();
  console.log("comp choice", computerChoice);

  if (userchoice == computerChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = computerChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = computerChoice === "rock" ? true : false;
    } else {
      userwin = computerChoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
