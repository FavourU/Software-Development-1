# How to Run TDD Phase Tests

## Overview
This project demonstrates TDD with three distinct phases. Each phase has its own implementation and test file.

## Running Tests for Each Phase
**Phase 1 (RED) - All Tests Failing:**
npm run test:phase1 > docs/tdd-phases/tdd-phase-1-red.txt 2>&1
**Expected Result:** 0/18 tests passing (all fail)

**Phase 2 (ORANGE) - Partial Implementation:**
npm run test:phase2 > docs/tdd-phases/tdd-phase-2-orange.txt 2>&1
**Expected Result:** ~10-11/18 tests passing

**Phase 3 (GREEN) - Complete Implementation** 
npm run test:phase3 > docs/tdd-phases/tdd-phase-3-green.txt 2>&1
**Expected Result:** 18/18 tests passing

## File Structure
```
js/
├── quiz-phase1.js          - Stubs only (Phase 1)
├── quiz-phase2-partial.js  - Partial implementation (Phase 2)
└── quiz-phase3-complete.js - Complete implementation (Phase 3)

tests/
├── quiz-phase1.test.js     - Tests against Phase 1
├── quiz-phase2.test.js     - Tests against Phase 2
└── quiz-phase3.test.js     - Tests against Phase 3
```

## Documentation
- Phase 1 documentation: `docs/tdd-phases/tdd-phase-1-red.txt`
- Phase 2 documentation: `docs/tdd-phases/tdd-phase-2-orange.txt`
- Phase 3 documentation: `docs/tdd-phases/tdd-phase-3-green.txt`