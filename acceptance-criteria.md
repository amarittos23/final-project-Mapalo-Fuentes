# CODECODE Acceptance Criteria

## AC1 — Learning paths
- Given a student opens Lessons, when the page loads, then HTML, CSS, and JavaScript choices are visible.
- Given a student selects a language, when its path opens, then eight lessons are listed for that language.
- Given a student opens a lesson, then the page shows an explanation, analogy, code example, explanatory note, practice task, and expected result.
- Given a student marks a lesson complete, then its completion state is saved and remains after refreshing the same browser.

## AC2 — Guided playground
- Given a student opens Playground, then HTML, CSS, and JavaScript tabs and a guided example selector are available.
- Given a student selects a language, then the example selector displays examples for that language.
- Given a student loads an example and selects Run, then the preview displays the resulting HTML/CSS/JavaScript behavior.
- Given a student selects Reset example, then the editor returns to the selected example's original code.
- Given a student clears the editor, then the editor and preview are cleared.

## AC3 — Quizzes
- Given a student opens Quizzes, then separate HTML, CSS, and JavaScript quiz cards are shown.
- Given a student starts a quiz, then each question and its answer options are displayed.
- Given a student submits with unanswered questions, then the page asks the student to answer the remaining questions.
- Given a student submits all answers, then the score, correct answers, and explanations are displayed.
- Given a student retakes a subject quiz, then the latest saved result for that subject is replaced rather than duplicated.

## AC4 — Profile and progress
- Given a student opens Profile, then the page shows lesson completion, latest quiz results, average latest quiz score, and overall progress.
- Given the student completes a lesson or submits a quiz, then the corresponding profile information updates from saved browser data.
- Given a student earns a milestone, then the matching achievement is displayed.
- Given a student edits the display name, then the learner card displays the updated name after refresh.
- Given a student downloads progress, then a JSON file containing the display name, completed lessons, and latest quiz results is created.
- Given a student confirms reset, then locally saved lesson and quiz progress is cleared.

## AC5 — Accessibility and responsive behavior
- Given the site is used on a narrow screen, then navigation, lesson lists, cards, and controls reflow without horizontal page overflow.
- Given a student navigates with a keyboard, then interactive controls show a visible focus indicator.
- Given a student prefers reduced motion, then nonessential transitions are minimized.

## AC6 — Local data expectations
- Given the student refreshes the same browser, then locally saved progress remains available.
- Given the student uses another device or clears browser storage, then the site does not claim that progress is synchronized or recoverable from a server.
