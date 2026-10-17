/* ana-case-1: The Tired Teacher */

export default {
  id: 'ana-case-1',
  title: 'The Tired Teacher',
  summary: '27-year-old nursery teacher with three months of tiredness, sore hands and a facial rash',
  setting: 'GP surgery',
  difficulty: 'beginner',
  curriculum: ['RE-SLE', 'PR-POLY', 'IX-SEROLOGY', 'TX-MEDS', 'LO3', 'LO5', 'LO6', 'LO7'],
  objectives: [
    'Take a history that separates lupus from its common mimics in a young woman with fatigue, arthralgia and a rash',
    'Choose a targeted first-line set of tests and explain why a urine dipstick matters most',
    'Explain why a positive ANA means little without the clinical picture, and why this one cannot be dismissed',
    'Decide how urgently to escalate suspected lupus nephritis, and explain it and safety-net it to the patient'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'GP surgery, Tuesday 17:10',
      text: `<p><strong>Sana Qureshi, 27, nursery teacher.</strong> This is her third visit in ten weeks. She has a ten-minute slot and apologises for being "back again".</p>
<p>She has been exhausted for about three months. She falls asleep on the sofa by 8 pm and dreads the end-of-day tidy-up with her class of three-year-olds. Her hands and wrists are stiff and sore when she wakes, and she struggles to open the children's water bottles. She also has a rash across her face that she took for sunburn, but it has not gone away.</p>
<p>A locum checked a TSH, ferritin and B12 six weeks ago and all were normal. She was told it was probably a virus. She lives with her husband Imran, who drives a taxi. They are trying to save for a deposit on a flat, so she is anxious about time off work.</p>`,
      next: 'hx-q'
    },
    {
      id: 'hx-q',
      type: 'decision',
      stage: 'History',
      prompt: 'You have the headline story. In the time left, which questions will best separate the possible causes?',
      options: [
        {
          label: 'Ask about sun sensitivity, mouth ulcers, chest pain on breathing, hair loss, cold fingers and medicines',
          rating: 'best',
          feedback: `These are the discriminating features of lupus: photosensitivity, oral ulcers, pleuritic pain, non-scarring hair loss and Raynaud's, plus a drug history to catch drug-induced lupus. Each one is cheap to ask and none belongs to the common mimics. If every answer were "no" and the joints were the only problem, early inflammatory arthritis would move up your list.`,
          next: 'hx-findings'
        },
        {
          label: 'Ask about recent infections, children in her class with rashes, and anyone at home who has been unwell',
          rating: 'good',
          feedback: `Reasonable, because she works with toddlers and parvovirus B19 can cause a symmetrical arthritis in adults. But it tests one explanation. It would not tell you about the multisystem features that would raise the probability of lupus, so you may anchor on a viral cause.`,
          next: 'hx-findings'
        },
        {
          label: 'Ask how long the morning stiffness lasts, which joints swell, and whether anyone has rheumatoid arthritis',
          rating: 'poor',
          feedback: `This is anchoring on the joints, because the hands are what she complained of. The questions are useful for rheumatoid arthritis but would not pick up the rash's photosensitivity, ulcers or pleurisy. You risk a joint-focused work-up that misses a multisystem disease.`,
          next: 'hx-gaps'
        },
        {
          label: 'Ask about workload, sleep, mood and stress, since tiredness in a busy teacher is usually lifestyle',
          rating: 'poor',
          feedback: `Sleep and mood matter in any fatigue history, and untreated depression is common. But with swollen joints and a rash, "stress" is a diagnosis of exclusion that you have not yet earned. This is premature closure: explaining the symptoms before you have looked for an organic cause.`,
          next: 'hx-gaps'
        }
      ],
      reasoning: `Fatigue plus arthralgia plus a facial rash has a short list of causes, and the history can reorder it before any test is sent. In a young woman, the questions that do the most work are the ones that touch several organ systems at once. A single multisystem answer, such as mouth ulcers or pleuritic pain, is more informative than another detail about the hands. Think of the history as choosing which tests you will need, so you ask before you order.`
    },
    {
      id: 'hx-gaps',
      type: 'presentation',
      tone: 'consequence',
      label: 'As she stands to leave',
      text: `You cover the joints, work and her mood, and the ten minutes are almost gone. As Sana picks up her coat she says, "Should I mention the mouth ulcers? And the chest thing in September?" You sit back down. The systems you should have asked about first now come out in a rush, in a conversation you are rushing.`,
      next: 'hx-findings'
    },
    {
      id: 'hx-findings',
      type: 'presentation',
      label: 'History',
      text: `<ul>
<li><strong>Rash:</strong> appeared after a week in the sun in August and gets darker and tighter on bright days. She now wears a hat on playground duty.</li>
<li><strong>Mouth:</strong> three or four painless ulcers over the last three months.</li>
<li><strong>Hair:</strong> more in her brush and thinner at the temples. She has put it down to stress.</li>
<li><strong>Chest:</strong> a sharp left-sided pain on deep breaths for about four days in September. It settled, so she did not seek help.</li>
<li><strong>Hands:</strong> her fingertips go pale, then a greyish-purple, in the cold. On her brown skin she only noticed the change in the bathroom light.</li>
<li><strong>Joints:</strong> wrists and knuckles stiff for about 90 minutes each morning. The left knee puffs up from time to time.</li>
<li><strong>Medicines:</strong> combined oral contraceptive pill for five years and occasional ibuprofen. Nothing new in the last year. No hydralazine, isoniazid or minocycline.</li>
<li><strong>Contacts:</strong> two children in her class had "slapped cheek" in June. She herself had no rash.</li>
<li><strong>Urine and other symptoms:</strong> no burning or visible blood. No fever or night sweats. She has not looked at her urine closely.</li>
</ul>`,
      next: 'exam'
    },
    {
      id: 'exam',
      type: 'presentation',
      label: 'Examination',
      text: `You explain what you would like to examine and ask permission to look inside her mouth and at her scalp. You examine by the window in natural light.
<ul>
<li><strong>Face:</strong> a flat, warm, dusky violet-brown patch over both cheeks and the bridge of the nose, with fine scale. It <strong>spares the nasolabial folds</strong>. On her brown skin it is not bright pink, and it is easier to see by comparing it with the skin on her forearm. There are no papules or pustules.</li>
<li><strong>Mouth and scalp:</strong> two shallow, painless ulcers on the hard palate. The hair is thin at the temples with short broken hairs.</li>
<li><strong>Hands and knee:</strong> tender swelling at the second and third MCP joints on both sides, and both wrists feel boggy. A small effusion in the left knee.</li>
<li><strong>General:</strong> BP 126/78, pulse 90, temperature 36.8°C, SpO₂ 98% on air. Chest clear with no rub. Heart sounds normal. No ankle swelling.</li>
</ul>`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'A young woman with fatigue, an inflammatory-sounding arthritis and a facial rash. Write your top three or four differentials, say which one you cannot afford to miss, and name the single test result that would change your plan most.',
      reveal: `<ol>
<li><strong>SLE (the one not to miss).</strong> A photosensitive rash sparing the nasolabial folds, oral ulcers, non-scarring hair loss, symmetrical inflammatory arthritis, pleuritic pain and Raynaud's together make a multisystem pattern. The danger is <strong>silent kidney involvement</strong>, which a urine dipstick can reveal in two minutes.</li>
<li><strong>Parvovirus B19 arthropathy.</strong> Real exposure in a nursery, and it causes a symmetrical small-joint arthritis in adults. But it usually settles within weeks, and it does not explain mouth ulcers, hair loss or pleurisy.</li>
<li><strong>Early rheumatoid arthritis.</strong> Symmetrical small-joint synovitis with prolonged morning stiffness fits, but it does not explain the rash, ulcers or hair loss. RA does not need to be excluded today, but it should not be the only thing on the list.</li>
<li><strong>Mimics of a malar rash.</strong> Rosacea has papules, pustules and flushing. Seborrhoeic dermatitis has greasy scale and involves the nasolabial folds. Dermatomyositis has eyelid and knuckle changes with proximal weakness. On darker skin the rash can look violaceous or hyperpigmented rather than red, so do not reject lupus because it is "not red".</li>
<li><strong>Others:</strong> hypothyroidism (already excluded by a normal TSH), anaemia, fibromyalgia or low mood (no synovitis, normal bloods), and drug-induced lupus (no culprit drug here).</li>
</ol>
<strong>The result that would change your plan most:</strong> a urine dipstick showing blood and protein.`,
      next: 'inv-q'
    },
    {
      id: 'inv-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which tests will you request today?',
      options: [
        {
          label: 'FBC, U&E, CRP and ESR, a urine dipstick in the surgery now, and an ANA',
          rating: 'best',
          feedback: `A targeted first line. The FBC looks for cytopenias, the U&E and urine dip look for kidney involvement, CRP with ESR gives the inflammatory pattern, and ANA is a sensible test because the pre-test probability of lupus is now meaningful. The bedside dipstick takes two minutes and may change the urgency before she leaves. If the dip and FBC were normal, you would still send the rest but be less worried about organ involvement.`,
          next: 'results'
        },
        {
          label: 'The same bloods and ANA, with a urine sample sent to the lab for a protein:creatinine ratio',
          rating: 'good',
          feedback: `A urine PCR is a good test, and you will need one. But sending it away means no result today. A dipstick is a screening test that costs nothing and needs no lab, so skipping it takes away your chance of acting before the patient leaves the building.`,
          next: 'cons-inv-lab'
        },
        {
          label: 'A full autoimmune screen: ANA, ENA, dsDNA, RF, anti-CCP, ANCA and complement',
          rating: 'poor',
          feedback: `This is the indiscriminate panel. Testing for everything produces false positives and anxiety (low-level RF and ANA are common in healthy people) and costs money, and tests like dsDNA and complement are best interpreted once a positive ANA has made lupus likely. It also did not include a urine test, the one test that most affects what happens next.`,
          next: 'cons-inv-panel'
        },
        {
          label: 'RF, anti-CCP, CRP and bilateral hand X-rays, since the main problem is an inflammatory arthritis',
          rating: 'poor',
          feedback: `Anchoring on the joints again. RF and anti-CCP are relevant to RA, and hand X-rays are usually normal at three months. None of these explains the rash, ulcers or fatigue, and they will not find the complication that matters most.`,
          next: 'cons-inv-ra'
        }
      ],
      reasoning: `Ask what each test could change. FBC, U&E, CRP/ESR and urine dip all inform the urgency of the plan, and the ANA tells you whether a connective tissue disease is on the table. RF, anti-CCP, ENA and dsDNA are specific tools you reach for after a pattern has emerged, not before. The pre-test probability here is high enough to justify an ANA, which is a very sensitive but poorly specific test; its value comes from the clinical context you built in the history and examination. The urine dip is the test most likely to change what you do today.`
    },
    {
      id: 'cons-inv-lab',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two days later',
      text: `Sana goes home without any bedside result. The bloods and urine come back together two days later. The urine dipstick on the lab sample is the item that makes you wince: it would have been in your hands before she walked out of the room.`,
      next: 'results'
    },
    {
      id: 'cons-inv-panel',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two days later',
      text: `The panel is back in part: ANA positive, <strong>RF weakly positive at 21 IU/mL</strong> (a low-level result that is common in healthy people and in many other conditions), anti-CCP negative and ANCA negative. The ENA, dsDNA and complement results will take another week. Sana asks if the RF means she has rheumatoid arthritis, and you spend part of the consultation explaining a result that did not help. You also realise that nobody tested her urine, and ask her to drop a sample in that day.`,
      next: 'results'
    },
    {
      id: 'cons-inv-ra',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two days later',
      text: `RF and anti-CCP are negative, the CRP is only marginally up and the hand X-rays are normal, as they usually are early on. You now have a pile of tests that explain neither the rash nor the tiredness. You go back to the history, and request an FBC, U&E, ESR, a urine dip and an ANA, which she has done the next morning.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Results',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>Haemoglobin</td><td>109 g/L</td><td>115–165</td></tr>
<tr><td>White cell count</td><td>3.2 ×10⁹/L</td><td>4.0–11.0</td></tr>
<tr><td>Lymphocytes</td><td>0.7 ×10⁹/L</td><td>1.0–4.0</td></tr>
<tr><td>Platelets</td><td>141 ×10⁹/L</td><td>150–400</td></tr>
<tr><td>CRP</td><td>6 mg/L</td><td>&lt;5</td></tr>
<tr><td>ESR</td><td>62 mm/h</td><td>typically &lt;20</td></tr>
<tr><td>Creatinine / eGFR</td><td>72 µmol/L / &gt;90</td><td>45–84</td></tr>
<tr><td>Potassium</td><td>4.0 mmol/L</td><td>3.5–5.3</td></tr>
<tr><td>Urine dipstick</td><td><strong>blood ++, protein ++</strong>, nitrite and leucocytes negative</td><td>negative</td></tr>
<tr><td>ANA (IIF, HEp-2)</td><td><strong>positive 1:640</strong>, homogeneous</td><td>&lt;1:80</td></tr>
</table>
She is not menstruating and has no urinary symptoms.`,
      next: 'interp-q'
    },
    {
      id: 'interp-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'How do you interpret these results alongside the history and examination?',
      options: [
        {
          label: 'Probable lupus, with cytopenias and a dipstick showing blood and protein suggesting possible lupus nephritis',
          rating: 'best',
          feedback: `You have combined the pattern, not a single number: a multisystem history, lymphopenia and mild thrombocytopenia, a high-titre ANA, and dipstick haematuria and proteinuria with no sign of infection. Nephritis has to be assumed until proven otherwise because it is treatable and silent. What would change your mind: a clean repeat urine and a rapidly self-limiting course would make lupus less likely.`,
          next: 'esc-q'
        },
        {
          label: 'Probably a connective tissue disease, but repeat the dip on a midstream sample before considering the kidneys',
          rating: 'good',
          feedback: `Sensible to avoid over-reading one dipstick, since contamination and urine infection are possible. But the combination of cytopenias, a high-titre ANA and a positive dip means a repeat should run in parallel with referral, not hold it up. Nitrite and leucocytes are negative and she is not menstruating, so a false positive is unlikely.`,
          next: 'esc-q'
        },
        {
          label: 'Most likely viral arthritis from nursery contacts, so send parvovirus IgM and repeat the dip next week',
          rating: 'poor',
          feedback: `Parvovirus could explain some of the story, but it does not explain mouth ulcers, hair loss, pleurisy, lymphopenia or proteinuria. This is anchoring on the first explanation that fits part of the picture. A week of watchful waiting is a week of unrecognised kidney inflammation.`,
          next: 'cons-parvo'
        },
        {
          label: 'The positive ANA is often seen in healthy people, so reassure her and repeat the bloods in three months',
          rating: 'unsafe',
          feedback: `Your principle is right: an ANA means little on its own, and it is common in healthy people at low titre. But the lesson here is the reverse. This ANA is high titre and sits on top of a convincing multisystem picture, cytopenias and an abnormal dipstick. Reassuring and rechecking in three months risks letting silent nephritis cause permanent kidney damage.`,
          next: 'danger-delay'
        }
      ],
      reasoning: `A positive ANA is a test of the immune system's noise level, not a diagnosis. A sizeable minority of healthy people are positive at low titres, so the pre-test probability, not the lab result, carries the weight. Here the probability was already high before the ANA came back, and the ANA turns a suspicion into something to act on. The dipstick is the most important result because it shows organ involvement. Your course of action depends on whether there is a threat to the kidney, and here there may be.`
    },
    {
      id: 'cons-parvo',
      type: 'presentation',
      tone: 'consequence',
      label: 'Five days later',
      text: `The parvovirus IgM is negative. The repeat dip, taken midstream, still shows blood ++ and protein ++. The viral explanation never accounted for the ulcers, the lymphopenia or the urine, and you have lost a working week.`,
      next: 'esc-q'
    },
    {
      id: 'danger-delay',
      type: 'presentation',
      tone: 'danger',
      label: 'Three months later',
      text: `Sana returns after a week off work. Her ankles are swollen, she is breathless on the school steps and she has noticed foamy urine. BP is 152/96 (it was 126/78), there is pitting oedema to the knees, and the urine dip shows blood ++ and protein +++. This is a different illness from the one you could have acted on in October. You ring the on-call rheumatology doctor, who agrees to see her that day, and you let her know why this has become an emergency.`,
      next: 'manage-q'
    },
    {
      id: 'esc-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'You think she may have lupus with kidney involvement. What do you do about referral today?',
      options: [
        {
          label: 'Phone the rheumatology on-call or duty doctor today, ask for urgent review this week, and send a urine PCR',
          rating: 'best',
          feedback: `Haematuria and proteinuria with cytopenias suggest an organ-threatening autoimmune disease, so a conversation with a senior rheumatologist the same day is appropriate rather than a letter. Sending a urine PCR and repeating U&E and BP gives the team the data they need. A normal creatinine does not exclude nephritis, which is why the dip is the key result. If the PCR and repeat dip came back clear, you could downgrade the urgency.`,
          next: 'manage-q'
        },
        {
          label: 'Send an urgent referral letter to rheumatology today and book a GP review in two weeks with the results',
          rating: 'good',
          feedback: `An urgent letter is in the right direction, and a review is sensible. But letters can sit in triage for days, and two weeks is long if the kidneys are inflamed. The speed of a phone call is worth the extra five minutes here.`,
          next: 'manage-q'
        },
        {
          label: 'Add dsDNA, ENA and complement now, then make a routine referral once the results are back',
          rating: 'poor',
          feedback: `Those tests have a role, and rheumatology will want them. But waiting for them before referring puts the diagnostic process ahead of the patient. A routine referral treats the problem as a clinic-time question, when it is a time-critical one.`,
          next: 'cons-esc-poor'
        },
        {
          label: 'Make a routine referral, since her blood pressure and creatinine are normal so the kidneys seem fine',
          rating: 'unsafe',
          feedback: `False reassurance from normal tests. Creatinine and blood pressure are often normal early in lupus nephritis because the kidney compensates, and the abnormal dipstick is the warning. Waiting for the creatinine to rise means waiting for damage that may be partly irreversible.`,
          next: 'danger-esc'
        }
      ],
      reasoning: `Referral urgency should follow what is at stake, not how well the patient feels. Lupus nephritis can be quiet until a lot of function has been lost, and early treatment changes the long-term outcome. A phone call gets a senior opinion the same day and often brings the review forward by weeks. The antibody tests can be sent in parallel, but they should never be the thing the referral waits for. Telling a patient "your kidneys look fine" on the strength of a creatinine is a classic trap.`
    },
    {
      id: 'cons-esc-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Eight days later',
      text: `The results are back: anti-dsDNA strongly positive, anti-Sm positive, and low C3 and C4. A routine referral would put her in clinic months from now. You now phone the rheumatologist, who says "I wish we had heard on the day" and sees her the following Thursday. About ten days have gone.`,
      next: 'manage-q'
    },
    {
      id: 'danger-esc',
      type: 'presentation',
      tone: 'danger',
      label: 'Three weeks later',
      text: `Sana returns with puffy eyelids and ankles and foamy urine. BP is 148/94 and the dip shows blood ++ and protein +++. A urine PCR is 190 mg/mmol (normal below 15) and her creatinine has risen from 72 to 96 µmol/L. The routine referral has not even been triaged. You phone the rheumatology on-call and she is seen the next day. The kidney inflammation has had three more weeks to do damage.`,
      next: 'manage-q'
    },
    {
      id: 'manage-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'While she waits to be seen, Sana asks for something stronger for her painful hands and knee. What do you advise?',
      options: [
        {
          label: 'Regular paracetamol, no NSAIDs until her kidneys are assessed, and steroids left to the specialist team',
          rating: 'best',
          feedback: `Paracetamol is safe and does something. NSAIDs can reduce kidney blood flow and make nephritis worse, and with blood and protein in the urine they should wait for the team's view. Starting steroids is a specialist decision that depends on what is found, not a GP bridging measure. If the kidneys are cleared, NSAIDs might be reconsidered.`,
          next: 'comm-q'
        },
        {
          label: 'Paracetamol with a topical NSAID gel on the wrists and knee, leaving oral NSAIDs off the table',
          rating: 'good',
          feedback: `Reasonable. Topical NSAIDs have much lower systemic absorption and she avoids the oral risk. But it leaves a more complex plan than necessary, and some clinicians would still hold off until the kidney question is settled.`,
          next: 'comm-q'
        },
        {
          label: 'Prednisolone 20 mg daily from today to settle the inflammation before she reaches the clinic',
          rating: 'poor',
          feedback: `Steroids will almost certainly be part of her treatment, but starting them before specialist assessment makes it harder to judge baseline disease activity and plan a kidney biopsy. It also exposes her to side effects before the plan is fixed. Treat the patient's symptoms safely, and let the team decide the immunosuppression.`,
          next: 'cons-steroid'
        },
        {
          label: 'Ibuprofen 400 mg three times daily with food, as you would for any inflammatory arthritis',
          rating: 'unsafe',
          feedback: `With haematuria, proteinuria and possible nephritis, NSAIDs can cause acute kidney injury. "Treat the symptom" is a trap here: the patient is asking for the drug that can do the most harm to the organ you are worried about.`,
          next: 'cons-nsaid'
        }
      ],
      reasoning: `Prescribing in suspected lupus begins with what not to give. Her kidneys are the vulnerable organ, so anything that lowers renal blood flow is off the table until the picture is clear. Paracetamol is boring but safe. The bigger treatments, such as hydroxychloroquine and steroids, are part of a plan that rheumatology and, if needed, renal teams will build around biopsy and serology.`
    },
    {
      id: 'cons-steroid',
      type: 'presentation',
      tone: 'consequence',
      label: 'At clinic',
      text: `Sana feels better within days. At clinic, the rheumatology team ask her what she is taking and are unhappy to find the prednisolone. It has made it harder to judge how active her disease really was, and has complicated the plan for a kidney biopsy. She is also sleeping badly and feels jittery. The team would rather have been asked first.`,
      next: 'comm-q'
    },
    {
      id: 'cons-nsaid',
      type: 'presentation',
      tone: 'danger',
      label: 'Two days later',
      text: `Sana rings the surgery feeling nauseated and having passed little urine. A repeat U&E shows creatinine has risen to 128 µmol/L. You stop the ibuprofen, ask her to drink normally and arrange a repeat the next day. It partly recovers, but you have added an avoidable injury to a kidney that may already be inflamed.`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'Sana asks: "Is it lupus? My cousin had lupus and was in hospital for months. Am I going to lose my job?" How do you respond?',
      options: [
        {
          label: 'Say lupus is possible but not confirmed, explain why you are worried about her kidneys, and when she will be seen',
          rating: 'best',
          feedback: `She asked a direct question and deserves an honest answer with its uncertainty. Naming lupus as a possibility, giving the reason for urgency (the kidney test) and a timescale lets her take part in the plan. You can also acknowledge her cousin's experience and say that treatment has moved on and most people with lupus work. If she wanted to hear less, you could follow her lead on detail.`,
          next: 'safety-q'
        },
        {
          label: 'Explain it looks like an autoimmune condition, give her a leaflet, and let the specialists discuss lupus with her',
          rating: 'good',
          feedback: `Honest and safe, and a leaflet helps. But it answers the question she did not ask and leaves the one she did. She came with a name in mind, and not engaging with it may leave her to fill the gap with the internet.`,
          next: 'safety-q'
        },
        {
          label: 'Avoid the word lupus until it is confirmed, to spare her worry, and say she needs a few more tests',
          rating: 'poor',
          feedback: `The motive is kind, but she asked directly and has probably already searched online. Avoiding the word can feel evasive and it leaves her unprepared when the specialists use it. It also makes it hard to explain why the appointment is urgent.`,
          next: 'cons-comm'
        },
        {
          label: 'Reassure her that it is almost certainly nothing serious and that the hospital visit is just a routine check',
          rating: 'unsafe',
          feedback: `This is false reassurance, and it is not what you believe. If she thinks it is routine she may postpone the appointment or ignore new symptoms such as swelling. Honest uncertainty is not alarming when it is delivered with a plan.`,
          next: 'cons-comm'
        }
      ],
      reasoning: `Patients often arrive with a name already in their heads. If you avoid it you leave the space for Dr Google, and if you overstate or understate the risk you lose her trust. The useful frame is "possible, not certain, and here is what we are doing about it". Fears about work and family are the real concern behind many diagnostic questions, so address them. Shared understanding is also what makes safety-netting work, because she will only call you if she understands why it matters.`
    },
    {
      id: 'cons-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'That evening',
      text: `Sana leaves without a clear picture of what you think is wrong or why the timing matters. Imran phones the surgery the next morning, upset, to say she spent the night reading forum posts about lupus and hardly slept. He asks plainly whether she is seriously ill and what you are not telling them.`,
      next: 'safety-q'
    },
    {
      id: 'safety-q',
      type: 'decision',
      stage: 'Follow-up',
      prompt: 'Before she leaves, what safety-net and self-care advice do you give?',
      options: [
        {
          label: 'Name the red flags: swelling, frothy urine, pleuritic pain, breathlessness, fever; and agree daily sun protection',
          rating: 'best',
          feedback: `Specific symptoms, what to do and who to contact, in a form she can remember or take home. Swelling, frothy or reduced urine suggest the kidneys, and pleuritic pain or breathlessness suggest serositis or pulmonary involvement. Fever matters because lupus and its treatment predispose to infection. Daily sun protection (high-factor sunscreen, hat, avoiding midday sun) reduces rash and may reduce flares.`,
          next: 'conclusion'
        },
        {
          label: 'Give the red flags in writing and say when to call 999, but do not discuss sun protection',
          rating: 'good',
          feedback: `The red flags and the emergency threshold are the most important parts. But sun protection is one of the few things she can do for herself and she has already noticed a link between sun and her rash. She leaves with the warning but not the self-care.`,
          next: 'conclusion'
        },
        {
          label: 'Tell her to come back if she feels worse, to rest, avoid the sun and keep a symptom diary',
          rating: 'poor',
          feedback: `"Come back if you get worse" is not a safety net, because she does not know what to look for. Her symptoms are already unpleasant, so it is hard to know what "worse" means, and she has been downplaying them for months. Be specific.`,
          next: 'cons-safety'
        }
      ],
      reasoning: `A safety net is only as good as its specificity. The patient needs to know which symptoms matter, how fast to act and how to reach someone out of hours. Because lupus nephritis can be quiet, the cues she can see (puffy face or ankles, frothy or scanty urine) are all she has. A symptom diary is no substitute for a conversation about red flags. Sun protection is easy to forget, but it is one of the few evidence-supported self-care measures.`
    },
    {
      id: 'cons-safety',
      type: 'presentation',
      tone: 'consequence',
      label: 'That weekend',
      text: `Over the weekend Sana's ankles swell and her urine foams. "You said come back if it's worse," she tells Imran. "It's only a bit worse." She waits until Monday, when she is breathless walking from the car to the surgery. The delay was only four days, but it was four days in which she could have called.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: systemic lupus erythematosus with probable lupus nephritis.</strong><br><br>
Sana was seen by rheumatology within days. Anti-dsDNA was strongly positive, anti-Sm was positive, C3 and C4 were low, and a urine protein:creatinine ratio confirmed significant proteinuria. A kidney biopsy was arranged to define the type of nephritis. She started hydroxychloroquine and, with the renal team, treatment to control the kidney inflammation.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>A history that asks about photosensitivity, ulcers, pleurisy, hair loss and Raynaud's turns "tired and achy" into a multisystem pattern.</li>
<li>A targeted first line (FBC, U&amp;E, CRP and ESR, urine dip, ANA) beats an indiscriminate panel, and the urine dip is the test that changes urgency.</li>
<li>A positive ANA means little by itself. Here it was high titre, with cytopenias and an abnormal dipstick, so it could not be dismissed.</li>
<li>Normal blood pressure and creatinine do not exclude lupus nephritis. Act on the dipstick.</li>
<li>Phone for same-day advice when an organ may be threatened, and avoid NSAIDs while the kidneys are in question.</li>
</ol>
<strong>How you'd explain it to the patient:</strong> "I think you may have an autoimmune condition called lupus, where the immune system attacks the body's own tissues. It is not certain yet, but your urine test suggests your kidneys may be inflamed, and that is why I want a specialist to see you quickly. It is treatable, and most people with lupus work and live full lives."<br><br>
<strong>Safety-netting:</strong> contact the surgery the same day (or 111/999 out of hours) for swelling of the face or ankles, frothy or reduced urine, chest pain on breathing, breathlessness, or fever. Use sun protection daily and keep every appointment.`,
      keyLearning: [
        'A positive ANA is common in healthy people at low titre. The clinical picture and specific findings make the diagnosis, not the ANA alone.',
        'Ask about multisystem features (photosensitivity, mouth ulcers, pleuritic pain, hair loss, Raynaud\'s) before you order tests.',
        'A urine dipstick is the most important bedside test in suspected lupus: nephritis is often silent.',
        'Normal BP and creatinine do not exclude lupus nephritis. Act on blood and protein in the urine.',
        'Use a targeted first line rather than an autoimmune screen. dsDNA, ENA and complement come after a positive ANA with a compatible picture.',
        'Possible organ involvement means phoning for senior advice the same day, not a routine referral or a recheck in three months.',
        'Avoid NSAIDs and leave steroids to the specialist plan while the kidneys are in question.'
      ],
      relatedTests: ['Urine dipstick', 'Urine protein:creatinine ratio', 'FBC with differential', 'ANA (IIF)', 'Anti-dsDNA', 'C3 and C4', 'ENA panel'],
      goingFurther: `<ul>
<li><strong>Activity markers.</strong> Anti-dsDNA titre and C3/C4 are used to follow activity. Rising dsDNA with falling complement points to a flare, especially renal. The ANA titre does not track activity, so repeating it adds nothing.</li>
<li><strong>Anti-Sm.</strong> Highly specific for SLE but present in only a minority. A negative result does not exclude lupus.</li>
<li><strong>Classification.</strong> The 2019 EULAR/ACR criteria use a positive ANA (at least 1:80) as an entry criterion, then weighted clinical and immunological domains. They are for classifying patients in research, not for diagnosing individuals.</li>
<li><strong>ESR:CRP dissociation.</strong> In active lupus the ESR is often high while the CRP is modest. A markedly raised CRP should prompt a search for infection or serositis.</li>
<li><strong>Hydroxychloroquine.</strong> Offered to nearly everyone with lupus because it reduces flares and organ damage. It needs retinal screening: a baseline, then regular monitoring that becomes annual after several years, and sooner if there are risk factors such as reduced kidney function.</li>
<li><strong>Contraception and pregnancy.</strong> Oestrogen-containing pills are usually avoided with active lupus or antiphospholipid antibodies. Some lupus drugs, such as mycophenolate, are harmful in pregnancy, so ask about plans early.</li>
</ul>`
    }
  ]
};
