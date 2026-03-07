/* hub.js — Landing page logic for The Autoantibody Lab */
import { getModuleProgress } from './progress.js';

const QUIZ_TOTALS = { ana: 18, anca: 18, joints: 18 };
const CASE_TOTALS = { ana: 4, anca: 4, joints: 4 };

const MODULES = [
  {
    key: 'ana',
    accent: 'ana',
    title: 'ANA & ENA',
    sub: '+ Myositis Antibodies',
    desc: 'Antinuclear antibodies, extractable nuclear antigens, and myositis-specific/associated antibodies. IF patterns on HEp-2 cells, disease associations, and clinical pitfalls.',
    tabs: [
      { label: 'IF Patterns', tab: 'ana-patterns' },
      { label: 'Antibody Index', tab: 'ana-antibodies' },
      { label: 'Disease Map', tab: 'ana-diseases' },
      { label: 'Myth Busters', tab: 'ana-myths' },
      { label: 'Quiz', tab: 'ana-quiz' },
      { label: 'Cases', tab: 'ana-cases' },
      { label: 'Summary', tab: 'ana-summary' }
    ]
  },
  {
    key: 'anca',
    accent: 'anca',
    title: 'ANCA & Vasculitis',
    sub: 'Chapel Hill Classification',
    desc: 'Anti-neutrophil cytoplasmic antibodies and the ANCA-associated vasculitides — GPA, MPA, EGPA. IF patterns on ethanol-fixed neutrophils, antigen-specific assays, and clinical phenotypes.',
    tabs: [
      { label: 'IF Patterns', tab: 'anca-patterns' },
      { label: 'Antibody Index', tab: 'anca-antibodies' },
      { label: 'Disease Map', tab: 'anca-diseases' },
      { label: 'Myth Busters', tab: 'anca-myths' },
      { label: 'Quiz', tab: 'anca-quiz' },
      { label: 'Cases', tab: 'anca-cases' },
      { label: 'Summary', tab: 'anca-summary' }
    ]
  },
  {
    key: 'joints',
    accent: 'joints',
    title: 'Joints & Serology',
    sub: 'Patterns & Markers',
    desc: 'Joint distribution patterns, serological markers (RF, anti-CCP, HLA-B27), and crystal arthropathies. Pattern recognition for RA, SpA, PsA, gout, and more.',
    tabs: [
      { label: 'Joint Patterns', tab: 'joints-patterns' },
      { label: 'Marker Index', tab: 'joints-markers' },
      { label: 'Disease Map', tab: 'joints-diseases' },
      { label: 'Myth Busters', tab: 'joints-myths' },
      { label: 'Quiz', tab: 'joints-quiz' },
      { label: 'Cases', tab: 'joints-cases' },
      { label: 'Summary', tab: 'joints-summary' }
    ]
  }
];

function buildProgressHTML(mod) {
  const prog = getModuleProgress(mod.key);
  const quizTotal = QUIZ_TOTALS[mod.key];

  // Best overall quiz score (use 'all' mode as primary)
  const quizResult = prog.quiz.all;
  const quizScore = quizResult ? quizResult.score : 0;
  const quizAttempted = quizResult !== undefined && quizResult !== null;

  // Calculate progress percentage
  let pct = 0;
  if (quizAttempted && quizTotal > 0) {
    pct = Math.round((quizScore / quizTotal) * 100);
  }

  const quizLabel = quizAttempted
    ? `Quiz best: ${quizScore}/${quizTotal}`
    : 'Quiz: not attempted';

  const caseTotal = CASE_TOTALS[mod.key];
  const casesComplete = prog.cases.completed;
  const caseLabel = casesComplete > 0
    ? `Cases: ${casesComplete}/${caseTotal} complete`
    : 'Cases: not started';

  // Combined progress (quiz weight 60%, cases weight 40%)
  const casePct = caseTotal > 0 ? (casesComplete / caseTotal) * 100 : 0;
  const combinedPct = Math.round(pct * 0.6 + casePct * 0.4);

  return `
    <div class="progress-section">
      <div class="progress-stats">
        <span>${quizLabel}</span>
        <span>${caseLabel}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width:${combinedPct}%"></div>
      </div>
    </div>`;
}

function renderModuleCards() {
  const grid = document.getElementById('module-grid');
  if (!grid) return;

  grid.innerHTML = MODULES.map(mod => `
    <a href="module.html?module=${mod.key}" class="module-card" data-accent="${mod.accent}" data-module="${mod.key}">
      <div class="module-card-title">${mod.title}</div>
      <div class="module-card-sub">${mod.sub}</div>
      <div class="module-card-desc">${mod.desc}</div>
      ${buildProgressHTML(mod)}
      <span class="module-card-arrow">&rsaquo;</span>
    </a>
  `).join('');

  grid.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => {
      try {
        sessionStorage.setItem('rheum-lab-selected-module', card.dataset.module || 'ana');
      } catch {
        // Ignore storage failures and fall back to query params only.
      }
    });
  });
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderModuleCards();
});
