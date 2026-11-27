# CODECODE
### Learn the web. Write the code. See your progress.

CODECODE is a beginner-friendly, interactive frontend learning platform for students starting with **HTML, CSS, and JavaScript**. It combines step-by-step modules, guided code examples, a browser-based playground, subject quizzes, and a learner profile.

## Learning experience

- **Step-by-step lessons:** Eight lessons for each language (24 total). Each lesson includes a plain-language explanation, a simple analogy, a code sample, notes about common concepts, a small task, and an expected result.
- **Guided playground:** Switch between HTML, CSS, and JavaScript. Each language includes three ready-to-run examples, an explanation of what to try, a reset option, and a live preview. CSS examples are placed in a sample page so students can immediately see the styling; JavaScript examples run in the preview frame.
- **Updated quizzes:** Separate HTML, CSS, and JavaScript knowledge checks. Students receive explanations after submitting. The latest score for each subject replaces its previous result, so the quiz list and profile stay current after retakes.
- **Interactive profile:** Set a display name, view lesson and quiz statistics, track overall progress, earn milestone achievements, see a suggested next step, download a JSON progress report, or reset local progress.
- **Responsive design:** Uses the requested palette: `#0B1026`, `#1F4BFF`, `#00E5FF`, and `#F5F6FA`.

## How students can use it

1. Open `index.html` in a modern browser.
2. Select **Lessons** and choose HTML, CSS, or JavaScript.
3. Read the explanation and analogy, inspect the example, and try the task in the Playground.
4. Mark the lesson complete when finished.
5. Open **Quizzes**, answer all questions in a language quiz, and submit to save the latest score.
6. Visit **Profile** to review progress and achievements.

## Project files

```text
CODECODE/
├── index.html
├── app.html                 # Step-by-step learning modules
├── playground.html          # Guided HTML/CSS/JavaScript editor and preview
├── quizzes.html             # Three subject quizzes
├── profile.html             # Progress dashboard and achievements
├── styles.css               # Shared responsive design system
├── script.js                # Lessons, editor, quizzes, and progress logic
├── user-story.md
├── acceptance-criteria.md
├── ai-log.md
└── README.md
```

## Progress and privacy

This is a static frontend project. Lesson completion, latest quiz scores, and the learner display name are saved with browser `localStorage` on the current device/browser. Progress is not synchronized across devices and there is no server account or password system. The playground preview runs in a sandboxed iframe; it is intended for learning examples, not production hosting.

## Run locally

Keep all HTML files, `styles.css`, and `script.js` in the same folder, then open `index.html`. No package installation or build step is required.

## Team

- **Amare Stoudemire J. Mapalo** — CODECODE App Developer
- **Clint Stohj Fuentes** — CODECODE App Developer

## Testing note

Check the site in a current desktop and mobile browser. Verify that all three lesson paths load, examples run in the playground, quiz retakes update the latest saved score, and profile data remains after refreshing the same browser. Browser testing is still required before presenting this as a fully tested release.
