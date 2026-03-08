const QUESTIONS = [
  {
    title: 'Joint Size',
    subtitle: 'Which joints are predominantly affected?',
    options: [
      { label: 'Small joints', value: 'small', hint: 'Fingers (MCPs, PIPs, DIPs), wrists, toes' },
      { label: 'Large joints', value: 'large', hint: 'Knees, hips, shoulders, ankles, elbows' },
      { label: 'Mixed — both', value: 'both', hint: 'Small and large joints involved' }
    ]
  },
  {
    title: 'Symmetry',
    subtitle: 'How are the joints distributed left vs right?',
    options: [
      { label: 'Symmetric', value: 'symmetric', hint: 'Both sides equally affected' },
      { label: 'Asymmetric', value: 'asymmetric', hint: 'One side dominant, or joints affected randomly' }
    ]
  },
  {
    title: 'Joint Count',
    subtitle: 'How many joints are actively involved?',
    options: [
      { label: 'Mono  (1)', value: 'mono', hint: '1 joint' },
      { label: 'Oligo  (2–4)', value: 'oligo', hint: '2 to 4 joints' },
      { label: 'Poly  (5+)', value: 'poly', hint: '5 or more joints' }
    ]
  },
  {
    title: 'Distribution',
    subtitle: 'Where is the arthritis predominantly located?',
    options: [
      { label: 'Upper limb', value: 'upper', hint: 'Hands, wrists, elbows, shoulders' },
      { label: 'Lower limb', value: 'lower', hint: 'Feet, ankles, knees, hips' },
      { label: 'Axial', value: 'axial', hint: 'Spine and/or sacroiliac joints' }
    ]
  }
];

const SIZE_LABELS  = { small: 'Small', large: 'Large', both: 'Mixed' };
const SYM_LABELS   = { symmetric: 'Symmetric', asymmetric: 'Asymmetric', either: 'Either' };
const COUNT_LABELS = { mono: 'Mono', oligo: 'Oligo', poly: 'Poly', any: 'Any' };
const LIMB_LABELS  = { upper: 'Upper limb', lower: 'Lower limb', axial: 'Axial', either: 'Either/Both' };

function matchesPattern(pattern, answers) {
  const [userSize, userSym, userCount, userLimb] = answers;
  if (pattern.size !== 'both' && userSize !== 'both' && pattern.size !== userSize) return false;
  if (pattern.symmetry !== 'either' && pattern.symmetry !== userSym) return false;
  if (pattern.count !== 'any' && pattern.count !== userCount) return false;
  if (pattern.limb !== 'either' && pattern.limb !== userLimb) return false;
  return true;
}

function canReachMatch(diseases, partialAnswers, remainingQuestions) {
  if (remainingQuestions.length === 0) {
    return diseases.some(d => d.patterns.some(p => matchesPattern(p, partialAnswers)));
  }
  const [nextQ, ...rest] = remainingQuestions;
  return nextQ.options.some(opt =>
    canReachMatch(diseases, [...partialAnswers, opt.value], rest)
  );
}

function getViableOptions(diseases, answeredSoFar, stepIndex) {
  const q = QUESTIONS[stepIndex];
  const remaining = QUESTIONS.slice(stepIndex + 1);
  return q.options.map(opt => ({
    ...opt,
    disabled: !canReachMatch(diseases, [...answeredSoFar, opt.value], remaining)
  }));
}

function patternTagsHtml(pattern) {
  return [
    SIZE_LABELS[pattern.size],
    SYM_LABELS[pattern.symmetry],
    COUNT_LABELS[pattern.count],
    LIMB_LABELS[pattern.limb]
  ].map(t => `<span class="guide-tag">${t}</span>`).join('');
}

export function initDiagnosisGuide(containerId, diseases) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const state = { step: 0, answers: [] };

  function renderStep() {
    const q = QUESTIONS[state.step];
    const progressPct = Math.round((state.step / QUESTIONS.length) * 100);
    const viableOptions = getViableOptions(diseases, state.answers, state.step);

    container.innerHTML = `
      <div class="guide-card">
        <div class="guide-progress-bar"><div class="guide-progress-fill" style="width:${progressPct}%"></div></div>
        <div class="guide-step-counter">Step ${state.step + 1} of ${QUESTIONS.length}</div>
        <div class="guide-step-title">${q.title}</div>
        <div class="guide-step-subtitle">${q.subtitle}</div>
        <div class="guide-options">
          ${viableOptions.map(opt => `
            <button class="guide-option-btn${opt.disabled ? ' guide-option-disabled' : ''}" data-value="${opt.value}"${opt.disabled ? ' disabled' : ''}>
              <span class="guide-option-label">${opt.label}</span>
              <span class="guide-option-hint">${opt.hint}</span>
              ${opt.disabled ? '<span class="guide-option-dead">No matching conditions</span>' : ''}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.guide-option-btn:not(:disabled)').forEach(btn => {
      btn.addEventListener('click', () => {
        state.answers.push(btn.dataset.value);
        state.step++;
        if (state.step < QUESTIONS.length) {
          renderStep();
        } else {
          renderResults();
        }
      });
    });
  }

  function renderResults() {
    const { answers } = state;
    const matched = diseases
      .map(d => ({ disease: d, pattern: d.patterns.find(p => matchesPattern(p, answers)) }))
      .filter(r => r.pattern);

    const summaryHtml = [
      SIZE_LABELS[answers[0]],
      SYM_LABELS[answers[1]],
      COUNT_LABELS[answers[2]],
      LIMB_LABELS[answers[3]]
    ].map(s => `<span class="guide-summary-tag">${s}</span>`)
     .join('<span class="guide-summary-sep"> • </span>');

    const cardsHtml = matched.length === 0
      ? `<div class="guide-no-match">No diseases match this exact pattern. Try a different combination or review the Disease Map tab.</div>`
      : matched.map(({ disease, pattern }) => `
          <div class="guide-disease-card">
            <div class="guide-disease-header">
              <div>
                <div class="guide-disease-name">${disease.name}</div>
                ${disease.aka ? `<div class="guide-disease-aka">${disease.aka}</div>` : ''}
              </div>
              ${disease.patterns.length > 1 ? `<span class="guide-tag-multi">Multiple patterns</span>` : ''}
            </div>
            <div class="guide-tags">${patternTagsHtml(pattern)}</div>
            <div class="guide-hint">${disease.hint}</div>
          </div>
        `).join('');

    container.innerHTML = `
      <div class="guide-card guide-card-results">
        <div class="guide-result-label">Your pattern</div>
        <div class="guide-result-summary">${summaryHtml}</div>
        <div class="guide-result-count">${matched.length} condition${matched.length !== 1 ? 's' : ''} match this pattern</div>
        <div class="guide-results-grid">${cardsHtml}</div>
        <button class="guide-reset-btn">Try another pattern</button>
      </div>
    `;

    container.querySelector('.guide-reset-btn').addEventListener('click', () => {
      state.step = 0;
      state.answers = [];
      renderStep();
    });
  }

  renderStep();
}
