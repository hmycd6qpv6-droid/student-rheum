export const anaClues = [
  {
    id: 'hands',
    title: 'Hands',
    teaser: 'Raynaud\'s, swollen joints, sclerodactyly, and skin changes of the fingers',
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M28 48 L28 40 L22 40 Q16 40 16 34 L16 28 Q16 24 20 24 L20 14 Q20 10 22 10 L22 24" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.04)"/><path d="M22 24 L22 10 Q22 6 24.5 6 L24.5 24" stroke="#39ff14" stroke-width="1.3" fill="none"/><path d="M24.5 24 L24.5 8 Q24.5 4 27 4 L27 24" stroke="#39ff14" stroke-width="1.3" fill="none"/><path d="M27 24 L27 8 Q27 5 29.5 5 L29.5 24" stroke="#39ff14" stroke-width="1.3" fill="none"/><path d="M29.5 24 L29.5 12 Q29.5 9 32 12 L32 24 Q32 28 36 30 L38 32 Q40 34 38 36 L34 40 L28 40" stroke="#39ff14" stroke-width="1.3" fill="none"/><circle cx="22" cy="22" r="2.2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="1"/><circle cx="25" cy="22" r="2.2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="1"/><circle cx="28" cy="22" r="2.2" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="1"/></svg>',
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
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M20 44 L20 28 Q20 20 24 16 L28 12" stroke="#39ff14" stroke-width="1.5" fill="none"/><path d="M28 12 Q34 16 38 14 Q42 12 42 18 Q42 24 36 26 L32 28" stroke="#39ff14" stroke-width="1.5" fill="rgba(57,255,20,0.06)"/><path d="M32 28 L32 22 Q32 18 36 18 Q40 18 40 22 L40 26" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.06)"/><line x1="24" y1="30" x2="24" y2="42" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><line x1="28" y1="28" x2="28" y2="40" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><line x1="32" y1="30" x2="32" y2="40" stroke="#ff3366" stroke-width="1" stroke-dasharray="2 2"/><path d="M18 44 L20 44 L32 44 L34 44" stroke="#39ff14" stroke-width="1.3" fill="none"/></svg>',
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
    icon: '<svg viewBox="0 0 56 56" fill="none"><ellipse cx="28" cy="24" rx="12" ry="15" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.04)"/><circle cx="23" cy="20" r="1.5" fill="#39ff14" opacity="0.5"/><circle cx="33" cy="20" r="1.5" fill="#39ff14" opacity="0.5"/><path d="M24 28 L28 26 L32 28" stroke="#39ff14" stroke-width="1" fill="none"/><path d="M20 24 Q24 30 28 24 Q32 30 36 24" stroke="#ff3366" stroke-width="1.2" fill="rgba(255,51,102,0.15)"/><path d="M18 12 Q16 6 20 8" stroke="#39ff14" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"/><path d="M24 10 Q22 3 26 5" stroke="#39ff14" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"/><path d="M32 10 Q34 3 30 5" stroke="#39ff14" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"/><path d="M38 12 Q40 6 36 8" stroke="#39ff14" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"/></svg>',
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
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M10 20 Q10 14 18 14 Q26 14 26 20 Q26 26 18 26 Q10 26 10 20Z" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.04)"/><circle cx="18" cy="20" r="3" fill="#39ff14" opacity="0.3"/><path d="M18 26 L16 32" stroke="#39ff14" stroke-width="1" stroke-dasharray="2 2"/><line x1="15" y1="30" x2="17" y2="31" stroke="#ff3366" stroke-width="1.2"/><line x1="14" y1="32" x2="18" y2="30" stroke="#ff3366" stroke-width="1.2"/><path d="M18 40 Q28 48 38 40" stroke="#39ff14" stroke-width="1.3" fill="none"/><circle cx="24" cy="44" r="1.5" fill="rgba(255,51,102,0.4)" stroke="#ff3366" stroke-width="0.8"/><circle cx="28" cy="45" r="1.5" fill="rgba(255,51,102,0.4)" stroke="#ff3366" stroke-width="0.8"/><circle cx="32" cy="44" r="1.5" fill="rgba(255,51,102,0.4)" stroke="#ff3366" stroke-width="0.8"/></svg>',
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
    icon: '<svg viewBox="0 0 56 56" fill="none"><line x1="28" y1="6" x2="28" y2="16" stroke="#39ff14" stroke-width="1.5"/><path d="M24 16 L28 14 L32 16" stroke="#39ff14" stroke-width="1.3" fill="none"/><path d="M18 18 Q14 26 14 34 Q14 44 22 46 L28 42" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.04)"/><path d="M38 18 Q42 26 42 34 Q42 44 34 46 L28 42" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.04)"/><path d="M18 18 Q24 18 28 16 Q32 18 38 18" stroke="#39ff14" stroke-width="1.3" fill="none"/><path d="M20 26 Q22 30 20 34" stroke="#ff3366" stroke-width="0.9" stroke-dasharray="2 2"/><path d="M24 24 Q26 30 24 36" stroke="#ff3366" stroke-width="0.9" stroke-dasharray="2 2"/><path d="M32 24 Q34 30 32 36" stroke="#ff3366" stroke-width="0.9" stroke-dasharray="2 2"/><path d="M36 26 Q38 30 36 34" stroke="#ff3366" stroke-width="0.9" stroke-dasharray="2 2"/></svg>',
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
    icon: '<svg viewBox="0 0 56 56" fill="none"><path d="M14 14 Q10 20 10 28 Q10 38 16 40 Q20 42 20 34 Q20 28 16 26 Q12 24 14 18 Z" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.05)"/><path d="M42 14 Q46 20 46 28 Q46 38 40 40 Q36 42 36 34 Q36 28 40 26 Q44 24 42 18 Z" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.05)"/><line x1="16" y1="42" x2="22" y2="50" stroke="#39ff14" stroke-width="1" opacity="0.5"/><line x1="40" y1="42" x2="34" y2="50" stroke="#39ff14" stroke-width="1" opacity="0.5"/><circle cx="15" cy="28" r="2.5" fill="rgba(255,51,102,0.3)" stroke="#ff3366" stroke-width="0.9"/></svg>',
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
    icon: '<svg viewBox="0 0 56 56" fill="none"><circle cx="26" cy="10" r="5" stroke="#39ff14" stroke-width="1.3" fill="none"/><path d="M26 15 Q24 20 22 24 Q18 30 20 36 Q22 42 26 46 Q28 48 30 46 L34 42" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.04)"/><path d="M30 20 Q34 28 36 36 Q37 40 34 42" stroke="#39ff14" stroke-width="1.3" fill="none"/><circle cx="30" cy="34" r="4" stroke="#ff3366" stroke-width="1" fill="rgba(255,51,102,0.12)"/><path d="M26 34 L28 32 L30 34 L32 32 L34 34" stroke="#ff3366" stroke-width="0.8" fill="none"/></svg>',
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
    icon: '<svg viewBox="0 0 56 56" fill="none"><line x1="12" y1="14" x2="12" y2="42" stroke="#39ff14" stroke-width="1.5"/><line x1="44" y1="14" x2="44" y2="42" stroke="#39ff14" stroke-width="1.5"/><path d="M12 14 Q28 8 44 14" stroke="#39ff14" stroke-width="1.3" fill="none"/><path d="M12 42 Q28 48 44 42" stroke="#39ff14" stroke-width="1.3" fill="none"/><ellipse cx="28" cy="28" rx="8" ry="5" fill="rgba(255,51,102,0.2)" stroke="#ff3366" stroke-width="1.2"/><line x1="20" y1="28" x2="22" y2="28" stroke="#ff3366" stroke-width="1"/><line x1="34" y1="28" x2="36" y2="28" stroke="#ff3366" stroke-width="1"/></svg>',
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
    icon: '<svg viewBox="0 0 56 56" fill="none"><rect x="24" y="6" rx="4" ry="4" width="8" height="44" stroke="#39ff14" stroke-width="1.3" fill="rgba(57,255,20,0.04)"/><rect x="24" y="28" rx="2" ry="2" width="8" height="22" fill="rgba(255,51,102,0.2)" stroke="none"/><circle cx="28" cy="46" r="5" stroke="#39ff14" stroke-width="1.3" fill="rgba(255,51,102,0.25)"/><line x1="22" y1="16" x2="34" y2="16" stroke="#39ff14" stroke-width="0.8" opacity="0.4"/><line x1="22" y1="22" x2="34" y2="22" stroke="#39ff14" stroke-width="0.8" opacity="0.4"/><line x1="22" y1="28" x2="34" y2="28" stroke="#39ff14" stroke-width="0.8" opacity="0.4"/><line x1="22" y1="34" x2="34" y2="34" stroke="#39ff14" stroke-width="0.8" opacity="0.4"/></svg>',
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
