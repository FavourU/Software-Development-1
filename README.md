# Quiz Application with TDD

![Tests](https://github.com/FavourU/Software-Development-1/actions/workflows/test.yml/badge.svg)

# I Know, You Know, We Know - Trivia Quiz

## Table of Contents
1. Product Proposal
2. Design & Prototype
3. Project Management
4. Development Process
5. Testing Strategy
6. User Documentation
7. Technical Documentation
8. Evaluation
9. References

## 1. Product Proposal

### What is This?
This project is a basic web-based trivia quiz focused on Valentine's Day themed questions. It is designed as a simple, engaging web application built with HTML, CSS, and JavaScript that can be played directly in the browser.
The quiz can be accessed throught the following link: https://favouru.github.io/Software-Development-1/ 

### Why This Project?
My team holds quarterly meetings featuring ice breaker activities themed around current trends and seasons to foster team cohesion and engagement. Creating a Valentine's Day themed quiz website directly supports this initiative by providing an interactive, engaging activity that:

- **Enhances Team Engagement**: The interactive nature and competitive element (score comparison) encourages participation and creates memorable shared experiences that strengthen team bonds
- **Improves Meeting Efficiency**: Unlike traditional ice breakers that can feel forced or time-consuming, this self-paced quiz allows team members to engage quickly and naturally
- **Demonstrates Technical Value**: Showcases how lightweight web applications can solve real workplace needs without complex infrastructure

**Addressing a Broader Need**

Beyond this specific use case, the project addresses a gap in my team's digital toolkit for clean, fast, accessible quiz applications that:
- Work instantly without registration barriers (reducing friction for spontaneous team activities)
- Provide engaging time-based challenges that maintain interest
- Can be easily adapted for future team meetings with different themes

This approach transforms a seasonal team-building activity into a reusable technical solution that delivers both immediate value and demonstrates scalable web development practices.

### Target Audience
- Primary Target Audience: Corporate Teams & Workplace Groups: Need quick, no-friction activities for quarterly meetings, team-building, and seasonal celebrations. Value efficiency and engagement to strengthen team cohesion

- Social Groups & Event Organizers: Require simple web links that participants can access instantly. They may value structured activities that encourage interaction and friendly competition

- Web Developers & Technical Professionals:
-- Developers seeking lightweight quiz templates for customization
-- Value straightforward HTML, CSS, and JavaScript implementation

### What Makes It Valuable?
- **Zero friction**: No login, no installation
- **Instant feedback**: Learn as you play
- **Time challenge**: Creates engagement and replayability
- **Open source**: Code can be adapted for other topics

### Technical Approach
Built with HTML, CSS, and JavaScript to demonstrate:
- Modern web development practices
- Test-driven development (TDD)
- Agile project management
- CI/CD pipeline implementation
- Accessibility compliance

**In Scope (MVP):**
- 5 multiple-choice questions
- 25-second timer per question
- Score calculation and results
- Visual feedback for correct/incorrect answers
- Responsive design
- Play again functionality

**Out of Scope:**
- User authentication/accounts
- Leaderboard/score persistence
- Question randomization
- Multiple quiz categories
- Social media sharing

### Technical Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: GitHub Pages
- **Version Control**: Git/GitHub
- **Testing**: Jest (for unit tests)
- **CI/CD**: GitHub Actions

### Success Criteria
- Quiz is fully functional from start to finish
- All 5 questions are answerable with timer
- Score is calculated correctly
- Works on desktop
- Passes accessibility standards (WCAG AA)
- Code coverage >70%

## 2. Design & Prototype


## 3. Project Management
# Project Management

## Overview

This project was planned and managed using GitHub's built-in project management tools, following agile principles with iterative feature development. Each feature was tracked as an issue (ticket), developed in its own branch, and merged via pull request.

## Tools Used

- **GitHub Issues**: For ticket creation and requirement tracking
- **GitHub Projects**: For kanban board visualization and sprint planning
- **GitHub Pull Requests**: For code review and feature integration
- **Git Branches**: For isolated feature development

## Project Management Approach

### Agile Methodology

The project followed an agile approach with the following principles:

1. **Iterative Development**: Features were built incrementally, one at a time
2. **Small Releases**: Each feature was completed, tested, and merged before starting the next
3. **Continuous Integration**: Used GitHub Actions for automated testing
4. **Regular Review**: Each pull request was reviewed before merging

### Workflow

The development workflow followed this pattern:

```
1. Create Issue (Ticket) → 2. Create Feature Branch → 3. Develop Feature → 
4. Create Pull Request → 5. Review & Test → 6. Merge to Main → 7. Close Issue
```

## GitHub Projects Board

[Link to GitHub Projects Board](YOUR_GITHUB_PROJECTS_LINK_HERE)

The project board was organized with the following columns:

- **Backlog**: All planned features and requirements
- **To Do**: Features ready to be worked on
- **In Progress**: Currently being developed
- **Review**: Pull request open, awaiting review
- **Done**: Completed and merged features

### Project Board Screenshot

![GitHub Projects Board](path/to/screenshot.png)

*Screenshot showing the kanban board with tickets organized by status*

## Sprint Planning

The project was divided into sprints, with each sprint focusing on specific functionality:

### Sprint 1: Foundation & Setup (Week 1)
- **Goal**: Set up project structure and basic UI
- **Tickets**:
  - #1: Create HTML structure and welcome screen
  - #2: Design CSS styling with theme colors
  - #3: Set up project repository and documentation

### Sprint 2: Navigation & Timer (Week 2)
- **Goal**: Implement screen navigation and countdown timer
- **Tickets**:
  - #4: Implement screen navigation functionality
  - #5: Add countdown timer with 00:XX format
  - #6: Fix screen layout to prevent scrolling

### Sprint 3: Quiz Logic & TDD (Week 3)
- **Goal**: Implement quiz functionality with test-driven development
- **Tickets**:
  - #7: Create QuizTimer class with tests
  - #8: Create ScoreTracker class with tests
  - #9: Implement answer validation with tests
  - #10: Set up GitHub Actions CI/CD for automated testing

### Sprint 4: Integration & Polish (Week 4)
- **Goal**: Connect UI to tested logic and final refinements
- **Tickets**:
  - #11: Integrate TDD classes with UI (app.js)
  - #12: Fix timer interval stacking bug
  - #13: Implement play again functionality
  - #14: Final testing and bug fixes

## Issue Tracking

### Issue Template

Each feature was captured as a GitHub issue following this structure:

**Example Issue #5: Add Countdown Timer**

```markdown
## Description
Implement a countdown timer that starts at 25 seconds when each question is displayed.

## Acceptance Criteria
- [ ] Timer starts at 00:25 when question appears
- [ ] Timer counts down every second (00:25 → 00:24 → 00:23...)
- [ ] Timer displays in format 00:XX
- [ ] Timer turns red when ≤ 10 seconds remaining
- [ ] Timer stops when user selects an answer
- [ ] Timer resets for each new question
- [ ] Alert shown when time runs out

## Technical Requirements
- Create `startTimer()` function
- Create `stopTimer()` function
- Create `updateTimerDisplay()` function
- Use `setInterval()` for countdown
- Clear intervals properly to prevent memory leaks

## Branch
feature/timer

## Related Issues
Relates to #4 (Screen Navigation)
```

### Issue Lifecycle

1. **Created**: Issue created in Backlog with clear acceptance criteria
2. **Assigned**: Moved to "To Do" and assigned to developer
3. **In Progress**: Branch created, development begins
4. **Pull Request**: PR created, issue moved to "Review"
5. **Testing**: Automated tests run via GitHub Actions
6. **Merged**: PR merged, branch deleted, issue closed and moved to "Done"

## Branch Strategy

### Naming Convention

Branches followed this naming pattern:
- `feature/[feature-name]` - For new features
- `fix/[bug-description]` - For bug fixes
- `docs/[documentation-update]` - For documentation changes

### Examples

- `feature/screen-navigation` - Navigation between quiz screens
- `feature/timer` - Countdown timer implementation
- `feature/ui-integration` - Connect UI to TDD classes
- `fix/timer-interval-stacking` - Fix multiple timer intervals bug
- `fix/screen-layout` - Fix scrolling issue

## Pull Request Process

### PR Template

Each pull request included:

1. **Title**: Clear description of the feature/fix
2. **Description**: 
   - Overview of changes
   - Files modified
   - Testing performed
3. **Screenshots**: Visual evidence of functionality (where applicable)
4. **Linked Issues**: Using "Closes #X" or "Fixes #X"
5. **Checklist**:
   - [ ] Code follows project style guidelines
   - [ ] Tests pass (if applicable)
   - [ ] Documentation updated
   - [ ] No merge conflicts

### Example PR

**Pull Request #5: Feature - Countdown Timer**

```markdown
## Feature: Countdown Timer

### Changes
- Added countdown timer starting at 25 seconds (00:25 format)
- Timer resets for each question
- Visual warning (red) when under 10 seconds
- Timer stops when navigating between questions

### Files Changed
- `script.js` - Added timer functions and logic
- `index.html` - Updated to load timer code

### Testing
- ✓ Timer displays correctly in 00:XX format
- ✓ Countdown works every second
- ✓ Timer resets on each new question
- ✓ Red color when <= 10 seconds
- ✓ Timer stops on navigation

### Screenshots
[Timer starting at 00:25]
[Timer showing red at 00:09]

Closes #5
```

## One Feature = One Ticket = One Branch = One PR

This project strictly followed the convention:

| Ticket | Branch | PR | Feature |
|--------|--------|-----|---------|
| Issue #4 | `feature/screen-navigation` | PR #4 | Screen navigation functionality |
| Issue #5 | `feature/timer` | PR #5 | Countdown timer |
| Issue #11 | `feature/ui-integration` | PR #11 | UI integration with TDD classes |
| Issue #12 | `fix/timer-interval-stacking` | PR #12 | Fixed timer bug |

Each feature was developed in isolation, tested, and merged before starting the next one, ensuring clean, manageable development cycles.

## Bug Tracking

Bugs discovered during development were tracked separately:

**Bug Ticket Example:**

```markdown
## Bug: Multiple Timer Intervals Causing Question Skipping

### Description
When timing out on question 3 and waiting before dismissing the alert, the quiz skips question 4 and jumps to results.

### Root Cause
Multiple `setInterval` instances are created without clearing previous ones, causing callback stacking.

### Steps to Reproduce
1. Start quiz
2. Let timer run out on question 3
3. Wait 2+ minutes on the alert
4. Press OK
5. Observe: Question 4 is skipped, results screen appears

### Expected Behavior
Should navigate to question 4 normally after dismissing alert

### Actual Behavior
Skips question 4, goes directly to results

### Fix
- Add global `timerDisplayInterval` variable
- Clear interval before creating new ones
- Clear interval when answer is clicked

### Priority
High

### Status
Fixed in PR #12
```

## Continuous Integration

### GitHub Actions

Automated testing was set up using GitHub Actions to run tests on every push and pull request:

```yaml
# .github/workflows/test.yml
name: Run Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

This ensured code quality and prevented bugs from being merged into the main branch.

## Documentation Updates

Documentation was kept up-to-date throughout development:

- **README**: Updated after each major feature
- **Code Comments**: Added inline documentation for all functions
- **User Guide**: Created to explain how to use the quiz
- **Technical Documentation**: Explained project setup and testing

## Lessons Learned

### What Worked Well
- Feature branches kept development organized
- Small, incremental PRs were easier to review
- Automated testing caught bugs early
- Clear issue descriptions prevented confusion

### Challenges
- Timer interval management required debugging
- CSS layout needed multiple iterations
- Coordinating TDD code with UI integration required careful planning

### Improvements for Future Projects
- Write more detailed acceptance criteria upfront
- Include more edge case testing
- Add issue templates for consistency
- Use GitHub Projects automation features more extensively

## Project Statistics

- **Total Issues Created**: 14
- **Total Pull Requests**: 14
- **Total Commits**: 30+
- **Feature Branches**: 8
- **Bug Fix Branches**: 2
- **Average PR Size**: 50-150 lines of code
- **Code Review Time**: 1-2 hours per PR (self-review)

---

*This section demonstrates the use of modern project management techniques and tools throughout the development of this quiz application, following agile principles and industry best practices.*
