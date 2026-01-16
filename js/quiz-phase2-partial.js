/**
 * PHASE 2 (ORANGE): Partial implementation
 * Some tests pass in each section
 */

// ============================================
// TIMER FUNCTIONALITY - PARTIALLY COMPLETE ⚠️
// ============================================

class QuizTimer {
  constructor(initialSeconds, onTimeoutCallback = null) {
    this.initialSeconds = initialSeconds;
    this.timeRemaining = initialSeconds;
    this.intervalId = null;
    this.onTimeoutCallback = onTimeoutCallback;
  }

  getTimeRemaining() {
    return this.timeRemaining;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.timeRemaining--;
      
      if (this.timeRemaining <= 0) {
        this.stop();
        // BUG: Not calling callback
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    // BUG: Not stopping timer first
    this.timeRemaining = this.initialSeconds;
  }
}

// ============================================
// ANSWER VALIDATION - PARTIALLY COMPLETE ⚠️
// ============================================

function validateAnswer(userAnswer, correctAnswer) {
  // BUG: Not handling case-insensitive or whitespace
  return userAnswer === correctAnswer;
}

function markAnswerCorrect(buttonElement) {
  buttonElement.style.backgroundColor = 'rgb(40, 167, 69)';
  buttonElement.disabled = true;
}

function markAnswerIncorrect(buttonElement) {
  buttonElement.style.backgroundColor = 'rgb(220, 53, 69)';
  // BUG: Not disabling button
}

// ============================================
// SCORE CALCULATION - PARTIALLY COMPLETE ⚠️
// ============================================

class ScoreTracker {
  constructor() {
    this.score = 0;
    this.totalQuestions = 0;
  }

  getScore() {
    return this.score;
  }

  getTotalQuestions() {
    return this.totalQuestions;
  }

  addCorrectAnswer() {
    this.score++;
    this.totalQuestions++;
  }

  addIncorrectAnswer() {
    this.totalQuestions++;
  }

  getPercentage() {
    // BUG: Wrong precision and no zero-check
    return (this.score / this.totalQuestions) * 100;
  }

  reset() {
    this.score = 0;
    // BUG: Not resetting totalQuestions
  }
}

function updateScoreDisplay(score) {
  // Not implemented
}

// ============================================
// EXPORTS
// ============================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    QuizTimer,
    validateAnswer,
    markAnswerCorrect,
    markAnswerIncorrect,
    ScoreTracker,
    updateScoreDisplay
  };
}
