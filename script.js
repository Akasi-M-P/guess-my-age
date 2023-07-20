const secret_Age = Math.trunc(Math.random() * 100) + 1;
console.log(secret_Age);

let score = 20;

document.querySelector('.number').textContent = secret_Age;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please input age';
  } else if (guess === secret_Age) {
    document.querySelector('.message').textContent = 'You guessed it RIGHT!';
    score = score;
  } else if (guess > secret_Age) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'I am not that old';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secret_Age) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'I look older';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
