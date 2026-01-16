/**
 * Quiz Application - UI Integration
 * 
 * This file handles all DOM interactions and connects the UI to the
 * tested logic in script.js (QuizTimer, ScoreTracker, etc.)
 */

// ============================================
// GLOBAL STATE
// ============================================
let currentQuestion = 1;
let quizTimer = null;
let scoreTracker = null;

// Define correct answers for each question
const correctAnswers = {
  1: 'a) February',
  2: 'c) Cupid',
  3: 'a) France',
  4: 'b) 1537',
  5: 'c) South Korea'
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize score tracker
  scoreTracker = new ScoreTracker();
  
  // Get the "I am ready" button
  const readyButton = document.querySelector('.cta-button');
  if (readyButton) {
    readyButton.addEventListener('click', startQuiz);
  }
  
  // Setup answer buttons for all questions
  setupAnswerButtons();
  
  // Setup play again button
  const playAgainButton = document.querySelector('#results-screen .answer-option');
  if (playAgainButton) {
    playAgainButton.addEventListener('click', resetQuiz);
  }
});

// ============================================
// QUIZ FLOW FUNCTIONS
// ============================================

/**
 * Start the quiz - hide welcome screen and show first question
 */
function startQuiz() {
  // Hide welcome screen
  const welcomeScreen = document.querySelector('.container');
  if (welcomeScreen) {
    welcomeScreen.style.display = 'none';
  }
  
  // Show first question
  const question1Screen = document.getElementById('question1-screen');
  if (question1Screen) {
    question1Screen.classList.remove('hidden');
  }
  
  // Start timer for first question
  startTimerForCurrentQuestion();
}

/**
 * Navigate to a specific question
 */
function goToQuestion(questionNumber) {
  // Stop current timer
  if (quizTimer) {
    quizTimer.stop();
  }
  
  // Update current question number
  currentQuestion = questionNumber;
  
  // Hide all screens
  hideAllScreens();
  
  // Show target question screen
  const targetScreen = document.getElementById(`question${questionNumber}-screen`);
  if (targetScreen) {
    targetScreen.classList.remove('hidden');
  }
  
  // Start timer for new question
  startTimerForCurrentQuestion();
}

/**
 * Navigate to results screen
 */
function goToResults() {
  // Stop timer
  if (quizTimer) {
    quizTimer.stop();
  }
  
  // Hide all screens
  hideAllScreens();
  
  // Show results screen
  const resultsScreen = document.getElementById('results-screen');
  if (resultsScreen) {
    resultsScreen.classList.remove('hidden');
  }
  
  // Update final score display
  updateScoreDisplay(scoreTracker.getScore());
}

/**
 * Reset quiz to start over
 */
function resetQuiz() {
  // Reset score
  scoreTracker.reset();
  
  // Reset to question 1
  currentQuestion = 1;
  
  // Stop timer if running
  if (quizTimer) {
    quizTimer.stop();
  }
  
  // Hide all screens
  hideAllScreens();
  
  // Show welcome screen
  const welcomeScreen = document.querySelector('.container');
  if (welcomeScreen) {
    welcomeScreen.style.display = 'block';
  }
  
  // Reset all answer buttons
  resetAllAnswerButtons();
}

/**
 * Hide all question and result screens
 */
function hideAllScreens() {
  const allScreens = document.querySelectorAll('.question-screen');
  allScreens.forEach(screen => {
    screen.classList.add('hidden');
  });
}

// ============================================
// TIMER FUNCTIONS
// ============================================

/**
 * Start timer for the current question
 */
function startTimerForCurrentQuestion() {
  // Create new timer (25 seconds)
  quizTimer = new QuizTimer(25, handleTimeOut);
  
  // Start the timer
  quizTimer.start();
  
  // Update display every second
  const timerDisplayInterval = setInterval(() => {
    if (quizTimer && quizTimer.getTimeRemaining() > 0) {
      updateTimerDisplay();
    } else {
      clearInterval(timerDisplayInterval);
    }
  }, 1000);
  
  // Initial display update
  updateTimerDisplay();
}

/**
 * Update the timer display on screen
 */
function updateTimerDisplay() {
  const visibleScreen = document.querySelector('.question-screen:not(.hidden)');
  
  if (visibleScreen && quizTimer) {
    const timerElement = visibleScreen.querySelector('.timer');
    
    if (timerElement) {
      const timeLeft = quizTimer.getTimeRemaining();
      const formatted = `⏳ 00:${timeLeft.toString().padStart(2, '0')}`;
      timerElement.textContent = formatted;
      
      // Change color when low on time
      if (timeLeft <= 10) {
        timerElement.style.color = '#ff3333';
      } else {
        timerElement.style.color = '';
      }
    }
  }
}

/**
 * Handle when timer runs out
 */
function handleTimeOut() {
  // Mark as incorrect answer (time ran out)
  scoreTracker.addIncorrectAnswer();
  
  // Show alert
  alert('⏰ Time is up! Moving to next question...');
  
  // Move to next question or results
  if (currentQuestion < 5) {
    goToQuestion(currentQuestion + 1);
  } else {
    goToResults();
  }
}

// ============================================
// ANSWER HANDLING
// ============================================

/**
 * Setup click listeners for all answer buttons
 */
function setupAnswerButtons() {
  // For each question (1-5)
  for (let i = 1; i <= 5; i++) {
    const questionScreen = document.getElementById(`question${i}-screen`);
    if (questionScreen) {
      const answerButtons = questionScreen.querySelectorAll('.answer-option');
      
      answerButtons.forEach(button => {
        button.addEventListener('click', function() {
          handleAnswerClick(i, button);
        });
      });
    }
  }
}

/**
 * Handle when user clicks an answer
 */
function handleAnswerClick(questionNum, buttonElement) {
  // Get user's answer
  const userAnswer = buttonElement.textContent;
  
  // Get correct answer
  const correctAnswer = correctAnswers[questionNum];
  
  // Validate answer using TDD function
  const isCorrect = validateAnswer(userAnswer, correctAnswer);
  
  // Stop timer
  if (quizTimer) {
    quizTimer.stop();
  }
  
  // Mark answer and update score
  if (isCorrect) {
    markAnswerCorrect(buttonElement);
    scoreTracker.addCorrectAnswer();
  } else {
    markAnswerIncorrect(buttonElement);
    scoreTracker.addIncorrectAnswer();
  }
  
  // Disable all answer buttons for this question
  const questionScreen = document.getElementById(`question${questionNum}-screen`);
  if (questionScreen) {
    const allButtons = questionScreen.querySelectorAll('.answer-option');
    allButtons.forEach(btn => {
      btn.disabled = true;
    });
  }
  
  // Show next button
  showNextButton(questionNum);
}

/**
 * Show the "Next" button after answering
 */
function showNextButton(questionNum) {
  const questionScreen = document.getElementById(`question${questionNum}-screen`);
  if (questionScreen) {
    const nextButton = questionScreen.querySelector('.next-button');
    if (nextButton) {
      nextButton.classList.remove('hidden');
    }
  }
}

/**
 * Reset all answer buttons to original state
 */
function resetAllAnswerButtons() {
  for (let i = 1; i <= 5; i++) {
    const questionScreen = document.getElementById(`question${i}-screen`);
    if (questionScreen) {
      const answerButtons = questionScreen.querySelectorAll('.answer-option');
      answerButtons.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = '';
      });
      
      // Hide next button
      const nextButton = questionScreen.querySelector('.next-button');
      if (nextButton) {
        nextButton.classList.add('hidden');
      }
    }
  }
}
