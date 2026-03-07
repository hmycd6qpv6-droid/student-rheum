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
