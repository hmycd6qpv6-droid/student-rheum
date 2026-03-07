/* cases.js — Branching clinical case engine for The Autoantibody Lab */

import { getCaseProgress, saveCaseProgress } from './progress.js';

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
  if (d === 'beginner') return 'rgba(57,255,20,0.12)';
  if (d === 'intermediate') return 'rgba(255,170,0,0.12)';
  return 'rgba(255,51,102,0.12)';
}

/* ── Case List ──────────────────────────────────────────────── */

export function renderCaseList(containerId, cases, module) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const accentVar = module === 'anca' ? 'var(--cyan-anca)' : 'var(--fitc-green)';

  el.innerHTML = `<div class="case-grid">${cases.map(c => {
    const prog = getCaseProgress(c.id);
    const completed = prog && prog.completed;
    const started = prog && prog.started && !completed;
    let statusHtml = '';
    if (completed) {
      statusHtml = `<div class="case-status case-complete"><span class="case-check">&#10003;</span> Completed</div>`;
    } else if (started) {
      statusHtml = `<div class="case-status case-started">In progress</div>`;
    }
    return `<div class="case-card" onclick="startCase('${containerId}','${c.id}')">
      <div class="case-card-top">
        <span class="case-difficulty" style="color:${difficultyColor(c.difficulty)};background:${difficultyBg(c.difficulty)};border:1px solid ${difficultyColor(c.difficulty)}">${c.difficulty}</span>
        ${statusHtml}
      </div>
      <div class="case-title" style="color:${accentVar}">${c.title}</div>
      <div class="case-summary">${c.summary}</div>
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
      <span class="case-difficulty" style="color:${difficultyColor(caseData.difficulty)};background:${difficultyBg(caseData.difficulty)};border:1px solid ${difficultyColor(caseData.difficulty)}">${caseData.difficulty}</span>
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

function renderPresentation(containerId, node) {
  const nodesEl = document.getElementById(`${containerId}-nodes`);
  const div = document.createElement('div');
  div.className = 'case-node case-node-presentation';
  div.innerHTML = `
    <div class="case-node-content">${node.text}</div>
    <button class="case-continue-btn" onclick="advanceCase('${containerId}','${node.next}')">Continue &#9656;</button>
  `;
  nodesEl.appendChild(div);
}

function renderDecision(containerId, node) {
  const nodesEl = document.getElementById(`${containerId}-nodes`);
  const div = document.createElement('div');
  div.className = 'case-node case-node-decision';
  div.id = `case-decision-${node.id}`;
  div.innerHTML = `
    <div class="case-decision-prompt">${node.prompt}</div>
    <div class="case-options">
      ${node.options.map((opt, i) =>
        `<button class="case-option-btn" onclick="selectCaseOption('${containerId}','${node.id}',${i})">${opt.label}</button>`
      ).join('')}
    </div>
  `;
  nodesEl.appendChild(div);
}

function renderConclusion(containerId, node) {
  const state = getState(containerId);

  saveCaseProgress(state.currentCase.id, { completed: true });

  const nodesEl = document.getElementById(`${containerId}-nodes`);
  const div = document.createElement('div');
  div.className = 'case-node case-node-conclusion';

  const learningTags = node.keyLearning.map(k =>
    `<span class="case-learning-tag">${k}</span>`
  ).join('');

  const abTags = node.relatedAntibodies.map(a =>
    `<span class="case-antibody-tag">${a}</span>`
  ).join('');

  div.innerHTML = `
    <div class="case-conclusion-label">Diagnosis &amp; Key Learning</div>
    <div class="case-node-content">${node.text}</div>
    <div class="case-learning-section">
      <div class="case-section-label">Key Learning Points</div>
      <div class="case-tags">${learningTags}</div>
    </div>
    <div class="case-antibody-section">
      <div class="case-section-label">Related Antibodies</div>
      <div class="case-tags">${abTags}</div>
    </div>
  `;
  nodesEl.appendChild(div);

  // Render bottom actions
  const actionsEl = document.getElementById(`${containerId}-actions`);
  actionsEl.innerHTML = `
    <button class="case-action-btn" onclick="restartCase('${containerId}')">Restart Case</button>
    <button class="case-action-btn case-action-primary" onclick="backToCases('${containerId}')">Back to Cases</button>
  `;
}

export function advanceCase(containerId, nodeId) {
  // Disable the continue button that was clicked
  const nodesEl = document.getElementById(`${containerId}-nodes`);
  const lastNode = nodesEl.lastElementChild;
  if (lastNode) {
    const btn = lastNode.querySelector('.case-continue-btn');
    if (btn) btn.disabled = true;
  }
  renderNode(containerId, nodeId);
}

export function selectCaseOption(containerId, nodeId, optionIndex) {
  const state = getState(containerId);
  if (!state || !state.currentCase) return;

  const node = getNode(state.currentCase, nodeId);
  if (!node) return;
  const opt = node.options[optionIndex];

  state.decisions.push({ nodeId, choice: optionIndex });

  // Determine if this is the "best" option (index 0 is always the ideal choice)
  const isBest = optionIndex === 0;

  // Replace options with selection + feedback
  const decisionEl = document.getElementById(`case-decision-${nodeId}`);
  if (decisionEl) {
    const optionsEl = decisionEl.querySelector('.case-options');
    optionsEl.innerHTML = `
      <div class="case-selected-option ${isBest ? 'case-good-choice' : 'case-corrective-choice'}">
        <div class="case-selected-label">${isBest ? 'Good choice' : 'Not quite'}</div>
        <div class="case-selected-text">${opt.label}</div>
      </div>
      <div class="case-feedback ${isBest ? 'case-feedback-good' : 'case-feedback-corrective'}">
        ${opt.feedback}
      </div>
    `;
  }

  // Auto-advance after a short delay
  setTimeout(() => {
    renderNode(containerId, opt.next);
  }, 300);
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
window.selectCaseOption = selectCaseOption;
window.restartCase = restartCase;
window.backToCases = backToCases;
