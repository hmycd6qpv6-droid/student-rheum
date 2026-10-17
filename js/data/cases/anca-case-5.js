/* anca-case-5: The Carer's Shoulders */

export default {
  id: 'anca-case-5',
  title: 'The Carer’s Shoulders',
  summary: '74-year-old carer with four weeks of aching, stiff shoulders and hips',
  setting: 'GP surgery',
  difficulty: 'intermediate',
  curriculum: ['RH-PMR', 'EM-GCA', 'PR-STIFF', 'IX-BLOODS', 'TX-MEDS', 'TX-BONE', 'LO4', 'LO7'],
  objectives: [
    'Recognise polymyalgia rheumatica and name the conditions that mimic it',
    'Send the right blood tests before starting corticosteroids, and explain why',
    'Prescribe prednisolone for polymyalgia rheumatica with a taper and the safety measures it needs',
    'Recognise giant cell arteritis with threatened vision and start high-dose steroids without waiting for a test',
    'Give a clear SBAR handover and honest safety-netting to a frightened patient'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'GP surgery, Tuesday 11:30',
      text: `<strong>Mrs Maureen Cutler, 74, retired school cook</strong><br><br>
She is the full-time carer for her husband Ken, who has Parkinson&rsquo;s disease and early dementia, and who is waiting in the car with their daughter Julie, who has driven up for the day. Mrs Cutler has been well all her life and is rarely seen at the surgery.<br><br>
For about four weeks her shoulders and hips have been aching and stiff. It came on over a few days. She cannot get out of bed without rolling out sideways, struggles to put her cardigan on and has had to stop lifting Ken from his chair. She is exhausted and has not been sleeping because turning over hurts. Over-the-counter ibuprofen has not helped. Her main worry is: &ldquo;Who looks after Ken if I can&rsquo;t manage?&rdquo;<br><br>
She takes amlodipine for blood pressure and atorvastatin 20 mg, which she has taken for three years. She stopped smoking thirty years ago and does not drink alcohol.`,
      next: 'hx-q'
    },
    {
      id: 'hx-q',
      type: 'decision',
      stage: 'History',
      prompt: 'Which questions will help most?',
      options: [
        {
          label: 'Ask where it hurts, how long she is stiff, whether she is weak, fever or weight loss, headache, scalp, jaw or vision symptoms, and about the statin',
          rating: 'best',
          feedback: `You establish the pattern (symmetrical shoulder and hip girdle pain with prolonged morning stiffness), check whether it is pain or true weakness, and screen for the systemic features that separate polymyalgia rheumatica from its mimics. Asking about headache, scalp tenderness, jaw pain and vision at this stage is important. Giant cell arteritis often overlaps with PMR, and you want a baseline you can compare with later. You also ask about the statin, which can cause muscle aches. What would change your mind is a weight loss or fever that is not explained, or unilateral pain.`,
          next: 'hx-found'
        },
        {
          label: 'Ask about the pain distribution, how long the morning stiffness lasts, whether she feels weak, and her weight and medicines',
          rating: 'good',
          feedback: `This builds the polymyalgic pattern and checks weight and medicines, so it is an efficient history. The gap is that you did not ask about headache, scalp, jaw or vision. Giant cell arteritis commonly overlaps with PMR and you want to know that it is absent today. The value of the baseline is that a new symptom can be recognised as new.`,
          next: 'hx-found'
        },
        {
          label: 'Ask about falls, sleep, mood and how she is coping as Ken&rsquo;s carer, since carers in their seventies are often exhausted and low',
          rating: 'poor',
          feedback: `Carer strain is real and deserves attention, but it does not cause four weeks of symmetrical pain and prolonged morning stiffness. This is attributing physical symptoms to psychosocial stress too early. Ask about her coping after you have worked out what is wrong with her body.`,
          next: 'c-hx'
        },
        {
          label: 'Ask about injury, overhead activity and use of her arms, since lifting her husband could have strained her shoulders',
          rating: 'poor',
          feedback: `Lifting is a plausible cause of shoulder pain, but it would not explain symmetrical pain in the hips as well, stiffness that lasts an hour, or fatigue. Anchoring on a mechanical cause because of her job as a carer means you miss the pattern.`,
          next: 'c-hx'
        }
      ],
      reasoning: `The pre-test probability of PMR in a 74-year-old with symmetrical shoulder and hip girdle pain, prolonged morning stiffness and fatigue is high: PMR is among the commonest inflammatory conditions of older adults. But PMR is a diagnosis of exclusion, and the history is where I find out whether anything fits poorly. A fever, weight loss, bone pain or an asymmetrical presentation would send me to cancer, infection or another cause. I also use the history to record, before I treat, that she has no GCA symptoms. A baseline matters, because the same question asked in six weeks may get a different answer.`
    },
    {
      id: 'c-hx',
      type: 'presentation',
      tone: 'consequence',
      label: 'At the door',
      text: `Julie helps her mother to stand. &ldquo;Tell the doctor about the hips, Mum.&rdquo; Mrs Cutler says it is both shoulders, both hips and her thighs, that she cannot raise her arms to brush her hair, and that she has been stiff for over an hour each morning. You sit her back down. That is a much more useful history than the one you took, and it was only obtained because Julie prompted her.`,
      next: 'hx-found'
    },
    {
      id: 'hx-found',
      type: 'presentation',
      label: 'The history, completed',
      text: `<ul>
<li>Symmetrical aching in both shoulders, upper arms, hips and thighs. It began over a few days and has been getting worse for about four weeks.</li>
<li><strong>Morning stiffness for about 45 minutes to an hour</strong>, and again after sitting for a while. She struggles to get out of bed, to dress and to get up from a low chair.</li>
<li>The problem is pain and stiffness. She does not feel her arms and legs are weak once she gets going.</li>
<li>Marked tiredness, low mood and poor sleep. Slight night sweats. She thinks she has lost about 2 kg. No fever.</li>
<li><strong>No headache, no scalp tenderness, no jaw pain on chewing, no visual symptoms.</strong> No rash, dry eyes or mouth, cough, or bone pain. No urinary symptoms.</li>
<li>Atorvastatin for three years without muscle symptoms until now. Ibuprofen from the chemist for the past fortnight with no benefit.</li>
<li>Julie lives 90 minutes away. Ken&rsquo;s care is entirely Mrs Cutler&rsquo;s, and there is no formal support.</li>
</ul>`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'How will you examine her?',
      options: [
        {
          label: 'Compare active and passive shoulder and hip movement, test power with encouragement, feel the temporal arteries, and check blood pressure and the hands',
          rating: 'best',
          feedback: `This is the examination that tests the PMR diagnosis: pain-limited active movement with fuller passive movement, normal power once pain is overcome, and no synovitis in the hands or wrists that would suggest rheumatoid arthritis. Palpating the temporal arteries and recording a blood pressure takes seconds and sets a baseline for GCA. Ask for permission, offer a gown, and give her time on and off the couch because she is stiff. What would change your mind is true weakness with wasting, or definite synovitis.`,
          next: 'exam-found'
        },
        {
          label: 'Test shoulder and hip range of movement, power and reflexes, and look for swelling in the hands and wrists',
          rating: 'good',
          feedback: `This is a sound examination of the problem. It distinguishes pain from weakness and looks for inflammatory arthritis. Leaving out the temporal arteries and a blood pressure reading means missing a quick baseline for giant cell arteritis, which is the complication you most need to watch for.`,
          next: 'exam-found'
        },
        {
          label: 'Do rotator cuff and impingement tests on both shoulders and a hip examination, then book physiotherapy and offer an NSAID',
          rating: 'poor',
          feedback: `Specific shoulder tests are designed to find a lesion in one shoulder. Positive tests in both shoulders and hips together should make you question the idea of a local cause. This is premature closure on a regional diagnosis, and an NSAID is a poor choice for a 74-year-old with hypertension who has already had no benefit from ibuprofen.`,
          next: 'c-exam'
        }
      ],
      reasoning: `In PMR the examination often looks surprisingly unremarkable, which is part of the diagnosis. Movement is limited by pain at the extremes of range, power is preserved when the patient can be encouraged to push, and there is no wasting. That separates it from myositis, where power is truly reduced. I want to know whether the hands show synovitis, because late-onset rheumatoid arthritis can look like PMR at the start. Temporal artery palpation and blood pressure are quick, and I record them now so that I have something to compare with.`
    },
    {
      id: 'c-exam',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two weeks later',
      text: `Physiotherapy cannot see her for a fortnight. Impingement tests were mildly positive on both sides, which meant nothing. The ibuprofen has again done nothing, and her blood pressure is now higher at 164/92. She is crying in the surgery because she cannot lift Ken. Your trainer asks: &ldquo;Both shoulders, both hips, an hour of morning stiffness at 74. What else were you thinking?&rdquo; You re-examine her properly.`,
      next: 'exam-found'
    },
    {
      id: 'exam-found',
      type: 'presentation',
      label: 'Examination',
      text: `Temperature 37.4&deg;C, pulse 88, blood pressure 146/84.<br><br>
<ul>
<li>Active abduction of both shoulders is limited to about 80 degrees by pain. Passive movement is fuller but painful at the extremes. Hip flexion and rotation are painful bilaterally.</li>
<li><strong>Power is 5/5</strong> in the shoulders and hips when she is encouraged and the movement is supported. Neck flexion is normal. No wasting. Reflexes normal.</li>
<li>No synovitis in the hands, wrists or knees. Grip is normal.</li>
<li>Temporal arteries are palpable and not tender. Scalp not tender. Pulses equal in both arms.</li>
<li>Chest clear, heart sounds normal, abdomen soft. No lymph nodes. Weight 2 kg lower than last year.</li>
</ul>`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'PMR is the leading diagnosis, but it is a diagnosis you reach after excluding other things. What conditions can mimic it? Which features would make you take a different route?',
      reveal: `<strong>Conditions that mimic or overlap with PMR</strong>
<ul>
<li><strong>Late-onset rheumatoid arthritis</strong>, especially seronegative, which can start with shoulder and hip girdle pain. Look for small-joint synovitis, a positive anti-CCP, and a poor or incomplete response to steroids.</li>
<li><strong>Hypothyroidism</strong>, which causes muscle aches and stiffness. Check TSH.</li>
<li><strong>Myeloma and other malignancy</strong> (including lymphoma and solid tumours). Look for anaemia, a raised calcium, renal impairment, bone pain, weight loss and a paraprotein.</li>
<li><strong>Infection</strong>, including endocarditis, discitis and osteomyelitis. Look for fever, a heart murmur, and focal spinal or bone pain.</li>
<li><strong>Statin myopathy</strong> and inflammatory myositis, which cause weakness, with or without a raised CK. Her power is normal and CK is likely to be normal.</li>
<li><strong>Bilateral shoulder osteoarthritis or rotator cuff disease</strong>, and <strong>calcium pyrophosphate disease</strong> (CPPD), which can produce a polymyalgic picture. Mechanical pain does not give an hour of morning stiffness.</li>
<li><strong>Osteomalacia</strong>, with proximal pain and a raised alkaline phosphatase.</li>
<li><strong>Giant cell arteritis</strong>, which is not a mimic but a close relative and can coexist with PMR.</li>
</ul>
<strong>Features that need a different route</strong>
<ul>
<li>Age under 50, unilateral symptoms, or a normal ESR and CRP (unusual in active PMR).</li>
<li>Fever, marked weight loss, night pain or localised bone pain, a murmur, lymphadenopathy, or blood or protein in the urine.</li>
<li>True weakness or wasting, or definite peripheral synovitis.</li>
<li>Headache, scalp tenderness, jaw claudication or any visual symptoms (urgent GCA pathway).</li>
<li>A poor response to treatment once started.</li>
</ul>
Her slight weight loss and mild night sweats are not enough to take her off the PMR route, but they are a reason to look carefully before she starts a steroid.`,
      next: 'ix-q'
    },
    {
      id: 'ix-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which tests do you send before treatment?',
      options: [
        {
          label: 'FBC, U&E, LFT, bone profile, TFT, CK, ESR and CRP, protein electrophoresis, RF and anti-CCP, and a urine dip',
          rating: 'best',
          feedback: `This is the screen recommended before starting steroids for suspected PMR. The ESR and CRP support the diagnosis, and the rest looks for mimics: FBC and calcium for myeloma and malignancy, TFT for hypothyroidism, CK for myositis or statin myopathy, RF and anti-CCP for late-onset rheumatoid arthritis, protein electrophoresis for a paraprotein, and U&E, LFT and urine for baseline organ function and occult disease. A chest X-ray is a reasonable addition if there is any chest or constitutional feature. What would change your mind is an abnormal screen that points to a different diagnosis.`,
          next: 'results'
        },
        {
          label: 'FBC, U&E, ESR and CRP, and start prednisolone when they show a high ESR and CRP',
          rating: 'good',
          feedback: `Raised inflammatory markers support PMR, and the basic blood tests are quick. But they are non-specific: infection, malignancy and rheumatoid arthritis all raise them too, and this panel leaves out the tests that find the mimics. A high ESR in a 74-year-old who is losing weight is a reason to look wider, not a reason to treat.`,
          next: 'c-ix-gap'
        },
        {
          label: 'ANA, ENA, myositis antibodies and ANCA, plus ESR and CRP, as a thorough autoimmune screen',
          rating: 'poor',
          feedback: `This is an indiscriminate autoimmune panel. ANA is positive at low titres in many healthy older adults, and the other antibodies are for conditions that her history and examination do not suggest. It does nothing to look for myeloma, hypothyroidism, infection or late-onset rheumatoid arthritis. Choose tests that answer a question.`,
          next: 'c-ix-gap'
        },
        {
          label: 'Start prednisolone 15 mg today for the classic story and send bloods in a week to document the response',
          rating: 'unsafe',
          feedback: `This is the commonest mistake in PMR. Steroids lower the ESR and CRP within days and relieve symptoms from other causes, including some cancers and rheumatoid arthritis, so a response proves nothing. After a week of prednisolone you cannot tell what her baseline was. Test first, and treat on the results.`,
          next: 'c-ix-steroid'
        }
      ],
      reasoning: `The pre-test probability of PMR is high, perhaps seventy to eighty per cent, but I am about to give a drug that hides the answer. Steroids improve symptoms in many inflammatory and malignant conditions, and that makes the response diagnostic only in a very limited sense. The cheapest moment to find a mimic is before the first dose. I want the full screen on one blood draw and a urine dip, I would arrange a chest X-ray if anything suggested a chest or constitutional problem, and I would be ready to change course if any result did not fit.`
    },
    {
      id: 'c-ix-steroid',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss',
      text: `Your trainer reads your plan before the prescription goes to the pharmacy. &ldquo;Bloods <em>first</em>, today, before the first dose. If she had a paraprotein or an infection, a week of prednisolone would blunt the picture and the markers, and we would be left guessing.&rdquo; You take a full set of blood tests that afternoon and the first dose is delayed by a day. Mrs Cutler goes home sore and not pleased, but the baseline is safe.`,
      next: 'results'
    },
    {
      id: 'c-ix-gap',
      type: 'presentation',
      tone: 'consequence',
      label: 'The gaps',
      text: `Your trainer looks over the results. &ldquo;What about her calcium, her thyroid, her CK and a protein electrophoresis? What about her urine? We have a 74-year-old with weight loss, and none of the usual mimics have been excluded.&rdquo; You send the rest of the screen the next day, and Mrs Cutler has to make a second trip to the surgery, which means finding someone to sit with Ken. The delay is small, but the first dose of steroid has been put off by two days.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Results (taken before any steroid)',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td><strong>ESR</strong></td><td><strong>68 mm/h</strong></td><td>&lt;30</td></tr>
<tr><td><strong>CRP</strong></td><td><strong>47 mg/L</strong></td><td>&lt;5</td></tr>
<tr><td>Haemoglobin</td><td>112 g/L (normocytic)</td><td>115&ndash;165</td></tr>
<tr><td>White cell count</td><td>9.1 &times; 10&#8313;/L</td><td>4&ndash;11</td></tr>
<tr><td>Platelets</td><td>458 &times; 10&#8313;/L</td><td>150&ndash;400</td></tr>
<tr><td>Creatinine / eGFR</td><td>74 &micro;mol/L / 71</td><td>45&ndash;84</td></tr>
<tr><td>Alkaline phosphatase</td><td>148 U/L</td><td>30&ndash;130</td></tr>
<tr><td>ALT</td><td>22 U/L</td><td>&lt;40</td></tr>
<tr><td>Adjusted calcium</td><td>2.31 mmol/L</td><td>2.20&ndash;2.60</td></tr>
<tr><td>TSH</td><td>2.1 mU/L</td><td>0.4&ndash;4.0</td></tr>
<tr><td>CK</td><td>88 U/L</td><td>&lt;170</td></tr>
<tr><td>Protein electrophoresis</td><td>No paraprotein</td><td></td></tr>
<tr><td>RF / anti-CCP</td><td>Negative / negative</td><td></td></tr>
<tr><td>HbA1c</td><td>40 mmol/mol</td><td>&lt;42</td></tr>
<tr><td>Vitamin D (25-OH)</td><td>41 nmol/L</td><td>&gt;50</td></tr>
</table>
Urine dip: no blood and no protein. Chest X-ray: clear.`,
      next: 'rx-q'
    },
    {
      id: 'rx-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'The screen supports polymyalgia rheumatica. How do you prescribe?',
      options: [
        {
          label: 'Prednisolone 15 mg each morning, a slow taper over one to two years, bone protection, BP and glucose checks, a steroid card and sick-day advice',
          rating: 'best',
          feedback: `A moderate fixed dose of about 15 mg is standard for PMR, and a slow taper over one to two years limits relapse. The dose is not the whole prescription. Anyone expected to take prednisolone for more than three months needs a bone health plan: calcium and vitamin D (hers is low), and a bisphosphonate where indicated, which at 74 she is likely to need. You also plan to monitor blood pressure and glucose, give a steroid card, explain sick-day rules and tell her never to stop suddenly. A gastroprotective drug is needed only if she takes an NSAID or aspirin as well, so stop the ibuprofen. What would change your mind is a poor response in the first week.`,
          next: 'rx-started'
        },
        {
          label: 'Prednisolone 15 mg each morning with a taper plan, and cover bone protection and the steroid card at the first review',
          rating: 'good',
          feedback: `The drug and dose are right and the plan is clear. But the risks of steroids start from the first tablet, and she may not come back to review on schedule, given she cannot easily leave Ken. A steroid card, sick-day advice and a bone plan are most useful when she starts, not weeks later.`,
          next: 'rx-started'
        },
        {
          label: 'Prednisolone 40 mg each day to be sure of a response, reducing quickly to stop within six weeks',
          rating: 'poor',
          feedback: `The high dose is the dose for giant cell arteritis, and it is not needed for PMR. It brings more side effects (sleeplessness, raised glucose and blood pressure, mood change) in a 74-year-old. Tapering to stop in six weeks is too fast for a condition that usually needs one to two years, and relapse is likely.`,
          next: 'c-rx'
        }
      ],
      reasoning: `PMR responds to a modest dose and relapses if the dose is cut too fast. The skill is in the safety work around the prescription. She is 74, has hypertension and a low vitamin D, and may be on a steroid for two years, so bone loss, glucose, blood pressure and infection risk are all real. I also think about her situation: if Julie cannot visit often, a plan that depends on frequent reviews may fail. The response is itself a test. A dramatic improvement within days to a week supports the diagnosis, and a partial or slow response makes me reconsider it.`
    },
    {
      id: 'c-rx',
      type: 'presentation',
      tone: 'consequence',
      label: 'Eight weeks later',
      text: `The high dose gave Mrs Cutler three sleepless nights and a random glucose of 11.4 mmol/L. The fast reduction brought the aching back as the dose fell below 10 mg. She is back in your surgery, frightened and sore. You restart prednisolone at 15 mg, add the bone and monitoring plan that should have been there from the start, and explain a slow taper.`,
      next: 'rx-started'
    },
    {
      id: 'rx-started',
      type: 'presentation',
      label: 'Weeks later',
      text: `The response is <strong>dramatic</strong>. Within three days she could turn over in bed, and by one week she could dress herself and lift a kettle. ESR is 21 and CRP 7. Her blood pressure is 152/88 and she is monitoring it at home. Her vitamin D is replaced, and she has started calcium, vitamin D and a bisphosphonate after a dental check. She carries a steroid card. Julie has arranged a carers&rsquo; assessment for Ken through the local council, and a sitter two mornings a week.<br><br>
The dose is tapering slowly according to a plan. Eleven weeks after starting, she is on 10 mg.`,
      next: 'twist'
    },
    {
      id: 'twist',
      type: 'presentation',
      tone: 'danger',
      label: 'Wednesday 08:40',
      text: `Julie, who has taken a week&rsquo;s leave to help, phones on her mother&rsquo;s behalf. Since Monday Mrs Cutler has had a headache over her right temple. It hurts to brush her hair, and her pillow is sore on that side. Eating toast gives an aching in her jaw that makes her stop chewing. Her shoulders and hips are no worse. <strong>Yesterday morning her right eye went misty, like a net curtain, for about ten minutes</strong>, and then cleared. She put it down to tiredness.<br><br>
She is at the surgery by 09:15. Blood pressure 150/86, pulse 84. The right temporal artery is tender, thickened and has a weak pulse. Visual acuity is 6/9 in each eye today. Julie is in the waiting room with Ken.`,
      next: 'esc-q'
    },
    {
      id: 'esc-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'What do you do?',
      options: [
        {
          label: 'Give prednisolone 60 mg now and send her for same-day assessment by the GCA team and ophthalmology',
          rating: 'best',
          feedback: `New temporal headache, scalp tenderness, jaw claudication and transient visual loss in someone with PMR is giant cell arteritis until proven otherwise, and visual symptoms mean the vision is threatened. Sight lost to GCA rarely comes back. Treatment starts at once, before any test, because a temporal artery biopsy or ultrasound remains informative for some time after steroids begin. Same-day ophthalmology and the GCA fast-track pathway follow. What would change your mind is another explanation found by the eye team, such as a retinal vein occlusion.`,
          next: 'handover-q'
        },
        {
          label: 'Give prednisolone 60 mg now and book the GCA fast-track clinic for the next morning',
          rating: 'good',
          feedback: `Treating immediately is correct. The weakness is the timing. Visual symptoms mean the second eye could be next, and a delay of a night means a night without expert assessment of the eye. The pathway for threatened vision is same-day, not next-day.`,
          next: 'c-esc-good'
        },
        {
          label: 'Take her back to 15 mg, as the PMR is flaring, and review her in a week to see if the headache settles',
          rating: 'unsafe',
          feedback: `This treats the symptoms as a relapse of PMR and applies the wrong dose to the wrong disease. The 15 mg dose is far too low for GCA, and a week is long enough to lose sight in the eye. Headache, jaw claudication and a visual episode are not features of PMR. The error is anchoring on a diagnosis she already carries.`,
          next: 'c-esc-unsafe'
        },
        {
          label: 'Hold the dose rise until a temporal artery biopsy or ultrasound has confirmed the diagnosis',
          rating: 'unsafe',
          feedback: `Treatment of suspected GCA must not wait for a test. A biopsy can take days to arrange and the risk to the eye is highest in the first days. Starting steroids does not rule out the test: biopsy and ultrasound remain informative for a period after treatment begins. Confirmation is useful, but sight is the priority.`,
          next: 'c-esc-unsafe'
        }
      ],
      reasoning: `This is a clinical diagnosis with a high pre-test probability: a new headache, a tender temporal artery, jaw claudication, and a transient visual episode in a 74-year-old on a falling dose of prednisolone for PMR. The cost of treating a patient who turns out not to have GCA is a few days of a higher steroid dose. The cost of waiting for a test in a patient who does have it is permanent blindness, which can be sudden and often affects the second eye. So I treat first and test second. The BSR guidance for uncomplicated GCA is a starting dose of prednisolone 40&ndash;60 mg daily, and with visual symptoms the higher end is used. Whether intravenous methylprednisolone adds anything over high-dose oral prednisolone is not established, even among specialists, so that decision belongs to the team that sees her today; it must not delay the first oral dose.`
    },
    {
      id: 'c-esc-good',
      type: 'presentation',
      tone: 'consequence',
      label: 'That evening',
      text: `Mrs Cutler goes home with an appointment for the morning. At 21:00 Julie phones the out-of-hours service, which puts her through to you as the doctor on call: the misty vision has come back in the right eye for about forty minutes. You send them straight to the emergency department, and a neighbour sits with Ken. A plan that did not match the urgency has cost a night of risk and a long wait in the department. You phone the on-call rheumatology registrar so that they know she is coming.`,
      next: 'handover-q'
    },
    {
      id: 'c-esc-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Two days later, 06:30',
      text: `Julie rings in a panic. Her mother woke with the right eye &ldquo;black, like a curtain has come down&rdquo;. She can see hand movements and nothing more. You arrange an emergency ambulance to the eye casualty and the first dose of prednisolone 60 mg is given on arrival. She is admitted. The visual loss has already happened. You phone the on-call rheumatology registrar.`,
      next: 'handover-q'
    },
    {
      id: 'handover-q',
      type: 'decision',
      stage: 'Handover',
      prompt: 'You phone the on-call rheumatology registrar. She has had her first prednisolone 60 mg. What do you say?',
      options: [
        {
          label: 'Give a short SBAR: suspected GCA, threatened vision, her PMR on 10 mg, steroid given at what time, and ask for same-day eye and rheumatology review',
          rating: 'best',
          feedback: `A short, structured call gives the registrar the situation in a sentence, the background that matters (PMR, current dose, the steroid already given), your assessment (suspected GCA with a visual symptom), and a clear request with a time. The two pieces of information that change what the team does are the visual symptom and that steroids have already been started. Be ready for the registrar to raise IV methylprednisolone; whether it helps beyond oral prednisolone is unsettled, so it is their call, not a reason to hold the oral dose.`,
          next: 'gca-result'
        },
        {
          label: 'Describe her PMR history and the full timeline of symptoms in order, then say you think it might be GCA and ask for advice',
          rating: 'good',
          feedback: `All the facts are there and the call is accurate. But the registrar has to wait for the conclusion until the end, and you did not ask for anything specific. In an emergency, lead with the situation and the request. A chronological story is the right shape for the notes, not for the telephone.`,
          next: 'gca-result'
        },
        {
          label: 'Ask whether the GCA clinic can fit her in this week for an ultrasound, since she has been on steroids for the PMR',
          rating: 'poor',
          feedback: `This asks for a routine slot for what is an emergency. The request understates the urgency and never mentions that she has had a visual symptom. A soft request gets a soft response, and the registrar will triage it accordingly.`,
          next: 'c-handover'
        },
        {
          label: 'Report the headache, jaw pain and steroid dose, and leave out the blurred vision as it has settled',
          rating: 'unsafe',
          feedback: `The visual episode is the single most important piece of information in the call, because it changes the pathway from fast-track to emergency. A transient visual loss that has settled is a warning of impending permanent loss, not reassurance. Leaving it out misleads the person making the decision.`,
          next: 'c-handover'
        }
      ],
      reasoning: `A handover has to make it easy for the person at the other end to do the right thing. I lead with who I am, who the patient is and what I am worried about, state the one fact that drives the urgency (vision), say what I have already done, and finish with a specific request and a time frame. The details of her hypertension and her statin can wait. I also know that the registrar will ask whether she has had visual symptoms, so I put the answer at the start rather than waiting to be asked. Writing it down afterwards, with the time of the call, is part of the handover.`
    },
    {
      id: 'c-handover',
      type: 'presentation',
      tone: 'consequence',
      label: 'Forty minutes lost',
      text: `The registrar triages from what you said and offers a routine GCA clinic slot. When the hospital team take their own history, the visual symptoms come out, and the registrar rings you back, unimpressed that they were not in the call. Mrs Cutler is moved straight to eye casualty. The mistake is repaired, but it cost nearly an hour in a condition where minutes matter.`,
      next: 'gca-result'
    },
    {
      id: 'gca-result',
      type: 'presentation',
      tone: 'results',
      label: 'Hospital, the same day and the next',
      text: `<strong>Ophthalmology:</strong> the right optic disc is pale and swollen, in keeping with early arteritic ischaemic optic neuropathy. The left eye is normal. The eye team and the rheumatologist discuss intravenous methylprednisolone and agree a plan. The priority is protecting the left eye and what remains of the right.<br><br>
<strong>Blood tests:</strong> ESR 94 mm/h, CRP 112 mg/L, platelets raised.<br><br>
<strong>Temporal artery ultrasound (next morning, after steroids started):</strong> a dark halo around the wall of the right temporal artery, the typical ultrasound sign of GCA. The team do not need a biopsy. They explain that ultrasound and biopsy both remain informative for some days after steroids are started, which is why treatment never needs to wait for either.<br><br>
She is admitted. Mrs Cutler asks to talk to you with Julie. She looks frightened and asks: &ldquo;Am I going to go blind? Who is going to look after Ken?&rdquo;`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'How do you answer her?',
      options: [
        {
          label: 'Be honest that her sight is at risk, explain the treatment, give safety-netting for sudden visual loss, and arrange support for Ken',
          rating: 'best',
          feedback: `She asked two real questions and deserves a straight answer to both. Say that giant cell arteritis can cause permanent blindness, that the treatment is the way to protect the sight she has, and what you have done today. Give clear safety-netting: sudden loss of vision, a curtain or new double vision means 999 or the eye emergency department, at any time. Her husband&rsquo;s care is part of her health, so you involve the ward team, social work and Julie. What would change your approach is if she did not want the detail, in which case you offer it again later.`,
          next: 'conclusion'
        },
        {
          label: 'Explain that this is serious and needs high-dose steroids for a long time, and arrange follow-up, leaving Ken&rsquo;s care for the ward team',
          rating: 'good',
          feedback: `The explanation is honest and the follow-up is arranged. But she asked about Ken and the answer to that has been delegated. Leaving it hands her a worry she will carry through the admission, and it may influence whether she tells the team when her sight changes.`,
          next: 'c-comm'
        },
        {
          label: 'Reassure her that it was caught in time and that her eyes will be fine, so there is no need to worry about her vision',
          rating: 'poor',
          feedback: `You cannot promise that. Some vision may already have been lost, and the risk to both eyes continues for a time. False reassurance means she may not report a new visual symptom in time, which is exactly what she needs to do.`,
          next: 'c-comm'
        },
        {
          label: 'Tell her plainly that she may go blind, and give her a leaflet and the ward number before the next patient',
          rating: 'poor',
          feedback: `The honesty is right but the delivery is not. A frightening message with no explanation of what is being done, no time to ask questions and no plan for Ken leaves her alone with it. Break bad news with time, in plain language, and check what she has understood.`,
          next: 'c-comm'
        }
      ],
      reasoning: `She is frightened for herself and for the person who depends on her, and I need to address both. I tell her honestly that this can cost her sight, that I cannot promise how much will come back, and that the treatment is what gives her the best chance of keeping what she has. I tell her what the staff are watching for, and what she should do if the other eye changes, at any hour, with the hospital or 999. I explain that she will be on steroids for a long time and that we will protect her bones, her sugar and her blood pressure. And I make sure someone takes responsibility for Ken today.`
    },
    {
      id: 'c-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'The following morning',
      text: `A nurse tells you Mrs Cutler spent a sleepless night worrying about Ken and did not mention that her left eye had blurred briefly at 03:00. She did not want to bother anyone. The brief blurring is reported and reviewed, and the left eye is found to be unchanged. You go back to her with Julie and the ward sister, go through what is happening, what she should report immediately, and what is being arranged for Ken.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: polymyalgia rheumatica, later complicated by giant cell arteritis with threatened vision.</strong><br><br>
Mrs Cutler was admitted and treated with high-dose corticosteroids under joint rheumatology and ophthalmology care. The temporal artery ultrasound confirmed vasculitis. Her vision in the right eye stabilised at the level it had reached when treatment began, and the left eye was never affected. She went home on a slow steroid taper with bone protection and regular monitoring, and her rheumatology team considered a steroid-sparing drug. A social worker arranged respite care for Ken.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Symmetrical shoulder and hip girdle pain with prolonged stiffness, normal power and raised ESR and CRP: polymyalgia rheumatica.</li>
<li>Ask about GCA symptoms at the start, and record them, so that a new symptom is recognised as new.</li>
<li>Send the full pre-steroid screen first, because steroids hide the mimics, and treat on the results.</li>
<li>Prescribe safely: 15 mg, a slow taper, a bone plan, BP and glucose checks, a steroid card and sick-day rules. A prompt, dramatic response supports the diagnosis.</li>
<li>New temporal headache, scalp tenderness, jaw claudication or a visual symptom on a falling dose is GCA until proven otherwise. High-dose steroids start at once, with same-day eye review. Never wait for a biopsy.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;The inflammation that was in your muscles has started to affect the blood vessels in your head. It can damage the nerve to the eye if it is not treated quickly, which is why we are using a strong dose now. You will need steroids for a long time, with tablets to protect your bones.&rdquo;<br><br>
<strong>Safety-netting:</strong> sudden loss of vision, a curtain or shadow across the eye, double vision, or a return of the headache, jaw pain or scalp tenderness means 999 or the nearest eye emergency department at any hour. Carry a steroid card, never stop steroids suddenly, and seek help if she has a fever or is vomiting, because she may need extra steroid cover.`,
      keyLearning: [
        'PMR is symmetrical shoulder and hip girdle pain with morning stiffness over 45 minutes. Power is normal when tested properly, which separates it from myositis.',
        'PMR is partly a diagnosis of exclusion. Send FBC, U&E, LFT, bone profile, TFT, CK, ESR, CRP, protein electrophoresis, RF, anti-CCP and a urine dip before the first dose of steroid.',
        'Steroids mask other conditions, so test first and treat second. A response to prednisolone does not prove PMR, but a poor response should make you doubt it.',
        'PMR steroid care: prednisolone around 15 mg, a slow taper over one to two years, bone protection, BP and glucose checks, a steroid card and sick-day rules.',
        'Asking about headache, scalp, jaw and vision in every patient with PMR, and again at each review, catches giant cell arteritis early.',
        'Suspected GCA is an emergency. Start high-dose prednisolone at once without waiting for a biopsy or ultrasound, and send anyone with visual symptoms for same-day ophthalmology.',
        'A visual symptom that has settled is a warning, not a reassurance. Say it first in the handover.'
      ],
      relatedTests: ['ESR and CRP', 'FBC', 'Bone profile and TFT', 'CK', 'Protein electrophoresis', 'RF and anti-CCP', 'Urine dip', 'Temporal artery ultrasound', 'Temporal artery biopsy', 'Fundoscopy'],
      goingFurther: `<strong>Large-vessel GCA:</strong> inflammation can involve the aorta and its branches, including the subclavian and axillary arteries. It may present without headache, with limb claudication, differing arm blood pressures, bruits, or persistent constitutional symptoms and raised inflammatory markers. Imaging with PET-CT, CT or MR angiography or vascular ultrasound is used in these patients. Patients with large-vessel disease may need long-term surveillance for aortic aneurysm.<br><br>
<strong>Ultrasound versus biopsy:</strong> in experienced hands temporal artery ultrasound is the first-line test in many UK fast-track services, with the halo sign seen as a dark ring around the artery wall. A biopsy is still useful when ultrasound is unavailable, negative or equivocal, but it can miss &ldquo;skip lesions&rdquo;, so a negative result does not exclude GCA when the clinical suspicion is high. Both are best done soon after steroids are started, but remain informative for some time.<br><br>
<strong>Treatment:</strong> BSR guidance suggests prednisolone 40&ndash;60 mg daily for GCA without visual loss, and 60 mg is typical when vision is threatened. Intravenous methylprednisolone is used by some teams when vision is threatened or lost, but its benefit over high-dose oral prednisolone is not established, and practice varies. Tocilizumab, an IL-6 receptor inhibitor, is used as a steroid-sparing agent in selected patients with relapsing or refractory disease, and low-dose aspirin is not routinely recommended without another indication. Methotrexate is an older alternative.<br><br>
<strong>Relapse:</strong> both PMR and GCA relapse during dose reduction, and relapse in PMR can reflect an evolving GCA. A new symptom should be treated as new, not as &ldquo;the usual flare&rdquo;.`
    }
  ]
};
