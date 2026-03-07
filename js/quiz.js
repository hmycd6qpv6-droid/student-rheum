import { anaQuizQ } from './data/ana-quiz.js';
import { ancaQuizQ } from './data/anca-quiz.js';
import { saveQuizScore } from './progress.js';

export const QS = {
  ana: { cur: 0, score: 0, ans: [], mode: 'all', qs: [...anaQuizQ], all: anaQuizQ },
  anca: { cur: 0, score: 0, ans: [], mode: 'all', qs: [...ancaQuizQ], all: ancaQuizQ }
};

export function setQuizMode(m, mode) {
  const s = QS[m];
  s.mode = mode;
  const p = document.getElementById(m + 'QuizContainer').closest('.section');
  p.querySelectorAll('.quiz-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  s.qs = mode === 'all' ? [...s.all] : s.all.filter(q => mode === 'vignette' ? q.type === 'vignette' : q.type === 'tf');
  resetQuiz(m);
}

export function resetQuiz(m) {
  const s = QS[m];
  s.cur = 0;
  s.score = 0;
  s.ans = new Array(s.qs.length).fill(null);
  document.getElementById(m + 'QuizScore').textContent = '0';
  document.getElementById(m + 'QuizTotal').textContent = '0';
  renderQuiz(m);
}

export function renderQuiz(m) {
  const s = QS[m];
  if (!s.qs.length) return;
  document.getElementById(m + 'QuizProgress').innerHTML = s.qs.map((_, i) => {
    let c = '';
    if (i === s.cur) c = 'current';
    if (s.ans[i] !== null) c = s.ans[i] === true ? 'correct' : 'incorrect';
    return `<div class="progress-dot ${c}" onclick="jumpTo('${m}',${i})"></div>`;
  }).join('');
  const q = s.qs[s.cur];
  const tl = q.type === 'vignette' ? '<span class="quiz-q-type type-vignette">Vignette</span>' : '<span class="quiz-q-type type-tf">True / False</span>';
  const ia = s.ans[s.cur] !== null;
  const oh = q.opts.map((o, i) => {
    let c = 'quiz-option';
    if (ia) {
      c += ' answered';
      if (i === q.correct) c += ' correct';
      else if (s.ans[s.cur] !== true && i === s.ans[s.cur]) c += ' incorrect';
    }
    return `<button class="${c}" onclick="answerQ('${m}',${i})" ${ia ? 'disabled' : ''}><span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${o}</span></button>`;
  }).join('');
  document.getElementById(m + 'QuizContainer').innerHTML = `<div class="quiz-card"><div class="quiz-q-number">Question ${s.cur + 1} of ${s.qs.length} ${tl}</div><div class="quiz-question">${q.q}</div><div class="quiz-options">${oh}</div><div class="quiz-explanation ${ia ? 'visible' : ''}"><strong>Explanation:</strong> ${q.explanation}</div></div>`;
  document.getElementById(m + 'PrevBtn').disabled = s.cur === 0;
  const nb = document.getElementById(m + 'NextBtn');
  nb.disabled = s.cur === s.qs.length - 1;
  nb.textContent = s.cur === s.qs.length - 1 ? 'Done' : 'Next \u25b8';
}

export function answerQ(m, i) {
  const s = QS[m];
  if (s.ans[s.cur] !== null) return;
  const ok = i === s.qs[s.cur].correct;
  s.ans[s.cur] = ok ? true : i;
  if (ok) s.score++;
  const t = s.ans.filter(a => a !== null).length;
  document.getElementById(m + 'QuizScore').textContent = s.score;
  document.getElementById(m + 'QuizTotal').textContent = t;
  // Save best score when all questions answered
  if (t === s.qs.length) {
    saveQuizScore(m, s.mode, s.score, s.qs.length);
  }
  renderQuiz(m);
}

export function navQuiz(m, d) {
  const s = QS[m];
  s.cur = Math.max(0, Math.min(s.qs.length - 1, s.cur + d));
  renderQuiz(m);
}

export function jumpTo(m, i) {
  QS[m].cur = i;
  renderQuiz(m);
}
