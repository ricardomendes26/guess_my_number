'use strict';

/* console.log(document.querySelector(`.message`).textContent);
// changing the text inside the element
document.querySelector(`.message`).textContent = `🐱‍💻 Correct number!`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 15;
document.querySelector(`.score`).textContent = 30;

document.querySelector(`.guess`).value = 10;
console.log(document.querySelector(`.guess`).value); 
*/

// events

// 1 - defining the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `No Number was inputed!`;
    displayMessage(`No Number was inputed!`);
    // when player wins
  } else if (guess === secretNumber) {
    //document.querySelector(`.message`).textContent = `You win!`;
    displayMessage(`You win!`);
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      //document.querySelector(`.message`).textContent =
      // guess > secretNumber ? `Go lower!` : `Go higher!`;
      displayMessage(guess > secretNumber ? `Go lower!` : `Go higher!`);
      currentScore--;
      document.querySelector(`.score`).textContent = currentScore;
    } else {
      //document.querySelector(`.message`).textContent = `You lost the game!`;
      displayMessage(`You lost the game!`);
    }
  }
});

// when the player guesses a number too high
/*
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      document.querySelector(`.message`).textContent = `Go lower!`;
      currentScore--;
      document.querySelector(`.score`).textContent = currentScore;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game!`;
    }

    // when the player guesses a number too low
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      document.querySelector(`.message`).textContent = `Go higher!`;
      currentScore--;
      document.querySelector(`.score`).textContent = currentScore;
    } else {
      document.querySelector(`.message`).textContent = `You lost the game!`;
    }
  } */

document.querySelector(`.again`).addEventListener(`click`, function () {
  currentScore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector(`.message`).textContent = `please type a number to strat guessing!`;
  displayMessage(`please type a number to strat guessing!`);

  document.querySelector(`.score`).textContent = currentScore;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
