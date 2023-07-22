// Generate a random secret age between 1 and 100 and store it in the variable secret_Age
let secret_Age = Math.trunc(Math.random() * 50) + 1;

// Initialize the score to 20
let score = 20;

let high_Score = 0;

const display_Message = message => {
  document.querySelector('.message').textContent = message;
};

const display_Number = number => {
  document.querySelector('.number').textContent = number;
};

const display_Score = score => {
  document.querySelector('.score').textContent = score;
};

// Add a click event listener to the element with class 'check'
document.querySelector('.check').addEventListener('click', function () {
  // Get the value of the user's guess from the input element with class 'guess'
  const guess = Number(document.querySelector('.guess').value);

  // Check if the guess is not a valid number (empty input)
  if (!guess) {
    // Display a message telling the user to input an age
    display_Message('Please input age');
  } else if (guess === secret_Age) {
    // If the guess is correct, display a message and do not change the score
    display_Message('You guessed it RIGHT!');
    score = score; // This line is unnecessary and does not change the score

    // Set the text content of the element with class 'number' to the secret age (for debugging purposes)
    display_Number(secret_Age);

    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    // high_Score = score;

    if (score > high_Score) {
      high_Score = score;
      document.querySelector('.highscore').textContent = high_Score;
    } else {
      high_Score = high_Score;
    }
  } else if (guess !== secret_Age) {
    // If the guess is higher than the secret age
    if (score > 1) {
      // If the score is greater than 1, display a message and decrement the score
      display_Message(
        guess > secret_Age ? 'I am not that old' : 'I look older'
      );
      score--;
      display_Score(score); // Update the displayed score
    } else {
      // If the score is 1 or less, display a message indicating that the user lost the game and set the score to 0
      display_Message('You lost the game');
      display_Score(0);
    }
  }
});

// Resetting the entire page for new game mode
document.querySelector('.again').addEventListener('click', function () {
  // set score to default value
  score = 20;

  // set secret_Age to default random secret age
  secret_Age = Math.trunc(Math.random() * 50) + 1;

  // set message to default message
  display_Message('Start guessing...');

  display_Score(score);

  display_Number('?');

  //set guess to default or empty value
  document.querySelector('.guess').value = '';

  // set background-color back to default color
  document.querySelector('body').style.backgroundColor = '#222';

  // set box size of guessed number to default box size
  document.querySelector('.number').style.width = '15rem';
});
