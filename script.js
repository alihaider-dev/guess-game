'use strict'

// document.querySelector('.message').textContent = 'Ali';
// Generate Random Number

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;

document.querySelector('.secret-number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function () {

  let guess = Number(document.querySelector('.guess-number').value);
  console.log(guess, typeof guess);

  //When there is no value
  if (!guess) {
    document.querySelector('.message').textContent = 'You must add number to guess';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Congratulation! You GUESS the Right Number';
    document.querySelector('.highscore').textContent = score * 5;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'You should guess lower Number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over, Good luck for Next Time';
      document.querySelector('.score').textContent = 0;
    }

  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess Heigher Number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over, Good luck for Next Time';
      document.querySelector('.score').textContent = 0;
    }
  }

})