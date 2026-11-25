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

if (runCodeBtn && codeEditor && playgroundMsg) {
  runCodeBtn.addEventListener('click', function () {
    const code = codeEditor.value.trim();
    if (code === '') {
      playgroundMsg.textContent = 'Please enter some code before running.';
      playgroundMsg.className = 'msg-error';
      return;
    }
    playgroundMsg.textContent = 'Code received! Ready to run.';
    playgroundMsg.className = 'msg-success';
  });
}

if (resetCodeBtn && codeEditor && playgroundMsg) {
  resetCodeBtn.addEventListener('click', function () {
    codeEditor.value = '';
    playgroundMsg.textContent = 'Ready for execution.';
    playgroundMsg.className = '';
  });
}