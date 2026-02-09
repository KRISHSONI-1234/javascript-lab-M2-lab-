// Rock, Paper, Scissors Game

let userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

// Validating the  user input
if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
  alert("Invalid choice. Please enter rock, paper, or scissors.");
} else {
  
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomNum === 0) {
    computerChoice = "rock";
  } else if (randomNum === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }


  if (userChoice === computerChoice) {
    alert("It's a tie! Both chose " + userChoice + ".");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    alert("You win! " + userChoice + " beats " + computerChoice + ".");
  } else {
    alert("Computer wins! " + computerChoice + " beats " + userChoice + ".");
  }
}
