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