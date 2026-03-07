const VALID_MODULES = new Set(['ana', 'anca', 'joints']);
const SELECTED_MODULE_KEY = 'rheum-lab-selected-module';

function activeClass(mod) {
  return mod === 'anca' ? 'active-anca' : mod === 'joints' ? 'active-joints' : 'active';
}

function normalizeModule(mod) {
  if (typeof mod !== 'string') return null;
  const value = mod.trim().toLowerCase();
  return VALID_MODULES.has(value) ? value : null;
}

function getModuleButton(mod) {
  return document.querySelector(`.module-btn[data-module="${mod}"]`);
}

function getModuleFromTab(tabValue) {
  if (typeof tabValue !== 'string') return null;
  const [mod] = tabValue.split('-');
  return normalizeModule(mod);
}

function saveSelectedModule(mod) {
  try {
    sessionStorage.setItem(SELECTED_MODULE_KEY, mod);
  } catch {
    // Ignore storage failures.
  }
}

function loadSelectedModule() {
  try {
    return normalizeModule(sessionStorage.getItem(SELECTED_MODULE_KEY));
  } catch {
    return null;
  }
}

export function switchModule(mod, btn) {
  const normalizedMod = normalizeModule(mod);
  if (!normalizedMod) return;

  saveSelectedModule(normalizedMod);
  document.querySelectorAll('.module-btn').forEach(b => { b.classList.remove('active', 'active-anca', 'active-joints'); });
  const nextBtn = btn || getModuleButton(normalizedMod);
  if (nextBtn) nextBtn.classList.add(activeClass(normalizedMod));
  document.querySelectorAll('.module-content').forEach(m => m.classList.remove('active'));
  const nextModule = document.getElementById('module-' + normalizedMod);
  if (nextModule) nextModule.classList.add('active');
}

export function toggleCard(card) {
  card.classList.toggle('expanded');
  const h = card.querySelector('.expand-hint');
  if (h) h.textContent = card.classList.contains('expanded') ? '\u25be click to collapse' : '\u25b8 click to expand';
}

export function initTabListeners() {
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const mod = tab.dataset.module;
      const ac = activeClass(mod);
      const parent = tab.closest('.module-content');
      parent.querySelectorAll('.nav-tab').forEach(t => { t.classList.remove('active', 'active-anca', 'active-joints'); });
      tab.classList.add(ac);
      parent.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.getElementById('sec-' + tab.dataset.tab).classList.add('active');
    });
  });
}

export function switchTab(tabValue) {
  const tab = document.querySelector(`.nav-tab[data-tab="${tabValue}"]`);
  if (!tab) return;
  const mod = tab.dataset.module;
  switchModule(mod);
  const ac = activeClass(mod);
  const parent = tab.closest('.module-content');
  parent.querySelectorAll('.nav-tab').forEach(t => { t.classList.remove('active', 'active-anca', 'active-joints'); });
  tab.classList.add(ac);
  parent.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec-' + tabValue).classList.add('active');
}

export function initFromQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab');
  const mod = normalizeModule(params.get('module')) || getModuleFromTab(tab) || loadSelectedModule();
  if (mod) {
    switchModule(mod);
  }
  if (tab) {
    switchTab(tab);
  }
}

export function initFilterListeners(...configs) {
  for (const { barId, renderFn } of configs) {
    document.querySelectorAll(`#${barId} .filter-btn`).forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll(`#${barId} .filter-btn`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderFn(btn.dataset.filter);
      });
    });
  }
}
