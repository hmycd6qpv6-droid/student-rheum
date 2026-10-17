/* joints-case-3: The Aching Back */

export default {
  id: 'joints-case-3',
  title: 'The Aching Back',
  summary: '28-year-old nail technician with five months of back and buttock pain that physiotherapy has not helped',
  setting: 'GP surgery',
  difficulty: 'intermediate',
  curriculum: ['RH-SPA', 'PR-BACK', 'IX-SEROLOGY', 'IX-IMAGING', 'TX-MEDS', 'TX-INFLAM', 'LO4', 'LO7'],
  objectives: [
    'Separate inflammatory from mechanical back pain using the history, and name the red flags that point elsewhere',
    'Explain why a normal CRP, a normal sacroiliac X-ray and a positive HLA-B27 each fail to settle the diagnosis',
    'Recognise acute anterior uveitis in a patient with suspected spondyloarthritis and arrange same-day ophthalmology',
    'Prescribe an NSAID safely and say what comes next if NSAIDs are not enough',
    'Explain a lifelong but treatable condition, including the long delay in diagnosis'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'GP surgery, Thursday 09:10',
      text: `<strong>Ms Hannah Greaves, 28, nail technician</strong><br><br>
She has booked a double appointment for her back. The notes show she has been seen three times in five months, and the last locum wrote &ldquo;mechanical back pain&rdquo;. She has had six sessions of NHS physiotherapy, which did not help, and co-codamol that mostly gave her constipation.<br><br>
She rents a flat with her partner, Dan, and rents a nail desk at a salon, so she is not paid when she is off. She stands for nine hours a day and has started to miss Saturdays, her busiest day. She smokes about ten a day. She says: &ldquo;I think it&rsquo;s my job. Can you sign me off, or send me for a scan so I know what&rsquo;s wrong with my back?&rdquo;`,
      next: 'hx-q'
    },
    {
      id: 'hx-q',
      type: 'decision',
      stage: 'History',
      prompt: 'You have ten minutes. Which questions will do most to find out what is going on?',
      options: [
        {
          label: 'Ask how the pain began, what stiffness, rest, exercise and night do to it, whether it moves sides, what helps, any eye, skin, gut or heel problems, family history, then red flags',
          rating: 'best',
          feedback: `Inflammatory back pain is a pattern, so you ask for the whole pattern: gradual onset, morning stiffness, relief with movement rather than rest, waking in the second half of the night, pain that alternates between buttocks, and a quick response to NSAIDs. Spondyloarthritis also clusters with uveitis, psoriasis, bowel disease, enthesitis (heel pain), dactylitis and family history, so you ask about those too. You finish with the red flags, because the pattern only matters once dangerous causes are less likely. What would change your mind is a red flag, or a pain that is clearly worse with movement and better with rest.`,
          next: 'hx-found'
        },
        {
          label: 'Ask about red flags: weight loss, fever, cancer history, trauma, steroids, neurological symptoms, and bladder or bowel change',
          rating: 'good',
          feedback: `Screening for red flags is essential and you should always do it. The weakness is that it only tells you what the pain is not. A young adult with months of pain and no red flags is the point at which you ask whether this is inflammatory, and you have not yet looked for that pattern. This is search satisficing: you stop once the dangerous causes are less likely, without asking which benign one it is.`,
          next: 'hx-found'
        },
        {
          label: 'Ask about her job, lifting, posture, mattress and footwear, to find out what is aggravating her mechanical back',
          rating: 'poor',
          feedback: `This accepts the &ldquo;mechanical&rdquo; label from the notes before testing it, which is anchoring. Standing at work is a very plausible explanation, but it does not explain pain that is worse after rest and wakes her at night. Take the label as a hypothesis and look for what fits and what does not.`,
          next: 'c-hx'
        },
        {
          label: 'Ask how severe the pain is out of ten, what the physiotherapy covered, and which painkillers she has tried',
          rating: 'poor',
          feedback: `Severity and treatment so far are useful, but they describe how much it hurts rather than what kind of pain it is. Pain severity does not separate inflammatory from mechanical back pain, and a search for better analgesia leaves the diagnosis unquestioned.`,
          next: 'c-hx'
        }
      ],
      reasoning: `Back pain is common, so the pre-test chance that any one young adult has axial spondyloarthritis is low, perhaps a few per cent. But five months of pain that physiotherapy has failed to touch is not a typical mechanical story, and the questions are cheap. Each feature of inflammatory pain shifts the odds by a modest amount, and several together shift them a lot, which is why I ask for the full set. I also remember that women with axial spondyloarthritis are diagnosed later than men, partly because many clinicians still picture a young man with a stiff spine.`
    },
    {
      id: 'c-hx',
      type: 'presentation',
      tone: 'consequence',
      label: 'At the door',
      text: `The appointment overruns. As Hannah stands up to leave she says, almost as an afterthought: &ldquo;It&rsquo;s weird, but it&rsquo;s actually better when I&rsquo;m walking round the salon than when I sit down in the break room. And I&rsquo;ve been waking up at four in the morning.&rdquo; You sit her back down. The most useful part of the history had to be dragged out of her on the way out, and the next patient is already waiting.`,
      next: 'hx-found'
    },
    {
      id: 'hx-found',
      type: 'presentation',
      label: 'What Hannah tells you',
      text: `<ul>
<li>Dull ache low in the back and deep in both buttocks, <strong>creeping on over about five months</strong> with no injury. The buttock pain switches sides.</li>
<li><strong>Morning stiffness for an hour or more.</strong> She is stiff after sitting and eases once she has been moving for a while. A hot shower and a walk help. A weekend lie-in makes it worse.</li>
<li>Wakes at about <strong>4 am</strong> with buttock pain and has to get up and walk about.</li>
<li>Over-the-counter <strong>ibuprofen 400 mg</strong>, most days, &ldquo;takes the edge off within a couple of hours&rdquo;. It is the only thing that has worked.</li>
<li>Pain in the right heel last year, called plantar fasciitis, which settled by itself. Flaky patches on her scalp that she treats with dandruff shampoo. Her <strong>mother has psoriasis</strong>.</li>
<li>No eye problems, no diarrhoea or blood in the stool, no swollen joints.</li>
<li><strong>No red flags:</strong> no fever, weight loss, night sweats, injury or cancer history; no steroids or immunosuppression; no leg weakness, numbness, saddle numbness or bladder or bowel change.</li>
<li>Mild childhood asthma that has not troubled her for years. No stomach ulcer or reflux. Never had her blood pressure flagged.</li>
<li>She and Dan are hoping to start trying for a baby within the next year. She is worried she is &ldquo;a fraud&rdquo; because people keep telling her it is just her job.</li>
</ul>`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'How do you examine her?',
      options: [
        {
          label: 'Offer a chaperone, watch her move, test spinal movement and sacroiliac tenderness, then check heels, scalp, nails, eyes and peripheral joints',
          rating: 'best',
          feedback: `A back examination cannot show inflammatory disease on its own. It is often normal early on, particularly in women. The value is in what surrounds the spine: the entheses (insertions of the Achilles tendon and plantar fascia), the skin and scalp for psoriasis, the eyes, and the peripheral joints. Asking for consent and offering a chaperone before she undresses to her underwear shows the dignity LO8 expects. What would change your mind is a neurological deficit, which would move the pathway to a different, more urgent route.`,
          next: 'exam-found'
        },
        {
          label: 'Test lumbar range of movement, do a straight-leg raise, and check reflexes, power and sensation in both legs',
          rating: 'good',
          feedback: `This neurological and mechanical examination is a necessary part of any back assessment, and it rules out a nerve root problem. But it only asks whether a disc or nerve is the cause. It will probably be normal, and without looking at the heels, skin and eyes you could finish a normal examination and conclude there is nothing to find.`,
          next: 'exam-found'
        },
        {
          label: 'Defer the examination and arrange a lumbar spine X-ray and a routine physiotherapy review first',
          rating: 'poor',
          feedback: `Imaging before examination treats the film as a substitute for thinking. NICE advises against routine imaging for non-specific low back pain, because degenerative change is common and does not explain pain. Another physiotherapy course repeats a treatment that has already failed.`,
          next: 'c-exam'
        }
      ],
      reasoning: `I expect the back examination to be unremarkable or only mildly restricted, and I do not want a normal spine to reassure me. In early axial spondyloarthritis, spinal movement and chest expansion are often still normal, especially in women, so a normal Schober&rsquo;s test lowers the odds only slightly. What nudges the probability up is finding a second feature elsewhere: a tender enthesis, a psoriatic patch or a past eye problem. I do a quick neurological check at the same time, because new neurology would change everything.`
    },
    {
      id: 'c-exam',
      type: 'presentation',
      tone: 'consequence',
      label: 'The film comes back',
      text: `The lumbar spine X-ray is reported two weeks later as &ldquo;mild L5/S1 disc space narrowing, within normal limits for age&rdquo;. Hannah reads this as proof that her spine is wearing out at 28 and is upset. Nobody has examined her heels or scalp, and she is still waking at 4 am. You examine her properly now.`,
      next: 'exam-found'
    },
    {
      id: 'exam-found',
      type: 'presentation',
      label: 'Examination',
      text: `Blood pressure 118/72, pulse 70, BMI 23.<br><br>
<ul>
<li>Normal gait. Lumbar flexion slightly reduced (modified Schober&rsquo;s 4.5 cm). Chest expansion 5 cm, normal.</li>
<li>Pressure over the right sacroiliac joint and a pelvic compression test reproduce her buttock pain.</li>
<li>Tender at the <strong>insertion of the right Achilles tendon</strong> and the origin of the plantar fascia on the right.</li>
<li>Straight-leg raise negative, reflexes, power and sensation normal in both legs.</li>
<li><strong>Scalp:</strong> well-defined silvery, scaly plaques behind both ears and along the hairline. She had thought it was dandruff. No nail pitting.</li>
<li>Eyes white and comfortable. No joint swelling and no dactylitis.</li>
</ul>`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'A colleague says: &ldquo;Twenty-eight, on her feet all day, normal neurology. It is mechanical.&rdquo; Which features of her story argue against that? And which features would instead have made you worry about infection, cancer or fracture?',
      reveal: `<strong>Against &ldquo;mechanical&rdquo;: features of inflammatory back pain</strong>
<ul>
<li>Onset before 40 (NICE uses 45) and creeping, without injury.</li>
<li>Pain for more than 3 months.</li>
<li>Morning stiffness of more than about 30 minutes.</li>
<li>Better with movement and worse with rest. Mechanical pain is usually the other way round.</li>
<li>Waking in the second half of the night, relieved by getting up.</li>
<li>Pain that alternates between the buttocks.</li>
<li>A good response to NSAIDs within a day or two.</li>
</ul>
Each feature is imperfect on its own. A cluster is much more useful. The supporting features here are heel enthesitis, probable scalp psoriasis and a mother with psoriasis. Look for uveitis, inflammatory bowel disease and dactylitis too.<br><br>
<strong>Red flags that point somewhere else</strong>
<ul>
<li><strong>Cancer or myeloma:</strong> a past cancer, unexplained weight loss, pain that is constant, progressive and not relieved by any position, age over 50 at onset, or thoracic pain.</li>
<li><strong>Infection (discitis, osteomyelitis, epidural abscess):</strong> fever, injecting drug use, immunosuppression, recent bacteraemia or a recent spinal procedure.</li>
<li><strong>Fracture:</strong> trauma, osteoporosis, long-term steroids, or an older patient with a sudden severe onset.</li>
<li><strong>Nerve compression:</strong> progressive leg weakness, or <strong>saddle numbness, urinary retention or bowel incontinence</strong>, which is a same-day emergency (cauda equina syndrome). Tell every patient with back pain to seek urgent help if these appear.</li>
</ul>
Hannah has none of these. That is not the same as saying the pain is benign: the absence of red flags only makes dangerous causes less likely. It is also true that the more of the inflammatory features she has, the less a mechanical label fits.`,
      next: 'ix-q'
    },
    {
      id: 'ix-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which tests will help you now?',
      options: [
        {
          label: 'CRP and FBC, HLA-B27, an AP pelvis X-ray, and refer to rheumatology now on the strength of the history',
          rating: 'best',
          feedback: `A pelvic film is the first imaging test for the sacroiliac joints and costs little. CRP and HLA-B27 add modest information, and the FBC makes sure nothing else is going on. The key is that you refer on the clinical picture and do not wait for results, because the history is what carries the diagnosis and the results cannot rule it out. What would change your mind is a high CRP with fever or weight loss, which would send you down the infection or malignancy route.`,
          next: 'results'
        },
        {
          label: 'CRP and FBC and an AP pelvis X-ray, then decide about rheumatology referral when you have the results',
          rating: 'good',
          feedback: `The tests are sensible. But a normal CRP and normal X-ray are exactly what you expect in early disease. Making referral wait on them gives a normal result the power to veto a suspicious history, and adds a few weeks to a diagnosis that has already taken years.`,
          next: 'results'
        },
        {
          label: 'ANA, ENA, rheumatoid factor and anti-CCP as an autoimmune screen, plus CRP and FBC',
          rating: 'poor',
          feedback: `This is an indiscriminate panel. None of these antibodies are associated with spondyloarthritis. A low-titre ANA is common in healthy young women and will not help, and rheumatoid factor and anti-CCP are negative in this condition. A positive result only causes confusion. Choose tests that answer a specific question.`,
          next: 'c-ix-panel'
        },
        {
          label: 'An MRI of the lumbar spine, to look for a disc problem that explains her pain',
          rating: 'poor',
          feedback: `The lumbar spine is the wrong place to look. Disc bulges are very common in symptom-free adults, so the scan is likely to show something that does not explain her pain, and it would not show the sacroiliac joints well. This is ordering a test because it is available and not because it answers the question.`,
          next: 'c-ix-mri'
        }
      ],
      reasoning: `My pre-test probability of axial spondyloarthritis has gone from a few per cent to a figure I would call substantial: several inflammatory features, heel enthesitis, probable psoriasis and a family history. The tests I choose are weak in different ways. A normal CRP is found in many people with active disease, so I expect nothing from it. An X-ray changes late, usually years after onset. HLA-B27 is carried by a small but real minority of the general population and has to be read in context. So I do not depend on any of them: I refer on the pattern and let rheumatology choose the decisive test.`
    },
    {
      id: 'c-ix-panel',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two weeks later',
      text: `The results come back. <strong>ANA 1:80</strong> (weakly positive), ENA negative, rheumatoid factor and anti-CCP negative. Hannah has already searched for the ANA result online and is frightened she has lupus. You spend a long phone call explaining that a low-titre ANA is common in healthy young women. The panel did not answer the question of whether her back pain is inflammatory, and you have not yet sent the tests that could. You do that now.`,
      next: 'results'
    },
    {
      id: 'c-ix-mri',
      type: 'presentation',
      tone: 'consequence',
      label: 'Three weeks later',
      text: `The lumbar MRI shows a small <strong>L5/S1 disc bulge</strong> without nerve root compression. The report comments that this is a common finding. Hannah has heard the words &ldquo;disc bulge&rdquo; and asks whether she needs surgery. The sacroiliac joints were not imaged properly, and the scan has neither explained her pain nor excluded sacroiliitis. You send the tests that matter now.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Results',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>CRP</td><td>3 mg/L</td><td>&lt;5</td></tr>
<tr><td>Haemoglobin</td><td>131 g/L</td><td>115&ndash;165</td></tr>
<tr><td>White cell count</td><td>6.8 &times; 10&#8313;/L</td><td>4&ndash;11</td></tr>
<tr><td>Platelets</td><td>276 &times; 10&#8313;/L</td><td>150&ndash;400</td></tr>
<tr><td>Ferritin</td><td>17 &micro;g/L</td><td>15&ndash;200</td></tr>
<tr><td><strong>HLA-B27</strong></td><td><strong>Positive</strong></td><td></td></tr>
</table>
AP pelvis X-ray: <strong>sacroiliac joints normal</strong>. Hips normal.`,
      next: 'interp-q'
    },
    {
      id: 'interp-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'How do you read these results?',
      options: [
        {
          label: 'Normal CRP and film do not exclude it, a positive HLA-B27 does not confirm it; ask for an MRI of the sacroiliac joints',
          rating: 'best',
          feedback: `Each result is limited. A normal CRP is common in early axial disease. A normal X-ray is expected, because radiographic change lags years behind inflammation. HLA-B27 is carried by roughly one in twelve people of white European ancestry, most of whom never develop spondyloarthritis, so a positive result supports the diagnosis but cannot make it, and a negative one would not have excluded it. MRI of the sacroiliac joints (STIR sequences) shows active inflammation, which is why it is the test that settles the question. What would change your mind is a normal MRI with a persuasive alternative cause.`,
          next: 'mri-result'
        },
        {
          label: 'Refer to rheumatology with the results and leave the choice of any further test to them, and ask her to continue physiotherapy',
          rating: 'good',
          feedback: `Referral is right, and rheumatology will arrange the MRI. But the referral does not say what you think or what you are asking for, so it may be triaged as routine. A referral that names the suspected diagnosis and the test that will settle it is processed faster, and the delay matters in a condition that has already been missed for five months.`,
          next: 'c-interp-delay'
        },
        {
          label: 'HLA-B27 is positive and the film is unclear, so this is ankylosing spondylitis; ask for biologic treatment',
          rating: 'poor',
          feedback: `This treats a supporting test as a diagnostic one. A positive HLA-B27 is common in people without the disease, and a normal X-ray means she does not have radiographic disease. Biologics are never started without imaging or objective evidence of active disease, and a referral asking for them without that evidence will be sent back.`,
          next: 'c-interp-delay'
        },
        {
          label: 'CRP and X-ray are normal, so this is mechanical back pain; reassure her, continue physiotherapy and review if no better',
          rating: 'unsafe',
          feedback: `This is false reassurance from normal tests, and it is the commonest way axial spondyloarthritis is missed. The history is what carries the diagnosis, and neither the CRP nor an early X-ray has the sensitivity to overrule it. She will return months later with more symptoms, having lost working time and possibly spinal mobility.`,
          next: 'c-interp-unsafe'
        }
      ],
      reasoning: `Before the results I thought axial spondyloarthritis was more likely than not. None of these tests could have changed that much. CRP is raised in only a proportion of patients, particularly in non-radiographic disease. A pelvic film is usually normal for years. HLA-B27 adds supporting weight, but in a person who already has several features it moves me from probable to more probable, not to certain. Only an MRI showing active sacroiliitis changes what I do next. A normal MRI would make me rethink, and I would still weigh the history heavily.`
    },
    {
      id: 'c-interp-delay',
      type: 'presentation',
      tone: 'consequence',
      label: 'Waiting',
      text: `The referral is triaged as routine, and rheumatology reply that HLA-B27 and a normal film cannot support any treatment decision, and that an MRI of the sacroiliac joints will be requested at the first appointment. The appointment is almost four months away. Hannah has meanwhile been off work for several Saturdays and her money is tight. She keeps taking ibuprofen from the chemist, and it is only partly helping. The wait is long, but eventually the appointment comes.`,
      next: 'mri-result'
    },
    {
      id: 'c-interp-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Five months later',
      text: `Hannah is back. She was signed off by a walk-in centre for two weeks and has lost her Saturdays and then a second client list. She wakes most nights and is stiff for two hours in the morning. She tells you, quietly, that she has stopped believing anyone. You re-read your own notes from the first consultation, where the features were all written down. You refer her to rheumatology, with a letter that names the diagnosis and asks for MRI. The delay has been five months, on top of the five before.`,
      next: 'mri-result'
    },
    {
      id: 'mri-result',
      type: 'presentation',
      tone: 'results',
      label: 'Rheumatology clinic letter',
      text: `<strong>MRI of the sacroiliac joints (STIR sequences):</strong> bone marrow oedema in both sacroiliac joints, mainly on the iliac side, in a pattern typical of <strong>active sacroiliitis</strong>. No erosions or fat deposition yet.<br><br>
The consultant&rsquo;s impression: <strong>axial spondyloarthritis, non-radiographic</strong>. She has inflammatory back pain, sacroiliitis on MRI, HLA-B27, heel enthesitis, probable psoriasis, and a good response to NSAIDs. The X-ray is normal now but may change over time.<br><br>
The letter recommends a trial of a full-dose NSAID with gastroprotection, a structured exercise programme with a specialist physiotherapist, and a referral to dermatology for the scalp. It asks you to prescribe the NSAID and to review her in 2&ndash;4 weeks. Hannah is relieved to have a name for it and angry about how long it took.`,
      next: 'rx-q'
    },
    {
      id: 'rx-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'You are asked to start the NSAID. What do you do?',
      options: [
        {
          label: 'Check ulcer, asthma, kidney, blood pressure and heart risks and her pregnancy plans; then prescribe naproxen, a PPI and stop ibuprofen',
          rating: 'best',
          feedback: `This is what a safe NSAID prescription looks like. You ask about ulcer, asthma and aspirin sensitivity, kidney function, hypertension and cardiovascular risk, and you stop the over-the-counter ibuprofen she was already taking, because two NSAIDs together add harm and no benefit. Naproxen at a full anti-inflammatory dose is a standard choice, and a PPI covers regular long-term use. Because she hopes to have a baby soon, you tell her to plan ahead with you and with rheumatology: NSAIDs are generally avoided in pregnancy and may not be suitable when trying to conceive. Review the dose, the response and the blood pressure in 2&ndash;4 weeks.`,
          next: 'twist'
        },
        {
          label: 'Check ulcer history, asthma and blood pressure; then prescribe naproxen at full dose with a PPI and tell her to stop ibuprofen',
          rating: 'good',
          feedback: `This covers the commonest risks and prevents the double NSAID. It leaves out two things: a baseline of kidney function and cardiovascular risk, and the conversation about pregnancy. She told you she is hoping to conceive within the year. It is easy to forget that the first prescription of a long-term treatment is a point to talk about reproductive plans, and a biologic choice may later depend on it.`,
          next: 'twist'
        },
        {
          label: 'Prescribe naproxen at full dose with a PPI, and say she can keep the ibuprofen for flares',
          rating: 'unsafe',
          feedback: `Taking two NSAIDs at once raises the risk of gastrointestinal bleeding and acute kidney injury without improving pain control. She told you she takes ibuprofen most days. Skipping the check, and leaving the over-the-counter drug in place, is how patients end up on two.`,
          next: 'c-rx-unsafe'
        }
      ],
      reasoning: `NSAIDs are the first-line drug for axial spondyloarthritis and a good response is part of the diagnosis, so I want her to be able to use them well. The harm comes from ulcers, renal injury and cardiovascular events, and the risk scales with dose, duration and combination. A young woman with no history is at low risk, but I still check, because the check takes a minute and the prescription may last for years. I also think about the next ten years: her family plans, her smoking and her eyes will all shape what we do after this prescription.`
    },
    {
      id: 'c-rx-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Ten days later',
      text: `Hannah rings with severe indigestion, nausea and very little urine. She has been taking naproxen twice daily <em>and</em> ibuprofen most days. Her creatinine, which was 62 &micro;mol/L, is now <strong>96</strong>, and she has dark stool. Her haemoglobin is stable and she is seen the same day. All NSAIDs are stopped for ten days, a PPI is continued, and her kidney function recovers. She has lost the time she needed, her back is worse, and she is frightened of tablets. You restart naproxen alone with a PPI once she is well.`,
      next: 'twist'
    },
    {
      id: 'twist',
      type: 'presentation',
      tone: 'danger',
      label: 'A few weeks later, Monday 08:20',
      text: `The NSAID works: Hannah is about 70% better, sleeps through most nights and is back at work. This morning she rings the surgery. She woke in the night with a <strong>red, painful right eye</strong> and light has hurt it since. Her vision is blurred &ldquo;like looking through a smeared window&rdquo;. Dan had conjunctivitis last week, and the pharmacist suggested chloramphenicol drops. &ldquo;It&rsquo;s just that, isn&rsquo;t it?&rdquo;<br><br>
You see her at 09:00. There is no discharge and no gritty sensation, but a deep ache around the eye. The redness is worst in a ring around the cornea. The right pupil is smaller than the left. Visual acuity: right 6/12, left 6/5. She does not wear contact lenses.`,
      next: 'esc-q'
    },
    {
      id: 'esc-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'What do you do?',
      options: [
        {
          label: 'Explain this is probably uveitis linked to her back condition, and send her to eye casualty today with a letter',
          rating: 'best',
          feedback: `A painful red eye with photophobia, blurred vision, a small pupil and ciliary redness is acute anterior uveitis until proven otherwise, and it is more likely in someone with spondyloarthritis. It needs a slit-lamp examination and treatment with steroid and dilating drops the same day, to prevent adhesions, raised eye pressure and permanent loss of vision. A letter saying &ldquo;axial SpA, HLA-B27 positive&rdquo; speeds the assessment. What would change your mind is a slit-lamp examination showing a different cause, such as a corneal ulcer.`,
          next: 'uveitis-result'
        },
        {
          label: 'Ask her to see her community optometrist today, with a note, and to go to eye casualty if they advise it',
          rating: 'good',
          feedback: `An urgent optometrist assessment is a legitimate route in many areas, and the optometrist may spot the signs. But it adds a step when the likely diagnosis is clear. A high-street practice may not have a slit lamp or access to the right drops, and every hour without treatment leaves the iris more likely to stick to the lens.`,
          next: 'uveitis-result'
        },
        {
          label: 'Reassure her it is viral conjunctivitis from Dan, advise lubricating drops and cold compresses, and review in a week',
          rating: 'poor',
          feedback: `This accepts the household story as the answer. Viral conjunctivitis causes gritty, watery eyes without a small pupil, deep pain or photophobia, and vision is normal. Pain, light sensitivity and blurred vision are warning signs that the cause is not on the surface of the eye. A week is long enough to do lasting harm.`,
          next: 'c-esc'
        },
        {
          label: 'Prescribe chloramphenicol drops for presumed bacterial conjunctivitis and review in 48 hours if no better',
          rating: 'unsafe',
          feedback: `Chloramphenicol treats infection, so it has no effect on uveitis. This is the classic missed diagnosis: an inflamed, painful eye with reduced vision is labelled conjunctivitis. Two days of untreated uveitis can allow adhesions to form, the eye pressure to rise, and vision to be permanently reduced. The worrying features were pain, photophobia, blurred vision and a small pupil, none of which fit conjunctivitis.`,
          next: 'c-esc'
        }
      ],
      reasoning: `Conjunctivitis is common, uveitis is not, and the base rate argues for the commoner diagnosis. But Hannah already carries a risk factor: HLA-B27-positive axial spondyloarthritis is the commonest systemic association of acute anterior uveitis. The features differ in kind, not degree. Conjunctivitis itches, waters and does not hurt behind the eye or reduce vision. Uveitis hurts, causes photophobia and blurs vision. When a feature does not fit the benign label, I stop applying it. Reduced acuity in a red eye is an indication for same-day ophthalmology without any further thought.`
    },
    {
      id: 'c-esc',
      type: 'presentation',
      tone: 'danger',
      label: 'Two days later',
      text: `The drops (or the lubricant) have not helped. The eye is more painful, she cannot tolerate the light in the waiting room and her vision is worse. She comes back to the surgery and you send her straight to eye casualty. The ophthalmologist notes that part of the iris has begun to stick to the lens, which is why the pupil has become irregular. This is exactly the complication that early treatment is meant to prevent.`,
      next: 'uveitis-result'
    },
    {
      id: 'uveitis-result',
      type: 'presentation',
      tone: 'results',
      label: 'Eye casualty',
      text: `Slit-lamp examination shows cells and flare in the anterior chamber of the right eye with no corneal ulcer. The diagnosis is <strong>acute anterior uveitis</strong>. She is started on intensive steroid drops and a dilating drop, which also loosens any adhesions, and has a follow-up appointment in the eye clinic within days. Her vision recovers to normal over the next fortnight.<br><br>
She is told that uveitis often recurs and that she must come back the <strong>same day</strong> if it does.<br><br>
<strong>Three months later at the rheumatology review:</strong> Hannah has now tried two different NSAIDs, each at full dose for several weeks. Both helped, but she still has about 45 minutes of morning stiffness, she wakes some nights, and she has had a second episode of uveitis, this time in the left eye. She went straight to eye casualty. She is still smoking.`,
      next: 'manage-q'
    },
    {
      id: 'manage-q',
      type: 'decision',
      stage: 'Manage',
      prompt: 'What is the best plan?',
      options: [
        {
          label: 'Refer her for biologic assessment, continue exercise, use the NSAID as needed, and offer help to stop smoking',
          rating: 'best',
          feedback: `Disease that is still active after two NSAIDs at full dose, with recurrent uveitis, meets the usual threshold for specialist consideration of a biologic. An anti-TNF or an IL-17 inhibitor is the next step, chosen by the specialist team. Exercise remains central throughout. Smoking is linked to worse disease and worse spinal outcome, so it is worth raising at every contact. What would change your mind is a very good response to exercise and a quiet eye, which would argue for waiting.`,
          next: 'comm-q'
        },
        {
          label: 'Continue the NSAID, add co-codamol for the stiffness at night, and review her in six months',
          rating: 'good',
          feedback: `Analgesia is reasonable for the short term and may ease the night pain. But a six-month wait with persistent disease and recurrent uveitis is too passive. Opioids add constipation and drowsiness without treating the inflammation. The next step should not be left to drift.`,
          next: 'c-manage'
        },
        {
          label: 'Add methotrexate, as is done for rheumatoid arthritis, and review its effect at three months',
          rating: 'poor',
          feedback: `Methotrexate has not been shown to help axial disease. This is a trap that comes from applying the rheumatoid arthritis pathway to a different condition. DMARDs such as methotrexate may be useful for peripheral arthritis, but not for the spine and sacroiliac joints. She would take three months of a drug with side effects and no benefit.`,
          next: 'c-manage'
        },
        {
          label: 'Start prednisolone 10 mg daily to settle the stiffness and the eye flares until the next review',
          rating: 'poor',
          feedback: `Systemic steroids are not effective for axial disease and carry real long-term harm, including bone loss. They do not treat the cause, and they would mask her symptoms while making the disease harder to assess. Eye flares are best treated by the eye team.`,
          next: 'c-manage'
        }
      ],
      reasoning: `The pathway is sequential and I can see where she is on it. Exercise and NSAIDs are first line. If two NSAIDs at full dose for a few weeks each have not controlled her disease, I move to a biologic, and I would do so earlier here because the uveitis is recurring. I do not use methotrexate or long-term oral steroids for axial disease. Smoking is the other lever I have, and it is worth mentioning because the evidence suggests it makes disease worse. I would also remember that her plans for pregnancy influence which biologic the specialist chooses.`
    },
    {
      id: 'c-manage',
      type: 'presentation',
      tone: 'consequence',
      label: 'Three months later',
      text: `Hannah returns. The change has not helped her back, which still stiffens for most of the morning, and she has had another eye flare. She has lost more Saturdays and has begun to dread work. The consultant is not surprised, and says gently that the delay has cost her another quarter of a year of poorly controlled disease. The plan is now moved on to the biologic assessment.`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'Hannah asks: &ldquo;Why did it take so long? Is this forever? Will I end up in a wheelchair? And can I still have a baby?&rdquo; How do you answer?',
      options: [
        {
          label: 'Name it, say that the delay is common and not her fault, that it is lifelong but usually well controlled, and cover work, eyes and pregnancy',
          rating: 'best',
          feedback: `She asked four questions, and each deserves a straight answer. The delay is real, with an average of several years for axial spondyloarthritis and longer in women, and acknowledging it validates her. The condition is lifelong, but with exercise and modern treatments most people lead full lives. Most do not end up in a wheelchair. Pregnancy is possible, with planning, because some medicines need changing. Check what she has understood by asking her to say it back. What would change your approach is a question showing that she is worried about something else, such as money.`,
          next: 'conclusion'
        },
        {
          label: 'Name it and explain the NSAIDs, exercise and biologics; suggest she raises work and pregnancy questions at a later visit',
          rating: 'good',
          feedback: `The core is right and it is clear. But she asked about the baby and about the wheelchair, and leaving those for later will leave her worrying in the meantime. People often remember only the first part of a consultation, so it is worth answering the question she asked first, even if briefly.`,
          next: 'conclusion'
        },
        {
          label: 'Explain that the full name is ankylosing spondylitis and that over the years the spine can fuse, so she should plan for that',
          rating: 'poor',
          feedback: `The facts are not wrong, but the message is. Most people with axial spondyloarthritis, especially those treated early, do not develop significant spinal fusion. A bleak message delivered without context frightens her, and leaves out the part that is most helpful: that treatment makes a large difference.`,
          next: 'c-comm'
        },
        {
          label: 'Tell her the treatment will cure it within a year, and that she can then stop all tablets and go back to normal',
          rating: 'poor',
          feedback: `This is kind but untrue. Axial spondyloarthritis is a long-term condition, and treatment controls it without curing it. False reassurance leads to people stopping treatment when they feel well, and to anger when symptoms return.`,
          next: 'c-comm'
        }
      ],
      reasoning: `She is angry, grieving for five lost months, and frightened, and all of that is legitimate. I acknowledge the delay first because she will not hear anything else until I do. Then I give a hopeful but honest picture: it is lifelong, it is treatable, and exercise is as important as tablets. I ask her to tell me what she has taken in, I give her the details of the National Axial Spondyloarthritis Society and a number to ring for flares, and I tell her again what to do about a red eye. I also offer a fit note and a conversation about adjusting her working day, because her income is part of her health.`
    },
    {
      id: 'c-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'The next appointment',
      text: `Hannah returns to the surgery. She has either been lying awake imagining herself in a wheelchair, or has decided that she can stop her exercises because she is &ldquo;going to be cured&rdquo;. She is also confused about why the eye drops and the tablets are different. You sit down with her again, and you start with her questions this time. She leaves with a written plan, the number for the rheumatology helpline, and a clearer sense of what to expect.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: axial spondyloarthritis (non-radiographic, with acute anterior uveitis).</strong><br><br>
Hannah started a full-dose NSAID with a PPI, stopped taking ibuprofen alongside it, and began a structured exercise programme with a specialist physiotherapist. After her second uveitis episode and inadequate response to two NSAIDs, she was assessed for a biologic by the specialist team. She was supported to stop smoking, referred to dermatology for scalp psoriasis, and counselled about pregnancy planning.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Young adult, creeping onset, morning stiffness, relief with movement, night waking and a good NSAID response: inflammatory back pain, not mechanical. Women are diagnosed later than men.</li>
<li>Screen for red flags. Their absence does not prove benign pain, but their presence changes the pathway.</li>
<li>A normal CRP, a normal early X-ray and a positive HLA-B27 each fail to decide the diagnosis. MRI of the sacroiliac joints is the test.</li>
<li>A painful red eye with photophobia and reduced vision is uveitis until proven otherwise, and needs same-day ophthalmology.</li>
<li>Exercise and full-dose NSAIDs are first line, with a safety check and no duplicate NSAID. Methotrexate does not work for axial disease. Biologics come after NSAIDs fail.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;You have a form of inflammatory arthritis that mainly affects the base of the spine and the pelvis. It is a long-term condition, but exercise and the right medicines control it for most people, and you can lead a full life. It took too long to find, which is common and not your fault.&rdquo;<br><br>
<strong>Safety-netting:</strong> any red, painful or light-sensitive eye needs the eye department the same day. New leg weakness, numbness around the genitals or buttocks, or a change in bladder or bowel function needs emergency help immediately. Stop NSAIDs and seek advice if she has black stool, vomiting blood or very little urine.`,
      keyLearning: [
        'Inflammatory back pain is a cluster: onset before 45, creeping, morning stiffness, better with movement and worse with rest, night waking, alternating buttock pain and a good NSAID response.',
        'Axial spondyloarthritis is underdiagnosed in women, partly because the textbook picture is a young man with a stiff spine.',
        'A normal CRP and a normal early X-ray do not exclude it. HLA-B27 is common in the general population, so a positive result does not diagnose and a negative one does not exclude. MRI of the sacroiliac joints is the test.',
        'A painful red eye with photophobia, blurred vision and a small pupil is acute anterior uveitis, and needs same-day ophthalmology. It is not conjunctivitis.',
        'First line is full-dose NSAIDs after a safety check, with exercise. Never combine two NSAIDs. Methotrexate does not help axial disease.',
        'If two NSAIDs fail, or the eye disease recurs, move to a biologic (anti-TNF or IL-17 inhibitor). Smoking worsens outcomes.'
      ],
      relatedTests: ['CRP and FBC', 'HLA-B27', 'AP pelvis X-ray', 'MRI sacroiliac joints (STIR)', 'Slit-lamp examination', 'Renal function and blood pressure before NSAIDs'],
      goingFurther: `<strong>Classification:</strong> the ASAS criteria for axial spondyloarthritis apply to people with back pain for more than 3 months who started before 45. The <em>imaging arm</em> requires sacroiliitis on MRI (or definite radiographic sacroiliitis) plus at least one spondyloarthritis feature. The <em>clinical arm</em> requires HLA-B27 plus at least two other features. Features include inflammatory back pain, arthritis, enthesitis, uveitis, dactylitis, psoriasis, Crohn&rsquo;s disease or colitis, a good response to NSAIDs, family history, HLA-B27 and a raised CRP. These are classification criteria for research, and clinicians use them to structure diagnosis.<br><br>
<strong>Radiographic versus non-radiographic:</strong> the same disease is called non-radiographic axial spondyloarthritis when the X-ray is normal, and ankylosing spondylitis when definite sacroiliitis is visible on X-ray. Many people with non-radiographic disease progress, and the two groups have similar burdens of symptoms. Structural damage is scored with tools such as the mSASSS, which counts syndesmophytes (bony bridges between vertebrae) and other changes in the cervical and lumbar spine.<br><br>
<strong>NICE:</strong> NICE guideline NG65 on spondyloarthritis advises thinking about axial spondyloarthritis in people with low back pain that began before 45 and lasted more than 3 months, asking about features, and referring suspected cases to rheumatology. NG59 on low back pain reminds you to reconsider the diagnosis if pain persists, and not to image routinely. NICE technology appraisals cover anti-TNF and IL-17 drugs for people whose disease remains active after NSAIDs. The exact criteria for biologic eligibility are set by the technology appraisals and by local policy.<br><br>
<strong>Eyes and biologics:</strong> monoclonal anti-TNF antibodies reduce recurrent uveitis more than etanercept does, which can influence the choice when the eye disease is active.`
    }
  ]
};
