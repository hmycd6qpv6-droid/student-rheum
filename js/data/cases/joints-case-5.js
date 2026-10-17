/* joints-case-5: The Familiar Knee */

export default {
  id: 'joints-case-5',
  title: 'The Familiar Knee',
  summary: '79-year-old woman with a hot, swollen knee and a normal temperature, who has had the same knee trouble before',
  setting: 'Emergency department',
  difficulty: 'intermediate',
  curriculum: ['EM-SEPTIC', 'RH-INFECT', 'PR-HOTJOINT', 'CD-HOT-KNEE', 'IX-SYNOVIAL', 'TX-PROC', 'RH-CRYSTAL', 'LO4', 'SK-SBAR'],
  objectives: [
    'Explain why a normal temperature does not exclude septic arthritis in an older person',
    'List the causes of an acute hot swollen knee and tell an effusion from prepatellar bursitis or cellulitis',
    'Plan a safe joint aspiration in a patient on an anticoagulant and decide the order of sampling and antibiotics',
    'Interpret synovial fluid: crystals and a negative Gram stain do not exclude infection',
    'Hand over a suspected septic joint to orthopaedics using SBAR'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Emergency department, 02:40',
      text: `<strong>Mrs Shanti Iyer, 79, retired primary school teacher</strong><br><br>
She was brought in by ambulance after ringing 999 from her ground-floor flat in Leicester. Her <strong>right knee</strong> has been getting hotter and more swollen for two days, and tonight she could not put any weight on it. She lives alone. Her daughter Meena lives 20 minutes away and has been phoned.<br><br>
<strong>History:</strong>
<ul>
<li>Type 2 diabetes (metformin and gliclazide, HbA1c 62 mmol/mol last month). Atrial fibrillation, on <strong>apixaban 5 mg twice a day</strong>, last dose at 22:00 tonight.</li>
<li>Osteoarthritis of both knees. Her GP gave a <strong>steroid injection into the right knee nine days ago</strong> for a bad week of pain.</li>
<li>Three years ago she had a hot right knee which an aspirate showed to be <strong>pseudogout</strong> (calcium pyrophosphate crystals). It settled on a short course of prednisolone. She says, &ldquo;It&rsquo;s that same knee again. I know what it is.&rdquo;</li>
<li>She fell in the garden five days ago and grazed the same knee. She dressed it herself.</li>
<li>Regular paracetamol 1 g four times a day for her arthritis. No known drug allergies.</li>
</ul>
She does not feel &ldquo;ill&rdquo;, only that the knee is unbearable. She was independent in all her daily activities until this week and is proud of her garden.<br><br>
Observations: <strong>temperature 36.8&deg;C</strong>, heart rate 94 (irregular), blood pressure 138/76, respiratory rate 18, oxygen saturation 96% on air, capillary glucose 12.4 mmol/L. NEWS2 score 1.<br><br>
Bloods: CRP 94 mg/L (&lt;5), white cell count 13.2 &times; 10&#8313;/L with neutrophils 10.9, lactate 1.3 mmol/L, eGFR 52 mL/min/1.73 m&sup2;.<br><br>
The triage note says, &ldquo;Known pseudogout, same knee, afebrile. For anti-inflammatory and home.&rdquo;`,
      next: 'first-q'
    },
    {
      id: 'first-q',
      type: 'decision',
      stage: 'Prioritise',
      prompt: 'You are the doctor reviewing her. What is your plan?',
      options: [
        {
          label: 'Treat it as a possible septic joint: call a senior, send bloods with cultures, and plan to aspirate',
          rating: 'best',
          feedback: `A hot joint in an older person with diabetes, a recent injection and a skin break is septic arthritis until the fluid says otherwise. A normal temperature is common in older adults, in people with diabetes and in anyone taking regular paracetamol, and it does not lower the risk much. Her history of pseudogout makes pseudogout likely, but it does not make infection less likely. What would change your mind is a fluid sample showing no infection and a clear alternative.`,
          next: 'ddx-reflect'
        },
        {
          label: 'Request a knee X-ray, then ask the on-call orthopaedic team to see her before you give any treatment',
          rating: 'good',
          feedback: `Involving orthopaedics early is sensible, and an X-ray helps to look for a fracture after her fall or for chondrocalcinosis. But you have not asked for blood cultures or planned a sample, and you risk waiting for someone else to do the one test that gives the diagnosis. You should be ready to aspirate or to arrange it yourself.`,
          next: 'ddx-reflect'
        },
        {
          label: 'Admit her and treat the pseudogout with colchicine, aspirating the knee only if she develops a fever',
          rating: 'poor',
          feedback: `You have taken the diagnosis from her history and made fever the trigger for more tests. In an older diabetic patient on paracetamol, fever may come late or never. Waiting for a fever means waiting for a joint to be damaged.`,
          next: 'c-first-poor'
        },
        {
          label: 'Prescribe naproxen for recurrent pseudogout and discharge her with GP follow-up, as she is afebrile',
          rating: 'unsafe',
          feedback: `This is anchoring on a familiar label, with premature closure. An NSAID with apixaban risks bleeding, and discharging a possible septic joint risks a destroyed knee and sepsis at home. She is alone, diabetic and 79.`,
          next: 'c-first-unsafe'
        }
      ],
      reasoning: `Before I touch her, the pre-test probability of pseudogout is high, and I should say so. But she also has the risk factors for infection: age, diabetes, a joint injection nine days ago, and a graze over the knee. A normal temperature does not help me, because older adults often do not mount a fever, and she takes paracetamol four times a day. The CRP of 94 and a neutrophilia fit either infection or crystals. I cannot separate them without fluid, so I plan to sample before I make a decision I cannot undo.`
    },
    {
      id: 'c-first-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Overnight',
      text: `At 05:00 the nurse notes Mrs Iyer&rsquo;s heart rate is 108 and the knee looks redder. The knee has had no sample taken and nothing has been given for infection. Your registrar reviews her and says, &ldquo;We are not waiting for a temperature. Let&rsquo;s do this properly.&rdquo; She asks you to start again from the beginning.`,
      next: 'ddx-reflect'
    },
    {
      id: 'c-first-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss',
      text: `You are completing the discharge when your consultant looks at the notes. &ldquo;Regular paracetamol, a steroid injection nine days ago, a graze, diabetes, an inflammatory marker of 94 and nobody has sampled the joint? She is not going anywhere, and she must not have naproxen with apixaban.&rdquo; The discharge is cancelled, and you are asked to review her again as a possible septic joint.`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'List the causes of an acute hot swollen knee in this woman, with the most dangerous first. Then say how you would tell a knee effusion from prepatellar bursitis or cellulitis on examination.',
      reveal: `<strong>Differential for an acute hot swollen knee:</strong>
<ol>
<li><strong>Septic arthritis.</strong> The one you cannot miss. Risk factors: older age, diabetes, osteoarthritis, a joint injection, a skin break, immunosuppression and a prosthesis. Fever is absent in a substantial minority, particularly in older adults.</li>
<li><strong>CPP crystal arthritis (pseudogout).</strong> Common in older adults, usually the knee, often with chondrocalcinosis. It is often triggered by illness, surgery or trauma. It can coexist with infection.</li>
<li><strong>Gout.</strong> Less typical in a woman of this age, but possible, especially with a thiazide or kidney disease.</li>
<li><strong>Haemarthrosis.</strong> Think of this in anyone on an anticoagulant or after trauma. The knee is tense and swells quickly, and the aspirate is bloody.</li>
<li><strong>Fracture or ligament injury.</strong> She fell five days ago.</li>
<li><strong>Cellulitis or prepatellar bursitis</strong> (including septic bursitis), which can mimic a joint problem.</li>
<li><strong>Inflammatory arthritis flare</strong> (such as rheumatoid arthritis), reactive arthritis, or a flare after the injection. The injection was nine days ago, which is too long for a typical post-injection flare.</li>
</ol>
<strong>Effusion versus bursitis or cellulitis:</strong> in a true knee effusion, the swelling fills the suprapatellar pouch and the sides of the patella, and you can elicit a patellar tap or a bulge sign. Both active and passive movement are painful and restricted, and the joint is held in slight flexion. In prepatellar bursitis the swelling is localised in front of the lower patella and feels boggy, there is no effusion, and passive knee flexion is often better preserved. In cellulitis, the skin is red, warm and tender, but the joint itself moves fairly freely.<br><br>
<strong>Key point:</strong> the history of pseudogout in the same knee raises the probability of CPP crystals, but does not lower the probability of infection. Both can be present.`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'How do you examine her knee?',
      options: [
        {
          label: 'Expose both legs with consent, map the redness and swelling, check the skin, test for an effusion, and compare active and passive movement',
          rating: 'best',
          feedback: `Comparing both knees shows how much is abnormal, and mapping the swelling tells you whether the problem is in the joint, the bursa or the skin. Look carefully for a skin break, because a graze may be the way bacteria entered and also determines where you can safely put a needle. Ask permission, cover her where you can, and treat her pain, because a stiff painful knee is hard to examine. What would change your mind is a localised boggy swelling over the patella with full passive movement.`,
          next: 'exam-findings'
        },
        {
          label: 'Take a detailed history of the swelling, feel for warmth and tenderness, and measure the knee circumference',
          rating: 'good',
          feedback: `Warmth, tenderness and a circumference measurement are reasonable for monitoring. But they do not separate the joint from the bursa or the skin, and they do not look for the skin break. The key moves are checking for an effusion and comparing active with passive movement.`,
          next: 'c-exam'
        },
        {
          label: 'Ask her to take a few steps to see how severe the problem is before you examine the knee',
          rating: 'poor',
          feedback: `Asking an older woman with an acutely painful knee to walk is unkind, and it tells you very little. Inability to weight-bear is already in the history. A better use of the time is to examine the joint on the couch.`,
          next: 'c-exam'
        },
        {
          label: 'Keep the examination brief since she is in pain, and rely on the X-ray and blood tests',
          rating: 'poor',
          feedback: `Investigations do not replace the examination. An X-ray cannot show whether the swelling is in the joint or in front of it, and the CRP cannot tell you where the inflammation is. Treat her pain and do the examination gently.`,
          next: 'c-exam'
        }
      ],
      reasoning: `The examination answers three questions. Is the problem in the joint (effusion, painful passive movement in all directions)? Is there a skin or soft tissue problem I need to avoid or treat (graze, cellulitis, a bursa)? Is there another joint or an injury I am missing? A true effusion with limited passive movement raises the probability of an intra-articular problem substantially, and infection is on the list. I also look at the hip and the other knee. I give analgesia first and I check she is comfortable with me examining her.`
    },
    {
      id: 'c-exam',
      type: 'presentation',
      tone: 'consequence',
      label: 'A second look',
      text: `Your registrar watches you re-examine the knee. &ldquo;Where does the swelling start? Can you passively flex it? What is that on the outer side?&rdquo; She shows you how to check for a patellar tap and points out the crusted graze on the lateral side of the knee. You examine the leg again, properly this time.`,
      next: 'exam-findings'
    },
    {
      id: 'exam-findings',
      type: 'presentation',
      label: 'Examination and X-ray',
      text: `<ul>
<li>The right knee is <strong>warm, mildly erythematous and swollen</strong>. There is a moderate effusion with a <strong>positive patellar tap and bulge sign</strong>.</li>
<li>The area in front of the lower patella is <strong>not boggy</strong>.</li>
<li>Passive flexion is limited to about 30&deg; because of pain, and she cannot straight-leg raise. Movement in all directions is painful.</li>
<li>On the <strong>lateral joint line</strong> there is a 2 cm crusted graze with a 3 cm rim of redness around it, mildly tender, with no pus and no streaking up the leg. The healed injection site is higher on the outer side. The skin over the medial side of the knee is intact and normal.</li>
<li>Hip movements are full and painless. No other joint is swollen. Calf soft, foot pulses present.</li>
</ul>
<strong>X-ray:</strong> moderate medial compartment osteoarthritis, a joint effusion, and calcification in the menisci (<strong>chondrocalcinosis</strong>). No fracture.<br><br>
Mrs Iyer says, &ldquo;You see? The calcium. It&rsquo;s the same as before.&rdquo;`,
      next: 'abx-q'
    },
    {
      id: 'abx-q',
      type: 'decision',
      stage: 'Manage',
      prompt: 'She has no sepsis features at the moment. What is the right order for sampling and antibiotics?',
      options: [
        {
          label: 'Blood cultures, then aspirate the knee, then start IV antibiotics at once without waiting for results',
          rating: 'best',
          feedback: `If she is not septic, a few minutes spent taking the samples first gives you the best chance of growing the organism, and it tells you which antibiotics and how long she needs. Then antibiotics follow straight away, because you cannot say it is not infection yet. If she had sepsis features (a high NEWS2, hypotension, confusion, a lactate above 2), blood cultures and antibiotics should not wait for the aspiration. What would change your mind is any sign of deterioration.`,
          next: 'proc-q'
        },
        {
          label: 'Blood cultures, then start IV antibiotics immediately, and aspirate the knee within the next hour',
          rating: 'good',
          feedback: `This is acceptable, and it is the right choice if she starts to look unwell or if the aspiration will take a long time. The cost is that giving antibiotics first lowers the chance of a positive fluid culture, which matters for choosing treatment. For a stable patient, a quick aspiration before antibiotics is better.`,
          next: 'proc-q'
        },
        {
          label: 'Aspirate now, and give antibiotics only if the Gram stain shows organisms',
          rating: 'poor',
          feedback: `The Gram stain misses a good proportion of septic joints, and waiting for it puts a decision on a test that cannot rule infection out. It is better to treat on the strength of the clinical picture and the cell count.`,
          next: 'c-abx-poor'
        },
        {
          label: 'Hold antibiotics until the fluid culture grows, since she is afebrile and the pseudogout is likely',
          rating: 'unsafe',
          feedback: `Cultures take at least a day or two, and an untreated septic joint can be damaged quickly. Holding antibiotics because she looks well, and because you have an explanation, is the same anchoring that began the case.`,
          next: 'c-abx-unsafe'
        }
      ],
      reasoning: `There are two rules. If there are signs of sepsis, I do not delay blood cultures and antibiotics for anything, including the aspirate. If there are not, a few minutes to get the sample first improves the diagnostic yield without harming her. She has a NEWS2 of 1 and a normal lactate, so I take blood cultures, aspirate, and give antibiotics straight after. I do not wait for the fluid results, because a high cell count will not tell me that the infection is absent. I give the antibiotic the local guideline recommends, usually flucloxacillin, with an alternative if she is penicillin-allergic or at risk of MRSA.`
    },
    {
      id: 'c-abx-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Your registrar',
      text: `Your registrar overhears the plan. &ldquo;A negative Gram stain does not rule out infection, and it misses a good proportion of septic joints. If the count is high, she needs antibiotics before anyone has a culture result.&rdquo; She asks you to change the plan: take the samples, then give the first dose straight away, and not wait on a stain.`,
      next: 'proc-q'
    },
    {
      id: 'c-abx-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: '05:30',
      text: `By 05:30 Mrs Iyer&rsquo;s temperature is 37.9&deg;C, her heart rate is 112, and she is more drowsy. The nurse calls the registrar, who finds that she has had no antibiotics and no fluid sample. &ldquo;Blood cultures, then aspirate, then antibiotics, and now,&rdquo; she says. Several hours have been lost in a woman who is now unwell.`,
      next: 'proc-q'
    },
    {
      id: 'proc-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'She takes apixaban, with the last dose about five hours ago, and the graze is on the lateral side of the knee. How do you aspirate?',
      options: [
        {
          label: 'Get consent, use an aseptic technique and aspirate from the medial side away from the graze, continuing the apixaban',
          rating: 'best',
          feedback: `Aspiration in a patient on a DOAC, or on warfarin with the INR in the therapeutic range, is generally considered acceptable because the bleeding risk is low, and the diagnosis cannot wait. Use a fine needle, apply pressure afterwards and give bleeding advice. Do not go through the reddened or broken skin, because you may carry bacteria into the joint, so use the medial approach. Explain what you are doing and why, and ask for her consent. What would change your mind is a very high INR or a known bleeding disorder.`,
          next: 'results'
        },
        {
          label: 'Ask orthopaedics to aspirate her under their usual process, because she takes an anticoagulant',
          rating: 'good',
          feedback: `Many hospitals have a local pathway under which orthopaedics aspirate or wash out a suspected septic knee, and calling for help is safe. The risk is delay: you still need to have blood cultures taken and antibiotics ready to start. It is not wrong, but it adds a step: aspirating on apixaban is safe, so you do not need to hand this on because of the anticoagulant.`,
          next: 'results'
        },
        {
          label: 'Wait for the apixaban to wear off over a day or two, and start antibiotics now to cover her',
          rating: 'poor',
          feedback: `Treating with antibiotics before sampling is a bad compromise, because you lose the organism and the sensitivities, and a hot joint left undrained overnight is painful and can be damaged. Apixaban is not a reason to delay aspiration.`,
          next: 'c-proc-poor'
        },
        {
          label: 'Aspirate from the lateral side where the effusion is easiest to reach, with a dressing over the graze',
          rating: 'unsafe',
          feedback: `A needle through the graze and the reddened skin around it can push bacteria into a joint that may or may not be infected. A dressing does not make skin sterile. Avoid any break in the skin or area of cellulitis and choose another entry point.`,
          next: 'c-proc-unsafe'
        }
      ],
      reasoning: `There are three separate questions. Do I need to? Yes, because the diagnosis changes everything. Is it safe on an anticoagulant? Yes: joint aspiration on a DOAC, or on warfarin with the INR in range, is safe. The bleeding risk from a fine needle is very low, far lower than the risk of missing or delaying a septic joint, and I tell her that. Where do I put the needle? Through clean skin, so not the graze. I get consent, use a sterile technique, and make sure someone knows the result is coming. If orthopaedics are taking her, I make the call at once, but the anticoagulant is not a reason to hand it on.`
    },
    {
      id: 'c-proc-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Next morning',
      text: `Mrs Iyer had two doses of antibiotics overnight but no sample. The daytime registrar reads the notes. &ldquo;Apixaban is not a reason not to tap a knee. We may have lost the organism.&rdquo; She aspirates the knee at 08:30 using the medial approach. Mrs Iyer has spent a miserable night with a hot, undrained joint, and the antibiotics may reduce the yield.`,
      next: 'results'
    },
    {
      id: 'c-proc-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Stopped in time',
      text: `You are about to put the needle in when your registrar says, &ldquo;Stop. Not through that skin.&rdquo; She moves your needle to the medial side, where the skin is clean, and she cleans the area again. The aspirate goes ahead through intact skin. She adds, &ldquo;Never through a graze or cellulitis, because you risk pushing the bacteria in.&rdquo;`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Synovial fluid',
      text: `About 50 mL of cloudy yellow-green fluid, with immediate relief of her pain. Blood cultures taken and IV antibiotics started per local guidance.<br><br>
<table>
<tr><th>Test</th><th>Result</th></tr>
<tr><td>Appearance</td><td>Turbid, yellow-green</td></tr>
<tr><td><strong>Synovial white cell count</strong></td><td><strong>71 &times; 10&#8313;/L, 95% neutrophils</strong></td></tr>
<tr><td><strong>Polarised microscopy</strong></td><td><strong>Rhomboid crystals, weakly positively birefringent (calcium pyrophosphate)</strong></td></tr>
<tr><td>Gram stain</td><td>No organisms seen</td></tr>
<tr><td>Synovial and blood cultures</td><td>Pending</td></tr>
</table>
Mrs Iyer says, &ldquo;There. I told you. Crystals. I can go home on my tablets.&rdquo;`,
      next: 'interp-q'
    },
    {
      id: 'interp-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'The fluid has CPP crystals and no organisms on Gram stain. How do you interpret it?',
      options: [
        {
          label: 'Continue IV antibiotics and involve orthopaedics tonight: crystals and a negative Gram stain do not exclude infection',
          rating: 'best',
          feedback: `Crystals show that she has CPP deposition, which is common in an osteoarthritic knee and can be present without being the reason for the attack. Crystal disease and infection coexist, and a cell count this high with 95% neutrophils is concerning. The Gram stain misses a good proportion of septic joints, so a negative result does not help. What would change your mind is a negative culture after 48 hours with improvement, and the senior team agreeing.`,
          next: 'sbar-q'
        },
        {
          label: 'Continue IV antibiotics until the culture result is back, and involve orthopaedics only if it is positive',
          rating: 'good',
          feedback: `Continuing antibiotics is right. But the decision about drainage should not wait for the culture result, as a septic knee needs to be washed out, and the joint is at risk while you wait. A high cell count with neutrophils, in a patient at risk, is enough to ask for an orthopaedic opinion now.`,
          next: 'c-interp-good'
        },
        {
          label: 'Repeat the aspirate and cell count in twelve hours to see whether the count is falling before deciding',
          rating: 'poor',
          feedback: `A repeat may be useful later to monitor response, but using it to decide whether this is an infection wastes time. The first result already tells you that infection is a real possibility and that you need drainage advice.`,
          next: 'c-interp-good'
        },
        {
          label: 'Stop the antibiotics and treat this as pseudogout, since crystals are seen and no organisms are on the Gram stain',
          rating: 'unsafe',
          feedback: `This is a classic trap: two false reassurances. Crystals do not exclude infection, because the two can coexist, and a negative Gram stain does not exclude it either. Stopping antibiotics on this basis risks a missed septic joint, and permanent damage to the knee, in a diabetic patient.`,
          next: 'c-interp-unsafe'
        }
      ],
      reasoning: `Both findings are traps. The crystals prove she has CPP deposition, which is very common in an older knee with chondrocalcinosis, but they do not prove that CPP is the cause of this attack. A synovial fluid count of 71 with 95% neutrophils is more in keeping with infection than with most crystal attacks, although both can reach high counts, so the count alone is not diagnostic. The Gram stain is a rule-in test and not a rule-out test. Given her risk factors, the safest reading is that this is infection until cultures say otherwise, with crystals as a second finding. I continue antibiotics, and I ask for orthopaedic input about drainage.`
    },
    {
      id: 'c-interp-good',
      type: 'presentation',
      tone: 'consequence',
      label: 'Your registrar',
      text: `&ldquo;A hot knee with a count of 71 in a woman with diabetes and a graze needs the orthopaedic team to know now, not when the culture is back,&rdquo; she says. &ldquo;Washout is a decision they make, and the sooner they make it, the better the joint does.&rdquo; She asks you to ring them.`,
      next: 'sbar-q'
    },
    {
      id: 'c-interp-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Three hours later',
      text: `The antibiotics are stopped and colchicine is prescribed. By 09:00 Mrs Iyer is shivering with a temperature of 38.4&deg;C, heart rate 114 and blood pressure 104/62. The blood cultures flag positive with Gram-positive cocci in clusters. IV antibiotics are restarted urgently, she is treated for sepsis, and the orthopaedic team are called.`,
      next: 'sbar-q'
    },
    {
      id: 'sbar-q',
      type: 'decision',
      stage: 'Handover',
      prompt: 'You phone the on-call orthopaedic registrar. How do you hand over?',
      options: [
        {
          label: 'Give an SBAR: suspected septic knee, risks, apixaban timing and fluid results, and ask for a decision on washout',
          rating: 'best',
          feedback: `A good SBAR states the concern in the first sentence, gives the facts that affect the decision (diabetes, injection, graze, high count, crystals and a negative Gram stain, the anticoagulant and the last dose), and ends with a clear request: do they agree this needs a washout, and when. What would change your mind is the orthopaedic registrar having a reasonable alternative and asking you to hold.`,
          next: 'culture-grows'
        },
        {
          label: 'Give a clear summary of the infection concern, and leave the medication details for the morning ward round',
          rating: 'good',
          feedback: `The core message is right, but the anticoagulant and the time of the last dose determine when she can safely go to theatre, so they belong in the call. Missing them leads to a second call or a delay at the point where the team wants to book the theatre.`,
          next: 'c-sbar-good'
        },
        {
          label: 'Send an electronic referral marked urgent and let the team review her at the morning ward round',
          rating: 'poor',
          feedback: `An urgent task in an electronic queue is often read hours later. A possibly septic joint needs a direct conversation with a decision-maker, in real time, so that a plan and a theatre slot can be agreed.`,
          next: 'c-sbar-good'
        },
        {
          label: 'Phone and lead with the crystal result, saying infection looks unlikely, and ask about outpatient follow-up',
          rating: 'unsafe',
          feedback: `Handing over your own reassurance means that you pass the anchoring on to the next doctor. Framing the story as pseudogout makes it more likely that the team will agree and move on. Present the concern and the facts, not your conclusion.`,
          next: 'c-sbar-unsafe'
        }
      ],
      reasoning: `The SBAR needs to be short and clear. Situation: I think this 79-year-old has a septic arthritis of the right knee and I need a decision about washout. Background: diabetes, atrial fibrillation on apixaban (last dose at 22:00), a steroid injection nine days ago, and a graze. Assessment: afebrile, NEWS2 of 1, CRP 94, synovial white cell count 71 with 95% neutrophils, CPP crystals and a negative Gram stain. I think the crystals are a second finding and I am treating this as infection. Recommendation: please review tonight or first thing, and tell me about timing of the washout, anticoagulation and whether she should be nil by mouth.`
    },
    {
      id: 'c-sbar-good',
      type: 'presentation',
      tone: 'consequence',
      label: 'A longer night',
      text: `The orthopaedic registrar rings back and asks, &ldquo;Is she anticoagulated? When was the last dose? Is she nil by mouth?&rdquo; You have to find out and ring again. Her theatre slot is booked for later in the morning rather than first thing, and Mrs Iyer has to stay nil by mouth without an explanation for several hours.`,
      next: 'culture-grows'
    },
    {
      id: 'c-sbar-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Pushed back',
      text: `The orthopaedic registrar sounds relieved. &ldquo;Pseudogout, then. I don&rsquo;t need to see her. Send her to clinic.&rdquo; Your consultant overhears, takes the phone, and gives the facts again: diabetes, an injection, a graze, a count of 71 with 95% neutrophils, and a negative Gram stain that does not help. The orthopaedic registrar agrees to review her now.`,
      next: 'culture-grows'
    },
    {
      id: 'culture-grows',
      type: 'presentation',
      tone: 'results',
      label: 'The next morning',
      text: `Mrs Iyer has been seen by orthopaedics, her apixaban has been held for the procedure, and the plan is a washout of the knee that day. The microbiologist telephones: the <strong>synovial fluid culture and one set of blood cultures grow <em>Staphylococcus aureus</em></strong> (sensitive to flucloxacillin). The antibiotics are continued.<br><br>
Meena has arrived on the ward. Mrs Iyer says, &ldquo;So I had calcium in the knee, but the doctors say it was also an infection. Was it the injection? Will I lose my leg? I just want to go home to my garden.&rdquo; Meena looks worried and asks, &ldquo;Can someone explain to us what&rsquo;s going on?&rdquo;`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'How do you talk to Mrs Iyer and her daughter?',
      options: [
        {
          label: 'Explain the infection and the plan honestly, answer the injection question openly, and check understanding',
          rating: 'best',
          feedback: `She is entitled to a plain account: there is a bacterial infection in the knee, it is serious but treatable, it needs a washout and several weeks of antibiotics, and she will probably be in hospital for some time. The calcium crystals were also there, and that is why the picture was confusing. On the injection, be honest: the source cannot be proved, but injections and skin breaks are both recognised routes, and the team will look into it. Ask for her permission to include Meena, and use teach-back.`,
          next: 'conclusion'
        },
        {
          label: 'Explain the infection and the treatment, and say the question about the injection is one for her GP',
          rating: 'good',
          feedback: `The infection and the plan are explained clearly. But sidestepping a direct question about the injection can sound evasive and erodes trust. You can be honest about what is known and unknown without blaming anyone, and say that her concerns will be passed on.`,
          next: 'c-comm'
        },
        {
          label: 'Tell them it is mostly her usual pseudogout with a small infection, and she should be home in a day or two',
          rating: 'poor',
          feedback: `This is falsely reassuring and untrue. A staphylococcal joint infection with bacteraemia is serious and she will need weeks of treatment. Misleading her now will cause distress and distrust when the reality emerges.`,
          next: 'c-comm'
        },
        {
          label: 'Take Meena aside to give her the full picture first, since her mother is tired and has had a long night',
          rating: 'poor',
          feedback: `Mrs Iyer has capacity and the right to hear her own diagnosis first. Talking to her daughter without her agreement is a confidentiality and dignity failure, and it makes her feel pushed aside. Ask her whether she would like Meena to be there.`,
          next: 'c-comm'
        }
      ],
      reasoning: `Mrs Iyer has asked three questions: what is it, was it the injection, and when can she go home. I answer in that order and in plain language. There is a germ in the knee joint, in the blood too, and it needs a small operation to wash the knee out and a few weeks of antibiotics, probably some by drip first. The calcium crystals are real and may be why her knee has been troublesome, but they did not stop an infection from also being there. I do not know where the germ came from, and I say so. I ask what matters most to her, which is her independence and her garden, and I plan around it with the therapists and discharge team.`
    },
    {
      id: 'c-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'The ward round',
      text: `Later, the ward nurse tells you that Mrs Iyer has asked whether she can leave to feed her cat, and that Meena is angry that nobody has explained what is happening. Your consultant sits down with them both, goes through the diagnosis and plan again, answers the question about the injection, and asks Mrs Iyer what matters most to her.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: septic arthritis of the right knee (<em>Staphylococcus aureus</em>), with coexisting calcium pyrophosphate crystal deposition.</strong><br><br>
Mrs Iyer had her knee washed out by the orthopaedic team and completed a prolonged course of antibiotics, starting with intravenous treatment. Her blood cultures cleared and she went through rehabilitation with the physiotherapists before returning home. Her diabetes was reviewed, and the injection pathway was discussed with her GP practice.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>A normal temperature does not exclude septic arthritis, especially in an older patient with diabetes who takes regular paracetamol.</li>
<li>Prior pseudogout in the same knee raises the odds of CPP, but it does not lower the odds of infection. Do not anchor on the familiar label.</li>
<li>Examine to find out where the problem lies: effusion, bursa or skin. Look for the skin break.</li>
<li>If there are sepsis features, do not delay blood cultures and antibiotics for the aspirate. If there are none, aspirate and then give antibiotics promptly, without waiting for results.</li>
<li>Aspirate through clean skin. An anticoagulant is not a reason to delay: aspiration on a DOAC, or on warfarin with the INR in range, is safe.</li>
<li>Crystals do not exclude infection and a negative Gram stain does not exclude infection. Treat the patient and wait for cultures.</li>
<li>Hand over with SBAR, state the concern clearly, and ask for a decision about washout.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;There is a germ in your knee joint, and it has got into your blood as well. We will wash the joint out with a small operation and treat you with antibiotics, first through a drip, for several weeks. The calcium crystals are also there, but the infection is the urgent problem.&rdquo;<br><br>
<strong>Safety-netting:</strong> after discharge, a return of heat, swelling, redness or pain in the knee, a fever or shivering, new pain in the back or another joint, or any problem with the antibiotics (diarrhoea, rash) needs urgent review.`,
      keyLearning: [
        'A hot swollen joint is septic arthritis until proved otherwise. A normal temperature is common in older people and in those who take regular paracetamol.',
        'A history of pseudogout in the same joint does not lower the probability of infection. Beware anchoring on a familiar label.',
        'Tell an effusion from bursitis or cellulitis by mapping the swelling and comparing active and passive movement. Look for a skin break.',
        'If there are sepsis features, do not delay blood cultures and antibiotics. If not, aspirate first and give antibiotics promptly afterwards.',
        'Aspirate through clean, intact skin. Being on a DOAC, or on warfarin with the INR in range, is generally not an absolute contraindication.',
        'Crystals do not exclude infection, and a negative Gram stain does not exclude infection. Wait for cultures and ask orthopaedics about washout.',
        'Use SBAR for escalation: state the concern first, give the facts that affect the decision, and end with a request.'
      ],
      relatedTests: ['Synovial fluid cell count, microscopy and Gram stain', 'Synovial fluid culture', 'Blood cultures', 'CRP and white cell count', 'Knee X-ray', 'Lactate', 'HbA1c'],
      goingFurther: `<strong>Prosthetic joint infection:</strong> if Mrs Iyer had a knee replacement, the approach would be different. A painful or swollen prosthetic joint should not be aspirated in the emergency department. It needs an orthopaedic decision, because the sample should be taken in controlled conditions, ideally before antibiotics in a stable patient, and because the infection involves the implant and may need revision surgery. Early infections (in the first weeks to months after surgery) and late haematogenous infections behave differently.<br><br>
<strong>Antibiotic principles:</strong> treatment starts empirically according to the local guideline (flucloxacillin is usual for likely staphylococcus, with a different drug for penicillin allergy or MRSA risk), and is then narrowed once the organism and sensitivities are known. Drainage or washout is part of treatment. The total duration is measured in weeks, not days, and depends on the organism, bacteraemia, response, joint drainage and local policy. The switch from intravenous to oral treatment is also determined by local policy and microbiology advice. Look for a source of bacteraemia and, with <em>S. aureus</em> bacteraemia, consider other sites and endocarditis.<br><br>
<strong>Other causes by age:</strong> <em>Staphylococcus aureus</em> is the commonest cause in adults and children. In young children, <em>Kingella kingae</em> is a recognised cause and may be hard to culture. In sexually active young adults, disseminated gonococcal infection causes a migratory polyarthralgia, tenosynovitis and skin lesions, and a single hot joint with few organisms on Gram stain, so culture on appropriate media and nucleic acid tests of mucosal sites are needed. In sickle cell disease, <em>Salmonella</em> is a consideration.<br><br>
<strong>Synovial counts:</strong> very high counts favour infection, but crystal arthritis can also produce counts in the same range, and infection can occur with a lower count. No single threshold rules infection in or out, so the count is read with the clinical picture and the cultures.`
    }
  ]
};
