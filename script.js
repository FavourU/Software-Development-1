/**
 * Quiz Application Logic - COMPLETE IMPLEMENTATION
 * Phase 3: All features working, all tests passing
 */

// ============================================
// TIMER FUNCTIONALITY - COMPLETE ✅
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
        if (this.onTimeoutCallback) {
          this.onTimeoutCallback();
        }
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
    this.stop();
    this.timeRemaining = this.initialSeconds;
  }
}

// ============================================
// ANSWER VALIDATION - COMPLETE ✅
// ============================================

function validateAnswer(userAnswer, correctAnswer) {
  const normalizedUser = userAnswer.trim().toLowerCase();
  const normalizedCorrect = correctAnswer.trim().toLowerCase();
  return normalizedUser === normalizedCorrect;
}

function markAnswerCorrect(buttonElement) {
  buttonElement.style.backgroundColor = 'rgb(40, 167, 69)';
  buttonElement.disabled = true;
}

function markAnswerIncorrect(buttonElement) {
  buttonElement.style.backgroundColor = 'rgb(220, 53, 69)';
  buttonElement.disabled = true;
}

// ============================================
// SCORE CALCULATION - COMPLETE ✅
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
    if (this.totalQuestions === 0) return 0;
    return Math.round((this.score / this.totalQuestions) * 100 * 100) / 100;
  }

  reset() {
    this.score = 0;
    this.totalQuestions = 0;
  }
}

function updateScoreDisplay(score) {
  const scoreElement = document.getElementById('score-value');
  if (scoreElement) {
    scoreElement.textContent = score.toString();
  }
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
