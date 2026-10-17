let currentStep = 0;

const LINE = 'fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

function svgBloodDrop() {
  return `<svg viewBox="0 0 24 24" ${LINE} stroke="#46554e" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 11h4v7a2 2 0 0 1-4 0z" fill="rgba(183,28,28,0.6)" stroke="none"/>
    <path d="M10 6h4v5h-4z" fill="rgba(230,180,40,0.35)" stroke="none"/>
    <path d="M8.5 3h7M10 3v15a2 2 0 0 0 4 0V3"/>
  </svg>`;
}

function svgCellSlide() {
  return `<svg viewBox="0 0 24 24" ${LINE} stroke="#005EB8" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="10" rx="1.5"/>
    <g stroke="#006747"><circle cx="7" cy="12" r="2.2"/><circle cx="12" cy="12" r="2.2"/><circle cx="17" cy="12" r="2.2"/></g>
    <g fill="#006747" stroke="none"><circle cx="7" cy="12" r="0.9"/><circle cx="12" cy="12" r="0.9"/><circle cx="17" cy="12" r="0.9"/></g>
  </svg>`;
}

function svgTagLatching() {
  return `<svg viewBox="0 0 24 24" ${LINE} stroke="#B25F00" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 18v-6M12 12 7 5M12 12l5-7"/>
    <circle cx="12" cy="20" r="2" fill="#006747" stroke="#006747"/>
    <circle cx="12" cy="20" r="3.6" stroke="#006747" stroke-opacity="0.35"/>
  </svg>`;
}

function svgUVGlow() {
  return `<svg viewBox="0 0 24 24" ${LINE} stroke="#005EB8" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v5M7 3.5l2 4M17 3.5l-2 4"/>
    <circle cx="12" cy="15.5" r="3.5" fill="#006747" stroke="#006747"/>
    <circle cx="12" cy="15.5" r="6.5" stroke="#006747" stroke-opacity="0.35"/>
  </svg>`;
}

function svgPatternRead() {
  return `<svg viewBox="0 0 24 24" ${LINE} stroke="#006747" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2"/>
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z"/>
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
  </svg>`;
}

const STEPS = [
  {
    title: 'Collect patient serum',
    body: 'Blood is drawn and centrifuged. The serum — containing any circulating antibodies — is separated. If the patient has made antinuclear antibodies, they\'ll be here.',
    icon: svgBloodDrop()
  },
  {
    title: 'Apply to HEp-2 cells',
    body: 'Patient serum is layered onto a glass slide coated with <strong>HEp-2 cells</strong> — a human epithelial cell line with large, antigen-rich nuclei. If ANA are present, they bind to nuclear targets.',
    icon: svgCellSlide()
  },
  {
    title: 'Add fluorescent anti-IgG',
    body: 'A secondary antibody — <strong>anti-human IgG tagged with FITC</strong> fluorescent dye — is applied. It latches onto any patient IgG stuck to the nuclear antigens.',
    icon: svgTagLatching()
  },
  {
    title: 'Illuminate with UV light',
    body: 'Under UV, FITC fluoresces <strong>bright green</strong> — wherever patient IgG bound. The nucleus lights up. The distribution of that glow is the pattern.',
    icon: svgUVGlow()
  },
  {
    title: 'Read the pattern',
    body: 'A trained scientist reads the fluorescence pattern: <strong>homogeneous, speckled, centromere, nucleolar,</strong> or cytoplasmic. This drives the next step — which specific antibodies to test for.',
    icon: svgPatternRead()
  }
];

function buildPrimerHTML(seen) {
  const bodyHidden = seen ? ' hidden' : '';
  const chevron = seen ? '▸' : '▾';
  const trackDots = STEPS.map((_, i) =>
    `<div class="primer-step-dot${i === 0 ? ' active' : ''}" data-step="${i}"></div>`
  ).join('<div class="primer-track-line"></div>');

  return `<div class="primer-wrapper" id="anaPrimer">
  <button class="primer-toggle" onclick="window.togglePrimer()">
    <span class="primer-toggle-dot"></span>
    <span class="primer-toggle-label">How ANA Testing Works</span>
    <span class="primer-toggle-chevron">${chevron}</span>
  </button>
  <div class="primer-body${bodyHidden}">
    <div class="primer-track" id="primerTrack">${trackDots}</div>
    <div class="primer-card" id="primerCard">
      <div class="primer-icon" id="primerIcon"></div>
      <div class="primer-step-label" id="primerStepLabel"></div>
      <div class="primer-step-title" id="primerStepTitle"></div>
      <div class="primer-step-body" id="primerStepBody"></div>
      <div class="primer-card-footer">
        <button class="primer-back hidden" id="primerBackBtn" onclick="window.primerBack()">← Back</button>
        <button class="primer-next" id="primerNextBtn" onclick="window.primerNext()">Next →</button>
      </div>
    </div>
    <div class="primer-stats hidden" id="primerStats">
      <div class="primer-stat-card primer-stat-numbers">
        <div class="primer-stat-heading">The Numbers</div>
        <div class="primer-counter" data-target="95" data-color="green" id="primerCounter1">0%</div>
        <div class="primer-counter-label">sensitive for SLE</div>
        <div class="primer-counter" data-target="57" data-color="amber" id="primerCounter2">0%</div>
        <div class="primer-counter-label">specific</div>
        <div class="primer-footnote">1 in 20 healthy adults is ANA positive</div>
      </div>
      <div class="primer-stat-card primer-stat-analogy">
        <div class="primer-stat-heading">The D-Dimer Analogy</div>
        <blockquote class="primer-quote">Think of ANA like a D-dimer for PE. It's a <em>sensitive screening test</em> — if it's negative, you can be fairly reassured there's no systemic CTD driving the picture. But a positive alone doesn't diagnose anything. D-dimer goes up in sepsis, pregnancy, malignancy. ANA is positive in infection, drugs, and 5% of healthy people. The pattern — like the clinical context with a D-dimer — is what guides you next.</blockquote>
      </div>
    </div>
    <button class="primer-dismiss hidden" id="primerDismiss" onclick="window.primerDismiss()">
      Got it — explore the patterns →
    </button>
  </div>
</div>`;
}

function renderStep(n) {
  const step = STEPS[n];
  const card = document.getElementById('primerCard');

  document.querySelectorAll('#primerTrack .primer-step-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === n);
    dot.classList.toggle('done', i < n);
  });

  // Trigger slide animation
  if (card) {
    card.classList.remove('primer-anim');
    void card.offsetWidth;
    card.classList.add('primer-anim');
  }

  const icon = document.getElementById('primerIcon');
  const label = document.getElementById('primerStepLabel');
  const title = document.getElementById('primerStepTitle');
  const body = document.getElementById('primerStepBody');
  const btn = document.getElementById('primerNextBtn');
  const backBtn = document.getElementById('primerBackBtn');

  if (icon) icon.innerHTML = step.icon;
  if (label) label.textContent = `Step ${n + 1} of ${STEPS.length}`;
  if (title) title.textContent = step.title;
  if (body) body.innerHTML = step.body;
  if (btn) { btn.textContent = n < STEPS.length - 1 ? 'Next →' : 'Show results →'; btn.disabled = false; }
  if (backBtn) backBtn.classList.toggle('hidden', n === 0);
}

function animateCounter(el, target) {
  let n = 0;
  const interval = setInterval(() => {
    n = Math.min(n + 2, target);
    el.textContent = n + '%';
    if (n >= target) clearInterval(interval);
  }, 20);
}

function showStats() {
  const stats = document.getElementById('primerStats');
  const dismiss = document.getElementById('primerDismiss');
  const btn = document.getElementById('primerNextBtn');

  if (btn) btn.disabled = true;

  if (stats) {
    stats.classList.remove('hidden');
    stats.querySelectorAll('.primer-counter').forEach(el => {
      animateCounter(el, parseInt(el.dataset.target, 10));
    });
    setTimeout(() => stats.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
  if (dismiss) dismiss.classList.remove('hidden');
}

function primerNext() {
  if (currentStep < STEPS.length - 1) {
    currentStep++;
    renderStep(currentStep);
  } else {
    showStats();
  }
}

function primerBack() {
  if (currentStep > 0) {
    currentStep--;
    renderStep(currentStep);
    const stats = document.getElementById('primerStats');
    const dismiss = document.getElementById('primerDismiss');
    if (stats) stats.classList.add('hidden');
    if (dismiss) dismiss.classList.add('hidden');
  }
}

function togglePrimer() {
  const body = document.querySelector('#anaPrimer .primer-body');
  if (!body) return;
  const nowHidden = body.classList.toggle('hidden');
  const chevron = document.querySelector('#anaPrimer .primer-toggle-chevron');
  if (chevron) chevron.textContent = nowHidden ? '▸' : '▾';
}

function primerDismiss() {
  const body = document.querySelector('#anaPrimer .primer-body');
  if (body) body.classList.add('hidden');
  const chevron = document.querySelector('#anaPrimer .primer-toggle-chevron');
  if (chevron) chevron.textContent = '▸';
  localStorage.setItem('rheum-lab-ana-primer-seen', '1');
  const grid = document.getElementById('anaPatternGrid');
  if (grid) setTimeout(() => {
    const toolbar = document.querySelector('.toolbar');
    const tabRail = document.querySelector('.tab-rail');
    const offset = (toolbar ? toolbar.offsetHeight : 0) + (tabRail ? tabRail.offsetHeight : 0);
    const top = grid.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, 50);
}

export function initANAPrimer(sectionEl) {
  if (!sectionEl || document.getElementById('anaPrimer')) return;

  const seen = localStorage.getItem('rheum-lab-ana-primer-seen');
  const gridEl = sectionEl.querySelector('#anaPatternGrid');
  if (!gridEl) return;
  gridEl.insertAdjacentHTML('beforebegin', buildPrimerHTML(seen));

  window.primerNext = primerNext;
  window.primerBack = primerBack;
  window.togglePrimer = togglePrimer;
  window.primerDismiss = primerDismiss;

  currentStep = 0;
  renderStep(0);
}
