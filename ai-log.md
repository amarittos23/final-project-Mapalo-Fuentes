# AI Log
<!--
This file is your record of how you worked with AI (Gemini, ChatGPT, or Claude).
Using AI is allowed. Hiding it is not. This log shows your instructor that YOU
reviewed, understood, and made decisions about your code.

WHEN to add an entry:
- Every time you use AI to plan, write, explain, or debug a part of your app.
- Add the entry right after that step works, BEFORE you commit. Don't write it all at the end.

HOW to write an entry:
- Copy the template below and fill it in. Newest entry at the bottom.
- Write in your own words. Short is fine, but be specific.
- "What I changed or rejected" is the most important part. Even small changes count:
  renaming a class, fixing a bug the AI made, simplifying code, or saying no to a suggestion.
- If you used the AI's code exactly as given, write why it was okay and what you checked.

TEMPLATE (copy from here):

## Entry [#]: [Date]
- **User story:** [US# and short title]
- **What I asked:** [Your prompt, or a short summary of it]
- **What the AI suggested:** [1–2 sentences summarizing the AI's answer]
- **What I changed or rejected, and why:** [Your decisions in your own words]
- **How I tested it:** [Which acceptance criteria you checked, and whether each passed]
- **What I learned:** [One new thing you now understand]

EXAMPLE:

## Entry 3: Nov 20, 2026
- **User story:** US1: View today's menu
- **What I asked:** "Show me how to display my menu array as cards on app.html."
- **What the AI suggested:** A forEach loop that builds the cards with innerHTML.
- **What I changed or rejected, and why:** Renamed `.item-card` to `.menu-card` to match
  my CSS. The AI forgot the empty menu case, so I asked for a hint and added a
  "No dishes today yet" message myself.
- **How I tested it:** AC1.1 passed (cards show name, photo, price). AC1.3 passed
  after my fix (empty message shows).
- **What I learned:** forEach runs the same code once for every item in an array.

Minimum of 5 meaningful AI logs.
-->

## Entry 1: [11/24/2026]
- **User story:** US1: As a student, I want to view the homepage to see the introduction and featured content.
- **What I asked:** I asked to build my first homepage step-by-step.
- **What the AI suggested:** Breaking the work down to focus on one user story at a time (US1 first) rather than building US1 through US3 all at once.
- **What I changed or rejected, and why:** I changed the font size of CodeCode to CODECODE to make the website title more noticeable and visually appealing.
- **How I tested it:** I opened the homepage in my browser to check if the layout, title, introduction, and featured content were displayed correctly. I also checked if the design was clear and easy to navigate.
- **What I learned:** I learned how to create a homepage step-by-step, organize website content, and apply basic design changes using HTML and CSS. I also learned the importance of focusing on one user story at a time to make development easier and more organized.

## Entry 2: [11/25/2026]
- **User story:** US2: As a student, I want to navigate through the website sections to access different pages.
- **What I asked:** I shared US2 and its acceptance criteria (AC2.1 and AC2.2) and asked for a step-by-step plan without code first, then requested each step one at a time.
- **What the AI suggested:** A 5-step plan: (1) add a semantic `<nav>` bar in `index.html`, (2) create `app.html` for working page navigation, (3) add a hidden `<div id="nav-error" role="alert">` banner, (4) use `data-available="false"` and a JavaScript click listener with `event.preventDefault()` to show an error message for unbuilt pages, and (5) style the navbar with Flexbox in `styles.css`.
- **What I changed or rejected, and why:** I adjusted the font size in `styles.css` to improve readability on my screen.
- **How I tested it:** Opened `index.html` in the browser, clicked "Lessons" to confirm it navigated to `app.html` (AC2.1), and clicked unbuilt links like "Playground" and "Quizzes" to confirm the error banner appeared instead of a broken page (AC2.2). Also checked mobile screen wrapping.
- **What I learned:** How to use `data-*` attributes and `event.preventDefault()` in JavaScript to intercept clicks on unavailable links, and how to use `role="alert"` and `hidden` for accessible error messages.

## Entry 3: [11/25/2026]
- **User story:** US3: As a student, I want to select HTML, CSS, or JavaScript modules to access their lessons.
- **What I asked:** I asked for a step-by-step plan and code to let students switch between HTML, CSS, and JavaScript modules on the App page.
- **What the AI suggested:** Adding language buttons in app.html, storing lessons in a JavaScript object in script.js, displaying lesson cards or an empty-state message when a module has no lessons, and styling the active button and cards in styles.css.
- **What I changed or rejected, and why:** I kept the suggested code and tested the empty JavaScript module first to make sure the fallback message worked before styling.
- **How I tested it:** I opened app.html in my browser and clicked HTML and CSS to verify their lesson cards loaded properly. I also clicked JavaScript to confirm the "No lessons are available for this module yet." message appeared.
- **What I learned:** I learned how to organize lesson data in a JavaScript object, read custom data-lang attributes using dataset, highlight the active button, and handle empty lesson lists cleanly.

## Entry 4: [11/25/2026]
- **User story:** US1: As a student, I want to write and edit code to practice programming.
- **What I asked:** I asked for a step-by-step plan and code to create the Code Playground page where students can write code and see a warning message if they try to run empty code.
- **What the AI suggested:** Creating playground.html with a textarea code editor, Run Code and Reset buttons, and an Output card, enabling the Playground link in the navigation bar, checking for empty input in script.js using .trim(), and styling the dark code editor and cards in styles.css.
- **What I changed or rejected, and why:** Kept the suggested layout and added a Reset button to clear the editor easily while testing.
- **How I tested it:** I opened playground.html, typed HTML code into the editor to verify it appeared properly (AC4.1), and clicked Run Code while the editor was empty to verify the warning message appeared (AC4.2). I also tested the Reset button and checked the layout on mobile width.
- **What I learned:** I learned how to build an accessible code editor using textarea, validate empty user input in JavaScript with .trim(), and style a dark code editor box with CSS.

## Entry 5: [11/25/2026]
- **User story:** US5: As a student, I want to run my code to view its output.
- **What I asked:** I shared US5 and its acceptance criteria (AC5.1 and AC5.2) and asked for a step-by-step plan and code to run the student's code and show errors when the code is broken.
- **What the AI suggested:** Adding a sandboxed iframe in playground.html, writing the student's code to iframe.srcdoc in script.js, catching JavaScript runtime errors with window.onerror and postMessage to display an error message, clearing the iframe on Reset, and styling #code-output in styles.css.
- **What I changed or rejected, and why:** Kept the suggested implementation and tested both valid HTML/CSS output and broken JavaScript code.
- **How I tested it:** I opened playground.html, clicked Run Code with valid HTML to verify the live output rendered inside the preview frame (AC5.1), and tested broken JavaScript like `<script>console.log(x);</script>` to confirm the red error message appeared (AC5.2).
- **What I learned:** I learned how to safely preview user HTML, CSS, and JavaScript using a sandboxed iframe with srcdoc, and how to pass error messages from an iframe back to the parent page using window.onerror and postMessage.

## Entry 6: [11/25/2026]
- **User story:** US3 (AC6.1–AC6.2): As a student, I want to answer quizzes and coding challenges to test my knowledge.
- **What I asked:** I shared the user story and acceptance criteria (AC6.1 and AC6.2), asked for a step-by-step plan and code to build the Quizzes and Challenges page, and later asked to hide an empty red alert box and expand the quiz to 10 multiple-choice questions.
- **What the AI suggested:** Creating quizzes.html with the shared navigation bar, removing data-available="false" from the Quizzes links in existing pages, adding an activitiesData array in script.js with a 10-question HTML Basics Quiz and a CSS Color Challenge, dynamically rendering each question with individual feedback, hiding #nav-error when empty using CSS :empty, and styling the quiz cards and question blocks in styles.css.
- **What I changed or rejected, and why:** I requested upgrading the quiz from 1 question to 10 questions so the assessment felt more complete, added #nav-error:empty { display: none; } to remove an empty red box on page load, and fixed a closing brace placement in script.js so renderActivities() ran outside openActivity().
- **How I tested it:** I opened quizzes.html, clicked the HTML Basics Quiz to verify all 10 questions displayed and checked answers individually, tested the CSS Color Challenge input and feedback (AC6.1), and temporarily emptied activitiesData to confirm the "No quizzes or challenges are available yet." message appeared (AC6.2).
- **What I learned:** I learned how to loop through an array of multiple quiz questions with independent feedback elements, hide empty alert containers using the CSS :empty pseudo-class, and debug JavaScript scope issues caused by misplaced closing braces.

## Entry 7: [11/25/2026]
- **User story:** Student Profile US1 (AC7.1–AC7.2): As a student, I want to view my completed lessons to track my learning progress.
- **What I asked:** I shared the user story and acceptance criteria (AC7.1 and AC7.2) and asked for a step-by-step plan and code to build the Student Profile completed lessons section.
- **What the AI suggested:** Creating profile.html with the shared navigation bar, removing data-available="false" from the Profile links in all existing pages, adding a Completed Lessons section in profile.html, using localStorage in script.js to save completed lessons when a student clicks "Mark as Completed" on app.html, rendering either the completed lesson list or the empty-state message on profile.html, and styling the profile card and completed badges in styles.css.
- **What I changed or rejected, and why:** Kept the suggested localStorage design and consolidated script.js cleanly so the "Mark as Completed" button renders directly inside each lesson card on app.html without duplicate code blocks.
- **How I tested it:** I first opened profile.html with empty localStorage to verify the "You have not completed any lessons yet." message appeared (AC7.2), then went to app.html, clicked "Mark as Completed" on HTML Basics, and returned to profile.html to confirm "✓ HTML Basics" appeared in the Completed Lessons section (AC7.1).
- **What I learned:** I learned how to persist user progress across multiple HTML pages using localStorage with JSON.stringify and JSON.parse, and how to update button states with disabled attributes once a task is completed.

## Entry 8: [11/25/2026]
- **User story:** Student Profile US2 (AC8.1–AC8.2): As a student, I want to view my quiz scores to check my performance.
- **What I asked:** I shared the user story and acceptance criteria (AC8.1 and AC8.2) and asked for a step-by-step plan and code to record and display quiz scores on the Student Profile page.
- **What the AI suggested:** Adding a Quiz Scores section in profile.html, updating openActivity() in script.js to track the student's selected options and add a "Submit Quiz & Save Score" button, saving scores to localStorage via saveQuizScore(), rendering either the recorded scores list or the empty-state message on profile.html via renderQuizScores(), and styling the score badges in styles.css.
- **What I changed or rejected, and why:** Kept the suggested localStorage implementation so quiz scores persist across pages and update cleanly when retaking a quiz.
- **How I tested it:** I first opened profile.html with no recorded quiz scores to confirm "No quiz scores are available yet." appeared (AC8.2), then went to quizzes.html, completed the 10-question HTML Basics Quiz, clicked "Submit Quiz & Save Score", and returned to profile.html to verify the recorded score appeared in the Quiz Scores section (AC8.1).
- **What I learned:** I learned how to track user selections across multiple quiz questions in an object, calculate a final score on submission, and store structured score objects in localStorage.

## Entry 9: [11/25/2026]
- **User story:** Student Profile US3 (AC9.1–AC9.2): As a student, I want to view my earned badges to track my achievements.
- **What I asked:** I shared the user story and acceptance criteria (AC9.1 and AC9.2) and asked for a step-by-step plan and code to build the Earned Badges section on the Student Profile page.
- **What the AI suggested:** Adding an Earned Badges section in profile.html, writing getEarnedBadges() in script.js to check localStorage progress for milestones (First Lesson Completed, Quiz Taker, and HTML Master), rendering either the badge list or the empty-state message via renderBadges(), and styling the gold badge cards in styles.css.
- **What I changed or rejected, and why:** Kept the suggested milestone-based badge logic and verified that the complete script.js file had no truncated functions.
- **How I tested it:** I cleared localStorage and opened profile.html to verify "No badges have been earned yet." appeared (AC9.2), then completed a lesson and submitted a quiz before reopening profile.html to confirm the earned badges appeared in the Earned Badges section (AC9.1).
- **What I learned:** I learned how to derive dynamic achievement badges from existing localStorage records without needing separate storage keys, and how to use Array.prototype.some() to check if any quiz score meets a threshold.

## Entry 10: Nov 27, 2026
- **User story:** US1 — Explore the learning homepage; US2 — Move between learning areas; US8 — Choose a comfortable display mode.
- **What I asked:** I asked ChatGPT to make CODECODE more interactive and visually engaging using `#0B1026`, `#1F4BFF`, `#00E5FF`, and `#F5F6FA`, and to revise the user stories, acceptance criteria, AI log, and README to reflect the improvements.
- **What the AI suggested:** A shared visual design system, a stronger homepage with direct links to the main learning areas, responsive cards and controls, and a light/dark display-mode preference saved in the browser.
- **What I changed or rejected, and why:** The updated project keeps the original CODECODE name, pages, lesson content, quiz, challenge, profile, and browser-based progress approach. I added a new display-mode story and matching test criteria instead of claiming that features such as accounts or cross-device syncing exist.
- **How I tested it:** The files have been updated, but browser testing has not yet been completed. Before marking this entry as finished, open `index.html`, test the navigation and theme toggle on each page, reload to check theme persistence, and check the layout at desktop and mobile widths. Record the actual pass/fail results here after testing.
- **What I learned:** A shared CSS variable system makes it easier to keep multiple pages visually consistent. Browser `localStorage` can remember a theme choice between pages, but it does not provide account-based or cross-device synchronization.

---

## Entry 11 — Expanded learning modules and interactive student experience

**Date:** November 28, 2026  
**Request:** Expand the HTML, CSS, and JavaScript modules into complete beginner-friendly step-by-step learning paths; improve playground instructions and examples; add/update quizzes for all three subjects and ensure retakes update the latest result; and make the profile and overall website more interactive.

**Changes prepared:**
- Added eight structured introductory lessons for each of HTML, CSS, and JavaScript (24 lessons total). Each lesson includes an explanation, analogy, sample code, concept note, practice task, expected result, and completion tracking.
- Rebuilt the playground with three language modes and three guided examples per language, plain-language instructions, run/reset/clear controls, and a sandboxed preview.
- Added six-question knowledge checks for each language. Submission requires all questions to be answered, displays feedback and explanations, and saves one latest result per subject so retakes replace the previous result.
- Reworked the profile into a learner dashboard with a display name, statistics, progress bar, completed lessons, latest quiz results, milestone achievements, next-step suggestion, JSON export, and progress reset confirmation.
- Replaced the shared stylesheet with a responsive interface using the requested navy, electric blue, cyan, and soft-white palette.

**Review and limitations:** This is a frontend-only learning project. Progress uses local browser storage and does not sync between devices. The code changes require manual browser testing across desktop/mobile sizes and all three browser preview modes before they can be described as fully tested. AI-generated code and lesson explanations should be reviewed by the project team and instructor for curriculum fit and correctness.
