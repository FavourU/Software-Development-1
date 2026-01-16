/**
 * Quiz Application - Screen Navigation & Timer Feature
 * 
 * This script handles:
 * - Navigation between welcome screen and question screens
 * - Countdown timer for each question (25 seconds)
 */

// Global variables for timer
let timerInterval = null;
let timeRemaining = 25;

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
  
  // Start the timer for question 1
  startTimer();
}


/**
 * Navigate to a specific question screen
 * @param {number} questionNumber - The question number to navigate to (1-5)
 */
function goToQuestion(questionNumber) {
  // Stop the current timer
  stopTimer();
  
  // Hide all question screens
  const allQuestionScreens = document.querySelectorAll('.question-screen');
  allQuestionScreens.forEach(screen => {
    screen.classList.add('hidden');
  });
  
  // Show the requested question screen
  const targetScreen = document.getElementById(`question${questionNumber}-screen`);
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
  }
  
  // Start timer for the new question
  startTimer();
}


/**
 * Navigate to the results screen
 */
function goToResults() {
  // Stop the timer
  stopTimer();
  
  // Hide all question screens
  const allQuestionScreens = document.querySelectorAll('.question-screen');
  allQuestionScreens.forEach(screen => {
    screen.classList.add('hidden');
  });
  
  // Show results screen
  const resultsScreen = document.getElementById('results-screen');
  if (resultsScreen) {
    resultsScreen.classList.remove('hidden');
  }
}


/**
 * Start the countdown timer for the current question
 */
function startTimer() {
  // Reset time to 25 seconds
  timeRemaining = 25;
  
  // Update display immediately
  updateTimerDisplay();
  
  // Clear any existing timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  // Start countdown - update every second
  timerInterval = setInterval(function() {
    timeRemaining--;
    updateTimerDisplay();
    
    // Check if time is up
    if (timeRemaining <= 0) {
      stopTimer();
      handleTimeUp();
    }
  }, 1000); // Run every 1000ms (1 second)
}


/**
 * Stop the countdown timer
 */
function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}


/**
 * Update the timer display in the format 00:XX
 */
function updateTimerDisplay() {
  // Find the timer element on the currently visible screen
  const visibleScreen = document.querySelector('.question-screen:not(.hidden)');
  
  if (visibleScreen) {
    const timerElement = visibleScreen.querySelector('.timer');
    
    if (timerElement) {
      // Format: 00:25, 00:24, 00:23, etc.
      const formattedTime = `⏳ 00:${timeRemaining.toString().padStart(2, '0')}`;
      timerElement.textContent = formattedTime;
      
      // Change color when time is running low (less than 10 seconds)
      if (timeRemaining <= 10) {
        timerElement.style.color = '#ff3333'; // Red warning
      } else {
        timerElement.style.color = ''; // Reset to default
      }
    }
  }
}


/**
 * Handle when time runs out
 */
function handleTimeUp() {
  // You can customize this behavior later
  // For now, just show an alert
  alert('⏰ Time is up! Moving to next question...');
  
  // Automatically move to next question or results
  // (This will be enhanced in a future feature)
}
