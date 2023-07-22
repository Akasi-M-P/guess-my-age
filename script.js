// Generate a random secret age between 1 and 100 and store it in the variable secret_Age
let secret_Age = Math.trunc(Math.random() * 50) + 1;

// Initialize the score to 20
let score = 20;

// Store the highest score obtained during the session
let high_Score = 0;

// Function to display a message on the screen
const display_Message = message => {
  document.querySelector('.message').textContent = message;
};

// Function to display a number on the screen
const display_Number = number => {
  document.querySelector('.number').textContent = number;
};

// Function to display the current score on the screen
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

    // Change the background color to green to indicate a correct guess
    document.querySelector('body').style.backgroundColor = 'green';

    // Increase the width of the guessed number box to accommodate a longer secret age number
    document.querySelector('.number').style.width = '30rem';

    // Update the high score if the current score is higher
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

// Resetting the entire page for a new game mode
document.querySelector('.again').addEventListener('click', function () {
  // Set the score to the default value (20)
  score = 20;

  // Generate a new random secret age between 1 and 100
  secret_Age = Math.trunc(Math.random() * 50) + 1;

  // Set the initial message for the user
  display_Message('Start guessing...');

  // Display the score on the screen
  display_Score(score);

  // Display a question mark in the number box to indicate an ongoing game
  display_Number('?');

  // Reset the input field to an empty value
  document.querySelector('.guess').value = '';

  // Reset the background color to the default color
  document.querySelector('body').style.backgroundColor = '#222';

  // Reset the guessed number box size to the default size
  document.querySelector('.number').style.width = '15rem';
});
