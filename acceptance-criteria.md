# CODECODE — Acceptance Criteria

Each criterion is written so a classmate can test it as a visible pass/fail result. The IDs match `user-story.md`.

## Feature 1: Discover and navigate CODECODE

### US1 — Explore the learning homepage
- **AC1.1:** Given I open `index.html`, when the homepage finishes loading, then I see the CODECODE introduction, a clear call to action, and cards linking to the main learning areas.
- **AC1.2:** Given I choose the Lessons or Playground call to action, when I activate it, then the corresponding page opens.
- **AC1.3:** Given a featured area has no content, when I view that area, then I see a helpful empty-state message instead of a blank section.

### US2 — Move between learning areas
- **AC2.1:** Given I am on any CODECODE page, when I select Home, Lessons, Playground, Quizzes, or Profile, then the matching page opens.
- **AC2.2:** Given I am viewing a page, when its navigation is displayed, then the current page is visually identified and programmatically marked.
- **AC2.3:** Given a navigation destination is unavailable, when I select its link, then I see a readable message and the browser does not navigate to a broken destination.

## Feature 2: Learn and practice

### US3 — Choose a programming language
- **AC3.1:** Given I am on the Lessons page, when I select HTML, CSS, or JavaScript, then the matching lesson cards appear and the selected language button is visibly active.
- **AC3.2:** Given a language has no lessons, when I select it, then I see a clear message explaining that lessons are not available yet.
- **AC3.3:** Given I switch between language buttons, when each selection changes, then only the selected language's lessons are shown.

### US4 — Track lesson completion
- **AC4.1:** Given a lesson is not completed, when I select Mark as Completed, then the lesson is recorded and its button changes to a completed state.
- **AC4.2:** Given I have completed a lesson, when I open or refresh my Profile page, then that lesson appears in Completed Lessons.
- **AC4.3:** Given I have not completed any lessons, when I view my profile, then I see a helpful empty-state message.

### US5 — Experiment in the code playground
- **AC5.1:** Given I enter valid HTML/CSS/JavaScript in the editor, when I select Run Code, then the preview area displays the result.
- **AC5.2:** Given the editor contains only spaces or is empty, when I select Run Code, then I see a message asking me to enter code and no stale preview is shown.
- **AC5.3:** Given I have entered code, when I select Reset, then the editor and preview are cleared and the status returns to its ready message.
- **AC5.4:** Given the code produces a JavaScript runtime error, when I run it, then the playground displays an error notice rather than silently reporting success.

## Feature 3: Check knowledge and progress

### US6 — Take interactive quizzes and challenges
- **AC6.1:** Given I open Quizzes, when I select an available activity, then its questions or coding task are displayed.
- **AC6.2:** Given I select an answer, when the answer is checked, then I receive visible feedback for that question.
- **AC6.3:** Given I submit a quiz with answered questions, when scoring finishes, then I see my score and it is saved for my profile.
- **AC6.4:** Given no activities are available, when I open Quizzes, then I see a clear empty-state message.

### US7 — Review my learning progress
- **AC7.1:** Given I have completed lessons, when I open Profile, then I see the names of those lessons.
- **AC7.2:** Given I have submitted quizzes, when I open Profile, then I see each saved quiz score and its total.
- **AC7.3:** Given I have earned achievements, when I open Profile, then I see the corresponding badges and descriptions.
- **AC7.4:** Given there is no saved progress, when I open Profile, then each relevant section displays its own helpful empty-state message.

## Feature 4: Personalize the experience

### US8 — Choose a comfortable display mode
- **AC8.1:** Given I am on a CODECODE page, when I activate the display-mode control, then the page changes to the alternate color theme.
- **AC8.2:** Given I selected a display mode, when I navigate to another CODECODE page or reload, then my selected mode remains active.
- **AC8.3:** Given browser storage is unavailable or has no saved preference, when the page loads, then the default theme is displayed without preventing the page from working.
