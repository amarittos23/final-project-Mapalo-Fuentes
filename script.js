const unavailableLinks = document.querySelectorAll('nav a[data-available="false"]');
const navError = document.getElementById('nav-error');

unavailableLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const pageName = link.textContent;
    navError.textContent = `Sorry, the ${pageName} page is not available yet.`;
    navError.hidden = false;
  });
});

const lessonsData = {
  html: [
    { title: 'HTML Basics', description: 'Learn tags, headings, and paragraphs.' },
    { title: 'Links and Images', description: 'Connect pages and display pictures.' }
  ],
  css: [
    { title: 'CSS Selectors', description: 'Style elements using classes and IDs.' },
    { title: 'Flexbox Layout', description: 'Align items for desktop and mobile.' }
  ],
  javascript: []
};

const lessonsContainer = document.getElementById('lessons-container');

function getCompletedLessons() {
  const saved = localStorage.getItem('codecode_completed_lessons');
  return saved ? JSON.parse(saved) : [];
}

function saveCompletedLesson(title) {
  const completed = getCompletedLessons();
  if (title && !completed.includes(title)) {
    completed.push(title);
    localStorage.setItem('codecode_completed_lessons', JSON.stringify(completed));
  }
}

function showModules(language) {
  if (!lessonsContainer) return;
  const lessons = lessonsData[language] || [];
  lessonsContainer.innerHTML = '';

  if (lessons.length === 0) {
    const emptyMsg = document.createElement('p');
    emptyMsg.textContent = 'No lessons are available for this module yet.';
    lessonsContainer.appendChild(emptyMsg);
    return;
  }

  lessons.forEach(function (lesson) {
    const card = document.createElement('article');
    card.className = 'lesson-card';
    card.innerHTML = `<h2>${lesson.title}</h2><p>${lesson.description}</p>`;

    const completeBtn = document.createElement('button');
    completeBtn.type = 'button';
    completeBtn.className = 'btn-secondary complete-btn';
    const alreadyDone = getCompletedLessons().includes(lesson.title);
    completeBtn.textContent = alreadyDone ? 'Completed ✓' : 'Mark as Completed';
    completeBtn.disabled = alreadyDone;

    completeBtn.addEventListener('click', function () {
      saveCompletedLesson(lesson.title);
      completeBtn.textContent = 'Completed ✓';
      completeBtn.disabled = true;
    });

    card.appendChild(completeBtn);
    lessonsContainer.appendChild(card);
  });
}

const moduleButtons = document.querySelectorAll('.module-btn');

moduleButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    moduleButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    const selectedLang = button.dataset.lang;
    showModules(selectedLang);
  });
});

const codeEditor = document.getElementById('code-editor');
const runCodeBtn = document.getElementById('run-code-btn');
const resetCodeBtn = document.getElementById('reset-code-btn');
const playgroundMsg = document.getElementById('playground-message');
const codeOutput = document.getElementById('code-output');

if (runCodeBtn && codeEditor && playgroundMsg && codeOutput) {
  runCodeBtn.addEventListener('click', function () {
    const code = codeEditor.value.trim();
    if (code === '') {
      playgroundMsg.textContent = 'Please enter some code before running.';
      playgroundMsg.className = 'msg-error';
      codeOutput.srcdoc = '';
      return;
    }
    playgroundMsg.textContent = 'Output rendered below.';
    playgroundMsg.className = 'msg-success';
    const errorCatcher = `<script>window.onerror = function(msg) { parent.postMessage({ type: 'playground-error', message: msg }, '*'); };<\/script>`;
    codeOutput.srcdoc = errorCatcher + code;
  });
}

window.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'playground-error' && playgroundMsg) {
    playgroundMsg.textContent = 'Code Error: ' + event.data.message;
    playgroundMsg.className = 'msg-error';
  }
});

if (resetCodeBtn && codeEditor && playgroundMsg) {
  resetCodeBtn.addEventListener('click', function () {
    codeEditor.value = '';
    playgroundMsg.textContent = 'Ready for execution.';
    playgroundMsg.className = '';
    if (codeOutput) {
      codeOutput.srcdoc = '';
    }
  });
}

const activitiesData = [
  {
    id: 'html-quiz',
    type: 'Quiz',
    title: 'HTML Basics Quiz',
    questions: [
      {
        prompt: '1. Which HTML tag is used to create the largest main heading on a page?',
        options: ['<heading>', '<h6>', '<h1>', '<head>'],
        answer: '<h1>'
      },
      {
        prompt: '2. Which attribute is required on an <img> tag to provide alternative text?',
        options: ['title', 'alt', 'src', 'href'],
        answer: 'alt'
      },
      {
        prompt: '3. Which HTML element creates a numbered list?',
        options: ['<ul>', '<li>', '<ol>', '<dl>'],
        answer: '<ol>'
      },
      {
        prompt: '4. Which HTML tag is used to create a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<nav>'],
        answer: '<a>'
      },
      {
        prompt: '5. Which semantic tag represents the main navigation links of a page?',
        options: ['<header>', '<section>', '<nav>', '<aside>'],
        answer: '<nav>'
      },
      {
        prompt: '6. Where does the <title> element belong in an HTML document?',
        options: ['Inside <body>', 'Inside <head>', 'Inside <footer>', 'Inside <main>'],
        answer: 'Inside <head>'
      },
      {
        prompt: '7. Which tag creates a line break without starting a new paragraph?',
        options: ['<lb>', '<break>', '<br>', '<hr>'],
        answer: '<br>'
      },
      {
        prompt: '8. Which attribute uniquely identifies a single HTML element on a page?',
        options: ['class', 'name', 'id', 'type'],
        answer: 'id'
      },
      {
        prompt: '9. Which HTML tag is used to define a paragraph of text?',
        options: ['<para>', '<text>', '<p>', '<span>'],
        answer: '<p>'
      },
      {
        prompt: '10. What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyperlinks and Text Management Language',
          'Home Tool Markup Language'
        ],
        answer: 'Hyper Text Markup Language'
      }
    ]
  },
  {
    id: 'css-challenge',
    type: 'Coding Challenge',
    title: 'CSS Color Challenge',
    question: 'Write a CSS rule that sets the text color of all <p> elements to blue.',
    placeholder: 'Example: p { color: blue; }',
    expectedSnippet: 'color: blue'
  }
];

function getQuizScores() {
  const saved = localStorage.getItem('codecode_quiz_scores');
  return saved ? JSON.parse(saved) : [];
}

function saveQuizScore(quizTitle, score, total) {
  const scores = getQuizScores();
  const existingIndex = scores.findIndex(function (item) {
    return item.title === quizTitle;
  });
  const entry = { title: quizTitle, score: score, total: total };

  if (existingIndex !== -1) {
    scores[existingIndex] = entry;
  } else {
    scores.push(entry);
  }
  localStorage.setItem('codecode_quiz_scores', JSON.stringify(scores));
}

const activityList = document.getElementById('activity-list');
const activityView = document.getElementById('activity-view');

function renderActivities() {
  if (!activityList || !activityView) return;

  if (!activitiesData || activitiesData.length === 0) {
    activityList.innerHTML = '<p class="empty-state">No quizzes or challenges are available yet.</p>';
    activityView.style.display = 'none';
    return;
  }

  activityList.innerHTML = '';
  activitiesData.forEach(function (activity) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'activity-btn';
    btn.textContent = activity.type + ': ' + activity.title;
    btn.addEventListener('click', function () {
      openActivity(activity);
    });
    activityList.appendChild(btn);
  });
}

function openActivity(activity) {
  activityView.innerHTML = '';

  const heading = document.createElement('h2');
  heading.textContent = activity.title + ' (' + activity.type + ')';
  activityView.appendChild(heading);

  if (activity.type === 'Quiz') {
    const selectedAnswers = {};

    activity.questions.forEach(function (q, index) {
      const questionBlock = document.createElement('div');
      questionBlock.className = 'question-block';

      const prompt = document.createElement('p');
      prompt.textContent = q.prompt;
      questionBlock.appendChild(prompt);

      const feedback = document.createElement('div');
      feedback.className = 'question-feedback';
      feedback.setAttribute('role', 'alert');

      q.options.forEach(function (optionText) {
        const optionBtn = document.createElement('button');
        optionBtn.type = 'button';
        optionBtn.className = 'option-btn';
        optionBtn.textContent = optionText;
        optionBtn.addEventListener('click', function () {
          selectedAnswers[index] = optionText;
          if (optionText === q.answer) {
            feedback.textContent = 'Correct! Well done.';
            feedback.className = 'question-feedback msg-success';
          } else {
            feedback.textContent = 'Not quite. Try another option!';
            feedback.className = 'question-feedback msg-error';
          }
        });
        questionBlock.appendChild(optionBtn);
      });

      questionBlock.appendChild(feedback);
      activityView.appendChild(questionBlock);
    });

    const submitQuizBtn = document.createElement('button');
    submitQuizBtn.type = 'button';
    submitQuizBtn.className = 'btn-primary';
    submitQuizBtn.textContent = 'Submit Quiz & Save Score';

    const quizSummaryMsg = document.createElement('div');
    quizSummaryMsg.id = 'quiz-summary-msg';
    quizSummaryMsg.setAttribute('role', 'alert');

    submitQuizBtn.addEventListener('click', function () {
      let score = 0;
      activity.questions.forEach(function (q, index) {
        if (selectedAnswers[index] === q.answer) {
          score++;
        }
      });
      const total = activity.questions.length;
      saveQuizScore(activity.title, score, total);
      quizSummaryMsg.textContent = `Quiz submitted! Your score: ${score} / ${total} (Saved to Profile)`;
      quizSummaryMsg.className = 'msg-success';
    });

    activityView.appendChild(submitQuizBtn);
    activityView.appendChild(quizSummaryMsg);
  } else {
    const prompt = document.createElement('p');
    prompt.textContent = activity.question;

    const input = document.createElement('textarea');
    input.rows = 4;
    input.className = 'challenge-input';
    input.placeholder = activity.placeholder;

    const feedback = document.createElement('div');
    feedback.id = 'quiz-feedback';
    feedback.setAttribute('role', 'alert');

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.className = 'btn-primary';
    submitBtn.textContent = 'Submit Solution';
    submitBtn.addEventListener('click', function () {
      const userCode = input.value.trim().toLowerCase();
      if (userCode === '') {
        feedback.textContent = 'Please enter your code solution first.';
        feedback.className = 'msg-error';
      } else if (userCode.includes(activity.expectedSnippet)) {
        feedback.textContent = 'Great job! Your CSS rule looks right.';
        feedback.className = 'msg-success';
      } else {
        feedback.textContent = 'Keep trying! Make sure your rule sets p text color to blue.';
        feedback.className = 'msg-error';
      }
    });

    activityView.appendChild(prompt);
    activityView.appendChild(input);
    activityView.appendChild(submitBtn);
    activityView.appendChild(feedback);
  }
}

renderActivities();

const completedLessonsList = document.getElementById('completed-lessons-list');

function renderCompletedLessons() {
  if (!completedLessonsList) return;

  const completed = getCompletedLessons();

  if (completed.length === 0) {
    completedLessonsList.innerHTML = '<p class="empty-state">You have not completed any lessons yet.</p>';
    return;
  }

  const ul = document.createElement('ul');
  ul.className = 'completed-list';

  completed.forEach(function (lessonTitle) {
    const li = document.createElement('li');
    li.className = 'completed-item';
    li.textContent = '✓ ' + lessonTitle;
    ul.appendChild(li);
  });

  completedLessonsList.innerHTML = '';
  completedLessonsList.appendChild(ul);
}

renderCompletedLessons();

const quizScoresList = document.getElementById('quiz-scores-list');

function renderQuizScores() {
  if (!quizScoresList) return;

  const scores = getQuizScores();

  if (scores.length === 0) {
    quizScoresList.innerHTML = '<p class="empty-state">No quiz scores are available yet.</p>';
    return;
  }

  const ul = document.createElement('ul');
  ul.className = 'scores-list';

  scores.forEach(function (item) {
    const li = document.createElement('li');
    li.className = 'score-item';
    li.textContent = `${item.title}: ${item.score} / ${item.total}`;
    ul.appendChild(li);
  });

  quizScoresList.innerHTML = '';
  quizScoresList.appendChild(ul);
}

renderQuizScores();

function getEarnedBadges() {
  const badges = [];
  const completedLessons = getCompletedLessons();
  const quizScores = getQuizScores();

  if (completedLessons.length >= 1) {
    badges.push({
      icon: '🏅',
      title: 'First Lesson Completed',
      description: 'Finished your first CODECODE lesson.'
    });
  }

  if (quizScores.length >= 1) {
    badges.push({
      icon: '🎯',
      title: 'Quiz Taker',
      description: 'Submitted your first coding quiz.'
    });
  }

  const hasHighScore = quizScores.some(function (item) {
    return item.score >= 8;
  });

  if (hasHighScore) {
    badges.push({
      icon: '🏆',
      title: 'HTML Master',
      description: 'Scored 8 or higher on a quiz.'
    });
  }

  return badges;
}

const badgesList = document.getElementById('badges-list');

function renderBadges() {
  if (!badgesList) return;

  const badges = getEarnedBadges();

  if (badges.length === 0) {
    badgesList.innerHTML = '<p class="empty-state">No badges have been earned yet.</p>';
    return;
  }

  const ul = document.createElement('ul');
  ul.className = 'badges-list';

  badges.forEach(function (badge) {
    const li = document.createElement('li');
    li.className = 'badge-item';
    li.textContent = `${badge.icon} ${badge.title} — ${badge.description}`;
    ul.appendChild(li);
  });

  badgesList.innerHTML = '';
  badgesList.appendChild(ul);
}

renderBadges();

// Shared display-mode control. The site remains usable if localStorage is blocked.
(function setupThemeToggle() {
  const nav = document.querySelector('header nav');
  if (!nav) return;

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('codecode_theme'); } catch (error) {}
  if (savedTheme === 'light') document.body.classList.add('light-theme');

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.id = 'theme-toggle';
  toggle.setAttribute('aria-pressed', String(document.body.classList.contains('light-theme')));

  function updateLabel() {
    const isLight = document.body.classList.contains('light-theme');
    toggle.textContent = isLight ? '☾ Dark mode' : '☀ Light mode';
    toggle.setAttribute('aria-pressed', String(isLight));
    toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }

  toggle.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    try {
      localStorage.setItem('codecode_theme',
        document.body.classList.contains('light-theme') ? 'light' : 'dark');
    } catch (error) {}
    updateLabel();
  });

  nav.appendChild(toggle);
  updateLabel();
})();
