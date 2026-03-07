export const ancaSummaries = [
  {
    type: 'top5',
    title: '5 Things to Know About ANCA Testing',
    content: [
      '2017 consensus now recommends antigen-specific assays (PR3/MPO) as primary screen, not IF alone',
      'c-ANCA + PR3 positive is highly specific for GPA (>95% PPV in right clinical context)',
      'p-ANCA + MPO positive occurs in MPA, EGPA, drug-induced vasculitis, and some GPA',
      'Atypical p-ANCA (ANA-like on IF) can be seen in IBD, PSC, autoimmune hepatitis \u2014 not vasculitis',
      'ANCA levels can guide treatment in GPA (rising titre may predict relapse) but should never be used alone'
    ]
  },
  {
    type: 'comparison',
    title: 'GPA vs MPA vs EGPA at a Glance',
    content: {
      headers: ['Feature', 'GPA', 'MPA', 'EGPA'],
      rows: [
        ['ANCA', 'PR3/cANCA (80\u201390%)', 'MPO/pANCA (60\u201370%)', 'MPO/pANCA (~40%), often negative'],
        ['Upper airways', 'Yes (saddle nose, sinusitis, subglottic stenosis)', 'Rare', 'Yes (allergic rhinitis, polyps)'],
        ['Lungs', 'Nodules, cavitating lesions, haemorrhage', 'Pulmonary haemorrhage, ILD', 'Fleeting infiltrates, asthma'],
        ['Kidneys', 'Pauci-immune GN (common)', 'Pauci-immune GN (very common)', 'GN (uncommon, ~25%)'],
        ['Other features', 'Orbital masses, otitis media', 'Mononeuritis multiplex, purpura', 'Eosinophilia >10%, neuropathy, cardiac'],
        ['Histology', 'Granulomatous inflammation', 'Necrotising vasculitis without granulomas', 'Eosinophilic granulomatous inflammation'],
        ['Relapse rate', 'High (especially PR3+)', 'Moderate', 'Low\u2013moderate']
      ]
    }
  },
  {
    type: 'shortcut',
    title: 'ANCA Result Interpretation',
    content: [
      { scenario: 'cANCA + PR3 positive', action: 'GPA until proven otherwise; assess ENT, lungs, kidneys' },
      { scenario: 'pANCA + MPO positive', action: 'Consider MPA (renal-dominant) or EGPA (if eosinophilia/asthma)' },
      { scenario: 'pANCA positive, PR3/MPO both negative', action: 'Consider drug-induced (hydralazine, minocycline, PTU, levamisole-cocaine), IBD, autoimmune liver disease' },
      { scenario: 'ANCA negative, clinical suspicion for vasculitis', action: 'Does not exclude AAV (~10% GPA can be ANCA-negative); biopsy if possible' },
      { scenario: 'Rising ANCA titre in known GPA', action: 'Increases relapse risk but insufficient alone to change treatment; correlate clinically' },
      { scenario: 'Positive ANCA in drug-exposed patient', action: 'Check MPO, lactoferrin, elastase; consider drug-induced vasculitis' }
    ]
  },
  {
    type: 'cheatsheet',
    title: 'ANCA-Associated Antibody Quick Reference',
    content: [
      { antibody: 'PR3 (cANCA)', diseases: 'GPA (highly specific), rarely MPA or EGPA' },
      { antibody: 'MPO (pANCA)', diseases: 'MPA, EGPA, drug-induced vasculitis, pauci-immune GN' },
      { antibody: 'Lactoferrin (pANCA)', diseases: 'Drug-induced ANCA, IBD, autoimmune hepatitis' },
      { antibody: 'BPI (cANCA)', diseases: 'Cystic fibrosis, chronic infections (not vasculitis)' },
      { antibody: 'Elastase (pANCA)', diseases: 'Drug-induced vasculitis (especially cocaine/levamisole)' },
      { antibody: 'Cathepsin G', diseases: 'Drug-induced ANCA, IBD' }
    ]
  }
];
