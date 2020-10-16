function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === "bear" || userInput === "human" || userInput === "gun") {
    return userInput;
  } else {
    // console.log("Error Message!");
    return "Please enter a valid option!";
  }
}

console.log(getUserChoice("Bear"));

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "bear";
    case 1:
      return "human";
    case 2:
      return "gun";
  }
}

console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It is a tie";
  }
  if (userChoice === "human") {
    if (computerChoice === "bear") {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  }
  if (userChoice === "bear") {
    if (computerChoice === "gun") {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  }
  if (userChoice === "gun") {
    if (computerChoice === "human") {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  }
}

console.log(determineWinner("bear", "human"));
console.log(determineWinner("bear", "gun"));

function playGame() {
  var promptUserChoice = prompt("Please choose bear, human or gun");
  let userChoice = getUserChoice(promptUserChoice);
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
