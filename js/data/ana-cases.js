export const anaCases = [
  {
    id: 'ana-case-1',
    title: 'The Tired Teacher',
    summary: '34-year-old with fatigue, joint pain, and facial rash',
    difficulty: 'beginner',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mrs Ahmed, 34, primary school teacher</strong><br><br>
Presents to her GP with a <strong>3-month history</strong> of:<br>
<ul>
<li>Profound fatigue — struggling to get through the school day</li>
<li>Bilateral pain and stiffness in her <strong>MCPs and wrists</strong>, worst in the morning (lasting &gt;1 hour)</li>
<li>A <strong>rash across both cheeks and the bridge of her nose</strong> that worsens with sun exposure</li>
</ul>
<strong>Examination:</strong> Malar rash sparing the nasolabial folds. Swollen MCPs bilaterally. No oral ulcers today, but she reports recurrent ones. Small effusion in left knee.<br><br>
<strong>Bloods:</strong> FBC shows <strong>lymphopenia</strong> (0.8 &times; 10<sup>9</sup>/L) and mild <strong>thrombocytopenia</strong> (110 &times; 10<sup>9</sup>/L). ESR 65 mm/hr (elevated). CRP 8 mg/L (only mildly raised).`,
        next: 'investigate'
      },
      {
        id: 'investigate',
        type: 'decision',
        prompt: 'Which investigation would you request first?',
        options: [
          {
            label: 'ANA + ENA panel',
            next: 'ana-result',
            feedback: 'Good choice. An ANA with reflex ENA panel casts a wide net and is the appropriate first-line autoantibody screen when you suspect a connective tissue disease.'
          },
          {
            label: 'Anti-dsDNA only',
            next: 'narrow-teaching',
            feedback: 'Too narrow at this stage. While dsDNA is useful in SLE, jumping straight to it risks missing non-SLE diagnoses. The ANA + ENA panel is a better initial screen.'
          },
          {
            label: 'CRP and blood cultures',
            next: 'wrong-track-teaching',
            feedback: 'CRP is already done and only mildly raised — a clue that this is not primarily infective or autoinflammatory. In SLE, the ESR is often elevated out of proportion to CRP. Autoantibody testing is needed here.'
          }
        ]
      },
      {
        id: 'narrow-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Anti-dsDNA is specific for SLE but not sensitive enough to use as a sole screening test. About 30% of SLE patients are dsDNA-negative. The ANA is the recommended first-line screen — it is &gt;95% sensitive for SLE.<br><br>Let's proceed with the full panel results.`,
        next: 'ana-result'
      },
      {
        id: 'wrong-track-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> In SLE, the <strong>ESR:CRP dissociation</strong> is characteristic — ESR rises (driven by immunoglobulin and complement activation) while CRP remains relatively low. A markedly raised CRP in known SLE should prompt a search for infection or serositis.<br><br>The clinical picture here — malar rash, arthritis, cytopenias — strongly suggests a connective tissue disease. Let's request autoantibody testing.`,
        next: 'ana-result'
      },
      {
        id: 'ana-result',
        type: 'presentation',
        text: `<strong>Autoantibody results:</strong><br><br>
<ul>
<li><strong>ANA:</strong> Positive 1:640, <strong>homogeneous pattern</strong></li>
<li><strong>Anti-dsDNA:</strong> Strongly positive (120 IU/mL, normal &lt;10)</li>
<li><strong>Anti-Sm:</strong> Positive</li>
<li><strong>Anti-Ro, Anti-La:</strong> Negative</li>
<li><strong>Anti-U1-RNP:</strong> Negative</li>
</ul>
The homogeneous ANA pattern at high titre with positive dsDNA and Sm antibodies is a highly specific combination.`,
        next: 'diagnosis'
      },
      {
        id: 'diagnosis',
        type: 'decision',
        prompt: 'What is the most likely diagnosis?',
        options: [
          {
            label: 'Systemic Lupus Erythematosus (SLE)',
            next: 'monitoring',
            feedback: 'Correct. She meets multiple EULAR/ACR 2019 classification criteria: malar rash, arthritis, lymphopenia, thrombocytopenia, ANA, dsDNA, and anti-Sm. Anti-Sm is highly specific for SLE (though only ~30% sensitive).'
          },
          {
            label: 'Rheumatoid Arthritis',
            next: 'not-ra-teaching',
            feedback: 'Unlikely. While she has inflammatory arthritis, the malar rash, cytopenias, high-titre ANA, and positive dsDNA/Sm all point to SLE rather than RA. RA does not typically cause a malar rash or these autoantibody profiles.'
          },
          {
            label: 'Viral arthritis',
            next: 'not-viral-teaching',
            feedback: 'Unlikely. Viral arthritis (e.g. parvovirus B19) can cause transient ANA positivity and joint symptoms, but not typically at titres of 1:640 with specific antibodies like dsDNA and Sm. The 3-month duration and malar rash favour SLE.'
          },
          {
            label: 'Drug-induced lupus',
            next: 'not-dil-teaching',
            feedback: 'Drug-induced lupus typically presents with anti-histone antibodies (not dsDNA or Sm) and usually resolves on stopping the drug. There is no culprit drug mentioned here, and anti-dsDNA positivity makes idiopathic SLE far more likely.'
          }
        ]
      },
      {
        id: 'not-ra-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> RA and SLE can both cause inflammatory polyarthritis, but the <strong>extra-articular features</strong> (malar rash, serositis, cytopenias) and <strong>autoantibody profile</strong> (dsDNA, Sm) are the key differentiators. ANA can be positive in RA (up to 30%) but usually at low titre and without ENA specificity.<br><br>This is SLE. Let's think about monitoring.`,
        next: 'monitoring'
      },
      {
        id: 'not-viral-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Parvovirus B19 can mimic SLE with arthritis and transient ANA positivity, but <strong>high-titre ANA (≥1:640) with specific antibodies (dsDNA, Sm) is not a feature of viral illness</strong>. Always check ENA specificity — a positive ANA alone is not diagnostic.<br><br>This is SLE. Let's consider monitoring.`,
        next: 'monitoring'
      },
      {
        id: 'not-dil-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Drug-induced lupus (DIL) classically presents with <strong>anti-histone antibodies</strong> and usually spares the kidneys and CNS. Common culprits include hydralazine, procainamide, isoniazid, and minocycline. <strong>Anti-dsDNA is characteristically negative</strong> in DIL — its presence here points strongly to idiopathic SLE.<br><br>This is SLE. Let's think about disease monitoring.`,
        next: 'monitoring'
      },
      {
        id: 'monitoring',
        type: 'decision',
        prompt: 'What additional tests are most important for assessing disease activity and organ involvement in this patient?',
        options: [
          {
            label: 'Complement C3/C4 and urine protein:creatinine ratio',
            next: 'conclusion',
            feedback: 'Excellent. Complement levels fall during active SLE (consumed in immune complex formation), making C3/C4 useful activity markers alongside dsDNA titres. Urine PCR screens for lupus nephritis, which affects up to 50% of SLE patients and requires early detection.'
          },
          {
            label: 'Repeat ANA titre in 6 weeks',
            next: 'repeat-ana-teaching',
            feedback: 'ANA titre does not reliably correlate with disease activity and repeating it adds little value once confirmed positive. Anti-dsDNA titres and complement levels are the useful serological markers for monitoring SLE activity.'
          },
          {
            label: 'CRP trending',
            next: 'crp-teaching',
            feedback: 'CRP is not a reliable marker of SLE activity due to the ESR:CRP dissociation. Complement levels (C3/C4) and dsDNA titres are the established serological activity markers. However, urine screening for nephritis is equally important.'
          }
        ]
      },
      {
        id: 'repeat-ana-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Once ANA is confirmed positive, repeating it is rarely helpful. ANA titre <strong>does not track disease activity</strong>. The useful serological markers in SLE are:<br>
<ul>
<li><strong>Anti-dsDNA titre</strong> — rises with disease flares (especially renal)</li>
<li><strong>Complement C3 and C4</strong> — fall with active disease (classical pathway consumption)</li>
</ul>
Screening for renal involvement with urine PCR is also critical.`,
        next: 'conclusion'
      },
      {
        id: 'crp-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> In SLE, <strong>CRP often remains normal</strong> even during flares (the ESR:CRP dissociation). This is because SLE inflammation is primarily type I interferon-driven rather than IL-6-driven. A rising CRP in SLE should raise concern for <strong>infection or serositis</strong> rather than disease flare.<br><br>Complement levels and dsDNA titres are the preferred activity markers.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Systemic Lupus Erythematosus (SLE)</strong><br><br>
Mrs Ahmed has active SLE with multiple organ involvement (skin, joints, haematological). Her strongly positive dsDNA and anti-Sm antibodies are highly specific.<br><br>
<strong>Key monitoring strategy:</strong><br>
<ul>
<li><strong>Anti-dsDNA titres</strong> and <strong>complement C3/C4</strong> — serological activity markers</li>
<li><strong>Urine protein:creatinine ratio</strong> — screening for lupus nephritis</li>
<li><strong>FBC</strong> — monitoring cytopenias</li>
<li><strong>ESR</strong> — trends with disease activity</li>
</ul>
She will need referral to rheumatology for treatment with hydroxychloroquine (the cornerstone of SLE management) and consideration of immunosuppression for active disease.`,
        keyLearning: [
          'ANA is >95% sensitive for SLE — best first-line screen',
          'Anti-dsDNA and anti-Sm are highly specific for SLE',
          'Homogeneous ANA pattern correlates with dsDNA/histone antibodies',
          'ESR:CRP dissociation is characteristic of SLE',
          'Complement C3/C4 and dsDNA titres track disease activity',
          'Always screen for lupus nephritis (urine PCR)'
        ],
        relatedAntibodies: ['dsDNA', 'Sm', 'ANA']
      }
    ]
  },

  {
    id: 'ana-case-2',
    title: 'The Stiff Seamstress',
    summary: '58-year-old with skin tightening, Raynaud\'s, and dysphagia',
    difficulty: 'intermediate',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mrs Kowalski, 58, retired seamstress</strong><br><br>
Referred to rheumatology with a <strong>6-month history</strong> of:<br>
<ul>
<li><strong>Progressive skin tightening</strong> on her fingers and face — she struggles to open her mouth fully</li>
<li><strong>Raynaud's phenomenon</strong> — fingers turning white then blue in the cold for the past 3 years</li>
<li><strong>Difficulty swallowing</strong> solid food (dysphagia) and heartburn</li>
</ul>
<strong>Examination:</strong> Sclerodactyly with digital pitting scars. Telangiectasia on her face and palms. Tight, shiny skin on fingers and face but <strong>NOT extending proximal to the elbows</strong>. Microstomia. Calcinosis on right index finger.<br><br>
<strong>Note:</strong> The combination of <strong>C</strong>alcinosis, <strong>R</strong>aynaud's, <strong>E</strong>sophageal dysmotility, <strong>S</strong>clerodactyly, and <strong>T</strong>elangiectasia forms the classic CREST mnemonic.`,
        next: 'pattern-predict'
      },
      {
        id: 'pattern-predict',
        type: 'decision',
        prompt: 'Which ANA immunofluorescence pattern would you predict in this patient?',
        options: [
          {
            label: 'Centromere (discrete speckled)',
            next: 'ana-result',
            feedback: 'Correct. The centromere pattern is the hallmark of limited cutaneous systemic sclerosis (formerly CREST syndrome). It appears as discrete dots within the nucleus corresponding to the centromere/kinetochore proteins.'
          },
          {
            label: 'Homogeneous',
            next: 'not-homogeneous-teaching',
            feedback: 'Not the best answer. The homogeneous pattern is associated with anti-dsDNA and anti-histone antibodies — seen in SLE and drug-induced lupus, not systemic sclerosis. The key clinical features here (sclerodactyly, CREST) point to a different pattern.'
          },
          {
            label: 'Nucleolar',
            next: 'not-nucleolar-teaching',
            feedback: 'Close, but not quite. The nucleolar pattern is associated with diffuse cutaneous SSc (anti-RNA polymerase III, anti-Th/To) and some overlap syndromes. In limited cutaneous SSc with CREST features, the centromere pattern is expected.'
          }
        ]
      },
      {
        id: 'not-homogeneous-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> The ANA IF pattern provides a clue to the underlying antibody specificity:<br>
<ul>
<li><strong>Homogeneous</strong> → dsDNA, histones (SLE, drug-induced lupus)</li>
<li><strong>Centromere</strong> → anti-centromere (limited SSc / CREST)</li>
<li><strong>Nucleolar</strong> → RNA polymerase III, Th/To (diffuse SSc)</li>
<li><strong>Speckled</strong> → ENA antibodies (Ro, La, Sm, RNP, Scl-70, Jo-1)</li>
</ul>
With CREST features, the centromere pattern is expected.`,
        next: 'ana-result'
      },
      {
        id: 'not-nucleolar-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Nucleolar and centromere patterns are both seen in systemic sclerosis, but in different subtypes:<br>
<ul>
<li><strong>Centromere pattern</strong> → limited cutaneous SSc (CREST) — skin tightening limited to distal extremities and face</li>
<li><strong>Nucleolar pattern</strong> → diffuse cutaneous SSc — skin tightening extending proximal to the elbows/knees and trunk</li>
</ul>
This patient's skin changes are <strong>distal only</strong> (fingers and face), pointing to the limited subtype and centromere pattern.`,
        next: 'ana-result'
      },
      {
        id: 'ana-result',
        type: 'presentation',
        text: `<strong>Autoantibody results:</strong><br><br>
<ul>
<li><strong>ANA:</strong> Positive 1:320, <strong>centromere pattern</strong> (discrete speckled)</li>
<li><strong>Anti-centromere antibody (ACA):</strong> Positive</li>
<li><strong>Anti-Scl-70 (topoisomerase I):</strong> Negative</li>
<li><strong>Anti-RNA polymerase III:</strong> Negative</li>
</ul>
The centromere pattern on IF corresponds to antibodies against centromere proteins (CENP-A, CENP-B, CENP-C). It is virtually diagnostic when seen in the correct clinical context.`,
        next: 'ssc-diagnosis'
      },
      {
        id: 'ssc-diagnosis',
        type: 'decision',
        prompt: 'What is the most likely diagnosis?',
        options: [
          {
            label: 'Limited cutaneous systemic sclerosis (lcSSc)',
            next: 'screening',
            feedback: 'Correct. The combination of CREST features with skin tightening limited to the face and distal extremities, plus anti-centromere antibodies, defines limited cutaneous SSc. This was formerly called CREST syndrome.'
          },
          {
            label: 'Diffuse cutaneous systemic sclerosis (dcSSc)',
            next: 'not-diffuse-teaching',
            feedback: 'Not quite. In diffuse SSc, skin tightening extends proximal to the elbows and knees and may involve the trunk. This patient\'s skin changes are limited to fingers and face. Diffuse SSc is associated with anti-Scl-70 or anti-RNA polymerase III, not anti-centromere.'
          },
          {
            label: 'Mixed Connective Tissue Disease (MCTD)',
            next: 'not-mctd-teaching',
            feedback: 'Not the best answer. MCTD requires high-titre anti-U1-RNP antibodies and features overlapping SLE, SSc, and myositis. This patient has a pure SSc picture with anti-centromere antibodies and no RNP positivity.'
          }
        ]
      },
      {
        id: 'not-diffuse-teaching',
        type: 'presentation',
        text: `<strong>Learning point: Limited vs Diffuse SSc</strong><br><br>
<table style="width:100%;font-size:13px;">
<tr><td><strong>Limited (lcSSc)</strong></td><td><strong>Diffuse (dcSSc)</strong></td></tr>
<tr><td>Skin distal to elbows/knees + face</td><td>Skin proximal to elbows/knees + trunk</td></tr>
<tr><td>Anti-centromere</td><td>Anti-Scl-70 or anti-RNA pol III</td></tr>
<tr><td>Slow progression, late PAH</td><td>Rapid progression, early ILD + renal crisis</td></tr>
<tr><td>CREST features prominent</td><td>Diffuse skin, tendon friction rubs</td></tr>
</table>`,
        next: 'screening'
      },
      {
        id: 'not-mctd-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> MCTD is defined by <strong>high-titre anti-U1-RNP antibodies</strong> with clinical overlap features (Raynaud's + swollen hands + features of SLE, SSc, and/or myositis). This patient has a pure scleroderma picture with anti-centromere — a very different antibody profile.`,
        next: 'screening'
      },
      {
        id: 'screening',
        type: 'decision',
        prompt: 'What is the MOST important screening investigation for this antibody profile and diagnosis?',
        options: [
          {
            label: 'Echocardiogram for pulmonary arterial hypertension (PAH)',
            next: 'conclusion',
            feedback: 'Excellent. PAH is the leading cause of death in limited cutaneous SSc. Anti-centromere-positive patients have a particularly high risk (up to 15-25%). Annual echocardiography to estimate PA pressures is recommended. Early detection allows treatment with endothelin receptor antagonists or PDE5 inhibitors.'
          },
          {
            label: 'HRCT chest for interstitial lung disease (ILD)',
            next: 'not-ild-first-teaching',
            feedback: 'ILD screening is important in SSc, but it is more strongly associated with diffuse SSc and anti-Scl-70 antibodies. In limited SSc with anti-centromere, PAH is the greater threat and the priority screening investigation. That said, baseline pulmonary function tests (with DLCO) should be done in all SSc patients.'
          },
          {
            label: 'Renal function monitoring for scleroderma renal crisis',
            next: 'not-renal-teaching',
            feedback: 'Scleroderma renal crisis is predominantly a complication of diffuse SSc, particularly with anti-RNA polymerase III antibodies. It is rare in limited SSc with anti-centromere. PAH screening is the priority here.'
          }
        ]
      },
      {
        id: 'not-ild-first-teaching',
        type: 'presentation',
        text: `<strong>Learning point: SSc antibodies predict organ complications</strong><br>
<ul>
<li><strong>Anti-centromere</strong> → PAH (limited SSc) — the primary risk</li>
<li><strong>Anti-Scl-70</strong> → ILD (diffuse SSc) — ground-glass then fibrosis</li>
<li><strong>Anti-RNA pol III</strong> → Scleroderma renal crisis (diffuse SSc) — hypertensive emergency</li>
</ul>
The antibody profile guides which organ to screen most urgently.`,
        next: 'conclusion'
      },
      {
        id: 'not-renal-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Scleroderma renal crisis (SRC) presents as a hypertensive emergency with rapidly progressive renal failure. It is strongly associated with <strong>anti-RNA polymerase III</strong> and <strong>diffuse SSc</strong>. ACE inhibitors are the treatment of choice. SRC is rare in limited SSc with anti-centromere antibodies.<br><br>The priority screening here is PAH.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Limited Cutaneous Systemic Sclerosis (lcSSc)</strong><br><br>
Mrs Kowalski has limited cutaneous SSc with the classic CREST features and anti-centromere antibodies. Her key risks are:<br>
<ul>
<li><strong>Pulmonary arterial hypertension (PAH)</strong> — the leading cause of death in lcSSc. Annual echocardiography and DLCO monitoring are essential.</li>
<li><strong>Oesophageal dysmotility</strong> — manage with PPI and dietary measures</li>
<li><strong>Digital ulceration</strong> — from Raynaud's. Calcium channel blockers (nifedipine) are first-line.</li>
</ul>
The centromere pattern on ANA IF is virtually pathognomonic for this diagnosis in the right clinical context.`,
        keyLearning: [
          'Centromere pattern = limited cutaneous SSc (CREST)',
          'Anti-centromere patients need annual PAH screening',
          'SSc antibodies predict organ involvement: centromere→PAH, Scl-70→ILD, RNA pol III→renal crisis',
          'CREST: Calcinosis, Raynaud\'s, Esophageal dysmotility, Sclerodactyly, Telangiectasia',
          'Limited SSc = skin distal to elbows/knees and face only'
        ],
        relatedAntibodies: ['Centromere (ACA)', 'Scl-70', 'RNA Polymerase III']
      }
    ]
  },

  {
    id: 'ana-case-3',
    title: 'The Weak Gardener',
    summary: '45-year-old with proximal weakness, mechanic\'s hands, and breathlessness',
    difficulty: 'intermediate',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mr Chen, 45, landscape gardener</strong><br><br>
Referred to rheumatology with a <strong>2-month history</strong> of:<br>
<ul>
<li><strong>Progressive proximal muscle weakness</strong> — difficulty climbing stairs, getting out of chairs, lifting tools overhead</li>
<li>Rough, cracked skin on his <strong>hands</strong> — particularly the lateral and palmar aspects of his fingers ("mechanic's hands")</li>
<li><strong>Mild dyspnoea on exertion</strong> and a dry cough</li>
<li>Intermittent fevers and arthralgia in his hands</li>
</ul>
<strong>Examination:</strong> MRC grade 4/5 power in deltoids and hip flexors bilaterally (proximal pattern). Hyperkeratotic fissuring on the radial aspects of his fingers ("mechanic's hands"). No skin rash over the knuckles. Bibasal fine inspiratory crackles.<br><br>
<strong>Bloods:</strong> CK <strong>4,850 U/L</strong> (normal &lt;200). ALT 120 U/L (from muscle, not liver). ESR 45 mm/hr. LDH elevated.`,
        next: 'antibody-choice'
      },
      {
        id: 'antibody-choice',
        type: 'decision',
        prompt: 'Which antibody panel would you request?',
        options: [
          {
            label: 'Myositis-specific antibody (MSA) panel including anti-Jo-1',
            next: 'antibody-result',
            feedback: 'Perfect. Proximal muscle weakness with raised CK, mechanic\'s hands, and lung crackles strongly suggests an inflammatory myopathy — specifically antisynthetase syndrome. The MSA panel will include anti-Jo-1 (the most common antisynthetase antibody) plus others like PL-7, PL-12, EJ, and OJ.'
          },
          {
            label: 'ANA only',
            next: 'ana-only-teaching',
            feedback: 'ANA alone is insufficient here. While ANA may be positive in inflammatory myopathy, it does not identify the specific antibody. You need the myositis-specific antibody (MSA) panel to differentiate between dermatomyositis, polymyositis, and antisynthetase syndrome — each has different prognoses and complications.'
          },
          {
            label: 'CK isoenzymes to confirm muscle source',
            next: 'ck-teaching',
            feedback: 'CK isoenzymes are unnecessary here. The clinical picture (proximal weakness, mechanic\'s hands, lung crackles) with a CK of nearly 5000 makes inflammatory myopathy virtually certain. Autoantibody testing is the priority to guide management.'
          }
        ]
      },
      {
        id: 'ana-only-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> In suspected inflammatory myopathy, the <strong>myositis-specific antibody (MSA) panel</strong> is essential because different antibodies define different syndromes with distinct management:<br>
<ul>
<li><strong>Anti-Jo-1, PL-7, PL-12</strong> (antisynthetase antibodies) → antisynthetase syndrome with ILD risk</li>
<li><strong>Anti-Mi-2</strong> → classic dermatomyositis (good prognosis)</li>
<li><strong>Anti-MDA5</strong> → amyopathic DM with rapidly progressive ILD</li>
<li><strong>Anti-TIF1-gamma, Anti-NXP2</strong> → DM with malignancy association</li>
<li><strong>Anti-SRP, Anti-HMGCR</strong> → necrotising myopathy</li>
</ul>
The ANA alone would miss this crucial distinction.`,
        next: 'antibody-result'
      },
      {
        id: 'ck-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> When CK is markedly elevated (&gt;5&times; upper limit) with proximal weakness, the source is clearly skeletal muscle. CK isoenzymes are useful when the source is ambiguous (e.g. distinguishing cardiac CK-MB from skeletal CK-MM), but not needed here.<br><br>The next step is autoantibody testing to classify the myopathy and guide management.`,
        next: 'antibody-result'
      },
      {
        id: 'antibody-result',
        type: 'presentation',
        text: `<strong>Autoantibody results:</strong><br><br>
<ul>
<li><strong>ANA:</strong> Positive 1:320, <strong>speckled pattern</strong></li>
<li><strong>Anti-Jo-1:</strong> Positive</li>
<li><strong>Anti-Ro (SSA):</strong> Positive (commonly co-occurs with Jo-1)</li>
<li><strong>Anti-Mi-2:</strong> Negative</li>
<li><strong>Anti-MDA5:</strong> Negative</li>
<li><strong>Anti-SRP:</strong> Negative</li>
</ul>
Anti-Jo-1 is the most common antisynthetase antibody, found in ~25-30% of inflammatory myopathy patients. It targets histidyl-tRNA synthetase.`,
        next: 'myositis-diagnosis'
      },
      {
        id: 'myositis-diagnosis',
        type: 'decision',
        prompt: 'What is the most likely diagnosis?',
        options: [
          {
            label: 'Antisynthetase syndrome',
            next: 'imaging-choice',
            feedback: 'Correct. The triad of myositis + mechanic\'s hands + ILD symptoms with anti-Jo-1 positivity defines antisynthetase syndrome. The classic features (not all required) include: myositis, ILD, mechanic\'s hands, arthritis, fever, and Raynaud\'s.'
          },
          {
            label: 'Polymyositis',
            next: 'not-pm-teaching',
            feedback: 'Close, but too broad. "Polymyositis" is a term being replaced by more specific classifications. This patient has anti-Jo-1 with mechanic\'s hands and lung involvement — this is specifically antisynthetase syndrome, which has distinct prognostic and management implications (particularly the ILD risk).'
          },
          {
            label: 'Dermatomyositis',
            next: 'not-dm-teaching',
            feedback: 'Not quite. Dermatomyositis requires characteristic skin findings: heliotrope rash (periorbital), Gottron\'s papules (knuckles), shawl sign, or V-sign. This patient has mechanic\'s hands but no DM-specific rashes. Anti-Jo-1 with mechanic\'s hands points to antisynthetase syndrome specifically.'
          }
        ]
      },
      {
        id: 'not-pm-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> The term "polymyositis" is increasingly being reclassified. Many cases previously called PM are now recognised as:<br>
<ul>
<li><strong>Antisynthetase syndrome</strong> (anti-Jo-1, PL-7, PL-12, etc.)</li>
<li><strong>Immune-mediated necrotising myopathy</strong> (anti-SRP, anti-HMGCR)</li>
<li><strong>Overlap myositis</strong> (with features of other CTDs)</li>
</ul>
Identifying antisynthetase syndrome specifically is important because of the high risk of <strong>interstitial lung disease (ILD)</strong>.`,
        next: 'imaging-choice'
      },
      {
        id: 'not-dm-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Mechanic's hands (hyperkeratotic fissuring on the lateral/palmar fingers) is a feature of <strong>antisynthetase syndrome</strong>, not dermatomyositis. DM-specific skin findings include:<br>
<ul>
<li><strong>Gottron's papules</strong> — over MCPs and PIPs</li>
<li><strong>Heliotrope rash</strong> — periorbital purple discolouration</li>
<li><strong>Shawl/V-sign</strong> — photodistributed rash</li>
</ul>
The distinction matters because different MSAs predict different complications.`,
        next: 'imaging-choice'
      },
      {
        id: 'imaging-choice',
        type: 'decision',
        prompt: 'Given anti-Jo-1 positivity, which imaging investigation is most urgently needed?',
        options: [
          {
            label: 'HRCT chest for interstitial lung disease',
            next: 'conclusion',
            feedback: 'Essential. ILD occurs in up to 70-80% of anti-Jo-1-positive patients and is the major determinant of morbidity and mortality. HRCT may show ground-glass opacities, NSIP pattern, or organising pneumonia. Even asymptomatic patients need baseline imaging — this patient already has symptoms and crackles.'
          },
          {
            label: 'MRI of the thighs',
            next: 'mri-teaching',
            feedback: 'MRI thighs is useful for confirming myositis (showing muscle oedema) and guiding biopsy site, but it is not the urgent investigation here. The dyspnoea and crackles combined with anti-Jo-1 mean ILD screening takes priority — ILD drives mortality in antisynthetase syndrome.'
          },
          {
            label: 'CT abdomen/pelvis for malignancy screening',
            next: 'malig-teaching',
            feedback: 'Malignancy screening is important in dermatomyositis (particularly with anti-TIF1-gamma and anti-NXP2), but antisynthetase syndrome with anti-Jo-1 does not carry a significant malignancy association. The urgent investigation here is lung imaging for ILD.'
          }
        ]
      },
      {
        id: 'mri-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> MRI muscle is valuable for confirming active myositis and selecting a biopsy site, but in antisynthetase syndrome, <strong>ILD is the prognostic driver</strong>. Up to 80% of Jo-1-positive patients develop ILD, and it may progress rapidly. HRCT chest is the priority.`,
        next: 'conclusion'
      },
      {
        id: 'malig-teaching',
        type: 'presentation',
        text: `<strong>Learning point: Malignancy risk in myositis varies by antibody:</strong><br>
<ul>
<li><strong>Anti-TIF1-gamma</strong> (p155/140) → strongest malignancy association (up to 40-60% in adults)</li>
<li><strong>Anti-NXP2</strong> → malignancy association (moderate)</li>
<li><strong>Anti-Jo-1 / antisynthetase</strong> → low malignancy risk</li>
<li><strong>Anti-Mi-2</strong> → low malignancy risk (good prognosis DM)</li>
</ul>
The urgent investigation here is HRCT chest for ILD.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Antisynthetase Syndrome</strong><br><br>
Mr Chen has antisynthetase syndrome with the classic triad of myositis, mechanic's hands, and ILD (evidenced by dyspnoea and bibasal crackles). His anti-Jo-1 positivity confirms the diagnosis.<br><br>
<strong>Key management:</strong><br>
<ul>
<li><strong>HRCT chest</strong> — baseline and surveillance for ILD (NSIP or OP pattern)</li>
<li><strong>Pulmonary function tests</strong> — FVC and DLCO as baseline and for monitoring</li>
<li><strong>Immunosuppression</strong> — typically corticosteroids + steroid-sparing agent (mycophenolate, azathioprine, or tacrolimus)</li>
<li><strong>Monitor CK</strong> — tracks myositis activity</li>
</ul>
ILD is the leading cause of morbidity and mortality in antisynthetase syndrome — early detection and treatment are critical.`,
        keyLearning: [
          'Anti-Jo-1 is the most common antisynthetase antibody (~25-30% of IIM)',
          'Antisynthetase syndrome: myositis + ILD + mechanic\'s hands + arthritis + fever + Raynaud\'s',
          'ILD occurs in up to 80% of Jo-1-positive patients — drives mortality',
          'MSA panel differentiates myositis subtypes with distinct prognoses',
          'Mechanic\'s hands = antisynthetase, NOT dermatomyositis',
          'Anti-TIF1-gamma and anti-NXP2 carry malignancy risk, not Jo-1'
        ],
        relatedAntibodies: ['Jo-1', 'PL-7', 'PL-12', 'Ro (SSA)', 'Mi-2', 'MDA5']
      }
    ]
  },

  {
    id: 'ana-case-4',
    title: 'The Overlapping Puzzle',
    summary: '32-year-old with swollen fingers, Raynaud\'s, and pleuritic chest pain',
    difficulty: 'advanced',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Ms Rivera, 32, graphic designer</strong><br><br>
Referred from the emergency department where she presented with <strong>pleuritic chest pain</strong>. On further history:<br>
<ul>
<li><strong>Swollen, puffy fingers</strong> ("sausage digits") for 3 months, worse in the morning</li>
<li><strong>Raynaud's phenomenon</strong> for 2 years — severe, with digital tip ulceration on the right 4th finger</li>
<li><strong>Fatigue and diffuse myalgia</strong> — she has noticed difficulty lifting heavy objects</li>
<li><strong>Pleuritic chest pain</strong> for 5 days, worse on inspiration</li>
</ul>
<strong>Examination:</strong> Swollen, sausage-shaped fingers bilaterally. Mild sclerodactyly limited to fingers. Decreased grip strength. Small left pleural effusion on CXR. No malar rash, no Gottron's papules, no mechanic's hands.<br><br>
<strong>Bloods:</strong> ANA positive <strong>1:1280 speckled pattern</strong>. CK mildly elevated (350 U/L). ESR 55 mm/hr. FBC normal. Complement C3/C4 normal.`,
        next: 'antibody-predict'
      },
      {
        id: 'antibody-predict',
        type: 'decision',
        prompt: 'Given these features and the speckled ANA, which antibody is most likely positive?',
        options: [
          {
            label: 'Anti-U1-RNP',
            next: 'antibody-result',
            feedback: 'Correct. The combination of puffy/sausage fingers, Raynaud\'s, serositis (pleurisy), myalgia, and a high-titre speckled ANA is classic for anti-U1-RNP positivity. When present in high titre with overlapping CTD features, this points towards MCTD.'
          },
          {
            label: 'Anti-dsDNA',
            next: 'not-dsdna-teaching',
            feedback: 'Unlikely. While she has serositis (which occurs in SLE), she lacks other SLE-specific features (malar rash, cytopenias, oral ulcers). The speckled ANA pattern is not typical for dsDNA (which gives homogeneous). The puffy fingers and Raynaud\'s with overlap features suggest a different antibody.'
          },
          {
            label: 'Anti-Scl-70 (topoisomerase I)',
            next: 'not-scl70-teaching',
            feedback: 'Not the best fit. Anti-Scl-70 is seen in diffuse cutaneous SSc with ILD. While this patient has some scleroderma features (sclerodactyly, Raynaud\'s), the sausage fingers, serositis, and myalgia — overlap features spanning multiple CTDs — point to a different antibody.'
          }
        ]
      },
      {
        id: 'not-dsdna-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> The ANA pattern gives a clue:<br>
<ul>
<li><strong>Homogeneous</strong> → dsDNA, histones</li>
<li><strong>Speckled</strong> → Sm, RNP, Ro, La, Jo-1, Scl-70</li>
</ul>
This patient's <strong>speckled pattern at 1:1280</strong> with overlap features (scleroderma + myositis + serositis) most likely reflects anti-U1-RNP. Normal complement also argues against active SLE.`,
        next: 'antibody-result'
      },
      {
        id: 'not-scl70-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> The key distinction is the <strong>overlap pattern</strong>. Anti-Scl-70 produces a pure scleroderma phenotype (diffuse skin involvement + ILD). This patient has features spanning multiple CTDs:<br>
<ul>
<li><strong>Scleroderma features:</strong> Raynaud's, sclerodactyly</li>
<li><strong>Lupus features:</strong> Serositis (pleurisy)</li>
<li><strong>Myositis features:</strong> Myalgia, raised CK</li>
</ul>
This <strong>overlap presentation</strong> with sausage fingers is the hallmark of anti-U1-RNP.`,
        next: 'antibody-result'
      },
      {
        id: 'antibody-result',
        type: 'presentation',
        text: `<strong>Autoantibody results:</strong><br><br>
<ul>
<li><strong>ANA:</strong> Positive 1:1280, speckled pattern</li>
<li><strong>Anti-U1-RNP:</strong> <strong>Strongly positive</strong> (high titre)</li>
<li><strong>Anti-dsDNA:</strong> Negative</li>
<li><strong>Anti-Sm:</strong> Negative</li>
<li><strong>Anti-Scl-70:</strong> Negative</li>
<li><strong>Anti-Jo-1:</strong> Negative</li>
</ul>
<strong>Key point:</strong> Anti-U1-RNP in high titre <strong>without</strong> other specific antibodies (dsDNA, Sm) is the hallmark serological finding. If anti-Sm were also positive, SLE would be more likely. The isolated high-titre RNP is the distinguishing feature.`,
        next: 'mctd-diagnosis'
      },
      {
        id: 'mctd-diagnosis',
        type: 'decision',
        prompt: 'What is the most likely diagnosis?',
        options: [
          {
            label: 'Mixed Connective Tissue Disease (MCTD)',
            next: 'monitoring-choice',
            feedback: 'Correct. MCTD is defined by high-titre anti-U1-RNP antibodies with clinical features overlapping at least two of: SLE, SSc, and polymyositis. This patient has scleroderma features (Raynaud\'s, sclerodactyly), lupus features (serositis), and myositis features (raised CK, myalgia) — a classic MCTD presentation.'
          },
          {
            label: 'Systemic Lupus Erythematosus (SLE)',
            next: 'not-sle-teaching',
            feedback: 'While she has serositis (an SLE feature), the overall picture is broader. SLE typically has multi-system inflammation with dsDNA/Sm antibodies. This patient has scleroderma and myositis features that go beyond SLE, and her anti-U1-RNP is positive without dsDNA/Sm — pointing to MCTD.'
          },
          {
            label: 'Overlap SSc/myositis syndrome',
            next: 'not-overlap-teaching',
            feedback: 'Close reasoning. The distinction between MCTD and overlap syndrome is debated, but MCTD is specifically defined by high-titre anti-U1-RNP with features spanning ≥2 CTDs. Some experts consider MCTD a distinct entity; others view it as an overlap syndrome. Regardless, the defining feature is the isolated high-titre U1-RNP.'
          }
        ]
      },
      {
        id: 'not-sle-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> SLE and MCTD can overlap, but key differences include:<br>
<ul>
<li><strong>MCTD:</strong> High-titre U1-RNP, sausage fingers, Raynaud's prominent, overlap features, complement usually normal</li>
<li><strong>SLE:</strong> dsDNA and/or Sm positive, complement consumed, malar rash, nephritis, cytopenias</li>
</ul>
If anti-Sm were also positive, the diagnosis would shift towards SLE. The <strong>isolated U1-RNP</strong> defines MCTD.`,
        next: 'monitoring-choice'
      },
      {
        id: 'not-overlap-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> MCTD is sometimes called the "anti-U1-RNP syndrome." Whether it is truly a distinct entity or simply an overlap syndrome remains debated. Clinically, what matters is:<br>
<ul>
<li>Recognising the <strong>high-titre U1-RNP</strong> as the defining antibody</li>
<li>Understanding the <strong>complication profile</strong> (especially PAH risk)</li>
<li>Monitoring for <strong>evolution</strong> — some patients evolve into a more defined CTD over time</li>
</ul>`,
        next: 'monitoring-choice'
      },
      {
        id: 'monitoring-choice',
        type: 'decision',
        prompt: 'What is the most important long-term screening consideration in MCTD?',
        options: [
          {
            label: 'Pulmonary hypertension screening (echocardiography)',
            next: 'conclusion',
            feedback: 'Excellent. PAH is the most serious complication of MCTD and a leading cause of death. It occurs in up to 10-20% of patients. Regular echocardiography and DLCO monitoring are recommended. A falling DLCO out of proportion to other lung function parameters is an early warning sign.'
          },
          {
            label: 'Renal function monitoring',
            next: 'not-renal-teaching',
            feedback: 'Renal involvement is uncommon in MCTD (unlike SLE). The major life-threatening complication is pulmonary arterial hypertension (PAH), which should be the primary screening focus.'
          },
          {
            label: 'Liver function monitoring',
            next: 'not-hepatic-teaching',
            feedback: 'Hepatic involvement is not a major feature of MCTD. The critical complication to screen for is pulmonary arterial hypertension (PAH), which is the leading cause of MCTD-related death.'
          }
        ]
      },
      {
        id: 'not-renal-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Unlike SLE (where nephritis affects up to 50%), <strong>renal disease is uncommon in MCTD</strong>. The major life-threatening complications are:<br>
<ul>
<li><strong>Pulmonary arterial hypertension (PAH)</strong> — most important</li>
<li><strong>Interstitial lung disease</strong></li>
<li><strong>Myocarditis/pericarditis</strong></li>
</ul>
Echocardiography and DLCO are the key screening tools.`,
        next: 'conclusion'
      },
      {
        id: 'not-hepatic-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> MCTD does not typically cause liver disease. The vital organ to monitor is the <strong>lung (and pulmonary vasculature)</strong>. PAH develops insidiously and carries high mortality. A declining DLCO on serial pulmonary function testing may be the earliest sign.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Mixed Connective Tissue Disease (MCTD)</strong><br><br>
Ms Rivera has MCTD characterised by high-titre anti-U1-RNP with overlap features spanning SLE (serositis), SSc (Raynaud's, sclerodactyly), and myositis (raised CK, myalgia). Her sausage fingers are the clinical hallmark.<br><br>
<strong>Key management priorities:</strong><br>
<ul>
<li><strong>PAH screening</strong> — echocardiography and DLCO annually</li>
<li><strong>Raynaud's management</strong> — calcium channel blockers, hand warmers, digital ulcer prevention</li>
<li><strong>Immunosuppression</strong> — guided by the dominant clinical feature (serositis, myositis, or arthritis)</li>
<li><strong>Long-term surveillance</strong> — MCTD may evolve into a more defined CTD (SLE or SSc) over years</li>
</ul>`,
        keyLearning: [
          'High-titre anti-U1-RNP without dsDNA/Sm defines MCTD',
          'MCTD = overlap of ≥2 of: SLE, SSc, polymyositis',
          'Sausage fingers (puffy hands) are the clinical hallmark',
          'PAH is the leading cause of MCTD-related mortality',
          'Renal disease is uncommon (unlike SLE)',
          'MCTD may evolve into a more defined CTD over time'
        ],
        relatedAntibodies: ['U1-RNP', 'dsDNA', 'Sm', 'Scl-70']
      }
    ]
  }
];
