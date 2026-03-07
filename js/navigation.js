const VALID_MODULES = new Set(['ana', 'anca', 'joints']);
const SELECTED_MODULE_KEY = 'rheum-lab-selected-module';

let navigationConfig = {
  getDefaultTab: null,
  isValidTab: null,
  onChange: null
};

let currentState = null;
let popstateBound = false;

function activeClass(mod) {
  return mod === 'anca' ? 'active-anca' : mod === 'joints' ? 'active-joints' : 'active';
}

function normalizeModule(mod) {
  if (typeof mod !== 'string') return null;
  const value = mod.trim().toLowerCase();
  return VALID_MODULES.has(value) ? value : null;
}

function getModuleFromTab(tabValue) {
  if (typeof tabValue !== 'string') return null;
  const [mod] = tabValue.split('-');
  return normalizeModule(mod);
}

function normalizeTab(mod, tabValue) {
  if (typeof tabValue !== 'string') return null;
  const value = tabValue.trim().toLowerCase();
  if (getModuleFromTab(value) !== mod) return null;
  return navigationConfig.isValidTab?.(mod, value) ? value : null;
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

function syncRootState(state) {
  const root = document.documentElement;
  root.dataset.activeModule = state.module;
  root.dataset.activeTab = state.tab;
}

function buildStateURL(state) {
  const url = new URL(window.location.href);
  url.searchParams.set('module', state.module);
  url.searchParams.set('tab', state.tab);
  return `${url.pathname}${url.search}`;
}

function syncHistory(state, replace) {
  const nextURL = buildStateURL(state);
  const method = replace ? 'replaceState' : 'pushState';
  window.history[method](state, '', nextURL);
}

function resolveState(candidate = {}) {
  const moduleFromInput = normalizeModule(candidate.module);
  const moduleFromTab = getModuleFromTab(candidate.tab);
  const selectedModule = loadSelectedModule();
  const moduleName = moduleFromInput || moduleFromTab || currentState?.module || selectedModule || 'joints';
  const tabName = normalizeTab(moduleName, candidate.tab) || navigationConfig.getDefaultTab?.(moduleName);
  return { module: moduleName, tab: tabName };
}

function resolveLocationState() {
  const params = new URLSearchParams(window.location.search);
  return resolveState({
    module: params.get('module'),
    tab: params.get('tab')
  });
}

function notify(nextState, meta) {
  currentState = nextState;
  saveSelectedModule(nextState.module);
  syncRootState(nextState);
  navigationConfig.onChange?.(nextState, meta);
}

function handlePopState() {
  notify(resolveLocationState(), { reason: 'popstate' });
}

export function startNavigation(config) {
  navigationConfig = { ...navigationConfig, ...config };

  if (!popstateBound) {
    window.addEventListener('popstate', handlePopState);
    popstateBound = true;
  }

  const initialState = resolveLocationState();
  syncHistory(initialState, true);
  notify(initialState, { reason: 'init' });
  return initialState;
}

export function navigateTo(candidate, options = {}) {
  const { replace = false, reason = 'navigate' } = options;
  const nextState = resolveState(candidate);
  const unchanged = currentState
    && currentState.module === nextState.module
    && currentState.tab === nextState.tab;

  if (!unchanged || replace) {
    syncHistory(nextState, replace || unchanged);
  }

  if (unchanged) {
    syncRootState(nextState);
    return currentState;
  }

  notify(nextState, { reason });
  return nextState;
}

export function switchModule(mod) {
  const normalizedMod = normalizeModule(mod);
  if (!normalizedMod) return currentState;
  return navigateTo(
    { module: normalizedMod, tab: navigationConfig.getDefaultTab?.(normalizedMod) },
    { reason: 'switch-module' }
  );
}

export function switchTab(tabValue) {
  if (typeof tabValue !== 'string') return currentState;
  return navigateTo({ tab: tabValue }, { reason: 'switch-tab' });
}

export function getCurrentState() {
  return currentState ? { ...currentState } : resolveLocationState();
}

export function getActiveClass(mod) {
  return activeClass(mod);
}

export function markAppReady() {
  document.documentElement.dataset.appReady = 'true';
}
