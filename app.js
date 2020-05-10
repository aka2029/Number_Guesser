/*
GAME FUNCTION:
- Player must guess a number between a min & max
- Player gets a certain amount of guesses
- Notify player of guessses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
 */

//  Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    // use this function isNaN() instead of writing guess === NaN
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Validate
  if (guess === winningNum) {
    // Disable the input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = "green";
    // Set Message
    setMessage(`${winningNum} is correct! YOU WIN!`, "green");
  } else {
  }
});

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
