export const anaSummaries = [
  {
    type: 'top5',
    title: '5 Things to Know About ANA Testing',
    content: [
      'ANA is a screening test, not diagnostic \u2014 13% of healthy people are ANA positive',
      'Titre matters: \u22651:160 is clinically significant; 1:40 has poor specificity',
      'ANA pattern guides ENA reflex testing (homogeneous suggests dsDNA, speckled suggests ENA panel)',
      'A negative ANA essentially excludes SLE (sensitivity >95%) but not other CTDs with lower sensitivity',
      'HEp-2 IIF remains the gold standard substrate \u2014 ELISA ANA has lower sensitivity for some patterns'
    ]
  },
  {
    type: 'cheatsheet',
    title: 'ANA & ENA Antibody Quick Reference',
    content: [
      { antibody: 'dsDNA', diseases: 'SLE (specific, monitors activity, correlates with nephritis)' },
      { antibody: 'Sm', diseases: 'SLE (highly specific but low sensitivity ~30%)' },
      { antibody: 'U1-RNP', diseases: 'Mixed connective tissue disease (high titre), also SLE' },
      { antibody: 'Ro/SS-A', diseases: 'Sj\u00f6gren\u2019s, SLE, neonatal lupus/CHB, subacute cutaneous lupus' },
      { antibody: 'La/SS-B', diseases: 'Sj\u00f6gren\u2019s (usually with Ro), protective against nephritis in SLE' },
      { antibody: 'Scl-70 (Topo I)', diseases: 'Diffuse systemic sclerosis, ILD risk' },
      { antibody: 'Centromere (CENP)', diseases: 'Limited cutaneous SSc (CREST), pulmonary HTN risk' },
      { antibody: 'RNA Pol III', diseases: 'Diffuse SSc, scleroderma renal crisis, cancer risk' },
      { antibody: 'Jo-1', diseases: 'Antisynthetase syndrome (myositis, ILD, mechanic\u2019s hands, Raynaud\u2019s)' },
      { antibody: 'Mi-2', diseases: 'Dermatomyositis (classic skin findings, good prognosis)' },
      { antibody: 'MDA5', diseases: 'Amyopathic dermatomyositis, rapidly progressive ILD' },
      { antibody: 'TIF1-gamma', diseases: 'Dermatomyositis with cancer association (adults)' },
      { antibody: 'PM-Scl', diseases: 'Overlap myositis-scleroderma' }
    ]
  },
  {
    type: 'shortcut',
    title: 'ANA Interpretation Decision Guide',
    content: [
      { scenario: 'ANA +ve (\u22651:160), homogeneous pattern', action: 'Request dsDNA, consider SLE' },
      { scenario: 'ANA +ve, speckled pattern', action: 'Request ENA panel (Sm, RNP, Ro, La, Scl-70, Jo-1)' },
      { scenario: 'ANA +ve, nucleolar pattern', action: 'Think scleroderma spectrum (anti-Th/To, fibrillarin, PM-Scl)' },
      { scenario: 'ANA +ve, centromere pattern', action: 'Limited SSc (no ENA panel needed \u2014 CENP is the antigen)' },
      { scenario: 'ANA +ve, ENA negative, titre <1:160', action: 'Likely non-specific; repeat if clinical suspicion persists' },
      { scenario: 'ANA negative, strong clinical suspicion', action: 'Check Ro/SS-A separately (can be ANA-negative), consider myositis-specific antibodies' }
    ]
  },
  {
    type: 'top5',
    title: '5 Myositis Antibody Pearls',
    content: [
      'Myositis-specific antibodies (MSAs) are mutually exclusive \u2014 a patient has one or none',
      'Anti-Jo-1 is the commonest MSA but is present in only ~20\u201330% of inflammatory myopathy',
      'Anti-MDA5 may have little/no muscle disease but life-threatening ILD \u2014 \u201camyopathic dermatomyositis\u201d',
      'Anti-TIF1-gamma and anti-NXP2 in adult dermatomyositis \u2192 screen for underlying malignancy',
      'Myositis-associated antibodies (anti-PM-Scl, anti-Ku, anti-Ro) suggest overlap syndromes and don\u2019t exclude other MSAs'
    ]
  }
];
