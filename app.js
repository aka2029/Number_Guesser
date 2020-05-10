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
  winningNum = getRandomNum(min, max),
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

// Play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

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
    // Game over - WON

    gameOver(true, `${winningNum} is correct! YOU WON!`);
  } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - Lost

      gameOver(
        false,
        `Game Over, YOU LOST! The correct number was ${winningNum}`
      );
    } else {
      // Game continues - ans WRONG

      //change border color
      guessInput.style.borderColor = "red";

      // Clear Input
      guessInput.value = "";

      // Tell user it is the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable the input
  guessInput.disabled = true;
  //change border color
  guessInput.style.borderColor = color;
  // Set Text color
  message.style.color = color;
  // Set Message
  setMessage(msg);

  // Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again"; //here we are appending ie if it already has a class the we'll add this with it
}

// Get winning num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
