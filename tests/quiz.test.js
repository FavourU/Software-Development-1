/**
 * @jest-environment jsdom
 */

const { describe, expect, test, beforeEach, jest } = require('@jest/globals');

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

describe('Timer Function', () => {
  test('should initialize timer with 25 seconds', () => {
    const QuizTimer = require('../js/quiz.js').QuizTimer;
    const timer = new QuizTimer(25);
    expect(timer.getTimeRemaining()).toBe(25);
  });

  test('should decrement timer every second', (done) => {
    const QuizTimer = require('../js/quiz.js').QuizTimer;
    const timer = new QuizTimer(3);
    
    timer.start();
    
    setTimeout(() => {
      expect(timer.getTimeRemaining()).toBe(2);
      timer.stop();
      done();
    }, 1100);
  });

  test('should call callback when timer reaches zero', (done) => {
    const QuizTimer = require('../js/quiz.js').QuizTimer;
    const mockCallback = jest.fn();
    const timer = new QuizTimer(1, mockCallback);
    
    timer.start();
    
    setTimeout(() => {
      expect(mockCallback).toHaveBeenCalled();
      done();
    }, 1500);
  });

  test('should stop timer when stop() is called', () => {
    const QuizTimer = require('../js/quiz.js').QuizTimer;
    const timer = new QuizTimer(25);
    timer.start();
    timer.stop();
    
    const timeBefore = timer.getTimeRemaining();
    setTimeout(() => {
      expect(timer.getTimeRemaining()).toBe(timeBefore);
    }, 1100);
  });

  test('should reset timer to initial value', () => {
    const QuizTimer = require('../js/quiz.js').QuizTimer;
    const timer = new QuizTimer(25);
    timer.start();
    timer.reset();
    
    expect(timer.getTimeRemaining()).toBe(25);
  });
});

// ============================================
// TEST SUITE 2: ANSWER VALIDATION
// ============================================

describe('Answer Validation', () => {
  test('should return true for correct answer', () => {
    const { validateAnswer } = require('../js/quiz.js');
    const result = validateAnswer('a) February', 'a) February');
    expect(result).toBe(true);
  });

  test('should return false for incorrect answer', () => {
    const { validateAnswer } = require('../js/quiz.js');
    const result = validateAnswer('b) March', 'a) February');
    expect(result).toBe(false);
  });

  test('should be case-insensitive', () => {
    const { validateAnswer } = require('../js/quiz.js');
    const result = validateAnswer('A) FEBRUARY', 'a) February');
    expect(result).toBe(true);
  });

  test('should handle whitespace', () => {
    const { validateAnswer } = require('../js/quiz.js');
    const result = validateAnswer('  a) February  ', 'a) February');
    expect(result).toBe(true);
  });

  test('should mark answer as correct in UI', () => {
    const { markAnswerCorrect } = require('../js/quiz.js');
    const button = document.querySelector('.answer-option[data-correct="true"]');
    
    markAnswerCorrect(button);
    
    expect(button.style.backgroundColor).toBe('rgb(40, 167, 69)');
    expect(button.disabled).toBe(true);
  });

  test('should mark answer as incorrect in UI', () => {
    const { markAnswerIncorrect } = require('../js/quiz.js');
    const button = document.querySelector('.answer-option[data-correct="false"]');
    
    markAnswerIncorrect(button);
    
    expect(button.style.backgroundColor).toBe('rgb(220, 53, 69)');
    expect(button.disabled).toBe(true);
  });
});

// ============================================
// TEST SUITE 3: SCORE CALCULATION
// ============================================

describe('Score Calculation', () => {
  test('should initialize score at zero', () => {
    const { ScoreTracker } = require('../js/quiz.js');
    const tracker = new ScoreTracker();
    expect(tracker.getScore()).toBe(0);
  });

  test('should increment score for correct answer', () => {
    const { ScoreTracker } = require('../js/quiz.js');
    const tracker = new ScoreTracker();
    tracker.addCorrectAnswer();
    expect(tracker.getScore()).toBe(1);
  });

  test('should not increment score for incorrect answer', () => {
    const { ScoreTracker } = require('../js/quiz.js');
    const tracker = new ScoreTracker();
    tracker.addIncorrectAnswer();
    expect(tracker.getScore()).toBe(0);
  });

  test('should track total questions attempted', () => {
    const { ScoreTracker } = require('../js/quiz.js');
    const tracker = new ScoreTracker();
    tracker.addCorrectAnswer();
    tracker.addIncorrectAnswer();
    expect(tracker.getTotalQuestions()).toBe(2);
  });

  test('should calculate percentage score', () => {
    const { ScoreTracker } = require('../js/quiz.js');
    const tracker = new ScoreTracker();
    tracker.addCorrectAnswer();
    tracker.addCorrectAnswer();
    tracker.addIncorrectAnswer();
    expect(tracker.getPercentage()).toBe(66.67);
  });

  test('should reset score to zero', () => {
    const { ScoreTracker } = require('../js/quiz.js');
    const tracker = new ScoreTracker();
    tracker.addCorrectAnswer();
    tracker.reset();
    expect(tracker.getScore()).toBe(0);
    expect(tracker.getTotalQuestions()).toBe(0);
  });

  test('should update score display in DOM', () => {
    const { updateScoreDisplay } = require('../js/quiz.js');
    updateScoreDisplay(4);
    const scoreElement = document.getElementById('score-value');
    expect(scoreElement.textContent).toBe('4');
  });
});
