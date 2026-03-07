export function renderAbTable({ targetId, data, nameClass, columnMapper, filter }) {
  const tbody = document.getElementById(targetId);
  const d = filter ? (filter === 'all' ? data : data.filter(a => a.cat === filter)) : data;
  tbody.innerHTML = d.map(ab => {
    const col2 = columnMapper(ab);
    return `<tr><td><div class="${nameClass}">${ab.name}</div>${ab.aka ? `<div class="ab-aka">${ab.aka}</div>` : ''}</td><td>${col2}</td><td style="color:var(--text-secondary);font-size:12px">${ab.diseases.join(', ')}</td><td style="color:var(--text-secondary);font-size:12px;max-width:300px">${ab.notes}</td></tr>`;
  }).join('');
}

export function renderPatterns(containerId, patterns) {
  const container = document.getElementById(containerId);
  container.innerHTML = patterns.map(p => {
    const nameStyle = p.nameColor ? ` style="color:${p.nameColor}"` : '';
    const abLabel = p.targetLabel || 'Associated Antibodies';
    const abTags = p.antibodyTagClass
      ? p.antibodies.map(a => `<span class="assoc-tag ${p.antibodyTagClass}">${a}</span>`).join('')
      : p.antibodies.map(a => `<span class="assoc-tag" style="background:rgba(255,51,102,0.1);color:var(--rhodamine-red);border:1px solid rgba(255,51,102,0.2);">${a}</span>`).join('');
    const diseaseTags = p.diseases.map(d => `<span class="assoc-tag tag-disease">${d}</span>`).join('');
    const detailHtml = p.detail ? `<div style="margin-top:10px;font-size:12px;color:var(--text-secondary);line-height:1.7;">${p.detail}</div>` : '';
    return `<div class="pattern-card" style="--card-accent:${p.accent}" onclick="toggleCard(this)">
        <div class="if-pattern">${p.svg}</div>
        <div class="pattern-name"${nameStyle}>${p.name}</div>
        <div class="pattern-desc">${p.desc}</div>
        <div class="expand-hint">\u25b8 click to expand</div>
        <div class="pattern-detail">
          <div class="detail-label">${abLabel}</div>
          ${abTags}
          <div class="detail-label-spaced">Think of</div>
          ${diseaseTags}
          ${detailHtml}
        </div>
      </div>`;
  }).join('');
}

export function renderDiseases(id, data, anca) {
  document.getElementById(id).innerHTML = data.map(d => {
    const nc = d.nameClass || (anca ? 'disease-name-anca' : 'disease-name');
    const al = d.abs.map(a => {
      const sc = a.spec === 'high' ? 'spec-high' : a.spec === 'mod' ? 'spec-mod' : 'spec-assoc';
      const sl = a.spec === 'high' ? 'Specific' : a.spec === 'mod' ? 'Common' : 'Associated';
      return `<li><span>${a.n}</span><span class="specificity ${sc}">${sl}</span></li>`;
    }).join('');
    let fh = '';
    if (d.features) {
      fh = `<div class="clinical-features"><div class="clinical-features-label">Key Clinical Features</div>${d.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}</div>`;
    }
    let nh = '';
    if (d.note) {
      nh = `<div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--border-subtle);font-size:11px;color:var(--text-muted);line-height:1.7">${d.note}</div>`;
    }
    return `<div class="disease-card"><div class="${nc}">${d.name}</div>${d.aka ? `<div class="disease-aka">${d.aka}</div>` : '<div style="margin-bottom:10px"></div>'}<ul class="disease-ab-list">${al}</ul>${fh}${nh}</div>`;
  }).join('');
}

export function renderMyths(id, data) {
  document.getElementById(id).innerHTML = data.map(m => {
    const c = m.myth ? 'myth' : 'fact';
    const l = m.myth ? '\u2717 Common Myth' : '\u2713 True Statement';
    return `<div class="myth-card ${c}"><div class="myth-label">${l}</div><div class="myth-text">\u201c${m.text}\u201d</div><div class="myth-explanation">${m.explanation}</div></div>`;
  }).join('');
}

export function renderAnaPositivity(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const ctd = data.filter(d => d.group === 'ctd');
  const dm = data.filter(d => d.group === 'dm');
  const asys = data.filter(d => d.group === 'asys');
  const imnm = data.filter(d => d.group === 'imnm');

  function dotChar(level) {
    return level === 'positive' ? '\u25cf' : level === 'variable' ? '\u25d0' : '\u25cb';
  }
  function dotClass(level) {
    return level === 'positive' ? 'dot-pos' : level === 'variable' ? 'dot-var' : 'dot-neg';
  }

  function detailHtml(d) {
    const patternTags = d.pattern.split(',').map(p => `<span class="assoc-tag tag-antibody">${p.trim()}</span>`).join('');
    const abTags = d.abs.map(a => `<span class="assoc-tag" style="background:rgba(255,51,102,0.1);color:var(--rhodamine-red);border:1px solid rgba(255,51,102,0.2);">${a}</span>`).join('');
    return `<div class="ana-pos-detail">
      <div class="ana-pos-detail-row"><span class="ana-pos-detail-label">IFA Pattern</span>${patternTags}</div>
      <div class="ana-pos-detail-row"><span class="ana-pos-detail-label">Key Antibodies</span>${abTags}</div>
      <div class="ana-pos-detail-note">${d.note}</div>
    </div>`;
  }

  function barRow(d) {
    return `<div class="ana-pos-row" onclick="this.classList.toggle('expanded')">
      <div class="ana-pos-row-main">
        <span class="ana-pos-label">${d.name}</span>
        <div class="ana-pos-track"><div class="ana-pos-fill" style="width:${d.percent}%"></div></div>
        <span class="ana-pos-pct">${d.percentLabel}</span>
      </div>
      ${detailHtml(d)}
    </div>`;
  }

  function qualRow(d) {
    return `<div class="ana-pos-row" onclick="this.classList.toggle('expanded')">
      <div class="ana-pos-row-main">
        <span class="ana-pos-label">${d.name}</span>
        <span class="ana-pos-dot ${dotClass(d.level)}">${dotChar(d.level)}</span>
        <span class="ana-pos-level-label">${d.levelLabel}</span>
      </div>
      ${detailHtml(d)}
    </div>`;
  }

  function qualGroup(label, items) {
    return `<div class="ana-pos-group-label">${label}</div>${items.map(qualRow).join('')}`;
  }

  container.innerHTML = `
    <div class="ana-pos-section">
      <div class="ana-pos-header">ANA \u22651:160 Positivity by CTD</div>
      <div class="ana-pos-subheader">Click any row for IFA pattern, key antibodies, and clinical notes.</div>
      ${ctd.map(barRow).join('')}
      <div class="ana-pos-divider">Inflammatory Myopathies &mdash; by antibody subtype</div>
      ${qualGroup('Dermatomyositis', dm)}
      ${qualGroup('Antisynthetase Syndrome', asys)}
      ${qualGroup('IMNM', imnm)}
    </div>`;
}

export function renderSummaries(containerId, summaries) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const icons = { top5: '\u2605', cheatsheet: '\u2261', shortcut: '\u2192', comparison: '\u2194' };
  const labels = { top5: 'High-Yield', cheatsheet: 'Cheat Sheet', shortcut: 'Decision Guide', comparison: 'Comparison' };

  container.innerHTML = summaries.map(card => {
    let body = '';

    if (card.type === 'top5') {
      body = `<ol class="summary-top5-list">${card.content.map((item, i) =>
        `<li><span class="summary-top5-number">${i + 1}</span><span>${item}</span></li>`
      ).join('')}</ol>`;
    }

    else if (card.type === 'cheatsheet') {
      body = `<table class="summary-cheatsheet-table"><thead><tr><th>Antibody</th><th>Key Associations</th></tr></thead><tbody>${card.content.map(row =>
        `<tr><td class="summary-ab-name">${row.antibody}</td><td>${row.diseases}</td></tr>`
      ).join('')}</tbody></table>`;
    }

    else if (card.type === 'shortcut') {
      body = `<div class="summary-shortcut-list">${card.content.map(item =>
        `<div class="summary-shortcut-item"><span class="summary-shortcut-scenario">${item.scenario}</span><span class="summary-shortcut-arrow">\u2192</span><span class="summary-shortcut-action">${item.action}</span></div>`
      ).join('')}</div>`;
    }

    else if (card.type === 'comparison') {
      const c = card.content;
      body = `<div class="summary-table-wrap"><table class="summary-comparison-table"><thead><tr>${c.headers.map(h =>
        `<th>${h}</th>`
      ).join('')}</tr></thead><tbody>${c.rows.map(row =>
        `<tr>${row.map((cell, i) =>
          `<td${i === 0 ? ' class="summary-row-label"' : ''}>${cell}</td>`
        ).join('')}</tr>`
      ).join('')}</tbody></table></div>`;
    }

    return `<div class="summary-card summary-${card.type}">
      <div class="summary-card-header">
        <span class="summary-card-icon">${icons[card.type]}</span>
        <span class="summary-card-badge">${labels[card.type]}</span>
      </div>
      <div class="summary-card-title">${card.title}</div>
      ${body}
    </div>`;
  }).join('');
}
