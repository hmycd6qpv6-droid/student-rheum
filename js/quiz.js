import { saveQuizScore } from './progress.js';

export const QS = {};

function getState(moduleName) {
  return QS[moduleName] || null;
}

function getModeQuestions(questions, mode) {
  if (mode === 'all') return [...questions];
  return questions.filter(q => mode === 'vignette' ? q.type === 'vignette' : q.type === 'tf');
}

function syncModeButtons(moduleName, mode) {
  const container = document.getElementById(moduleName + 'QuizContainer');
  const section = container?.closest('.section');
  if (!section) return;
  section.querySelectorAll('.quiz-mode-btn').forEach(button => {
    button.classList.toggle('active', button.dataset.mode === mode);
  });
}

export function initQuiz(moduleName, questions) {
  if (getState(moduleName)) return;

  QS[moduleName] = {
    cur: 0,
    score: 0,
    ans: [],
    mode: 'all',
    qs: [...questions],
    all: questions
  };

  resetQuiz(moduleName);
}

export function setQuizMode(moduleName, mode) {
  const state = getState(moduleName);
  if (!state) return;
  state.mode = mode;
  syncModeButtons(moduleName, mode);
  state.qs = getModeQuestions(state.all, mode);
  resetQuiz(moduleName);
}

export function resetQuiz(moduleName) {
  const state = getState(moduleName);
  if (!state) return;

  state.cur = 0;
  state.score = 0;
  state.ans = new Array(state.qs.length).fill(null);

  const scoreEl = document.getElementById(moduleName + 'QuizScore');
  const totalEl = document.getElementById(moduleName + 'QuizTotal');
  if (scoreEl) scoreEl.textContent = '0';
  if (totalEl) totalEl.textContent = '0';

  renderQuiz(moduleName);
}

export function renderQuiz(moduleName) {
  const state = getState(moduleName);
  if (!state || !state.qs.length) return;

  const progressEl = document.getElementById(moduleName + 'QuizProgress');
  const containerEl = document.getElementById(moduleName + 'QuizContainer');
  const prevBtn = document.getElementById(moduleName + 'PrevBtn');
  const nextBtn = document.getElementById(moduleName + 'NextBtn');

  if (!progressEl || !containerEl || !prevBtn || !nextBtn) return;

  progressEl.innerHTML = state.qs.map((_, index) => {
    let className = '';
    if (index === state.cur) className = 'current';
    if (state.ans[index] !== null) className = state.ans[index] === true ? 'correct' : 'incorrect';
    return `<div class="progress-dot ${className}" onclick="jumpTo('${moduleName}',${index})"></div>`;
  }).join('');

  const question = state.qs[state.cur];
  const typeLabel = question.type === 'vignette'
    ? '<span class="quiz-q-type type-vignette">Vignette</span>'
    : '<span class="quiz-q-type type-tf">True / False</span>';
  const isAnswered = state.ans[state.cur] !== null;
  const optionsHtml = question.opts.map((option, index) => {
    let className = 'quiz-option';
    if (isAnswered) {
      className += ' answered';
      if (index === question.correct) className += ' correct';
      else if (state.ans[state.cur] !== true && index === state.ans[state.cur]) className += ' incorrect';
    }
    return `<button class="${className}" onclick="answerQ('${moduleName}',${index})" ${isAnswered ? 'disabled' : ''}><span class="opt-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`;
  }).join('');

  containerEl.innerHTML = `<div class="quiz-card"><div class="quiz-q-number">Question ${state.cur + 1} of ${state.qs.length} ${typeLabel}</div><div class="quiz-question">${question.q}</div><div class="quiz-options">${optionsHtml}</div><div class="quiz-explanation ${isAnswered ? 'visible' : ''}"><strong>Explanation:</strong> ${question.explanation}</div></div>`;

  prevBtn.disabled = state.cur === 0;
  nextBtn.disabled = state.cur === state.qs.length - 1;
  nextBtn.textContent = state.cur === state.qs.length - 1 ? 'Done' : 'Next ▸';
}

export function answerQ(moduleName, index) {
  const state = getState(moduleName);
  if (!state || state.ans[state.cur] !== null) return;

  const isCorrect = index === state.qs[state.cur].correct;
  state.ans[state.cur] = isCorrect ? true : index;
  if (isCorrect) state.score++;

  const answeredCount = state.ans.filter(answer => answer !== null).length;
  const scoreEl = document.getElementById(moduleName + 'QuizScore');
  const totalEl = document.getElementById(moduleName + 'QuizTotal');
  if (scoreEl) scoreEl.textContent = state.score;
  if (totalEl) totalEl.textContent = answeredCount;

  if (answeredCount === state.qs.length) {
    saveQuizScore(moduleName, state.mode, state.score, state.qs.length);
  }

  renderQuiz(moduleName);
}

export function navQuiz(moduleName, delta) {
  const state = getState(moduleName);
  if (!state) return;
  state.cur = Math.max(0, Math.min(state.qs.length - 1, state.cur + delta));
  renderQuiz(moduleName);
}

export function jumpTo(moduleName, index) {
  const state = getState(moduleName);
  if (!state) return;
  state.cur = index;
  renderQuiz(moduleName);
}
