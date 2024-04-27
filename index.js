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

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const choices = {
      rock: { losesTo: "paper", winsTo: "scissors" },
      paper: { losesTo: "scissors", winsTo: "rock" },
      scissors: { losesTo: "rock", winsTo: "paper" },
    };

    if (!(humanChoice in choices)) {
      console.log("Invalid choice!");
      return false;
    }

    if (choices[humanChoice].winsTo === computerChoice) {
      console.log(
        `You win! ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } beats ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }`
      );
      humanScore++;
    } else if (choices[humanChoice].losesTo === computerChoice) {
      console.log(
        `You lose! ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } loses to ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }`
      );
      computerScore++;
    } else {
      console.log(
        `It's a tie! You both chose ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        }`
      );

      return false;
    }

    return true;
  }

  let rounds = 5;
  while (rounds > 0) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    if (playRound(humanSelection, computerSelection)) {
      rounds--;
    }
  }

  if (humanScore > computerScore) {
    console.log(`You won! The score was ${humanScore} - ${computerScore}`);
  } else {
    console.log(`You lose! The score was ${humanScore} - ${computerScore}`);
  }
}
