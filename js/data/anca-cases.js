export const ancaCases = [
  {
    id: 'anca-case-1',
    title: 'The Blocked Builder',
    summary: '52-year-old with recurrent sinusitis, haemoptysis, and renal impairment',
    difficulty: 'beginner',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mr O'Brien, 52, construction site foreman</strong><br><br>
Presents to A&amp;E with a <strong>12-month history</strong> of:<br>
<ul>
<li><strong>Recurrent sinusitis</strong> — multiple courses of antibiotics with poor response</li>
<li><strong>Bloody nasal discharge</strong> for the past 6 weeks with nasal crusting</li>
<li><strong>Cough and haemoptysis</strong> for 3 weeks</li>
<li>General malaise, weight loss (~5 kg), and night sweats</li>
</ul>
<strong>Examination:</strong> Nasal crusting with a saddle-nose deformity developing. No oral ulcers. Bilateral scattered crackles on chest auscultation. Blood pressure normal.<br><br>
<strong>Bloods:</strong> Creatinine <strong>180 &mu;mol/L</strong> (raised, previously normal 6 months ago). CRP 95 mg/L. ESR 80 mm/hr.<br>
<strong>Urinalysis:</strong> Microscopic haematuria +++, protein +, <strong>red cell casts</strong> seen on microscopy.<br><br>
The combination of <strong>ENT disease + pulmonary disease + renal disease</strong> with active urine sediment is a critical pattern to recognise.`,
        next: 'investigation'
      },
      {
        id: 'investigation',
        type: 'decision',
        prompt: 'Which investigation is most appropriate?',
        options: [
          {
            label: 'ANCA panel (PR3 and MPO by ELISA)',
            next: 'anca-result',
            feedback: 'Correct. The ENT-lung-kidney triad with active urinary sediment is the classic presentation of ANCA-associated vasculitis. Modern guidelines recommend antigen-specific ELISA (PR3 and MPO) as the primary screening method, though IF testing is often done in parallel.'
          },
          {
            label: 'ANA and ENA panel',
            next: 'not-ana-teaching',
            feedback: 'Not the right screen here. The ENT-lung-kidney pattern with destructive sinus disease and active urinary sediment points to small vessel vasculitis, not a connective tissue disease like SLE. ANCA testing is what is needed.'
          },
          {
            label: 'Blood cultures and echocardiogram',
            next: 'not-infective-teaching',
            feedback: 'While infective endocarditis can cause renal impairment, haemoptysis, and systemic symptoms, it does not explain the 12-month sinusitis history or saddle-nose deformity. The ENT-lung-kidney triad with nasal destruction is classic for GPA. ANCA testing is the priority.'
          }
        ]
      },
      {
        id: 'not-ana-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> The clinical pattern here — <strong>destructive upper airway disease + pulmonary haemorrhage + rapidly progressive glomerulonephritis</strong> — is the hallmark of ANCA-associated vasculitis (AAV), not lupus. While SLE can cause nephritis and serositis, it does not cause destructive sinusitis or saddle-nose deformity.<br><br>ANCA testing (PR3/MPO ELISA) is the appropriate first-line investigation.`,
        next: 'anca-result'
      },
      {
        id: 'not-infective-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Infective endocarditis is an important differential for multisystem inflammatory disease, and can even cause ANCA positivity (usually low-titre atypical pANCA). However, the <strong>12-month destructive sinusitis with saddle-nose deformity</strong> is not a feature of endocarditis — this is granulomatous destruction of the nasal septum, characteristic of GPA.<br><br>ANCA testing is the priority.`,
        next: 'anca-result'
      },
      {
        id: 'anca-result',
        type: 'presentation',
        text: `<strong>ANCA results:</strong><br><br>
<ul>
<li><strong>IF pattern:</strong> cANCA (cytoplasmic) — diffuse granular cytoplasmic staining</li>
<li><strong>PR3 (proteinase-3) ELISA:</strong> <strong>Strongly positive</strong> (&gt;100 U/mL)</li>
<li><strong>MPO ELISA:</strong> Negative</li>
</ul>
The <strong>cANCA pattern with PR3 positivity</strong> is the classic serological finding. PR3-ANCA has ~90% specificity for GPA when combined with the right clinical picture.<br><br>
<em>Remember: 2017 revised international guidelines recommend PR3/MPO ELISA as the primary screening method, not IF alone.</em>`,
        next: 'gpa-diagnosis'
      },
      {
        id: 'gpa-diagnosis',
        type: 'decision',
        prompt: 'What is the diagnosis?',
        options: [
          {
            label: 'Granulomatosis with polyangiitis (GPA)',
            next: 'urgent-step',
            feedback: 'Correct. GPA (formerly Wegener\'s granulomatosis — renamed in 2011) is characterised by the classic triad of ENT + lung + kidney involvement with PR3-ANCA positivity. The granulomatous inflammation explains the destructive sinus disease and saddle-nose deformity.'
          },
          {
            label: 'Microscopic polyangiitis (MPA)',
            next: 'not-mpa-teaching',
            feedback: 'Not the best fit. MPA presents with pauci-immune glomerulonephritis and often pulmonary haemorrhage, but it does NOT cause destructive upper airway disease or granulomas. MPA is typically MPO/pANCA-positive. The ENT involvement here points to GPA.'
          },
          {
            label: 'Wegener\'s granulomatosis (as a separate entity from GPA)',
            next: 'same-disease-teaching',
            feedback: 'It\'s the same disease! Wegener\'s granulomatosis was renamed to GPA (Granulomatosis with Polyangiitis) in 2011 by the ACR/ASN/EULAR. The name change was made because Friedrich Wegener had links to the Nazi party. The disease and its features are identical — only the name changed.'
          }
        ]
      },
      {
        id: 'not-mpa-teaching',
        type: 'presentation',
        text: `<strong>Learning point: GPA vs MPA</strong><br><br>
<ul>
<li><strong>GPA:</strong> Granulomatous + vasculitic. ENT + lung + kidney. PR3/cANCA. Destructive upper airway disease, pulmonary nodules/cavities.</li>
<li><strong>MPA:</strong> Vasculitic only (no granulomas). Kidney + lung (pulmonary-renal syndrome). MPO/pANCA. No ENT destruction.</li>
</ul>
The <strong>destructive sinusitis and saddle-nose</strong> in this patient are caused by granulomatous inflammation — a feature of GPA, not MPA.`,
        next: 'urgent-step'
      },
      {
        id: 'same-disease-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Wegener's granulomatosis and GPA are the <strong>same disease</strong>. The name was changed in 2011 (ACR/ASN/EULAR) due to Friedrich Wegener's associations with the Nazi party. You may still hear "Wegener's" in clinical practice, but the correct current term is <strong>Granulomatosis with Polyangiitis (GPA)</strong>.<br><br>This is an important point for exams — do not list them as separate diagnoses.`,
        next: 'urgent-step'
      },
      {
        id: 'urgent-step',
        type: 'decision',
        prompt: 'What is the most urgent next step?',
        options: [
          {
            label: 'Renal biopsy',
            next: 'conclusion',
            feedback: 'Correct. With active urinary sediment (RBC casts), rising creatinine, and positive PR3-ANCA, renal biopsy is urgent to confirm pauci-immune crescentic glomerulonephritis and guide treatment intensity. Do not delay — rapidly progressive glomerulonephritis (RPGN) can lead to dialysis-dependent renal failure within days to weeks.'
          },
          {
            label: 'CT sinuses',
            next: 'not-ct-teaching',
            feedback: 'CT sinuses would show mucosal thickening, bony destruction, and soft tissue masses — confirming ENT involvement. However, the URGENT concern is the rapidly progressive glomerulonephritis (rising creatinine with RBC casts). Renal biopsy takes priority to guide immunosuppressive treatment intensity.'
          },
          {
            label: 'Start empirical antibiotics for sinusitis',
            next: 'not-abx-teaching',
            feedback: 'This patient has had 12 months of antibiotics without improvement — because this is not infection. The sinusitis is caused by granulomatous vasculitis. The urgent priority is establishing the extent of renal involvement (biopsy) to guide immunosuppressive treatment. Delaying treatment risks irreversible renal damage.'
          }
        ]
      },
      {
        id: 'not-ct-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> While CT sinuses is useful for documenting ENT disease extent, the <strong>urgent threat</strong> is the rapidly progressive glomerulonephritis. The creatinine is rising, and RBC casts indicate active glomerular inflammation. Untreated RPGN from AAV can progress to <strong>dialysis dependence within days to weeks</strong>.<br><br>Renal biopsy is needed to confirm the diagnosis, assess chronicity (which predicts reversibility), and guide treatment intensity (cyclophosphamide vs rituximab, plasma exchange consideration).`,
        next: 'conclusion'
      },
      {
        id: 'not-abx-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Refractory sinusitis that does not respond to antibiotics is a <strong>red flag</strong> for GPA. The granulomatous inflammation destroys the nasal septum and cannot be treated with antibiotics. The urgent issue is the kidney — renal biopsy is needed to guide the intensity of immunosuppressive treatment before irreversible damage occurs.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Granulomatosis with Polyangiitis (GPA)</strong><br><br>
Mr O'Brien has the classic GPA triad: <strong>ENT</strong> (destructive sinusitis, saddle-nose) + <strong>lung</strong> (haemoptysis, pulmonary infiltrates) + <strong>kidney</strong> (rapidly progressive glomerulonephritis with RBC casts).<br><br>
<strong>Key management:</strong><br>
<ul>
<li><strong>Urgent renal biopsy</strong> — confirms pauci-immune crescentic GN, assesses chronicity</li>
<li><strong>Induction immunosuppression</strong> — rituximab or cyclophosphamide + high-dose corticosteroids</li>
<li><strong>Consider plasma exchange</strong> — if severe renal impairment (creatinine &gt;500) or pulmonary haemorrhage (PEXIVAS trial)</li>
<li><strong>Maintenance</strong> — rituximab or azathioprine for at least 2 years</li>
</ul>
PR3-ANCA titres can be used to monitor disease activity, though clinical relapse may precede serological change.`,
        keyLearning: [
          'ENT + lung + kidney = classic GPA triad',
          'PR3/cANCA is ~90% specific for GPA',
          'GPA = Wegener\'s (renamed 2011) — same disease',
          'GPA has granulomas (destructive) — MPA does not',
          'Refractory sinusitis is a red flag for GPA',
          'RBC casts = active glomerulonephritis — urgent biopsy needed'
        ],
        relatedAntibodies: ['PR3 (cANCA)', 'MPO (pANCA)']
      }
    ]
  },

  {
    id: 'anca-case-2',
    title: 'The Breathless Runner',
    summary: '68-year-old with rapid-onset dyspnoea, haemoptysis, and renal failure',
    difficulty: 'intermediate',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mrs Patel, 68, retired marathon runner</strong><br><br>
Admitted as an emergency with a <strong>3-week history</strong> of:<br>
<ul>
<li>Rapidly progressive <strong>dyspnoea</strong> — previously able to walk 5 miles, now breathless at rest</li>
<li><strong>Haemoptysis</strong> — initially streaks, now frank blood</li>
<li><strong>Peripheral oedema</strong> and reduced urine output</li>
<li>General malaise, fevers, and 4 kg weight loss</li>
</ul>
<strong>Examination:</strong> Tachypnoeic at rest (RR 28). SpO2 88% on air. Bilateral coarse crackles throughout both lung fields. Peripheral oedema to mid-shin. No ENT abnormalities. No skin rash.<br><br>
<strong>Bloods:</strong> Creatinine <strong>520 &mu;mol/L</strong> (was 85 two months ago — rapidly rising). Hb 78 g/L. CRP 110 mg/L.<br>
<strong>Urinalysis:</strong> Protein +++, blood +++, RBC casts.<br>
<strong>CXR:</strong> Bilateral diffuse alveolar infiltrates consistent with pulmonary haemorrhage.<br><br>
This is a <strong>pulmonary-renal syndrome</strong> — simultaneous rapidly progressive glomerulonephritis and diffuse alveolar haemorrhage (DAH). This is a medical emergency.`,
        next: 'anca-predict'
      },
      {
        id: 'anca-predict',
        type: 'decision',
        prompt: 'Which ANCA result would you most expect?',
        options: [
          {
            label: 'MPO-positive / pANCA',
            next: 'anca-result',
            feedback: 'Correct. MPA is the most common cause of ANCA-associated pulmonary-renal syndrome. It typically presents with MPO/pANCA positivity. MPA affects the kidneys and lungs without the granulomatous ENT disease seen in GPA.'
          },
          {
            label: 'PR3-positive / cANCA',
            next: 'not-pr3-teaching',
            feedback: 'PR3/cANCA is possible (GPA can also cause pulmonary-renal syndrome), but the absence of ENT involvement makes MPA more likely. MPA is MPO/pANCA-positive and presents with pauci-immune glomerulonephritis + pulmonary haemorrhage without granulomatous upper airway disease.'
          },
          {
            label: 'ANCA negative — this is likely not vasculitis',
            next: 'not-negative-teaching',
            feedback: 'While ANCA-negative vasculitis exists (~10% of AAV), this clinical picture of pulmonary-renal syndrome with active urinary sediment is highly suggestive of AAV. The most likely result is MPO/pANCA positive, consistent with MPA. Even if ANCA were negative, a renal biopsy showing pauci-immune crescentic GN would support the diagnosis.'
          }
        ]
      },
      {
        id: 'not-pr3-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Both GPA and MPA can cause pulmonary-renal syndrome, but the absence of <strong>ENT disease</strong> (sinusitis, nasal crusting, saddle-nose) helps distinguish them:<br>
<ul>
<li><strong>MPA:</strong> Kidney + lung. No granulomas, no ENT destruction. MPO/pANCA.</li>
<li><strong>GPA:</strong> ENT + lung + kidney. Granulomatous. PR3/cANCA.</li>
</ul>
This patient has <strong>no ENT involvement</strong>, making MPA with MPO/pANCA the most likely diagnosis.`,
        next: 'anca-result'
      },
      {
        id: 'not-negative-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> About 10% of biopsy-proven AAV is ANCA-negative, but in a patient with this classic pulmonary-renal syndrome, ANCA positivity is expected. The key differential for ANCA-negative pulmonary-renal syndrome is <strong>anti-GBM disease (Goodpasture's)</strong>, which presents similarly but has a different antibody and treatment approach.`,
        next: 'anca-result'
      },
      {
        id: 'anca-result',
        type: 'presentation',
        text: `<strong>ANCA and additional results:</strong><br><br>
<ul>
<li><strong>IF pattern:</strong> pANCA (perinuclear)</li>
<li><strong>MPO ELISA:</strong> <strong>Positive</strong> (85 U/mL)</li>
<li><strong>PR3 ELISA:</strong> Negative</li>
<li><strong>Anti-GBM antibody:</strong> Negative (important — rules out Goodpasture's)</li>
</ul>
The pANCA pattern on IF is caused by MPO redistribution around the nucleus during ethanol fixation. On formalin-fixed neutrophils, it appears cytoplasmic — this is why antigen-specific ELISA (PR3/MPO) is preferred over IF alone.`,
        next: 'mpa-diagnosis'
      },
      {
        id: 'mpa-diagnosis',
        type: 'decision',
        prompt: 'What is the most likely diagnosis?',
        options: [
          {
            label: 'Microscopic Polyangiitis (MPA)',
            next: 'differentiate',
            feedback: 'Correct. MPA is a small vessel vasculitis presenting with pauci-immune glomerulonephritis and often pulmonary haemorrhage. It is non-granulomatous (unlike GPA), MPO/pANCA-positive, and does not cause destructive ENT disease.'
          },
          {
            label: 'Granulomatosis with Polyangiitis (GPA)',
            next: 'not-gpa-teaching',
            feedback: 'GPA can cause pulmonary-renal syndrome, but it characteristically includes ENT involvement (sinusitis, nasal crusting, saddle-nose) and granulomatous inflammation. This patient has no ENT disease and is MPO-positive (GPA is typically PR3-positive). MPA is the better fit.'
          },
          {
            label: 'Goodpasture\'s disease (anti-GBM disease)',
            next: 'not-goodpastures-teaching',
            feedback: 'Good thought — Goodpasture\'s also presents with pulmonary-renal syndrome and is an important differential. However, the anti-GBM antibody is negative here and ANCA is positive, making MPA the diagnosis. The two conditions can occasionally co-exist ("double positive"), which carries a worse prognosis.'
          }
        ]
      },
      {
        id: 'not-gpa-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> GPA and MPA are both ANCA-associated vasculitides affecting small vessels, but they differ:<br>
<ul>
<li><strong>GPA:</strong> Granulomatous. ENT destruction + lung + kidney. PR3/cANCA. Pulmonary nodules/cavities.</li>
<li><strong>MPA:</strong> Non-granulomatous. Kidney + lung (DAH). MPO/pANCA. No ENT disease. Diffuse alveolar infiltrates.</li>
</ul>
The treatment is similar (rituximab or cyclophosphamide), but distinguishing them helps predict complications and relapse patterns.`,
        next: 'differentiate'
      },
      {
        id: 'not-goodpastures-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Goodpasture's disease (anti-GBM disease) presents with pulmonary-renal syndrome, particularly in young men who smoke. The key difference is the antibody — <strong>anti-GBM</strong> (anti-glomerular basement membrane), not ANCA. Treatment also differs: Goodpasture's requires <strong>plasma exchange</strong> as a core treatment to remove the pathogenic anti-GBM antibodies, whereas in MPA, plasma exchange is reserved for severe cases.`,
        next: 'differentiate'
      },
      {
        id: 'differentiate',
        type: 'decision',
        prompt: 'What investigation best differentiates MPA from Goodpasture\'s disease in a pulmonary-renal syndrome?',
        options: [
          {
            label: 'Anti-GBM antibody testing',
            next: 'conclusion',
            feedback: 'Correct. Anti-GBM antibody testing is the key discriminator. In MPA, ANCA is positive and anti-GBM is negative. In Goodpasture\'s, anti-GBM is positive (ANCA may also be positive in ~30%). Renal biopsy also helps: MPA shows pauci-immune crescentic GN (minimal immunoglobulin deposition), while Goodpasture\'s shows linear IgG deposition along the GBM.'
          },
          {
            label: 'Lung biopsy',
            next: 'not-lung-bx-teaching',
            feedback: 'Lung biopsy is rarely performed in the acute setting and carries significant risk in a patient with active DAH. The diagnosis is made by serological testing (ANCA + anti-GBM) and renal biopsy, which is safer and more informative.'
          },
          {
            label: 'Complement levels (C3/C4)',
            next: 'not-complement-teaching',
            feedback: 'Complement levels are typically normal in both MPA and Goodpasture\'s — they are not helpful for differentiating these conditions. Both are non-complement-mediated (unlike SLE nephritis where complement is consumed). Anti-GBM antibody testing is the discriminator.'
          }
        ]
      },
      {
        id: 'not-lung-bx-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> In pulmonary-renal syndrome, the diagnostic approach is:<br>
<ol>
<li><strong>Serology:</strong> ANCA (PR3/MPO) + anti-GBM antibodies — can be done within hours</li>
<li><strong>Renal biopsy:</strong> Pauci-immune crescentic GN (MPA/GPA) vs linear IgG deposition (Goodpasture's)</li>
</ol>
Lung biopsy is almost never needed and is high-risk in the acute setting. The combination of serology + renal biopsy gives the diagnosis.`,
        next: 'conclusion'
      },
      {
        id: 'not-complement-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Complement levels help in other settings:<br>
<ul>
<li><strong>Low C3/C4:</strong> SLE nephritis, cryoglobulinaemia, MPGN</li>
<li><strong>Normal C3/C4:</strong> AAV, anti-GBM disease, IgA nephropathy</li>
</ul>
For distinguishing MPA from Goodpasture's, <strong>anti-GBM antibody testing</strong> is the key investigation. Renal biopsy immunofluorescence confirms the pattern (pauci-immune vs linear IgG).`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Microscopic Polyangiitis (MPA) with Pulmonary-Renal Syndrome</strong><br><br>
Mrs Patel has MPA presenting with severe pulmonary haemorrhage and rapidly progressive glomerulonephritis — a medical emergency requiring immediate treatment.<br><br>
<strong>Key management:</strong><br>
<ul>
<li><strong>Urgent immunosuppression:</strong> IV methylprednisolone pulses followed by rituximab or cyclophosphamide</li>
<li><strong>Consider plasma exchange:</strong> For severe renal impairment (creatinine &gt;500) or life-threatening DAH</li>
<li><strong>Supportive:</strong> Supplemental oxygen, blood transfusion for severe anaemia</li>
<li><strong>Renal biopsy:</strong> When stable enough — confirms pauci-immune crescentic GN</li>
<li><strong>Maintenance immunosuppression:</strong> Rituximab or azathioprine for at least 2 years</li>
</ul>
The negative anti-GBM excludes Goodpasture's disease, which would require a different management emphasis (mandatory plasma exchange).`,
        keyLearning: [
          'MPA = non-granulomatous small vessel vasculitis (MPO/pANCA)',
          'MPA causes pulmonary-renal syndrome WITHOUT ENT disease',
          'Anti-GBM testing is essential in pulmonary-renal syndrome DDx',
          'pANCA pattern is an artefact of ethanol fixation — MPO ELISA is definitive',
          'Pauci-immune GN = minimal Ig deposition (vs linear IgG in Goodpasture\'s)',
          'MPA + anti-GBM "double positive" can occur and carries worse prognosis'
        ],
        relatedAntibodies: ['MPO (pANCA)', 'PR3 (cANCA)', 'Anti-GBM']
      }
    ]
  },

  {
    id: 'anca-case-3',
    title: 'The Wheezy Waiter',
    summary: '38-year-old with adult-onset asthma, foot numbness, and eosinophilia',
    difficulty: 'intermediate',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mr Novak, 38, restaurant waiter</strong><br><br>
Referred by his respiratory physician with an increasingly complex clinical picture over <strong>3 years</strong>:<br>
<ul>
<li><strong>Adult-onset asthma</strong> diagnosed 3 years ago — initially well-controlled but now requiring high-dose inhaled steroids and frequent oral prednisolone courses</li>
<li>Recurrent <strong>sinus polyps</strong> — two polypectomies in the past 2 years</li>
<li><strong>Numbness and tingling</strong> in both feet for 6 weeks, with a recent left foot drop</li>
<li><strong>Purpuric rash</strong> on his lower legs for 2 weeks</li>
</ul>
<strong>Examination:</strong> Palpable purpura on both shins. Left foot drop (peroneal nerve palsy). Reduced sensation in a glove-and-stocking distribution. Wheeze bilaterally. Echocardiogram shows <strong>mild cardiomyopathy</strong> (EF 42%).<br><br>
<strong>Bloods:</strong> Eosinophils <strong>5.2 &times; 10<sup>9</sup>/L (22%)</strong> — markedly elevated. CRP 55 mg/L. IgE elevated. Creatinine normal. Troponin mildly elevated.`,
        next: 'anca-predict'
      },
      {
        id: 'anca-predict',
        type: 'decision',
        prompt: 'What ANCA result would you expect?',
        options: [
          {
            label: 'MPO/pANCA positive (but may be negative — only ~40% of EGPA are ANCA+)',
            next: 'anca-result',
            feedback: 'Excellent answer showing nuanced understanding. EGPA is the AAV with the lowest ANCA positivity rate — only about 40% are ANCA-positive (typically MPO/pANCA). ANCA-positive EGPA tends to have more vasculitic features (GN, neuropathy), while ANCA-negative EGPA has more cardiac and pulmonary involvement.'
          },
          {
            label: 'PR3/cANCA positive',
            next: 'not-pr3-teaching',
            feedback: 'PR3/cANCA is occasionally seen in EGPA but is uncommon. When EGPA is ANCA-positive, it is almost always MPO/pANCA. More importantly, only ~40% of EGPA patients are ANCA-positive at all — making EGPA unique among the AAVs.'
          },
          {
            label: 'ANCA isn\'t helpful here — this is purely an allergic/eosinophilic condition',
            next: 'anca-is-helpful-teaching',
            feedback: 'ANCA testing IS helpful, even though only ~40% of EGPA patients are positive. ANCA status actually has prognostic significance — it predicts the pattern of organ involvement. A negative ANCA does not exclude EGPA but changes the expected complication profile.'
          }
        ]
      },
      {
        id: 'not-pr3-teaching',
        type: 'presentation',
        text: `<strong>Learning point: ANCA in EGPA</strong><br>
<ul>
<li>Only <strong>~40%</strong> of EGPA patients are ANCA-positive</li>
<li>When positive, it is almost always <strong>MPO/pANCA</strong></li>
<li><strong>ANCA-positive EGPA</strong> → more vasculitic (glomerulonephritis, mononeuritis multiplex, purpura)</li>
<li><strong>ANCA-negative EGPA</strong> → more eosinophilic organ damage (cardiac, pulmonary infiltrates)</li>
</ul>
This is an important distinction for prognosis and management.`,
        next: 'anca-result'
      },
      {
        id: 'anca-is-helpful-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> EGPA (eosinophilic granulomatosis with polyangiitis) is classified as an ANCA-associated vasculitis even though only ~40% are ANCA-positive. ANCA status has <strong>prognostic significance</strong>:<br>
<ul>
<li><strong>ANCA-positive:</strong> More vasculitic phenotype — glomerulonephritis, mononeuritis multiplex, purpura</li>
<li><strong>ANCA-negative:</strong> More eosinophilic infiltration — cardiomyopathy, pulmonary infiltrates</li>
</ul>
This patient has features of BOTH phenotypes (neuropathy AND cardiac involvement), so ANCA testing is important for prognostication.`,
        next: 'anca-result'
      },
      {
        id: 'anca-result',
        type: 'presentation',
        text: `<strong>ANCA results:</strong><br><br>
<ul>
<li><strong>IF pattern:</strong> pANCA (perinuclear)</li>
<li><strong>MPO ELISA:</strong> Positive (45 U/mL)</li>
<li><strong>PR3 ELISA:</strong> Negative</li>
</ul>
This patient is ANCA-positive, which correlates with the vasculitic features (mononeuritis multiplex, purpura). However, he also has cardiac involvement, which is more typical of the ANCA-negative phenotype — this overlap is common and does not change the diagnosis.<br><br>
<strong>The classic EGPA triad:</strong> Asthma + eosinophilia + vasculitis (neuropathy and/or purpura).`,
        next: 'egpa-diagnosis'
      },
      {
        id: 'egpa-diagnosis',
        type: 'decision',
        prompt: 'What is the most likely diagnosis?',
        options: [
          {
            label: 'Eosinophilic Granulomatosis with Polyangiitis (EGPA)',
            next: 'organ-concern',
            feedback: 'Correct. EGPA (formerly Churg-Strauss syndrome) classically evolves through three phases: (1) allergic/atopic phase (asthma, rhinitis), (2) eosinophilic infiltration phase (pulmonary, cardiac), (3) vasculitic phase (neuropathy, purpura, GN). This patient has features spanning all three phases.'
          },
          {
            label: 'Hypereosinophilic Syndrome (HES)',
            next: 'not-hes-teaching',
            feedback: 'HES can cause eosinophilia with organ damage (especially cardiac), but it does NOT present with vasculitic features (purpura, mononeuritis multiplex) or positive ANCA. The combination of asthma + eosinophilia + vasculitis defines EGPA, not HES.'
          },
          {
            label: 'Parasitic infection with eosinophilia',
            next: 'not-parasitic-teaching',
            feedback: 'Parasitic infection can cause marked eosinophilia, but it does not explain the vasculitic features (mononeuritis multiplex, purpura, positive ANCA) or the 3-year progressive course with asthma and sinus polyps. The clinical picture is classic for EGPA.'
          }
        ]
      },
      {
        id: 'not-hes-teaching',
        type: 'presentation',
        text: `<strong>Learning point: EGPA vs HES</strong><br>
<ul>
<li><strong>EGPA:</strong> Asthma + eosinophilia + vasculitis. ANCA may be positive. Neuropathy, purpura, GN. Responds to immunosuppression.</li>
<li><strong>HES:</strong> Persistent eosinophilia (&gt;1.5 &times; 10<sup>9</sup>/L for &gt;6 months) with eosinophilic organ damage. No vasculitis, ANCA negative. Consider FIP1L1-PDGFRA fusion (responds to imatinib).</li>
</ul>
The vasculitic features and ANCA positivity here distinguish EGPA from HES.`,
        next: 'organ-concern'
      },
      {
        id: 'not-parasitic-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Parasitic infection is an important cause of eosinophilia to exclude (travel history, Strongyloides serology), but the progressive triad of <strong>asthma → eosinophilic infiltration → vasculitis</strong> over years, with positive ANCA, is pathognomonic for EGPA. Always consider parasites in the differential of eosinophilia, but the clinical picture here leaves little doubt.`,
        next: 'organ-concern'
      },
      {
        id: 'organ-concern',
        type: 'decision',
        prompt: 'Which organ involvement is most concerning in this patient and the leading cause of mortality in EGPA?',
        options: [
          {
            label: 'Cardiac involvement',
            next: 'conclusion',
            feedback: 'Correct. Cardiac involvement (myocarditis, cardiomyopathy, pericarditis, coronary arteritis) is the leading cause of death in EGPA, accounting for ~50% of EGPA-related mortality. This patient already has cardiomyopathy (EF 42%) and elevated troponin — this requires urgent treatment. Cardiac MRI is indicated for detailed assessment.'
          },
          {
            label: 'Renal involvement',
            next: 'not-renal-primary-teaching',
            feedback: 'Renal involvement (glomerulonephritis) occurs in EGPA but is less common and less severe than in GPA or MPA. This patient\'s creatinine is normal. The leading cause of death in EGPA is cardiac involvement — and this patient already has cardiomyopathy (EF 42%) and elevated troponin.'
          },
          {
            label: 'Pulmonary involvement',
            next: 'not-pulm-primary-teaching',
            feedback: 'While pulmonary involvement (asthma, infiltrates) is a hallmark of EGPA, it is rarely the direct cause of death. The leading cause of EGPA mortality is cardiac involvement (~50% of deaths) — eosinophilic myocarditis, cardiomyopathy, and coronary arteritis. This patient already has an EF of 42%.'
          }
        ]
      },
      {
        id: 'not-renal-primary-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Unlike GPA and MPA where renal disease drives morbidity, in EGPA the <strong>heart is the most dangerous target</strong>. Eosinophilic myocarditis can be fulminant and fatal. Cardiac involvement includes:<br>
<ul>
<li>Eosinophilic myocarditis</li>
<li>Endomyocardial fibrosis</li>
<li>Pericarditis</li>
<li>Coronary arteritis</li>
</ul>
This patient needs urgent cardiac MRI and aggressive immunosuppression.`,
        next: 'conclusion'
      },
      {
        id: 'not-pulm-primary-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> The Five-Factor Score (FFS) for poor prognosis in EGPA includes:<br>
<ol>
<li><strong>Cardiac involvement</strong> — the most important</li>
<li>GI involvement</li>
<li>Renal insufficiency (creatinine &gt;140)</li>
<li>Proteinuria (&gt;1 g/day)</li>
<li>CNS involvement</li>
</ol>
Note that <strong>pulmonary and ENT involvement are NOT poor prognostic factors</strong> — cardiac disease is what kills.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Eosinophilic Granulomatosis with Polyangiitis (EGPA)</strong><br><br>
Mr Novak has EGPA (formerly Churg-Strauss syndrome) with features spanning all three classical phases: allergic (asthma, sinusitis), eosinophilic (cardiac involvement), and vasculitic (mononeuritis multiplex, purpura).<br><br>
<strong>Key management priorities:</strong><br>
<ul>
<li><strong>Cardiac MRI</strong> — urgent assessment of myocardial involvement</li>
<li><strong>Immunosuppression</strong> — high-dose corticosteroids + cyclophosphamide (given cardiac involvement = poor prognostic factor)</li>
<li><strong>Consider mepolizumab</strong> — anti-IL-5 now licensed for relapsing/refractory EGPA</li>
<li><strong>Neuropathy management</strong> — may need orthotics for foot drop, nerve conduction studies for monitoring</li>
</ul>
Cardiac involvement accounts for ~50% of EGPA deaths — early aggressive treatment is critical.`,
        keyLearning: [
          'EGPA triad: asthma + eosinophilia + vasculitis',
          'Only ~40% of EGPA are ANCA-positive (typically MPO/pANCA)',
          'ANCA+ → vasculitic phenotype; ANCA- → eosinophilic/cardiac phenotype',
          'Cardiac involvement is the leading cause of EGPA mortality (~50%)',
          'EGPA evolves through phases: allergic → eosinophilic → vasculitic',
          'Mepolizumab (anti-IL-5) is now approved for relapsing/refractory EGPA'
        ],
        relatedAntibodies: ['MPO (pANCA)', 'PR3 (cANCA)']
      }
    ]
  },

  {
    id: 'anca-case-4',
    title: 'The Purple Patient',
    summary: '28-year-old on minocycline with arthralgia, purpura, and positive pANCA',
    difficulty: 'advanced',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Ms Taylor, 28, junior doctor</strong><br><br>
Self-referred to rheumatology after her GP found a positive pANCA on screening. She has been taking <strong>minocycline for acne for 6 months</strong>.<br><br>
Over the past 6 weeks she has developed:<br>
<ul>
<li><strong>Arthralgia</strong> in her hands and knees — non-erosive</li>
<li><strong>Purpuric rash</strong> on her lower legs</li>
<li><strong>Microscopic haematuria</strong> found on routine urinalysis (no RBC casts)</li>
<li>Low-grade fevers and malaise</li>
</ul>
<strong>Examination:</strong> Palpable purpura on both shins. Tender MCPs bilaterally without synovitis. No ENT abnormalities. No neurological deficit. Blood pressure normal.<br><br>
<strong>Bloods:</strong> Creatinine <strong>110 &mu;mol/L</strong> (high-normal). CRP 35 mg/L. ESR 40 mm/hr. FBC normal apart from mild eosinophilia.`,
        next: 'antibody-choice'
      },
      {
        id: 'antibody-choice',
        type: 'decision',
        prompt: 'Given the positive pANCA on screening, which additional antibodies should be checked?',
        options: [
          {
            label: 'MPO + lactoferrin + elastase (full ANCA specificity panel)',
            next: 'antibody-result',
            feedback: 'Excellent. When drug-induced ANCA vasculitis is suspected, a broader panel is essential. Drug-induced ANCA characteristically shows positivity to MULTIPLE ANCA targets (MPO + lactoferrin + elastase + cathepsin G + BPI), unlike idiopathic AAV which is typically positive for just PR3 or MPO.'
          },
          {
            label: 'PR3 only',
            next: 'pr3-only-teaching',
            feedback: 'PR3 testing alone is insufficient. While important to check, the clinical context (young patient on minocycline with pANCA) raises suspicion for drug-induced ANCA vasculitis. The hallmark is positivity against MULTIPLE ANCA antigens — you need MPO, lactoferrin, and elastase to detect this pattern.'
          },
          {
            label: 'Anti-dsDNA to rule out SLE',
            next: 'not-dsdna-teaching',
            feedback: 'While drug-induced lupus is in the differential (minocycline can cause it), the positive pANCA finding directs the investigation towards ANCA specificity testing rather than lupus serology. The purpura and haematuria with pANCA positivity need ANCA characterisation first.'
          }
        ]
      },
      {
        id: 'pr3-only-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> In suspected drug-induced ANCA vasculitis, checking <strong>PR3 and MPO alone is not enough</strong>. The key distinguishing feature is <strong>multi-ANCA positivity</strong>:<br>
<ul>
<li><strong>Drug-induced:</strong> Positive to multiple ANCA targets (MPO + lactoferrin + elastase + cathepsin G + BPI)</li>
<li><strong>Idiopathic AAV:</strong> Positive to single target only (PR3 OR MPO)</li>
</ul>
This pattern helps distinguish drug-induced from idiopathic vasculitis.`,
        next: 'antibody-result'
      },
      {
        id: 'not-dsdna-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Minocycline can cause both drug-induced lupus (with anti-histone antibodies) AND drug-induced ANCA vasculitis. However, this patient has a <strong>positive pANCA</strong>, purpura, and haematuria — the ANCA finding needs characterisation first.<br><br>
Drug-induced ANCA vasculitis is a distinct entity from drug-induced lupus and requires ANCA specificity testing to identify the characteristic multi-ANCA positivity pattern.`,
        next: 'antibody-result'
      },
      {
        id: 'antibody-result',
        type: 'presentation',
        text: `<strong>Extended ANCA results:</strong><br><br>
<ul>
<li><strong>IF pattern:</strong> pANCA (perinuclear)</li>
<li><strong>MPO ELISA:</strong> Positive (35 U/mL)</li>
<li><strong>Anti-lactoferrin:</strong> <strong>Positive</strong></li>
<li><strong>Anti-elastase:</strong> <strong>Positive</strong></li>
<li><strong>PR3 ELISA:</strong> Negative</li>
</ul>
<strong>Critical finding:</strong> Positivity against <strong>multiple ANCA antigens</strong> (MPO + lactoferrin + elastase) is the serological hallmark of drug-induced ANCA vasculitis. In idiopathic AAV, patients are positive for a <strong>single antigen only</strong> (either PR3 or MPO).<br><br>
The minocycline has been prescribed for 6 months — a typical latency period for drug-induced ANCA.`,
        next: 'diagnosis-choice'
      },
      {
        id: 'diagnosis-choice',
        type: 'decision',
        prompt: 'What is the most likely diagnosis?',
        options: [
          {
            label: 'Drug-induced ANCA-associated vasculitis (minocycline)',
            next: 'management',
            feedback: 'Correct. The triad of (1) drug exposure (minocycline), (2) multi-ANCA positivity (MPO + lactoferrin + elastase), and (3) relatively mild vasculitic features defines drug-induced ANCA vasculitis. Common culprits include minocycline, hydralazine, propylthiouracil (PTU), and levamisole-adulterated cocaine.'
          },
          {
            label: 'Idiopathic MPA',
            next: 'not-mpa-teaching',
            feedback: 'Idiopathic MPA is an important differential, but the multi-ANCA positivity pattern (MPO + lactoferrin + elastase) is characteristic of drug-induced disease. In idiopathic MPA, only MPO is positive. The temporal relationship with minocycline and the relatively mild disease also favour a drug-induced aetiology.'
          },
          {
            label: 'IgA vasculitis (Henoch-Schonlein purpura)',
            next: 'not-iga-teaching',
            feedback: 'IgA vasculitis can cause purpura and haematuria, but it is ANCA-negative. The positive pANCA with multi-antigen specificity in the context of minocycline use points to drug-induced ANCA vasculitis. IgA vasculitis would show raised serum IgA and IgA deposition on biopsy.'
          }
        ]
      },
      {
        id: 'not-mpa-teaching',
        type: 'presentation',
        text: `<strong>Learning point: Drug-induced vs idiopathic ANCA vasculitis</strong><br><br>
<table style="width:100%;font-size:13px;">
<tr><td><strong>Feature</strong></td><td><strong>Drug-induced</strong></td><td><strong>Idiopathic AAV</strong></td></tr>
<tr><td>ANCA specificity</td><td>Multi-antigen (MPO + lactoferrin + elastase)</td><td>Single antigen (PR3 OR MPO)</td></tr>
<tr><td>Drug exposure</td><td>Yes (temporal relationship)</td><td>No causative drug</td></tr>
<tr><td>Severity</td><td>Usually milder</td><td>Often severe organ involvement</td></tr>
<tr><td>Outcome</td><td>Often resolves with drug withdrawal</td><td>Requires long-term immunosuppression</td></tr>
</table>`,
        next: 'management'
      },
      {
        id: 'not-iga-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> IgA vasculitis (HSP) and ANCA vasculitis are both small vessel vasculitides causing purpura and nephritis, but they differ fundamentally:<br>
<ul>
<li><strong>IgA vasculitis:</strong> ANCA-negative. IgA deposition on biopsy. Often self-limiting. Abdominal pain and arthralgia common.</li>
<li><strong>ANCA vasculitis:</strong> ANCA-positive. Pauci-immune on biopsy. Requires immunosuppression (if idiopathic).</li>
</ul>
The positive ANCA here excludes IgA vasculitis.`,
        next: 'management'
      },
      {
        id: 'management',
        type: 'decision',
        prompt: 'What is the most appropriate management approach?',
        options: [
          {
            label: 'Stop minocycline and monitor closely — immunosuppress only if no improvement',
            next: 'conclusion',
            feedback: 'Correct. In drug-induced ANCA vasculitis, the first step is ALWAYS to stop the culprit drug. Many cases resolve with drug withdrawal alone, though ANCA may remain positive for months. If there is significant organ involvement (e.g. progressive renal impairment or severe vasculitis), immunosuppression may be needed, but a watchful approach after drug cessation is appropriate for mild disease.'
          },
          {
            label: 'Cyclophosphamide + rituximab (full immunosuppression)',
            next: 'overtreatment-teaching',
            feedback: 'This would be overtreatment for drug-induced ANCA vasculitis with relatively mild disease. Aggressive immunosuppression (cyclophosphamide, rituximab) is reserved for severe idiopathic AAV with organ-threatening disease. The first step here is to stop minocycline — many cases resolve without immunosuppression.'
          },
          {
            label: 'Plasmapheresis to remove ANCA',
            next: 'no-plex-teaching',
            feedback: 'Plasmapheresis is not routinely indicated. In drug-induced ANCA vasculitis with mild disease, stopping the culprit drug is the priority. Plasmapheresis is reserved for severe cases of AAV with life-threatening pulmonary haemorrhage or severe renal impairment (creatinine >500).'
          }
        ]
      },
      {
        id: 'overtreatment-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Drug-induced ANCA vasculitis has a <strong>fundamentally different management approach</strong> from idiopathic AAV:<br>
<ol>
<li><strong>Stop the culprit drug</strong> — this is the primary treatment</li>
<li><strong>Monitor</strong> — many cases improve within weeks to months</li>
<li><strong>Short course of corticosteroids</strong> — for symptomatic control if needed</li>
<li><strong>Immunosuppression</strong> — only if significant organ involvement persists after drug withdrawal</li>
</ol>
ANCA titres may take months to years to become negative after drug cessation.`,
        next: 'conclusion'
      },
      {
        id: 'no-plex-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Plasmapheresis removes circulating antibodies but is reserved for severe AAV. Current evidence (PEXIVAS trial) suggests benefit mainly in severe renal disease. For drug-induced ANCA vasculitis with mild-moderate disease, removing the cause (stopping the drug) is the treatment. ANCA titres will gradually fall after drug cessation.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Drug-Induced ANCA-Associated Vasculitis (Minocycline)</strong><br><br>
Ms Taylor has drug-induced ANCA vasculitis secondary to minocycline. The multi-ANCA positivity pattern (MPO + lactoferrin + elastase) is the key serological clue distinguishing this from idiopathic AAV.<br><br>
<strong>Key management:</strong><br>
<ul>
<li><strong>Stop minocycline immediately</strong></li>
<li><strong>Monitor renal function</strong> — repeat urinalysis and creatinine regularly</li>
<li><strong>Short course of prednisolone</strong> may help symptomatic purpura and arthralgia</li>
<li><strong>Expect gradual improvement</strong> — clinical features resolve faster than ANCA titres</li>
<li><strong>Avoid re-exposure</strong> to minocycline and related tetracyclines</li>
</ul>
<strong>Common culprit drugs for ANCA vasculitis:</strong> minocycline, hydralazine, propylthiouracil (PTU), methimazole, levamisole-adulterated cocaine, penicillamine.`,
        keyLearning: [
          'Multi-ANCA positivity (MPO + lactoferrin + elastase) = drug-induced',
          'Idiopathic AAV = single ANCA target only (PR3 or MPO)',
          'Common culprits: minocycline, hydralazine, PTU, levamisole/cocaine',
          'First-line treatment: stop the drug (not immunosuppression)',
          'ANCA titres may persist for months after drug withdrawal',
          'Drug-induced ANCA vasculitis is usually milder than idiopathic AAV'
        ],
        relatedAntibodies: ['MPO (pANCA)', 'Lactoferrin', 'Elastase', 'PR3 (cANCA)']
      }
    ]
  }
];
