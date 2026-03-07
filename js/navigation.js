export function switchModule(mod, btn) {
  document.querySelectorAll('.module-btn').forEach(b => { b.classList.remove('active', 'active-anca'); });
  btn.classList.add(mod === 'anca' ? 'active-anca' : 'active');
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
      const ac = mod === 'anca' ? 'active-anca' : 'active';
      const parent = tab.closest('.module-content');
      parent.querySelectorAll('.nav-tab').forEach(t => { t.classList.remove('active', 'active-anca'); });
      tab.classList.add(ac);
      parent.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.getElementById('sec-' + tab.dataset.tab).classList.add('active');
    });
  });
}

export function initFilterListeners(renderAbTableFn) {
  document.querySelectorAll('#anaFilterBar .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#anaFilterBar .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAbTableFn(btn.dataset.filter);
    });
  });
}
