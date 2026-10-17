/* anca-case-1: The Stubborn Sinusitis */

export default {
  id: 'anca-case-1',
  title: 'The Stubborn Sinusitis',
  summary: '49-year-old self-employed tiler with months of blocked nose, crusting and nosebleeds, now with aching joints and tiredness',
  setting: 'GP surgery',
  difficulty: 'beginner',
  curriculum: ['RE-VASC', 'LO1', 'LO4', 'IX-BLOODS', 'IX-SEROLOGY', 'SK-SBAR', 'LO7'],
  objectives: [
    'Recognise the features that turn "recurrent sinusitis" into a possible systemic vasculitis',
    'Use a urine dipstick, kidney function and a chest X-ray to look for organ involvement',
    'Recognise a pulmonary-renal picture as a same-day emergency and hand it over clearly using SBAR',
    'Explain why a strongly suspected vasculitis is not left waiting for the ANCA result, and why ANCA needs clinical context',
    'Talk honestly to a worried, self-employed patient without false reassurance or alarm'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'GP surgery, Tuesday morning',
      text: `<strong>Mr Kwame Mensah, 49, self-employed tiler.</strong> He has booked a ten-minute slot for the third time in four months. You are the final-year student sitting in with the GP registrar, who has been called out of the room for a few minutes and says, "Make a start, I'll be back."<br><br>
Mr Mensah is tired and looks a bit gaunt. He says: <em>"It's my sinuses again, doc. Nose blocked on one side, it crusts up and bleeds when I blow it, and my left ear feels full. Three lots of antibiotics since the spring and nothing has shifted it. My joints ache too now, my hands and knees. I just want something stronger so I can get back to work."</em><br><br>
His notes show amoxicillin, doxycycline and co-amoxiclav, a steroid nasal spray, and an entry reading "chronic rhinosinusitis, routine ENT referral considered". He lives with his wife Abena (a part-time care worker) and their two teenagers. He has no sick pay: when he does not work, nothing comes in.`,
      next: 'd-first'
    },
    {
      id: 'd-first',
      type: 'decision',
      stage: 'History',
      prompt: 'He is asking for another antibiotic. What do you do first?',
      options: [
        {
          label: `Hold off on the antibiotic and take a fuller history looking for systemic features`,
          rating: 'best',
          feedback: `Three failed antibiotic courses is data: when a treatment has failed repeatedly, question the diagnosis rather than the drug. A symptom review across the body is the cheapest way to test whether this is really a local nasal problem. If you find systemic features, the whole picture changes.`,
          next: 'history'
        },
        {
          label: `Examine his nose, ears and chest first and then decide about treatment`,
          rating: 'good',
          feedback: `Examination is worth doing and would show crusting and an ear effusion. But a nasal examination alone can anchor you on "ENT problem". You still need the whole-body questions, which are what turn a persistent local symptom into a red flag.`,
          next: 'history'
        },
        {
          label: `Prescribe a longer course of a different antibiotic as he has asked`,
          rating: 'poor',
          feedback: `This is anchoring on the label "sinusitis" and giving in to the request. Three courses have already failed, so a fourth is unlikely to help and carries harms of its own. The reasoning error is treating the label instead of asking why the label is not working.`,
          next: 'cons-abx'
        },
        {
          label: `Make a routine ENT referral and ask him to come back if things get worse`,
          rating: 'poor',
          feedback: `Referring is reasonable for refractory sinus disease, but a routine referral made without a systemic history assumes the problem is confined to the nose. If it is not, he waits on a long list with an undiagnosed multisystem illness.`,
          next: 'cons-ent'
        }
      ],
      reasoning: `Most blocked noses are rhinitis or viral or bacterial sinusitis, and the pre-test probability of anything else is low. But "refractory to treatment" is the clue that should shift you from the common to the dangerous. Persistent crusting, bleeding and ear involvement are unusual for simple sinusitis. The key move is to ask about other organs before you commit to a local explanation, because a systemic cause changes who needs to see him and how fast.`
    },
    {
      id: 'cons-abx',
      type: 'presentation',
      label: 'In the waiting room',
      tone: 'consequence',
      text: `You print the prescription and he thanks you. As he reaches the door, Abena, who has been waiting outside, steps in. <em>"Has he told you about the blood when he coughs? He didn't want to make a fuss."</em><br><br>
Mr Mensah looks at the floor. You close the door and sit him back down. The prescription stays on the printer, and you take the history you should have taken at the start.`,
      next: 'history'
    },
    {
      id: 'cons-ent',
      type: 'presentation',
      label: 'Before he leaves',
      tone: 'consequence',
      text: `You dictate a routine ENT letter. The registrar, returning, mentions the local wait is around fourteen weeks. As Mr Mensah stands to leave he coughs into a tissue, and you both see blood-flecked sputum.<br><br>
<em>"That's been happening a couple of weeks. I thought it was from the nose."</em> You sit him back down.`,
      next: 'history'
    },
    {
      id: 'history',
      type: 'presentation',
      label: 'History',
      text: `You go through a systems review, with Abena sitting in at his request:<br>
<ul>
<li>Nose blocked and crusting for about seven months, blood-stained discharge, no hay fever or asthma. Left ear muffled for two months.</li>
<li><strong>Coughing flecks of blood</strong> on and off for two weeks.</li>
<li><strong>Weight loss</strong> of about 5 kg; "my work trousers are loose". Drenched at night twice.</li>
<li>Aching knees, wrists and hands for six weeks, stiff first thing for about 20 minutes. He takes <strong>ibuprofen 400 mg three times a day</strong> from the chemist.</li>
<li>Red, sore left eye for a few days last month; "I put drops in".</li>
<li>Tingling over the outer right foot for a week.</li>
<li>Urine has seemed darker lately; he assumed he was not drinking enough.</li>
<li>No rash he has noticed. Ex-smoker (stopped ten years ago). <strong>No cocaine or recreational drugs.</strong> No new prescribed medicines. No fevers or rigors, no travel, no TB contacts.</li>
</ul>
He lost a day's work to the cough last week and fears losing a bathroom contract worth a month's income.`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: `Months of nasal crusting and bleeding that has not responded to antibiotics, plus weight loss, joint aches, a red eye, coughing blood and darker urine. What are your top three differentials, and which one can you not afford to miss?`,
      reveal: `<strong>Cannot miss:</strong> an <strong>ANCA-associated vasculitis, most likely granulomatosis with polyangiitis (GPA)</strong>. Upper airway disease that crusts and bleeds, with an ear effusion, a red eye, lung symptoms, possible nerve involvement and possibly the kidneys, is a multi-organ pattern. It is dangerous because kidney and lung damage can be rapid and irreversible if it is missed.<br><br>
<strong>Other things to keep in mind:</strong>
<ul>
<li><strong>Chronic rhinosinusitis</strong> (common), but it does not cause weight loss, haemoptysis or joint pain.</li>
<li><strong>Infection:</strong> TB, fungal disease, or infective endocarditis (which can cause positive ANCA, joint pain and glomerulonephritis).</li>
<li><strong>Cocaine-induced midline destruction</strong> (asked about, no history), sarcoidosis, lymphoma.</li>
<li><strong>Eosinophilic GPA (EGPA)</strong> usually comes with asthma and nasal polyps, which he does not have.</li>
</ul>
The feature that separates the dangerous from the dull is <strong>involvement of more than one organ</strong>.`,
      next: 'exam'
    },
    {
      id: 'exam',
      type: 'presentation',
      label: 'Examination',
      text: `With his consent, you check his observations and then the registrar, back in the room, examines him with you.<br><br>
<table>
<tr><th>Observation</th><th>Result</th></tr>
<tr><td>Temperature</td><td>37.6 °C</td></tr>
<tr><td>Heart rate</td><td>92 /min, regular</td></tr>
<tr><td>Blood pressure</td><td>148/92 mmHg</td></tr>
<tr><td>Respiratory rate / SpO<sub>2</sub></td><td>18 /min / 95% on air</td></tr>
</table><br>
<strong>Nose:</strong> crusted, friable mucosa that bleeds on touch; septum intact. <strong>Left ear:</strong> dull, retracted drum with a middle-ear effusion. <strong>Left eye:</strong> mild episcleral injection, vision normal. <strong>Chest:</strong> clear. <strong>Skin:</strong> no rash; you palpate his shins as well as looking, since purpura can be hard to see on dark skin, and feel nothing raised. <strong>Joints:</strong> tender across the MCPs and knees with no obvious effusion. <strong>Right foot:</strong> reduced light touch over the lateral border.`,
      next: 'd-dip'
    },
    {
      id: 'd-dip',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'You suspect a systemic cause. Which single test in this room gives you the most useful information in the next five minutes?',
      options: [
        {
          label: `Dip his urine now and act on the result today`,
          rating: 'best',
          feedback: `A urine dipstick takes two minutes and screens for glomerulonephritis, the organ involvement that most urgently changes management. Blood and protein on dip, in someone with this picture, is a red flag. A normal dip would lower, but not exclude, renal involvement, and you would still check bloods.`,
          next: 'dip-result'
        },
        {
          label: `Send bloods today (U&amp;E, FBC, CRP) and review him when they come back`,
          rating: 'good',
          feedback: `These bloods are all needed and will appear in your plan. But they come back hours later, and the dipstick is a faster, free test that tells you whether the kidneys are already involved while he is still in front of you.`,
          next: 'dip-result'
        },
        {
          label: `Request a sinus CT scan and wait for the ENT opinion before further tests`,
          rating: 'poor',
          feedback: `A CT might show sinus disease, but it keeps the question "local or systemic?" focused on the nose and delays the tests that look at kidneys and lungs. The reasoning error is search satisficing: looking where the symptoms are rather than where the danger is.`,
          next: 'cons-dip'
        },
        {
          label: `Send an "autoimmune screen" (ANA, ENA, rheumatoid factor) and see what comes back`,
          rating: 'poor',
          feedback: `An indiscriminate panel invites false positives (a low-titre ANA is common) and does not answer the questions that matter today: are his kidneys or lungs involved? Test with a hypothesis, not a hope.`,
          next: 'cons-dip'
        }
      ],
      reasoning: `If I think this might be a vasculitis, the question that changes my actions today is "are the kidneys involved?" The dip is cheap, quick and sits at the bedside. It does not tell me the cause, but in someone with refractory sinus disease and darker urine, blood and protein would make me treat this as an emergency rather than an outpatient puzzle. A normal dip would lower my concern but would not stop me checking kidney function and a chest X-ray.`
    },
    {
      id: 'cons-dip',
      type: 'presentation',
      label: 'A few minutes later',
      tone: 'consequence',
      text: `While you are filling in the request form, the registrar glances at the history you took and asks, <em>"Have you looked at his urine?"</em> You hadn't. You hand Mr Mensah a pot, and the practice nurse dips it while the form is still half done.`,
      next: 'dip-result'
    },
    {
      id: 'dip-result',
      type: 'presentation',
      label: 'Urine dipstick',
      tone: 'results',
      text: `<strong>Blood +++, protein ++</strong>, no nitrites, no leucocytes.<br><br>
There is blood and protein in the urine of a man with nasal disease, haemoptysis, weight loss and a red eye. The next question is how much his kidneys and lungs are involved.`,
      next: 'd-tests'
    },
    {
      id: 'd-tests',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'What do you arrange now?',
      options: [
        {
          label: `Same-day U&amp;E, FBC, CRP, urine protein:creatinine ratio and chest X-ray, with an ANCA sample sent`,
          rating: 'best',
          feedback: `This set tests for organ involvement (kidney function, chest film), inflammation and anaemia, and sends the ANCA now so the result is ready for the specialists. It is targeted at a hypothesis rather than a blanket screen. What would change your mind: a normal creatinine, normal chest film and bland urine would lower your concern, though they would not remove the need for specialist review.`,
          next: 'results'
        },
        {
          label: `Same-day U&amp;E, FBC, CRP and a chest X-ray, leaving the ANCA until the specialists ask for it`,
          rating: 'good',
          feedback: `This captures the organ involvement correctly. Leaving out ANCA is defensible but loses time: the test takes days to report, so sending it with the first bloods means the specialists will have the answer sooner.`,
          next: 'results'
        },
        {
          label: `A broad autoimmune panel (ANA, ENA, RF, anti-CCP, complement) and a repeat dip next week`,
          rating: 'poor',
          feedback: `This is an indiscriminate panel that misses kidney function and a chest X-ray, and a repeat dip a week from now is too slow. The tests selected are for diseases that do not explain the ENT, lung and kidney pattern.`,
          next: 'cons-tests'
        },
        {
          label: `Routine bloods next week and a repeat dip then, as this is probably not urgent`,
          rating: 'poor',
          feedback: `This relies on the assumption that nothing is happening to the kidneys or lungs, despite a positive dip. Organ damage in vasculitis can progress over days; waiting a week may mean losing kidney function that could have been saved.`,
          next: 'cons-tests'
        }
      ],
      reasoning: `For a suspected vasculitis the questions are: is there kidney involvement, is there lung involvement, and how inflamed is he? Creatinine, FBC, CRP, a quantified urine protein and a chest film answer all of those today. I send the ANCA at the same time because the assay takes time, but I do not plan to wait for it. A normal ANCA would not rule out vasculitis and, with a picture this convincing, I would not delay referral or treatment for the result.`
    },
    {
      id: 'cons-tests',
      type: 'presentation',
      label: 'A word from your supervisor',
      tone: 'consequence',
      text: `Reading your plan, the registrar says, <em>"With blood in his urine and coughing blood, we need his kidney function and a chest film today, not next week."</em> You redo the request as urgent. Mr Mensah goes to the phlebotomist, then to the nearby hospital for a chest X-ray, and waits with Abena for the results.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      label: 'Results (late afternoon)',
      tone: 'results',
      text: `<table>
<tr><th>Test</th><th>Today</th><th>Three months ago</th></tr>
<tr><td>Creatinine</td><td><strong>176 µmol/L</strong></td><td>81 µmol/L</td></tr>
<tr><td>eGFR</td><td>40 mL/min/1.73 m²</td><td>&gt;90</td></tr>
<tr><td>Urea / K<sup>+</sup></td><td>11.8 mmol/L / 5.0 mmol/L</td><td>normal</td></tr>
<tr><td>Haemoglobin</td><td><strong>108 g/L</strong></td><td>128 g/L</td></tr>
<tr><td>WCC / platelets</td><td>12.6 / 468 ×10⁹/L</td><td>7.9 / 310</td></tr>
<tr><td>CRP</td><td>84 mg/L</td><td>6 mg/L</td></tr>
<tr><td>Urine PCR</td><td>112 mg/mmol (normal &lt;15)</td><td>not done</td></tr>
</table><br>
<strong>Chest X-ray:</strong> multiple bilateral rounded nodules, the largest about 3 cm in the right mid-zone with early cavitation.<br><br>
The ANCA result will take a few days. (The earlier bloods were taken when his tiredness first started.)`,
      next: 'd-interpret'
    },
    {
      id: 'd-interpret',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'How do you interpret this picture, and how urgent is it?',
      options: [
        {
          label: `Possible renal-pulmonary syndrome from vasculitis; he needs same-day hospital assessment`,
          rating: 'best',
          feedback: `A fall in kidney function over three months, blood and protein in the urine, a falling haemoglobin, lung nodules and a systemic upper airway story together mean organ-threatening disease. Kidney and lung vasculitis can deteriorate over days, so this needs same-day senior assessment. What would change your mind: an alternative cause that explains all of it, such as endocarditis, which the hospital will also look for.`,
          next: 'd-sbar'
        },
        {
          label: `Probable vasculitis; send him to A&amp;E with a referral letter and ask them to take over`,
          rating: 'good',
          feedback: `The right recognition and the right destination. A letter alone is a weaker route than a phone call, because the receiving team has no warning and your level of concern may not be conveyed. A direct conversation with a senior ensures the right team is ready.`,
          next: 'd-sbar'
        },
        {
          label: `Probable vasculitis; request urgent outpatient rheumatology and nephrology review this week`,
          rating: 'poor',
          feedback: `You have recognised the diagnosis but under-called the urgency. A clinic slot next week cannot respond to a patient whose creatinine has doubled and who is coughing blood now. Kidney function lost during a delay is often not recovered.`,
          next: 'cons-slow'
        },
        {
          label: `Probably a spreading sinus infection with antibiotic kidney injury; stop antibiotics and recheck in a week`,
          rating: 'unsafe',
          feedback: `This is premature closure: it explains the nose and the kidney with one story but ignores the haemoptysis, nodules, falling haemoglobin and active urine. Antibiotics do not explain a doubled creatinine with blood and protein in the urine, and waiting a week risks irreversible kidney and lung damage.`,
          next: 'cons-danger'
        }
      ],
      reasoning: `Here the pre-test probability moved from "chronic sinusitis" to "systemic vasculitis" as the organs lit up one by one. Each finding alone has a benign explanation; together they do not. You do not need a diagnosis to see an emergency: a falling eGFR, an active urine and new lung nodules mean organ-threatening inflammation until proven otherwise. The treatment decisions belong to the specialists, but the recognition and the phone call are yours.`
    },
    {
      id: 'cons-slow',
      type: 'presentation',
      label: 'Before he leaves',
      tone: 'consequence',
      text: `Before Mr Mensah goes, you show the registrar the results. She reads them twice and says, <em>"This can't wait a week."</em> The plan changes: he stays in the surgery while the phone call is made, and Abena rings home to tell the teenagers he will be late.<br><br>
You correct course within the hour, but you can see how easily an "urgent clinic letter" would have left him at home for a week.`,
      next: 'd-sbar'
    },
    {
      id: 'cons-danger',
      type: 'presentation',
      label: 'At 17:40',
      tone: 'danger',
      text: `Mr Mensah has left. The registrar reads your note, sees the creatinine and the chest film, and rings him urgently: <em>"Come back in now."</em> He had already driven to a site to measure up for Monday. He returns coughing, a little more breathless than this morning, and Abena is frightened.<br><br>
Hours were lost that mattered, and the near miss has left the family anxious. The call to the hospital is now yours to make.`,
      next: 'd-sbar'
    },
    {
      id: 'd-sbar',
      type: 'decision',
      stage: 'Handover',
      prompt: 'You phone the medical registrar at the hospital. Which SBAR do you give?',
      options: [
        {
          label: `Mr Mensah, 49, possible renal-pulmonary syndrome. Haemoptysis; creatinine 176 (was 81), Hb falling, dip blood and protein, CXR nodules. I suspect ANCA vasculitis; can he be seen today?`,
          rating: 'best',
          feedback: `This gives who, the concern, the key numbers with the trend, your assessment and a specific request in a few lines. The listener knows how worried you are and what you want. What would change your plan: a clear alternative from the registrar, or advice to go to a different team, such as direct renal admission.`,
          next: 'hospital'
        },
        {
          label: `Mr Mensah, 49, with sinusitis, haemoptysis, worse kidney function and a chest X-ray with nodules. I think this might be vasculitis. Could you advise what you want me to do next?`,
          rating: 'good',
          feedback: `Content and assessment are right, but the request is open-ended and the numbers are absent. You have asked for advice rather than for him to be seen today, and the lack of a creatinine trend makes it hard for the registrar to judge urgency.`,
          next: 'hospital'
        },
        {
          label: `Mr Mensah, 49, with long-standing sinusitis, a cough and some abnormal bloods and an abnormal chest film. I am not sure what is going on; could someone have a look sometime?`,
          rating: 'poor',
          feedback: `This is vague. The listener hears a stable outpatient problem. SBAR works when the assessment and request are explicit; "some abnormal bloods" gives no way to judge risk.`,
          next: 'cons-sbar'
        },
        {
          label: `Mr Mensah, 49, long-standing sinusitis with some kidney changes. He looks well, is still working and is happy to wait; could renal clinic see him in due course?`,
          rating: 'unsafe',
          feedback: `This is false reassurance from how well he looks. Vasculitis can be devastating in a patient who walks into the room, and the handover has hidden the haemoptysis, the creatinine trend and the nodules. A receiving doctor hearing this would reasonably suggest a clinic letter.`,
          next: 'cons-sbar'
        }
      ],
      reasoning: `A good handover makes it easy for the other person to say yes. Lead with the concern in a few words ("possible pulmonary-renal syndrome"), give the two or three numbers that prove it (creatinine trend, haemoglobin, urine, chest film), say what you think it is, and ask for something specific. A senior will forgive a wrong diagnosis in your assessment but not a missing creatinine or a vague request when the patient is unwell.`
    },
    {
      id: 'cons-sbar',
      type: 'presentation',
      label: 'On the phone',
      tone: 'consequence',
      text: `The registrar asks short, pointed questions: <em>"What was the creatinine before? Is he coughing blood? What does the chest film show?"</em> Without the numbers up front you stumble, and he suggests a clinic letter. You then read out the creatinine trend, the haemoglobin and the chest film, and his tone changes: <em>"Send him in today. Don't let him drive himself."</em><br><br>
Twenty minutes have been lost and the registrar's first impression was of a low-risk patient.`,
      next: 'hospital'
    },
    {
      id: 'hospital',
      type: 'presentation',
      label: 'Acute medical unit, that evening and the next morning',
      text: `Abena drives him in. The medical registrar and renal team see him within the hour. Urine microscopy shows dysmorphic red cells and red cell casts. Blood cultures and an infection screen are sent (including for endocarditis and TB), and his ibuprofen is stopped. After discussion with renal and respiratory colleagues, treatment is started on clinical grounds that evening, <strong>without waiting for the ANCA result</strong>, and a kidney biopsy is arranged.<br><br>
The next morning the ANCA returns:<br>
<ul>
<li>Indirect immunofluorescence: <strong>cytoplasmic (cANCA)</strong> pattern</li>
<li><strong>Anti-PR3 strongly positive</strong>; anti-MPO negative</li>
</ul>
On the ward round the registrar turns to you and asks, <em>"What does this result mean, and would you have waited for it?"</em>`,
      next: 'd-anca'
    },
    {
      id: 'd-anca',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'Which statement is the safest lesson about ANCA?',
      options: [
        {
          label: `Treat strongly suspected vasculitis without waiting; a negative ANCA would not exclude it, and a positive one needs clinical context`,
          rating: 'best',
          feedback: `ANCA is a supporting test whose value depends on the clinical picture. Some people with vasculitis are ANCA-negative, and positive results also occur with infection (such as endocarditis), some drugs and other conditions, so it cannot be read alone. It should never hold up an urgent referral or the start of specialist treatment.`,
          next: 'ward-scene'
        },
        {
          label: `A strongly positive PR3 supports GPA, and the diagnosis should be confirmed by biopsy where safely possible`,
          rating: 'good',
          feedback: `True, and biopsy helps with diagnosis and prognosis. But it is only part of the lesson: it misses the key point that referral and treatment should never be held back for the ANCA, and that a negative result would not have ended the work-up.`,
          next: 'ward-scene'
        },
        {
          label: `A positive ANCA alone makes the diagnosis, so no other tests or checks for drugs and infection are needed`,
          rating: 'poor',
          feedback: `This treats the test result rather than the patient. A positive ANCA in the wrong context (endocarditis, drug-induced vasculitis, levamisole-contaminated cocaine) can mislead you into giving immunosuppression to someone who is infected.`,
          next: 'cons-anca'
        },
        {
          label: `A negative ANCA would have excluded vasculitis, so the work-up and treatment could have been stopped`,
          rating: 'unsafe',
          feedback: `This is false reassurance from a negative test. ANCA can be negative in vasculitis, especially in localised or early disease, and a patient with this clinical picture should still be investigated further, usually with tissue, and treated.`,
          next: 'cons-anca'
        }
      ],
      reasoning: `I think of ANCA as a clue, not a verdict. Before I order it I already have a good idea what it should show; afterwards I ask whether the result fits. If the picture strongly favours a vasculitis and the ANCA is negative, I still treat and I still get tissue. If the ANCA is positive but the picture is odd (a murmur, fever, a drug history), I think about endocarditis or drug-induced disease. The clinical context always comes first.`
    },
    {
      id: 'cons-anca',
      type: 'presentation',
      label: 'On the ward round',
      tone: 'consequence',
      text: `The registrar listens, then says gently: <em>"ANCA is a test, not a diagnosis. We started treatment on the clinical picture, we have a biopsy arranged, and we have screened for infection. If this had come back negative, we would have carried on exactly the same way."</em> You add that to your list of things to remember.`,
      next: 'ward-scene'
    },
    {
      id: 'ward-scene',
      type: 'decision',
      stage: 'Communicate',
      prompt: `On day two Mr Mensah is sitting on the edge of the bed with Abena. He says: <em>"They keep using long words. What have I actually got? Am I going to lose my kidneys? And how long until I'm back at work? We've got the mortgage and I've got jobs booked."</em> The registrar asks you to help explain. What do you say?`,
      options: [
        {
          label: `Say his immune system is inflaming small blood vessels in his nose, lungs and kidneys; serious but treatable; ask what worries him most; offer practical support`,
          rating: 'best',
          feedback: `Plain words, honesty about seriousness and hope about treatment, then you ask about his concerns and link him with practical help (fit note, benefits advice, specialist nurse, social work). Naming uncertainty ("we don't yet know how well the kidneys will recover") is respectful, and checking understanding at the end ensures they have taken it in.`,
          next: 'conclusion'
        },
        {
          label: `Explain the diagnosis accurately using the proper terms (GPA, PR3-ANCA, glomerulonephritis) and go through the treatment plan in detail`,
          rating: 'good',
          feedback: `Accurate and honest, but the jargon is what he has just told you he cannot follow. Under stress, people absorb little, so give two or three key messages in plain language and invite questions before adding detail.`,
          next: 'conclusion'
        },
        {
          label: `Reassure him that it is very treatable and that most people are back at work within a week or two`,
          rating: 'poor',
          feedback: `This is falsely reassuring and sets him up for a crash. He will be in hospital for some time and treatment lasts months. A promise about work that you cannot keep damages trust when it is broken.`,
          next: 'cons-comm'
        },
        {
          label: `Tell him it is a life-threatening autoimmune disease needing powerful drugs, and that he may need dialysis`,
          rating: 'poor',
          feedback: `Technically true, but delivered without balance. Giving the worst case first, without context or the treatable side of the story, leaves a frightened man who cannot hear what comes next. Be honest about seriousness, then explain what is being done.`,
          next: 'cons-comm'
        }
      ],
      reasoning: `A worried self-employed patient has two questions under the one he asks: "is this going to kill me?" and "how do we pay the bills?". Answer both. Say the condition is serious but treatable, explain the plan in words he can repeat to his family, be honest about what we do not know yet, and ask what matters to him so that the team can help with work and money. Check he can say it back, and tell him who to ask next.`
    },
    {
      id: 'cons-comm',
      type: 'presentation',
      label: 'Later that evening',
      tone: 'consequence',
      text: `Abena catches you at the ward doorway. <em>"He's lying awake. First it's nothing and then it's a death sentence. Which is it? Can someone tell us properly?"</em> The registrar sits down with them both and starts again, slowly and in plain language. You note how much longer it takes to repair an impression than to get it right the first time.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: granulomatosis with polyangiitis (GPA), PR3-ANCA positive, with upper airway, lung and kidney involvement.</strong><br><br>
Mr Mensah's kidney biopsy showed a pauci-immune crescentic glomerulonephritis. He was treated by the renal and rheumatology teams, kept in hospital for some days, and discharged with close follow-up. He returned to lighter work first and the team arranged a letter for his clients and benefits advice.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Three failed antibiotic courses should make you question the diagnosis, not extend the course.</li>
<li>A systems review (weight loss, haemoptysis, joint pain, red eye, numbness, dark urine) turned "sinusitis" into a possible multi-organ disease.</li>
<li>The urine dipstick is the fastest test for kidney involvement; blood and protein was the red flag.</li>
<li>A rising creatinine, anaemia and lung nodules made a renal-pulmonary syndrome: a same-day emergency, not an outpatient referral.</li>
<li>A clear SBAR with the numbers and a specific request gets a senior to act at once.</li>
<li>Treatment was not delayed for ANCA: the test supports the diagnosis but does not decide it.</li>
</ol>
<strong>How you'd explain it to the patient:</strong> "Your immune system, which normally fights infection, has been attacking the small blood vessels in your nose, chest and kidneys. It is serious, and we have caught it in time to treat it. The drugs calm the immune system and we will watch your kidneys closely. We cannot yet say how much kidney function will come back. You will be in for a few days, and our team can help with your fit note and with what to do about work."<br><br>
<strong>Safety-netting:</strong> after discharge, he should seek urgent help for coughing up blood, breathlessness, passing much less urine or very dark or bloody urine, a new red or painful eye, new weakness or numbness, fever (his treatment lowers resistance to infection), or any new symptom he is unsure about. He should carry the treatment card he was given.`,
      keyLearning: [
        'Recurrent "sinusitis" that fails treatment, especially with crusting, bleeding, an ear effusion or systemic symptoms, needs a systemic history and a urine dip',
        'A urine dipstick takes two minutes and may be the most valuable test you do; blood and protein suggest glomerulonephritis',
        'A rising creatinine with an active urine and lung changes is a renal-pulmonary syndrome and needs same-day hospital assessment',
        'A good SBAR gives the numbers and trend, your assessment, and a specific request',
        'Do not wait for ANCA when vasculitis is strongly suspected: a negative result does not exclude it and a positive one needs clinical context',
        'Be honest with the patient about seriousness, plain about the plan, and ask what matters most to them'
      ],
      relatedTests: ['Urine dipstick and microscopy', 'U&E and eGFR', 'FBC and CRP', 'Chest X-ray', 'ANCA (PR3 and MPO)', 'Kidney biopsy'],
      goingFurther: `<strong>PR3 versus MPO.</strong> PR3-ANCA (usually cANCA on immunofluorescence) is classically associated with GPA; MPO-ANCA (pANCA) with microscopic polyangiitis and with EGPA. Antigen-specific immunoassays are now preferred for diagnosis, with immunofluorescence as a supplement. PR3 positivity is associated with a higher tendency to relapse than MPO.<br><br>
<strong>Induction treatment (overview).</strong> Remission induction for organ-threatening disease is high-dose glucocorticoids (often with intravenous methylprednisolone first, then a tapering oral course) together with rituximab or cyclophosphamide, chosen by the specialist team according to disease severity, fertility, previous treatment and local policy. Maintenance usually uses rituximab or azathioprine. Prophylaxis against <em>Pneumocystis jirovecii</em>, bone protection and infection vigilance are part of care.<br><br>
<strong>Biopsy.</strong> Tissue is valuable: a kidney biopsy typically shows pauci-immune necrotising crescentic glomerulonephritis and gives information on chronicity and prognosis. Upper airway biopsies may be non-diagnostic because granulomas are patchy. Biopsy should not delay treatment when the picture is clear.<br><br>
<strong>Relapse and long-term follow-up.</strong> Relapse is common, particularly with PR3-ANCA, and patients need long-term specialist follow-up, monitoring for drug toxicity, and teaching on early warning symptoms.`
    }
  ]
};
