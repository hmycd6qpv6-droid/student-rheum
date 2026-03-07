function activeClass(mod) {
  return mod === 'anca' ? 'active-anca' : mod === 'joints' ? 'active-joints' : 'active';
}

export function switchModule(mod, btn) {
  document.querySelectorAll('.module-btn').forEach(b => { b.classList.remove('active', 'active-anca', 'active-joints'); });
  if (!btn) {
    const allBtns = document.querySelectorAll('.module-btn');
    allBtns.forEach(b => {
      const text = b.textContent.toLowerCase();
      if ((mod === 'ana' && text.includes('ana') && !text.includes('anca')) ||
          (mod === 'anca' && text.includes('anca')) ||
          (mod === 'joints' && text.includes('joints'))) {
        btn = b;
      }
    });
  }
  if (btn) btn.classList.add(activeClass(mod));
  document.querySelectorAll('.module-content').forEach(m => m.classList.remove('active'));
  document.getElementById('module-' + mod).classList.add('active');
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
  const ac = activeClass(mod);
  const parent = tab.closest('.module-content');
  parent.querySelectorAll('.nav-tab').forEach(t => { t.classList.remove('active', 'active-anca', 'active-joints'); });
  tab.classList.add(ac);
  parent.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('sec-' + tabValue).classList.add('active');
}

export function initFromQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const mod = params.get('module');
  const tab = params.get('tab');
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
