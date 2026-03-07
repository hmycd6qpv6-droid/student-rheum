export const anaPositivity = [
  // CTD group — quantitative
  { name: 'MCTD', percent: 100, percentLabel: '~100%', pattern: 'Coarse speckled', abs: ['U1-RNP (100%)'], note: 'Very high-titre; never lost at 1:160.', group: 'ctd' },
  { name: 'SLE', percent: 99, percentLabel: '~99%', pattern: 'Homogeneous, speckled, nucleolar', abs: ['dsDNA', 'Sm', 'Ro', 'La', 'RNP', 'Ribosomal P'], note: '~10% IIF-negative at 1:160 but positive on solid-phase assay.', group: 'ctd' },
  { name: 'dcSSc', percent: 88, percentLabel: '85\u201390%', pattern: 'Homogeneous, nucleolar, speckled', abs: ['Topo-I / Scl-70 (~30%)', 'RNA Pol III (~20%)'], note: 'Most positive at high titre.', group: 'ctd' },
  { name: 'lcSSc', percent: 88, percentLabel: '85\u201390%', pattern: 'Centromere', abs: ['Anti-centromere (~30%)'], note: 'High-titre, persists at \u22651:160.', group: 'ctd' },
  { name: 'SSc overlap', percent: 88, percentLabel: '85\u201390%', pattern: 'Nucleolar (homogeneous)', abs: ['PM-Scl'], note: 'As per SSc overall.', group: 'ctd' },
  { name: 'Sj\u00f6gren\u2019s', percent: 75, percentLabel: '~75%', pattern: 'Fine speckled', abs: ['Ro (~80%)', 'La (~50%)'], note: 'Isolated Ro52 may be ANA-negative on IIF.', group: 'ctd' },

  // IIM — DM subtypes
  { name: 'Mi-2', level: 'positive', levelLabel: 'Positive, high titre', pattern: 'Fine speckled', abs: ['Mi-2'], note: 'Classic DM.', group: 'dm' },
  { name: 'TIF1-\u03b3', level: 'positive', levelLabel: 'Positive', pattern: 'Fine speckled', abs: ['TIF1-\u03b3'], note: 'Cancer-associated DM.', group: 'dm' },
  { name: 'NXP-2', level: 'positive', levelLabel: 'Positive', pattern: 'Fine speckled', abs: ['NXP-2'], note: 'Calcinosis, cancer risk.', group: 'dm' },
  { name: 'SAE', level: 'positive', levelLabel: 'Positive', pattern: 'Fine speckled', abs: ['SAE'], note: 'Amyopathic \u2192 myopathy transition.', group: 'dm' },
  { name: 'MDA5', level: 'negative', levelLabel: 'Often negative', pattern: 'Cytoplasmic', abs: ['MDA5'], note: 'Cytoplasmic target \u2014 missed by standard ANA.', group: 'dm' },

  // IIM — Antisynthetase
  { name: 'Jo-1', level: 'variable', levelLabel: '~50\u201370%', pattern: 'Cytoplasmic dense fine speckled', abs: ['Jo-1'], note: 'Cytoplasmic staining may be missed if not looked for.', group: 'asys' },
  { name: 'non-Jo-1 (PL-7 etc)', level: 'negative', levelLabel: 'Often negative', pattern: 'Cytoplasmic', abs: ['PL-7', 'PL-12', 'EJ', 'OJ'], note: 'Majority ANA-negative even at 1:80.', group: 'asys' },

  // IIM — IMNM
  { name: 'SRP', level: 'negative', levelLabel: 'Usually negative', pattern: 'Cytoplasmic fine granular', abs: ['SRP'], note: 'Cytoplasmic target.', group: 'imnm' },
  { name: 'HMGCR', level: 'negative', levelLabel: 'Usually negative', pattern: 'Negative / faint cytoplasmic', abs: ['HMGCR'], note: 'Statin-associated IMNM.', group: 'imnm' }
];
