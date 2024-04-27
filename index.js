const roundResult = document.querySelector(".round-info");
const userChoice = document.querySelector(".user-choice");
const userScore = document.querySelector(".user-score");
const compChoice = document.querySelector(".comp-choice");
const compScore = document.querySelector(".comp-score");
const roundText = document.querySelector(".round");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const restart = document.querySelector(".restart");
let round = 1;

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

restart.addEventListener("click", () => {
  round = 1;
  roundText.classList.remove("won", "lost");
  roundText.innerHTML = `Round <span class="round-num">1</span>`;
  roundResult.innerHTML = `Round information`;
  rock.style.display = "block";
  paper.style.display = "block";
  scissors.style.display = "block";
  restart.style.display = "none";
  userScore.innerHTML = 0;
  compScore.innerHTML = 0;
});

function getComputerChoice() {
  let choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (
    parseInt(userScore.innerHTML) === 5 ||
    parseInt(compScore.innerHTML) === 5
  ) {
    return;
  }
  const choices = {
    rock: { losesTo: "paper", winsTo: "scissors" },
    paper: { losesTo: "scissors", winsTo: "rock" },
    scissors: { losesTo: "rock", winsTo: "paper" },
  };

  userChoice.innerHTML =
    humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
  compChoice.innerHTML =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

  if (choices[humanChoice].winsTo === computerChoice) {
    roundResult.classList.remove("lost");
    roundResult.classList.add("won");
    roundResult.innerHTML = `Round ${round} won!`;
    userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
  } else if (choices[humanChoice].losesTo === computerChoice) {
    roundResult.classList.remove("won");
    roundResult.classList.add("lost");
    roundResult.innerHTML = `Round ${round} lost!`;
    compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
  } else {
    roundResult.classList.remove("won", "lost");
    roundResult.innerHTML = `Round ${round} tied!`;
  }

  round++;
  if (parseInt(userScore.innerHTML) === 5) {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    restart.style.display = "block";
    roundResult.classList.remove("won", "lost");
    roundResult.innerHTML = `Game Over!`;
    roundText.classList.add("won");
    roundText.innerHTML = "Congrats, You Won!";
  } else if (parseInt(compScore.innerHTML) === 5) {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    restart.style.display = "block";
    roundResult.classList.remove("won", "lost");
    roundResult.innerHTML = `Game Over!`;
    roundText.classList.add("lost");
    roundText.innerHTML = "You Lost!";
  } else {
    let gameRound = document.querySelector(".round-num");
    gameRound.innerHTML = round;
  }
}
