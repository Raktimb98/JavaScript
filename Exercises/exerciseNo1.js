const prompt = require("prompt-sync")({ sigint: true });
const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 100:"));
  attempts++;

  if (isNaN(guess)) {
    console.log("❌ Invalid input. Please enter a number.");
    continue;
  }

  if (guess === secretNumber) {
    console.log(`🎉 Correct! You guessed it in ${attempts} attempts.`);
    break;
  } else if (guess < secretNumber) {
    console.log("📉 Too low! Try again.");
  } else if (guess > secretNumber) {
    console.log("📈 Too high! Try again.");
  }
}