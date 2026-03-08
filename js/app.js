import {
  renderAbTable,
  renderPatterns,
  renderDiseases,
  renderMyths,
  renderSummaries,
  renderAnaPositivity,
  renderClues
} from './renderers.js';
import {
  startNavigation,
  switchModule,
  switchTab,
  getActiveClass,
  markAppReady
} from './navigation.js?v=20260307c';
import { initQuiz, setQuizMode, resetQuiz, answerQ, navQuiz, jumpTo } from './quiz.js';
import { initCases } from './cases.js';
import { initDiagnosisGuide } from './diagnosis-guide.js';
import { initANAPrimer } from './primer.js';

const contentRoot = document.getElementById('module-content-root');
const tabRail = document.getElementById('module-tab-rail');
const moduleSwitcher = document.getElementById('module-switcher');

const moduleCache = new Map();
let routeToken = 0;

function anaColumnMapper(ab) {
  const className = ab.cat === 'ena' ? 'cat-ena' : ab.cat === 'msa' ? 'cat-myositis-specific' : 'cat-myositis-associated';
  const label = ab.cat === 'ena' ? 'ENA / Core' : ab.cat === 'msa' ? 'Myositis-Specific' : 'Myositis-Assoc';
  const malignancyFlag = ab.malig ? '<div class="malig-flag">Malignancy association</div>' : '';
  return `<span class="ab-category ${className}">${label}</span>${malignancyFlag}`;
}

function ancaColumnMapper(ab) {
  return `<span class="ab-category cat-anca-assoc">${ab.pattern}</span>`;
}

function jointsColumnMapper(marker) {
  const className = marker.cat === 'sero' ? 'cat-joints-sero' : marker.cat === 'genetic' ? 'cat-joints-genetic' : 'cat-joints-acute';
  const label = marker.cat === 'sero' ? 'Serological' : marker.cat === 'genetic' ? 'Genetic' : 'Acute Phase';
  return `<span class="ab-category ${className}">${label}</span>`;
}

function sectionMarkup(id, title, subtitle, body, titleStyle = '') {
  const styleAttr = titleStyle ? ` style="${titleStyle}"` : '';
  return `<div class="section" id="sec-${id}"><div class="section-title"${styleAttr}>${title}</div><div class="section-subtitle">${subtitle}</div>${body}</div>`;
}

function quizShell(moduleName) {
  return `<div class="quiz-header">
      <div class="quiz-score">Score: <span id="${moduleName}QuizScore">0</span> / <span id="${moduleName}QuizTotal">0</span></div>
      <div class="quiz-controls">
        <button class="quiz-mode-btn active" data-mode="all" onclick="setQuizMode('${moduleName}','all')">All</button>
        <button class="quiz-mode-btn" data-mode="vignette" onclick="setQuizMode('${moduleName}','vignette')">Vignettes</button>
        <button class="quiz-mode-btn" data-mode="tf" onclick="setQuizMode('${moduleName}','tf')">True/False</button>
        <button class="quiz-btn" onclick="resetQuiz('${moduleName}')" style="margin-left:8px;">Reset</button>
      </div>
    </div>
    <div class="quiz-progress" id="${moduleName}QuizProgress"></div>
    <div id="${moduleName}QuizContainer"></div>
    <div class="quiz-nav">
      <button class="quiz-btn" id="${moduleName}PrevBtn" onclick="navQuiz('${moduleName}',-1)" disabled>◂ Prev</button>
      <button class="quiz-btn primary" id="${moduleName}NextBtn" onclick="navQuiz('${moduleName}',1)">Next ▸</button>
    </div>`;
}

function createView(moduleName, sectionsHtml) {
  const view = document.createElement('div');
  view.className = 'module-content';
  view.id = `module-${moduleName}`;
  view.dataset.module = moduleName;
  view.innerHTML = `<div class="container">${sectionsHtml}</div>`;
  return view;
}

function createAnaView() {
  return createView('ana', [
    sectionMarkup(
      'ana-clues',
      'Clinical Clues',
      'What does the patient look like? Tap a presentation to explore.',
      '<div id="anaCluesContainer"></div>'
    ),
    sectionMarkup(
      'ana-patterns',
      'Immunofluorescence Patterns',
      'Click any pattern to reveal associated antibodies and diseases.',
      '<div class="pattern-grid" id="anaPatternGrid"></div>'
    ),
    sectionMarkup(
      'ana-antibodies',
      'Antibody Index',
      'Filter by category.',
      `<div class="filter-bar" id="anaFilterBar">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="ena">ENA / Core</button>
        <button class="filter-btn" data-filter="msa">Myositis-Specific</button>
        <button class="filter-btn" data-filter="maa">Myositis-Associated</button>
      </div>
      <table class="ab-table"><thead><tr><th>Antibody</th><th>Category</th><th>Key Associations</th><th>Clinical Notes</th></tr></thead><tbody id="anaAbTableBody"></tbody></table>`
    ),
    sectionMarkup(
      'ana-diseases',
      'Disease → Antibody Map',
      'Which antibodies to expect with each condition.',
      '<div id="anaPositivityChart"></div><div class="section-title" style="font-size:15px;margin:28px 0 8px">Disease → Antibody Detail</div><div class="disease-grid" id="anaDiseaseGrid"></div>'
    ),
    sectionMarkup(
      'ana-myths',
      'Myth Busters',
      'Common misconceptions about ANA and ENA testing.',
      '<div id="anaMythsContainer"></div>'
    ),
    sectionMarkup(
      'ana-quiz',
      'Test Yourself — ANA &amp; ENA',
      'Clinical vignettes and true/false questions.',
      quizShell('ana')
    ),
    sectionMarkup(
      'ana-cases',
      'Clinical Cases — ANA &amp; ENA',
      'Work through branching clinical scenarios to test your reasoning.',
      '<div id="anaCaseContainer"></div>'
    ),
    sectionMarkup(
      'ana-summary',
      'Quick Reference — ANA &amp; ENA',
      'Cheat sheets, comparison tables, and high-yield summaries.',
      '<div id="anaSummaryContainer"></div>'
    )
  ].join(''));
}

function createAncaView() {
  const accentStyle = 'color:var(--cyan-anca)';
  return createView('anca', [
    sectionMarkup(
      'anca-patterns',
      'ANCA Immunofluorescence Patterns',
      'Ethanol-fixed neutrophils — the substrate for ANCA IF. Click to expand.',
      `<div class="pattern-grid" id="ancaPatternGrid"></div>
      <div class="info-box">
        <div class="info-box-label">⚡ Key Testing Principle</div>
        <div class="info-box-text">International guidelines (2017 revised consensus) now recommend <strong>antigen-specific immunoassays (PR3/MPO ELISA) as the primary screening method</strong> for AAV, rather than IF alone. IF + ELISA together gives the best sensitivity and specificity. A positive IF with negative PR3/MPO should prompt consideration of alternative diagnoses.</div>
      </div>`,
      accentStyle
    ),
    sectionMarkup(
      'anca-antibodies',
      'ANCA Antibody Index',
      'All ANCA-associated antibodies and their clinical significance.',
      '<table class="ab-table"><thead><tr><th>Antibody</th><th>IF Pattern</th><th>Key Associations</th><th>Clinical Notes</th></tr></thead><tbody id="ancaAbTableBody"></tbody></table>',
      accentStyle
    ),
    sectionMarkup(
      'anca-diseases',
      'Disease → Antibody &amp; Features',
      'Chapel Hill 2012 classification — the AAV spectrum and mimics.',
      '<div class="disease-grid" id="ancaDiseaseGrid"></div>',
      accentStyle
    ),
    sectionMarkup(
      'anca-myths',
      'Myth Busters',
      'Common misconceptions about ANCA and vasculitis.',
      '<div id="ancaMythsContainer"></div>',
      accentStyle
    ),
    sectionMarkup(
      'anca-quiz',
      'Test Yourself — ANCA &amp; Vasculitis',
      'Clinical vignettes and true/false questions.',
      quizShell('anca'),
      accentStyle
    ),
    sectionMarkup(
      'anca-cases',
      'Clinical Cases — ANCA &amp; Vasculitis',
      'Work through branching clinical scenarios to test your reasoning.',
      '<div id="ancaCaseContainer"></div>',
      accentStyle
    ),
    sectionMarkup(
      'anca-summary',
      'Quick Reference — ANCA &amp; Vasculitis',
      'Cheat sheets, comparison tables, and high-yield summaries.',
      '<div id="ancaSummaryContainer"></div>',
      accentStyle
    )
  ].join(''));
}

function createJointsView() {
  const accentStyle = 'color:var(--amber-joints)';
  return createView('joints', [
    sectionMarkup(
      'joints-patterns',
      'Joint Distribution Patterns',
      'Use the diagnostic guide below to narrow the diagnosis, then explore the pattern cards.',
      '<div id="jointsGuideContainer"></div><div class="pattern-grid" id="jointsPatternGrid"></div>',
      accentStyle
    ),
    sectionMarkup(
      'joints-markers',
      'Serological Marker Index',
      'Filter by category.',
      `<div class="filter-bar" id="jointsFilterBar">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="sero">Serological</button>
        <button class="filter-btn" data-filter="genetic">Genetic</button>
        <button class="filter-btn" data-filter="acute">Acute Phase</button>
      </div>
      <table class="ab-table"><thead><tr><th>Marker</th><th>Category</th><th>Key Associations</th><th>Clinical Notes</th></tr></thead><tbody id="jointsMarkerTableBody"></tbody></table>`,
      accentStyle
    ),
    sectionMarkup(
      'joints-diseases',
      'Disease → Marker &amp; Features',
      'Joint patterns, serological markers, and clinical features for each condition.',
      '<div class="disease-grid" id="jointsDiseaseGrid"></div>',
      accentStyle
    ),
    sectionMarkup(
      'joints-myths',
      'Myth Busters',
      'Common misconceptions about joint patterns and serology.',
      '<div id="jointsMythsContainer"></div>',
      accentStyle
    ),
    sectionMarkup(
      'joints-quiz',
      'Test Yourself — Joints &amp; Serology',
      'Clinical vignettes and true/false questions.',
      quizShell('joints'),
      accentStyle
    ),
    sectionMarkup(
      'joints-cases',
      'Clinical Cases — Joints &amp; Serology',
      'Work through branching clinical scenarios to test your reasoning.',
      '<div id="jointsCaseContainer"></div>',
      accentStyle
    ),
    sectionMarkup(
      'joints-summary',
      'Quick Reference — Joints &amp; Serology',
      'Cheat sheets, comparison tables, and high-yield summaries.',
      '<div id="jointsSummaryContainer"></div>',
      accentStyle
    )
  ].join(''));
}

const MODULES = {
  ana: {
    title: 'ANA & ENA',
    defaultTab: 'ana-clues',
    tabs: [
      { id: 'ana-clues', label: 'Clinical Clues', kind: 'light' },
      { id: 'ana-patterns', label: 'IF Patterns', kind: 'light' },
      { id: 'ana-antibodies', label: 'Antibody Index', kind: 'light' },
      { id: 'ana-diseases', label: 'By Disease', kind: 'light' },
      { id: 'ana-myths', label: 'Myth Busters', kind: 'light' },
      { id: 'ana-quiz', label: 'Quiz', kind: 'quiz' },
      { id: 'ana-cases', label: 'Cases', kind: 'cases' },
      { id: 'ana-summary', label: 'Summary', kind: 'summary' }
    ],
    createView: createAnaView,
    loadLightData: async () => {
      const [
        { anaClues },
        { anaAntibodies },
        { anaDiseases },
        { anaMyths },
        { anaPatterns },
        { anaPositivity }
      ] = await Promise.all([
        import('./data/ana-clues.js'),
        import('./data/ana-antibodies.js'),
        import('./data/ana-diseases.js'),
        import('./data/ana-myths.js'),
        import('./data/patterns.js'),
        import('./data/ana-positivity.js')
      ]);
      return { anaClues, anaAntibodies, anaDiseases, anaMyths, anaPatterns, anaPositivity };
    },
    renderLight: state => {
      const { anaClues, anaAntibodies, anaDiseases, anaMyths, anaPatterns, anaPositivity } = state.lightData;
      renderClues('anaCluesContainer', anaClues);
      renderPatterns('anaPatternGrid', anaPatterns);
      initANAPrimer(document.getElementById('sec-ana-patterns'));
      renderAbTable({
        targetId: 'anaAbTableBody',
        data: anaAntibodies,
        nameClass: 'ab-name',
        columnMapper: anaColumnMapper,
        filter: state.filters.ana || 'all',
        cacheKey: 'ana-ab'
      });
      renderAnaPositivity('anaPositivityChart', anaPositivity);
      renderDiseases('anaDiseaseGrid', anaDiseases, false);
      renderMyths('anaMythsContainer', anaMyths);
    },
    initHeavyTab: async (state, tabId) => {
      if (tabId === 'ana-quiz') {
        const { anaQuizQ } = await import('./data/ana-quiz.js');
        initQuiz('ana', anaQuizQ);
        return;
      }
      if (tabId === 'ana-cases') {
        const { anaCases } = await import('./data/ana-cases.js');
        initCases('anaCaseContainer', anaCases, 'ana');
        return;
      }
      if (tabId === 'ana-summary') {
        const { anaSummaries } = await import('./data/ana-summaries.js');
        renderSummaries('anaSummaryContainer', anaSummaries);
      }
    }
  },
  anca: {
    title: 'ANCA & Vasculitis',
    defaultTab: 'anca-patterns',
    tabs: [
      { id: 'anca-patterns', label: 'IF Patterns', kind: 'light' },
      { id: 'anca-antibodies', label: 'Antibody Index', kind: 'light' },
      { id: 'anca-diseases', label: 'By Disease', kind: 'light' },
      { id: 'anca-myths', label: 'Myth Busters', kind: 'light' },
      { id: 'anca-quiz', label: 'Quiz', kind: 'quiz' },
      { id: 'anca-cases', label: 'Cases', kind: 'cases' },
      { id: 'anca-summary', label: 'Summary', kind: 'summary' }
    ],
    createView: createAncaView,
    loadLightData: async () => {
      const [
        { ancaAntibodies },
        { ancaDiseases },
        { ancaMyths },
        { ancaPatterns }
      ] = await Promise.all([
        import('./data/anca-antibodies.js'),
        import('./data/anca-diseases.js'),
        import('./data/anca-myths.js'),
        import('./data/patterns.js')
      ]);
      return { ancaAntibodies, ancaDiseases, ancaMyths, ancaPatterns };
    },
    renderLight: state => {
      const { ancaAntibodies, ancaDiseases, ancaMyths, ancaPatterns } = state.lightData;
      renderPatterns('ancaPatternGrid', ancaPatterns);
      renderAbTable({
        targetId: 'ancaAbTableBody',
        data: ancaAntibodies,
        nameClass: 'ab-name-anca',
        columnMapper: ancaColumnMapper,
        cacheKey: 'anca-ab'
      });
      renderDiseases('ancaDiseaseGrid', ancaDiseases, true);
      renderMyths('ancaMythsContainer', ancaMyths);
    },
    initHeavyTab: async (state, tabId) => {
      if (tabId === 'anca-quiz') {
        const { ancaQuizQ } = await import('./data/anca-quiz.js');
        initQuiz('anca', ancaQuizQ);
        return;
      }
      if (tabId === 'anca-cases') {
        const { ancaCases } = await import('./data/anca-cases.js');
        initCases('ancaCaseContainer', ancaCases, 'anca');
        return;
      }
      if (tabId === 'anca-summary') {
        const { ancaSummaries } = await import('./data/anca-summaries.js');
        renderSummaries('ancaSummaryContainer', ancaSummaries);
      }
    }
  },
  joints: {
    title: 'Joints & Serology',
    defaultTab: 'joints-patterns',
    tabs: [
      { id: 'joints-patterns', label: 'Joint Patterns', kind: 'light' },
      { id: 'joints-markers', label: 'Marker Index', kind: 'light' },
      { id: 'joints-diseases', label: 'Disease Map', kind: 'light' },
      { id: 'joints-myths', label: 'Myth Busters', kind: 'light' },
      { id: 'joints-quiz', label: 'Quiz', kind: 'quiz' },
      { id: 'joints-cases', label: 'Cases', kind: 'cases' },
      { id: 'joints-summary', label: 'Summary', kind: 'summary' }
    ],
    createView: createJointsView,
    loadLightData: async () => {
      const [
        { jointsPatterns },
        { jointsMarkers },
        { jointsDiseases },
        { jointsMyths }
      ] = await Promise.all([
        import('./data/joints-patterns.js'),
        import('./data/joints-markers.js'),
        import('./data/joints-diseases.js'),
        import('./data/joints-myths.js')
      ]);
      return { jointsPatterns, jointsMarkers, jointsDiseases, jointsMyths };
    },
    renderLight: state => {
      const { jointsPatterns, jointsMarkers, jointsDiseases, jointsMyths } = state.lightData;
      renderPatterns('jointsPatternGrid', jointsPatterns);
      initDiagnosisGuide('jointsGuideContainer', jointsDiseases);
      renderAbTable({
        targetId: 'jointsMarkerTableBody',
        data: jointsMarkers,
        nameClass: 'ab-name-joints',
        columnMapper: jointsColumnMapper,
        filter: state.filters.joints || 'all',
        cacheKey: 'joints-markers'
      });
      renderDiseases('jointsDiseaseGrid', jointsDiseases, false);
      renderMyths('jointsMythsContainer', jointsMyths);
    },
    initHeavyTab: async (state, tabId) => {
      if (tabId === 'joints-quiz') {
        const { jointsQuizQ } = await import('./data/joints-quiz.js');
        initQuiz('joints', jointsQuizQ);
        return;
      }
      if (tabId === 'joints-cases') {
        const { jointsCases } = await import('./data/joints-cases.js');
        initCases('jointsCaseContainer', jointsCases, 'joints');
        return;
      }
      if (tabId === 'joints-summary') {
        const { jointsSummaries } = await import('./data/joints-summaries.js');
        renderSummaries('jointsSummaryContainer', jointsSummaries);
      }
    }
  }
};

function getModuleConfig(moduleName) {
  return MODULES[moduleName];
}

function getTabMeta(moduleName, tabId) {
  return getModuleConfig(moduleName)?.tabs.find(tab => tab.id === tabId) || null;
}

function getDefaultTab(moduleName) {
  return getModuleConfig(moduleName)?.defaultTab || 'joints-patterns';
}

function isValidTab(moduleName, tabId) {
  return Boolean(getTabMeta(moduleName, tabId));
}

function renderModuleButtons(activeModule) {
  moduleSwitcher.querySelectorAll('button[data-module]').forEach(button => {
    button.classList.remove('active', 'active-anca', 'active-joints');
    if (button.dataset.module === activeModule) {
      button.classList.add(getActiveClass(activeModule));
    }
  });
}

function renderTabRail(moduleName, activeTab) {
  const moduleConfig = getModuleConfig(moduleName);
  tabRail.innerHTML = moduleConfig.tabs.map(tab => {
    const activeClass = tab.id === activeTab ? ` ${getActiveClass(moduleName)}` : '';
    return `<button class="nav-tab${activeClass}" type="button" data-module="${moduleName}" data-tab="${tab.id}">${tab.label}</button>`;
  }).join('');
}

function activateLoadedModule(moduleName) {
  moduleCache.forEach((state, cachedModule) => {
    state.view.classList.toggle('active', cachedModule === moduleName);
  });
}

function activateSection(moduleName, tabId) {
  const moduleState = moduleCache.get(moduleName);
  if (!moduleState) return;
  moduleState.view.querySelectorAll('.section').forEach(section => {
    section.classList.toggle('active', section.id === `sec-${tabId}`);
  });
}

function ensureModuleLoaded(moduleName) {
  const existing = moduleCache.get(moduleName);
  if (existing) return existing;

  const moduleConfig = getModuleConfig(moduleName);
  const state = {
    moduleName,
    view: moduleConfig.createView(),
    filters: {
      ana: 'all',
      joints: 'all'
    },
    lightData: null,
    lightPromise: null,
    readyTabs: new Set(),
    tabPromises: new Map()
  };

  state.lightPromise = moduleConfig.loadLightData().then(lightData => {
    state.lightData = lightData;
    moduleConfig.renderLight(state);
    return lightData;
  });

  moduleCache.set(moduleName, state);
  contentRoot.appendChild(state.view);
  return state;
}

function renderAnaTable(filter = 'all') {
  const state = moduleCache.get('ana');
  if (!state?.lightData) return;
  state.filters.ana = filter;
  renderAbTable({
    targetId: 'anaAbTableBody',
    data: state.lightData.anaAntibodies,
    nameClass: 'ab-name',
    columnMapper: anaColumnMapper,
    filter,
    cacheKey: 'ana-ab'
  });
}

function renderJointsTable(filter = 'all') {
  const state = moduleCache.get('joints');
  if (!state?.lightData) return;
  state.filters.joints = filter;
  renderAbTable({
    targetId: 'jointsMarkerTableBody',
    data: state.lightData.jointsMarkers,
    nameClass: 'ab-name-joints',
    columnMapper: jointsColumnMapper,
    filter,
    cacheKey: 'joints-markers'
  });
}

async function ensureTabReady(moduleName, tabId) {
  const state = ensureModuleLoaded(moduleName);
  const tabMeta = getTabMeta(moduleName, tabId);

  if (!tabMeta) return;
  if (tabMeta.kind === 'light') {
    await state.lightPromise;
    return;
  }
  if (state.readyTabs.has(tabId)) return;
  if (state.tabPromises.has(tabId)) {
    await state.tabPromises.get(tabId);
    return;
  }

  const moduleConfig = getModuleConfig(moduleName);
  const initPromise = moduleConfig.initHeavyTab(state, tabId).then(() => {
    state.readyTabs.add(tabId);
    state.tabPromises.delete(tabId);
  });

  state.tabPromises.set(tabId, initPromise);
  await initPromise;
}

function toggleCard(card) {
  card.classList.toggle('expanded');
  const hint = card.querySelector('.expand-hint');
  if (hint) {
    hint.textContent = card.classList.contains('expanded') ? '▾ click to collapse' : '▸ click to expand';
  }
}

async function renderModuleTab(moduleName, tabId) {
  const requestToken = ++routeToken;
  const moduleConfig = getModuleConfig(moduleName);

  renderModuleButtons(moduleName);
  renderTabRail(moduleName, tabId);

  const state = ensureModuleLoaded(moduleName);
  activateLoadedModule(moduleName);
  activateSection(moduleName, tabId);
  document.title = `${moduleConfig.title} | RheumLab`;
  markAppReady();

  await ensureTabReady(moduleName, tabId);

  if (requestToken !== routeToken) return;
  activateLoadedModule(moduleName);
  activateSection(moduleName, tabId);
}

function handleFilterClick(button) {
  const filterBar = button.closest('.filter-bar');
  if (!filterBar) return;

  filterBar.querySelectorAll('.filter-btn').forEach(filterButton => {
    filterButton.classList.toggle('active', filterButton === button);
  });

  if (filterBar.id === 'anaFilterBar') {
    renderAnaTable(button.dataset.filter || 'all');
  }

  if (filterBar.id === 'jointsFilterBar') {
    renderJointsTable(button.dataset.filter || 'all');
  }
}

moduleSwitcher.addEventListener('click', event => {
  const button = event.target.closest('button[data-module]');
  if (!button) return;
  switchModule(button.dataset.module);
});

tabRail.addEventListener('click', event => {
  const button = event.target.closest('.nav-tab[data-tab]');
  if (!button) return;
  switchTab(button.dataset.tab);
});

contentRoot.addEventListener('click', event => {
  const filterButton = event.target.closest('.filter-btn[data-filter]');
  if (filterButton) {
    handleFilterClick(filterButton);
  }
});

window.switchModule = switchModule;
window.switchTab = switchTab;
window.toggleCard = toggleCard;
window.setQuizMode = setQuizMode;
window.resetQuiz = resetQuiz;
window.answerQ = answerQ;
window.navQuiz = navQuiz;
window.jumpTo = jumpTo;

startNavigation({
  getDefaultTab,
  isValidTab,
  onChange: ({ module, tab }) => {
    renderModuleTab(module, tab);
  }
});
