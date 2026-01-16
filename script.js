/**
 * Quiz Application - Screen Navigation Feature
 * 
 * This script handles navigation between the welcome screen and question screens.
 * It provides functions to show/hide different sections of the quiz.
 */

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  
  // Get reference to the "I am ready" button
  const readyButton = document.querySelector('.cta-button');
  
  // Add click event listener to start the quiz
  if (readyButton) {
    readyButton.addEventListener('click', startQuiz);
  }
});


/**
 * Starts the quiz by hiding the welcome screen and showing question 1
 */
function startQuiz() {
  // Hide the welcome screen
  const welcomeScreen = document.querySelector('.container');
  if (welcomeScreen) {
    welcomeScreen.style.display = 'none';
  }
  
  // Show the first question screen
  const question1Screen = document.getElementById('question1-screen');
  if (question1Screen) {
    question1Screen.classList.remove('hidden');
  }
}

