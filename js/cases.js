/* cases.js — Branching clinical case engine for The Autoantibody Lab
   Node types: presentation, reflect, decision, conclusion.
   Authoring rules: docs/case-authoring.md */

import { getCaseProgress, saveCaseProgress } from './progress.js';
import { curriculum, curriculumGroup } from './data/curriculum.js';

/* ── Helpers ────────────────────────────────────────────────── */

function getNode(caseData, nodeId) {
  return caseData.nodes.find(n => n.id === nodeId);
}

function difficultyColor(d) {
  if (d === 'beginner') return 'var(--fitc-green)';
  if (d === 'intermediate') return 'var(--amber-warn)';
  return 'var(--rhodamine-red)';
}

function difficultyBg(d) {
  if (d === 'beginner') return 'rgba(0,103,71,0.12)';
  if (d === 'intermediate') return 'rgba(178,95,0,0.12)';
  return 'rgba(183,28,28,0.12)';
}

function difficultyBadge(d) {
  return `<span class="case-difficulty" style="color:${difficultyColor(d)};background:${difficultyBg(d)};border:1px solid ${difficultyColor(d)}">${d}</span>`;
}

const RATINGS = {
  best:   { label: 'Best choice', cls: 'case-rating-best' },
  good:   { label: 'Reasonable, but not the best', cls: 'case-rating-good' },
  poor:   { label: 'Not quite', cls: 'case-rating-poor' },
  unsafe: { label: 'Unsafe: risk of harm', cls: 'case-rating-unsafe' }
};

// Older data marks the best option by putting it first.
function ratingOf(node, i) {
  const opt = node.options[i];
  if (opt.rating) return opt.rating;
  return i === 0 ? 'best' : 'poor';
}

function shuffledIndices(n) {
  const idx = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function curriculumChip(code) {
  const item = curriculum[code];
  if (!item) return '';
  const tip = escapeAttr(`${code} · ${curriculumGroup(code)}: ${item.text}`);
  const inner = `<span class="case-curr-code">${code}</span>${item.short}`;
  return item.url
    ? `<a class="case-curr-chip" href="${item.url}" target="_blank" rel="noopener" title="${tip}">${inner}</a>`
    : `<span class="case-curr-chip" title="${tip}">${inner}</span>`;
}

function curriculumChips(codes = []) {
  return codes.map(curriculumChip).join('');
}

/* ── Case List ──────────────────────────────────────────────── */

export function renderCaseList(containerId, cases, module) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const accentVar = module === 'anca' ? 'var(--cyan-anca)' : module === 'joints' ? 'var(--amber-joints)' : 'var(--fitc-green)';

  el.innerHTML = `<div class="case-grid">${cases.map(c => {
    const prog = getCaseProgress(c.id);
    const completed = prog && prog.completed;
    const started = prog && prog.started && !completed;
    let statusHtml = '';
    if (completed) {
      const score = prog.score ? ` · ${prog.score.best}/${prog.score.total}` : '';
      statusHtml = `<div class="case-status case-complete"><span class="case-check">&#10003;</span> Completed${score}</div>`;
    } else if (started) {
      statusHtml = `<div class="case-status case-started">In progress</div>`;
    }
    const setting = c.setting ? `<div class="case-setting">${c.setting}</div>` : '';
    // Presentation codes only: condition codes on the card would give away the diagnosis.
    const chips = (c.curriculum || []).filter(k => k.startsWith('PR-') || k.startsWith('CD-')).slice(0, 3);
    return `<div class="case-card" onclick="startCase('${containerId}','${c.id}')">
      <div class="case-card-top">
        ${difficultyBadge(c.difficulty)}
        ${statusHtml}
      </div>
      <div class="case-title" style="color:${accentVar}">${c.title}</div>
      ${setting}
      <div class="case-summary">${c.summary}</div>
      ${chips.length ? `<div class="case-card-curr">${chips.map(k => `<span class="case-curr-mini">${curriculum[k]?.short ?? k}</span>`).join('')}</div>` : ''}
    </div>`;
  }).join('')}</div>`;
}

/* ── Case Playthrough ───────────────────────────────────────── */

// Active state per container
const activeState = {};

function getState(containerId) {
  return activeState[containerId];
}

export function startCase(containerId, caseId) {
  const state = activeState[containerId];
  if (!state) return;
  const caseData = state.cases.find(c => c.id === caseId);
  if (!caseData) return;

  state.currentCase = caseData;
  state.visitedNodes = [];
  state.decisions = [];

  saveCaseProgress(caseId, { started: true });

  const el = document.getElementById(containerId);
  el.innerHTML = `<div class="case-playthrough">
    <div class="case-play-header">
      <div class="case-play-title">${caseData.title}</div>
      <div class="case-play-summary">${caseData.summary}</div>
      <div class="case-play-meta">
        ${difficultyBadge(caseData.difficulty)}
        ${caseData.setting ? `<span class="case-setting">${caseData.setting}</span>` : ''}
      </div>
    </div>
    <div class="case-nodes" id="${containerId}-nodes"></div>
    <div class="case-actions" id="${containerId}-actions"></div>
  </div>`;

  renderNode(containerId, 'start');
}

export function renderNode(containerId, nodeId) {
  const state = getState(containerId);
  if (!state || !state.currentCase) return;

  const node = getNode(state.currentCase, nodeId);
  if (!node) return;

  state.visitedNodes.push(nodeId);

  saveCaseProgress(state.currentCase.id, {
    currentNode: nodeId,
    decisions: [...state.decisions]
  });

  // Dim all previous nodes
  const nodesEl = document.getElementById(`${containerId}-nodes`);
  nodesEl.querySelectorAll('.case-node').forEach(n => n.classList.add('case-node-past'));

  if (node.type === 'presentation') {
    renderPresentation(containerId, node);
  } else if (node.type === 'reflect') {
    renderReflect(containerId, node);
  } else if (node.type === 'decision') {
    renderDecision(containerId, node);
  } else if (node.type === 'conclusion') {
    renderConclusion(containerId, node);
  }

  // Scroll to new node
  setTimeout(() => {
    const latest = nodesEl.lastElementChild;
    if (latest) latest.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

function nodeLabel(node) {
  return node.label ? `<div class="case-node-label">${node.label}</div>` : '';
}

function renderPresentation(containerId, node) {
  const nodesEl = document.getElementById(`${containerId}-nodes`);
  const div = document.createElement('div');
  div.className = `case-node case-node-presentation${node.tone ? ` case-tone-${node.tone}` : ''}`;
  div.innerHTML = `
    ${nodeLabel(node)}
    <div class="case-node-content">${node.text}</div>
    <button class="case-continue-btn" onclick="advanceCase('${containerId}','${node.next}', this)">Continue &#9656;</button>
  `;
  nodesEl.appendChild(div);
}

function renderReflect(containerId, node) {
  const nodesEl = document.getElementById(`${containerId}-nodes`);
  const div = document.createElement('div');
  div.className = 'case-node case-node-reflect';
  div.id = `${containerId}-reflect-${node.id}`;
  div.innerHTML = `
    <div class="case-node-label">${node.label || 'Pause and think'}</div>
    <div class="case-decision-prompt">${node.prompt}</div>
    <textarea class="case-reflect-input" rows="3" placeholder="Jot your answer down before you reveal. It isn't marked."></textarea>
    <button class="case-continue-btn" onclick="revealReflect('${containerId}','${node.id}', this)">Reveal &#9656;</button>
  `;
  nodesEl.appendChild(div);
}

export function revealReflect(containerId, nodeId, btn) {
  const state = getState(containerId);
  if (!state || !state.currentCase) return;
  const node = getNode(state.currentCase, nodeId);
  const el = document.getElementById(`${containerId}-reflect-${nodeId}`);
  if (!node || !el) return;
  if (btn) btn.remove();
  const input = el.querySelector('.case-reflect-input');
  if (input) input.readOnly = true;
  const reveal = document.createElement('div');
  reveal.innerHTML = `
    <div class="case-reveal">
      <div class="case-section-label">Compare with an expert</div>
      <div class="case-node-content">${node.reveal}</div>
    </div>
    <button class="case-continue-btn" onclick="advanceCase('${containerId}','${node.next}', this)">Continue &#9656;</button>
  `;
  el.append(...reveal.childNodes);
}

function renderDecision(containerId, node) {
  const nodesEl = document.getElementById(`${containerId}-nodes`);
  const div = document.createElement('div');
  div.className = 'case-node case-node-decision';
  div.id = `${containerId}-decision-${node.id}`;
  const order = shuffledIndices(node.options.length);
  div.innerHTML = `
    <div class="case-node-label">${node.stage || 'Decision'}</div>
    <div class="case-decision-prompt">${node.prompt}</div>
    <div class="case-options">
      ${order.map(i =>
        `<button class="case-option-btn" onclick="selectCaseOption('${containerId}','${node.id}',${i})">${node.options[i].label}</button>`
      ).join('')}
    </div>
  `;
  nodesEl.appendChild(div);
}

function renderDebrief(state) {
  const rows = state.decisions.map(d => {
    const node = getNode(state.currentCase, d.nodeId);
    if (!node) return '';
    const rating = d.rating;
    const r = RATINGS[rating] || RATINGS.poor;
    const bestIdx = node.options.findIndex((_, i) => ratingOf(node, i) === 'best');
    const bestLine = rating !== 'best' && bestIdx >= 0
      ? `<div class="case-debrief-best">Best: ${node.options[bestIdx].label}</div>`
      : '';
    return `<li class="case-debrief-row">
      <div class="case-debrief-stage">${node.stage || 'Decision'}</div>
      <div class="case-debrief-choice"><span class="case-rating-pill ${r.cls}">${rating}</span>${node.options[d.choice].label}</div>
      ${bestLine}
    </li>`;
  }).join('');
  return `<ol class="case-debrief">${rows}</ol>`;
}

function renderConclusion(containerId, node) {
  const state = getState(containerId);
  const caseData = state.currentCase;

  const total = state.decisions.length;
  const best = state.decisions.filter(d => d.rating === 'best').length;
  const unsafe = state.decisions.filter(d => d.rating === 'unsafe').length;

  saveCaseProgress(caseData.id, { completed: true, score: { best, total, unsafe } });

  const nodesEl = document.getElementById(`${containerId}-nodes`);
  const div = document.createElement('div');
  div.className = 'case-node case-node-conclusion';

  const learningTags = (node.keyLearning || []).map(k =>
    `<span class="case-learning-tag">${k}</span>`
  ).join('');

  const tests = node.relatedTests || node.relatedAntibodies || [];
  const testTags = tests.map(a => `<span class="case-antibody-tag">${a}</span>`).join('');

  const goingFurther = node.goingFurther
    ? `<details class="case-going-further">
        <summary>Going further (beyond Year 4 core)</summary>
        <div class="case-node-content">${node.goingFurther}</div>
      </details>`
    : '';

  const codes = caseData.curriculum || [];

  // Objectives are shown only at the end: up front they would name the diagnosis.
  const objectives = caseData.objectives?.length
    ? `<div class="case-learning-section">
        <div class="case-section-label">What this case practised</div>
        <ul class="case-objectives">${caseData.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
      </div>`
    : '';

  div.innerHTML = `
    <div class="case-conclusion-label">Diagnosis &amp; Debrief</div>
    <div class="case-node-content">${node.text}</div>
    ${total ? `<div class="case-learning-section">
      <div class="case-section-label">Your reasoning path · ${best}/${total} best choices${unsafe ? ` · ${unsafe} unsafe` : ''}</div>
      ${renderDebrief(state)}
    </div>` : ''}
    ${objectives}
    <div class="case-learning-section">
      <div class="case-section-label">Key Learning Points</div>
      <div class="case-tags">${learningTags}</div>
    </div>
    ${testTags ? `<div class="case-antibody-section">
      <div class="case-section-label">Related Tests</div>
      <div class="case-tags">${testTags}</div>
    </div>` : ''}
    ${codes.length ? `<div class="case-learning-section">
      <div class="case-section-label">Year 4 MSK syllabus links</div>
      <div class="case-tags">${curriculumChips(codes)}</div>
    </div>` : ''}
    ${goingFurther}
  `;
  nodesEl.appendChild(div);

  // Render bottom actions
  const actionsEl = document.getElementById(`${containerId}-actions`);
  actionsEl.innerHTML = `
    <button class="case-action-btn" onclick="restartCase('${containerId}')">Restart Case</button>
    <button class="case-action-btn case-action-primary" onclick="backToCases('${containerId}')">Back to Cases</button>
  `;
}

export function advanceCase(containerId, nodeId, btn) {
  if (btn) btn.disabled = true;
  renderNode(containerId, nodeId);
}

export function selectCaseOption(containerId, nodeId, optionIndex) {
  const state = getState(containerId);
  if (!state || !state.currentCase) return;

  const node = getNode(state.currentCase, nodeId);
  if (!node) return;
  const opt = node.options[optionIndex];
  const rating = ratingOf(node, optionIndex);
  const r = RATINGS[rating] || RATINGS.poor;

  state.decisions.push({ nodeId, choice: optionIndex, rating });

  const decisionEl = document.getElementById(`${containerId}-decision-${nodeId}`);
  if (!decisionEl) return;
  const optionsEl = decisionEl.querySelector('.case-options');

  // Show every option with its rating once a choice is made, so the
  // student sees what the alternatives were worth.
  const others = node.options.map((o, i) => {
    if (i === optionIndex) return '';
    const or = RATINGS[ratingOf(node, i)] || RATINGS.poor;
    return `<li><span class="case-rating-pill ${or.cls}">${ratingOf(node, i)}</span>${o.label}</li>`;
  }).join('');

  optionsEl.innerHTML = `
    <div class="case-selected-option ${r.cls}">
      <div class="case-selected-label">${r.label}</div>
      <div class="case-selected-text">${opt.label}</div>
    </div>
    <div class="case-feedback ${r.cls}">${opt.feedback}</div>
    ${node.reasoning ? `<div class="case-reasoning">
      <div class="case-section-label">How an expert reasons here</div>
      <div class="case-node-content">${node.reasoning}</div>
    </div>` : ''}
    <details class="case-other-options">
      <summary>How the other options rate</summary>
      <ul>${others}</ul>
    </details>
    <button class="case-continue-btn" onclick="advanceCase('${containerId}','${opt.next}', this)">Continue &#9656;</button>
  `;
}

export function restartCase(containerId) {
  const state = getState(containerId);
  if (!state || !state.currentCase) return;
  startCase(containerId, state.currentCase.id);
}

export function backToCases(containerId) {
  const state = getState(containerId);
  if (!state) return;
  state.currentCase = null;
  state.visitedNodes = [];
  state.decisions = [];
  renderCaseList(containerId, state.cases, state.module);
}

/* ── Initialisation (called from app.js) ────────────────────── */

export function initCases(containerId, cases, module) {
  activeState[containerId] = {
    cases,
    module,
    currentCase: null,
    visitedNodes: [],
    decisions: []
  };
  renderCaseList(containerId, cases, module);
}

/* ── Window exposure (for inline onclick handlers) ──────────── */

window.startCase = startCase;
window.advanceCase = advanceCase;
window.revealReflect = revealReflect;
window.selectCaseOption = selectCaseOption;
window.restartCase = restartCase;
window.backToCases = backToCases;
