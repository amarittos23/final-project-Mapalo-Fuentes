# Acceptance Criteria
<!--
Acceptance criteria tell you when a user story is DONE. Each one must be testable: pass or fail.
Write 2–3 criteria for every user story using this format:

Given [a situation], when [the user does something], then [this should happen].

Tips:
- Number them under their story: AC1.1 and AC1.2 belong to US1.
- Describe what the user SEES, not how the code works.
- Include at least one "what if it goes wrong" case per story (empty input, no results).
- Avoid vague words like "fast," "nice," or "easy." Could a classmate test it and agree it passed?

Example:
## US1: View today's menu
- AC1.1: Given I open the App page, when it loads, then I see each dish with its name, photo and price.
- AC1.2: Given no dishes are added yet, when I open the menu, then I see "No dishes today yet."

AC - Acceptance Criteria
-->

### Feature: Homepage and App Page
US1: View Homepage
- AC1.1: Given I open the website, when the homepage loads, then I see the CodeCode introduction and featured learning content.
- AC1.2: Given no featured content is available, when I open the homepage, then I see a message indicating that no featured content is available.

US2: Navigate Website Sections
- AC2.1: Given I am on the homepage, when I click a navigation link, then I am directed to the selected page.
- AC2.2: Given I click an unavailable page link, when the page cannot be opened, then I see an error message.

US3: Select Learning Modules
- AC3.1: Given I am on the App page, when I select HTML, CSS, or JavaScript, then I see the corresponding learning modules.
- AC3.2: Given a selected language has no available lessons, when I open its module, then I see a message stating that no lessons are available.

### Feature: Code Playground, Quizzes and Challenges
US4: Write and Edit Code
- AC4.1: Given I open the Code Playground, when I enter code in the editor, then the entered code appears in the editor.
- AC4.2: Given the code editor is empty, when I attempt to run the code, then I see a message asking me to enter code.

US5: Run Code
- AC5.1: Given I have entered valid code, when I click the Run button, then I see the corresponding output.
- AC5.2: Given I enter code with an error, when I click the Run button, then I see an error message.

US6: Answer Quizzes and Challenges
- AC6.1: Given I open the Quiz and Challenges page, when I select an activity, then I see its questions or coding tasks.
- AC6.2: Given no activities are available, when I open the page, then I see a message stating that no quizzes or challenges are available.

### Feature: Student Profile
US7: View Completed Lessons
- AC7.1: Given I open my student profile, when I view the completed lessons section, then I see the lessons I have finished.
- AC7.2: Given I have not completed any lessons, when I open the section, then I see a message stating that no lessons have been completed.

US8: View Quiz Scores
- AC8.1: Given I have answered quizzes, when I open my profile, then I see my recorded quiz scores.
- AC8.2: Given I have no recorded quiz scores, when I open the quiz scores section, then I see a message stating that no quiz scores are available.

US9: View Earned Badges
- AC9.1: Given I have earned badges, when I open my profile, then I see my earned badges.
- AC9.2: Given I have not earned any badges, when I open the badges section, then I see a message stating that no badges have been earned.

