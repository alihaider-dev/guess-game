'use strict'

// document.querySelector('.message').textContent = 'Ali';

document.querySelector('.check').addEventListener('click', function () {

  let guess = Number(document.querySelector('.guess-number').value);
  console.log(guess, typeof guess);

  //When there is no value
  if (!guess) {
    document.querySelector('.message').textContent = 'You must add number to guess';
  }

})