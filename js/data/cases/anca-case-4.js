/* anca-case-4: The Painful Purple Spots */

export default {
  id: 'anca-case-4',
  title: 'The Painful Purple Spots',
  summary: '27-year-old with a tender leg rash, sore joints and feeling unwell for three weeks',
  setting: 'Ambulatory emergency care unit',
  difficulty: 'advanced',
  curriculum: ['RE-VASC', 'LO1', 'LO4', 'IX-BLOODS', 'IX-SEROLOGY', 'TX-MEDS', 'LO7', 'LO8'],
  objectives: [
    'Decide whether a purpuric rash is an emergency, and tell palpable from flat purpura',
    'Generate a differential for palpable purpura that includes infective endocarditis',
    'Interpret a strongly MPO-positive ANCA alongside a clear urine dip and decide what to monitor',
    'Take a recreational drug history non-judgementally and protect confidentiality',
    'Match treatment to organ involvement rather than the ANCA result'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Ambulatory emergency care unit, 11:20',
      text: `<strong>Mr Daniel Owusu, 27, bar supervisor</strong><br><br>
His GP has sent him in. He has had a rash on his legs for 3 weeks that is getting worse and is now tender to touch. His knees, ankles and hands ache and are stiff in the morning, and he has felt feverish, sweaty and washed out. He has been off work for a week. His girlfriend, Tamara, has come with him.<br><br>
<strong>History:</strong>
<ul>
<li>The GP gave him chlorphenamine for what was thought to be an allergic rash. It has not helped.</li>
<li>He has taken minocycline for acne for 7 months, and occasional ibuprofen for the joint pain.</li>
<li>He is previously fit. No sore throat or diarrhoea before the rash. No mouth ulcers, nosebleeds, cough, haemoptysis or red urine. No known family history of autoimmune disease.</li>
<li>He lives with Tamara. He smokes socially and drinks at the weekend. He says little more when asked about his social life.</li>
</ul>
Triage observations: temperature 37.9&deg;C, heart rate 98, blood pressure 128/76, respiratory rate 16, oxygen saturation 98% on air, alert and talking in full sentences.`,
      next: 'prioritise-q'
    },
    {
      id: 'prioritise-q',
      type: 'decision',
      stage: 'Prioritise',
      prompt: 'What is the first thing to establish about this rash?',
      options: [
        {
          label: 'Check for sepsis, press the lesions, and send an FBC and film, CRP, U&E and a urine dip',
          rating: 'best',
          feedback: `A purpuric rash in someone who is febrile is meningococcal sepsis or a platelet problem until you have excluded them. Pressing the lesions tells you whether they are flat and non-blanching (petechiae, from low platelets or sepsis) or palpable (vessel-wall inflammation). The FBC, film and a urine dip take minutes and decide what is dangerous. If he were hypotensive, drowsy or rapidly worsening, you would give antibiotics and escalate immediately.`,
          next: 'exam'
        },
        {
          label: 'Check observations and send FBC and CRP now; examine the lesions properly after the results',
          rating: 'good',
          feedback: `Starting with observations and a platelet count is safe. But the examination is the quickest way to decide between palpable and flat purpura, and it should not wait for the blood results. The urine dip is also missing, and it is the cheapest test for kidney involvement.`,
          next: 'exam'
        },
        {
          label: 'Take a full drug, travel and social history before examining him or sending any tests',
          rating: 'poor',
          feedback: `A thorough history matters, but not before you know whether he is safe. This is search satisficing: gathering information because it is comfortable, not because it is the priority. The history will be better after you have excluded a time-critical cause.`,
          next: 'c-prioritise-poor'
        },
        {
          label: 'Prescribe a stronger antihistamine, advise him to stop the minocycline and send him home',
          rating: 'unsafe',
          feedback: `This accepts the GP&rsquo;s &ldquo;allergic rash&rdquo; label without testing it. A tender rash with fever and joint pain, which has not responded to an antihistamine, is not urticaria. Sending him home misses sepsis, thrombocytopenia and a vasculitis that may reach his kidneys.`,
          next: 'c-prioritise-unsafe'
        }
      ],
      reasoning: `Before thinking about the cause, I ask what could kill him in the next few hours. Fever with purpura raises meningococcal septicaemia, and any purpura raises low platelets or DIC. His observations are stable, he looks well and he has had the rash for three weeks, so sepsis is much less likely, but it is the one I check first and cheaply. Then I ask whether it is flat or palpable, because palpable purpura is the clinical sign of small-vessel vasculitis and flat petechiae point toward platelets or clotting. I will also ask about the rest of him: kidneys, lungs, nerves and gut.`
    },
    {
      id: 'c-prioritise-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Twenty minutes later',
      text: `You have a long history but you have not yet seen the lesions or sent any bloods. The charge nurse asks what the plan is for a febrile patient with a rash who has been in the department for 20 minutes. You go and examine him and send the first blood tests.`,
      next: 'exam'
    },
    {
      id: 'c-prioritise-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss',
      text: `You hand him the prescription. As he stands to leave, your registrar passes and asks to look at his legs. &ldquo;These are palpable, and he&rsquo;s running a temperature. Nobody has checked his platelets or his urine. He isn&rsquo;t going anywhere.&rdquo; The discharge is stopped and you are asked to start again.`,
      next: 'exam'
    },
    {
      id: 'exam',
      type: 'presentation',
      label: 'Examination',
      text: `<strong>Skin:</strong> palpable purpura over both shins and the dorsum of both feet, with some lesions joining together and a few with a dusky centre. On Mr Owusu&rsquo;s dark brown skin the lesions look dark purple-brown to black and are hard to see as red, so you feel for them: they are raised and tender, and they do not blanch under a glass. The left ear helix is dusky and tender. There are no petechiae on the trunk and no mucosal bleeding. There are no splinter haemorrhages and no nail-fold lesions.<br><br>
<strong>Joints:</strong> tender knees, ankles and metacarpophalangeal joints on squeezing, with no effusions or visible synovitis.<br><br>
<strong>Systems:</strong> no heart murmur. Chest clear. Abdomen soft and non-tender. No neck stiffness, no neurological deficit. No ENT abnormality. Capillary refill 1 second.`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'He has palpable purpura, joint pain and a low-grade fever. What is your differential for palpable purpura? What would you look for to separate the causes?',
      reveal: `<strong>Palpable purpura is a small-vessel vasculitis until proven otherwise.</strong> The question is which one:
<ol>
<li><strong>IgA vasculitis</strong> (Henoch-Sch&ouml;nlein): lower limb purpura, joint pain, abdominal pain, haematuria. Commoner in children, but it occurs in adults, in whom renal involvement is more likely. A skin biopsy with immunofluorescence shows IgA.</li>
<li><strong>ANCA-associated vasculitis</strong> (MPA, GPA, EGPA): look for ENT, lung, kidney and nerve involvement. The ANCA type points to the disease.</li>
<li><strong>Drug-induced or cocaine/levamisole-related vasculitis:</strong> a medicines history is essential. Ask about prescribed, over-the-counter and recreational drugs. Hydralazine, propylthiouracil, minocycline and levamisole-adulterated cocaine are classic triggers of ANCA-positive disease.</li>
<li><strong>Hypersensitivity (drug) vasculitis:</strong> a new drug within 1&ndash;3 weeks, skin-limited, often with no ANCA.</li>
<li><strong>Cryoglobulinaemic vasculitis:</strong> hepatitis C, low complement, positive rheumatoid factor. Check hepatitis serology and complement.</li>
<li><strong>Infective endocarditis:</strong> fever, new murmur, splinter haemorrhages, recent dental work or injection drug use. Blood cultures before antibiotics. Endocarditis can cause a positive ANCA, so a positive ANCA does not remove it from the list.</li>
<li><strong>SLE:</strong> consider if there is a malar rash, mouth ulcers, cytopenias or low complement.</li>
</ol>
<strong>Non-blanching but flat</strong> lesions would point toward platelets, meningococcus or DIC instead.<br>
You cannot afford to miss endocarditis and meningococcal sepsis, because both are treated with antibiotics rather than immunosuppression, and immunosuppression would make them worse.`,
      next: 'ix-q'
    },
    {
      id: 'ix-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which tests do you send now?',
      options: [
        {
          label: 'Urine dip, U&E, FBC and film, CRP, complement, hepatitis serology, ANCA and blood cultures',
          rating: 'best',
          feedback: `Each result answers a question that changes management. The urine dip and creatinine tell you about kidney involvement, the film and platelets exclude thrombocytopenia, complement and hepatitis serology look for cryoglobulinaemia and lupus, ANCA supports AAV, and cultures catch endocarditis in a feverish patient before any immunosuppression. What would change your mind is a new murmur, positive cultures or falling platelets.`,
          next: 'results'
        },
        {
          label: 'Urine dip, U&E, FBC and CRP now, adding ANCA, complement and cultures later if they are abnormal',
          rating: 'good',
          feedback: `The core tests are right and cheap. But a normal CRP or creatinine does not exclude a systemic vasculitis, and ANCA, complement and cultures are part of the first-line work-up for palpable purpura with a fever. Waiting for abnormal results means a second set of blood draws and a day's delay.`,
          next: 'c-ix'
        },
        {
          label: 'A skin biopsy first, with no other tests until the pathology is reported',
          rating: 'poor',
          feedback: `A skin biopsy with immunofluorescence is very useful, and you will want one. But it takes days, and meanwhile you do not know whether his kidneys, platelets or blood cultures are abnormal. Biopsy adds to the blood and urine tests, it does not replace them.`,
          next: 'c-ix'
        },
        {
          label: 'ANA, ENA, rheumatoid factor, anti-CCP and myositis antibodies as a full autoantibody screen',
          rating: 'poor',
          feedback: `This is an indiscriminate panel. Low-titre positives are common and confusing, and none of these tests tells you whether his kidneys are involved or whether he is septic. Order tests to answer specific questions.`,
          next: 'c-ix'
        }
      ],
      reasoning: `My pre-test thinking is small-vessel vasculitis, with an infective or drug trigger to find. The first-line tests are all cheap and quick: the urine dip is the single most useful kidney test, creatinine and platelets show organ function and rule out thrombocytopenia, and blood cultures are taken because he is febrile and endocarditis can mimic vasculitis. I add complement and hepatitis serology to look for cryoglobulins and lupus. ANCA goes in at the same time, because it will help me later, but I do not wait for it to decide whether he needs a rheumatology review.`
    },
    {
      id: 'c-ix',
      type: 'presentation',
      tone: 'consequence',
      label: 'Filling the gaps',
      text: `Your registrar reviews what you have sent and asks, &ldquo;Where are the blood cultures, the complement and the ANCA? And has he had a urine dip and a platelet count?&rdquo; You go back and send whatever is missing, which means a second blood draw and a few hours&rsquo; delay in getting the full picture.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Results',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>Haemoglobin</td><td>128 g/L</td><td>130&ndash;175</td></tr>
<tr><td>White cell count</td><td>4.1 &times; 10&#8313;/L</td><td>4&ndash;11</td></tr>
<tr><td><strong>Neutrophils</strong></td><td><strong>1.1 &times; 10&#8313;/L</strong></td><td>2.0&ndash;7.5</td></tr>
<tr><td>Platelets</td><td>268 &times; 10&#8313;/L</td><td>150&ndash;400</td></tr>
<tr><td>CRP</td><td>48 mg/L</td><td>&lt;5</td></tr>
<tr><td>Creatinine</td><td>82 &micro;mol/L</td><td>59&ndash;104</td></tr>
<tr><td>C3 and C4</td><td>Normal</td><td></td></tr>
<tr><td>Hepatitis B, hepatitis C and HIV</td><td>Negative</td><td></td></tr>
<tr><td><strong>Urine dip</strong></td><td><strong>Blood trace, protein negative</strong></td><td></td></tr>
<tr><td><strong>ANCA</strong></td><td><strong>Positive, perinuclear pattern; MPO strongly positive, PR3 also positive</strong></td><td></td></tr>
<tr><td>Blood cultures</td><td>Two sets taken, no growth so far</td><td></td></tr>
</table>
The film shows no platelet clumping and no schistocytes.`,
      next: 'interpret-q'
    },
    {
      id: 'interpret-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'What do these results tell you, and what is the risk?',
      options: [
        {
          label: 'Small-vessel vasculitis so far limited to skin and joints; the kidneys need monitoring over the next weeks',
          rating: 'best',
          feedback: `A strongly positive MPO-ANCA with palpable purpura and arthralgia is a small-vessel vasculitis, and a clear urine and normal creatinine tell you that the kidneys are not involved yet. The word &ldquo;yet&rdquo; matters, because kidney involvement can develop over days to weeks and may cause no symptoms. What would change your mind is any rise in creatinine, haematuria that persists, or proteinuria.`,
          next: 'hx-q'
        },
        {
          label: 'Primary ANCA vasculitis needing induction therapy, so refer for immunosuppression straight away',
          rating: 'good',
          feedback: `It is right to involve rheumatology quickly, and the vasculitis is real. But the label of primary AAV and the decision to induce are not made on the ANCA alone. A drug trigger is still on the table and organ involvement is limited, and the treatment depends on both.`,
          next: 'hx-q'
        },
        {
          label: 'A false-positive ANCA, since the urine is clear and his creatinine is normal',
          rating: 'poor',
          feedback: `With palpable purpura, arthralgia, fever and a strongly positive MPO, the ANCA is not a false positive. This is treating the lab value in isolation. A normal urine dip tells you about the kidneys today, and does not cancel the rash.`,
          next: 'c-interpret-poor'
        },
        {
          label: 'Trace blood is not significant, so this is skin-only disease and no urine monitoring is needed',
          rating: 'unsafe',
          feedback: `Declaring the kidneys safe from a single urine dip is false reassurance. ANCA vasculitis can reach the kidneys silently, and a rising creatinine may be the first sign. Without a plan for repeat urine and blood tests, a treatable problem could be found late.`,
          next: 'c-interpret-unsafe'
        }
      ],
      reasoning: `The ANCA tells me what kind of problem this is, and not how bad it is. A strongly MPO-positive result, with a second antigen as well, is unusual in primary vasculitis and common in a drug-induced one, so I ask about every medicine. The urine dip and creatinine tell me about the organs now, and they are reassuring. They are the right things to repeat, because glomerulonephritis often declares itself after the skin. His neutrophil count is low, which I do not yet have an explanation for, and which matters both for infection risk and for choosing treatment.`
    },
    {
      id: 'c-interpret-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'The registrar&rsquo;s view',
      text: `You tell your registrar that you think the ANCA is a false positive. She asks you to describe the rash again, and to read out the result. &ldquo;A strong MPO with palpable purpura is not a coincidence. What would you tell his GP?&rdquo; You go back to the notes and treat the ANCA as real.`,
      next: 'hx-q'
    },
    {
      id: 'c-interpret-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Stopped by the registrar',
      text: `Your registrar reads your note. &ldquo;Trace blood today is not the same as no kidney disease next week. If we send him out with no plan, the first we hear could be a creatinine of 300.&rdquo; She asks you to write a monitoring plan before he goes anywhere.`,
      next: 'hx-q'
    },
    {
      id: 'hx-q',
      type: 'decision',
      stage: 'History',
      prompt: 'You still do not have a cause. How do you ask about recreational drugs?',
      options: [
        {
          label: 'See him alone, explain what stays confidential, then ask openly about all drugs and alcohol',
          rating: 'best',
          feedback: `Many patients will not mention drug use unless asked, especially with a partner present or if they fear for their job. Seeing him alone, explaining the limits of confidentiality and asking in a non-judgemental way gives him the best chance of an honest answer. It is a history question as routine as asking about smoking. What would change your approach is any safeguarding concern or risk to others.`,
          next: 'disclosure'
        },
        {
          label: 'See him alone and ask routinely about recreational drugs, without explaining who sees the notes',
          rating: 'good',
          feedback: `Asking alone and in a matter-of-fact way is good practice. The gap is that he has not been told who will see the answer, which is the thing a bar supervisor with a licence to protect is likely to be worried about. Without that, he may under-report.`,
          next: 'disclosure'
        },
        {
          label: 'Skip it, since he has taken minocycline for months and that is the obvious cause',
          rating: 'poor',
          feedback: `This is anchoring on the first cause found. Minocycline is a known trigger, but other causes may be present at the same time, and stopping only one would leave the disease running. A drug history that is incomplete is an unsafe one.`,
          next: 'c-hx-poor'
        },
        {
          label: 'Warn him that any drug use will be reported to his GP, his employer and the police',
          rating: 'unsafe',
          feedback: `This is inaccurate and harmful. Drug use is not routinely reported to the police or an employer, and confidentiality is only broken in specific circumstances, such as serious risk of harm to others. Threatening disclosure ends the conversation and may drive him away from care.`,
          next: 'c-hx-unsafe'
        }
      ],
      reasoning: `A good drug history is one where the patient feels it is safe to tell me the truth. I would sit down, ask Tamara to step out for a few minutes (without making it a big event), and say: &ldquo;I ask everyone this. What I hear stays within the clinical team unless I am worried about someone&rsquo;s safety. Do you use any recreational drugs?&rdquo; I would ask about what, how, how often and for how long. For this question the answer matters clinically, because some drugs are linked to vasculitis, and he may be reluctant to say.`
    },
    {
      id: 'c-hx-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'The consultant asks',
      text: `Your consultant looks at the dusky left ear and the low neutrophil count. &ldquo;Minocycline does not usually do that. Have you asked him about everything else?&rdquo; You go back and take the full history, alone this time.`,
      next: 'disclosure'
    },
    {
      id: 'c-hx-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'The room goes quiet',
      text: `Mr Owusu stiffens and says, &ldquo;I don&rsquo;t do drugs.&rdquo; He looks at Tamara and asks if he can go. Your registrar steps in, apologises for the confusion, explains what confidentiality means in the clinic and offers to start the conversation again. He agrees to talk to her on her own.`,
      next: 'disclosure'
    },
    {
      id: 'disclosure',
      type: 'presentation',
      label: 'What he tells you',
      text: `With Tamara outside, Mr Owusu says quietly that he has used cocaine, snorted, a few times a month for years, and more often over the last two months, at after-work parties. He did not mention it because he was afraid for his job and was ashamed. He has not injected. He says he did not think it could be linked to a rash.<br><br>
You thank him for telling you. You explain that this helps you, and that what he has said will stay in his medical record and will not be passed to his employer or the police.`,
      next: 'culprit-reflect'
    },
    {
      id: 'culprit-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'He has been on minocycline for 7 months and has been using cocaine more often for 2 months. Which is the likelier trigger, and what points one way or the other? What do you do about each?',
      reveal: `<strong>Both are possible triggers, and both go.</strong><br><br>
<ul>
<li><strong>Cocaine adulterated with levamisole</strong> is the likelier cause here. Levamisole is a veterinary anthelmintic that is a common cutting agent in street cocaine. The clues are the recent increase in use, the dusky, painful <strong>ear</strong> lesions, the <strong>low neutrophil count</strong>, and an ANCA that is positive for both MPO and PR3.</li>
<li><strong>Minocycline</strong> can also cause ANCA-positive vasculitis, typically after months to years and with a strong MPO. It is a real possibility and a plausible contributor, but it does not explain the ears or the neutropenia as well.</li>
</ul>
You cannot prove which, and levamisole is rarely testable in routine UK practice. You manage the uncertainty by removing both: stop minocycline, offer help to stop cocaine, and watch what happens. A skin biopsy supports small-vessel vasculitis and helps exclude IgA vasculitis.<br><br>
Remember that stopping a trigger does not mean the vasculitis is safe: you still need to know what the kidneys are doing.`,
      next: 'manage-q'
    },
    {
      id: 'manage-q',
      type: 'decision',
      stage: 'Manage',
      prompt: 'What is the plan for treatment and follow-up?',
      options: [
        {
          label: 'Stop minocycline, offer cocaine support, arrange a skin biopsy and rheumatology review, and monitor urine and creatinine',
          rating: 'best',
          feedback: `This matches the intensity of treatment to the organs involved. With disease limited to skin and joints, removing the triggers and watching closely is the core, with immunosuppression decided by rheumatology if the rash ulcerates or organs become involved. The monitoring plan is what makes it safe. What would change your mind is a rising creatinine, persistent haematuria or proteinuria, lung symptoms or fever with a falling neutrophil count.`,
          next: 'comm-q'
        },
        {
          label: 'Admit for observation with daily urine dips and bloods until rheumatology and dermatology can review him',
          rating: 'good',
          feedback: `This is safe, and it makes sure no early kidney change is missed. But it uses a bed for a man who is well, when the same monitoring could be done as an outpatient with rapid access. It also does nothing about the triggers unless you add them.`,
          next: 'comm-q'
        },
        {
          label: 'Start high-dose steroids and cyclophosphamide today, because the ANCA is strongly positive',
          rating: 'poor',
          feedback: `Treating the antibody rather than the patient. Induction treatment is for organ-threatening disease, and he has none. Cyclophosphamide in a man with a low neutrophil count and a possible drug trigger risks serious infection and affects fertility, for no clear gain.`,
          next: 'c-manage-poor'
        },
        {
          label: 'Stop the minocycline and discharge him to the GP, since the disease is only in his skin',
          rating: 'unsafe',
          feedback: `Stopping the drug is right but a discharge without monitoring is not. An active vasculitis with a strongly positive ANCA can reach the kidneys after discharge, and the first sign may be a rise in creatinine. The cocaine is still unaddressed too.`,
          next: 'c-manage-unsafe'
        }
      ],
      reasoning: `The treatment follows the organs, not the antibody. His organs are skin and joints. The triggers are what I can remove, so I remove them. The ANCA is strongly positive, but in drug-induced disease the titres usually fall once the drug stops, and the risk is severe organ disease that is not found until late. So I bring him back early: a urine dip and creatinine within days, then weekly at first, and I tell him what to look for in the meantime. If his kidneys, lungs or nerves become involved, the plan changes and he is treated like any other AAV, with rheumatology in charge. The low neutrophil count also needs repeating and watching, as it may fall further.`
    },
    {
      id: 'c-manage-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'The rheumatology registrar',
      text: `The rheumatology registrar, phoned for advice, asks you to hold the cyclophosphamide. &ldquo;Neutrophils are 1.1, his kidneys are fine, and he&rsquo;s young. We don&rsquo;t use that for skin and joints.&rdquo; She asks you to cancel the prescription and offers to see him in the next few days.`,
      next: 'comm-q'
    },
    {
      id: 'c-manage-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Before he leaves',
      text: `Your registrar reads the discharge letter. &ldquo;Who is checking his urine and creatinine, and when? If his kidneys are going to be affected, we want to know in days, not months.&rdquo; She asks you to book a repeat dip and bloods within a few days, and a rheumatology review, before he is allowed to leave.`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'Tamara asks you what is going on. How do you handle the conversation?',
      options: [
        {
          label: 'Ask Daniel what he wants shared, explain the vasculitis and monitoring, and give safety-netting advice',
          rating: 'best',
          feedback: `Daniel decides who hears about his health, and the drug history is his to share. You can explain the rash, the joints and the need for monitoring without disclosing anything he has told you in confidence. Giving him and Tamara safety-netting advice makes the plan workable at home. What would change your approach is a risk of harm to others.`,
          next: 'conclusion'
        },
        {
          label: 'Explain the vasculitis, the drug trigger and the monitoring, but leave out safety-netting for the clinic',
          rating: 'good',
          feedback: `The explanation and the confidentiality are right. Safety-netting cannot wait, though, because the dangerous complications (kidney, lung, infection with a low neutrophil count) can appear before his first appointment. Tell him what to look for and when to come back now.`,
          next: 'c-comm-good'
        },
        {
          label: 'Tell them the rash is from cocaine and stress that this is a serious, self-inflicted illness',
          rating: 'poor',
          feedback: `Blaming him is both judgemental and a confidentiality breach if he has not agreed to share. Shaming patients makes them less likely to return, and he needs to come back for monitoring. Information about substance use should be delivered with support and not blame.`,
          next: 'c-comm-poor'
        },
        {
          label: 'Answer Tamara&rsquo;s questions honestly, including that he has been using cocaine, since she lives with him',
          rating: 'unsafe',
          feedback: `This breaches his confidentiality without his consent. Living with someone does not give a right to their medical information. It can damage the relationship and his trust in services, and he may disengage from the care he needs.`,
          next: 'c-comm-unsafe'
        }
      ],
      reasoning: `Tamara is probably asking because she is frightened. I can reassure her without disclosing anything that Daniel has not agreed to share. I ask Daniel in front of her: &ldquo;What would you like me to tell Tamara?&rdquo; I explain the rash in plain terms: small blood vessels in the skin have become inflamed, probably triggered by something he was exposed to, and we need to watch his kidneys, which can be affected too. I give him a list of what to look out for: red or frothy urine, swelling, breathlessness, coughing up blood, fever, or new rash, and a number to ring. I would also offer him a link to local drug services, and make clear that the offer stands whatever he decides.`
    },
    {
      id: 'c-comm-good',
      type: 'presentation',
      tone: 'consequence',
      label: 'Four days later',
      text: `Mr Owusu develops a fever of 38.4&deg;C and a sore throat at home. He does not know that this could be serious with a low neutrophil count, and he waits two days before ringing. When he does attend, he is checked, his neutrophil count has dropped further, and he is treated promptly. The delay was avoidable.`,
      next: 'conclusion'
    },
    {
      id: 'c-comm-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'After the conversation',
      text: `Mr Owusu goes quiet, and Tamara asks him what you meant. They leave together without saying goodbye. A week later he does not attend the rapid-access appointment. The rheumatology nurse has to phone him twice before he agrees to come back.`,
      next: 'conclusion'
    },
    {
      id: 'c-comm-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'A breakdown of trust',
      text: `Tamara is shocked and angry, and Daniel is furious that you told her. He says he will not be coming back, and he leaves before the monitoring plan has been explained. The consultant has to arrange to see him again, document the breach, and arrange a conversation about what happened with the patient.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: drug-associated ANCA small-vessel vasculitis (probably levamisole-adulterated cocaine, with possible contribution from minocycline), so far limited to skin and joints.</strong><br><br>
Daniel stopped minocycline and, with support from a drug service, stopped using cocaine. His skin biopsy showed a small-vessel leukocytoclastic vasculitis. His urine dip and creatinine stayed normal on monitoring, and his neutrophil count recovered. The rash settled over several weeks and the ear lesion healed with a small scar. His ANCA titres fell over the following months.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Purpura with fever: exclude sepsis and low platelets first, then ask whether the lesions are palpable.</li>
<li>Palpable purpura: a small-vessel vasculitis. The differential includes IgA vasculitis, AAV, drug-induced, cryoglobulinaemia, endocarditis and SLE.</li>
<li>Send tests that change management: urine dip, creatinine, FBC and film, complement, hepatitis, ANCA and cultures.</li>
<li>A strong MPO-ANCA with a clear urine means a vasculitis so far limited to skin and joints. Plan to monitor the kidneys.</li>
<li>Ask about all drugs non-judgementally and confidentially. Remove the triggers, and match treatment to the organs involved.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;Small blood vessels in your skin and joints have become inflamed, probably because of something that your body has reacted to. It is treatable, and it usually settles once the trigger is removed, but it can affect the kidneys, so we will check your urine and blood regularly.&rdquo;<br><br>
<strong>Safety-netting:</strong> red, brown or frothy urine, swelling of the legs or face, breathlessness, coughing up blood, new numbness or weakness, a spreading or ulcerating rash, or a fever or sore throat (because of the low neutrophil count) all need urgent review. Offer ongoing support for stopping drug use.`,
      keyLearning: [
        'Fever with purpura: exclude sepsis and low platelets before anything else. Palpable lesions point to vasculitis, flat ones to platelets or clotting.',
        'On darker skin, purpura looks dark brown or violet rather than red. Feel for palpability, and do not rely on colour.',
        'The differential for palpable purpura includes IgA vasculitis, AAV, drug-induced vasculitis, cryoglobulinaemia, endocarditis and SLE. Endocarditis can be ANCA-positive.',
        'A strongly MPO-positive ANCA, especially with a second antigen, should make you ask about drugs, both prescribed and recreational.',
        'A clear urine dip today does not mean the kidneys are safe. Arrange repeat dips and creatinine until you are sure.',
        'Match treatment to the organs involved. Skin and joint disease with normal kidneys is not a reason for cyclophosphamide.',
        'Ask about recreational drugs alone, without judgement, and explain confidentiality. Do not share what he tells you without his consent.'
      ],
      relatedTests: ['Urine dip', 'U&E', 'FBC and film', 'Blood cultures', 'Complement (C3, C4)', 'Hepatitis B, C and HIV serology', 'ANCA with MPO and PR3', 'Skin biopsy with immunofluorescence'],
      goingFurther: `<strong>Drug-induced ANCA vasculitis:</strong> classic culprits include hydralazine, propylthiouracil, minocycline and levamisole. Compared with primary AAV, drug-induced disease often has high-titre MPO-ANCA, positivity for several antigens (such as elastase, lactoferrin or cathepsin G), and a positive ANA. It often settles after stopping the drug, but severe cases with glomerulonephritis or pulmonary haemorrhage are treated like primary AAV, and relapse can follow re-exposure.<br><br>
<strong>Levamisole:</strong> a common adulterant of street cocaine. Typical features are retiform purpura or necrosis over the ears, cheeks and limbs, neutropenia or agranulocytosis, and ANCA that is positive for <strong>both PR3 and MPO</strong>, often with antiphospholipid antibodies. Levamisole has a short half-life and is rarely detectable by the time a patient is seen. Cocaine itself can also cause destructive midline lesions that mimic GPA.<br><br>
<strong>Skin biopsy:</strong> a lesional biopsy for histology and direct immunofluorescence confirms small-vessel vasculitis, and a predominance of IgA deposits points to IgA vasculitis.`
    }
  ]
};
