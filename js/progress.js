/* progress.js — localStorage persistence for The Autoantibody Lab */

const STORAGE_KEY = 'rheum-lab-progress';

function defaultProgress() {
  return {
    quiz: {
      ana:  { all: null, vignettes: null, tf: null },
      anca: { all: null, vignettes: null, tf: null }
    },
    cases: {},
    lastVisited: null
  };
}

/** Read from localStorage, returning default structure on any failure. */
function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw);
    // Ensure top-level keys exist even if stored data is partial
    const base = defaultProgress();
    return {
      quiz: { ...base.quiz, ...parsed.quiz },
      cases: { ...base.cases, ...parsed.cases },
      lastVisited: parsed.lastVisited ?? base.lastVisited
    };
  } catch {
    return defaultProgress();
  }
}

/** Write to localStorage, silently failing if unavailable. */
function write(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable — silent fail
  }
}

/* ── Public API ─────────────────────────────────────────────── */

/** Returns the full progress object. */
export function loadProgress() {
  return read();
}

/** Saves the full progress object. */
export function saveProgress(data) {
  write(data);
}

/** Returns best quiz score for a module/mode combo, or null. */
export function getQuizBest(module, mode) {
  const data = read();
  return data.quiz[module]?.[mode] ?? null;
}

/** Saves quiz score only if it improves on the existing best (by percentage). */
export function saveQuizScore(module, mode, score, total) {
  const data = read();
  if (!data.quiz[module]) data.quiz[module] = {};
  const prev = data.quiz[module][mode];
  const newPct = total > 0 ? score / total : 0;
  const oldPct = prev && prev.total > 0 ? prev.score / prev.total : -1;
  if (newPct > oldPct) {
    data.quiz[module][mode] = { score, total };
  }
  write(data);
}

/** Returns case-specific state, or null if none stored. */
export function getCaseProgress(caseId) {
  const data = read();
  return data.cases[caseId] ?? null;
}

/** Saves / merges case-specific state. */
export function saveCaseProgress(caseId, state) {
  const data = read();
  data.cases[caseId] = { ...data.cases[caseId], ...state };
  write(data);
}

/** Returns aggregate progress for a module (for hub display). */
export function getModuleProgress(module) {
  const data = read();

  // Quiz summary
  const quizData = data.quiz[module] || {};
  const quizModes = Object.entries(quizData).filter(([, v]) => v !== null);
  const quizSummary = {};
  for (const [mode, result] of quizModes) {
    quizSummary[mode] = result;
  }

  // Case summary — count cases whose id starts with the module name
  const casesForModule = Object.entries(data.cases)
    .filter(([id]) => id.startsWith(module));
  const casesStarted  = casesForModule.filter(([, c]) => c.started).length;
  const casesComplete = casesForModule.filter(([, c]) => c.completed).length;

  return {
    quiz: quizSummary,
    cases: { started: casesStarted, completed: casesComplete }
  };
}

/** Saves last visited module/tab. */
export function saveLastVisited(module, tab) {
  const data = read();
  data.lastVisited = { module, tab };
  write(data);
}

/** Returns last visited { module, tab } or null. */
export function restoreLastVisited() {
  const data = read();
  return data.lastVisited;
}

/** Clears all progress. Caller is responsible for confirmation UI. */
export function resetProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // silent
  }
}
