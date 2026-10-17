/* anca-case-3: The Dragging Foot */

export default {
  id: 'anca-case-3',
  title: 'The Dragging Foot',
  summary: '46-year-old with difficult asthma, a blocked nose and a new foot drop',
  setting: 'Acute medical unit',
  difficulty: 'intermediate',
  curriculum: ['RE-VASC', 'LO3', 'SK-NEURO', 'LO4', 'IX-SEROLOGY', 'TX-MEDS', 'LO7'],
  objectives: [
    'Localise a foot drop and recognise the pattern of mononeuritis multiplex',
    'List the causes of a high eosinophil count and say which need action today',
    'Explain why a negative ANCA does not exclude eosinophilic granulomatosis with polyangiitis',
    'Check for parasite exposure before high-dose corticosteroids',
    'Explain a rare long-term diagnosis and the need for follow-up'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Acute medical unit, 14:10',
      text: `<strong>Mrs Amina Begum, 46, school kitchen assistant</strong><br><br>
Her GP has sent her in with a left foot drop. She has tripped twice at work on the kitchen floor and nearly dropped a tray of hot food. She lives with her husband, two teenage children and her mother-in-law, and is right-handed.<br><br>
<strong>History:</strong>
<ul>
<li>About 3 weeks ago, a burning pain down the outside of her left shin, then the foot began to slap down when she walked.</li>
<li>Last week, numbness in the ring and little fingers of her right hand. She dropped a pan on Monday.</li>
<li>Asthma since age 40, now hard to control on a high-dose inhaled steroid and long-acting bronchodilator combination plus montelukast. She has had 4 courses of prednisolone in the last year. The wheeze improves each time but returns within weeks.</li>
<li>Blocked nose and loss of smell for 2 years. She has seen ENT and has nasal polyps.</li>
<li>About 5 kg weight loss in 2 months, sweats at night, tired all the time.</li>
<li>No back pain, no bladder or bowel change, no saddle numbness. No diabetes. No rash that she has noticed.</li>
<li>Born in Sylhet, Bangladesh, moved to the UK at 19. She last visited family there 18 months ago.</li>
</ul>
She is frightened she will lose her job. Her GP wrote &ldquo;?sciatica, ?peroneal palsy&rdquo;.`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'How do you examine her to find out where the problem is?',
      options: [
        {
          label: 'Compare ankle inversion, hip abduction and reflexes, map sensation, and check the other limbs',
          rating: 'best',
          feedback: `A foot drop can come from the nerve, the root, or the central nervous system, and the examination separates them. Ankle <em>inversion</em> is preserved in a common peroneal palsy but weak in an L5 root lesion, and checking the hands and other leg tells you whether one nerve or several are involved. If the other limbs were normal and the lesion sat neatly at the fibular head, a compressive cause would become much more likely.`,
          next: 'exam-findings'
        },
        {
          label: 'Test left foot dorsiflexion, then examine the lumbar spine and do a straight-leg raise',
          rating: 'good',
          feedback: `This is a reasonable start, and it will confirm weak dorsiflexion and a normal straight-leg raise. But it assumes the answer is in the back, and it never asks whether anything else is wrong. This is a form of anchoring on the GP&rsquo;s label of sciatica. A hand symptom is a prompt to examine more widely.`,
          next: 'exam-findings'
        },
        {
          label: 'Confirm the foot drop, treat it as sciatica, give analgesia and refer to physiotherapy',
          rating: 'unsafe',
          feedback: `Foot drop with no back pain, new hand numbness and 5 kg weight loss is not typical sciatica. Calling it sciatica is premature closure, and it risks sending home a patient with a progressive systemic illness. Nerve damage from vasculitis can become permanent within days to weeks if it is not treated.`,
          next: 'c-sciatica'
        }
      ],
      reasoning: `The pre-test probability of simple sciatica is lowest in someone with a foot drop <em>and</em> a separate symptom in a different limb. Before I touch her I am already asking whether a single lesion could explain both. The bedside discriminators are cheap: inversion (tibialis posterior, mostly L5 via the tibial nerve) tells me about the root versus the peroneal nerve, hip abduction (also L5, via the superior gluteal nerve) confirms it, and the ankle reflex tells me about S1. I also remember to ask her permission, offer a chaperone and keep her covered while I look at her legs and hands.`
    },
    {
      id: 'c-sciatica',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss',
      text: `You write &ldquo;sciatica, physio&rdquo; and start the discharge paperwork. Before she leaves, the nurse mentions that Mrs Begum could not grip the pen to sign the form, and your registrar asks whether anyone has looked at her hands. Seen at the bedside, the weakness in her right hand is obvious, and the discharge is cancelled. The registrar asks you to start again and do a proper neurological examination.`,
      next: 'exam-findings'
    },
    {
      id: 'exam-findings',
      type: 'presentation',
      label: 'Examination',
      text: `Observations: temperature 37.6&deg;C, heart rate 96, blood pressure 152/94, respiratory rate 18, oxygen saturation 95% on air.<br><br>
<strong>Left leg:</strong>
<ul>
<li>Ankle dorsiflexion 2/5, toe extension 2/5, ankle eversion 2/5.</li>
<li>Ankle <strong>inversion 5/5</strong>, plantar flexion 5/5, hip abduction 5/5.</li>
<li>Knee and ankle reflexes present. Straight-leg raise negative. No spinal tenderness. No sphincter or saddle symptoms.</li>
<li>Reduced pinprick over the outer shin and the top of the foot. The sole is normal.</li>
</ul>
<strong>Right hand:</strong> reduced sensation over the little finger and ring finger, finger abduction 4/5, normal thumb and index finger sensation. The thenar muscles are normal.<br><br>
<strong>Elsewhere:</strong> expiratory wheeze throughout the chest. A few tender, raised, non-blanching purple-brown spots on both shins, which are easier to feel than to see on her brown skin. Heart sounds normal. Right leg neurologically normal.`,
      next: 'localise-q'
    },
    {
      id: 'localise-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'Which pattern of nerve damage best explains these findings?',
      options: [
        {
          label: 'Mononeuritis multiplex: separate nerves damaged at different times, left peroneal and right ulnar',
          rating: 'best',
          feedback: `Preserved inversion and hip abduction make an L5 root lesion unlikely, so the left leg points to the common peroneal nerve. A second, unrelated nerve (the right ulnar) is also affected, and neither is explained by the other. Asymmetric, multifocal nerve damage like this is usually from vasculitis of the vasa nervorum. Diabetes, amyloid and infections such as leprosy can also do this, which is why the rest of the picture matters.`,
          next: 'fbc-results'
        },
        {
          label: 'A single common peroneal palsy at the fibular head from pressure at work',
          rating: 'good',
          feedback: `The left leg does look like a peroneal palsy, and compression there is common in people who stand, kneel or lose weight. The error is stopping at the first lesion. The right-hand signs, the weight loss and the asthma are not explained by that, so one lesion cannot be the whole story.`,
          next: 'c-localise'
        },
        {
          label: 'An L5 radiculopathy from a lumbar disc, since the foot drop is the main problem',
          rating: 'poor',
          feedback: `An L5 lesion would weaken inversion and hip abduction, which are normal here, and would usually cause back or buttock pain with a positive straight-leg raise. Choosing the common diagnosis because it fits the GP&rsquo;s label is base-rate thinking applied to the wrong patient, since it ignores the hand.`,
          next: 'c-localise'
        },
        {
          label: 'A length-dependent polyneuropathy, since both a leg and an arm are affected',
          rating: 'poor',
          feedback: `Length-dependent polyneuropathy is symmetrical, starts in the toes and rises in a stocking pattern before reaching the hands. Her deficits are asymmetrical, and they follow single nerves. Count nerves and ask whether they are symmetrical, because that distinction is the whole point of the examination.`,
          next: 'c-localise'
        }
      ],
      reasoning: `Four questions localise a foot drop: is the sole spared, is inversion preserved, are reflexes normal, and is there anything else? Here the answers are yes, yes, yes, and yes. That makes a peroneal nerve lesion likely and an L5 root unlikely. A second nerve in another limb (the ulnar) moves me from compression to multifocal nerve infarction. Mononeuritis multiplex is a red-flag pattern in its own right, because the commonest treatable causes are systemic vasculitis and diabetes, and she has weight loss, a raised blood pressure and purpuric skin lesions.`
    },
    {
      id: 'c-localise',
      type: 'presentation',
      tone: 'consequence',
      label: 'A second opinion',
      text: `Your registrar asks you to show her the right-hand findings and to compare ankle inversion on both sides. Inversion is strong, and the finger abduction is weak with a sensory loss limited to the little and ring fingers. &ldquo;One lesion can&rsquo;t do all of that,&rdquo; she says. &ldquo;Let&rsquo;s count nerves, not symptoms.&rdquo; You revise your picture of two separate nerves affected.`,
      next: 'fbc-results'
    },
    {
      id: 'fbc-results',
      type: 'presentation',
      tone: 'results',
      label: 'Blood tests from the ED',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>Haemoglobin</td><td>119 g/L</td><td>115&ndash;165</td></tr>
<tr><td>White cell count</td><td>17.1 &times; 10&#8313;/L</td><td>4&ndash;11</td></tr>
<tr><td><strong>Eosinophils</strong></td><td><strong>5.6 &times; 10&#8313;/L</strong></td><td>0.0&ndash;0.4</td></tr>
<tr><td>Platelets</td><td>442 &times; 10&#8313;/L</td><td>150&ndash;400</td></tr>
<tr><td>CRP</td><td>64 mg/L</td><td>&lt;5</td></tr>
<tr><td>Creatinine</td><td>71 &micro;mol/L</td><td>45&ndash;84</td></tr>
<tr><td>ALT</td><td>24 U/L</td><td>&lt;40</td></tr>
</table>
The film shows mature eosinophils with no blasts. Total IgE is markedly raised.`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'Her eosinophil count is more than ten times the upper limit. List the causes of a high eosinophil count. Which ones would you be most worried about in her, and what would you ask or check to separate them?',
      reveal: `<strong>Causes of persistent eosinophilia:</strong>
<ol>
<li><strong>Allergy and atopy</strong> (asthma, eczema, hay fever, allergic bronchopulmonary aspergillosis). Common, but the count is usually modest. A count this high with a new neuropathy is not explained by asthma.</li>
<li><strong>Drugs</strong> (antibiotics, NSAIDs, allopurinol, anticonvulsants, including DRESS). Check every medicine started in the last 2 months. She has none new.</li>
<li><strong>Parasites</strong>, especially <strong>Strongyloides</strong> in someone born in or who has travelled to the tropics. This can persist undetected for decades and it matters before any steroid is given.</li>
<li><strong>Eosinophilic granulomatosis with polyangiitis (EGPA)</strong>: asthma, rhinosinusitis and polyps, eosinophilia, neuropathy, lung shadows, and sometimes heart, skin and gut involvement.</li>
<li><strong>Hypereosinophilic syndrome</strong>: sustained high count with end-organ damage and no other cause. A diagnosis of exclusion that needs haematology.</li>
<li><strong>Haematological malignancy</strong> (e.g. lymphoma, leukaemia, myeloproliferative disease). Look at the film, and ask about weight loss and sweats.</li>
<li>Less common: adrenal insufficiency (eosinophilia that appears when steroids are withdrawn), connective tissue disease, and solid tumours.</li>
</ol>
She fits EGPA best, but <strong>Strongyloides</strong> is the one you must exclude or cover, because the treatment for EGPA makes it dangerous. These are not mutually exclusive.`,
      next: 'escalate-q'
    },
    {
      id: 'escalate-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'What is the right level of urgency for the next step?',
      options: [
        {
          label: 'Same-day senior review and a call to rheumatology, presented as suspected systemic vasculitis',
          rating: 'best',
          feedback: `Multifocal neuropathy with systemic features is a vasculitis until proven otherwise, and nerve damage is progressive and may be irreversible. A clear SBAR gives the rheumatology registrar what they need to advise on tests today. What would change your mind is a non-vasculitic explanation for all of it, which is unlikely to be found quickly.`,
          next: 'ix-q'
        },
        {
          label: 'Request nerve conduction studies and refer to the neurology outpatient clinic',
          rating: 'good',
          feedback: `Neurophysiology is useful and confirms an axonal, multifocal pattern. But as the first step, it treats this as a neurological problem when the cause is probably systemic, and an outpatient referral may be weeks away while her nerves are being lost.`,
          next: 'c-escalate'
        },
        {
          label: 'Start gabapentin for the burning pain and ask the GP to arrange follow-up',
          rating: 'poor',
          feedback: `Symptom relief is reasonable alongside the work-up, but not instead of it. This treats the pain and leaves the cause. It is also likely to lose the chance to act while the nerve damage can still be limited.`,
          next: 'c-escalate'
        },
        {
          label: 'Wait for the ANCA result before involving any specialist, as it will decide the diagnosis',
          rating: 'poor',
          feedback: `This is treating the test result rather than the patient. ANCA can take days, and as you will see, a negative result would not have settled the question. Specialist input is based on the clinical picture, and it should not be gated behind a single blood test.`,
          next: 'c-escalate'
        }
      ],
      reasoning: `Urgency comes from the trajectory. Her deficit has spread to a second nerve in a week, she has lost weight, and she has high inflammatory markers. Each new nerve is a new infarct, so the cost of waiting is measured in function, and with vasculitis the heart and kidneys may be next. I would present it with SBAR: a 46-year-old with asthma and polyps, a new foot drop and a second nerve, an eosinophil count of 5.6 and CRP of 64, and I am worried about EGPA or another vasculitis and want advice today.`
    },
    {
      id: 'c-escalate',
      type: 'presentation',
      tone: 'consequence',
      label: 'A few hours lost',
      text: `Your consultant reviews the notes at 16:30 and asks why rheumatology has not been called. You make the call then. The rheumatology registrar is concerned, agrees with the plan to look for a vasculitis, and asks you to send a set of tests and an ECG &ldquo;now, not tomorrow&rdquo;. The delay is only a few hours, but it has put the investigations behind schedule.`,
      next: 'ix-q'
    },
    {
      id: 'ix-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which tests do you send now?',
      options: [
        {
          label: 'Urine dip, ANCA, ECG and troponin, chest X-ray and parasite tests, with a blood film review',
          rating: 'best',
          feedback: `Each test answers a question that will change management: does she have kidney involvement, is there a serological marker, is there heart or lung involvement, and does she carry a parasite that matters before steroids. Cardiac involvement is the part of EGPA that most often kills, so you look for it before there are symptoms. A normal ECG and troponin now would not remove the need to repeat them if she develops symptoms.`,
          next: 'results'
        },
        {
          label: 'Urine dip, renal function, ANCA and a chest X-ray, adding an ECG only if she has symptoms',
          rating: 'good',
          feedback: `This is a sensible vasculitis screen, but it waits for cardiac symptoms before looking, and it omits parasite tests. Eosinophilic myocarditis can be silent or mimic asthma breathlessness, and the first presentation can be fatal. In EGPA the ECG and troponin belong in the baseline.`,
          next: 'c-ix'
        },
        {
          label: 'ANA, ENA, anti-dsDNA, rheumatoid factor, anti-CCP and ANCA as a connective tissue screen',
          rating: 'poor',
          feedback: `This is an indiscriminate autoimmune panel. A positive ANA is common and unhelpful at this stage, and none of these tests look for the organ damage that determines urgency. Choose tests that answer a specific question and could change what you do today.`,
          next: 'c-ix'
        },
        {
          label: 'Lumbar spine MRI and nerve conduction studies, then decide what to do next',
          rating: 'poor',
          feedback: `This pursues the original sciatica question when examination has already moved the problem to peripheral nerves. The MRI will probably be normal, and while the scans are arranged you miss the question of systemic disease.`,
          next: 'c-ix'
        }
      ],
      reasoning: `Pre-test, I think EGPA is the most likely diagnosis, so I want the tests that grade how bad it is and what is at risk: kidneys (urine dip and creatinine), heart (ECG, troponin, and an echocardiogram if either is abnormal or she has symptoms), lungs (chest X-ray) and bowel if she has abdominal pain. I ask for parasite serology and stool before anyone writes up steroids, since I know that decision is coming. I also take the FBC and film now, because steroids will rapidly drop the eosinophil count and I would lose the baseline.`
    },
    {
      id: 'c-ix',
      type: 'presentation',
      tone: 'consequence',
      label: 'Back to the registrar',
      text: `The rheumatology registrar reviews what you have sent and asks, &ldquo;Where are the ECG and troponin? Has anyone sent the parasite serology? Is there a urine dip?&rdquo; You go back and send whatever is missing, which costs a couple of hours that she may not be able to spare.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Results',
      text: `<table>
<tr><th>Test</th><th>Result</th></tr>
<tr><td>Urine dip</td><td>Protein trace, blood negative</td></tr>
<tr><td><strong>ANCA</strong> (immunofluorescence plus MPO and PR3 ELISA)</td><td><strong>Negative</strong></td></tr>
<tr><td>ECG</td><td>Sinus rhythm, rate 98, mild T-wave flattening in the lateral leads</td></tr>
<tr><td>High-sensitivity troponin</td><td>9 ng/L (reference &lt;14)</td></tr>
<tr><td>Chest X-ray</td><td>Patchy peripheral shadowing in both lower zones; heart size normal</td></tr>
<tr><td>Strongyloides serology and stool microscopy</td><td>Sent, results in 2&ndash;3 days</td></tr>
</table>`,
      next: 'anca-q'
    },
    {
      id: 'anca-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'The ANCA is negative. What does this tell you?',
      options: [
        {
          label: 'It does not exclude EGPA, since most patients are ANCA-negative; diagnosis rests on the whole picture',
          rating: 'best',
          feedback: `ANCA is positive in only a minority of people with EGPA, unlike granulomatosis with polyangiitis or microscopic polyangiitis, so a negative result carries little weight against the diagnosis. Her asthma, polyps, eosinophilia, multifocal neuropathy and lung shadows together are far more informative. What would change your mind is a different explanation for all of those features, or a biopsy showing something else.`,
          next: 'twist'
        },
        {
          label: 'It makes EGPA less likely, but you carry on with nerve studies and biopsy in case',
          rating: 'good',
          feedback: `Carrying on is right, and a nerve or skin biopsy can add useful support. The mistake is in the weight given to a negative ANCA, which lowers the probability very little in this condition. You would not wait for a biopsy before escalating.`,
          next: 'twist'
        },
        {
          label: 'It excludes vasculitis, so you stop the work-up and plan a respiratory clinic review',
          rating: 'unsafe',
          feedback: `This is false reassurance from a negative test. The pre-test probability of EGPA was high, and a test with limited sensitivity can only move it a little. Stopping here would leave a vasculitis with possible heart involvement untreated.`,
          next: 'c-anca'
        }
      ],
      reasoning: `Sensitivity is the whole question. ANCA is excellent for GPA and MPA, but it is positive in only a minority of EGPA, and a test with a low sensitivity cannot rule a condition out. Pre-test, I thought she had EGPA with a probability well over half. A negative ANCA nudges that down slightly and leaves me where I was. I do not change the plan, because the plan was based on her clinical features and organ risk. It is also worth noting for later: ANCA-negative disease tends to be the one that goes for the heart.`
    },
    {
      id: 'c-anca',
      type: 'presentation',
      tone: 'danger',
      label: 'Stopped by the registrar',
      text: `You tell the nurse that Mrs Begum is likely to go home tomorrow with a clinic letter. Your registrar overhears and stops you: &ldquo;Negative ANCA doesn&rsquo;t exclude EGPA. She isn&rsquo;t going anywhere.&rdquo; The plan to discharge is cancelled, and you are asked to document the reasons in the notes.`,
      next: 'twist'
    },
    {
      id: 'twist',
      type: 'presentation',
      tone: 'danger',
      label: 'Medical ward, 17:40',
      text: `Mrs Begum calls the nurse. She has a tight pressure across her chest and feels breathless, and she is sweaty.<br><br>
Heart rate 112, blood pressure 138/84, respiratory rate 22, oxygen saturation 94% on air, temperature 37.8&deg;C. There is no new wheeze. The ECG shows <strong>new T-wave inversion in V4&ndash;V6</strong> without ST elevation. The repeat <strong>high-sensitivity troponin is 186 ng/L</strong>.`,
      next: 'cardiac-q'
    },
    {
      id: 'cardiac-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'What do you do now?',
      options: [
        {
          label: 'Move to a monitored bed, repeat ECG and troponin, request an urgent echo, and call cardiology and rheumatology',
          rating: 'best',
          feedback: `Chest tightness with a rising troponin and new T-wave changes needs monitoring and a same-day echo, and both specialties need to know. In a woman with active EGPA, the likeliest cause is an eosinophilic myocarditis rather than a blocked coronary artery, though the two cannot be separated at the bedside. Be careful with beta-blockers in someone with active asthma unless cardiology advise.`,
          next: 'cardiac-results'
        },
        {
          label: 'Start the NSTEMI pathway with aspirin and routine cardiology review tomorrow, treating the vasculitis later',
          rating: 'good',
          feedback: `Treating a possible acute coronary syndrome is defensible, and aspirin is reasonable. The weakness is anchoring on coronary atherosclerosis in a 46-year-old non-smoker with a known active inflammatory disease, and delaying the treatment of the cause. The troponin rise here needs a unifying diagnosis, not a separate one.`,
          next: 'cardiac-results'
        },
        {
          label: 'Book an urgent outpatient echo and cardiology clinic, and continue routine ward observations',
          rating: 'poor',
          feedback: `Cardiac involvement can progress within hours. An outpatient timescale does not match a rising troponin in a symptomatic patient, and routine observations will not pick up an arrhythmia.`,
          next: 'c-cardiac-poor'
        },
        {
          label: 'Treat it as asthma and anxiety, give a nebuliser and repeat the troponin in the morning',
          rating: 'unsafe',
          feedback: `This is anchoring on a familiar explanation. There is no new wheeze, there are new ECG changes and the troponin has risen. Attributing chest pain to anxiety in a patient with a rising troponin risks missing an arrhythmia or heart failure overnight.`,
          next: 'c-cardiac-unsafe'
        }
      ],
      reasoning: `A single normal troponin earlier did not rule out cardiac involvement, since it only describes that moment. A rise from 9 to 186 with new lateral T-wave inversion is myocardial injury until proven otherwise. In EGPA, cardiac disease is often the largest threat to life, and it does not need coronary disease to be present. I keep both options open: ACS is treated until cardiology say otherwise, but I also now have an urgent reason to treat the vasculitis, since a myocarditis will not settle on aspirin alone.`
    },
    {
      id: 'c-cardiac-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Overnight',
      text: `The ward nurse is uneasy and asks the on-call registrar to review at 19:30. She is moved to a monitored bed, the echo is booked for the same evening, and cardiology and rheumatology are phoned. The delay was under two hours, but she had been on an open ward with her chest pain unmonitored.`,
      next: 'cardiac-results'
    },
    {
      id: 'c-cardiac-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Overnight',
      text: `At 02:10 the nurse finds her pale and clammy with a heart rate of 134 and runs of ventricular ectopics on the monitor. The repeat troponin has more than doubled. She is moved to a monitored bed, cardiology and the rheumatology registrar are called, and an urgent echo is arranged. By morning she is stable on monitoring, but she has lost hours she did not have.`,
      next: 'cardiac-results'
    },
    {
      id: 'cardiac-results',
      type: 'presentation',
      tone: 'results',
      label: 'Echocardiogram',
      text: `Left ventricular ejection fraction about 40% with global hypokinesis and <strong>no regional wall motion abnormality</strong>. There is a small pericardial effusion. Troponin has peaked at 240 ng/L. A coronary angiogram is not felt to be needed now, and a cardiac MRI is requested for when she is stable.<br><br>
The cardiologist and rheumatologist agree: this is most likely <strong>EGPA with eosinophilic myocarditis</strong>. This is organ-threatening disease, so she needs high-dose corticosteroids today. The rheumatology registrar asks you to prescribe them.`,
      next: 'steroid-q'
    },
    {
      id: 'steroid-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'Before you write up high-dose steroids, what do you do about her birthplace?',
      options: [
        {
          label: 'Send Strongyloides serology and stool, give ivermectin, and start high-dose steroids today',
          rating: 'best',
          feedback: `Strongyloides can lie dormant for decades after childhood exposure. High-dose steroids can trigger hyperinfection, which is often fatal. A serology result may be false negative and takes days, so treating empirically with ivermectin while sending tests is safe and does not delay the steroids. Check the dose and her current medicines with the BNF or pharmacy.`,
          next: 'treatment-started'
        },
        {
          label: 'Start high-dose steroids and ivermectin today, and send the parasite tests later when convenient',
          rating: 'good',
          feedback: `The treatment is right, and it protects her. The weakness is the missing tests. Sending serology and stool at baseline documents her status, and the results are needed to know if a repeat course of ivermectin is needed. Take the samples before the first dose when you can.`,
          next: 'treatment-started'
        },
        {
          label: 'Hold the steroids until the Strongyloides serology comes back, to be sure it is safe',
          rating: 'poor',
          feedback: `You are right to think about the risk, but the answer is to cover it and carry on. Waiting for a result delays treatment of myocarditis for days. The risk of hyperinfection can be managed without delaying steroids.`,
          next: 'c-steroid-poor'
        },
        {
          label: 'Start high-dose steroids now; parasite testing can wait until she is clinically stable',
          rating: 'unsafe',
          feedback: `Urgency does not remove the hyperinfection risk, it makes it more important to manage. She was born in an endemic area and has a high eosinophil count. Giving steroids without any cover or testing risks a life-threatening hyperinfection syndrome with gram-negative sepsis.`,
          next: 'c-steroid-unsafe'
        }
      ],
      reasoning: `I have three facts that raise the probability of Strongyloides: she was born in an endemic region, she has marked eosinophilia that is not fully explained by EGPA, and she is about to receive high-dose steroids. The harm of treating without cover is large and the cost of cover is low. Serology is imperfect and can be negative in the early or chronic stages, so I do not rely on it. The steroids should not wait because she has a myocarditis. Ivermectin and steroids together, with tests sent, is the safe sequence. She has had four courses of prednisolone before without trouble, but a pulse of IV methylprednisolone is a much bigger hit.`
    },
    {
      id: 'c-steroid-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two days later',
      text: `The serology is still pending after 48 hours with no steroids given. Her troponin is still rising and her ejection fraction on a repeat echo has dropped further. The consultant is not pleased, and the steroids are started that evening along with ivermectin.`,
      next: 'treatment-started'
    },
    {
      id: 'c-steroid-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Day 9',
      text: `After a good initial response, Mrs Begum develops abdominal pain, vomiting, a cough and a fever. Her blood cultures grow a gram-negative bacillus, and larvae are found in her sputum and stool. This is <strong>Strongyloides hyperinfection</strong>. She spends several days in intensive care on antibiotics and ivermectin, and the steroids have to be adjusted. She survives, but the complication was preventable.`,
      next: 'treatment-started'
    },
    {
      id: 'treatment-started',
      type: 'presentation',
      label: 'Once she is stable on the ward',
      text: `The troponin falls and her breathing eases. Her Strongyloides serology comes back positive, and she has completed ivermectin. The rheumatology team is planning further treatment to keep the disease under control and to reduce how long she needs high-dose steroids. The foot drop and her right hand have not recovered yet. She will need physiotherapy and an ankle-foot orthosis for the foot.<br><br>
Mrs Begum asks to talk. Her husband is with her, and she has written down her questions: &ldquo;Is it cancer? Is it just my asthma? Why is my heart affected? Do I have to take these tablets forever? Will I be able to work?&rdquo;`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'How do you explain what is happening?',
      options: [
        {
          label: 'Explain a rare, treatable condition inflaming blood vessels, with long-term follow-up and steroid safety advice',
          rating: 'best',
          feedback: `This answers her questions in plain language: it is not cancer, it links her asthma, nerves and heart, and it is treatable but needs ongoing care. It is honest about the foot, which may recover slowly and incompletely, and it explains why follow-up and steroid safety matter. Check what she has understood by asking her to say it back, and invite her husband to ask his own questions.`,
          next: 'conclusion'
        },
        {
          label: 'Explain the vasculitis and the steroids, and leave the talk about long-term follow-up until clinic',
          rating: 'good',
          feedback: `The core message is right. But delaying the long-term follow-up discussion leaves her unprepared for the commonest cause of relapse, which is stopping tablets or missing appointments when she feels well. She is anxious, so telling her the plan now is likely to reassure her more than silence.`,
          next: 'c-comm'
        },
        {
          label: 'Explain the condition using terms such as eosinophilic granulomatosis with polyangiitis and myocarditis',
          rating: 'poor',
          feedback: `Naming the condition is fine, but a stream of technical terms leaves her without an understandable picture. Tailor the language to what she asked, check understanding, and give written information.`,
          next: 'c-comm'
        },
        {
          label: 'Say it is bad asthma affecting a nerve, that treatment will fix it in a few weeks and she can return to work',
          rating: 'poor',
          feedback: `This is reassuring but untrue. Her recovery will be slow, the nerve damage may be permanent, and she will need long-term treatment. False reassurance now leads to distrust and non-adherence later.`,
          next: 'c-comm'
        }
      ],
      reasoning: `She asked five questions, and I want to answer each one honestly and in order. Not cancer. Not just asthma. The same process that affects the lungs has affected her nerves and heart. It is treatable, so she should expect to get better, but the foot may take months and may not recover fully, and she will be on steroids for a while, with other tablets to help reduce them. Since relapses are common, she needs to know that follow-up is a part of the treatment. A written steroid card, advice about infections, bone protection and not stopping tablets suddenly all go in the safety-net. I would offer to write a fit note and put her in touch with occupational health at the school.`
    },
    {
      id: 'c-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'The next morning',
      text: `The ward nurse tells you Mrs Begum asked whether she could stop her tablets since she feels better, and that her husband said steroids are dangerous. She does not realise she needs to see rheumatology again after discharge. You sit down with them both, go back over the key points, and give her a steroid card and a written plan.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: eosinophilic granulomatosis with polyangiitis (EGPA), with mononeuritis multiplex and eosinophilic myocarditis.</strong><br><br>
Mrs Begum was treated with high-dose corticosteroids and ivermectin (her Strongyloides serology came back positive), and rheumatology added further immunosuppression under specialist care. Her troponin settled and her heart function was monitored. The foot drop improved only slowly, and she was fitted with a splint and had physiotherapy. She was followed up in a joint vasculitis clinic.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Foot drop plus a deficit in a different limb: count the nerves. Inversion preserved and asymmetry across separate nerves means mononeuritis multiplex, not sciatica.</li>
<li>Asthma, polyps, eosinophilia and neuropathy together: EGPA, a vasculitis until proven otherwise. It needs same-day senior and rheumatology input.</li>
<li>A negative ANCA does not exclude EGPA. Looking for heart involvement (ECG, troponin, echocardiogram) is part of the baseline.</li>
<li>A new troponin rise with chest tightness is an emergency that needs monitoring, echo and two specialties.</li>
<li>Before high-dose steroids in someone from an endemic area, send tests and give ivermectin. Do not wait and do not omit it.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;Your blood vessels have become inflamed, which is linked to your asthma. It has damaged some nerves and affected your heart. It is not cancer. It is treatable, but needs medicines for a long time and regular check-ups, even when you feel well.&rdquo;<br><br>
<strong>Safety-netting:</strong> chest pain, breathlessness, palpitations, new numbness or weakness, abdominal pain, blood in the urine, fever or any infection while on steroids all need prompt review. Carry a steroid card and never stop steroids suddenly.`,
      keyLearning: [
        'Count the nerves: preserved ankle inversion points to a peroneal nerve rather than L5, and asymmetric deficits in separate nerves mean mononeuritis multiplex.',
        'Asthma plus polyps, a high eosinophil count and a neuropathy should make you think of EGPA, which needs same-day senior and rheumatology input.',
        'Eosinophilia has a differential: allergy, drugs, parasites, EGPA, hypereosinophilic syndrome and haematological malignancy.',
        'A negative ANCA does not exclude EGPA. Most patients are ANCA-negative.',
        'Cardiac involvement is a major cause of death in EGPA. Check an ECG and troponin early, and repeat them if symptoms appear.',
        'Before high-dose steroids, consider Strongyloides in anyone born in or travelling to endemic areas. Test and treat with ivermectin, and do not delay steroids.',
        'Take the FBC before steroids, since they quickly lower the eosinophil count.'
      ],
      relatedTests: ['FBC and film', 'Urine dip', 'ECG', 'High-sensitivity troponin', 'Echocardiogram', 'Strongyloides serology and stool', 'ANCA (MPO and PR3)', 'Nerve conduction studies'],
      goingFurther: `<strong>Classification:</strong> the 2022 ACR/EULAR criteria for EGPA score obstructive airway disease, nasal polyps and mononeuritis multiplex in favour, and a high blood eosinophil count and eosinophil-predominant inflammation on biopsy as well. A PR3-ANCA/cANCA positive result, or haematuria, counts against it. A total score above a threshold is needed. These are classification criteria, not diagnostic criteria, and they were built for research.<br><br>
<strong>ANCA and phenotype:</strong> a minority of patients with EGPA are ANCA-positive, usually MPO-ANCA. These patients tend to have the vasculitic features (glomerulonephritis, neuropathy, purpura), while ANCA-negative patients tend to have more eosinophil-driven tissue disease, including heart involvement and lung infiltrates. Both groups need assessment of the heart.<br><br>
<strong>Treatment:</strong> severity is judged by organ involvement (heart, gut, kidney, CNS and severe neuropathy are poor prognostic features). Severe disease is usually treated with high-dose steroids plus cyclophosphamide or rituximab, and less severe disease with steroids and a steroid-sparing agent. <strong>Mepolizumab</strong>, an anti-IL-5 antibody, is used in selected patients with relapsing or refractory disease and can allow steroid reduction. Specialist teams decide on these.<br><br>
<strong>Asthma drugs:</strong> EGPA has occasionally emerged as steroid doses were reduced in patients on leukotriene receptor antagonists. This is thought to reflect unmasking of the disease, not causation.`
    }
  ]
};
