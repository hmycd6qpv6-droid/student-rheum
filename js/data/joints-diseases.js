export const jointsDiseases = [
  {
    name:"Seropositive RA",aka:"RF+ and/or CCP+ Rheumatoid Arthritis",nameClass:"disease-name-joints",
    abs:[{n:"Anti-CCP",spec:"high"},{n:"RF (IgM)",spec:"mod"},{n:"HLA-DR4 / Shared Epitope",spec:"assoc"}],
    features:["Symmetric polyarthritis (MCPs, PIPs, wrists, MTPs)","Morning stiffness >30 min","Rheumatoid nodules","Erosions on X-ray","Elevated ESR/CRP"],
    note:"~70–80% of RA. Anti-CCP positive = higher erosion risk and poorer prognosis. Double-positive (RF+ CCP+) = strongest predictor of persistent, erosive disease. 2010 ACR/EULAR criteria include serology.",
    hint:"RF+, anti-CCP+; symmetric MCPs/PIPs/wrists; morning stiffness >30 min; erosive course",
    patterns:[
      {size:"small",symmetry:"symmetric",count:"poly",limb:"upper"}
    ]
  },
  {
    name:"Seronegative RA",aka:"RF− / CCP− Rheumatoid Arthritis",nameClass:"disease-name-joints",
    abs:[{n:"Anti-CarP",spec:"assoc"}],
    features:["Symmetric polyarthritis","May have less erosive course","Diagnosis of exclusion (rule out PsA, SpA)","Can still be erosive"],
    note:"~20–30% of RA is seronegative. Must exclude PsA, CPPD, and SpA mimics. Anti-CarP may help identify truly inflammatory seronegative disease. Clinical diagnosis relies on pattern recognition, synovitis on imaging, and response to DMARDs.",
    hint:"RF−/CCP−; symmetric polyarthritis; diagnosis of exclusion — rule out PsA and SpA mimics",
    patterns:[
      {size:"small",symmetry:"symmetric",count:"poly",limb:"upper"}
    ]
  },
  {
    name:"Ankylosing Spondylitis",aka:"AS / Axial SpA (radiographic)",nameClass:"disease-name-joints",
    abs:[{n:"HLA-B27",spec:"high"},{n:"CRP/ESR elevated",spec:"mod"}],
    features:["Inflammatory back pain (onset <40, improves with exercise)","Sacroiliitis (bilateral)","Reduced spinal mobility (Schober's test)","Enthesitis","Anterior uveitis","Aortitis (rare)"],
    note:"HLA-B27 positive in ~90%. Modified New York criteria require radiographic sacroiliitis. MRI sacroiliitis (bone marrow oedema) allows earlier diagnosis as non-radiographic axSpA. TNF-inhibitors and IL-17 inhibitors are effective.",
    hint:"HLA-B27+; inflammatory back pain improves with exercise; bilateral sacroiliitis; enthesitis",
    patterns:[
      {size:"large",symmetry:"symmetric",count:"oligo",limb:"axial"}
    ]
  },
  {
    name:"Psoriatic Arthritis",aka:"PsA",nameClass:"disease-name-joints",
    abs:[{n:"RF usually negative",spec:"assoc"},{n:"HLA-B27 (axial PsA)",spec:"mod"}],
    features:["5 patterns: DIP, oligoarticular, polyarticular, axial, mutilans","Dactylitis ('sausage digit')","Enthesitis","Nail pitting/onycholysis","Psoriatic skin plaques"],
    note:"RF negative in ~90%. CASPAR criteria. Skin psoriasis precedes arthritis in ~75%, but arthritis can present first (psoriasis sine arthritis). Check nails, scalp, natal cleft, and umbilicus for hidden psoriasis. PsA is erosive in ~50% within 2 years.",
    hint:"RF− usually; dactylitis; enthesitis; nail pitting/onycholysis; check scalp/natal cleft for psoriasis",
    patterns:[
      {size:"small",symmetry:"asymmetric",count:"oligo",limb:"upper"},
      {size:"large",symmetry:"asymmetric",count:"oligo",limb:"lower"},
      {size:"small",symmetry:"symmetric",count:"poly",limb:"upper"},
      {size:"large",symmetry:"symmetric",count:"oligo",limb:"axial"}
    ]
  },
  {
    name:"Reactive Arthritis",aka:"Formerly Reiter's syndrome",nameClass:"disease-name-joints",
    abs:[{n:"HLA-B27",spec:"mod"}],
    features:["Asymmetric oligoarthritis (lower limb)","Preceding GU or GI infection (1–4 weeks)","Conjunctivitis/anterior uveitis","Circinate balanitis","Keratoderma blennorrhagicum","Enthesitis"],
    note:"Classic triad: can't see (eyes), can't pee (urethritis), can't climb a tree (arthritis). HLA-B27 positive in ~50–80%. Self-limiting in most but ~15–20% develop chronic SpA. Culture/PCR urethral or stool for Chlamydia, Salmonella, Shigella, Yersinia, Campylobacter.",
    hint:"Preceding GI/GU infection 1–4 wks; asymmetric lower limb oligo; can't see/pee/climb a tree",
    patterns:[
      {size:"large",symmetry:"asymmetric",count:"oligo",limb:"lower"}
    ]
  },
  {
    name:"Enteropathic Arthritis",aka:"IBD-associated Arthritis",nameClass:"disease-name-joints",
    abs:[{n:"HLA-B27 (axial)",spec:"mod"},{n:"Faecal calprotectin elevated",spec:"assoc"}],
    features:["Type 1: pauciarticular, parallels IBD activity","Type 2: polyarticular, independent of IBD","Axial involvement (sacroiliitis)","Erythema nodosum","Pyoderma gangrenosum"],
    note:"Affects ~20% of IBD patients. Type 1 (oligoarticular) mirrors gut inflammation and resolves with IBD treatment. Type 2 (polyarticular) and axial disease run independently. Screen for subclinical IBD (faecal calprotectin, ileocolonoscopy) in seronegative inflammatory arthritis.",
    hint:"IBD-associated; Type 1 (oligo, lower limb) parallels gut activity; Type 2 (poly) runs independently",
    patterns:[
      {size:"large",symmetry:"asymmetric",count:"oligo",limb:"lower"},
      {size:"small",symmetry:"symmetric",count:"poly",limb:"either"},
      {size:"large",symmetry:"symmetric",count:"oligo",limb:"axial"}
    ]
  },
  {
    name:"Gout",aka:"Crystal Arthropathy — MSU",nameClass:"disease-name-joints",
    abs:[{n:"Serum urate (often elevated)",spec:"mod"},{n:"Synovial fluid MSU crystals",spec:"high"}],
    features:["Acute monoarthritis (1st MTP classic)","Podagra","Tophi (chronic)","Renal stones (urate)","Flares triggered by dietary excess, alcohol, diuretics"],
    note:"Serum urate can be NORMAL during acute flare (up to 40% of cases). Gold standard = MSU crystals in synovial fluid (needle-shaped, negatively birefringent). Dual-energy CT can detect urate deposits non-invasively. Treat-to-target urate <360 µmol/L (or <300 if tophi).",
    hint:"Serum urate can be normal acutely; MSU crystals needle-shaped, negatively birefringent; 1st MTP",
    patterns:[
      {size:"large",symmetry:"asymmetric",count:"mono",limb:"lower"}
    ]
  },
  {
    name:"CPPD",aka:"Calcium Pyrophosphate Deposition Disease (Pseudogout)",nameClass:"disease-name-joints",
    abs:[{n:"Synovial fluid CPP crystals",spec:"high"},{n:"Normal serum urate",spec:"assoc"}],
    features:["Acute monoarthritis (knee, wrist most common)","Chondrocalcinosis on X-ray","Can mimic RA, OA, or septic arthritis","Associated with metabolic diseases"],
    note:"CPP crystals: rhomboid/rectangular, weakly positively birefringent. Chondrocalcinosis on X-ray is a clue but not always present. Associations: haemochromatosis, hyperparathyroidism, hypomagnesaemia, hypophosphataemia. Young CPPD = screen for metabolic cause.",
    hint:"CPP crystals rhomboid, weakly positively birefringent; chondrocalcinosis on X-ray; check metabolic causes",
    patterns:[
      {size:"large",symmetry:"asymmetric",count:"mono",limb:"upper"},
      {size:"large",symmetry:"asymmetric",count:"mono",limb:"lower"}
    ]
  },
  {
    name:"Osteoarthritis",aka:"OA / Degenerative Joint Disease",nameClass:"disease-name-joints",
    abs:[{n:"All serology negative",spec:"assoc"}],
    features:["Mechanical pain (worse with use, better with rest)","DIP and PIP involvement (Heberden's and Bouchard's nodes)","1st CMC joint","Knee (medial compartment)","Hip","No early morning stiffness (or <30 min)"],
    note:"Serology is negative — OA is a clinical and radiographic diagnosis. CRP/ESR typically normal. Erosive OA (inflammatory subset) can mimic RA at the DIPs/PIPs. Distinguish from PsA: no nail changes, no dactylitis, no enthesitis, no axial involvement.",
    hint:"Serology negative; mechanical pain; Heberden's/Bouchard's nodes; DIP/PIP/1st CMC; no significant morning stiffness",
    patterns:[
      {size:"small",symmetry:"symmetric",count:"poly",limb:"upper"},
      {size:"large",symmetry:"either",count:"mono",limb:"lower"}
    ]
  },
  {
    name:"JIA",aka:"Juvenile Idiopathic Arthritis (brief overview)",nameClass:"disease-name-joints",
    abs:[{n:"ANA",spec:"mod"},{n:"RF (polyarticular RF+ subtype)",spec:"mod"},{n:"HLA-B27 (ERA subtype)",spec:"mod"}],
    features:["Onset <16 years","Multiple subtypes (oligoarticular, polyarticular, systemic, ERA, PsA)","Uveitis screening essential (especially ANA+ oligoarticular)","Growth disturbance"],
    note:"Most common paediatric rheumatic disease. ANA+ oligoarticular JIA carries highest uveitis risk — regular slit-lamp screening mandatory. RF+ polyarticular JIA behaves like adult RA. Enthesitis-related arthritis (ERA) links to adult SpA.",
    hint:"Onset <16 yrs; ANA+ oligoarticular → uveitis screening; RF+ polyarticular behaves like adult RA; ERA → axial SpA",
    patterns:[
      {size:"large",symmetry:"asymmetric",count:"oligo",limb:"lower"},
      {size:"small",symmetry:"symmetric",count:"poly",limb:"upper"},
      {size:"large",symmetry:"asymmetric",count:"oligo",limb:"axial"}
    ]
  },
  {
    name:"Palindromic Rheumatism",aka:"PR",nameClass:"disease-name-joints",
    abs:[{n:"Anti-CCP",spec:"mod"},{n:"RF",spec:"assoc"}],
    features:["Recurrent episodes of monoarthritis or periarthritis","Completely resolves between attacks","No radiographic damage","Episodes last hours to days","No deformity between attacks"],
    note:"~50% progress to RA within 5–10 years. Anti-CCP positive in ~50% — these patients have higher conversion risk to RA. Hydroxychloroquine may reduce progression. Important to follow longitudinally.",
    hint:"Recurrent monoarthritis fully resolving between attacks; no joint damage; ~50% progress to RA",
    patterns:[
      {size:"both",symmetry:"either",count:"mono",limb:"upper"},
      {size:"both",symmetry:"either",count:"mono",limb:"lower"}
    ]
  },
];
