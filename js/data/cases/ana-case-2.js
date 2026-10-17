/* ana-case-2: The Stiff Seamstress */

export default {
  id: 'ana-case-2',
  title: 'The Stiff Seamstress',
  summary: '56-year-old seamstress whose fingers change colour in the cold and have become puffy, stiff and sore',
  setting: 'GP surgery, then acute medical unit',
  difficulty: 'intermediate',
  curriculum: ['RE-SSC', 'PR-REGIONAL', 'IX-SEROLOGY', 'TX-MEDS', 'IX-BLOODS', 'LO4', 'LO5', 'LO7'],
  objectives: [
    'Distinguish primary from secondary Raynaud\'s using the history and examination, including on darker skin',
    'Choose a sensible first screen when systemic sclerosis is suspected, including baseline BP, urine and kidney function',
    'Explain why high-dose corticosteroids are hazardous in systemic sclerosis, and recognise scleroderma renal crisis as an emergency',
    'Give practical Raynaud\'s advice and clear safety-netting for digital ischaemia and renal crisis'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'GP surgery, Thursday 09:20',
      text: `<p><strong>Abena Asante, 56, runs a clothes-alteration shop in south-east London.</strong> She came to the UK from Ghana at 20. She works ten hours a day, mostly on her own, and has no sick pay. Her husband Kwame is a retired bus driver, and their daughter Abena lives nearby.</p>
<p>She has come because her fingers are "behaving strangely" in the cold and are worse this winter. A sore on the tip of her right middle finger has not healed in three weeks. Her hands feel puffy and tight in the mornings, and she is having trouble threading needles and fastening hooks and eyes on the garments she mends. "Nobody wants a seamstress who can't hold a needle," she says.</p>
<p>She has smoked about ten cigarettes a day for thirty years. Her last BP check, at the practice nurse a year ago, was normal.</p>`,
      next: 'hx-q'
    },
    {
      id: 'hx-q',
      type: 'decision',
      stage: 'History',
      prompt: 'Raynaud\'s is the headline. Which questions will best tell you whether it is primary or secondary?',
      options: [
        {
          label: 'Ask her age at onset, fingertip sores, swollen fingers, reflux and swallowing, breathlessness and drug history',
          rating: 'best',
          feedback: `These separate the two. Primary Raynaud's starts young, is mild, symmetrical and never ulcerates. Late onset, digital ulcers, puffy fingers, reflux or dysphagia, and breathlessness all point to a connective tissue disease, and a drug history catches beta-blockers, triptans and ergots. If everything but the colour change were absent, primary Raynaud's would remain likely.`,
          next: 'hx-findings'
        },
        {
          label: 'Ask about triggers, the colour sequence, how long each attack lasts and how the cold affects her work',
          rating: 'good',
          feedback: `Useful for confirming that this is Raynaud's and for understanding the effect on her livelihood. But it describes the phenomenon rather than asking what is causing it. It would not by itself tell you whether to look for an underlying disease.`,
          next: 'hx-findings'
        },
        {
          label: 'Ask about morning stiffness, which joints swell and whether anyone in the family has rheumatoid arthritis',
          rating: 'poor',
          feedback: `Anchoring on the swollen fingers and treating the problem as arthritis. Rheumatoid arthritis is in the differential, but this line of questioning would skip the ulcer, the swallowing and the breathlessness, which are what make the Raynaud's secondary.`,
          next: 'hx-gaps'
        },
        {
          label: 'Ask about smoking, caffeine and how cold her shop is, since those are the likeliest causes of cold fingers',
          rating: 'poor',
          feedback: `Smoking and cold exposure do worsen Raynaud's, and you will need to address them later. But accepting them as "the" cause is premature closure. They do not explain a fingertip ulcer or puffy hands.`,
          next: 'hx-gaps'
        }
      ],
      reasoning: `The first job with Raynaud's is not to treat it but to decide whether it is the whole story. Primary Raynaud's is common, benign and usually starts in the teens or twenties. A first attack after 40, a digital ulcer, swollen hands and gut or chest symptoms shift the probability sharply towards a connective tissue disease. Ask the features that would change what you do, and you will have the next ten minutes of examination and tests mapped out.`
    },
    {
      id: 'hx-gaps',
      type: 'presentation',
      tone: 'consequence',
      label: 'As she gets up to leave',
      text: `You have a good picture of one part of the story. As Mrs Asante gathers her bag she says, "The sore on my finger, and my food sticking in my chest, is that something I should say?" You sit back down. The features that decide whether this is a serious disease were still unasked, and the consultation is running over.`,
      next: 'hx-findings'
    },
    {
      id: 'hx-findings',
      type: 'presentation',
      label: 'History',
      text: `<ul>
<li><strong>Colour change:</strong> her fingers turn an ashen grey, then a dusky dark purple, then throb and tingle as they warm. She notices it most on the middle and ring fingers of both hands. On her dark skin she sees the grey and the loss of her usual warm tone rather than "white".</li>
<li><strong>Onset:</strong> first noticed at 54, now daily in the cold shop.</li>
<li><strong>Ulcer:</strong> a painful 3 mm sore on the tip of the right middle finger for three weeks. She has small old scars on other fingertips.</li>
<li><strong>Hands:</strong> puffy, sausage-like fingers and tightness for the first hour each morning. It is harder to bend them fully.</li>
<li><strong>Gut:</strong> heartburn most nights, and bread and meat "catch" behind the breastbone.</li>
<li><strong>Chest:</strong> breathless on the bus stairs for about six months, with an occasional dry cough. She puts it down to smoking.</li>
<li><strong>Other:</strong> no muscle weakness, rash, fever or weight loss. No family history of autoimmune disease.</li>
<li><strong>Medicines:</strong> no beta-blockers, triptans or ergot-type drugs and no hormones. She takes ibuprofen for the hand ache and shop-bought omeprazole when the heartburn is bad.</li>
</ul>`,
      next: 'exam'
    },
    {
      id: 'exam',
      type: 'presentation',
      label: 'Examination',
      text: `You explain what you will be looking at and ask before you examine her face, mouth and upper chest.
<ul>
<li><strong>Fingers:</strong> the skin over the fingers and the backs of the hands is thick and tight. You cannot pinch it into a fold, the skin creases over the knuckles have gone, and the skin looks shiny. This <strong>sclerodactyly</strong> ends at the wrists. The forearms, trunk and legs feel normal.</li>
<li><strong>Digital lesions:</strong> a 3 mm tender ulcer on the right middle fingertip, with no spreading redness. Pitting scars on several other pulps. A small firm, chalky nodule on the right index finger.</li>
<li><strong>Telangiectasia:</strong> small mat-like dark-red macules on both palms and the lower lip. On her skin they look dusky brown and are easiest to see with a light shone from the side. They blanch with pressure.</li>
<li><strong>Nailfolds:</strong> under an ophthalmoscope or dermatoscope, the capillary loops are dilated and irregular, with areas where they have dropped out. The cuticles are ragged.</li>
<li><strong>Face and neck:</strong> mild puckering around the mouth and slightly reduced mouth opening. Patches of depigmentation on the upper chest with pigment preserved around hair follicles ("salt and pepper"), which is easier to see on dark skin.</li>
<li><strong>General:</strong> BP 132/80, pulse 78, SpO₂ 96% on air, chest clear. No synovitis and no proximal muscle weakness.</li>
</ul>
<em>Skin thickening is judged by touch (a pinch test) and by lost creases and shine, not by redness, which is why it is easy to underestimate on darker skin.</em>`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'Which features here make her Raynaud\'s secondary rather than primary? What else is on your differential, and which organs are you worried about?',
      reveal: `<strong>Features of secondary Raynaud's:</strong>
<ul>
<li>First attack after 40 (primary usually starts earlier).</li>
<li>A digital ulcer and fingertip pitting scars. Primary Raynaud's does not ulcerate.</li>
<li>Puffy then tight fingers with sclerodactyly, telangiectasia and abnormal nailfold capillaries.</li>
<li>Reflux and dysphagia, and new breathlessness.</li>
</ul>
<strong>Differential:</strong> a connective tissue disease, most likely <strong>systemic sclerosis</strong> (skin changes confined to the hands and face: the "limited" pattern). Also consider SLE, Sjögren's, inflammatory myopathy, mixed connective tissue disease and rheumatoid arthritis. Heavy smoking can cause peripheral arterial disease, but it would not explain skin tightening. Drugs and hypothyroidism are less likely here.<br><br>
<strong>Organs to worry about:</strong> the <strong>lungs</strong> (interstitial lung disease and pulmonary arterial hypertension are the leading causes of death), the <strong>kidneys</strong> (scleroderma renal crisis), the <strong>gut</strong> (reflux and dysmotility), and the <strong>heart</strong>. Because early lung and kidney disease cause few symptoms, you screen for them rather than wait for them to declare themselves.`,
      next: 'inv-q'
    },
    {
      id: 'inv-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which tests will you request now?',
      options: [
        {
          label: 'FBC, U&E, CRP, urine dip, ANA with ENA if positive, and spirometry with gas transfer',
          rating: 'best',
          feedback: `A targeted screen. FBC, CRP and the ANA (with ENA if it is positive) are the diagnostic tests, and the U&E and urine dip give you a kidney baseline that you will want later. Spirometry with gas transfer is the first lung screen because interstitial lung disease and pulmonary hypertension are major causes of death in systemic sclerosis, and neither causes symptoms early. If the ANA were negative, systemic sclerosis would be less likely but not excluded.`,
          next: 'results'
        },
        {
          label: 'The same bloods, urine dip and ANA, but leave lung testing for the rheumatology team to arrange',
          rating: 'good',
          feedback: `The core diagnostic tests and the kidney baseline are all there, and the lung work will certainly be done by the specialists. But her breathlessness is already present, and spirometry with gas transfer is widely available. Starting it now saves time for a patient who cannot afford many appointments.`,
          next: 'results'
        },
        {
          label: 'A broad panel: ANA, ENA, dsDNA, RF, anti-CCP, ANCA, complement and myositis antibodies',
          rating: 'poor',
          feedback: `Indiscriminate panels produce false positives and uncertainty. The tests do not answer the questions that matter here: how severe is this, and which organs are involved? It also leaves out the urine dip, the U&E and any lung test.`,
          next: 'cons-inv'
        },
        {
          label: 'Doppler studies of the hand arteries, since thirty years of smoking suggests peripheral vascular disease',
          rating: 'poor',
          feedback: `Smoking is a contributor, and the investigation is not harmful. But it anchors on the fingertip ulcer as a purely vascular problem. Large-vessel disease does not cause skin tightening, telangiectasia or nailfold change.`,
          next: 'cons-inv'
        }
      ],
      reasoning: `Once you suspect systemic sclerosis, think about two things: confirming the diagnosis (ANA first, then ENA) and finding the organs that might be quietly involved. A baseline BP, urine dip and creatinine cost almost nothing, and you will want to be able to say "it was normal then" if something changes later. Lung disease causes much of the mortality, so a lung screen is part of the first assessment, not an extra. A broad autoimmune panel adds noise without adding that information.`
    },
    {
      id: 'cons-inv',
      type: 'presentation',
      tone: 'consequence',
      label: 'Ten days later',
      text: `The tests you sent have not moved things on. The results are a mixture of normal findings and a few weakly positive or non-specific ones, and none of them says what is wrong or how severe it is. Nobody has checked her urine or kidney function, and there is no lung test in the diary. You send the right set of tests the same day, and Mrs Asante has lost another morning of work.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Results',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>Haemoglobin</td><td>121 g/L</td><td>115–165</td></tr>
<tr><td>White cell count / platelets</td><td>7.1 ×10⁹/L / 288 ×10⁹/L</td><td>4.0–11.0 / 150–400</td></tr>
<tr><td>CRP</td><td>&lt;1 mg/L</td><td>&lt;5</td></tr>
<tr><td>Creatinine / eGFR</td><td>71 µmol/L / 88</td><td>45–84</td></tr>
<tr><td>Potassium</td><td>4.3 mmol/L</td><td>3.5–5.3</td></tr>
<tr><td>Urine dipstick</td><td>protein and blood negative</td><td>negative</td></tr>
<tr><td>ANA (IIF)</td><td><strong>positive 1:1280, centromere pattern</strong></td><td>&lt;1:80</td></tr>
<tr><td>ENA</td><td><strong>anti-centromere positive</strong>; anti-Scl-70, Ro, La, Sm, RNP and Jo-1 negative</td><td>negative</td></tr>
</table>
<strong>Your baseline:</strong> BP 132/80, creatinine 71 µmol/L, urine dip clear.`,
      next: 'plan-q'
    },
    {
      id: 'plan-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'What is your assessment, and what will you do about it today?',
      options: [
        {
          label: 'Probable limited cutaneous SSc with a digital ulcer: urgent rheumatology referral, ulcer care and help to stop smoking',
          rating: 'best',
          feedback: `The pattern is recognisable: late-onset secondary Raynaud's, sclerodactyly, telangiectasia, abnormal nailfolds and an anti-centromere ANA. A digital ulcer means active vascular disease and justifies urgent, not routine, referral. Stopping smoking is one of the most useful things she can do for her fingers. What would make it an emergency: a dusky, painful or cold finger, or signs of infection in the ulcer, which warrant same-day advice.`,
          next: 'interlude'
        },
        {
          label: 'Probable limited cutaneous SSc: routine rheumatology referral, a trial of nifedipine and review in a month',
          rating: 'good',
          feedback: `Right diagnosis, and a calcium-channel blocker is a reasonable first drug for symptomatic Raynaud's. But with an active ulcer and breathlessness the referral should be urgent, because the specialists will arrange lung and heart screening and treatments for ulcers that GPs cannot. A routine queue is long.`,
          next: 'interlude'
        },
        {
          label: 'Refer to dermatology for the skin, and to gastroenterology for the reflux, treating each as a separate problem',
          rating: 'poor',
          feedback: `Each referral is sensible on its own, but the problems are not separate. The skin, the gut, the lungs and the vessels are all parts of one disease, and no one in the system is joining them up. Fragmenting it leads to delay and a missed lung and kidney screen.`,
          next: 'cons-plan'
        },
        {
          label: 'A positive ANA with Raynaud\'s is usually benign, so advise warm gloves and review in six months',
          rating: 'unsafe',
          feedback: `A positive ANA alone often is benign. But here it is a centromere pattern at a high titre, in a woman with an ulcer, sclerodactyly and abnormal nailfolds. This is false reassurance from treating the test instead of the patient, and it delays lung screening and specialist care by months.`,
          next: 'cons-plan'
        }
      ],
      reasoning: `Diagnosing systemic sclerosis at Year 4 level is about recognising the pattern and getting the right person involved quickly. Late-onset Raynaud's with an ulcer, sclerodactyly and a centromere ANA has a very high probability of limited cutaneous SSc, and the next step is a specialist who can screen the lungs and heart and treat the ulcer. The ANA matters here because of the context, whereas the same result in a young woman with mild Raynaud's and no other features would be much less worrying. A worry list of organs, not a single diagnosis, should drive the urgency.`
    },
    {
      id: 'cons-plan',
      type: 'presentation',
      tone: 'consequence',
      label: 'In the notes',
      text: `Nobody has written "probable systemic sclerosis" in her record, and there is no urgent rheumatology referral. The story is split into separate problems, or filed as a benign finding. Mrs Asante has gone home with a plan that does not match what is happening to her hands.`,
      next: 'interlude'
    },
    {
      id: 'interlude',
      type: 'presentation',
      label: 'Nine days later',
      text: `Mrs Asante is back in your surgery. Over the weekend her hands were more swollen and sore, so on Saturday she went to a walk-in urgent treatment centre. The clinician there did not have your notes. They diagnosed "inflammatory hand swelling" and started <strong>prednisolone 30 mg daily for 14 days</strong>. She has taken it for five days.<br><br>
"The swelling's going down," she says. "I can hold a needle again. Can I carry on until a specialist sees me? That's still weeks away."`,
      next: 'steroid-q'
    },
    {
      id: 'steroid-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'She feels better on prednisolone and wants to keep taking it. What do you do?',
      options: [
        {
          label: 'Advise against continuing it, check BP, urine and U&E today, and discuss the steroid exposure with rheumatology',
          rating: 'best',
          feedback: `High-dose corticosteroids are a recognised risk factor for scleroderma renal crisis, so the aim is to stop further exposure and look for early signs. She has taken it for only five days, so it can be stopped without a taper, but confirm that with rheumatology. Checking BP and kidney function today compares her to the baseline you took. The puffy phase of skin disease often fluctuates, so the improvement is not proof that steroids are working.`,
          next: 'steroid-check'
        },
        {
          label: 'Stop the prednisolone now, explain the risk, and arrange a BP and U&E check with the practice nurse next week',
          rating: 'good',
          feedback: `The key decision, stopping the steroid, is right, and explaining why is good practice. But renal crisis can develop within days, and waiting a week for the first check leaves a gap in which an early rise would be missed. Do the BP and U&E today.`,
          next: 'crisis'
        },
        {
          label: 'Reduce it to 10 mg daily and continue until a specialist sees her so her hands stay comfortable',
          rating: 'poor',
          feedback: `Lower is better than higher, but no steroid dose is known to be safe in systemic sclerosis, and the swelling does not need a steroid. Continuing it prolongs the exposure for the sake of comfort. The decision on steroids belongs to the specialists.`,
          next: 'cons-steroid'
        },
        {
          label: 'Continue 30 mg and extend the course until a specialist sees her, since it is clearly helping the swelling',
          rating: 'unsafe',
          feedback: `This treats an apparent response in a patient with probable systemic sclerosis, where high-dose steroids are linked to renal crisis. Her hands feeling better is not a sign that the drug is safe. Extending a dose she should not have had in the first place is the highest-risk option here.`,
          next: 'cons-steroid'
        }
      ],
      reasoning: `Some drugs are safe for most patients and risky for one disease, and steroids are the classic example in systemic sclerosis. The mechanism is not fully understood, but high doses are associated with scleroderma renal crisis, and the risk rises in the months after exposure. That one fact outweighs the comfort of reduced swelling. It also shows the importance of a clear problem list: the clinician who prescribed the steroid had no way to know. Always ask what a patient has been given elsewhere, and write the diagnosis where others will see it.`
    },
    {
      id: 'steroid-check',
      type: 'presentation',
      tone: 'results',
      label: 'Same day',
      text: `BP today is 146/90 (her baseline was 132/80). The urine dip shows a trace of protein. The U&E later that day shows creatinine 84 µmol/L (baseline 71). This is a drift, not an emergency, but it is the wrong direction. You stop the prednisolone, discuss her with the rheumatology registrar, and tell her to call you the same day if she has a bad headache, vomiting or changes in her sight.`,
      next: 'crisis'
    },
    {
      id: 'cons-steroid',
      type: 'presentation',
      tone: 'consequence',
      label: 'Over the next three days',
      text: `Mrs Asante carries on with the prednisolone. The swelling eases, she feels reassured, and she goes back to long days in the shop. Nobody has checked her blood pressure since her visit to you.`,
      next: 'crisis'
    },
    {
      id: 'crisis',
      type: 'presentation',
      tone: 'danger',
      label: 'Three days later, 17:40',
      text: `Abena brings her mother in without an appointment. Mrs Asante has had a severe frontal headache since the morning, has vomited once, and says her vision is "swimmy". She has hardly passed urine today.<br><br>
In the surgery her <strong>BP is 190/110</strong> on repeat, pulse 96, temperature 37.0°C. She is drowsy but orientated, with no focal neurological signs. Her chest is clear. Her hands and fingertip ulcer look unchanged.`,
      next: 'crisis-q'
    },
    {
      id: 'crisis-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'She has a new severe headache, visual blurring and BP 190/110, with systemic sclerosis and recent steroids. What do you do?',
      options: [
        {
          label: 'Call 999 for suspected scleroderma renal crisis, hand over to the on-call medical team and mention the steroids',
          rating: 'best',
          feedback: `This is a hypertensive emergency with neurological and visual symptoms in a patient with a known renal-crisis risk. Recognising the pattern (systemic sclerosis plus steroids plus abrupt hypertension) lets you name the diagnosis in the call, which gets the right treatment sooner. A clear handover (situation, background, the steroid exposure and the baseline BP and creatinine) helps. What would change your mind: a normal BP on proper measurement.`,
          next: 'amu'
        },
        {
          label: 'Arrange immediate transfer by her daughter driving her to hospital, and ring the medical on-call to warn them',
          rating: 'good',
          feedback: `The right destination, and warning the on-call team is good. But a drowsy patient with BP 190/110 and visual change can deteriorate on the way, and an ambulance brings monitoring and a quicker entry into the system. When the risk of a seizure or stroke is real, use an ambulance.`,
          next: 'amu'
        },
        {
          label: 'Take bloods and a urine sample now, and review her in the morning with the results',
          rating: 'poor',
          feedback: `Collecting tests is right, but the plan waits for them in a patient who already has a diagnosis you can act on. This is "treating the result, not the patient" in reverse: waiting for the numbers to decide an emergency that the clinical picture has already declared.`,
          next: 'cons-crisis'
        },
        {
          label: 'Start amlodipine 5 mg, advise rest and review in a week as presumed essential hypertension',
          rating: 'unsafe',
          feedback: `Anchoring on common things. New severe hypertension with headache, vomiting and visual change in a patient with systemic sclerosis on steroids is a renal crisis until proven otherwise. A calcium-channel blocker alone does not treat the underlying renin-driven process, and a week is far too long.`,
          next: 'danger-crisis'
        },
        {
          label: 'Increase the prednisolone to 40 mg daily, because the headache may be a flare of her inflammatory disease',
          rating: 'unsafe',
          feedback: `This is the opposite of what is needed. High-dose steroids are a risk factor for renal crisis, and a flare of hand swelling would not explain severe hypertension, vomiting and visual blurring. Increasing the dose adds fuel to the problem.`,
          next: 'danger-crisis'
        }
      ],
      reasoning: `The pattern is what matters: a patient with scleroderma, recent corticosteroids and abrupt severe hypertension with headache and a drop in urine output. This is a renal crisis until proven otherwise, and the window for preventing permanent kidney damage is short. The decisive step in primary care is recognising it, naming it and sending her in by the fastest route. You do not need a creatinine to act: the BP and the context are enough.`
    },
    {
      id: 'cons-crisis',
      type: 'presentation',
      tone: 'consequence',
      label: 'That evening',
      text: `At 20:30 the lab phones: creatinine 168 µmol/L, potassium 5.4 mmol/L. By then Mrs Asante has been sick twice at home and her daughter says she is drowsier. You call 999 at last, and the delay has cost about three hours.`,
      next: 'amu'
    },
    {
      id: 'danger-crisis',
      type: 'presentation',
      tone: 'danger',
      label: 'Overnight',
      text: `Mrs Asante becomes drowsy and confused. At 02:10 Abena calls 999. The paramedics find a vomiting, confused patient with BP over 200/120. She arrives at the acute medical unit with hypertensive encephalopathy, many hours after she could have been there.`,
      next: 'amu'
    },
    {
      id: 'amu',
      type: 'presentation',
      tone: 'results',
      label: 'Acute medical unit',
      text: `You are now seeing Mrs Asante on the acute medical unit.<br><br>
<table>
<tr><th>Test</th><th>Result</th><th>Baseline</th></tr>
<tr><td>BP</td><td>196/114</td><td>132/80</td></tr>
<tr><td>Creatinine</td><td><strong>168 µmol/L</strong></td><td>71</td></tr>
<tr><td>Urea</td><td>14.8 mmol/L</td><td>-</td></tr>
<tr><td>Potassium</td><td>5.4 mmol/L</td><td>4.3</td></tr>
<tr><td>Haemoglobin / platelets</td><td>104 g/L / 92 ×10⁹/L</td><td>121 / 288</td></tr>
<tr><td>Blood film</td><td>fragmented red cells; LDH raised</td><td>-</td></tr>
<tr><td>Urine dipstick</td><td>protein ++, blood +</td><td>negative</td></tr>
</table>
Fundoscopy shows retinal haemorrhages and exudates. The renal and rheumatology on-call teams have been contacted and are on their way.`,
      next: 'manage-q'
    },
    {
      id: 'manage-q',
      type: 'decision',
      stage: 'Manage',
      prompt: 'Her creatinine has more than doubled and her potassium is 5.4. What is the right treatment?',
      options: [
        {
          label: 'Start a short-acting ACE inhibitor such as captopril, titrate to lower BP steadily, with renal and rheumatology input',
          rating: 'best',
          feedback: `An ACE inhibitor is the key treatment for scleroderma renal crisis, because the injury is driven by the renin-angiotensin system. It is started promptly even though creatinine is rising, with close monitoring of potassium and creatinine. A short-acting agent allows rapid titration, the BP is lowered steadily rather than abruptly, and other antihypertensives are added if needed. Senior renal and rheumatology input guides the rest, including dialysis if needed, and steroids are avoided.`,
          next: 'recovery'
        },
        {
          label: 'Start the ACE inhibitor at once, but leave the renal and rheumatology discussion until the morning',
          rating: 'good',
          feedback: `The right drug at the right time, and that matters most. But this is an emergency that needs senior input tonight: the dose titration, the monitoring level and early decisions about dialysis should not wait for morning. Delaying the call is a process failure rather than a drug error.`,
          next: 'recovery'
        },
        {
          label: 'Start amlodipine and recheck the U&E in the morning, holding other drugs until the cause is clearer',
          rating: 'poor',
          feedback: `Lowering the BP is the right instinct and amlodipine will help a little. But it does not treat the underlying process, and waiting for a "clearer cause" wastes time when the diagnosis is already likely. The ACE inhibitor is what changes the outcome.`,
          next: 'cons-manage'
        },
        {
          label: 'Avoid ACE inhibitors because the creatinine is rising and the potassium is raised, and give fluids instead',
          rating: 'unsafe',
          feedback: `This is a well-known trap. In most acute kidney injury an ACE inhibitor is held, but in scleroderma renal crisis it is the treatment, and the creatinine rise is not a reason to withhold it. Intravenous fluids in a severely hypertensive patient can also do harm.`,
          next: 'cons-manage'
        }
      ],
      reasoning: `Your normal reflex in acute kidney injury is to stop the ACE inhibitor, and in this one condition that reflex is wrong. Scleroderma renal crisis is driven by overactivity of the renin-angiotensin system, so blocking it is the treatment, even with a high creatinine and potassium. You monitor potassium and creatinine closely and accept that the creatinine may rise further before it falls. Early treatment improves the chance of kidney recovery, and this is why the time lost earlier matters.`
    },
    {
      id: 'cons-manage',
      type: 'presentation',
      tone: 'danger',
      label: 'The next morning',
      text: `Overnight the BP falls only a little. By morning creatinine has climbed to 236 µmol/L, potassium is 6.0 mmol/L and she is passing very little urine. The renal registrar starts captopril straight away, moves her to the high-dependency unit and discusses dialysis. The renin-driven process has run for another day untreated.`,
      next: 'recovery'
    },
    {
      id: 'recovery',
      type: 'presentation',
      label: 'Two weeks later',
      text: `With captopril, later changed to a longer-acting ACE inhibitor, and a second antihypertensive, Mrs Asante's BP has settled and her creatinine has peaked and begun to fall. In her case the kidneys recovered enough to avoid long-term dialysis, which is not guaranteed in this condition. The prednisolone has been stopped, and her notes now carry a clear warning against corticosteroids.<br><br>
Rheumatology have confirmed <strong>limited cutaneous systemic sclerosis</strong>. Her anti-RNA polymerase III antibody was negative. Spirometry showed a gas transfer that was low out of proportion to her lung volumes, so an echocardiogram and a high-resolution CT chest are being arranged.<br><br>
She is going home, anxious and tired. She has been shut out of her shop for three weeks and she asks you: "How do I look after my hands, and what should I watch out for?"`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'How do you answer her?',
      options: [
        {
          label: 'Cover warmth, stopping smoking and avoiding triggers, and name when to get urgent help: dark painful fingers, headache, vision change',
          rating: 'best',
          feedback: `Practical advice she can start tonight, combined with specific warnings for the two emergencies that matter: digital ischaemia and a repeat of the renal crisis. Keep the hands warm, including in the shop and when getting into the cold, and stop smoking, because it narrows the blood vessels further. Ask her to report a new ulcer, a dark or painful finger, a severe headache or a change in vision straight away.`,
          next: 'conclusion'
        },
        {
          label: 'Cover warmth, stopping smoking and avoiding triggers, and give her the rheumatology nurse helpline number',
          rating: 'good',
          feedback: `Practical and supportive, and a helpline is a real help. But it does not tell her which symptoms need an emergency response rather than a phone call in the morning. After what has just happened, she should know about the headache and vision changes.`,
          next: 'conclusion'
        },
        {
          label: 'List every complication of scleroderma, including the effect on survival, so that she understands the risks',
          rating: 'poor',
          feedback: `Honesty matters, but a frightening list on the day she leaves hospital is not the same as being informed. She is exhausted and has just had a life-threatening complication. Giving her everything at once buries the two or three things she needs to act on.`,
          next: 'cons-comm'
        }
      ],
      reasoning: `Good counselling here sorts information into what she does every day (keep warm, stop smoking), what to report quickly (a new ulcer, a dusky finger), and what to treat as an emergency (headache, vision change, reduced urine). A shorter, ranked message is easier to act on than a complete one. Her livelihood depends on her hands, so practical tips about the shop and gloves matter as much as the list of warnings. Honest information about the future can come over the following visits, once the shock has passed.`
    },
    {
      id: 'cons-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'In the corridor',
      text: `Mrs Asante leaves in tears. Abena later tells the ward nurse that her mother "heard the word survival and nothing else". She cannot say what she was told to look out for.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: limited cutaneous systemic sclerosis (anti-centromere positive), complicated by scleroderma renal crisis after high-dose prednisolone.</strong><br><br>
Mrs Asante was started on specialist treatment for her ulcer and Raynaud's, a proton pump inhibitor for her reflux, and lifelong ACE inhibitor therapy for her blood pressure and kidneys. She was supported to stop smoking, and screening for pulmonary arterial hypertension and interstitial lung disease was set up.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>A first attack of Raynaud's after 40, a fingertip ulcer and puffy hands made the Raynaud's secondary, so the question became "which disease and which organs?".</li>
<li>The examination looked for sclerodactyly, telangiectasia and nailfold change, and was adapted for dark skin (touch, creases and shine, not redness).</li>
<li>A targeted screen of FBC, U&amp;E, CRP, urine dip and ANA with ENA gave both a diagnosis and a kidney baseline, and spirometry with gas transfer began lung screening.</li>
<li>High-dose corticosteroids are a risk factor for renal crisis, so the steroid had to stop.</li>
<li>Severe hypertension with headache, vision change and a rising creatinine in scleroderma is an emergency, and the treatment is an ACE inhibitor even when the creatinine is high.</li>
</ol>
<strong>How you'd explain it to the patient:</strong> "Scleroderma means hardening of the skin. Yours is the 'limited' form, which mostly affects the hands and face. It can also affect the gut, lungs and kidneys, which is why we are watching them closely. Keep your hands warm, stop smoking, and never take steroid tablets unless a scleroderma specialist has agreed."<br><br>
<strong>Safety-netting:</strong> seek urgent help for a new fingertip ulcer, a cold, dark or painful finger, a severe headache, a change in vision, much less urine, new breathlessness or chest pain. Tell every clinician who treats her that she has scleroderma and should avoid high-dose steroids.`,
      keyLearning: [
        'Raynaud\'s is secondary until proven otherwise if it starts after 40, ulcerates, or comes with puffy hands, reflux or breathlessness.',
        'On darker skin, judge scleroderma by touch (pinch test), lost creases and shine, and look for telangiectasia and salt-and-pepper depigmentation, not redness.',
        'A baseline BP, urine dip and creatinine in suspected systemic sclerosis let you spot a change later.',
        'Interstitial lung disease and pulmonary arterial hypertension are leading causes of death in systemic sclerosis and cause few early symptoms, so screen for them.',
        'High-dose corticosteroids are a risk factor for scleroderma renal crisis. Avoid them unless a specialist advises.',
        'New severe hypertension with headache or visual change in scleroderma is a renal crisis until proven otherwise: call 999.',
        'In scleroderma renal crisis, start an ACE inhibitor even though the creatinine is rising. Do not treat it as essential hypertension.'
      ],
      relatedTests: ['ANA with ENA', 'Urine dipstick', 'U&E and creatinine', 'Spirometry with gas transfer', 'Echocardiogram', 'HRCT chest', 'Nailfold capillaroscopy', 'Home BP monitoring'],
      goingFurther: `<ul>
<li><strong>Antibodies and organ risk.</strong> Anti-centromere is associated with limited disease and, over time, pulmonary arterial hypertension and digital ischaemia. Anti-Scl-70 (topoisomerase I) is associated with diffuse disease and interstitial lung disease. Anti-RNA polymerase III is associated with diffuse disease with rapidly progressive skin change and with scleroderma renal crisis, and in some patients with an associated cancer.</li>
<li><strong>Limited versus diffuse.</strong> The distinction is the extent of skin thickening: limited disease affects skin distal to the elbows and knees, and the face. Diffuse disease reaches the upper arms, thighs or trunk. Renal crisis is most often seen in early diffuse disease. It is uncommon with anti-centromere antibodies, which is why steroids are the likely precipitant here.</li>
<li><strong>Screening.</strong> Lung function with gas transfer, a high-resolution CT chest to look for interstitial lung disease, and regular echocardiography (with other markers, such as NT-proBNP) to look for pulmonary hypertension are standard. Right heart catheterisation confirms PAH.</li>
<li><strong>Raynaud's and digital ulcers.</strong> Calcium-channel blockers such as nifedipine are first-line. PDE5 inhibitors and intravenous iloprost are used for severe disease or ulcers, and bosentan can reduce new digital ulcers.</li>
<li><strong>ACE inhibitors.</strong> They treat the crisis, but there is no evidence that giving them in advance prevents it.</li>
<li><strong>Home BP.</strong> Many units teach patients with early systemic sclerosis to check their own BP and call urgently if it rises.</li>
</ul>`
    }
  ]
};
