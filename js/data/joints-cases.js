export const jointsCases = [
  {
    id: 'joints-case-1',
    title: 'The Stiff Hands',
    summary: '48-year-old woman with bilateral hand swelling, evolving serology, and progressive joint damage',
    difficulty: 'beginner',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mrs Patterson, 48, primary school teacher</strong><br><br>
Presents to her GP with a <strong>4-month history</strong> of:<br>
<ul>
<li><strong>Bilateral hand swelling and stiffness</strong> \u2014 worst in the mornings, lasting ~2 hours before improving</li>
<li>Difficulty with fine motor tasks (buttons, writing on the board)</li>
<li>Fatigue and general malaise</li>
<li>No skin rash, no back pain, no eye symptoms</li>
</ul>
<strong>Examination:</strong> Swollen, tender MCPs 2\u20134 bilaterally. Bilateral wrist synovitis. PIPs 2\u20133 boggy on the right. Positive MTP squeeze test bilaterally. No DIP involvement. No nodules. No nail changes.<br><br>
<strong>This pattern \u2014 symmetric small joint polyarthritis with prolonged morning stiffness \u2014 is a critical pattern to recognise.</strong>`,
        next: 'initial-investigations'
      },
      {
        id: 'initial-investigations',
        type: 'decision',
        prompt: 'What blood tests would you request first?',
        options: [
          {
            label: 'RF, anti-CCP, CRP, ESR, FBC, U&E, LFTs',
            next: 'results-1',
            feedback: 'Correct. RF and anti-CCP are the key serological markers for RA. Inflammatory markers (CRP, ESR) help confirm active inflammation. FBC for anaemia of chronic disease. U&E and LFTs as baseline before starting DMARDs.'
          },
          {
            label: 'ANA, dsDNA, complement levels',
            next: 'not-lupus-teaching',
            feedback: 'Not the best first choice. While SLE can cause joint pain, the symmetric MCP/PIP/wrist pattern with prolonged morning stiffness and no rash/systemic features is more suggestive of RA. RF and anti-CCP should be first-line.'
          },
          {
            label: 'HLA-B27, sacroiliac MRI',
            next: 'not-spa-teaching',
            feedback: 'This pattern is not axial SpA. The symmetric small joint polyarthritis with MCP and PIP involvement points to RA, not spondyloarthropathy. HLA-B27 is relevant for axial disease and enthesitis-predominant patterns.'
          }
        ]
      },
      {
        id: 'not-lupus-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> While SLE can cause a non-erosive arthritis, the clinical pattern here \u2014 <strong>symmetric MCP/PIP/wrist synovitis with prolonged morning stiffness</strong> \u2014 without rash, oral ulcers, serositis, or renal involvement, points to RA. ANA can be positive in RA (~30%), but RF and anti-CCP are the appropriate first-line tests.<br><br>Let's proceed with the right investigations.`,
        next: 'results-1'
      },
      {
        id: 'not-spa-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Axial SpA presents with <strong>inflammatory back pain</strong> (onset <40, improves with exercise, worse at rest) and involves the sacroiliac joints/spine. This patient has peripheral symmetric small joint polyarthritis without back pain or enthesitis \u2014 this is an RA pattern, not SpA.<br><br>Let's order the appropriate tests.`,
        next: 'results-1'
      },
      {
        id: 'results-1',
        type: 'presentation',
        text: `<strong>Investigation results:</strong><br><br>
<ul>
<li><strong>RF: 85 IU/mL</strong> (positive, moderate titre)</li>
<li><strong>Anti-CCP: >250 U/mL</strong> (strongly positive)</li>
<li>CRP: 42 mg/L (elevated)</li>
<li>ESR: 55 mm/hr (elevated)</li>
<li>Hb: 108 g/L (mild normocytic anaemia)</li>
<li>U&E, LFTs: normal</li>
</ul>
<strong>Hand X-rays:</strong> Periarticular osteopenia at MCPs, no definite erosions yet. Soft tissue swelling at MCPs and wrists bilaterally.<br><br>
The patient is <strong>double seropositive</strong> (RF+ and anti-CCP+) with active inflammation. This combination is important for prognosis.`,
        next: 'prognosis-q'
      },
      {
        id: 'prognosis-q',
        type: 'decision',
        prompt: 'What does double seropositivity (RF+ and anti-CCP+) predict?',
        options: [
          {
            label: 'Higher risk of erosive disease and extra-articular manifestations',
            next: 'management-q',
            feedback: 'Correct. Double seropositivity (RF+ CCP+) is the strongest serological predictor of persistent, erosive RA with a higher risk of nodules, ILD, and cardiovascular complications. This patient needs early aggressive DMARD therapy.'
          },
          {
            label: 'Mild, self-limiting disease that rarely needs DMARDs',
            next: 'severity-teaching',
            feedback: 'Incorrect. Double seropositivity is actually associated with MORE severe disease. RF+ CCP+ RA has the highest erosion rates and worst prognosis among RA subsets.'
          },
          {
            label: 'The same prognosis as seronegative RA',
            next: 'severity-teaching',
            feedback: 'Incorrect. Seropositive RA (especially double-positive) has a worse prognosis than seronegative RA, with higher rates of erosion, nodules, and extra-articular disease.'
          }
        ]
      },
      {
        id: 'severity-teaching',
        type: 'presentation',
        text: `<strong>Key teaching point:</strong> Double seropositivity (RF+ and anti-CCP+) is the <strong>strongest predictor</strong> of persistent, erosive RA. These patients have:<br>
<ul>
<li>Higher radiographic progression rates</li>
<li>More extra-articular manifestations (nodules, ILD, vasculitis)</li>
<li>Increased cardiovascular risk</li>
<li>Greater need for early aggressive therapy</li>
</ul>
Anti-CCP alone has >95% specificity for RA and is independently associated with erosive disease. This is why early DMARD therapy is critical.`,
        next: 'management-q'
      },
      {
        id: 'management-q',
        type: 'decision',
        prompt: 'What is the most appropriate initial DMARD for this patient?',
        options: [
          {
            label: 'Methotrexate (with folic acid)',
            next: 'conclusion-good',
            feedback: 'Correct. Methotrexate is the anchor DMARD for RA \u2014 first-line in all major guidelines (ACR, EULAR, NICE). Start within 3 months of symptom onset for best outcomes. Always co-prescribe folic acid to reduce side effects.'
          },
          {
            label: 'Prednisolone alone as long-term monotherapy',
            next: 'steroid-teaching',
            feedback: 'Steroids are useful as bridging therapy while waiting for DMARDs to take effect, but long-term steroid monotherapy is NOT recommended. The goal is steroid-sparing DMARD therapy (methotrexate first-line).'
          },
          {
            label: 'NSAIDs only and review in 6 months',
            next: 'nsaid-teaching',
            feedback: 'NSAIDs alone are inadequate for RA \u2014 they reduce symptoms but do NOT prevent joint damage. With double seropositivity and active synovitis, early DMARD therapy (within 3 months) is essential to prevent irreversible erosions.'
          }
        ]
      },
      {
        id: 'steroid-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Short-term steroids (oral prednisolone or IM depomedrone) are excellent for <strong>bridging</strong> while waiting for DMARDs to take effect (6\u201312 weeks). However, long-term steroid monotherapy causes osteoporosis, diabetes, infections, and does not adequately prevent erosions.<br><br><strong>Methotrexate</strong> remains the first-line DMARD for RA.`,
        next: 'conclusion-good'
      },
      {
        id: 'nsaid-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> The \u2018window of opportunity\u2019 in RA is the first 3\u20136 months \u2014 early DMARD therapy during this period significantly improves long-term outcomes. NSAIDs alone allow ongoing joint damage.<br><br><strong>Methotrexate</strong> is first-line. Start early, treat to target (remission or low disease activity).`,
        next: 'conclusion-good'
      },
      {
        id: 'conclusion-good',
        type: 'conclusion',
        text: `<strong>Diagnosis: Seropositive Rheumatoid Arthritis (RF+ / anti-CCP+)</strong><br><br>
Mrs Patterson was started on methotrexate 15 mg weekly with folic acid 5 mg (not on methotrexate day), and a short course of prednisolone as bridging therapy. At 3-month review, her DAS28 had improved from 5.8 to 3.1. She achieved low disease activity by 6 months.<br><br>
<strong>Key principles:</strong> Early diagnosis, early DMARD therapy, treat-to-target strategy, and recognition of prognostic markers (double seropositivity) are the foundations of modern RA management.`,
        keyLearning: [
          "Symmetric MCP/PIP/wrist polyarthritis with morning stiffness >30 min = RA pattern",
          "Anti-CCP has ~95% specificity for RA",
          "Double seropositivity (RF+ CCP+) predicts aggressive erosive disease",
          "Methotrexate is first-line DMARD \u2014 start within 3 months",
          "Treat-to-target: aim for remission or low disease activity"
        ],
        relatedAntibodies: ["RF (IgM)", "Anti-CCP2", "HLA-DR4 / Shared Epitope", "CRP", "ESR"]
      }
    ]
  },
  {
    id: 'joints-case-2',
    title: 'The Seronegative Puzzle',
    summary: '52-year-old man with inflammatory polyarthritis but negative RF and anti-CCP',
    difficulty: 'intermediate',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mr Davies, 52, retired firefighter</strong><br><br>
Referred by GP with a <strong>6-month history</strong> of:<br>
<ul>
<li><strong>Swollen hands and feet</strong> \u2014 mornings stiffness lasting ~90 minutes</li>
<li>Wrists, MCPs, and MTPs affected</li>
<li>Weight loss (3 kg) and fatigue</li>
<li>No skin rash, no back pain, no recent infections</li>
</ul>
<strong>Examination:</strong> Synovitis of MCPs 2\u20134 bilaterally, both wrists, and MTPs 2\u20135 bilaterally. No DIP involvement. No dactylitis. No nail changes. No enthesitis. No nodules.<br><br>
<strong>Bloods:</strong> RF <strong>negative</strong>. Anti-CCP <strong>negative</strong>. CRP 38 mg/L. ESR 45 mm/hr.<br><br>
This is a diagnostic challenge. The pattern is inflammatory, but serology is unhelpful.`,
        next: 'differential-q'
      },
      {
        id: 'differential-q',
        type: 'decision',
        prompt: 'What is your differential diagnosis for this seronegative inflammatory polyarthritis?',
        options: [
          {
            label: 'Seronegative RA, PsA (polyarticular), CPPD polyarthritis',
            next: 'workup',
            feedback: 'Excellent. This is the correct broad differential. Seronegative RA is a diagnosis of exclusion. You need to actively rule out PsA (check skin, nails, family history) and CPPD (especially in older patients \u2014 check X-rays for chondrocalcinosis).'
          },
          {
            label: 'Definitely not RA since RF and CCP are negative',
            next: 'sn-teaching',
            feedback: 'Incorrect. ~20\u201330% of RA is seronegative. Negative RF and CCP do NOT exclude RA. The clinical pattern (symmetric polyarthritis with prolonged morning stiffness) is highly suggestive.'
          },
          {
            label: 'Fibromyalgia with coincidentally raised inflammatory markers',
            next: 'not-fibro-teaching',
            feedback: 'While fibromyalgia causes widespread pain and fatigue, it does NOT cause synovitis, raised CRP/ESR, or joint swelling on examination. This patient has objective synovitis \u2014 this is inflammatory arthritis, not fibromyalgia.'
          }
        ]
      },
      {
        id: 'sn-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> ~20\u201330% of RA is seronegative (RF\u2212 / CCP\u2212). The 2010 ACR/EULAR classification criteria for RA can be met on clinical grounds alone (synovitis, duration, acute phase reactants, and exclusion of other diagnoses). Seronegative RA is a valid diagnosis.<br><br>However, before labelling someone as seronegative RA, you must exclude PsA, CPPD, and other mimics.`,
        next: 'workup'
      },
      {
        id: 'not-fibro-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Fibromyalgia causes pain and fatigue but does NOT cause:<br>
<ul><li>Objective joint swelling or synovitis on examination</li><li>Elevated CRP or ESR</li><li>Morning stiffness >30 minutes</li></ul>
This patient has measurable synovitis and raised inflammatory markers \u2014 this is inflammatory arthritis.`,
        next: 'workup'
      },
      {
        id: 'workup',
        type: 'presentation',
        text: `<strong>Further workup:</strong><br><br>
<ul>
<li><strong>Skin check:</strong> No psoriasis on elbows, knees, scalp, natal cleft, or umbilicus. No nail pitting.</li>
<li><strong>Family history:</strong> No psoriasis. Mother had \u2018arthritis\u2019 (uncertain type).</li>
<li><strong>Hand and foot X-rays:</strong> Periarticular osteopenia at MCPs. Marginal erosion at MTP5 right. No chondrocalcinosis.</li>
<li><strong>Anti-CarP antibodies:</strong> <strong>Positive</strong></li>
<li><strong>Ultrasound hands/wrists:</strong> Active synovitis with power Doppler signal in MCPs 2\u20134 and both wrists. Erosion at MCP2 right.</li>
</ul>
The positive anti-CarP and ultrasound-confirmed erosive synovitis support a diagnosis of <strong>seronegative RA</strong>.`,
        next: 'management-decision'
      },
      {
        id: 'management-decision',
        type: 'decision',
        prompt: 'Should this patient be treated any differently from seropositive RA?',
        options: [
          {
            label: 'Same treatment \u2014 methotrexate first-line, treat-to-target',
            next: 'conclusion',
            feedback: 'Correct. Seronegative RA is treated identically to seropositive RA. Methotrexate is first-line, with the same treat-to-target strategy. The presence of erosions and positive anti-CarP confirms this is genuine inflammatory disease requiring aggressive treatment.'
          },
          {
            label: 'Milder treatment since seronegative RA is always less severe',
            next: 'sn-severity-teaching',
            feedback: 'Incorrect. While seropositive RA is statistically more erosive, seronegative RA can still be aggressive. This patient already has erosions at 6 months. Treatment should be the same \u2014 methotrexate first-line, treat-to-target.'
          },
          {
            label: 'Wait and observe since the diagnosis is uncertain',
            next: 'delay-teaching',
            feedback: 'Incorrect. This patient has confirmed inflammatory, erosive arthritis with no alternative diagnosis. Delaying treatment beyond the 3-month window of opportunity worsens outcomes. The evidence is sufficient for a working diagnosis and treatment.'
          }
        ]
      },
      {
        id: 'sn-severity-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Seronegative RA can still be erosive and disabling. This patient already has erosions at 6 months. The treatment approach is identical: methotrexate first-line, escalate if inadequate response by 3\u20136 months. Novel markers like anti-CarP may help confirm the diagnosis and predict erosive progression.`,
        next: 'conclusion'
      },
      {
        id: 'delay-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> The \u2018window of opportunity\u2019 in RA means starting DMARDs within 3 months of symptom onset gives the best long-term outcomes. This patient already has erosions \u2014 further delay will cause irreversible damage. Ultrasound-confirmed synovitis + erosions = sufficient evidence to start treatment.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Seronegative Rheumatoid Arthritis (RF\u2212 / CCP\u2212, Anti-CarP+)</strong><br><br>
Mr Davies was started on methotrexate with bridging steroids. His arthritis responded well, achieving low disease activity by 4 months. He remains under follow-up with serial imaging to monitor for progression.<br><br>
<strong>Key message:</strong> Seronegative RA is a valid diagnosis after excluding mimics (PsA, CPPD, SpA). It is treated identically to seropositive RA. Novel markers like anti-CarP may help identify truly inflammatory seronegative disease.`,
        keyLearning: [
          "20\u201330% of RA is seronegative \u2014 negative RF/CCP does NOT exclude RA",
          "Must exclude PsA, CPPD, and SpA before diagnosing seronegative RA",
          "Anti-CarP is a novel marker present in some seronegative RA patients",
          "Ultrasound can confirm synovitis and detect early erosions",
          "Treatment is the same as seropositive RA \u2014 methotrexate first-line"
        ],
        relatedAntibodies: ["Anti-CarP", "14-3-3 Eta", "RF (negative)", "Anti-CCP (negative)"]
      }
    ]
  },
  {
    id: 'joints-case-3',
    title: 'The Aching Back',
    summary: '26-year-old man with chronic lower back pain \u2014 mechanical or inflammatory?',
    difficulty: 'intermediate',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Mr Okafor, 26, software developer</strong><br><br>
Presents to rheumatology outpatients with a <strong>9-month history</strong> of:<br>
<ul>
<li><strong>Lower back pain and stiffness</strong> \u2014 worst in the mornings and after prolonged sitting</li>
<li>Pain <strong>improves with exercise</strong> (jogging, stretching)</li>
<li>Wakes at <strong>3\u20134am</strong> with back pain, has to get up and move around</li>
<li>Previous episode of <strong>acute red eye</strong> (anterior uveitis) 6 months ago, treated by ophthalmology</li>
<li>No peripheral joint swelling, no skin rash</li>
</ul>
<strong>Examination:</strong> Reduced lumbar flexion (modified Schober's test: 2 cm expansion, normal >5 cm). Tenderness over both SI joints. No peripheral synovitis. No enthesitis palpable. Chest expansion slightly reduced (3 cm).<br><br>
<strong>This presentation has several features that distinguish it from mechanical back pain.</strong>`,
        next: 'ibp-question'
      },
      {
        id: 'ibp-question',
        type: 'decision',
        prompt: 'Which features suggest inflammatory rather than mechanical back pain?',
        options: [
          {
            label: 'Onset <40, insidious, improves with exercise, worse at rest, night pain',
            next: 'ibp-correct',
            feedback: 'Correct. These are the 5 key features of inflammatory back pain (ASAS criteria \u2014 \u22654 of 5 = inflammatory). This patient has all 5, plus prior uveitis and reduced Schober\'s. Very high suspicion for axial SpA.'
          },
          {
            label: 'Worsens with activity, sudden onset, relieved by rest',
            next: 'ibp-wrong',
            feedback: 'These describe MECHANICAL back pain, which is the opposite pattern. Inflammatory back pain improves with exercise and worsens with rest. This distinction is one of the most important in rheumatology history-taking.'
          },
          {
            label: 'Age over 50 and presence of night pain alone',
            next: 'ibp-wrong-2',
            feedback: 'Night pain can occur in both inflammatory and mechanical pain (and malignancy). The combination of features \u2014 young onset, insidious, improves with exercise, worse at rest, plus night pain \u2014 is what defines inflammatory back pain. This patient is 26, well under 40.'
          }
        ]
      },
      {
        id: 'ibp-wrong',
        type: 'presentation',
        text: `<strong>Key distinction:</strong><br><br>
<strong>Inflammatory back pain:</strong> Insidious onset, age <40, improves with EXERCISE, WORSE at rest, night pain \u2192 Think SpA<br><br>
<strong>Mechanical back pain:</strong> Often sudden onset, worse with ACTIVITY, improves with REST, no night waking \u2192 Think disc/degenerative<br><br>
This patient\u2019s pain improves with exercise and wakes him at night \u2014 this is inflammatory.`,
        next: 'ibp-correct'
      },
      {
        id: 'ibp-wrong-2',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Inflammatory back pain is defined by a CLUSTER of features, not just one. The ASAS criteria require \u22654 of: (1) onset <40, (2) insidious onset, (3) improvement with exercise, (4) no improvement with rest, (5) pain at night. This patient meets all five criteria.`,
        next: 'ibp-correct'
      },
      {
        id: 'ibp-correct',
        type: 'presentation',
        text: `<strong>Investigations requested:</strong><br><br>
<ul>
<li><strong>HLA-B27:</strong> <strong>Positive</strong></li>
<li>CRP: 28 mg/L (mildly elevated)</li>
<li>RF: Negative. Anti-CCP: Negative.</li>
<li><strong>MRI sacroiliac joints:</strong> <strong>Bilateral sacroiliac bone marrow oedema</strong> (active sacroiliitis) with subchondral erosions on the right</li>
<li>Pelvic X-ray: Suspicious bilateral sclerosis at SI joints but equivocal for grading</li>
</ul>
The MRI shows active sacroiliitis, confirming the clinical suspicion.`,
        next: 'diagnosis-q'
      },
      {
        id: 'diagnosis-q',
        type: 'decision',
        prompt: 'Based on inflammatory back pain + MRI sacroiliitis + HLA-B27, what is the diagnosis?',
        options: [
          {
            label: 'Axial spondyloarthritis (with sacroiliitis on MRI)',
            next: 'treatment-q',
            feedback: 'Correct. This patient meets the ASAS criteria for axial SpA: inflammatory back pain + MRI sacroiliitis (imaging arm). The HLA-B27 positivity and history of anterior uveitis further support the diagnosis. Whether this is classified as non-radiographic axSpA or AS depends on X-ray findings.'
          },
          {
            label: 'Mechanical back pain with incidental MRI findings',
            next: 'not-mechanical-teaching',
            feedback: 'Bilateral BME on MRI is not incidental \u2014 it represents active sacroiliitis. Combined with inflammatory back pain criteria, HLA-B27 positivity, and prior uveitis, this is definitively axial SpA.'
          },
          {
            label: 'Reactive arthritis triggered by the eye inflammation',
            next: 'not-reactive-teaching',
            feedback: 'Anterior uveitis is not a triggering infection \u2014 it is an EXTRA-ARTICULAR MANIFESTATION of SpA. Reactive arthritis is triggered by GI or GU infections. The chronic inflammatory back pain pattern here points to axial SpA.'
          }
        ]
      },
      {
        id: 'not-mechanical-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Sacroiliac bone marrow oedema on MRI STIR sequences, when present bilaterally or in a pattern consistent with sacroiliitis, is NOT an incidental finding. It has ~90% specificity for axial SpA in the right clinical context. This is the foundation of early SpA diagnosis before radiographic changes appear.`,
        next: 'treatment-q'
      },
      {
        id: 'not-reactive-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Anterior uveitis is an <strong>extra-articular manifestation</strong> of spondyloarthropathy, not a triggering infection. It occurs in ~30% of AS patients. Reactive arthritis requires a preceding GI (Salmonella, Shigella, Campylobacter, Yersinia) or GU (Chlamydia) infection.`,
        next: 'treatment-q'
      },
      {
        id: 'treatment-q',
        type: 'decision',
        prompt: 'What is the first-line treatment for active axial SpA?',
        options: [
          {
            label: 'NSAIDs (full-dose, regular) + physiotherapy',
            next: 'conclusion',
            feedback: 'Correct. NSAIDs are the first-line treatment for axial SpA \u2014 unlike RA where DMARDs are first-line. Physiotherapy is equally important. If NSAIDs fail after 2\u20134 weeks of 2 different NSAIDs, escalate to biologic therapy (TNF-inhibitor or IL-17 inhibitor). Methotrexate does NOT work for axial SpA.'
          },
          {
            label: 'Methotrexate',
            next: 'mtx-teaching',
            feedback: 'Methotrexate does NOT work for axial SpA. This is a key difference from RA. NSAIDs are first-line for axial disease. If NSAIDs fail, biologics (TNFi or IL-17i) are indicated. Methotrexate may have a role in peripheral SpA only.'
          },
          {
            label: 'Oral prednisolone long-term',
            next: 'steroid-as-teaching',
            feedback: 'Systemic steroids are NOT effective for axial SpA (unlike RA where they are useful as bridging). NSAIDs are first-line. Local steroid injection into SI joints can sometimes help, but systemic steroids are not recommended.'
          }
        ]
      },
      {
        id: 'mtx-teaching',
        type: 'presentation',
        text: `<strong>Critical distinction:</strong> Methotrexate is the anchor drug for RA, but it does NOT work for axial SpA. The treatment pathway for axial SpA is:<br>
<ol><li>NSAIDs (try \u22652 at full dose for 2\u20134 weeks each)</li><li>If inadequate response \u2192 Biologic therapy (TNFi or IL-17i)</li><li>Physiotherapy throughout</li></ol>
This difference between RA and SpA treatment is a key exam topic.`,
        next: 'conclusion'
      },
      {
        id: 'steroid-as-teaching',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Oral corticosteroids have limited efficacy in axial SpA \u2014 this is another key difference from RA. The treatment ladder is NSAIDs \u2192 biologics. Physiotherapy and exercise are a critical component throughout.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Axial Spondyloarthritis (Ankylosing Spondylitis)</strong><br><br>
Mr Okafor was started on naproxen 500 mg BD with a PPI, and referred to physiotherapy for a structured exercise programme. At 3-month review, his symptoms had improved significantly. He was counselled about the association with anterior uveitis (prompt ophthalmology review if red eye recurs) and the importance of lifelong exercise.<br><br>
<strong>Key differences from RA:</strong> NSAIDs first-line (not DMARDs), methotrexate does NOT work for axial disease, biologics (TNFi/IL-17i) if NSAIDs fail, and physiotherapy is as important as medication.`,
        keyLearning: [
          "Inflammatory back pain: onset <40, insidious, improves with exercise, worse at rest, night pain",
          "MRI sacroiliitis allows early diagnosis before X-ray changes",
          "HLA-B27 positive in ~90% AS but is not diagnostic alone",
          "NSAIDs are first-line for axial SpA \u2014 methotrexate does NOT work",
          "Anterior uveitis is an extra-articular manifestation, not a trigger"
        ],
        relatedAntibodies: ["HLA-B27", "CRP", "ESR", "RF (negative)", "Anti-CCP (negative)"]
      }
    ]
  },
  {
    id: 'joints-case-4',
    title: 'The Swollen Finger',
    summary: '38-year-old woman with dactylitis, nail changes, and an acute joint flare \u2014 is it one diagnosis or two?',
    difficulty: 'advanced',
    nodes: [
      {
        id: 'start',
        type: 'presentation',
        text: `<strong>Ms Kowalski, 38, personal trainer</strong><br><br>
Presents to A&amp;E with a <strong>3-day history</strong> of:<br>
<ul>
<li><strong>Acutely swollen, red, exquisitely painful right knee</strong> \u2014 unable to weight-bear</li>
<li>Background of <strong>6 months of left 3rd finger swelling</strong> (\u2018sausage-like\u2019)</li>
<li>Nail pitting on several fingers (noticed by her nail technician)</li>
<li>Small patch of <strong>psoriasis in the natal cleft</strong> (found on directed examination)</li>
<li>No preceding infection, no fever</li>
</ul>
<strong>Examination:</strong> Right knee: large effusion, hot, red, very tender, restricted ROM. Left 3rd finger: diffuse dactylitic swelling. DIP tenderness at multiple fingers bilaterally. Nail pitting (3 nails). No axial symptoms.<br><br>
<strong>Temperature 37.2\u00b0C. Bloods: CRP 85 mg/L. WCC 12.4. Serum urate 520 \u00b5mol/L (elevated).</strong><br><br>
The acutely swollen knee alongside chronic dactylitis creates a diagnostic dilemma.`,
        next: 'acute-knee-q'
      },
      {
        id: 'acute-knee-q',
        type: 'decision',
        prompt: 'What is the most important next step for the acute right knee?',
        options: [
          {
            label: 'Joint aspiration \u2014 send for crystals, culture, Gram stain, cell count',
            next: 'aspirate-result',
            feedback: 'Correct. Acute monoarthritis is a medical emergency until septic arthritis is excluded. Aspirate BEFORE antibiotics. Always send for both crystals AND culture \u2014 crystal disease and infection can coexist. The elevated urate raises suspicion for gout, but you cannot assume without aspiration.'
          },
          {
            label: 'Start antibiotics empirically for presumed septic arthritis',
            next: 'dont-skip-aspirate',
            feedback: 'While septic arthritis is an emergency, you should aspirate BEFORE starting antibiotics whenever possible. The aspirate result changes management dramatically. Starting antibiotics first may sterilise cultures and miss the diagnosis.'
          },
          {
            label: 'Treat as PsA flare with steroids \u2014 she already has dactylitis and nail changes',
            next: 'dont-skip-aspirate-2',
            feedback: 'Dangerous assumption. While she does have PsA features, the acute knee is a separate presentation that requires aspiration. Crystal arthritis can occur alongside PsA, and septic arthritis must be excluded in any acute monoarthritis.'
          }
        ]
      },
      {
        id: 'dont-skip-aspirate',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Joint aspiration should be performed <strong>before antibiotics</strong> whenever possible in acute monoarthritis. The aspirate provides:<br>
<ul><li>Crystal analysis (gout vs pseudogout)</li><li>Gram stain and culture (septic arthritis)</li><li>Cell count (inflammatory vs non-inflammatory)</li></ul>
Antibiotics can sterilise cultures within hours, making diagnosis difficult. Aspiration is safe and should not be delayed.`,
        next: 'aspirate-result'
      },
      {
        id: 'dont-skip-aspirate-2',
        type: 'presentation',
        text: `<strong>Dangerous assumption:</strong> Even though this patient has PsA, the acute knee must be independently assessed. PsA patients can develop crystal arthritis OR septic arthritis. Never assume an acute monoarthritis is \u2018just a flare\u2019 \u2014 always aspirate to exclude crystals and infection.`,
        next: 'aspirate-result'
      },
      {
        id: 'aspirate-result',
        type: 'presentation',
        text: `<strong>Joint aspiration result:</strong><br><br>
<ul>
<li>Appearance: Turbid, yellow fluid</li>
<li>WCC: 45,000/mm\u00b3 (predominantly neutrophils)</li>
<li><strong>Crystals: Needle-shaped, negatively birefringent \u2014 monosodium urate (MSU)</strong></li>
<li>Gram stain: No organisms seen</li>
<li>Culture: Pending (subsequently negative)</li>
</ul>
<strong>Diagnosis of the acute knee: Gout</strong><br><br>
But this patient also has dactylitis, nail pitting, and psoriasis \u2014 she has <strong>two diagnoses</strong>.`,
        next: 'two-diagnoses-q'
      },
      {
        id: 'two-diagnoses-q',
        type: 'decision',
        prompt: 'How do you explain the coexistence of gout and PsA in this patient?',
        options: [
          {
            label: 'PsA and gout are independent diagnoses that can coexist \u2014 psoriasis increases hyperuricaemia risk',
            next: 'management-q',
            feedback: 'Correct. Psoriasis increases urate production (high cell turnover) \u2014 hyperuricaemia occurs in ~20% of psoriasis patients. PsA and gout can genuinely coexist. This is a clinical pitfall: attributing all symptoms to one diagnosis may cause you to miss the second.'
          },
          {
            label: 'The gout is causing the dactylitis and nail changes \u2014 one diagnosis',
            next: 'not-gout-dactylitis',
            feedback: 'Gout does not cause nail pitting or psoriatic dactylitis. Nail pitting is pathognomonic of psoriasis. The dactylitis here (chronic sausage digit) is typical of PsA. These are two separate conditions.'
          },
          {
            label: 'One of these diagnoses must be wrong \u2014 reassess',
            next: 'both-real',
            feedback: 'Both diagnoses are correct. MSU crystals in the knee confirm gout. Dactylitis + nail pitting + psoriasis confirms PsA (CASPAR criteria). Multiple rheumatic diagnoses can coexist in one patient.'
          }
        ]
      },
      {
        id: 'not-gout-dactylitis',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Gout and PsA have distinct features:<br>
<ul><li><strong>Gout dactylitis:</strong> Rare, would be acute and crystal-driven</li><li><strong>PsA dactylitis:</strong> Chronic \u2018sausage digit\u2019 from flexor tenosynovitis + synovitis</li><li><strong>Nail pitting:</strong> Exclusive to psoriatic disease (or eczema), not gout</li></ul>
This patient has BOTH gout (acute crystal arthritis) AND PsA (chronic dactylitis, nails, psoriasis). Psoriasis increases hyperuricaemia risk through high cell turnover.`,
        next: 'management-q'
      },
      {
        id: 'both-real',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Multiple rheumatic diagnoses in one patient is common. This patient has:<br>
<ol><li><strong>PsA</strong> \u2014 confirmed by dactylitis + nail pitting + psoriasis (CASPAR criteria)</li><li><strong>Gout</strong> \u2014 confirmed by MSU crystals on knee aspiration</li></ol>
Psoriasis increases urate production (~20% hyperuricaemia). Recognising dual pathology is essential.`,
        next: 'management-q'
      },
      {
        id: 'management-q',
        type: 'decision',
        prompt: 'How do you manage the two conditions together?',
        options: [
          {
            label: 'Treat acute gout (colchicine/NSAID), then address PsA with DMARD; start ULT after gout resolved',
            next: 'conclusion',
            feedback: 'Correct. Treat the acute gout first (colchicine or NSAID, avoiding aspirin). Once the flare settles, start urate-lowering therapy (allopurinol/febuxostat) for gout prophylaxis, and address the chronic PsA with a DMARD (methotrexate effective for both skin and joints in PsA). Some DMARDs (methotrexate, leflunomide) may have a mild urate-lowering effect as a bonus.'
          },
          {
            label: 'Start allopurinol immediately for the acute gout',
            next: 'no-ult-acute',
            feedback: 'Never start urate-lowering therapy (ULT) during an acute gout flare \u2014 it can prolong or worsen the attack by causing urate flux. Treat the acute attack first with colchicine or NSAID. Start ULT 2\u20134 weeks after the flare resolves.'
          },
          {
            label: 'Only treat the PsA with methotrexate and ignore the gout',
            next: 'must-treat-both',
            feedback: 'Both conditions need independent management. Untreated hyperuricaemia leads to recurrent gout flares, tophi, and renal stones. While methotrexate treats PsA, the gout requires specific urate-lowering therapy.'
          }
        ]
      },
      {
        id: 'no-ult-acute',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Starting allopurinol during an acute gout flare is a common error. Rapid urate lowering causes crystal dissolution and mobilisation, which can worsen or prolong the attack. Sequence:<br>
<ol><li>Treat acute flare (colchicine, NSAID, or steroid)</li><li>Wait 2\u20134 weeks after flare resolves</li><li>Start ULT with colchicine cover for 3\u20136 months</li><li>Treat-to-target: urate <360 \u00b5mol/L (or <300 if tophi)</li></ol>`,
        next: 'conclusion'
      },
      {
        id: 'must-treat-both',
        type: 'presentation',
        text: `<strong>Learning point:</strong> Both conditions require independent treatment. PsA needs a DMARD (methotrexate first-line for peripheral PsA). Gout needs urate-lowering therapy with a treat-to-target strategy. These are complementary, not competing, treatments.`,
        next: 'conclusion'
      },
      {
        id: 'conclusion',
        type: 'conclusion',
        text: `<strong>Diagnosis: Psoriatic Arthritis + Gout (dual pathology)</strong><br><br>
Ms Kowalski\u2019s acute gout was treated with colchicine. After the flare resolved, she was started on allopurinol (titrated to target urate <360 \u00b5mol/L) and methotrexate for her PsA. Her dactylitis and DIP synovitis improved on methotrexate, and she has had no further gout flares on allopurinol.<br><br>
<strong>Key lesson:</strong> Don\u2019t anchor on a single diagnosis. Psoriasis increases hyperuricaemia risk, making gout + PsA a recognised combination. Always aspirate acute monoarthritis \u2014 even when a chronic inflammatory arthritis is present.`,
        keyLearning: [
          "Acute monoarthritis = aspirate before antibiotics (crystals + culture)",
          "MSU crystals: needle-shaped, negatively birefringent; CPP: rhomboid, weakly positive",
          "PsA and gout can coexist \u2014 psoriasis increases hyperuricaemia risk",
          "Never start allopurinol during an acute gout flare",
          "Finding crystals does NOT exclude coexistent septic arthritis"
        ],
        relatedAntibodies: ["Serum urate", "RF (negative)", "Anti-CCP (negative)", "HLA-B27", "CRP"]
      }
    ]
  }
];
