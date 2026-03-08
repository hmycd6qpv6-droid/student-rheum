export const anaClues = [
  {
    id: 'joints-fatigue',
    title: 'Joints & Fatigue',
    teaser: 'Symmetric joint pain with fatigue and mouth ulcers',
    icon: '<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="12" r="6" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="18" x2="28" y2="36" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="22" x2="18" y2="30" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="22" x2="38" y2="30" stroke="#39ff14" stroke-width="1.5"/><circle cx="18" cy="30" r="3" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="1"/><circle cx="38" cy="30" r="3" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="1"/><line x1="28" y1="36" x2="22" y2="50" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="36" x2="34" y2="50" stroke="#39ff14" stroke-width="1.5"/><circle cx="22" cy="44" r="3" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="1"/><circle cx="34" cy="44" r="3" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="1"/></svg>',
    features: [
      'Symmetric polyarthritis — small joints of hands and feet',
      'Profound fatigue, often disproportionate to other findings',
      'Oral or nasal ulcers (usually painless)',
      'Photosensitivity — rash after sun exposure',
      'Serositis — pleurisy or pericarditis'
    ],
    suspects: [
      { disease: 'SLE', clue: 'Young woman + multi-system involvement + photosensitivity' },
      { disease: 'Drug-induced lupus', clue: 'Onset after hydralazine, isoniazid, or procainamide; spares kidneys/CNS' },
      { disease: 'MCTD', clue: 'Overlap features of SLE + SSc + myositis; puffy hands' }
    ],
    tests: [
      { antibody: 'Anti-dsDNA', reason: 'Highly specific for SLE; correlates with nephritis activity' },
      { antibody: 'Anti-Sm', reason: 'Most specific ANA antibody for SLE (but low sensitivity)' },
      { antibody: 'Anti-histone', reason: 'Positive in >95% of drug-induced lupus' },
      { antibody: 'Anti-U1 RNP', reason: 'Required for MCTD diagnosis; high titres diagnostic' }
    ],
    redFlags: [
      'Nephritis screen — check urine protein/creatinine ratio and complement (C3/C4) in all suspected SLE',
      'Anti-dsDNA titre often mirrors disease activity — rising titres may herald flare'
    ]
  },
  {
    id: 'rashes-skin',
    title: 'Rashes & Skin',
    teaser: 'Malar rash, heliotrope eyelids, or mechanic\'s hands',
    icon: '<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="16" r="10" stroke="#39ff14" stroke-width="1.5"/><path d="M20 14 Q24 18 28 14 Q32 18 36 14" stroke="#ff3366" stroke-width="1.5" fill="rgba(255,51,102,0.15)"/><rect x="22" y="10" width="2" height="2" rx="1" fill="#39ff14"/><rect x="32" y="10" width="2" height="2" rx="1" fill="#39ff14"/><line x1="28" y1="26" x2="28" y2="42" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="30" x2="16" y2="38" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="30" x2="40" y2="38" stroke="#39ff14" stroke-width="1.5"/><rect x="12" y="36" width="8" height="4" rx="1" fill="rgba(255,51,102,0.2)" stroke="#ff3366" stroke-width="0.8"/><rect x="36" y="36" width="8" height="4" rx="1" fill="rgba(255,51,102,0.2)" stroke="#ff3366" stroke-width="0.8"/></svg>',
    features: [
      'Malar (butterfly) rash — spares nasolabial folds',
      'Discoid lupus — scarring plaques on scalp, ears, face',
      'Heliotrope rash — violaceous discolouration of upper eyelids',
      'Gottron\'s papules — violaceous papules over MCPs and PIPs',
      'Mechanic\'s hands — rough, cracked skin on lateral fingers'
    ],
    suspects: [
      { disease: 'SLE', clue: 'Malar rash + photosensitivity + systemic features' },
      { disease: 'Dermatomyositis', clue: 'Heliotrope + Gottron\'s + proximal weakness' },
      { disease: 'Antisynthetase syndrome', clue: 'Mechanic\'s hands + ILD + myositis + arthritis' }
    ],
    tests: [
      { antibody: 'Anti-dsDNA', reason: 'SLE with skin involvement; monitor for systemic disease' },
      { antibody: 'Anti-Mi-2', reason: 'Classic DM with good prognosis; skin-predominant' },
      { antibody: 'Anti-TIF1-\u03b3', reason: 'DM — strongly associated with occult malignancy in adults' },
      { antibody: 'Anti-MDA5', reason: 'Amyopathic DM; associated with rapidly progressive ILD' },
      { antibody: 'Anti-Jo-1', reason: 'Antisynthetase syndrome; mechanic\'s hands + ILD' }
    ],
    redFlags: [
      'Anti-TIF1-\u03b3 positive → screen for underlying malignancy (age-appropriate cancer screening)',
      'Anti-MDA5 → high risk of rapidly progressive ILD — urgent HRCT and respiratory review'
    ]
  },
  {
    id: 'raynauds-skin',
    title: 'Raynaud\'s & Tight Skin',
    teaser: 'Raynaud\'s, sclerodactyly, and skin tightening',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M20 42 L20 18 Q20 14 24 14 L24 38" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M24 38 L24 12 Q24 8 28 8 L28 38" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M28 38 L28 10 Q28 6 32 6 L32 38" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M32 38 L32 14 Q32 10 36 10 L36 38" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M18 42 Q18 38 20 38 L36 38 Q38 38 38 42 L38 48 Q38 50 28 50 Q18 50 18 48 Z" fill="rgba(68,136,255,0.15)" stroke="#4488ff" stroke-width="1"/><line x1="20" y1="16" x2="20" y2="22" stroke="#4488ff" stroke-width="2.5" opacity="0.4"/><line x1="36" y1="12" x2="36" y2="18" stroke="white" stroke-width="2.5" opacity="0.3"/></svg>',
    features: [
      'Raynaud\'s phenomenon — triphasic colour change (white → blue → red)',
      'Sclerodactyly — skin tightening of fingers',
      'Proximal skin thickening → think diffuse SSc',
      'Telangiectasia, calcinosis, oesophageal dysmotility',
      'Digital pitting scars or ulceration'
    ],
    suspects: [
      { disease: 'Diffuse SSc', clue: 'Rapid proximal skin involvement + early organ disease (ILD, renal crisis)' },
      { disease: 'Limited SSc (CREST)', clue: 'Skin limited to distal extremities/face; PAH risk after years' },
      { disease: 'MCTD', clue: 'Raynaud\'s + puffy hands + overlap features (SLE/myositis/SSc)' }
    ],
    tests: [
      { antibody: 'Anti-Scl-70 (topoisomerase I)', reason: 'Diffuse SSc; high risk of ILD' },
      { antibody: 'Anti-centromere', reason: 'Limited SSc; associated with PAH risk' },
      { antibody: 'Anti-RNA Pol III', reason: 'Diffuse SSc; high risk of scleroderma renal crisis and malignancy' },
      { antibody: 'Anti-U1 RNP', reason: 'MCTD — high titres with overlap features' }
    ],
    redFlags: [
      'Anti-RNA Pol III → monitor BP closely — risk of scleroderma renal crisis (malignant hypertension)',
      'New Raynaud\'s in adults → nailfold capillaroscopy to differentiate primary vs secondary'
    ]
  },
  {
    id: 'muscle-weakness',
    title: 'Muscle Weakness',
    teaser: 'Proximal weakness, high CK, and dysphagia',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M12 28 Q12 20 18 18 Q22 16 24 20 L28 24 L32 20 Q34 16 38 18 Q44 20 44 28 Q44 36 38 38 Q34 40 32 36 L28 32 L24 36 Q22 40 18 38 Q12 36 12 28Z" stroke="#39ff14" stroke-width="1.5" fill="rgba(57,255,20,0.06)"/><line x1="20" y1="24" x2="20" y2="32" stroke="#ff3366" stroke-width="1.5" stroke-dasharray="2 2"/><line x1="36" y1="24" x2="36" y2="32" stroke="#ff3366" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M24 44 L28 48 L32 44" stroke="#ffaa00" stroke-width="1.5" fill="none"/><text x="28" y="28" text-anchor="middle" font-size="8" fill="#39ff14" font-weight="600">CK\u2191</text></svg>',
    features: [
      'Proximal muscle weakness — difficulty rising from chairs, climbing stairs',
      'Elevated CK (creatine kinase) — often markedly raised',
      'Dysphagia — pharyngeal muscle involvement',
      'Skin rash ± weakness (DM can be amyopathic)',
      'Arthritis and ILD may accompany myositis'
    ],
    suspects: [
      { disease: 'Dermatomyositis', clue: 'Characteristic skin rash + weakness; check for malignancy' },
      { disease: 'Polymyositis', clue: 'Proximal weakness without skin rash; diagnosis of exclusion' },
      { disease: 'Antisynthetase syndrome', clue: 'Myositis + ILD + arthritis + mechanic\'s hands + fever' },
      { disease: 'IMNM', clue: 'Severe proximal weakness, very high CK, often statin-exposed' }
    ],
    tests: [
      { antibody: 'Anti-Jo-1', reason: 'Most common antisynthetase antibody; ILD + myositis + arthritis' },
      { antibody: 'Anti-Mi-2', reason: 'Classic DM; good prognosis, good treatment response' },
      { antibody: 'Anti-SRP', reason: 'IMNM — severe, necrotising myopathy; poor response to treatment' },
      { antibody: 'Anti-HMGCR', reason: 'IMNM — statin-associated; CK remains elevated despite stopping statin' },
      { antibody: 'Anti-MDA5', reason: 'Amyopathic or hypomyopathic DM; high ILD risk' }
    ],
    redFlags: [
      'Anti-SRP and anti-HMGCR → severe necrotising myopathy; may need aggressive immunosuppression',
      'All adult DM → screen for malignancy (especially if anti-TIF1-\u03b3 positive)'
    ]
  },
  {
    id: 'dry-eyes-mouth',
    title: 'Dry Eyes & Mouth',
    teaser: 'Sicca symptoms, parotid swelling, and dental caries',
    icon: '<svg viewBox="0 0 56 56" fill="none"><ellipse cx="20" cy="20" rx="8" ry="5" stroke="#39ff14" stroke-width="1.2"/><ellipse cx="36" cy="20" rx="8" ry="5" stroke="#39ff14" stroke-width="1.2"/><circle cx="20" cy="20" r="2" fill="#39ff14" opacity="0.4"/><circle cx="36" cy="20" r="2" fill="#39ff14" opacity="0.4"/><path d="M22 32 Q28 36 34 32" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M16 28 L14 34 Q13 36 15 36 Q17 36 16 34" stroke="#4488ff" stroke-width="1" fill="rgba(68,136,255,0.2)" stroke-dasharray="2 2"/><path d="M40 28 L38 34 Q37 36 39 36 Q41 36 40 34" stroke="#4488ff" stroke-width="1" fill="rgba(68,136,255,0.2)" stroke-dasharray="2 2"/><ellipse cx="12" cy="30" rx="4" ry="3" stroke="#ffaa00" stroke-width="1" fill="rgba(255,170,0,0.1)" stroke-dasharray="2 2"/><ellipse cx="44" cy="30" rx="4" ry="3" stroke="#ffaa00" stroke-width="1" fill="rgba(255,170,0,0.1)" stroke-dasharray="2 2"/></svg>',
    features: [
      'Dry eyes (keratoconjunctivitis sicca) — gritty, burning sensation',
      'Dry mouth (xerostomia) — difficulty swallowing dry food',
      'Recurrent parotid gland swelling',
      'Accelerated dental caries',
      'Fatigue often prominent and disabling'
    ],
    suspects: [
      { disease: 'Primary Sj\u00f6gren\'s', clue: 'Sicca symptoms in isolation + positive serology; lymphoma risk' },
      { disease: 'Secondary Sj\u00f6gren\'s', clue: 'Sicca symptoms in context of another CTD (SLE, RA, SSc)' }
    ],
    tests: [
      { antibody: 'Anti-Ro/SSA', reason: 'Present in ~70% primary Sj\u00f6gren\'s; also found in SLE and neonatal lupus' },
      { antibody: 'Anti-La/SSB', reason: 'More specific for Sj\u00f6gren\'s; usually positive alongside anti-Ro' }
    ],
    redFlags: [
      'Persistent parotid swelling → consider lymphoma (40\u00d7 increased risk in Sj\u00f6gren\'s)',
      'Anti-Ro positive women of childbearing age → risk of neonatal lupus and congenital heart block'
    ]
  },
  {
    id: 'breathlessness',
    title: 'Breathlessness',
    teaser: 'ILD, serositis, or pulmonary arterial hypertension',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M20 16 Q16 24 16 32 Q16 42 22 44 Q26 46 28 40 Q30 46 34 44 Q40 42 40 32 Q40 24 36 16" stroke="#39ff14" stroke-width="1.5" fill="rgba(57,255,20,0.06)"/><path d="M22 22 Q24 26 22 30" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><path d="M26 20 Q28 26 26 32" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><path d="M30 20 Q32 26 30 32" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><path d="M34 22 Q36 26 34 30" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><line x1="28" y1="8" x2="28" y2="16" stroke="#39ff14" stroke-width="1.5"/><path d="M24 10 L28 8 L32 10" stroke="#39ff14" stroke-width="1" fill="none"/></svg>',
    features: [
      'Progressive exertional dyspnoea and dry cough → ILD',
      'Pleuritic chest pain → serositis (SLE, drug-induced lupus)',
      'Exertional dyspnoea with loud P2 → pulmonary arterial hypertension',
      'Bibasal crackles on auscultation (ILD)',
      'Disproportionate dyspnoea on exertion with clear CXR → consider PAH'
    ],
    suspects: [
      { disease: 'SSc-ILD', clue: 'SSc + progressive cough/dyspnoea; anti-Scl-70 associated' },
      { disease: 'Antisynthetase syndrome', clue: 'ILD + myositis + arthritis + fever; anti-Jo-1' },
      { disease: 'SLE serositis', clue: 'Pleurisy/pericarditis + other SLE features' },
      { disease: 'Limited SSc with PAH', clue: 'Long-standing CREST + isolated dyspnoea; anti-centromere' }
    ],
    tests: [
      { antibody: 'Anti-Scl-70', reason: 'SSc-associated ILD; warrants baseline and serial HRCT/PFTs' },
      { antibody: 'Anti-Jo-1', reason: 'Antisynthetase ILD; treatable if recognised early' },
      { antibody: 'Anti-dsDNA', reason: 'SLE serositis; check with complement levels' },
      { antibody: 'Anti-centromere', reason: 'Limited SSc — annual echo screening for PAH' }
    ],
    redFlags: [
      'Anti-MDA5 + DM → rapidly progressive ILD; can be fatal within weeks without treatment',
      'Anti-centromere + declining DLCO → screen for PAH with echocardiography annually'
    ]
  },
  {
    id: 'pregnancy-neonate',
    title: 'Pregnancy & Neonate',
    teaser: 'Recurrent pregnancy loss, congenital heart block, neonatal rash',
    icon: '<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="12" r="5" stroke="#39ff14" stroke-width="1.2"/><path d="M28 17 L28 30 Q28 36 32 40 Q36 44 36 48" stroke="#39ff14" stroke-width="1.5" fill="none"/><path d="M28 30 Q28 36 24 38" stroke="#39ff14" stroke-width="1.5" fill="none"/><ellipse cx="32" cy="34" rx="6" ry="8" stroke="#ff3366" stroke-width="1.2" fill="rgba(255,51,102,0.08)"/><circle cx="32" cy="33" r="3" stroke="#ffaa00" stroke-width="1" fill="rgba(255,170,0,0.15)"/><path d="M30 32 L32 34 L34 31" stroke="#ffaa00" stroke-width="0.8" fill="none"/></svg>',
    features: [
      'Recurrent pregnancy loss (especially 2nd/3rd trimester)',
      'Congenital heart block in the neonate',
      'Neonatal lupus rash — transient annular erythema',
      'Thrombosis (arterial or venous) with pregnancy loss → consider APS overlap',
      'Mother may be asymptomatic or have known CTD'
    ],
    suspects: [
      { disease: 'Neonatal lupus', clue: 'Anti-Ro crosses placenta → heart block, rash, cytopenias in neonate' },
      { disease: 'APS overlap', clue: 'Recurrent pregnancy loss + thrombosis; often overlaps with SLE' }
    ],
    tests: [
      { antibody: 'Anti-Ro/SSA', reason: 'Crosses placenta; risk of congenital heart block (~2% per pregnancy)' },
      { antibody: 'Anti-La/SSB', reason: 'Often co-positive with anti-Ro; modifies risk profile' }
    ],
    redFlags: [
      'Anti-Ro positive mother with previous affected child → ~18% recurrence risk for heart block',
      'All women with SLE or Sj\u00f6gren\'s should have anti-Ro/La checked before or early in pregnancy'
    ]
  }
];
