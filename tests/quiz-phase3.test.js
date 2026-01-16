/**
 * @jest-environment jsdom
 */

const { describe, expect, test, beforeEach } = require('@jest/globals');

// Import Phase 2 implementation (partial)
const {
  QuizTimer,
  validateAnswer,
  markAnswerCorrect,
  markAnswerIncorrect,
  ScoreTracker,
  updateScoreDisplay
} = require('../js/quiz-phase3-complete.js');

// Mock DOM setup
beforeEach(() => {
  document.body.innerHTML = `
    <div id="app">
      <div class="timer">⏳ 25s</div>
      <button class="answer-option" data-correct="true">Correct Answer</button>
      <button class="answer-option" data-correct="false">Wrong Answer</button>
      <span id="score-value">0</span>
    </div>
  `;
});

// ============================================
// TEST SUITE 1: TIMER FUNCTIONALITY
// ============================================

describe('Timer Function - Phase 1', () => {
  test('should initialize timer with 25 seconds', () => {
    const timer = new QuizTimer(25);
    expect(timer.getTimeRemaining()).toBe(25);
  });

  test('should decrement timer every second', (done) => {
    const timer = new QuizTimer(3);
    timer.start();
    
    setTimeout(() => {
      expect(timer.getTimeRemaining()).toBe(2);
      timer.stop();
      done();
    }, 1100);
  });

  test('should call callback when timer reaches zero', (done) => {
    const mockCallback = jest.fn();
    const timer = new QuizTimer(1, mockCallback);
    timer.start();
    
    setTimeout(() => {
      expect(mockCallback).toHaveBeenCalled();
      done();
    }, 1500);
  });

  test('should stop timer when stop() is called', (done) => {
    const timer = new QuizTimer(25);
    timer.start();
    
    setTimeout(() => {
      const timeBefore = timer.getTimeRemaining();
      timer.stop();
      
      setTimeout(() => {
        expect(timer.getTimeRemaining()).toBe(timeBefore);
        done();
      }, 1100);
    }, 500);
  });

  test('should reset timer to initial value', () => {
    const timer = new QuizTimer(25);
    timer.start();
    timer.reset();
    expect(timer.getTimeRemaining()).toBe(25);
  });
});

// ============================================
// TEST SUITE 2: ANSWER VALIDATION
// ============================================

describe('Answer Validation - Phase 1', () => {
  test('should return true for correct answer', () => {
    const result = validateAnswer('a) February', 'a) February');
    expect(result).toBe(true);
  });

  test('should return false for incorrect answer', () => {
    const result = validateAnswer('b) March', 'a) February');
    expect(result).toBe(false);
  });

  test('should be case-insensitive', () => {
    const result = validateAnswer('A) FEBRUARY', 'a) February');
    expect(result).toBe(true);
  });

  test('should handle whitespace', () => {
    const result = validateAnswer('  a) February  ', 'a) February');
    expect(result).toBe(true);
  });

  test('should mark answer as correct in UI', () => {
    const button = document.querySelector('.answer-option[data-correct="true"]');
    markAnswerCorrect(button);
    expect(button.style.backgroundColor).toBe('rgb(40, 167, 69)');
    expect(button.disabled).toBe(true);
  });

  test('should mark answer as incorrect in UI', () => {
    const button = document.querySelector('.answer-option[data-correct="false"]');
    markAnswerIncorrect(button);
    expect(button.style.backgroundColor).toBe('rgb(220, 53, 69)');
    expect(button.disabled).toBe(true);
  });
});

// ============================================
// TEST SUITE 3: SCORE CALCULATION
// ============================================

describe('Score Calculation - Phase 1', () => {
  test('should initialize score at zero', () => {
    const tracker = new ScoreTracker();
    expect(tracker.getScore()).toBe(0);
  });

  test('should increment score for correct answer', () => {
    const tracker = new ScoreTracker();
    tracker.addCorrectAnswer();
    expect(tracker.getScore()).toBe(1);
  });

  test('should not increment score for incorrect answer', () => {
    const tracker = new ScoreTracker();
    tracker.addIncorrectAnswer();
    expect(tracker.getScore()).toBe(0);
  });

  test('should track total questions attempted', () => {
    const tracker = new ScoreTracker();
    tracker.addCorrectAnswer();
    tracker.addIncorrectAnswer();
    expect(tracker.getTotalQuestions()).toBe(2);
  });

  test('should calculate percentage score', () => {
    const tracker = new ScoreTracker();
    tracker.addCorrectAnswer();
    tracker.addCorrectAnswer();
    tracker.addIncorrectAnswer();
    expect(tracker.getPercentage()).toBe(66.67);
  });

  test('should reset score to zero', () => {
    const tracker = new ScoreTracker();
    tracker.addCorrectAnswer();
    tracker.reset();
    expect(tracker.getScore()).toBe(0);
    expect(tracker.getTotalQuestions()).toBe(0);
  });

  test('should update score display in DOM', () => {
    updateScoreDisplay(4);
    const scoreElement = document.getElementById('score-value');
    expect(scoreElement.textContent).toBe('4');
  });
});