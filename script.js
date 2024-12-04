const guessBtn = document.getElementById("guessBtn");
const messageElement = document.getElementById("message"); // Corrected variable name
const previousGuessesElement = document.getElementById("previousGuesses"); // Corrected variable name
const attemptsElement = document.getElementById("attempts");

let attempts = 0;
let guesses = [];
const randomNumber = Math.floor(Math.random() * 100) + 1; // Define randomNumber

function makeGuess() {
  const userGuess = Number(document.getElementById("guess").value);
  document.getElementById("guess").value = "";

  if (userGuess < 1 || userGuess > 100) {
    messageElement.textContent = "Please enter a number between 1 and 100.";
  } else {
    attempts++; // Increment attempts here
    guesses.push(userGuess);
    previousGuessesElement.textContent = `Previous guesses: ${guesses.join(
      ", "
    )}`;
    attemptsElement.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber && attempts === 1) {
      messageElement.textContent = `Congratulations! You guessed the number ${randomNumber} in 1st attempt.`;
    } else if (userGuess === randomNumber) {
      messageElement.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
      messageElement.textContent = "Too low! Try again.";
    } else {
      messageElement.textContent = "Too high! Try again.";
    }
  }
}

guessBtn.onclick = makeGuess;

function handleKeyPress(event) {
  if (event.key === "Enter") {
    makeGuess();
  }
}

// Attach the keypress event listener to the input field
document.getElementById("guess").addEventListener("keypress", handleKeyPress);
