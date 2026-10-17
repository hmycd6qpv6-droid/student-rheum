/* ana-case-3: The Weak Gardener */

export default {
  id: 'ana-case-3',
  title: 'The Weak Gardener',
  summary: '56-year-old with months of heavy arms and legs, on a statin',
  setting: 'GP surgery',
  difficulty: 'intermediate',
  curriculum: ['PR-WEAK', 'RE-MYOSITIS', 'LO3', 'LO4', 'IX-BLOODS', 'IX-SEROLOGY', 'LO7', 'LO8'],
  objectives: [
    'Separate true proximal weakness from pain, stiffness and fatigue by asking about specific tasks',
    'Build a differential for proximal weakness and resist anchoring on the statin',
    'Interpret raised transaminases in the context of a very high CK',
    'Recognise dysphagia and breathlessness as red flags that make this a same-day problem',
    'Explain inflammatory myositis and the need for cancer screening sensitively'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'GP surgery, Tuesday afternoon',
      text: `<strong>Mrs Grace Adeyemi, 56</strong>, a retired school cook who now runs a church allotment and looks after her grandson two days a week. She lives with her husband Tunde. She has booked "tired arms and legs for a few months".<br><br>
<strong>Past history:</strong> type 2 diabetes (metformin), hypertension (amlodipine), and <strong>atorvastatin</strong> for 2 years, increased from 20 mg to 40 mg five months ago. She does not smoke and drinks very little alcohol.<br><br>
The GP registrar who supervises you glances at the repeat-prescription screen and says: <em>"Probably the statin. Let's see what you make of her."</em>`,
      next: 'q-history'
    },
    {
      id: 'q-history',
      type: 'decision',
      stage: 'History',
      prompt: '"My arms and legs feel tired and heavy." How do you use your first few minutes?',
      options: [
        {
          label: 'Ask exactly what she can no longer do: stairs, standing from a chair, lifting her arms to hang washing',
          rating: 'best',
          feedback: `Asking about specific tasks is how you separate <strong>true weakness</strong> from pain, stiffness or fatigue, which patients all describe as "weak" or "tired". Trouble rising from a chair, climbing stairs, or lifting the arms to hang washing or wash hair points to proximal weakness. What would change your mind: tasks that need distal strength, such as buttons and jar lids, being the ones she struggles with.`,
          next: 'history-result'
        },
        {
          label: 'Ask about aching and morning stiffness in her shoulders and hips to check for polymyalgia rheumatica',
          rating: 'good',
          feedback: `PMR is a sensible differential at 56, and stiffness lasting more than 45 minutes would raise it. But you have started from a diagnosis rather than from what "weak" means. PMR causes pain and stiffness with <em>normal</em> power on testing, so first establish whether she is weak at all.`,
          next: 'history-result'
        },
        {
          label: 'Ask when the atorvastatin was increased and whether the symptoms followed the new dose',
          rating: 'poor',
          feedback: `This is <strong>anchoring</strong> on the registrar's comment. The timing question is worth asking eventually, but asked first it frames the whole consultation around one cause. A statin can cause muscle symptoms, yet it can also coexist with, or unmask, something else.`,
          next: 'history-anchor'
        },
        {
          label: 'Ask about her mood, sleep and caring commitments, since tiredness is common in busy carers',
          rating: 'poor',
          feedback: `Psychosocial context matters (LO1), and fatigue is common in carers. But attributing a three-month symptom to stress before you know whether she is truly weak is <strong>premature closure</strong>. Ask the functional questions first, then explore context.`,
          next: 'history-anchor'
        }
      ],
      reasoning: `"Weak" is a word patients use for at least four different things: true loss of power, pain, stiffness and fatigue. The cheapest, most discriminating question in the whole case is "what task can you no longer do?" Chair, stairs, hair-washing and shelves are proximal tasks; buttons, jars and keys are distal. Doing this before forming a theory stops the statin comment from steering you.`
    },
    {
      id: 'history-anchor',
      type: 'presentation',
      tone: 'consequence',
      label: 'A missed cue',
      text: `You conclude the consultation with <em>"?statin myalgia"</em> in your notes and the registrar nods. As Mrs Adeyemi stands to leave, she pushes down on the arms of the chair with both hands and needs two attempts to rise. You realise you never actually asked what she can and cannot do. You sit her back down and start again.`,
      next: 'history-result'
    },
    {
      id: 'history-result',
      type: 'presentation',
      label: 'History, focused on function',
      text: `<ul>
<li><strong>Weakness:</strong> over about 3 months. She now pulls herself up the stairs by the banister, pushes on the chair arms to stand, and struggles to lift her arms to hang washing or wash her hair. She can still open jars and do buttons. The weakness is constant through the day rather than building up with use, and she has no drooping eyelids or double vision.</li>
<li><strong>Pain and stiffness:</strong> a dull ache in the thighs after exertion, but not the main problem. Morning stiffness lasts about 15 minutes. No headache, jaw pain or visual symptoms.</li>
<li><strong>Breathing and swallowing:</strong> breathless climbing one flight of stairs and a dry cough for two months, which she put down to "a cold that won't go". For about a month food has "stuck" and she coughs on thin drinks such as tea.</li>
<li><strong>Skin:</strong> a red-brown itchy rash over her knuckles that she treated as eczema, and sore, cracked skin on the sides of her fingers.</li>
<li><strong>General:</strong> about 3 kg weight loss over 3 months without trying. No fever or night sweats.</li>
<li><strong>Drugs and alcohol:</strong> nothing new apart from the atorvastatin dose rise. No steroids. About 2 units of alcohol a week. No family history of muscle disease.</li>
<li><strong>Life:</strong> she is frightened about managing the allotment and carrying her grandson. Tunde has started helping her up the front step.</li>
</ul>`,
      next: 'reflect-ddx'
    },
    {
      id: 'reflect-ddx',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'Before you examine her: what is your differential for proximal weakness in a 56-year-old on a statin, and which diagnosis can you least afford to miss?',
      reveal: `<strong>A reasonable list, with the feature that separates each:</strong>
<ul>
<li><strong>Inflammatory myositis</strong> (dermatomyositis, antisynthetase syndrome): progressive painless weakness, rash, dysphagia, breathlessness, very high CK. <em>The one not to miss</em>, because of lung and swallowing involvement and the cancer association.</li>
<li><strong>Statin-related myopathy:</strong> usually aching with a mild CK rise, improving within weeks of stopping. Rarely an <em>immune-mediated necrotising myopathy</em> that does not settle.</li>
<li><strong>Hypothyroidism:</strong> slow reflexes, weight gain, cold intolerance. Check TSH.</li>
<li><strong>Steroid myopathy:</strong> needs a steroid history. Normal CK.</li>
<li><strong>Osteomalacia:</strong> bone pain, waddling gait, low vitamin D, raised ALP.</li>
<li><strong>Myasthenia gravis:</strong> fatigable weakness, ptosis, diplopia, bulbar symptoms.</li>
<li><strong>Polymyalgia rheumatica:</strong> pain and stiffness with normal power, raised ESR. A mimic.</li>
<li><strong>Inclusion body myositis:</strong> usually over 50, slow, with finger flexor and quadriceps weakness.</li>
<li><strong>Neuropathy or diabetic amyotrophy:</strong> sensory change, absent reflexes, asymmetric thigh pain. She is diabetic.</li>
<li><strong>Alcohol myopathy:</strong> unlikely at 2 units a week.</li>
</ul>
The statin is on the list, but a rash, breathlessness, swallowing difficulty and weight loss are not explained by it.`,
      next: 'q-exam'
    },
    {
      id: 'q-exam',
      type: 'decision',
      stage: 'Examination',
      prompt: 'Mrs Adeyemi agrees to be examined. What is the most useful focused examination?',
      options: [
        {
          label: 'Grade proximal and distal power, then inspect face, hands, chest and back with consent and a chaperone, and check observations',
          rating: 'best',
          feedback: `This compares proximal with distal MRC grades, looks for the skin signs that make a diagnosis, and checks for lung involvement. Explaining each step, offering a chaperone and exposing only what is needed respects dignity (LO8) and gets a better skin examination. Normal power would send you back to PMR and the other mimics.`,
          next: 'exam-result'
        },
        {
          label: 'Do a full neurological examination of the limbs: tone, power, reflexes, sensation and coordination, with a look for wasting',
          rating: 'good',
          feedback: `A neurological examination is necessary and would show proximal weakness with normal reflexes and sensation, steering you away from neuropathy. But it leaves out the skin, the examination most likely to give you the diagnosis, and the chest.`,
          next: 'exam-result'
        },
        {
          label: 'Examine shoulder and hip range of movement and palpate for tender points around her shoulder and hip girdles',
          rating: 'poor',
          feedback: `Range of movement and tenderness test pain and stiffness, which is not her main complaint. PMR can have full power, so this examination cannot distinguish the conditions on your list. Power testing is the key step.`,
          next: 'exam-partial'
        },
        {
          label: 'Ask her to undress to her underwear so you can see all her skin in one go and save some time',
          rating: 'poor',
          feedback: `A skin examination is important, but exposing a patient fully without explanation or a chaperone breaches consent and dignity (LO8). It is also unnecessary: the face, hands, upper chest and back are the key sites. People are often reluctant to be examined if they have not been told why.`,
          next: 'exam-partial'
        }
      ],
      reasoning: `The examination should answer the question the history raised: is there objective proximal weakness, and is there a skin or lung clue to a cause? MRC grading of shoulders, hips and neck flexors against hands and feet gives the pattern. In myositis the proximal muscles go first and reflexes and sensation stay normal. Skin signs may be subtle: on brown and black skin the rash is dusky violet or grey-brown rather than bright red, and is often easier to feel as scaly papules than to see. Recording a resting respiratory rate and SpO₂ takes thirty seconds and turns a hunch about the chest into data.`
    },
    {
      id: 'exam-partial',
      type: 'presentation',
      tone: 'consequence',
      label: 'An incomplete examination',
      text: `Your examination is partial. The registrar repeats it more thoroughly. He explains what he needs to see and why, offers a chaperone, and uncovers only one area at a time, and Mrs Adeyemi relaxes. He finds what you missed.`,
      next: 'exam-result'
    },
    {
      id: 'exam-result',
      type: 'presentation',
      label: 'Examination',
      text: `<strong>Power (MRC grade):</strong>
<table>
<tr><th>Muscle group</th><th>Right</th><th>Left</th></tr>
<tr><td>Neck flexion</td><td colspan="2">4/5</td></tr>
<tr><td>Shoulder abduction</td><td>4/5</td><td>4/5</td></tr>
<tr><td>Hip flexion</td><td>4-/5</td><td>4-/5</td></tr>
<tr><td>Grip and wrist extension</td><td>5/5</td><td>5/5</td></tr>
<tr><td>Ankle dorsiflexion</td><td>5/5</td><td>5/5</td></tr>
</table>
Reflexes are normal. Sensation is normal. No wasting or fasciculation. She cannot rise from a low chair without using her arms.<br><br>
<strong>Skin:</strong> flat-topped, dusky purple-brown papules with fine scale over the knuckles and finger joints (<strong>Gottron's papules</strong>); on her skin they look darker brown or violet-grey rather than red, and you notice them most by touch. A dusky violet discolouration with mild swelling around both eyes (<strong>heliotrope</strong>), and a similar patchy rash over the V of the chest and the upper back (<strong>V-sign and shawl sign</strong>). Rough, fissured skin on the sides of several fingers (<strong>mechanic's hands</strong>).<br><br>
<strong>Chest and swallowing:</strong> respiratory rate 20, SpO₂ 94% on air at rest, <strong>fine bibasal inspiratory crackles</strong>. Her voice is slightly nasal and she coughs after a small sip of water.<br><br>
Temperature 37.2 °C, pulse 88, BP 138/82.`,
      next: 'q-invest'
    },
    {
      id: 'q-invest',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'What do you do about investigations today?',
      options: [
        {
          label: 'Bloods for CK, LFTs, TFTs, U&E, bone profile, FBC, ESR/CRP and ANA, plus a chest X-ray; ask a specialist about myositis antibodies',
          rating: 'best',
          feedback: `This tests each leading cause: CK for muscle, TFTs and bone profile for the metabolic mimics, inflammatory markers and ANA for autoimmunity, and a chest X-ray for the breathlessness. Myositis-specific antibodies are specialist tests, ordered with rheumatology advice, not a blind GP screen. A normal CK in a pain-and-stiffness picture would shift you to PMR.`,
          next: 'results'
        },
        {
          label: 'Bloods for CK, LFTs, TFTs and U&E; stop the atorvastatin and review the results by phone in a few days',
          rating: 'good',
          feedback: `Stopping the statin and rechecking CK is reasonable when symptoms are mild and there is no rash or chest involvement. Here the rash, crackles, weight loss and swallowing difficulty make that too cautious. You are right to start with CK, but omitting inflammatory markers, a chest X-ray and a clear timeline for review is a gap.`,
          next: 'results'
        },
        {
          label: 'A broad autoimmune screen: ANA, ENA, dsDNA, RF, anti-CCP, ANCA, complement and HLA-B27, all in one request',
          rating: 'poor',
          feedback: `This is the <strong>indiscriminate panel</strong>. Most of these tests have nothing to do with muscle weakness, and any low-positive result creates noise. Targeted tests, with CK first, answer the question you actually have.`,
          next: 'invest-panel'
        },
        {
          label: 'Stop the atorvastatin, reassure her that it should wear off, and repeat bloods in six weeks to see how she is',
          rating: 'unsafe',
          feedback: `This ignores the swallowing difficulty, the breathlessness and the rash. It is <strong>false reassurance</strong>: a rash plus lung signs plus dysphagia is inflammatory myositis until proven otherwise, and six weeks could allow lung disease to progress or cause an aspiration event.`,
          next: 'invest-danger'
        }
      ],
      reasoning: `Mild, isolated muscle aches on a statin with a modest CK rise: stopping the drug and rechecking is sensible. This is not that case. A rash with the pattern of dermatomyositis, crackles, borderline hypoxia at rest and coughing on fluids change the pre-test probability so far that CK is a confirmation, not a gamble. Note what the standard bloods are for: CK confirms muscle disease, TSH and bone profile exclude the cheap mimics, and the chest X-ray records the baseline. Myositis antibodies matter for prognosis and cancer risk but come later, through a specialist.`
    },
    {
      id: 'invest-panel',
      type: 'presentation',
      tone: 'consequence',
      label: 'The wide panel',
      text: `The panel returns a day later with a <strong>low-positive rheumatoid factor</strong>, which sets the registrar talking about rheumatoid arthritis for ten minutes. RF is positive in many conditions and says nothing about weakness. The one test that matters, <strong>CK</strong>, was not on your list, so you add it, along with the other targeted bloods.`,
      next: 'results'
    },
    {
      id: 'invest-danger',
      type: 'presentation',
      tone: 'danger',
      label: 'Ten days later',
      text: `Tunde telephones the surgery: Mrs Adeyemi <strong>choked on soup</strong> last night and now gets breathless dressing. She is seen that afternoon with SpO₂ 91% on air and is clearly worse. You arrange bloods and a chest X-ray at once. The delay was avoidable and the swallowing difficulty has progressed.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Results',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>CK</td><td><strong>6,200 U/L</strong></td><td>&lt; 200</td></tr>
<tr><td>ALT</td><td><strong>148 U/L</strong></td><td>&lt; 35</td></tr>
<tr><td>AST</td><td><strong>210 U/L</strong></td><td>&lt; 35</td></tr>
<tr><td>GGT</td><td>36 U/L</td><td>&lt; 38</td></tr>
<tr><td>ALP</td><td>88 U/L</td><td>30 to 130</td></tr>
<tr><td>Bilirubin / albumin</td><td>9 µmol/L / 38 g/L</td><td>normal</td></tr>
<tr><td>TSH / free T4</td><td>1.9 mU/L / normal</td><td>normal</td></tr>
<tr><td>Creatinine / eGFR</td><td>71 µmol/L / &gt; 90</td><td>normal</td></tr>
<tr><td>Corrected calcium</td><td>2.31 mmol/L</td><td>2.2 to 2.6</td></tr>
<tr><td>Hb / WCC / platelets</td><td>121 g/L / 7.8 / 280 ×10⁹/L</td><td>Hb borderline</td></tr>
<tr><td>CRP / ESR</td><td>12 mg/L / 34 mm/h</td><td>mildly raised</td></tr>
<tr><td>HbA1c</td><td>52 mmol/mol</td><td>diabetic range</td></tr>
<tr><td>ANA (HEp-2 IF)</td><td>No nuclear staining; cytoplasmic staining reported</td><td></td></tr>
</table>`,
      next: 'q-interpret'
    },
    {
      id: 'q-interpret',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'The ALT and AST are both raised. How do you interpret the results as a whole?',
      options: [
        {
          label: 'The enzymes are coming from muscle (huge CK, normal GGT and ALP); with the rash and lungs this is myositis until proven otherwise',
          rating: 'best',
          feedback: `ALT and AST are present in muscle as well as liver, so they rise in myositis. The normal GGT and ALP point away from the liver, and a CK more than thirty times normal explains everything. The statin is stopped, but the rash, crackles and dysphagia drive the diagnosis. What would change your mind: a normal CK, or a hepatic cause on liver ultrasound or viral serology.`,
          next: 'q-escalate'
        },
        {
          label: 'The enzymes are from muscle, so it is statin myopathy or myositis; stop the statin and refer routinely to rheumatology',
          rating: 'good',
          feedback: `You correctly identified muscle as the source and stopped the statin. But "routine" does not match what you found on examination. Hypoxia on exertion, crackles and difficulty swallowing mean the next step is about urgency, not a clinic letter, and you have not yet linked the rash with the lungs.`,
          next: 'q-escalate'
        },
        {
          label: 'Statin-induced liver injury: stop the statin, refer to hepatology and recheck the LFTs in a month',
          rating: 'poor',
          feedback: `This is the classic trap: <strong>treating the test rather than the patient</strong>. With a CK of 6,200, a normal GGT and a rash, the liver is a bystander. Hepatology referral sends her down the wrong pathway.`,
          next: 'interpret-consequence'
        },
        {
          label: 'Mild liver derangement from the statin; halve the dose and repeat the LFTs and CK in six weeks',
          rating: 'unsafe',
          feedback: `Continuing a statin when the CK is thirty times normal risks worsening muscle injury and rhabdomyolysis, and it misses an organ-threatening diagnosis. Raised transaminases with a very high CK are not a liver problem.`,
          next: 'interpret-consequence'
        }
      ],
      reasoning: `Transaminases are not liver-specific. ALT and AST are in skeletal muscle too, and in myositis they often rise before anyone thinks of CK. The tell is the pattern: GGT and ALP, which come from bile ducts, are normal; bilirubin and albumin are normal; and the CK is in the thousands. "It's the liver, stop the statin and recheck" feels sensible but loses weeks. Also note the hierarchy: the statin might contribute, but it does not explain a heliotrope rash, V-sign or crackles. When one cause fits some of the findings and another fits all of them, pursue the second.`
    },
    {
      id: 'interpret-consequence',
      type: 'presentation',
      tone: 'consequence',
      label: 'A phone call from the lab',
      text: `The duty biochemist telephones the surgery: <em>"That CK is more than thirty times the upper limit. Whatever is going on, this patient needs to be seen today."</em> The afternoon has gone, and the call to a specialist now falls late in the day.`,
      next: 'q-escalate'
    },
    {
      id: 'q-escalate',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'Mrs Adeyemi is hypoxic on exertion, coughs on fluids and has a CK of 6,200. What is the right level of response?',
      options: [
        {
          label: 'Phone the on-call rheumatologist now with an SBAR, and arrange same-day hospital assessment given the swallowing and chest findings',
          rating: 'best',
          feedback: `Dysphagia, borderline hypoxia and crackles mean possible <strong>interstitial lung disease and pharyngeal weakness</strong> with a risk of aspiration, so this cannot wait for a letter. A direct call gets the right team and the right bed, and an SBAR makes the urgency clear. What would change your mind: a normal chest and swallow, in which case a rapid-access clinic would be defensible.`,
          next: 'sameday'
        },
        {
          label: 'Send her to the emergency department with a handwritten letter explaining the concern about her chest and swallowing',
          rating: 'good',
          feedback: `Same-day assessment is the right level, and the ED can start observations and imaging. But without speaking to rheumatology she may wait hours for a generalist who has not seen this pattern. A telephone SBAR to the specialist team is more efficient.`,
          next: 'sameday'
        },
        {
          label: 'Write an urgent referral letter to rheumatology asking for a clinic appointment within the next week or so',
          rating: 'poor',
          feedback: `"Urgent" in a letter usually means days. The red flags (dysphagia, hypoxia, crackles) require same-day assessment. A week's wait leaves her at risk of aspiration and progressive respiratory failure.`,
          next: 'escalate-poor'
        },
        {
          label: 'Make a routine referral, give safety-net advice and book a review with you in two weeks to check progress',
          rating: 'unsafe',
          feedback: `This under-triages a patient with signs of lung involvement and a swallowing problem. Safety-netting is good practice but cannot replace appropriate urgency: she would be waiting at home while her lungs and swallow deteriorate.`,
          next: 'escalate-danger'
        }
      ],
      reasoning: `Urgency should follow the worst plausible diagnosis, not the average one. Dysphagia in myositis means pharyngeal muscle weakness and aspiration risk; breathlessness with crackles and low sats could mean interstitial lung disease, which can progress quickly; and respiratory muscle weakness can sneak up as a "breathless" patient with no lung disease at all. Any one of these makes this same-day. A CK in the thousands, a rash and these red flags together is not a "see in clinic" problem. Compare with the mild end of the spectrum: a CK of 800 with calf aches on a statin, no rash and a normal chest, where stopping and rechecking is entirely reasonable.`
    },
    {
      id: 'escalate-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two days later',
      text: `The letter is triaged for the following week. Two days later their daughter telephones: her mother coughed throughout supper and is more breathless than before. An ambulance takes her to hospital that night.`,
      next: 'sameday'
    },
    {
      id: 'escalate-danger',
      type: 'presentation',
      tone: 'danger',
      label: 'Nine days later',
      text: `Nine days later paramedics find Mrs Adeyemi breathless at rest after choking on a meal. Her <strong>SpO₂ is 88% on air</strong>. She needs oxygen and is taken to hospital. The routine referral is still in the queue.`,
      next: 'sameday'
    },
    {
      id: 'sameday',
      type: 'presentation',
      label: 'Hospital assessment',
      text: `The rheumatology team assess Mrs Adeyemi. Her <strong>SpO₂ falls from 94% to 89% after walking along the ward corridor</strong>, and the chest X-ray shows <strong>bibasal reticular shadowing</strong>. A bedside swallow screen is failed, so she is kept nil by mouth with intravenous fluids until a speech and language therapist has assessed her. The atorvastatin is stopped. The team plan a high-resolution CT of the chest, spirometry with gas transfer, repeat CK, and send a myositis-specific antibody panel. Once baseline tests are done, they will start immunosuppression.<br><br>
The registrar adds: <em>"One more thing. In an adult, dermatomyositis is linked with cancer."</em>`,
      next: 'q-malignancy'
    },
    {
      id: 'q-malignancy',
      type: 'decision',
      stage: 'Manage',
      prompt: 'How should the possible link with cancer be handled?',
      options: [
        {
          label: 'Offer age- and sex-appropriate screening: targeted history and examination, up-to-date national screening, and CT as the specialist team advises',
          rating: 'best',
          feedback: `Adult dermatomyositis carries a raised cancer risk, so a structured, age-appropriate search is standard, and it is wise to do it early. For a 56-year-old woman that means a careful history and examination, checking that breast, cervical and bowel screening are up to date, and the imaging the specialist team recommends. What would change your mind: the antibody result and the pace of illness refine the likelihood but do not remove the need to look.`,
          next: 'q-communicate'
        },
        {
          label: 'Check her national screening is up to date and leave the decision on any imaging to the specialist team to make',
          rating: 'good',
          feedback: `Checking screening status is a useful first step. But leaving the rest entirely open risks a delay, and the question is also yours to raise: a plan agreed with the team is better than one that depends on someone else remembering.`,
          next: 'q-communicate'
        },
        {
          label: 'Wait for the antibody result and only screen if she turns out to be anti-TIF1-γ positive, to avoid unnecessary scans',
          rating: 'poor',
          feedback: `Some antibodies carry a higher cancer risk, but the risk exists across adult dermatomyositis, and results can take weeks. Waiting delays the search in someone who is losing weight.`,
          next: 'malignancy-wait'
        },
        {
          label: 'Request a full panel of tumour markers (CA125, CA19-9, CEA, PSA and AFP) now as a quick way to look for cancer',
          rating: 'poor',
          feedback: `Tumour markers are not recommended for screening. They are neither sensitive nor specific, and any false positive triggers a cascade of further tests and anxiety. Structured imaging and appropriate national screening are better.`,
          next: 'malignancy-markers'
        }
      ],
      reasoning: `Cancer can appear before, with or after the muscle disease, so the search starts at diagnosis rather than waiting for the antibody. The aim is not to find everything but to find the common cancers for her age and sex, and national screening programmes plus targeted imaging do this better than blood markers. Notice also how to frame it: this is a routine part of the work-up for her condition, not a suggestion that she has cancer. How you say it is as important as what you order.`
    },
    {
      id: 'malignancy-wait',
      type: 'presentation',
      tone: 'consequence',
      label: 'The antibody delay',
      text: `The antibody result is not expected for a couple of weeks. The registrar points out that the team will start imaging now regardless: waiting for an antibody would delay a search that applies to all adults with dermatomyositis, and she has lost 3 kg.`,
      next: 'q-communicate'
    },
    {
      id: 'malignancy-markers',
      type: 'presentation',
      tone: 'consequence',
      label: 'A marker result',
      text: `The <strong>CA125 comes back mildly raised</strong>. Inflammatory illness is a common non-cancer cause, but the result prompts a pelvic ultrasound and a gynaecology opinion before anyone can reassure Mrs Adeyemi. It turns out to be nothing, but the extra worry and a week of tests were avoidable.`,
      next: 'q-communicate'
    },
    {
      id: 'q-communicate',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'Next morning, Mrs Adeyemi and Tunde ask: "What is wrong with her, and why do you need to scan her for cancer?"',
      options: [
        {
          label: 'Explain it is likely inflammation of muscle with skin and lung involvement, that scans are routine for this condition, and check what they understood',
          rating: 'best',
          feedback: `This names the likely diagnosis in plain language, links it to what she has experienced (the rash, the weakness), explains why cancer checks are part of the standard work-up without implying she has cancer, and uses teach-back. Offer time for questions and ask who else she would like involved.`,
          next: 'outcome'
        },
        {
          label: 'Explain the muscle condition fully first, then offer a separate conversation about the cancer checks once it has sunk in',
          rating: 'good',
          feedback: `Staging information can help people take it in. But she will see the CT on her ward list and Tunde has already asked directly. Delaying the answer to a direct question can feel evasive, and it is better to be honest while checking what she wants to know.`,
          next: 'outcome'
        },
        {
          label: 'Say it is an inflammatory problem, the scans are routine, and the doctors will explain more when the results are back',
          rating: 'poor',
          feedback: `This is vague and avoids a direct question. Patients who sense something is being held back fill the gap with their worst fears, and she has a right to understand why tests are being done.`,
          next: 'communicate-poor'
        },
        {
          label: 'Tell them this condition is often caused by an underlying cancer and that is what the scans will be looking for',
          rating: 'poor',
          feedback: `This is blunt and overstated. The link with cancer is real but most adults with dermatomyositis do not have a cancer found, and presenting the risk as the explanation is frightening and inaccurate.`,
          next: 'communicate-poor'
        }
      ],
      reasoning: `Consent to scans, honesty and fear management all depend on this conversation. She and her husband asked a direct question, which deserves a direct but proportionate answer. A good explanation links tests to what they have seen (the rash, the weakness, the cough), says what is known and what is not, puts the cancer link in its true place as a possibility to check and not a likely finding, and asks what they have understood. Written information and a named contact help too.`
    },
    {
      id: 'communicate-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'That evening',
      text: `The family's understanding of what was said does not match, and by evening they are frightened and unsure what is known and what is not. The next morning the registrar and the ward nurse spend twenty minutes going back over it, with Mrs Adeyemi in tears. It takes longer to rebuild trust than to have explained it clearly the first time.`,
      next: 'outcome'
    },
    {
      id: 'outcome',
      type: 'presentation',
      tone: 'results',
      label: 'A week later',
      text: `<ul>
<li><strong>Myositis antibody panel:</strong> <strong>anti-Jo-1 strongly positive</strong>. Anti-Mi-2, TIF1-γ, MDA5 and HMGCR negative.</li>
<li><strong>HRCT chest:</strong> basal predominant ground-glass change and reticulation in an interstitial lung disease pattern. Spirometry shows a restrictive defect with reduced gas transfer.</li>
<li><strong>CT chest, abdomen and pelvis:</strong> no malignancy. Her breast and cervical screening are up to date, and her bowel screening kit is returned.</li>
<li><strong>SLT:</strong> pharyngeal weakness, managed with modified diet and a plan for recovery.</li>
</ul>
She is started on high-dose corticosteroids with a steroid-sparing agent chosen by the rheumatology and respiratory teams. Over several weeks the CK falls, her swallow improves and she can climb stairs without the banister. The team will keep her under review for her lungs and for cancer surveillance.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: dermatomyositis with interstitial lung disease (antisynthetase-spectrum, anti-Jo-1 positive)</strong><br><br>
Mrs Adeyemi presented with "tired arms and legs", and the statin was the obvious explanation. The task was to prove it was weakness, find the pattern, and recognise the combination of skin, lung and swallowing involvement.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Ask about specific tasks to turn "weak" into true proximal weakness.</li>
<li>Build the differential before examining, and keep the can't-miss diagnosis on it.</li>
<li>Examine for objective proximal weakness, the skin (including on darker skin) and the chest.</li>
<li>Test the leading causes with targeted bloods; do not run a scattergun panel.</li>
<li>Read transaminases alongside CK and GGT. Muscle is a source.</li>
<li>Dysphagia and breathlessness make this a same-day problem.</li>
<li>Think about cancer, and talk about it honestly.</li>
</ol>
<strong>How you would explain it to the patient:</strong> "We think your muscles are inflamed, and the same process is affecting your skin and your lungs. It is not caused by your cholesterol tablet, though we have stopped it for now. The inflammation can be treated, usually with steroids and a second medicine, and many people regain strength. This condition is sometimes linked with other illnesses, so we check carefully, as we do for everyone with it."<br><br>
<strong>Safety-netting:</strong> after discharge, new or worsening breathlessness, choking or coughing on food or drink, or a fall, need urgent attention. Tell the team if the rash spreads or the weakness returns while the steroids are being reduced.`,
      keyLearning: [
        'Ask about specific tasks (chair, stairs, washing line) to separate weakness from pain, stiffness and fatigue',
        'PMR gives pain and stiffness with normal power; myositis gives painless proximal weakness',
        'ALT and AST come from muscle as well as liver: a CK in the thousands and a normal GGT point to muscle',
        'Dysphagia and breathlessness in suspected myositis are red flags for same-day assessment',
        'Rashes look different on brown and black skin: dusky violet or grey-brown, often easier to feel than see',
        'Adult dermatomyositis is associated with cancer, so age- and sex-appropriate screening is part of the work-up',
        'A statin is a common culprit, but it does not explain a rash, crackles or dysphagia'
      ],
      relatedTests: ['CK', 'Liver and thyroid function', 'Chest X-ray and HRCT', 'Myositis-specific antibody panel', 'Swallow assessment'],
      goingFurther: `<strong>Myositis antibodies and what they predict:</strong>
<ul>
<li><strong>Anti-Jo-1 (and other antisynthetases):</strong> myositis, interstitial lung disease, arthritis, mechanic's hands, fever, Raynaud's. These often give cytoplasmic rather than nuclear ANA staining, so a "negative" ANA does not exclude myositis.</li>
<li><strong>Anti-Mi-2:</strong> classic dermatomyositis, usually a good response to treatment.</li>
<li><strong>Anti-TIF1-γ (and anti-NXP2):</strong> dermatomyositis with a stronger cancer association in adults.</li>
<li><strong>Anti-MDA5:</strong> amyopathic or hypomyopathic dermatomyositis with skin ulceration and rapidly progressive interstitial lung disease.</li>
<li><strong>Anti-HMGCR:</strong> statin-associated immune-mediated necrotising myopathy. Unlike ordinary statin myopathy, it <em>persists or progresses after the statin is stopped</em> and needs immunosuppression. Anti-SRP gives a similar necrotising picture.</li>
</ul>
<strong>Roles of other tests:</strong> MRI of the thighs shows muscle oedema and guides biopsy; EMG shows a myopathic pattern and excludes neuropathy; muscle biopsy gives histological confirmation and distinguishes inflammatory from necrotising and inclusion-body patterns. Treatment is specialist-led, usually high-dose corticosteroids plus a steroid-sparing agent, with rituximab or other options for refractory disease.`
    }
  ]
};
