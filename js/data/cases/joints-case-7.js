/* joints-case-7: The Morning Floor */

export default {
  id: 'joints-case-7',
  title: 'The Morning Floor',
  summary: '83-year-old woman found on her bedroom floor by her carer, with left groin pain',
  setting: 'Emergency department',
  difficulty: 'intermediate',
  curriculum: ['CD-FALL-HIP', 'PR-FALL', 'OR-FRACTURE', 'RH-OP', 'IX-XRAY', 'IX-IMAGING', 'TX-BONE', 'TX-MEDS', 'LO8'],
  objectives: [
    'Assess why an older person fell, and look for the consequences of a long lie',
    'Explain why being able to walk does not exclude a hip fracture, and why a negative X-ray does not end the work-up',
    'Prescribe analgesia safely in an older adult with reduced kidney function',
    'Recognise and respond to delirium after a hip fracture, with non-drug measures first',
    'Treat a fragility fracture as a bone health problem, decide where the DXA fits, and plan falls prevention'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Emergency department, 10:20',
      text: `<strong>Mrs Dolores Campbell, 83, retired nursing auxiliary</strong><br><br>
Her morning carer, Sasha, found her on the bedroom floor next to the bed at 08:40, awake, cold and wet with urine. Her daughter Michelle last spoke to her on the phone at 19:00 yesterday, so she may have been there for up to 13 hours. She was brought in by ambulance and Michelle is on her way from work, very worried.<br><br>
<strong>Background:</strong>
<ul>
<li>Lives alone in a ground-floor flat. Carer visits once a day for personal care and breakfast. Walks indoors with a frame. A pharmacy-filled dosette box holds her tablets.</li>
<li>Mild cognitive impairment diagnosed at the memory clinic a year ago. Usually sharp, funny and independent. Widowed, goes to church on Sundays, and wants to stay in her own home.</li>
<li>Hypertension, osteoporosis (found on a DXA scan 2 years ago), a wrist fracture 5 years ago and acid reflux.</li>
<li>Medicines: ramipril, amlodipine (dose raised 2 weeks ago), bendroflumethiazide, zopiclone (started 4 weeks ago for poor sleep), omeprazole, paracetamol when needed. She is not on a blood thinner.</li>
</ul>
<strong>Now:</strong> pain in the left groin and hip, which she rates as 8/10. She recalls getting up in the night for the toilet and &ldquo;my legs going&rdquo;, but not hitting the floor. In the ambulance and at triage she walked three painful steps with two staff supporting her.<br><br>
Temperature 35.2&deg;C, heart rate 88, blood pressure 108/62, respiratory rate 18, oxygen saturation 96% on air, capillary glucose 7.2 mmol/L. She is alert and a little slow, and has a bruise on the left side of her forehead.`,
      next: 'prioritise-q'
    },
    {
      id: 'prioritise-q',
      type: 'decision',
      stage: 'Prioritise',
      prompt: 'What are your priorities in the first 20 minutes?',
      options: [
        {
          label: 'Give analgesia, warm her, send bloods including CK and U&E, check an ECG, inspect her skin and arrange a hip X-ray',
          rating: 'best',
          feedback: `Pain, the effects of the long lie and the cause of the fall all matter, and they run in parallel. A long lie can cause hypothermia, dehydration, kidney injury, muscle breakdown (rhabdomyolysis, shown by a high CK) and pressure damage, and these cause harm while you focus on the hip. Treating pain early is also kind and reduces the risk of delirium. What would change your mind is if she were unstable, when you would start with ABCDE resuscitation and senior help.`,
          next: 'ix-results'
        },
        {
          label: 'Give analgesia and send her for a hip X-ray straight away, and leave the other checks until the film is back',
          rating: 'good',
          feedback: `Analgesia and an X-ray are both right, and an early X-ray is a priority. But waiting for the film before sending bloods or checking her skin delays recognition of AKI, hypothermia and pressure damage, which are time-critical after a long lie. Order them together.`,
          next: 'c-prioritise'
        },
        {
          label: 'Wait for her daughter to arrive and give the history before examining her or giving anything',
          rating: 'poor',
          feedback: `Collateral history is important, but there is no reason to leave a cold, frightened 83-year-old in pain for an hour while it arrives. Treating pain and doing the basic checks do not need the full story. Start now and ask Michelle when she arrives.`,
          next: 'c-prioritise'
        },
        {
          label: 'Treat it as a simple fall in a confused older woman, and plan an early return home with her carers',
          rating: 'poor',
          feedback: `This is anchoring on age and memory problems. It ignores a probable injury, the long lie and the reason she fell. &ldquo;Mild cognitive impairment&rdquo; is not an explanation for a fall, and falls in older people are a symptom that needs a cause.`,
          next: 'c-prioritise'
        }
      ],
      reasoning: `A long lie in an older woman carries its own risks, and I think about four things in the first few minutes: pain, temperature and circulation, the effects of lying on a hard floor (muscle, kidneys, skin) and the injury. I would not do a lying and standing blood pressure yet, because standing someone with a possible hip fracture is not safe. The head bruise needs thought too, since she is not on anticoagulants but an unwitnessed fall with a head injury still needs a neurological check. I also treat her with respect: introduce myself, explain what I am doing, and ask what she wants us to call her.`
    },
    {
      id: 'c-prioritise',
      type: 'presentation',
      tone: 'consequence',
      label: 'The registrar asks',
      text: `At 11:30 your registrar asks what has been done for the long lie. The bloods are late, the skin check has not been done and she is still on a trolley with a thin blanket. She asks the nurse to start a warm blanket, bloods and a pressure area check straight away, and tells you gently that after a long lie the first hour counts.`,
      next: 'ix-results'
    },
    {
      id: 'ix-results',
      type: 'presentation',
      tone: 'results',
      label: 'Initial results',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>Haemoglobin</td><td>118 g/L</td><td>115&ndash;165</td></tr>
<tr><td>White cell count</td><td>11.2 &times; 10&#8313;/L</td><td>4&ndash;11</td></tr>
<tr><td>CRP</td><td>14 mg/L</td><td>&lt;5</td></tr>
<tr><td>Sodium</td><td>133 mmol/L</td><td>133&ndash;146</td></tr>
<tr><td>Potassium</td><td>4.9 mmol/L</td><td>3.5&ndash;5.3</td></tr>
<tr><td>Urea</td><td>14.8 mmol/L</td><td>2.5&ndash;7.8</td></tr>
<tr><td><strong>Creatinine</strong></td><td><strong>128 &micro;mol/L</strong> (86 three months ago)</td><td>45&ndash;84</td></tr>
<tr><td><strong>eGFR</strong></td><td><strong>38 mL/min/1.73 m&sup2;</strong></td><td>&gt;60</td></tr>
<tr><td><strong>Creatine kinase</strong></td><td><strong>2,600 U/L</strong></td><td>&lt;200</td></tr>
<tr><td>High-sensitivity troponin</td><td>12 ng/L</td><td>&lt;14</td></tr>
</table>
ECG: sinus rhythm 84, normal intervals, no acute change. Urine dip: leucocytes 1+, nitrite negative, protein trace, blood 2+. Sacral skin is intact, but it feels warmer and firmer than the skin around it, with no visible change in colour. Core temperature is rising on a warming blanket.`,
      next: 'fall-reflect'
    },
    {
      id: 'fall-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'Forget the hip for a moment. Why might an 83-year-old woman have fallen in the night? List the causes you would look for, using what you know about her.',
      reveal: `<strong>Think about falls in layers:</strong>
<ol>
<li><strong>Medicines.</strong> Antihypertensives (ramipril, amlodipine, a thiazide) causing a drop in blood pressure on standing, especially after a recent dose increase. Sedatives such as <strong>zopiclone</strong>, started 4 weeks ago, cause grogginess, impaired balance and falls. A thiazide also causes nocturia and low sodium. This is the most likely and most fixable group for her.</li>
<li><strong>Postural hypotension and dehydration.</strong> She got up at night and her &ldquo;legs went&rdquo;. A lying and standing blood pressure is needed, but only once it is safe to stand her.</li>
<li><strong>Cardiac syncope.</strong> Arrhythmia, aortic stenosis, or a heart block. Ask about palpitations, chest pain and a prodrome, listen to her heart and check the ECG.</li>
<li><strong>Infection and acute illness.</strong> UTI, chest infection or sepsis, which cause weakness and confusion. Beware: a positive urine dip is common in older women without symptoms and is not a diagnosis by itself.</li>
<li><strong>Neurological.</strong> Stroke, TIA, Parkinsonism, subdural haematoma after an earlier fall (note the bruise), and cognitive decline.</li>
<li><strong>Metabolic and other.</strong> Hypoglycaemia (checked, 7.2), anaemia or bleeding, electrolyte problems.</li>
<li><strong>Mechanical and environmental.</strong> Poor lighting, the route to the toilet in the dark, footwear, vision, weak legs, and her frame being out of reach.</li>
<li><strong>The hip itself.</strong> Occasionally a bone weakened by osteoporosis breaks first and the person falls second, though more often the fall is the cause.</li>
</ol>
Falls usually have several causes at once. The question to ask is, &ldquo;What was different in the last month?&rdquo; For her, the answer is two medicines.`,
      next: 'history-q'
    },
    {
      id: 'history-q',
      type: 'decision',
      stage: 'History',
      prompt: 'How do you find out what happened and why?',
      options: [
        {
          label: 'Get a collateral history from Michelle and Sasha, review recent medicine changes and symptoms, and plan a standing blood pressure once safe',
          rating: 'best',
          feedback: `Mrs Campbell cannot fully recall the event, and memory problems make her account less reliable, but her account is still valuable and should be heard first. The collateral from family and the carer gives you the prodrome, recent changes and her usual function. A medicines review is the single most productive step in an older person who falls, and the standing blood pressure can wait until a fracture is excluded. What would change your mind is a history of loss of consciousness, which would point towards a cardiac cause.`,
          next: 'history-findings'
        },
        {
          label: 'Review her medicines and blood pressure, but do not ask the family about her recent behaviour or her falls',
          rating: 'good',
          feedback: `The medicines review is the right priority. But without Michelle and Sasha you miss the recent dizziness, previous near-falls and how much she has changed. Collateral is how you separate a one-off event from a decline.`,
          next: 'c-history'
        },
        {
          label: 'Accept that she tripped in the dark on the way to the toilet and concentrate on the hip',
          rating: 'poor',
          feedback: `She does not remember hitting the floor, so there is no evidence that she tripped. Settling on the first plausible explanation is premature closure. If the cause is her medicines, she will fall again, whatever is done for the hip.`,
          next: 'c-history'
        },
        {
          label: 'Do a memory test first to decide whether her account of the fall can be trusted',
          rating: 'poor',
          feedback: `A formal cognitive test in pain, cold and after a long lie will be unreliable and could be distressing. It does not help you find the cause of the fall. Memory problems mean you take extra care to get collateral, not a reason to leave her out.`,
          next: 'c-history'
        }
      ],
      reasoning: `I ask her first, in simple words, and give her time. Then I talk to Michelle and Sasha, who know what a normal day looks like. The questions I want answered: what happened in the weeks before, any dizziness on standing, blackouts or palpitations, new tablets or dose changes, drinking and eating, continence, and how she had been managing. She is on three blood-pressure-lowering drugs and a sleeping tablet. Together they are more likely than any rare diagnosis, and the question is whether the fall is a sign that she is over-treated.`
    },
    {
      id: 'c-history',
      type: 'presentation',
      tone: 'consequence',
      label: 'Michelle arrives',
      text: `Michelle arrives and asks why no one has told her about the medicine changes. Your registrar takes a proper history from her and Sasha in the relatives' room. It adds half an hour, but it adds the details that matter.`,
      next: 'history-findings'
    },
    {
      id: 'history-findings',
      type: 'presentation',
      label: 'Collateral history',
      text: `Michelle and Sasha tell you:
<ul>
<li>For about 2 weeks, since the amlodipine was increased, Mum has been &ldquo;going grey&rdquo; and holding on to furniture when she stands up. Sasha caught her swaying twice last week.</li>
<li>The locum started zopiclone 4 weeks ago. She is groggy in the mornings, and she has been getting up to the toilet two or three times a night.</li>
<li>No chest pain, palpitations or blackouts. No cough, burning on passing urine or fever. She has been eating and drinking a little less over the last week.</li>
<li>She usually wears a pendant alarm, but it was on the bedside table. Her glasses were in the living room.</li>
<li>Usually she manages her own washing and dressing with a little help, makes her own tea and knows everyone at church. Michelle: &ldquo;She doesn&rsquo;t have dementia. She&rsquo;s just forgetful.&rdquo; She is clear that her mother wants to stay at home.</li>
</ul>
Mrs Campbell herself says, &ldquo;I stood up too quick. I felt like the room tipped.&rdquo;`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'How do you examine her hip?',
      options: [
        {
          label: 'Look, feel and move: leg position, groin tenderness, log roll, axial load and active straight-leg raise, with analgesia and consent',
          rating: 'best',
          feedback: `The systematic approach finds the subtle signs. Undisplaced fractures often cause no shortening or rotation, and the signs are pain on log roll, pain on gentle axial loading or heel strike, and groin tenderness. Examine gently, with analgesia, explaining each step and keeping her covered. Also check the head, neck, wrists, pelvis, spine and skin, since she was lying for hours and has a forehead bruise. What would change your mind is a perfectly pain-free examination, which would not fit with her story.`,
          next: 'exam-findings'
        },
        {
          label: 'Look for shortening and rotation and test passive hip movement, and note that she can put weight through the leg',
          rating: 'good',
          feedback: `This is the classic examination and it is useful when it is positive. The weakness is that a normal-looking leg is common in undisplaced or impacted fractures, and weight-bearing is not reassuring. Add log roll, axial load and active straight-leg raise.`,
          next: 'c-exam'
        },
        {
          label: 'Ask her to walk the corridor without her frame to prove whether she can bear weight on the leg',
          rating: 'unsafe',
          feedback: `Walking is not a test for a fracture. It can cause pain and displace an undisplaced neck of femur fracture, which would turn a fracture that could be fixed with screws into one that needs a joint replacement and carries a risk of blood-supply damage to the femoral head. Ability to walk, even a few steps, does not exclude a hip fracture.`,
          next: 'c-exam'
        },
        {
          label: 'Examine only the hip, and leave the skin, head and other joints for the ward team',
          rating: 'poor',
          feedback: `After a long lie and an unwitnessed fall, other injuries matter: wrist, ribs, neck and head, and pressure areas. A narrow examination, which is a form of search satisficing, finds the likely injury and misses the others. Cover the whole patient and keep her dignified and warm.`,
          next: 'c-exam'
        }
      ],
      reasoning: `Look, feel, move. Look at the legs for shortening, rotation, bruising and swelling. Feel for tenderness in the groin and over the greater trochanter and check the pulses. Move: ask her to lift the heel off the bed (active straight-leg raise) and try gentle log roll and axial load. Absent shortening does not reassure me, and being able to take steps does not either, since impacted and undisplaced neck of femur fractures can bear weight for a time. I tell her what I am doing before each step and give her the chance to say stop. I would also do a neurological check for her forehead bruise, and examine her sacrum and heels with a chaperone.`
    },
    {
      id: 'c-exam',
      type: 'presentation',
      tone: 'consequence',
      label: 'A correction',
      text: `Your registrar watches the end of your examination. &ldquo;She was lying on a hard floor for half a day,&rdquo; she says. &ldquo;Check the sacrum and heels, and look at her wrists and head. And we don&rsquo;t walk people to test a hip.&rdquo; She repeats the examination with you, explaining each step to Mrs Campbell and keeping her covered.`,
      next: 'exam-findings'
    },
    {
      id: 'exam-findings',
      type: 'presentation',
      label: 'Examination',
      text: `<strong>Left hip:</strong>
<ul>
<li>Both legs look the same length. The left leg lies in a neutral position, with no obvious shortening or rotation. No bruising or swelling.</li>
<li>Tender over the left groin. Pain on log roll and on gentle axial loading through the heel.</li>
<li>She can lift the left heel off the bed (active straight-leg raise) but it hurts her, and she winces. Passive flexion to 90 degrees and internal rotation are painful and limited by pain.</li>
<li>With the physiotherapist and a frame she can take a few steps, with a marked limp and visible pain.</li>
</ul>
<strong>Elsewhere:</strong> a 3 cm bruise over the left forehead with no laceration, GCS 15, no focal neurology and a non-tender neck. Both wrists are non-tender. The pelvis is stable. The sacral skin is intact, but warm and firm compared with the surrounding skin (an early pressure-related change, which is hard to see on darker skin and is found by feel). Heels intact. The limbs are cool but the pulses are normal.`,
      next: 'xray-results'
    },
    {
      id: 'xray-results',
      type: 'presentation',
      tone: 'results',
      label: 'Left hip X-ray',
      text: `An AP pelvis and a lateral view of the left hip have been taken. The film is reported as <strong>&ldquo;osteopenic bones, no definite fracture&rdquo;</strong>.<br><br>
<strong>Reading it systematically:</strong>
<ul>
<li><strong>Identity and view:</strong> correct patient and side. The lateral view is limited because she could not tolerate the position.</li>
<li><strong>Alignment:</strong> Shenton&rsquo;s line is smooth on both sides. The neck-shaft angle looks similar on both sides.</li>
<li><strong>Cortices and trabeculae:</strong> the cortex of the femoral neck looks continuous. The trabecular pattern is reduced, in keeping with osteoporosis, and no clear lucent line is seen. A faint area of increased density at the base of the neck might be overlap.</li>
<li><strong>Pelvis and pubic rami:</strong> no fracture.</li>
</ul>
Her pain is still 6/10 and she cannot comfortably stand.`,
      next: 'xray-q'
    },
    {
      id: 'xray-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'The X-ray shows no definite fracture, but she is in pain and cannot walk properly. What next?',
      options: [
        {
          label: 'Treat as a suspected hip fracture, keep her off her feet, give analgesia and arrange an MRI hip (CT if MRI unavailable)',
          rating: 'best',
          feedback: `A plain film misses a proportion of hip fractures, especially undisplaced ones in osteopenic bone. When the X-ray is negative or unclear but the clinical suspicion remains, NICE guidance is to go on to MRI, with CT as an alternative if MRI is unavailable or contraindicated. The same principle applies when a scaphoid fracture is suspected (NICE NG38). Until then she is treated as if she has a fracture. What would change your mind is a normal MRI, which would turn your attention to soft tissue injury and other causes of pain.`,
          next: 'mri-results'
        },
        {
          label: 'Get a better lateral view and ask the radiologist to re-read the film, then decide whether more imaging is needed',
          rating: 'good',
          feedback: `Getting a good second view and a senior radiology opinion is reasonable, and a technically poor film is a recognised problem. The risk is falling into a sequence of repeat X-rays while she stays in pain. If her pain and inability to move continue, the next test is MRI and not a third X-ray.`,
          next: 'c-xray-good'
        },
        {
          label: 'Admit her for physiotherapy tomorrow and image the hip only if she cannot walk then',
          rating: 'poor',
          feedback: `This delays the diagnosis by a day or more, and mobilising an occult fracture risks displacement. It also leaves her in pain overnight in an unfamiliar bed, which raises the risk of delirium. The test for a fracture is imaging, and not whether she copes with a frame.`,
          next: 'c-xray-delay'
        },
        {
          label: 'Tell the family there is no fracture, give analgesia and discharge her with a frame since she could walk',
          rating: 'unsafe',
          feedback: `This is false reassurance from a normal-looking film and the ability to walk, in a patient who cannot walk normally and has groin pain. An undisplaced fracture sent home can displace, leaving a woman who cannot get to the toilet, alone, with an injury that is now harder to fix.`,
          next: 'c-xray-delay'
        }
      ],
      reasoning: `The question is the probability of a fracture after the X-ray. Before the film it was high: an osteoporotic woman, a fall, groin pain, pain on axial load and an abnormal gait. A &ldquo;no definite fracture&rdquo; report lowers that only a little, because the sensitivity of plain films for undisplaced neck of femur fractures is not perfect. The consequence of missing one is very large (displacement, avascular necrosis, a longer wait for surgery), so I would not accept the film. The next step is MRI, which is the most accurate test, within a day, and I would treat her as having a fracture until it has shown otherwise. CT is the fallback if MRI is not possible.`
    },
    {
      id: 'c-xray-good',
      type: 'presentation',
      tone: 'consequence',
      label: 'A longer route',
      text: `The extra view is also inconclusive, and the radiologist says, &ldquo;I can&rsquo;t exclude a subtle neck of femur fracture. I would suggest an MRI.&rdquo; The scan is requested at 15:30, about three hours after the first film. Mrs Campbell spends them on the trolley, drowsy and in pain.`,
      next: 'mri-results'
    },
    {
      id: 'c-xray-delay',
      type: 'presentation',
      tone: 'danger',
      label: 'The leg will not take her weight',
      text: `When staff next try to stand her, she cries out and cannot put any weight on the left leg. The registrar looks at the film again and arranges an MRI. Michelle asks why no one pushed for a scan when her mother was in so much pain. You have lost the better part of a day, and with it her best chance of an early operation.`,
      next: 'mri-results'
    },
    {
      id: 'mri-results',
      type: 'presentation',
      tone: 'results',
      label: 'MRI left hip',
      text: `<strong>Undisplaced intracapsular fracture of the left femoral neck</strong> (subcapital, valgus-impacted), with marrow oedema extending into the femoral head and neck. No pelvic fracture. Background osteopenia.<br><br>
The orthopaedic team have accepted her. Mrs Campbell is admitted to the orthogeriatric ward under joint care. Her family are with her, and she is nil by mouth from midnight in case she is put on a morning list. Her pain returns to 7/10 after the first doses wear off.`,
      next: 'prescribe-q'
    },
    {
      id: 'prescribe-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'How do you manage her pain from here, given eGFR 38?',
      options: [
        {
          label: 'Regular paracetamol, a fascia iliaca block, low-dose opioid for breakthrough with a laxative, and no NSAID',
          rating: 'best',
          feedback: `Good analgesia matters because uncontrolled pain is itself a trigger for delirium and prevents early mobilisation. A fascia iliaca block gives strong, opioid-sparing pain relief, regular paracetamol is the foundation, and a small dose of opioid covers breakthrough pain when chosen and dosed cautiously for her age, kidneys and confusion risk. A laxative goes with every opioid. NSAIDs should be avoided given her kidney injury and ACE inhibitor and thiazide. What would change your mind is poor response, when you would involve the pain or orthogeriatric team.`,
          next: 'delirium-start'
        },
        {
          label: 'Regular paracetamol and a fascia iliaca block, and do not prescribe any opioid in case she gets confused',
          rating: 'good',
          feedback: `This is a sensible, safe base, and many patients manage with it. But untreated breakthrough pain is a cause of agitation and delirium in older people with a hip fracture, so having nothing for severe pain is a risk. Opioids at a low dose with monitoring are usually the lesser harm.`,
          next: 'delirium-start'
        },
        {
          label: 'Regular tramadol and codeine as needed, as weaker opioids are gentler in older people',
          rating: 'poor',
          feedback: `Tramadol and codeine are not safer for her. Tramadol is linked to confusion, nausea, seizures and low sodium (hers is already borderline), and codeine behaves unpredictably in kidney impairment and is constipating. Weak does not mean safe in old age. Low-dose, carefully chosen opioid with monitoring is the usual approach.`,
          next: 'c-prescribe'
        },
        {
          label: 'Diclofenac with omeprazole, as NSAIDs work well for bone pain and the PPI protects her stomach',
          rating: 'unsafe',
          feedback: `An NSAID in an 83-year-old with kidney injury, on an ACE inhibitor and a thiazide, is a recipe for worsening AKI (the &ldquo;triple whammy&rdquo;), as well as bleeding and fluid retention. A PPI protects the stomach and not the kidneys. NSAIDs are among the highest-risk drugs in this setting.`,
          next: 'c-prescribe'
        }
      ],
      reasoning: `The creatinine has risen from 86 to 128, so I treat this as AKI on top of the long lie, and I do not add anything that harms the kidneys. I would also pause the ramipril and the thiazide for now and review the amlodipine, since they are contributing both to the AKI and probably to the fall. For pain, I build in layers: paracetamol regularly, a nerve block for the strong pain, and a small opioid dose when needed. Morphine accumulates in kidney impairment, so I would ask the pharmacist or senior about the choice and dose. The laxative is part of the prescription, since constipation and retention cause delirium later on.`
    },
    {
      id: 'c-prescribe',
      type: 'presentation',
      tone: 'consequence',
      label: 'The pharmacist reviews',
      text: `That evening the ward pharmacist reviews the drug chart against her blood tests and flags a problem. The creatinine has risen further and the sodium has fallen. The regimen is changed, the offending drug stopped, and her fluids and blood tests are reviewed. It is a setback she did not need before surgery.`,
      next: 'delirium-start'
    },
    {
      id: 'delirium-start',
      type: 'presentation',
      tone: 'danger',
      label: 'Ward, 02:30',
      text: `The night nurse calls you. Mrs Campbell, who was calm and chatting about church at 20:00, is now pulling at her drip, trying to climb out of bed and calling for her late husband. She does not know where she is. Michelle, who went home at 22:00, says by phone, &ldquo;She is nothing like this. Something is wrong.&rdquo;<br><br>
Observations: temperature 36.9&deg;C, heart rate 96, blood pressure 130/76, oxygen saturation 95% on air. She is drowsy one minute and agitated the next.`,
      next: 'delirium-q'
    },
    {
      id: 'delirium-q',
      type: 'decision',
      stage: 'Manage',
      prompt: 'How do you assess and respond?',
      options: [
        {
          label: 'Do a 4AT, look for causes of delirium, and use non-drug measures first',
          rating: 'best',
          feedback: `The 4AT is a quick bedside screen that includes alertness, a short cognition test, attention and an acute change, and it works in people with memory problems. Delirium after a hip fracture is common and has causes you can find and treat: pain, urinary retention, constipation, infection, drugs, dehydration, low sodium, sleep loss and an unfamiliar place. Non-drug measures are first-line: glasses, a quiet room, lights on at night, familiar people, and sleep. What would change your mind is a safety emergency, such as a risk of immediate harm to herself.`,
          next: 'delirium-causes'
        },
        {
          label: 'Look for causes and use non-drug measures, but judge delirium by clinical impression instead of using the 4AT',
          rating: 'good',
          feedback: `Looking for causes and using non-drug measures is the right approach. The 4AT adds a baseline score you can repeat and a clear record for the next team, and helps tell delirium from her usual memory problems, so use it.`,
          next: 'delirium-causes'
        },
        {
          label: 'Put it down to her existing memory problems and ask the night staff to reorient her and re-check in the morning',
          rating: 'poor',
          feedback: `New agitation and a clouded attention in an 83-year-old is delirium until proven otherwise, and not a progression of mild cognitive impairment. Calling it dementia is a diagnostic shortcut that leaves the cause unfound while she deteriorates. Delirium is a medical emergency in the sense that it signals acute illness and carries risks.`,
          next: 'c-delirium'
        },
        {
          label: 'Prescribe haloperidol to settle her, or lorazepam if that fails, so she is safe in bed until morning',
          rating: 'unsafe',
          feedback: `Antipsychotics and benzodiazepines are not first-line for delirium. They sedate, increase the risk of falls and aspiration, and hide the signs you need to monitor. Haloperidol is only considered for severe distress or risk to safety when non-drug measures have failed, at a low dose and for the shortest time, and the cause is still sought.`,
          next: 'c-delirium'
        }
      ],
      reasoning: `The pre-test probability of delirium is high: age over 80, cognitive impairment, hip fracture, opioids, AKI and a new environment. The first move is to recognise it and look for the cause, and the second is to remove what makes it worse. My checklist is PINCH ME: pain, infection, nutrition, constipation, hydration, medicines, environment. I would ask the nurse to do a bladder scan, check bowels, stool chart and glucose, review the drug chart for anticholinergics and sedatives, and make sure she has her glasses. I would sit with her, speak calmly and use her name. If she were a danger to herself despite all this, I would speak to my senior about a very low dose of a short-term drug.`
    },
    {
      id: 'c-delirium',
      type: 'presentation',
      tone: 'consequence',
      label: 'Morning handover',
      text: `The night team&rsquo;s approach did not deal with why she is delirious. By the morning she is no better: she has hardly slept, is not eating or drinking, and cannot join a conversation about her operation. If she was sedated, she is also drowsy and hard to rouse. The day team find the cause they should have looked for in the night.`,
      next: 'delirium-causes'
    },
    {
      id: 'delirium-causes',
      type: 'presentation',
      tone: 'results',
      label: 'Looking for the cause',
      text: `A 4AT scored <strong>8</strong> (possible delirium). A bladder scan shows <strong>650 mL</strong> of urine, and she has not opened her bowels for 6 days. Her pain is 7/10 now that the block has worn off, her glasses and hearing aid are at home, and she has been in a noisy bay with the lights on.<br><br>
A catheter is inserted, with a large volume drained, and she is given a laxative and further analgesia. Michelle brings in the glasses and hearing aid and sits with her, the lights are dimmed and she is moved to a quieter side room. Sodium is stable and the infection screen is negative. By the afternoon she is calmer and speaking in sentences, although still drowsy and a bit muddled.`,
      next: 'manage-q'
    },
    {
      id: 'manage-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'It is 14:00 on day 2. How do you discuss the plan for her hip?',
      options: [
        {
          label: 'Explain that surgery is the best way to get her walking, aim for the next list, and check her capacity and wishes with Michelle present',
          rating: 'best',
          feedback: `Surgery is the standard treatment for a hip fracture, including an undisplaced one, because it gives pain relief and the best chance of walking again. National standards and NICE aim for surgery on the day of admission or the day after, and the orthogeriatricians help to optimise her without delaying. Having mild cognitive impairment and recent delirium does not mean she lacks capacity: assess it for this decision, at a time when she is clear, and support her to take part. With her permission, involve Michelle. What would change your mind is a clear, capacitous refusal of surgery.`,
          next: 'postop'
        },
        {
          label: 'Ask Michelle to make the decision for her mother, as she has memory problems and has just been delirious',
          rating: 'good',
          feedback: `Involving the family is right, and Michelle knows her mother well. But capacity is presumed and is specific to a decision, and a mild memory problem or a day-old delirium does not remove it. The decision belongs to Mrs Campbell if she can make it with support, and the family help her to do that.`,
          next: 'c-manage'
        },
        {
          label: 'Delay the operation for a week until the delirium has gone and her kidney function is back to normal',
          rating: 'poor',
          feedback: `Waiting for a perfect state is a trap. Delays to surgery raise the risk of complications and death in older people, and delirium and mild AKI are treated alongside surgery rather than ahead of it. Only reversible problems that make surgery unsafe, such as severe anaemia or a dangerous electrolyte level, justify a short delay.`,
          next: 'c-manage'
        },
        {
          label: 'Advise non-operative treatment because she is frail, and do not discuss the surgical options with her',
          rating: 'poor',
          feedback: `Frailty is a reason for orthogeriatric input and careful planning, and not a reason to withhold surgery without a conversation. Non-operative treatment usually means weeks in bed with pain and a higher risk of complications. Making that decision for her breaches her right to choose.`,
          next: 'c-manage'
        }
      ],
      reasoning: `She has a stable-but-fragile situation: improving delirium, AKI, mild cognitive impairment. I do not use any of those as a reason to avoid the conversation. My approach is the Mental Capacity Act: presume capacity, help her understand with plain words and the glasses and hearing aid on, pick a time of day when she is at her best, and ask her to say back what the operation is for and what happens if she does not have it. She told us she wants to stay in her flat, which is exactly what surgery and early rehabilitation aim for. With her permission, Michelle hears the same information. I also record the discussion and how capacity was assessed.`
    },
    {
      id: 'c-manage',
      type: 'presentation',
      tone: 'consequence',
      label: 'On the ward round',
      text: `The orthogeriatric consultant revisits the plan with Mrs Campbell, speaking slowly and with her glasses on. When asked what she wants, she says, &ldquo;I want to walk to my own front door.&rdquo; She understands the choices, and can say them back. The consultant records that she has capacity for this decision and puts her on the next theatre list.`,
      next: 'postop'
    },
    {
      id: 'postop',
      type: 'presentation',
      label: 'Four days later',
      text: `Mrs Campbell had her fracture fixed under spinal anaesthetic on a late list that evening, within about 36 hours of arriving, and she was out of bed with the physiotherapist the next morning. The delirium has cleared, her catheter is out and her kidney function is recovering (creatinine 98 &micro;mol/L). The orthogeriatric team have stopped the zopiclone and the bendroflumethiazide, reduced the amlodipine, and her standing blood pressure is now being checked daily. She is eating again and walking short distances with a frame.<br><br>
The team is planning her discharge, with a rehabilitation plan. Michelle asks, &ldquo;What about her bones? Mum was told she had thin bones two years ago and nothing seemed to happen.&rdquo; Mrs Campbell says she stopped the tablets because &ldquo;they gave me terrible heartburn and I couldn&rsquo;t sit up for half an hour&rdquo;.`,
      next: 'bone-q'
    },
    {
      id: 'bone-q',
      type: 'decision',
      stage: 'Follow-up',
      prompt: 'How do you plan her bone health and falls prevention?',
      options: [
        {
          label: 'Refer to the Fracture Liaison Service for an early DXA and a decision on an anabolic-first plan, correct vitamin D, and tackle falls',
          rating: 'best',
          feedback: `A hip fracture at 83, after a wrist fracture and with known osteoporosis, is not just a fragility fracture: it puts her in the <em>very high risk</em> group, where the next fracture is most likely in the next one to two years. That changes the question from &ldquo;should she be treated?&rdquo; (yes, and no scan is needed to decide that) to &ldquo;which drug first?&rdquo;. A DXA does not gate treatment here, but it can open access to an osteoanabolic agent (romosozumab, teriparatide or abaloparatide), and starting with an anabolic and following with an antiresorptive gives larger gains than the reverse order. So the FLS arranges the scan quickly, vitamin D and calcium are corrected meanwhile, and the bone specialist decides. What would change your mind: very limited life expectancy, a contraindication to the anabolics (for romosozumab, previous heart attack or stroke), or her own preference after discussion, in which case an IV bisphosphonate is a reasonable plan.`,
          next: 'conclusion'
        },
        {
          label: 'Check vitamin D, calcium, kidney function and teeth, then give IV zoledronic acid before she goes home',
          rating: 'good',
          feedback: `This protects her now, avoids the reflux that ended her alendronate, and is what many hospitals do. It is defensible, and far better than no treatment. The cost is less obvious: giving a potent antiresorptive first can blunt the response to an anabolic agent given later, and for a woman in the very high risk group the stronger sequence is usually anabolic first. A short pause for a DXA and a bone specialist opinion would keep that option open without leaving her untreated for long.`,
          next: 'c-zol'
        },
        {
          label: 'Order a DXA scan first and only start any treatment if her T-score is -2.5 or lower',
          rating: 'poor',
          feedback: `This uses the scan for the wrong job. After a hip fracture, the fracture is the reason to treat; NOGG and NICE do not require a T-score to justify it, and a &ldquo;normal-looking&rdquo; scan would not remove her risk. The DXA is useful here to choose the drug and unlock anabolic treatment, not to decide whether to treat at all.`,
          next: 'c-bone'
        },
        {
          label: 'Restart her weekly alendronate at discharge, as it was already prescribed, and add a falls leaflet',
          rating: 'poor',
          feedback: `She stopped it for a reason: reflux and difficulty sitting upright, so it is likely to fail again. It also needs vitamin D and calcium corrected, a kidney function check and a dental check, and a weak oral agent is a thin plan for someone at very high risk. A leaflet alone is not a falls assessment. Find out why treatment failed before repeating it.`,
          next: 'c-bone'
        }
      ],
      reasoning: `The hip fracture moves her from &ldquo;has osteoporosis&rdquo; to &ldquo;very high risk of the next fracture, soon&rdquo;. Whether to treat is settled; the live question is the order of drugs, and this is a genuine grey area. Many people would give IV zoledronic acid and move on, which is quick, tolerable and better than nothing. But the anabolic agents build bone rather than just slowing loss, they work best before an antiresorptive rather than after one, and in the UK access to them is tied to fracture history and bone density, so the DXA is a gateway rather than a gate. I want the Fracture Liaison Service involved before she leaves, vitamin D corrected, and a plan that does not depend on someone remembering. Equal weight goes on falls: stopping zopiclone, reducing blood pressure drugs, lying and standing blood pressure, strength and balance work, vision, footwear, a home hazard visit and a pendant alarm she actually wears.`
    },
    {
      id: 'c-zol',
      type: 'presentation',
      label: 'Bone clinic, three months later',
      text: `Mrs Campbell had zoledronic acid on the ward and tolerated it well. At the bone clinic, the DXA shows a hip T-score of -3.3 and a spine T-score of -3.8. The consultant explains that with a recent hip fracture and these numbers she would have qualified for an anabolic agent, and that giving one now, after zoledronic acid, tends to give a smaller response than giving it first. They agree to continue her current treatment and review. She is protected, but one of the stronger options has become less effective.`,
      next: 'conclusion'
    },
    {
      id: 'c-bone',
      type: 'presentation',
      tone: 'consequence',
      label: 'The Fracture Liaison nurse',
      text: `The Fracture Liaison nurse picks up the case on the day before discharge. She notes that Mrs Campbell is going home with no bone-protective treatment decided, a low vitamin D, and a history of stopping her previous tablet for reflux. She sees her, arranges an early DXA, agrees a plan with the orthogeriatricians and the bone clinic, and tells you gently that it would have been simpler to ask for her on day one.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: undisplaced intracapsular fracture of the left neck of femur, initially missed on X-ray, after a fall from postural hypotension and medicines, in an 83-year-old woman with osteoporosis.</strong><br><br>
Mrs Campbell had surgery within about 36 hours of arriving, was mobilised the next day, and went home after a period of rehabilitation with a care package, a reviewed medicine list and a pendant alarm she now wears. Through the Fracture Liaison Service she had vitamin D corrected and an early DXA, and the bone clinic started an anabolic agent, with an antiresorptive planned to follow. Her delirium cleared completely.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>After a long lie, treat pain, temperature, kidneys, muscle and skin as well as the injury. Pressure damage is hard to see on darker skin, so use touch.</li>
<li>Ask why she fell. Recent medicine changes (antihypertensives, a sedative) are the commonest fixable cause. Do not stand a patient with a possible hip fracture for postural BP.</li>
<li>Being able to walk, a normal leg position and a negative X-ray do not exclude an undisplaced neck of femur fracture. Go to MRI (CT if not possible) while treating her as fractured.</li>
<li>Choose safe analgesia: paracetamol, a nerve block and cautious opioid with a laxative. No NSAIDs with kidney injury.</li>
<li>Delirium: 4AT, look for causes (retention, constipation, pain, medicines), non-drug measures first. Antipsychotics are not first-line.</li>
<li>Offer surgery within about 36 hours with orthogeriatric input and assess capacity decision by decision.</li>
<li>A hip fracture is a reason to treat in itself. The DXA does not decide <em>whether</em> to treat, but it helps decide <em>what</em>: in a very-high-risk patient it can open the door to an anabolic-first plan. Falls prevention is the other half.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;You have a small crack in the top of your thigh bone. It is common when the bones are thin. The best way to get you walking and home is an operation to fix it, soon. We also need to look after your bones and change some of your tablets so you are less likely to fall again.&rdquo;<br><br>
<strong>Safety-netting at discharge:</strong> new or worsening hip pain, a new fall, new confusion, passing less urine, constipation or a sore area of skin should prompt a call to the GP or 111 (999 for a fall with injury or inability to get up). Wear the pendant alarm at all times, including at night. Take the tablets as set out in the new list, and ask the pharmacist before changing anything.`,
      keyLearning: [
        'After a long lie, think about hypothermia, dehydration, AKI, rhabdomyolysis (CK) and pressure damage, as well as the injury. Pressure damage on darker skin is found by touch.',
        'A fall is a symptom. Review medicines first, especially antihypertensives, sedatives and anything new, and check postural BP only when it is safe to stand her.',
        'Being able to bear weight does not exclude a hip fracture. Undisplaced fractures often show no shortening or rotation.',
        'A negative X-ray with ongoing suspicion needs MRI (or CT if MRI is unavailable), and she is treated as fractured meanwhile.',
        'In an older adult with reduced kidney function, avoid NSAIDs. Use paracetamol, a nerve block and a cautious opioid with a laxative.',
        'Delirium needs a 4AT, a search for causes and non-drug measures first. Haloperidol is not first-line. Mild cognitive impairment does not remove capacity.',
        'A hip fracture is a treatment trigger, not a DXA question. Use the DXA to choose the drug: very-high-risk patients may do better with an anabolic first, and an antiresorptive given first can blunt it.'
      ],
      relatedTests: ['Hip X-ray (AP pelvis and lateral)', 'MRI hip', 'CK', 'U&E and eGFR', 'ECG', '4AT', 'Bladder scan', 'Vitamin D and calcium', 'Lying and standing blood pressure'],
      goingFurther: `<strong>Classification and surgery:</strong> intracapsular fractures are often described using the Garden classification (stages I to IV, from an incomplete or impacted fracture to a fully displaced one). Undisplaced fractures are usually treated with internal fixation (cannulated screws or a sliding hip screw), because the blood supply to the head is preserved. Displaced intracapsular fractures in older people are usually treated by replacing the joint, with hemiarthroplasty or a total hip replacement for those who are fit and active and were walking independently before. Extracapsular fractures are fixed. The surgeons decide, with the patient.<br><br>
<strong>Standards:</strong> NICE CG124 recommends surgery on the day of, or the day after, admission, and orthogeriatric assessment. The National Hip Fracture Database audits hospitals against standards, including time to surgery, orthogeriatric review and delirium assessment, and the Best Practice Tariff links payment to meeting them.<br><br>
<strong>Fracture risk and treatment:</strong> FRAX estimates the 10-year probability of a major osteoporotic or hip fracture from clinical risk factors, with or without bone density. NOGG guidance uses it to set treatment thresholds. NOGG separates high risk from <em>very high risk</em> (for example a recent major fracture, multiple fractures, or a very low T-score). After a hip fracture, treatment does not depend on a DXA, but the DXA helps stratify risk and, in the UK, is part of the access criteria for the osteoanabolic agents: romosozumab (a sclerostin antibody; avoid after myocardial infarction or stroke), and teriparatide and abaloparatide (PTH and PTHrP analogues, given as daily injections). Sequence matters: anabolic followed by antiresorptive gives larger gains in bone density than the reverse, and prior bisphosphonate or denosumab blunts the anabolic response. This is still a grey area in practice, and many patients reasonably receive IV zoledronic acid first. Oral bisphosphonates are first line for most people but have limits (reflux, kidney function), and IV zoledronic acid or denosumab are alternatives, each with its own safety checks (vitamin D and calcium, kidney function, dental health, and for denosumab the need to continue without gaps).<br><br>
<strong>Imaging principle:</strong> a negative first X-ray does not end the work-up when suspicion remains. The same logic applies to the scaphoid (NICE NG38). MRI is the most sensitive test, and CT is a reasonable alternative.`
    }
  ]
};
