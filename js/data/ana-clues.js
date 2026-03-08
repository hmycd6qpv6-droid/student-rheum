export const anaClues = [
  {
    id: 'hands',
    title: 'Hands',
    teaser: 'Raynaud\'s, swollen joints, sclerodactyly, and skin changes of the fingers',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M20 42 L20 18 Q20 14 24 14 L24 38" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M24 38 L24 12 Q24 8 28 8 L28 38" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M28 38 L28 10 Q28 6 32 6 L32 38" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M32 38 L32 14 Q32 10 36 10 L36 38" stroke="#39ff14" stroke-width="1.2" fill="none"/><path d="M18 42 Q18 38 20 38 L36 38 Q38 38 38 42 L38 48 Q38 50 28 50 Q18 50 18 48 Z" fill="rgba(57,255,20,0.06)" stroke="#39ff14" stroke-width="1"/><circle cx="24" cy="30" r="2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="0.8"/><circle cx="28" cy="28" r="2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="0.8"/><circle cx="32" cy="30" r="2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="0.8"/></svg>',
    features: [
      'Raynaud\'s phenomenon \u2014 triphasic colour change (white \u2192 blue \u2192 red)',
      'Sclerodactyly \u2014 skin tightening of fingers with loss of skin creases',
      'Symmetric joint swelling of MCPs and PIPs',
      'Gottron\'s papules \u2014 violaceous papules over MCPs and PIPs',
      'Mechanic\'s hands \u2014 rough, cracked skin on lateral fingers',
      'Digital pitting scars or ulceration',
      'Puffy hands \u2014 early sign of MCTD or diffuse SSc'
    ],
    suspects: [
      { disease: 'SSc (scleroderma)', clue: 'Raynaud\'s + sclerodactyly + digital ulcers; check nailfold capillaroscopy' },
      { disease: 'SLE', clue: 'Symmetric MCP/PIP arthritis + systemic features; usually non-erosive' },
      { disease: 'Dermatomyositis', clue: 'Gottron\'s papules over knuckles \u00b1 proximal weakness' },
      { disease: 'Antisynthetase syndrome', clue: 'Mechanic\'s hands + ILD + myositis + arthritis' },
      { disease: 'MCTD', clue: 'Puffy hands + Raynaud\'s + overlap features (SLE/myositis/SSc)' }
    ],
    tests: [
      { antibody: 'Anti-Scl-70 (topoisomerase I)', reason: 'Diffuse SSc; high risk of ILD' },
      { antibody: 'Anti-centromere', reason: 'Limited SSc (CREST); associated with PAH risk' },
      { antibody: 'Anti-RNA Pol III', reason: 'Diffuse SSc; risk of renal crisis and malignancy' },
      { antibody: 'Anti-Mi-2', reason: 'Classic DM with Gottron\'s; good prognosis' },
      { antibody: 'Anti-Jo-1', reason: 'Antisynthetase syndrome; mechanic\'s hands + ILD' },
      { antibody: 'Anti-U1 RNP', reason: 'Required for MCTD diagnosis; high titres diagnostic' }
    ],
    redFlags: [
      'New Raynaud\'s in adults \u2192 nailfold capillaroscopy to differentiate primary vs secondary',
      'Anti-RNA Pol III \u2192 monitor BP closely \u2014 risk of scleroderma renal crisis'
    ]
  },
  {
    id: 'muscles',
    title: 'Muscles',
    teaser: 'Proximal weakness, elevated CK, and dysphagia',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M12 28 Q12 20 18 18 Q22 16 24 20 L28 24 L32 20 Q34 16 38 18 Q44 20 44 28 Q44 36 38 38 Q34 40 32 36 L28 32 L24 36 Q22 40 18 38 Q12 36 12 28Z" stroke="#39ff14" stroke-width="1.5" fill="rgba(57,255,20,0.06)"/><line x1="20" y1="24" x2="20" y2="32" stroke="#ff3366" stroke-width="1.5" stroke-dasharray="2 2"/><line x1="36" y1="24" x2="36" y2="32" stroke="#ff3366" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M24 44 L28 48 L32 44" stroke="#ffaa00" stroke-width="1.5" fill="none"/><text x="28" y="28" text-anchor="middle" font-size="8" fill="#39ff14" font-weight="600">CK\u2191</text></svg>',
    features: [
      'Proximal muscle weakness \u2014 difficulty rising from chairs, climbing stairs',
      'Elevated CK (creatine kinase) \u2014 often markedly raised',
      'Dysphagia \u2014 pharyngeal muscle involvement',
      'Skin rash \u00b1 weakness (DM can be amyopathic)',
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
      { antibody: 'Anti-SRP', reason: 'IMNM \u2014 severe, necrotising myopathy; poor response to treatment' },
      { antibody: 'Anti-HMGCR', reason: 'IMNM \u2014 statin-associated; CK remains elevated despite stopping statin' },
      { antibody: 'Anti-MDA5', reason: 'Amyopathic or hypomyopathic DM; high ILD risk' }
    ],
    redFlags: [
      'Anti-SRP and anti-HMGCR \u2192 severe necrotising myopathy; may need aggressive immunosuppression',
      'All adult DM \u2192 screen for malignancy (especially if anti-TIF1-\u03b3 positive)'
    ]
  },
  {
    id: 'skin-hair',
    title: 'Skin & Hair',
    teaser: 'Malar rash, discoid plaques, photosensitivity, and alopecia',
    icon: '<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="18" r="10" stroke="#39ff14" stroke-width="1.5"/><path d="M20 16 Q24 20 28 16 Q32 20 36 16" stroke="#ff3366" stroke-width="1.5" fill="rgba(255,51,102,0.15)"/><rect x="23" y="12" width="2" height="2" rx="1" fill="#39ff14"/><rect x="31" y="12" width="2" height="2" rx="1" fill="#39ff14"/><path d="M18 10 Q20 4 24 6" stroke="#ffaa00" stroke-width="1" stroke-dasharray="2 2"/><path d="M38 10 Q36 4 32 6" stroke="#ffaa00" stroke-width="1" stroke-dasharray="2 2"/><path d="M22 8 Q26 2 30 5" stroke="#ffaa00" stroke-width="1" stroke-dasharray="2 2"/><line x1="28" y1="28" x2="28" y2="44" stroke="#39ff14" stroke-width="1.5"/><path d="M22 34 L34 34 Q36 34 36 38 L36 44 Q36 46 34 46 L22 46 Q20 46 20 44 L20 38 Q20 34 22 34Z" stroke="#39ff14" stroke-width="1" fill="rgba(255,51,102,0.06)"/></svg>',
    features: [
      'Malar (butterfly) rash \u2014 spares nasolabial folds',
      'Discoid lupus \u2014 scarring plaques on scalp, ears, face',
      'Photosensitivity \u2014 rash after sun exposure',
      'Alopecia \u2014 diffuse (SLE) or scarring (discoid)',
      'Heliotrope rash \u2014 violaceous discolouration of upper eyelids',
      'Proximal skin thickening \u2192 think diffuse SSc'
    ],
    suspects: [
      { disease: 'SLE', clue: 'Malar rash + photosensitivity + alopecia + systemic features' },
      { disease: 'Discoid lupus', clue: 'Scarring plaques on face/scalp; may not progress to systemic SLE' },
      { disease: 'Dermatomyositis', clue: 'Heliotrope rash + proximal weakness; skin may precede myositis' },
      { disease: 'Diffuse SSc', clue: 'Rapid proximal skin thickening beyond fingers; early organ involvement' }
    ],
    tests: [
      { antibody: 'Anti-dsDNA', reason: 'Highly specific for SLE; correlates with disease activity' },
      { antibody: 'Anti-Sm', reason: 'Most specific ANA antibody for SLE (low sensitivity)' },
      { antibody: 'Anti-Ro/SSA', reason: 'Subacute cutaneous lupus; photosensitive rash; neonatal lupus risk' },
      { antibody: 'Anti-TIF1-\u03b3', reason: 'DM \u2014 strongly associated with occult malignancy in adults' },
      { antibody: 'Anti-MDA5', reason: 'Amyopathic DM; associated with rapidly progressive ILD' },
      { antibody: 'Anti-Scl-70', reason: 'Diffuse SSc with proximal skin involvement; ILD risk' }
    ],
    redFlags: [
      'Anti-TIF1-\u03b3 positive \u2192 screen for underlying malignancy (age-appropriate cancer screening)',
      'Anti-MDA5 \u2192 high risk of rapidly progressive ILD \u2014 urgent HRCT and respiratory review'
    ]
  },
  {
    id: 'eyes-mouth',
    title: 'Eyes & Mouth',
    teaser: 'Sicca symptoms, oral ulcers, and parotid swelling',
    icon: '<svg viewBox="0 0 56 56" fill="none"><ellipse cx="20" cy="18" rx="8" ry="5" stroke="#39ff14" stroke-width="1.2"/><ellipse cx="36" cy="18" rx="8" ry="5" stroke="#39ff14" stroke-width="1.2"/><circle cx="20" cy="18" r="2" fill="#39ff14" opacity="0.4"/><circle cx="36" cy="18" r="2" fill="#39ff14" opacity="0.4"/><path d="M20 32 Q28 38 36 32" stroke="#39ff14" stroke-width="1.2" fill="none"/><circle cx="26" cy="36" r="1.5" fill="rgba(255,51,102,0.4)" stroke="#ff3366" stroke-width="0.6"/><circle cx="32" cy="37" r="1.5" fill="rgba(255,51,102,0.4)" stroke="#ff3366" stroke-width="0.6"/><path d="M14 26 L12 32 Q11 34 13 34 Q15 34 14 32" stroke="#4488ff" stroke-width="1" fill="rgba(68,136,255,0.2)" stroke-dasharray="2 2"/><path d="M42 26 L40 32 Q39 34 41 34 Q43 34 42 32" stroke="#4488ff" stroke-width="1" fill="rgba(68,136,255,0.2)" stroke-dasharray="2 2"/><ellipse cx="12" cy="28" rx="4" ry="3" stroke="#ffaa00" stroke-width="1" fill="rgba(255,170,0,0.1)" stroke-dasharray="2 2"/><ellipse cx="44" cy="28" rx="4" ry="3" stroke="#ffaa00" stroke-width="1" fill="rgba(255,170,0,0.1)" stroke-dasharray="2 2"/></svg>',
    features: [
      'Dry eyes (keratoconjunctivitis sicca) \u2014 gritty, burning sensation',
      'Dry mouth (xerostomia) \u2014 difficulty swallowing dry food',
      'Oral or nasal ulcers (usually painless in SLE)',
      'Recurrent parotid gland swelling',
      'Accelerated dental caries'
    ],
    suspects: [
      { disease: 'Primary Sj\u00f6gren\'s', clue: 'Sicca symptoms in isolation + positive serology; lymphoma risk' },
      { disease: 'Secondary Sj\u00f6gren\'s', clue: 'Sicca symptoms in context of another CTD (SLE, RA, SSc)' },
      { disease: 'SLE', clue: 'Painless oral ulcers + other systemic lupus features' }
    ],
    tests: [
      { antibody: 'Anti-Ro/SSA', reason: 'Present in ~70% primary Sj\u00f6gren\'s; also found in SLE and neonatal lupus' },
      { antibody: 'Anti-La/SSB', reason: 'More specific for Sj\u00f6gren\'s; usually positive alongside anti-Ro' },
      { antibody: 'Anti-dsDNA', reason: 'If oral ulcers with multi-system disease \u2192 consider SLE' }
    ],
    redFlags: [
      'Persistent parotid swelling \u2192 consider lymphoma (40\u00d7 increased risk in Sj\u00f6gren\'s)',
      'Anti-Ro positive women of childbearing age \u2192 risk of neonatal lupus and congenital heart block'
    ]
  },
  {
    id: 'chest',
    title: 'Chest',
    teaser: 'ILD, serositis, and pulmonary arterial hypertension',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M20 16 Q16 24 16 32 Q16 42 22 44 Q26 46 28 40 Q30 46 34 44 Q40 42 40 32 Q40 24 36 16" stroke="#39ff14" stroke-width="1.5" fill="rgba(57,255,20,0.06)"/><path d="M22 22 Q24 26 22 30" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><path d="M26 20 Q28 26 26 32" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><path d="M30 20 Q32 26 30 32" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><path d="M34 22 Q36 26 34 30" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><line x1="28" y1="8" x2="28" y2="16" stroke="#39ff14" stroke-width="1.5"/><path d="M24 10 L28 8 L32 10" stroke="#39ff14" stroke-width="1" fill="none"/></svg>',
    features: [
      'Progressive exertional dyspnoea and dry cough \u2192 ILD',
      'Pleuritic chest pain \u2192 serositis (SLE, drug-induced lupus)',
      'Pericarditis \u2014 chest pain relieved by leaning forward',
      'Exertional dyspnoea with loud P2 \u2192 pulmonary arterial hypertension',
      'Bibasal crackles on auscultation (ILD)'
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
      { antibody: 'Anti-MDA5', reason: 'Rapidly progressive ILD in DM; can be fatal without treatment' },
      { antibody: 'Anti-dsDNA', reason: 'SLE serositis; check with complement levels' },
      { antibody: 'Anti-centromere', reason: 'Limited SSc \u2014 annual echo screening for PAH' }
    ],
    redFlags: [
      'Anti-MDA5 + DM \u2192 rapidly progressive ILD; can be fatal within weeks without treatment',
      'Anti-centromere + declining DLCO \u2192 screen for PAH with echocardiography annually'
    ]
  },
  {
    id: 'kidneys-gut',
    title: 'Kidneys & Gut',
    teaser: 'Lupus nephritis, scleroderma renal crisis, and GI dysmotility',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M16 18 Q12 22 12 28 Q12 36 16 40 Q20 44 20 36 Q20 30 16 28 Q14 26 16 22 Z" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.06)"/><path d="M40 18 Q44 22 44 28 Q44 36 40 40 Q36 44 36 36 Q36 30 40 28 Q42 26 40 22 Z" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.06)"/><path d="M22 28 Q28 32 34 28" stroke="#ff3366" stroke-width="1.2" fill="none"/><path d="M22 32 Q28 36 34 32" stroke="#ff3366" stroke-width="1.2" fill="none"/><path d="M28 20 L28 46" stroke="#ffaa00" stroke-width="1.2" stroke-dasharray="3 2"/><circle cx="28" cy="24" r="2" fill="rgba(255,170,0,0.2)" stroke="#ffaa00" stroke-width="0.8"/><circle cx="28" cy="42" r="2" fill="rgba(255,170,0,0.2)" stroke="#ffaa00" stroke-width="0.8"/></svg>',
    features: [
      'Proteinuria and haematuria \u2192 lupus nephritis',
      'Acute hypertension with renal impairment \u2192 scleroderma renal crisis',
      'Oesophageal dysmotility \u2014 dysphagia and reflux (SSc)',
      'Gastric antral vascular ectasia (watermelon stomach)',
      'Small bowel dysmotility \u2014 bloating, pseudo-obstruction (SSc)'
    ],
    suspects: [
      { disease: 'Lupus nephritis', clue: 'SLE + proteinuria/active sediment; anti-dsDNA rises, complement falls' },
      { disease: 'Scleroderma renal crisis', clue: 'Diffuse SSc + sudden hypertension + AKI; anti-RNA Pol III' },
      { disease: 'SSc GI disease', clue: 'Reflux, dysphagia, early satiety, bloating \u2014 up to 90% of SSc patients affected' }
    ],
    tests: [
      { antibody: 'Anti-dsDNA', reason: 'Correlates with lupus nephritis activity; rising titre may herald renal flare' },
      { antibody: 'Complement (C3/C4)', reason: 'Consumed in active lupus nephritis; monitor alongside anti-dsDNA' },
      { antibody: 'Anti-RNA Pol III', reason: 'Diffuse SSc; highest risk for scleroderma renal crisis' },
      { antibody: 'Anti-Scl-70', reason: 'Diffuse SSc \u2014 GI dysmotility common; also ILD risk' }
    ],
    redFlags: [
      'Anti-dsDNA rising + C3/C4 falling \u2192 impending lupus nephritis flare \u2014 check urine protein/creatinine ratio',
      'Anti-RNA Pol III \u2192 monitor BP at every visit \u2014 scleroderma renal crisis can present de novo with malignant hypertension'
    ]
  },
  {
    id: 'obstetric',
    title: 'Obstetric',
    teaser: 'Recurrent pregnancy loss, congenital heart block, and neonatal rash',
    icon: '<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="12" r="5" stroke="#39ff14" stroke-width="1.2"/><path d="M28 17 L28 30 Q28 36 32 40 Q36 44 36 48" stroke="#39ff14" stroke-width="1.5" fill="none"/><path d="M28 30 Q28 36 24 38" stroke="#39ff14" stroke-width="1.5" fill="none"/><ellipse cx="32" cy="34" rx="6" ry="8" stroke="#ff3366" stroke-width="1.2" fill="rgba(255,51,102,0.08)"/><circle cx="32" cy="33" r="3" stroke="#ffaa00" stroke-width="1" fill="rgba(255,170,0,0.15)"/><path d="M30 32 L32 34 L34 31" stroke="#ffaa00" stroke-width="0.8" fill="none"/></svg>',
    features: [
      'Recurrent pregnancy loss (especially 2nd/3rd trimester)',
      'Congenital heart block in the neonate',
      'Neonatal lupus rash \u2014 transient annular erythema',
      'Thrombosis (arterial or venous) with pregnancy loss \u2192 consider APS overlap',
      'Mother may be asymptomatic or have known CTD'
    ],
    suspects: [
      { disease: 'Neonatal lupus', clue: 'Anti-Ro crosses placenta \u2192 heart block, rash, cytopenias in neonate' },
      { disease: 'APS overlap', clue: 'Recurrent pregnancy loss + thrombosis; often overlaps with SLE' }
    ],
    tests: [
      { antibody: 'Anti-Ro/SSA', reason: 'Crosses placenta; risk of congenital heart block (~2% per pregnancy)' },
      { antibody: 'Anti-La/SSB', reason: 'Often co-positive with anti-Ro; modifies risk profile' },
      { antibody: 'Antiphospholipid antibodies', reason: 'aCL, anti-\u03b22GP1, lupus anticoagulant \u2014 check if recurrent pregnancy loss' }
    ],
    redFlags: [
      'Anti-Ro positive mother with previous affected child \u2192 ~18% recurrence risk for heart block',
      'All women with SLE or Sj\u00f6gren\'s should have anti-Ro/La checked before or early in pregnancy'
    ]
  },
  {
    id: 'blood-clots',
    title: 'Blood Clots',
    teaser: 'DVT/PE, arterial thrombosis, livedo reticularis, and the APS antibody panel',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M28 6 Q32 6 32 10 L32 16 Q32 18 30 20 Q28 22 28 26 Q28 22 26 20 Q24 18 24 16 L24 10 Q24 6 28 6Z" fill="rgba(255,51,102,0.2)" stroke="#ff3366" stroke-width="1.2"/><path d="M20 28 Q16 30 14 34 Q12 38 16 40 Q20 42 22 38" stroke="#4488ff" stroke-width="1.2" fill="none"/><path d="M36 28 Q40 30 42 34 Q44 38 40 40 Q36 42 34 38" stroke="#4488ff" stroke-width="1.2" fill="none"/><path d="M22 38 Q24 42 28 44 Q32 42 34 38" stroke="#4488ff" stroke-width="1.2" fill="none"/><circle cx="18" cy="34" r="2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="0.8"/><circle cx="38" cy="34" r="2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="0.8"/><circle cx="28" cy="44" r="2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="0.8"/><path d="M22 48 Q28 52 34 48" stroke="#ffaa00" stroke-width="1" stroke-dasharray="2 2" fill="none"/></svg>',
    features: [
      'Deep vein thrombosis or pulmonary embolism (especially unprovoked or recurrent)',
      'Arterial thrombosis \u2014 stroke or TIA in a young patient',
      'Livedo reticularis \u2014 mottled, net-like purplish skin pattern',
      'Thrombocytopenia (paradoxically pro-thrombotic in APS)',
      'Recurrent pregnancy morbidity (see Obstetric card)'
    ],
    suspects: [
      { disease: 'Primary APS', clue: 'Thrombosis + pregnancy morbidity without underlying CTD' },
      { disease: 'SLE-associated APS', clue: 'APS criteria met in patient with known SLE; occurs in ~30-40% of SLE' },
      { disease: 'Catastrophic APS', clue: 'Multi-organ thrombosis over days; high mortality; rare' }
    ],
    tests: [
      { antibody: 'Anticardiolipin (aCL) IgG/IgM', reason: 'One of three criteria antibodies; must be persistently positive (>12 weeks apart)' },
      { antibody: 'Anti-\u03b22-glycoprotein I IgG/IgM', reason: 'Most specific APS antibody; independently thrombogenic' },
      { antibody: 'Lupus anticoagulant', reason: 'Functional coagulation assay; strongest predictor of thrombosis' },
      { antibody: 'Anti-dsDNA', reason: 'Check for underlying SLE if APS antibodies positive' }
    ],
    redFlags: [
      'Triple positivity (aCL + anti-\u03b22GP1 + lupus anticoagulant) \u2192 highest thrombotic risk; lifelong anticoagulation',
      'Young stroke/DVT with no obvious risk factors \u2192 always check antiphospholipid antibodies'
    ]
  },
  {
    id: 'constitutional',
    title: 'Constitutional',
    teaser: 'Fatigue, fever, weight loss, and lymphadenopathy',
    icon: '<svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="14" r="6" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="20" x2="28" y2="40" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="26" x2="18" y2="34" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="26" x2="38" y2="34" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="40" x2="22" y2="52" stroke="#39ff14" stroke-width="1.5"/><line x1="28" y1="40" x2="34" y2="52" stroke="#39ff14" stroke-width="1.5"/><path d="M22 10 L18 6" stroke="#ffaa00" stroke-width="1.2"/><path d="M34 10 L38 6" stroke="#ffaa00" stroke-width="1.2"/><path d="M28 8 L28 3" stroke="#ffaa00" stroke-width="1.2"/><circle cx="16" cy="22" r="2.5" fill="rgba(255,170,0,0.15)" stroke="#ffaa00" stroke-width="0.8"/><circle cx="40" cy="22" r="2.5" fill="rgba(255,170,0,0.15)" stroke="#ffaa00" stroke-width="0.8"/></svg>',
    features: [
      'Profound fatigue \u2014 often disproportionate to other findings',
      'Low-grade fever without infection',
      'Unexplained weight loss',
      'Lymphadenopathy \u2014 generalised or regional',
      'General malaise with multi-system symptoms \u2192 think CTD'
    ],
    suspects: [
      { disease: 'SLE', clue: 'Constitutional symptoms + any combination of skin, joints, serositis, cytopenias' },
      { disease: 'Sj\u00f6gren\'s', clue: 'Fatigue often prominent and disabling; \u00b1 sicca symptoms' },
      { disease: 'Myositis', clue: 'Fatigue with subtle proximal weakness; check CK' },
      { disease: 'Adult-onset Still\'s', clue: 'High spiking fever + salmon-coloured rash + arthritis + ferritin \u2191\u2191; ANA usually negative' }
    ],
    tests: [
      { antibody: 'ANA', reason: 'Screening test; positive in most CTDs but not specific \u2014 pattern and titre guide further testing' },
      { antibody: 'Anti-dsDNA', reason: 'If SLE suspected; rising titres may indicate active disease' },
      { antibody: 'Anti-Ro/SSA', reason: 'Sj\u00f6gren\'s or SLE; can be positive even if ANA negative' },
      { antibody: 'Complement (C3/C4)', reason: 'Low in active SLE; helps distinguish flare from infection' }
    ],
    redFlags: [
      'Persistent lymphadenopathy in Sj\u00f6gren\'s \u2192 consider lymphoma (40\u00d7 increased risk)',
      'Constitutional symptoms + cytopenias + multi-organ involvement \u2192 urgent rheumatology referral'
    ]
  }
];
