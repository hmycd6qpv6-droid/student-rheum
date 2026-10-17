/* ana-case-4: The Flight Home */

export default {
  id: 'ana-case-4',
  title: 'The Flight Home',
  summary: '29-year-old with pleuritic chest pain, puffy fingers and Raynaud\'s',
  setting: 'Emergency department',
  difficulty: 'advanced',
  curriculum: ['RE-SLE', 'RE-SSC', 'PR-POLY', 'LO3', 'LO4', 'IX-SEROLOGY', 'TX-MEDS', 'LO6', 'LO7'],
  objectives: [
    'Prioritise the can\'t-miss causes of pleuritic chest pain before attributing it to a connective tissue disease',
    'Use a structured pre-test probability (Wells) and recognise how anchoring distorts it',
    'Choose a targeted autoantibody request and interpret a high-titre speckled ANA with strongly positive anti-U1-RNP',
    'Prescribe safely in a young woman with possible antiphospholipid antibodies, including contraception and NSAID use',
    'Describe the long-term risks to screen for, including pulmonary hypertension'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Emergency department, 16:20',
      text: `<strong>Ms Aisha Rahman, 29</strong>, a teaching assistant who lives with her partner Imran. She has had <strong>left-sided chest pain for two days</strong>, sharp, worse on deep breaths and lying flat.<br><br>
She flew back from Lahore (an eight-hour flight) five days ago. She takes the <strong>combined oral contraceptive pill</strong> and does not smoke. In the triage notes: Raynaud's since her teens, and for about three months her fingers have been "puffy and stiff" in the mornings, with aching finger joints and wrists. Her rings no longer fit.<br><br>
<strong>Observations:</strong> HR 108, BP 118/72, RR 20, SpO₂ 96% on air, temperature 37.4 °C.<br><br>
The ED SHO looks at her hands and says: <em>"Puffy fingers, Raynaud's, pleuritic pain: that is lupus serositis. Shall we get a rheumatology opinion?"</em>`,
      next: 'q-first'
    },
    {
      id: 'q-first',
      type: 'decision',
      stage: 'Prioritise',
      prompt: 'What is your first priority?',
      options: [
        {
          label: 'Treat this as possible PE until excluded: ECG, chest X-ray, bloods and a formal Wells score before blaming her autoimmune disease',
          rating: 'best',
          feedback: `Pleuritic chest pain in a tachycardic young woman on oestrogen after a long flight has a can't-miss cause: <strong>pulmonary embolism</strong>. Pericarditis, pneumothorax and pneumonia also need excluding. The possible connective tissue disease is a good explanation, which is exactly why it must not be accepted first. What would change your mind: nothing short of a negative, appropriate investigation.`,
          next: 'findings'
        },
        {
          label: 'Do an ECG, chest X-ray and troponin to look for pericarditis, pneumothorax and pneumonia, then decide whether PE needs testing',
          rating: 'good',
          feedback: `These are the right first tests and may explain the pain. But you have left PE as an afterthought. With tachycardia, oestrogen and a long flight, PE should be actively assessed alongside them, not only if the others are normal.`,
          next: 'findings'
        },
        {
          label: 'Send ANA and ENA and ask for urgent rheumatology review, since the hands and Raynaud\'s explain the pain',
          rating: 'poor',
          feedback: `This is <strong>anchoring</strong>: the diagnosis has been chosen before the dangerous alternatives have been excluded. Autoimmune testing does not tell you whether she has a clot, and the serology can wait until she is safe.`,
          next: 'first-drift'
        },
        {
          label: 'Diagnose lupus serositis, start an NSAID and discharge her with rheumatology follow-up, because PE is unlikely at 29',
          rating: 'unsafe',
          feedback: `Age does not exclude PE, and she has two clear risk factors, a long flight and oestrogen, plus tachycardia. Discharging on an assumed diagnosis is <strong>premature closure</strong> with a potentially fatal miss.`,
          next: 'first-drift'
        }
      ],
      reasoning: `Start from the worst thing it could be and work down. Pleuritic pain has a short can't-miss list: PE, pneumothorax, pericarditis or myocarditis, and pneumonia. Her autoimmune picture is compelling and makes serositis likely, but it also raises thrombotic risk and does not protect her from the other causes. The diagnostic trap here is not ignorance; it is a good story arriving too early. A structured score and the ECG and X-ray break the spell.`
    },
    {
      id: 'first-drift',
      type: 'presentation',
      tone: 'danger',
      label: 'A change on the monitor',
      text: `At 17:15 the nurse rechecks Ms Rahman's observations: <strong>HR 124, SpO₂ 91% on air</strong>, and she is sweating and more breathless. The ED consultant asks, <em>"Where are we on PE?"</em> and starts the assessment you should have begun.`,
      next: 'findings'
    },
    {
      id: 'findings',
      type: 'presentation',
      tone: 'results',
      label: 'Initial assessment',
      text: `<ul>
<li><strong>ECG:</strong> sinus tachycardia 106. No widespread ST elevation or PR depression.</li>
<li><strong>Chest X-ray:</strong> small left pleural effusion. No pneumothorax or consolidation. Normal heart size.</li>
<li><strong>Bloods:</strong> Hb 112 g/L, WCC 8.1 ×10⁹/L, <strong>lymphocytes 0.9 ×10⁹/L</strong>, platelets 172 ×10⁹/L, CRP 34 mg/L, creatinine 58 µmol/L, high-sensitivity troponin undetectable, CK 410 U/L. Urine hCG negative.</li>
<li><strong>Legs:</strong> no calf swelling or tenderness.</li>
<li><strong>Hands:</strong> puffy, non-pitting fingers with mild tightness of the skin over the fingers only. No digital ulcers. Dilated nailfold capillary loops. Swollen, tender MCP joints and wrists on both sides.</li>
<li><strong>Elsewhere:</strong> no malar rash, oral ulcers or alopecia. Proximal power 5-/5. No rub or murmur.</li>
</ul>`,
      next: 'q-pe'
    },
    {
      id: 'q-pe',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'How do you take PE forward?',
      options: [
        {
          label: 'Score Wells honestly as PE likely (above 4); arrange CTPA now, with interim anticoagulation only if the scan will be delayed',
          rating: 'best',
          feedback: `Tachycardia (1.5) plus PE being at least as likely as any alternative (3) gives 4.5, which is "PE likely". NICE then advises CTPA straight away, with interim anticoagulation if it cannot be done promptly. The Wells item "PE is the most likely diagnosis or equally likely" is a judgement, and anchoring on lupus is what would make you under-score it. What would change your mind: a convincing alternative diagnosis, such as proven pericarditis.`,
          next: 'ctpa'
        },
        {
          label: 'Score Wells as PE unlikely (1.5), because lupus is the better explanation, and do a D-dimer first',
          rating: 'good',
          feedback: `The two-level Wells then D-dimer pathway is correct in structure. The problem is the input: scoring "alternative diagnosis more likely" because of her autoimmune picture is the anchoring error. A D-dimer is also poorly specific when CRP is raised and there is inflammation.`,
          next: 'pe-ddimer'
        },
        {
          label: 'Skip PE imaging, because the pleural effusion on her X-ray and her immune disease already explain the pain',
          rating: 'poor',
          feedback: `An effusion fits serositis, but it also occurs with PE, and a pleural effusion does not exclude a clot. This is <strong>search satisficing</strong>: stopping after finding the first plausible explanation.`,
          next: 'pe-danger'
        },
        {
          label: 'Treat PE as excluded because her SpO₂ is 96% and the troponin is negative, and manage the pain as pleurisy',
          rating: 'unsafe',
          feedback: `Normal oxygen saturation and a negative troponin do not exclude PE. Many patients with PE have normal sats, and troponin is neither sensitive nor specific enough. This is <strong>false reassurance from a normal test</strong>.`,
          next: 'pe-danger'
        }
      ],
      reasoning: `The two-level Wells score is a way of forcing a pre-test probability onto a hunch. For her, tachycardia scores 1.5, and the question is whether PE is the most likely diagnosis or equally likely. Long flight and oestrogen are risk factors that should make you ask that question carefully, even though they are not Wells items themselves. If the answer is yes, the score is 4.5 and a negative D-dimer cannot be used to rule PE out. And with inflammation and a raised CRP, a D-dimer is likely to be positive anyway and tells you little. Her hCG is already negative, so imaging is straightforward.`
    },
    {
      id: 'pe-ddimer',
      type: 'presentation',
      tone: 'consequence',
      label: 'D-dimer result',
      text: `The D-dimer returns at <strong>2,300 ng/mL FEU</strong>, raised, as expected with inflammation and recent travel. It does not distinguish between a clot and her autoimmune illness, so a CTPA is now needed anyway. An hour has been lost.`,
      next: 'ctpa'
    },
    {
      id: 'pe-danger',
      type: 'presentation',
      tone: 'danger',
      label: 'Before she goes home',
      text: `As she is dressed to leave, Ms Rahman becomes pale and <strong>faint</strong>. Her HR is 128 and SpO₂ 90%. The ED consultant reviews her, orders a CTPA immediately and asks you to discuss with the team how the PE assessment was missed. Her scan is arranged within the hour.`,
      next: 'ctpa'
    },
    {
      id: 'ctpa',
      type: 'presentation',
      tone: 'results',
      label: 'CT pulmonary angiogram',
      text: `<strong>No pulmonary embolism.</strong> Small bilateral pleural effusions (left larger than right) and a <strong>small pericardial effusion</strong>. The lung parenchyma is clear, with no fibrosis. Her pain has an inflammatory (serosal) explanation, and she remains haemodynamically stable. A venous duplex of her legs is not needed.`,
      next: 'reflect-unify'
    },
    {
      id: 'reflect-unify',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'PE is excluded. Puffy fingers, Raynaud\'s, inflammatory arthritis, lymphopenia, and pleural and pericardial effusions: what could unify these? List the candidates and the feature that would separate each.',
      reveal: `<strong>A connective tissue disease (CTD) with overlapping features. The leading candidates:</strong>
<ul>
<li><strong>SLE:</strong> serositis, arthritis and lymphopenia fit. Would expect malar rash, oral ulcers, hair loss, proteinuria, low complement, and anti-dsDNA or anti-Sm.</li>
<li><strong>Systemic sclerosis (early):</strong> puffy fingers, Raynaud's and abnormal nailfold capillaries fit. Skin tightening beyond the fingers, digital ulcers, reflux and anticentromere or anti-Scl-70 would support it. Serositis is less typical.</li>
<li><strong>Inflammatory myositis:</strong> mildly raised CK, but proximal power is near normal and there is no rash or high CK.</li>
<li><strong>Mixed connective tissue disease (MCTD):</strong> overlap of lupus-, scleroderma- and myositis-like features with high-titre anti-U1-RNP. The best fit if the serology agrees.</li>
<li><strong>Rheumatoid arthritis:</strong> the arthritis fits, but serositis and Raynaud's with puffy hands are less typical.</li>
<li><strong>Mimics worth a thought:</strong> hypothyroidism (puffiness and effusions; check TSH), viral pericarditis, sarcoidosis.</li>
</ul>
No single feature picks the disease. The pattern and the antibodies do.`,
      next: 'q-ix'
    },
    {
      id: 'q-ix',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which immunology tests do you request?',
      options: [
        {
          label: 'ANA with a targeted ENA (including U1-RNP), anti-dsDNA, C3/C4 and a urine protein:creatinine ratio',
          rating: 'best',
          feedback: `ANA is the screening test for a CTD, and a targeted ENA names the antibody that defines the disease. Anti-dsDNA and complement assess lupus activity, and the urine ratio looks for renal involvement. This tests the hypotheses you generated. What would change your mind: a negative ANA makes CTD far less likely.`,
          next: 'serology'
        },
        {
          label: 'ANA alone for now, and add specific antibody tests once the titre and pattern are known',
          rating: 'good',
          feedback: `Stepwise testing is sensible and avoids over-ordering, but with a presentation like this you will almost certainly need the ENA, and waiting costs a day. A targeted ENA requested at the same time is reasonable.`,
          next: 'serology'
        },
        {
          label: 'A wide screen: ANA, ENA, dsDNA, RF, anti-CCP, ANCA, HLA-B27 and coeliac serology',
          rating: 'poor',
          feedback: `This is the <strong>scattergun panel</strong>. Several of these do not address any hypothesis on your list, and low-positive results (RF, for example) generate noise and unnecessary referrals.`,
          next: 'ix-noise'
        },
        {
          label: 'Rheumatoid factor and anti-CCP first, because she has swollen finger joints and wrist pain',
          rating: 'poor',
          feedback: `RA is on the list, but the whole picture (Raynaud's, puffy hands, serositis, lymphopenia) points to a different family of diseases. RF is positive in many CTDs and cannot discriminate between them.`,
          next: 'ix-noise'
        }
      ],
      reasoning: `Autoantibody tests are only helpful when a prior probability is already high, and they work best when you can name the hypothesis each one tests. Here you suspect a CTD, so ANA is the entry test; a targeted ENA, anti-dsDNA and complement address SLE, SSc and overlap disease, and a urine ratio looks for silent renal disease. RF and anti-CCP belong to the RA question, which this picture makes less likely. A large panel gives more results, not more answers.`
    },
    {
      id: 'ix-noise',
      type: 'presentation',
      tone: 'consequence',
      label: 'Extra results',
      text: `The results return over the next day. A <strong>low-positive RF (24 IU/mL)</strong> pulls the team towards rheumatoid arthritis for an hour: it is positive in many CTDs and does not help. At 19:00 the ED consultant asks for an ANA with ENA to be added to the lab queue for rheumatology to see tomorrow, which is what the picture needed.`,
      next: 'serology'
    },
    {
      id: 'serology',
      type: 'presentation',
      tone: 'results',
      label: 'Serology',
      text: `<table>
<tr><th>Test</th><th>Result</th></tr>
<tr><td>ANA (HEp-2 IF)</td><td><strong>Positive, 1:1280, speckled</strong></td></tr>
<tr><td>Anti-U1-RNP</td><td><strong>Strongly positive</strong></td></tr>
<tr><td>Anti-Sm</td><td>Negative</td></tr>
<tr><td>Anti-dsDNA</td><td>Negative</td></tr>
<tr><td>Anti-Ro / La</td><td>Negative / negative</td></tr>
<tr><td>Anti-Scl-70 / anticentromere</td><td>Negative / negative</td></tr>
<tr><td>Anti-Jo-1</td><td>Negative</td></tr>
<tr><td>C3 / C4</td><td>Normal / normal</td></tr>
<tr><td>Urine protein:creatinine ratio</td><td>Normal</td></tr>
<tr><td>TSH</td><td>Normal</td></tr>
</table>`,
      next: 'q-interpret'
    },
    {
      id: 'q-interpret',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'How do you interpret this serology in her clinical context?',
      options: [
        {
          label: 'It supports MCTD or an overlap CTD; refer to rheumatology to confirm and avoid labelling it SLE or SSc yet',
          rating: 'best',
          feedback: `A high-titre speckled ANA with strongly positive anti-U1-RNP, negative anti-Sm and dsDNA and normal complement, together with puffy hands, Raynaud's, arthritis and serositis, fits MCTD. The antibody is helpful but not diagnostic on its own, so the label stays provisional until rheumatology review. What would change your mind: new anti-Sm or dsDNA, falling complement or nephritis would move you towards SLE.`,
          next: 'q-pain'
        },
        {
          label: 'It suggests early systemic sclerosis, given Raynaud\'s, puffy fingers and a speckled ANA; refer for SSc assessment',
          rating: 'good',
          feedback: `Raynaud's, puffy fingers and abnormal nailfolds do fit early scleroderma, and SSc-specific antibodies are negative. But she also has arthritis, serositis and lymphopenia, which are not typical of SSc, and anti-U1-RNP points to an overlap. Your referral is right but the label is too narrow.`,
          next: 'q-pain'
        },
        {
          label: 'It confirms SLE: a high-titre ANA and serositis make the diagnosis, so tell her it is lupus',
          rating: 'poor',
          feedback: `SLE is possible, but dsDNA and Sm are negative, complement is normal, and she has no rash or renal involvement. A high-titre ANA is sensitive, not specific. Calling it SLE too early changes contraception, drug and pregnancy advice.`,
          next: 'interpret-consequence'
        },
        {
          label: 'ANA is non-specific and often positive in healthy people; repeat it in three months and manage the symptoms',
          rating: 'poor',
          feedback: `Low-titre ANA is common in healthy people, but 1:1280 with strong anti-U1-RNP in a symptomatic young woman is not a casual result. Waiting three months risks missing evolving organ involvement.`,
          next: 'interpret-consequence'
        }
      ],
      reasoning: `A positive ANA is the beginning of a question, not an answer: titre and pattern matter, and the clinical context decides. Here the pre-test probability was already high, and the result sharpens it. The ENA then splits the family: anti-Sm and anti-dsDNA are specific for SLE, anti-centromere and anti-Scl-70 for SSc, anti-Jo-1 for antisynthetase syndrome. A strong anti-U1-RNP on its own, in the right syndrome, suggests MCTD. Because MCTD can evolve into SLE, SSc or myositis, and the boundaries are debated, a provisional label is better than a premature one.`
    },
    {
      id: 'interpret-consequence',
      type: 'presentation',
      tone: 'consequence',
      label: 'A senior view',
      text: `The rheumatology registrar, reading the result later, comments that the high-titre ANA with strong anti-U1-RNP is clinically meaningful but should not be over-called or dismissed: it does not pick a single disease. The label stays provisional while the team watches for evolution.`,
      next: 'q-pain'
    },
    {
      id: 'q-pain',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'She is still in pain (7/10) and cannot take a deep breath. What analgesia plan is safe?',
      options: [
        {
          label: 'Regular paracetamol plus a short course of an oral NSAID with a PPI, after checking renal function, BP and ulcer history',
          rating: 'best',
          feedback: `Pleuritic and pericardial pain from serositis usually responds to NSAIDs. Her creatinine is normal, she has no ulcer history, and she is not pregnant. Use the lowest effective dose for the shortest time with gastroprotection, and ask her to stop and seek advice if she develops dyspepsia, black stools or swelling. What would change your mind: renal impairment, an ulcer history or an attempt to conceive.`,
          next: 'q-contra'
        },
        {
          label: 'Regular paracetamol and codeine, avoiding NSAIDs altogether because of her possible immune disease and kidneys',
          rating: 'good',
          feedback: `This is cautious and not harmful, and opioids are acceptable short term. But her kidneys are normal and NSAIDs are the most effective choice for serositis. Weak opioids add constipation and sedation without treating the inflammation.`,
          next: 'q-contra'
        },
        {
          label: 'Prednisolone 40 mg daily from tonight, to treat the presumed lupus serositis before the rheumatologists see her',
          rating: 'poor',
          feedback: `Starting high-dose steroids before the diagnosis is clear is a common error. If this is SSc or an overlap with SSc features, high-dose corticosteroids are a recognised risk factor for scleroderma renal crisis. Steroids can also mask the picture before the team has assessed her.`,
          next: 'pain-consequence'
        },
        {
          label: 'Ibuprofen 600 mg three times daily for two weeks, with no PPI, as she is young and otherwise well',
          rating: 'poor',
          feedback: `Youth does not remove NSAID risks. Two weeks at a full dose without gastroprotection and without a safety plan invites gastric irritation and renal problems, and a short course is usually enough for serositis.`,
          next: 'pain-consequence'
        }
      ],
      reasoning: `The principle is to treat the cause with the safest option that works. NSAIDs are standard for serositis pain, but they come with a checklist: renal function, BP, gastric risk, pregnancy intention and a clear stop date. Steroid decisions belong to the specialist once the diagnosis is clearer, particularly when systemic sclerosis features could make high doses hazardous. Opioids are a temporary support, not a plan.`
    },
    {
      id: 'pain-consequence',
      type: 'presentation',
      tone: 'consequence',
      label: 'Medication review',
      text: `The ED senior reviews the drug chart and revises the prescription. Treatment for serositis should follow the diagnosis, with her stomach and kidneys protected. He rewrites the plan along those lines and explains the changes to Ms Rahman.`,
      next: 'q-contra'
    },
    {
      id: 'q-contra',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'Ms Rahman asks, "Should I keep taking my pill?" Antiphospholipid antibodies have not been checked.',
      options: [
        {
          label: 'Send antiphospholipid antibodies, and switch now to a progestogen-only method while rheumatology review her',
          rating: 'best',
          feedback: `An oestrogen-containing pill is risky if antiphospholipid antibodies are present (UKMEC treats SLE with positive or unknown aPL as category 4). She also has active inflammation, recent travel and a possible CTD. Switching to a progestogen-only method keeps her protected from pregnancy. The aPL tests should be taken early, since a lupus anticoagulant test can be unreliable on anticoagulants.`,
          next: 'q-comm'
        },
        {
          label: 'Stop the pill, advise condoms until her rheumatology appointment, and send antiphospholipid antibodies',
          rating: 'good',
          feedback: `This stops the oestrogen and checks aPL, which is right. But condoms alone are less reliable than a progestogen-only method, and she may become pregnant before the review. Offering an alternative at the same time is better.`,
          next: 'q-comm'
        },
        {
          label: 'Tell her to stop the pill and sort contraception out with her GP when she is better',
          rating: 'poor',
          feedback: `Stopping oestrogen is correct, but leaving her with no contraception exposes her to unplanned pregnancy while her disease is active and before drugs have been reviewed for pregnancy safety.`,
          next: 'contra-gap'
        },
        {
          label: 'Continue the pill until she is seen in rheumatology clinic, since the PE has been excluded',
          rating: 'unsafe',
          feedback: `PE excluded tonight does not make oestrogen safe. With unknown antiphospholipid antibodies and an inflammatory disease, continuing oestrogen risks venous or arterial thrombosis. This is <strong>treating the last test, not the risk</strong>.`,
          next: 'contra-danger'
        }
      ],
      reasoning: `This is a medicines-safety decision in a young woman, and three things collide: oestrogen is prothrombotic, antiphospholipid antibodies are common in lupus-spectrum disease and are not yet known, and she has just been through a clot scare. The conservative answer is to remove oestrogen and send aPL, but a safe plan also keeps her protected from pregnancy. Pregnancy matters later too: some drugs used in CTDs are teratogenic, and pregnancy is best planned when the disease is quiet. Mention this early so she can choose what suits her.`
    },
    {
      id: 'contra-gap',
      type: 'presentation',
      tone: 'consequence',
      label: 'Discharge checks',
      text: `The nurse doing discharge checks asks what contraception Ms Rahman will use now. She has none, and she and Imran had planned to rely on "being careful". A same-day plan for an effective progestogen-only method is arranged, which should have been offered when the pill was stopped.`,
      next: 'q-comm'
    },
    {
      id: 'contra-danger',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss',
      text: `The ED pharmacist, reconciling her medicines, flags that Ms Rahman is still on an oestrogen pill with unknown antiphospholipid status, a long-haul flight five days ago and active inflammation. The senior doctor stops it, sends aPL and starts a progestogen-only method. Her first aPL result later returns negative, but she was exposed to avoidable risk.`,
      next: 'q-comm'
    },
    {
      id: 'q-comm',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'Ms Rahman asks: "Is this lupus? Will it get worse? And can I ever have a baby?" How do you respond?',
      options: [
        {
          label: 'Explain it points to a long-term immune condition needing specialist care, that outlook is usually manageable, and pregnancy needs planning, not avoiding',
          rating: 'best',
          feedback: `This answers all three questions honestly. It says what is known (an immune condition) and not known (the exact label and course), gives a realistic outlook, and corrects the idea that pregnancy is impossible. Offer written information and a contact, and ask what worries her most. What would change your mind: any sign of lung or heart involvement would alter pregnancy advice.`,
          next: 'q-handover'
        },
        {
          label: 'Give a detailed explanation of SLE, scleroderma and myositis and the risks of each, so that she has full information',
          rating: 'good',
          feedback: `Honesty is good, but a lecture on three diseases can overwhelm a frightened 29-year-old and invite her to self-diagnose from the worst. Give the headline and check understanding, then add detail at her pace.`,
          next: 'q-handover'
        },
        {
          label: 'Tell her it is probably a mild form of lupus that will settle with tablets and pregnancy will not be a problem',
          rating: 'poor',
          feedback: `False reassurance. The diagnosis is not settled, the course varies, and pregnancy in CTDs should be planned with the disease quiet and drugs reviewed. Overpromising damages trust.`,
          next: 'comm-consequence'
        },
        {
          label: 'Tell her she should avoid pregnancy altogether until a specialist has finished all of her tests and treatment',
          rating: 'poor',
          feedback: `Over-cautious and discouraging. Many women with CTDs have successful pregnancies with preparation, and "never" is not the advice. Pregnancy is best postponed while disease is active or treatment is being sorted, but it is not out of reach.`,
          next: 'comm-consequence'
        }
      ],
      reasoning: `She asked three questions, and each deserves a truthful, proportionate answer: what is it, what will happen, and what does it mean for my life? Avoid false certainty in either direction. The honest message is that she has an immune-mediated condition that needs specialist review, that many people do well with treatment and monitoring, and that pregnancy is usually possible when planned. Check understanding, ask what she fears, and leave a route to ask more.`
    },
    {
      id: 'comm-consequence',
      type: 'presentation',
      tone: 'consequence',
      label: 'That evening',
      text: `When Imran arrives, Ms Rahman repeats what she was told. He has read about lupus online, and the two accounts do not match. By the time the registrar returns, both are anxious and confused. It takes twenty minutes to rebuild a shared understanding.`,
      next: 'q-handover'
    },
    {
      id: 'q-handover',
      type: 'decision',
      stage: 'Handover',
      prompt: 'She is comfortable on her analgesia with stable observations. What is the safest plan for the next step?',
      options: [
        {
          label: 'Discuss with the on-call rheumatologist by SBAR, arrange expedited review with echo and lung function, and give clear safety-net advice',
          rating: 'best',
          feedback: `A direct call gets expert advice tonight and an agreed review date, and the echo and lung function tests can be waiting for the appointment. Safety-netting should name what to return for: worsening breathlessness or chest pain, fever, faintness, a swollen leg, or a new finger ulcer. What would change your mind: a growing pericardial effusion or haemodynamic change would need admission.`,
          next: 'clinic'
        },
        {
          label: 'Admit overnight for observation, with routine rheumatology review early next week',
          rating: 'good',
          feedback: `Admission is safe and might be reasonable if you are worried about the pericardial effusion, but it is not needed for a stable, comfortable patient, and "routine review next week" does not capture the need for an expedited plan.`,
          next: 'clinic'
        },
        {
          label: 'Discharge to the GP with a letter saying "?lupus" and a routine rheumatology referral',
          rating: 'poor',
          feedback: `A routine letter with a provisional label is slow and misleading. She has a probable serious CTD with serosal effusions and needs prompt specialist review and baseline cardiopulmonary tests.`,
          next: 'handover-consequence'
        },
        {
          label: 'Discharge with analgesia and no specific advice, because PE and pericarditis have been excluded',
          rating: 'poor',
          feedback: `PE has been excluded, but effusions, a possible myocardial or pericardial component and an evolving CTD need clear follow-up and safety-net advice. Without it she may not know what to look for or whom to call.`,
          next: 'handover-consequence'
        }
      ],
      reasoning: `A good handover turns a visit into a plan. The plan here has three parts: who will see her and when, what baseline tests will be waiting (echo, lung function with gas transfer), and what she must do if things change. Compare the two weaker discharges: both leave the patient to find her own way, one with a vague label and one with no advice. An SBAR to the specialist and a named follow-up date is the safest route.`
    },
    {
      id: 'handover-consequence',
      type: 'presentation',
      tone: 'consequence',
      label: 'Falling between services',
      text: `Five weeks later the referral has not been triaged. Ms Rahman returns to the ED more breathless on stairs and frightened. The delay has cost her time and she is frightened.`,
      next: 'clinic'
    },
    {
      id: 'clinic',
      type: 'presentation',
      tone: 'results',
      label: 'Rheumatology review',
      text: `Dr Okafor sees Ms Rahman and reviews the tests.<br><br>
<ul>
<li><strong>Antiphospholipid antibodies:</strong> negative on first testing; repeat in 12 weeks as standard.</li>
<li><strong>Echocardiogram:</strong> normal pulmonary pressures; small pericardial effusion, resolving.</li>
<li><strong>Lung function:</strong> normal spirometry; gas transfer (DLCO) mildly reduced.</li>
<li><strong>Working diagnosis:</strong> mixed connective tissue disease (anti-U1-RNP associated), with arthritis, serositis and Raynaud's. Treatment is specialist-led and aimed at the arthritis and serositis, with plans for Raynaud's care and regular review.</li>
</ul>`,
      next: 'q-followup'
    },
    {
      id: 'q-followup',
      type: 'decision',
      stage: 'Follow-up',
      prompt: 'Which long-term risk most needs a deliberate screening plan in MCTD, and how is it monitored?',
      options: [
        {
          label: 'Pulmonary hypertension: ask about breathlessness each visit, repeat echo and lung function with gas transfer on a regular schedule',
          rating: 'best',
          feedback: `Pulmonary arterial hypertension is a serious complication of MCTD and other CTDs, and may be silent early. A deliberate schedule of symptom review, echocardiography and gas transfer lets the team find it before she is severely unwell. Any new breathlessness lowers the threshold to repeat testing, and the team also watch for evolution into SLE, SSc or myositis.`,
          next: 'conclusion'
        },
        {
          label: 'Lung function with gas transfer once a year and symptom review, with echo only if she becomes breathless',
          rating: 'good',
          feedback: `Gas transfer is a sensible screen, and symptom review is essential. But PAH can be asymptomatic until late, so waiting for breathlessness before repeating the echo can miss it.`,
          next: 'followup-consequence'
        },
        {
          label: 'Annual anti-dsDNA and C3/C4 checks, since lupus nephritis is the major cause of death in MCTD',
          rating: 'poor',
          feedback: `Monitoring for evolution into SLE is reasonable, but renal disease is uncommon in MCTD and is not its main killer. Pulmonary hypertension and lung disease take priority.`,
          next: 'followup-consequence'
        },
        {
          label: 'No routine screening: review only if she develops new symptoms, to avoid over-investigating a well young woman',
          rating: 'poor',
          feedback: `Waiting for symptoms is how pulmonary hypertension is found late. Structured surveillance is justified because the condition is serious and early treatment helps.`,
          next: 'followup-consequence'
        }
      ],
      reasoning: `MCTD is a disease of evolution, so follow-up is a plan and not a single diagnosis. The main long-term hazard is the pulmonary circulation, which can deteriorate with few symptoms. Screening is justified because the condition is serious, early treatment is available, and the tests (echo, gas transfer) are safe. Watch also for the disease to declare itself as SLE, SSc or myositis, which changes monitoring, drug choices and pregnancy advice.`
    },
    {
      id: 'followup-consequence',
      type: 'presentation',
      tone: 'consequence',
      label: 'The clinic reviews the plan',
      text: `Dr Okafor adjusts the follow-up plan: symptom review at every visit, with echocardiography and lung function with gas transfer on a regular schedule, and a low threshold to repeat them if she becomes more breathless. She explains the reasons to Ms Rahman.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: mixed connective tissue disease (anti-U1-RNP associated overlap CTD) presenting with serositis</strong><br><br>
Ms Rahman's pain had a dangerous differential that came first. Once PE was excluded, the pattern (puffy hands, Raynaud's, arthritis, lymphopenia, effusions) and a high-titre speckled ANA with strongly positive anti-U1-RNP pointed to an overlap CTD.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Put the can't-miss diagnoses first: PE, pericarditis, pneumothorax, pneumonia.</li>
<li>Score pre-test probability honestly; do not let the CTD story lower it.</li>
<li>After PE is excluded, ask what unifies the features.</li>
<li>Order targeted serology (ANA, ENA, dsDNA, complement), not a panel.</li>
<li>Interpret the antibodies in context and keep the label provisional.</li>
<li>Prescribe with the risks in mind: NSAIDs with checks, no oestrogen with unknown aPL, effective alternative contraception.</li>
<li>Plan follow-up for pulmonary hypertension and evolution.</li>
</ol>
<strong>How you would explain it to the patient:</strong> "You have an immune-system condition that affects the joints, the circulation to your fingers and the lining around the lungs and heart. It has features of more than one type of connective tissue disease. Many people do well with treatment and regular checks. Pregnancy is possible in most cases, but it is best planned so we can pick safe medicines and time it when things are quiet."<br><br>
<strong>Safety-netting:</strong> return urgently for worsening breathlessness or chest pain, fainting, a swollen leg, fever, black stools, or a new finger ulcer or colour change that does not recover. Stop any NSAID and seek advice if you get stomach pain or black stools.`,
      keyLearning: [
        'Pleuritic chest pain: exclude PE, pericarditis, pneumothorax and pneumonia before blaming serositis',
        'Anchoring on a CTD can lower your PE pre-test probability: score the Wells honestly',
        'Normal sats and a negative troponin do not exclude PE; a D-dimer is poorly informative when inflammation is present',
        'High-titre speckled ANA with strong anti-U1-RNP and negative Sm and dsDNA fits MCTD or an overlap CTD; keep the label provisional',
        'Check antiphospholipid antibodies before continuing oestrogen; offer an effective alternative contraceptive',
        'NSAIDs for serositis need checks (renal, BP, GI) and a stop date; avoid starting high-dose steroids before the diagnosis is clear',
        'The key long-term risk to screen for is pulmonary hypertension; MCTD can evolve into SLE, SSc or myositis'
      ],
      relatedTests: ['ECG', 'Chest X-ray', 'CTPA', 'ANA and ENA', 'Antiphospholipid antibodies', 'Echocardiogram', 'Lung function with gas transfer'],
      goingFurther: `<strong>MCTD classification debate:</strong> several sets of classification criteria exist (for example Alarcón-Segovia, Kasukawa and Kahn), all built around high-titre anti-U1-RNP plus overlapping features. None is universally accepted, and some experts regard MCTD as a stable subset of overlap CTD while others see it as a transitional state that declares itself over years. This is why clinicians keep the label provisional and monitor for evolution.<br><br>
<strong>U1-RNP, Sm and dsDNA:</strong> anti-U1-RNP is not specific to MCTD and also occurs in SLE and other CTDs. Anti-Sm is highly specific for SLE, and anti-dsDNA is specific and tracks activity and nephritis. A strongly positive anti-U1-RNP with negative anti-Sm and dsDNA in an overlap syndrome favours MCTD. Pulmonary hypertension is a key reason that pregnancy counselling differs between patients: established pulmonary hypertension makes pregnancy hazardous, which is why echocardiography and early specialist input matter.`
    }
  ]
};
