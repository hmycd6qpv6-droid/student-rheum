export const jointsSummaries = [
  {
    type: 'top5',
    title: 'Top 5 Joint Pattern Recognition Rules',
    content: [
      'Symmetric small joint polyarthritis (MCPs, PIPs, wrists, MTPs) with morning stiffness >30 min = RA until proven otherwise',
      'Asymmetric oligoarthritis (large joints, lower limb) with dactylitis or enthesitis = think spondyloarthropathy (PsA, reactive, enteropathic)',
      'Inflammatory back pain (onset <40, improves with exercise, worse at rest, night pain) = axial SpA \u2014 request MRI SI joints',
      'DIP involvement + nail changes = PsA, not RA (RA spares the DIPs). Always examine nails, scalp, and natal cleft',
      'Acute monoarthritis = aspirate the joint BEFORE antibiotics \u2014 crystals and sepsis can coexist'
    ]
  },
  {
    type: 'cheatsheet',
    title: 'Serological Markers \u2014 Quick Reference',
    content: [
      {antibody: 'Anti-CCP', diseases: 'RA (~95% specificity). Predicts erosive disease. Can precede symptoms by years.'},
      {antibody: 'RF (IgM)', diseases: 'RA (~70\u201380% sensitivity, ~80% specificity). Also: Sj\u00f6gren\u2019s, infections, healthy elderly.'},
      {antibody: 'HLA-B27', diseases: 'AS (~90%), reactive arthritis, anterior uveitis. ~8% prevalence in Caucasians.'},
      {antibody: 'HLA-DR4', diseases: 'Seropositive RA (shared epitope). Associated with more aggressive erosive disease.'},
      {antibody: 'Anti-CarP', diseases: 'Seronegative RA (~15\u201320%). Novel marker for erosive progression.'},
      {antibody: '14-3-3 Eta', diseases: 'Early RA. Complements RF/CCP for diagnosis.'},
      {antibody: 'Serum Urate', diseases: 'Gout (but can be normal during acute flare in 40% of cases).'},
      {antibody: 'CRP', diseases: 'Non-specific. Normal in up to 40% active RA. Very high (>100) \u2192 think infection or crystal.'}
    ]
  },
  {
    type: 'shortcut',
    title: 'Pattern \u2192 Diagnosis Decision Guide',
    content: [
      {scenario: 'Symmetric MCPs + PIPs + MTPs', action: 'RA \u2014 check RF, anti-CCP. Start methotrexate within 3 months.'},
      {scenario: 'DIPs + nail pitting', action: 'PsA \u2014 examine for hidden psoriasis (scalp, natal cleft, umbilicus). CASPAR criteria.'},
      {scenario: 'Back pain <40, better with exercise', action: 'Axial SpA \u2014 MRI SI joints + HLA-B27. NSAIDs first-line (not MTX).'},
      {scenario: 'Knee + ankle, post-infection', action: 'Reactive arthritis \u2014 culture/PCR (Chlamydia, enteric pathogens). Usually self-limiting.'},
      {scenario: 'Acute hot swollen single joint', action: 'ASPIRATE. Rule out sepsis. Crystals: needle/neg biref = gout; rhomboid/pos biref = CPPD.'},
      {scenario: 'Arthritis + IBD', action: 'Enteropathic arthritis \u2014 Type 1 (mirrors gut) vs Type 2 (independent). Check for axial involvement.'},
      {scenario: 'Episodic mono/oligo, fully resolves', action: 'Palindromic rheumatism \u2014 check anti-CCP (50% convert to RA). Consider hydroxychloroquine.'},
      {scenario: 'RF+ CCP+, nodules, ILD', action: 'Extra-articular RA \u2014 aggressive seropositive disease. Higher CV risk. Intensive DMARD therapy.'}
    ]
  },
  {
    type: 'comparison',
    title: 'RA vs PsA vs AS vs Reactive Arthritis',
    content: {
      headers: ['Feature', 'RA', 'PsA', 'AS', 'Reactive'],
      rows: [
        ['Joint pattern', 'Symmetric, small joints (MCPs, PIPs, wrists)', '5 patterns: DIP, oligo, poly, axial, mutilans', 'Axial (SI joints, spine)', 'Asymmetric oligo (lower limb)'],
        ['Key markers', 'RF, anti-CCP, HLA-DR4', 'RF negative, HLA-B27 (axial)', 'HLA-B27 (~90%)', 'HLA-B27 (~50\u201380%)'],
        ['Extra-articular', 'Nodules, ILD, scleritis, Felty\u2019s', 'Psoriasis, nail pitting, dactylitis, uveitis', 'Anterior uveitis, aortitis, apical lung fibrosis', 'Conjunctivitis, urethritis, keratoderma'],
        ['DIP involvement', 'No (spares DIPs)', 'Yes (classic pattern)', 'No', 'No'],
        ['Dactylitis', 'No', 'Yes (hallmark)', 'Rare', 'Yes'],
        ['Enthesitis', 'No', 'Yes', 'Yes', 'Yes'],
        ['First-line DMARD', 'Methotrexate', 'Methotrexate (peripheral)', 'NSAIDs (MTX ineffective)', 'NSAIDs (self-limiting)'],
        ['Erosive', 'Yes (60\u201370%)', 'Yes (~50% in 2 years)', 'Syndesmophytes, ankylosis', 'Usually non-erosive']
      ]
    }
  }
];
