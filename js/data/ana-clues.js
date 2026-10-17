export const anaClues = [
  {
    id: 'hands',
    title: 'Hands',
    teaser: 'Raynaud\'s, swollen joints, sclerodactyly, and skin changes of the fingers',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',
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
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.41 13.02A5 5 0 0 1 22 15c0 3.87-4 7-9 7-4.08 0-8.15-.82-10.37-2.46-.43-.32-.63-.83-.62-1.36C2.12 12.72 2.63 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.1 0-1.64-.44-2-1"/><path d="M15 14a5 5 0 0 0-7.58 2"/><path d="M9.96 6.83C8.02 7.98 9.5 13 8 15"/></svg>',
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
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 13.5c-.8-1.3-3.6-1.7-4.6-.5-.6.8.4 2.2 2.2 2 1.2-.1 2-.6 2.4-1.5zM12 13.5c.8-1.3 3.6-1.7 4.6-.5.6.8-.4 2.2-2.2 2-1.2-.1-2-.6-2.4-1.5z" fill="#B71C1C" fill-opacity="0.35" stroke="none"/><circle cx="9" cy="9.5" r="0.75" fill="#006747" stroke="none"/><circle cx="15" cy="9.5" r="0.75" fill="#006747" stroke="none"/><path d="M10.5 18h3"/></svg>',
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
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8S6 3.5 12 3.5 21.5 8 21.5 8 18 12.5 12 12.5 2.5 8 2.5 8z"/><circle cx="12" cy="8" r="2.2"/><path d="M6.5 17.5c1.8-1.6 3.6-2 5.5-1 1.9-1 3.7-.6 5.5 1-1.6 2-3.4 3-5.5 3s-3.9-1-5.5-3z"/><path d="M6.5 17.5h11"/></svg>',
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
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v8"/><path d="M12 11l-2.5 2.5M12 11l2.5 2.5"/><path d="M9.5 7C6 7 4 12 4 16.5 4 19.2 5.6 20.6 8 20c1.4-.4 2-1.4 2-3V9.5"/><path d="M14.5 7C18 7 20 12 20 16.5c0 2.7-1.6 4.1-4 3.5-1.4-.4-2-1.4-2-3V9.5"/></svg>',
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
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3.5C4.8 3.5 3 7.3 3 12s1.8 8.5 5 8.5c1.6 0 2.7-1 2.7-2.6 0-1.8-1.6-3-1.6-5.9s1.6-4.1 1.6-5.9c0-1.6-1.1-2.6-2.7-2.6z"/><path d="M16 3.5c3.2 0 5 3.8 5 8.5s-1.8 8.5-5 8.5c-1.6 0-2.7-1-2.7-2.6 0-1.8 1.6-3 1.6-5.9s-1.6-4.1-1.6-5.9c0-1.6 1.1-2.6 2.7-2.6z"/></svg>',
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
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="3.8" r="2"/><path d="M10 7.2c-1.6 1.2-2.2 3-2.2 5.3V22"/><path d="M11.8 7.4c.8.9 1 2 .7 3.1 3.2.6 4.9 2.9 4.9 5.3 0 2.6-2 4.2-5.4 4.2V22"/></svg>',
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
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7.5h20M2 16.5h20"/><rect x="11" y="8.5" width="7" height="7" rx="3.5" fill="#B71C1C" fill-opacity="0.75" stroke="#B71C1C"/><path d="M4 12h4.5M7 10.5 8.5 12 7 13.5"/></svg>',
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
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#006747" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/><path d="M12 9v8" stroke="#B71C1C" stroke-width="2"/><circle cx="12" cy="18" r="1.6" fill="#B71C1C" stroke="none"/></svg>',
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
