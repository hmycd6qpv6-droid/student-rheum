/* joints-case-4: The Swollen Finger */

export default {
  id: 'joints-case-4',
  title: 'The Swollen Finger',
  summary: '55-year-old bus driver with a hot swollen knee and a finger that has been swollen for months',
  setting: 'Emergency department',
  difficulty: 'advanced',
  curriculum: ['RH-CRYSTAL', 'RH-SPA', 'PR-HOTJOINT', 'TX-CRYSTAL', 'IX-SEROLOGY', 'TX-MEDS', 'TX-INFLAM', 'LO7'],
  objectives: [
    'Recognise the clinical pattern of psoriatic arthritis and know where to look for hidden psoriasis on different skin tones',
    'Explain why a normal serum urate during a flare does not exclude gout',
    'Choose a safe treatment for an acute gout flare in a patient with kidney disease, a past ulcer and an ACE inhibitor',
    'Describe when and how to start urate-lowering therapy, including flare prophylaxis and a treatment target',
    'Avoid anchoring on a single diagnosis when two conditions can coexist'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Emergency department, Saturday 11:20',
      text: `<strong>Mr Vikram Sandhu, 55, bus driver</strong><br><br>
He has limped in with his wife. His <strong>right knee</strong> became hot, swollen and agonising over two days. He cannot put weight on it, and he has had no sleep. He has not injured it.<br><br>
<strong>History:</strong>
<ul>
<li>The <strong>middle finger of his left hand</strong> has been swollen &ldquo;like a sausage&rdquo; for about six months. It is stiff in the morning and he can no longer make a fist. He puts it down to the cold bus steering wheel.</li>
<li>Pain under his right heel on first steps for a few months. He has been off shifts twice this winter with it.</li>
<li>Hypertension, taking ramipril and bendroflumethiazide. Chronic kidney disease (his GP says &ldquo;stage 3&rdquo;). A duodenal ulcer eight years ago after taking ibuprofen for his back. No diabetes. No anticoagulants.</li>
<li>Three or four pints of lager at weekends, and whisky when his team loses. BMI 31. He has put on weight since stopping smoking two years ago.</li>
<li>No fever or chills. No diarrhoea, eye symptoms or urethral discharge. No previous injury to the knee.</li>
</ul>
He is anxious about missing work: his depot is short of drivers and he has a mortgage. His wife says, &ldquo;He never complains, so it must be bad.&rdquo;<br><br>
Observations: temperature 37.4&deg;C, heart rate 92, blood pressure 148/92, respiratory rate 16, oxygen saturation 97% on air.`,
      next: 'knee-q'
    },
    {
      id: 'knee-q',
      type: 'decision',
      stage: 'Prioritise',
      prompt: 'His knee is hot, red, tender and has a large effusion. What do you do first about it?',
      options: [
        {
          label: 'Aspirate the knee aseptically and send the fluid for crystals, Gram stain, culture and cell count',
          rating: 'best',
          feedback: `Any acute hot swollen joint is septic arthritis until the fluid shows otherwise, and aspiration gives you the diagnosis and relieves the pain. He has plenty of reasons to have gout, but that is a guess until you see crystals. What would change your mind is a clear alternative such as a haemarthrosis, but you would still aspirate.`,
          next: 'aspirate-result'
        },
        {
          label: 'Request a knee X-ray and an ultrasound first, and decide about aspiration once they are reported',
          rating: 'good',
          feedback: `An X-ray can show chondrocalcinosis, a fracture or a loose body, and ultrasound can confirm an effusion. But neither can tell you whether the fluid is infected, and waiting delays the one test that can. Imaging supplements the aspirate here and does not replace it.`,
          next: 'c-imaging'
        },
        {
          label: 'Diagnose gout from his lager, his diuretic and the swollen finger, and prescribe an NSAID',
          rating: 'poor',
          feedback: `The pattern is plausible, which is what makes it a trap: you have stopped at a likely answer without confirming it. Gout is a common cause of a hot knee, but so is infection. You would also be adding an NSAID to a man with kidney disease, an ACE inhibitor, a diuretic and a past ulcer.`,
          next: 'c-label'
        },
        {
          label: 'Inject the knee with corticosteroid, as he clearly has an inflammatory arthritis already',
          rating: 'unsafe',
          feedback: `Injecting a steroid into a joint that might be infected can turn a treatable infection into a destroyed joint. An existing inflammatory condition makes this more tempting, not safer. Aspirate first, and consider an injection only after infection has been excluded.`,
          next: 'c-inject'
        }
      ],
      reasoning: `My pre-test probability for gout in this man is high: he is middle-aged, overweight, takes a thiazide, drinks, and has kidney disease. But the cost of missing a septic joint is a destroyed knee, and the probability is never zero. Aspiration is quick, cheap and answers both questions at once. I do it myself or with a senior, with a clean technique, and I do not wait for imaging. Septic arthritis is the focus of another case in this set, so here I keep to the principle: sample first, and treat once I know what I am treating.`
    },
    {
      id: 'c-imaging',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two hours later',
      text: `The X-ray shows a joint effusion and soft tissue swelling with no fracture and no chondrocalcinosis, which tells you nothing about the cause. The ultrasound slot is not until the afternoon. Mr Sandhu has spent two more hours in pain on a trolley before anyone has put a needle in his knee. Your registrar says, &ldquo;We could have had the answer already.&rdquo; You aspirate the knee.`,
      next: 'aspirate-result'
    },
    {
      id: 'c-label',
      type: 'presentation',
      tone: 'consequence',
      label: 'The pharmacist',
      text: `The pharmacist checks the prescription before it goes and phones you. &ldquo;Naproxen in a man with an eGFR of 41 who is on ramipril and bendroflumethiazide, with a past ulcer? And nobody has sampled the joint?&rdquo; You cancel the prescription, ask your registrar to supervise, and aspirate the knee.`,
      next: 'aspirate-result'
    },
    {
      id: 'c-inject',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss',
      text: `You are drawing up the steroid when your registrar walks in. &ldquo;Has that knee been aspirated? What is the Gram stain?&rdquo; She takes the syringe away, aspirates the joint with a clean technique, and sends the fluid. She does not tell you off, but she asks you to write your reasoning in the notes: a hot swollen joint is infected until the fluid says otherwise.`,
      next: 'aspirate-result'
    },
    {
      id: 'aspirate-result',
      type: 'presentation',
      tone: 'results',
      label: 'Aspirate and blood tests',
      text: `About 40 mL of turbid yellow fluid is aspirated from the right knee, with immediate relief of his pain.<br><br>
<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>Synovial white cell count</td><td>38 &times; 10&#8313;/L, 85% neutrophils</td><td></td></tr>
<tr><td><strong>Polarised microscopy</strong></td><td><strong>Needle-shaped, strongly negatively birefringent crystals (monosodium urate)</strong></td><td></td></tr>
<tr><td>Gram stain</td><td>No organisms seen</td><td></td></tr>
<tr><td>Culture</td><td>Pending</td><td></td></tr>
<tr><td>CRP</td><td>78 mg/L</td><td>&lt;5</td></tr>
<tr><td>White cell count</td><td>11.9 &times; 10&#8313;/L</td><td>4&ndash;11</td></tr>
<tr><td>Creatinine / eGFR</td><td>138 &micro;mol/L / 41 mL/min/1.73 m&sup2;</td><td>59&ndash;104 / &gt;90</td></tr>
<tr><td><strong>Serum urate</strong></td><td><strong>352 &micro;mol/L</strong></td><td>200&ndash;430</td></tr>
<tr><td>HbA1c</td><td>43 mmol/mol</td><td>&lt;48</td></tr>
</table>
A colleague looks at the results and says, &ldquo;The urate is normal, so it can&rsquo;t be gout. Are those crystals a contaminant?&rdquo;`,
      next: 'urate-q'
    },
    {
      id: 'urate-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'The serum urate is within the reference range. What does that tell you?',
      options: [
        {
          label: 'The crystals make the diagnosis; urate often falls during a flare, so repeat it after the flare settles',
          rating: 'best',
          feedback: `Serum urate is an unreliable test for gout during an attack. It can be normal or even low while the joint is inflamed, so it neither confirms nor excludes a flare. The crystals are the diagnostic test, and the urate you need is the one taken a few weeks after the flare has settled, which also gives you the baseline for treatment. What would change your mind is a repeat aspirate with no crystals.`,
          next: 'ddx-reflect'
        },
        {
          label: 'It makes gout less likely, so ask the lab to re-examine the slide in case the crystals were misread',
          rating: 'good',
          feedback: `Asking for a second opinion on the slide is not unreasonable, since polarised microscopy depends on the person reading it. But you are letting a blood test outrank direct sight of the crystals. Typical needle-shaped, negatively birefringent crystals in a hot joint with a synovial white cell count of 38 are not a close call.`,
          next: 'c-urate'
        },
        {
          label: 'The normal urate rules out gout, so the crystals must be a contaminant and this is something else',
          rating: 'poor',
          feedback: `This is false reassurance from a test that does not do what you want it to do. Serum urate is neither sensitive nor specific for an acute attack. Dismissing crystals because a blood test is normal would send you on a long hunt for another diagnosis.`,
          next: 'c-urate'
        },
        {
          label: 'Repeat the urate in a few hours, as a single result might be a laboratory error',
          rating: 'poor',
          feedback: `A repeat in a few hours will probably give the same answer, and it would still not exclude gout. The issue is timing relative to the flare, not the laboratory, so repeating the test now answers the wrong question.`,
          next: 'c-urate'
        }
      ],
      reasoning: `Before the result I thought gout was likely. A urate of 352 sits oddly beside that, but I know the limitation: during an acute attack the serum level often drops, so a normal value subtracts very little from the probability. Crystals under polarised light are the reference standard, and I trust them above the blood test. I write down that I want a urate once the flare has settled, because that number is the baseline for treatment. This is the same lesson as a negative rheumatoid factor: a blood test has a sensitivity, and a clinical picture outranks it.`
    },
    {
      id: 'c-urate',
      type: 'presentation',
      tone: 'consequence',
      label: 'Your registrar',
      text: `&ldquo;Crystals in a hot joint are gout, and a urate taken during an attack is notoriously misleading,&rdquo; she says. &ldquo;The crystals are what we treat. Repeat the urate when the flare has settled.&rdquo; You have spent ten minutes that would have been better spent examining him.`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'He has urate crystals in his knee, but he has also had a swollen finger for six months, heel pain and morning stiffness. Gout can explain the knee. What else could explain the finger and the heel, and what would you look for to tell them apart?',
      reveal: `<strong>A chronic swollen digit has a differential:</strong>
<ol>
<li><strong>Psoriatic arthritis (dactylitis)</strong>: the whole digit is swollen, because the flexor tendon sheath is inflamed as well as the joints, so the &ldquo;sausage&rdquo; has no joint-line contour. Look for psoriasis (including hidden sites), nail changes, enthesitis (heel, Achilles) and distal interphalangeal joint disease.</li>
<li><strong>Gout</strong>: tophaceous gout can swell a finger. It usually follows a history of acute attacks and may discharge chalky material. It is a less likely explanation for six months of diffuse digit swelling with heel pain.</li>
<li><strong>Reactive arthritis</strong>: dactylitis and enthesitis follow a gut or genital infection. Ask about diarrhoea, urethral symptoms and eye inflammation.</li>
<li><strong>Nodal osteoarthritis</strong>: bony swellings with a hard joint contour, not diffuse soft tissue swelling.</li>
<li><strong>Infection</strong>: flexor tenosynovitis presents acutely with pain on passive extension and often fever, which this is not.</li>
<li><strong>Others</strong>: sarcoidosis, and sickle cell dactylitis (mainly in children).</li>
</ol>
Dactylitis plus heel pain is a spondyloarthritis pattern until shown otherwise. <strong>The lesson is not to anchor.</strong> Finding one explanation (gout) does not mean you have found them all. The crystals explain the knee, but not a six-month history of finger and heel symptoms.`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'You suspect a spondyloarthritis. Where do you look for evidence of it, and what are you looking for?',
      options: [
        {
          label: 'Scalp, behind the ears, natal cleft, umbilicus, elbows and nails, and the heels and Achilles insertions',
          rating: 'best',
          feedback: `Psoriasis hides in places people do not look or do not mention, and on brown or black skin it is often violaceous or grey with thick scale rather than salmon pink. Nail pitting, onycholysis and thickening under the nail are strongly linked to psoriatic arthritis, and tenderness where tendon meets bone at the heel or Achilles points to a spondyloarthritis. Ask permission, offer a chaperone and use good light, because you are examining private areas. What would change your mind is a completely normal skin, scalp and nail examination.`,
          next: 'exam-findings'
        },
        {
          label: 'Hands, elbows, knees and nails only, since those are the sites a patient would usually mention',
          rating: 'good',
          feedback: `Extensor surfaces and nails are the classic sites, and the nails are an important sign. But limiting yourself to the places the patient would mention reproduces his own blind spots. Many people have psoriasis only in the scalp, natal cleft or umbilicus and think nothing of it, and they will say &ldquo;no rash&rdquo; when asked.`,
          next: 'c-exam'
        },
        {
          label: 'Ask whether he has psoriasis; if he says no, rule it out and put the nail changes down to a fungal infection',
          rating: 'poor',
          feedback: `This accepts a negative history as if it were a negative examination, which is a classic search-satisficing error. Psoriatic nail disease is often mistaken for fungal infection, but pitting is not a feature of tinea. Examine rather than ask.`,
          next: 'c-exam'
        },
        {
          label: 'Examine the knee and finger in detail and refer him to dermatology to look at his skin',
          rating: 'poor',
          feedback: `Examining the joints carefully is right, but handing the skin to dermatology means referring without knowing what to refer for. The skin and nail examination takes a few minutes, and finding psoriasis yourself changes what you do for him now.`,
          next: 'c-exam'
        }
      ],
      reasoning: `Psoriasis precedes the arthritis in most people, but in a sizeable minority the joints come first, and the skin disease can be tiny and hidden. That is why I examine rather than ask. On darker skin I look for dusky violet-brown or grey plaques with silvery scale, and I feel as well as look, because the redness that textbooks describe is missing. Nail pitting is common in psoriatic arthritis, and onycholysis, oil-drop discolouration and thickening under the nail add weight. Enthesitis at the heel is a core feature of the spondyloarthritides.`
    },
    {
      id: 'c-exam',
      type: 'presentation',
      tone: 'consequence',
      label: 'A second look',
      text: `Mrs Sandhu mentions that her husband has a flaky, itchy scalp which he puts down to dandruff, and that his nails have been &ldquo;crumbly&rdquo; for a year. Your registrar asks, &ldquo;Did you look under his hair? Behind his ears? His bottom?&rdquo; You go back and examine him properly, with his agreement and a chaperone.`,
      next: 'exam-findings'
    },
    {
      id: 'exam-findings',
      type: 'presentation',
      label: 'Examination',
      text: `<ul>
<li><strong>Left middle finger:</strong> the whole digit is swollen from the knuckle to the tip and tender along the flexor sheath. The joint lines cannot be seen.</li>
<li><strong>Nails:</strong> pitting on five nails, and separation of the nail plate from the nail bed (onycholysis) on the left middle finger.</li>
<li><strong>Scalp and behind both ears:</strong> thick silvery-grey scaling plaques on a darker violet-brown base along the hairline. He thought it was dandruff.</li>
<li><strong>Natal cleft:</strong> a dark, fissured plaque with fine scale. The umbilicus has a small scaly patch.</li>
<li><strong>Entheses:</strong> tender right Achilles insertion and right plantar fascia insertion. Mild tenderness of the distal joints of both index fingers.</li>
<li>No tophi. No eye redness. Spinal movement normal, no sacroiliac tenderness.</li>
</ul>
He asks, &ldquo;So I&rsquo;ve had psoriasis all this time?&rdquo;`,
      next: 'dual-q'
    },
    {
      id: 'dual-q',
      type: 'decision',
      stage: 'Differential',
      prompt: 'He has urate crystals in the knee, and also dactylitis, nail disease, enthesitis and psoriasis. How do you put this together?',
      options: [
        {
          label: 'Two diagnoses: gout explains the acute knee, and psoriatic arthritis explains the finger, nails and heel',
          rating: 'best',
          feedback: `The crystals prove gout in the knee. Dactylitis, nail disease, enthesitis and psoriasis form the classic pattern of psoriatic arthritis, and no single diagnosis explains both sets of findings. Psoriasis and hyperuricaemia are associated, probably through shared metabolic risk and high cell turnover, so the two can coexist. What would change your mind is a repeat examination finding no psoriasis or nail disease.`,
          next: 'flare-q'
        },
        {
          label: 'Gout alone: it can cause tophaceous swelling of a finger, and the rest is coincidence',
          rating: 'poor',
          feedback: `This is anchoring on the first confirmed diagnosis. Tophi do not cause nail pitting, enthesitis or scaly plaques in the scalp and natal cleft, and a skin disease sitting beside all this is not a coincidence. You would miss a condition that damages joints if it is not treated.`,
          next: 'c-dual'
        },
        {
          label: 'Psoriatic arthritis alone: the knee is a flare and the crystals are incidental',
          rating: 'poor',
          feedback: `Crystals do not appear in a hot joint by chance. Psoriatic arthritis can cause a knee effusion, but fluid with urate crystals and a neutrophil-rich count of 38 is an acute gout attack. Treating it as a psoriatic flare alone would leave the gout, and its causes, unmanaged.`,
          next: 'c-dual'
        },
        {
          label: 'Rheumatoid arthritis, so he needs a rheumatoid factor and anti-CCP to confirm it',
          rating: 'poor',
          feedback: `Rheumatoid arthritis is typically symmetrical in the small joints and rarely causes dactylitis, nail pitting or enthesitis. Sending these tests here is a reflex. The clinical pattern is more informative, and a negative result would not remove the diagnosis of psoriatic arthritis, which is usually seronegative.`,
          next: 'c-dual'
        }
      ],
      reasoning: `Dactylitis, nail disease, enthesitis and psoriasis together make psoriatic arthritis very likely. The CASPAR criteria (which classify, not diagnose) would be met on current psoriasis, nail dystrophy and dactylitis alone. The crystals are an independent finding, and they make me ask why he has gout: the thiazide, alcohol, weight and kidney disease all contribute. Two diagnoses in one patient is not unusual when both conditions are common and share risk factors. The error to avoid is stopping when I have an explanation that feels complete.`
    },
    {
      id: 'c-dual',
      type: 'presentation',
      tone: 'consequence',
      label: 'The registrar returns',
      text: `&ldquo;Let&rsquo;s count what each diagnosis explains,&rdquo; she says, and draws two columns on the whiteboard. The urate crystals sit in the gout column on their own. The nails, the heel, the sausage digit and the scalp sit in the other. &ldquo;Neither list is complete without the other.&rdquo; You revise your problem list.`,
      next: 'flare-q'
    },
    {
      id: 'flare-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'His knee is still very painful. Which treatment is the safest for this gout flare?',
      options: [
        {
          label: 'A short oral prednisolone course, with a plan for his blood pressure and glucose and a check of the culture result',
          rating: 'best',
          feedback: `With an eGFR of 41, an ACE inhibitor, a diuretic and a past ulcer, an NSAID could cause acute kidney injury or bleeding. A short course of oral steroid (BSR suggests about 30&ndash;35 mg daily for a few days) works well for gout and avoids those risks. The Gram stain was negative and the picture fits, but you still check the culture, because crystals do not exclude infection. What would change your mind is a positive culture or a fever.`,
          next: 'culture-neg'
        },
        {
          label: 'Reduced-dose colchicine, with the dose checked against his kidney function and his other medicines',
          rating: 'good',
          feedback: `Colchicine is a recognised option and carries no bleeding risk. But it accumulates in renal impairment, so the dose must be lowered, and diarrhoea is common and can cause dehydration and kidney injury in someone on a diuretic and an ACE inhibitor. It is defensible, but a short steroid course has fewer hazards for this man.`,
          next: 'culture-neg'
        },
        {
          label: 'Paracetamol, ice and rest only, avoiding anti-inflammatory treatment because of his kidneys',
          rating: 'poor',
          feedback: `Avoiding harm is a good instinct, but you have safe anti-inflammatory options and have not used them. Leaving a man with a gout flare on simple analgesia means days of pain and lost sleep, and it risks a longer attack and more time off work for no benefit.`,
          next: 'c-flare-poor'
        },
        {
          label: 'Naproxen with omeprazole to protect his stomach, as an NSAID is the standard treatment for a flare',
          rating: 'unsafe',
          feedback: `NSAIDs are a standard option for many people, but he has CKD, an ACE inhibitor and a diuretic, and that combination with an NSAID is a recognised cause of acute kidney injury. A proton pump inhibitor protects the stomach but not the kidneys, and he has also had an ulcer. Tailor the drug to the patient, not to the textbook.`,
          next: 'c-flare-unsafe'
        }
      ],
      reasoning: `Treating a flare is a prescribing-safety question as much as a rheumatology one. Colchicine, an NSAID and a corticosteroid all work, so I choose by what could hurt him. For this man: an eGFR of 41 plus an ACE inhibitor and a diuretic means an NSAID is a bad idea (the &ldquo;triple whammy&rdquo;), and a past ulcer reinforces that. Colchicine needs a reduced dose and has an interaction list, which I check. A short steroid course is the cleanest, and I warn him it may raise his blood pressure and glucose briefly. I use it because the Gram stain is negative and he is systemically well, with a plan to act if the culture grows anything.`
    },
    {
      id: 'c-flare-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Next morning',
      text: `Mr Sandhu has spent another night in pain and the knee has not settled. His wife is annoyed that nobody has treated the cause. After a conversation with the registrar he is started on a short course of oral prednisolone, and his pain improves over the next day.`,
      next: 'culture-neg'
    },
    {
      id: 'c-flare-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'One week later',
      text: `The knee settled on the naproxen, but his GP rings the department. His creatinine has risen from 138 to 221 &micro;mol/L and his potassium is 5.8 mmol/L. He has been vomiting and has passed very little urine. The naproxen, ramipril and bendroflumethiazide are all stopped and he is admitted for fluids. His kidneys recover partly, but his baseline eGFR is lower than before.`,
      next: 'culture-neg'
    },
    {
      id: 'culture-neg',
      type: 'presentation',
      label: 'Before he goes home',
      text: `The synovial fluid culture was reported negative at 48 hours. When he is well enough to leave, the discharge letter asks his GP to recheck his blood pressure and kidney function. He asks, &ldquo;So is it gout or is it this psoriasis thing? Do I need to see anyone?&rdquo;`,
      next: 'ref-q'
    },
    {
      id: 'ref-q',
      type: 'decision',
      stage: 'Follow-up',
      prompt: 'What do you arrange for the psoriatic arthritis?',
      options: [
        {
          label: 'An early rheumatology referral for suspected psoriatic arthritis, so a DMARD can be considered',
          rating: 'best',
          feedback: `Untreated psoriatic arthritis damages joints, and early treatment gives better long-term outcomes, so he should be seen by rheumatology within weeks rather than months. A conventional DMARD such as methotrexate can treat both skin and joints, but it needs baseline blood tests, regular monitoring, and a careful approach to alcohol and kidney function, which the specialist team will manage. What would change your mind is a senior examination finding no psoriasis, nail disease or enthesitis.`,
          next: 'ult-results'
        },
        {
          label: 'A dermatology referral for the psoriasis, with the joints to be reviewed by his GP in a few months',
          rating: 'good',
          feedback: `Skin treatment matters, and dermatology can help. But treating the skin alone will not manage the joint disease, and waiting months for a joint review loses the window in which treatment prevents damage. He needs a rheumatology opinion.`,
          next: 'c-ref'
        },
        {
          label: 'No referral: tell him the gout explains everything and his GP can look at the finger in six months',
          rating: 'poor',
          feedback: `This closes the case on the first diagnosis, which is the error the whole case has been about. His joint disease is probably active and could become permanent. Do not leave him believing that one tablet will fix everything.`,
          next: 'c-ref'
        },
        {
          label: 'Start methotrexate before he leaves, so that treatment is not delayed by waiting for a referral',
          rating: 'unsafe',
          feedback: `Methotrexate needs a baseline blood count, liver tests and renal function, a dose adjusted for kidney disease, advice about alcohol, and a monitoring plan, and it is normally started by the specialist team. Starting it after an acute flare in a man with an eGFR of 41 who drinks at weekends is a prescribing-safety risk.`,
          next: 'c-ref-unsafe'
        }
      ],
      reasoning: `The psoriatic arthritis is for the specialist to treat; my job is deciding when and to whom to refer. A swollen digit, enthesitis and nail disease suggest he has more than mild disease, so I make it an early referral, not a routine one. In the letter I mention the kidney disease and the alcohol, because they shape which drugs are safe. I can explain what a DMARD does (it can treat the skin and the joints together) without prescribing it.`
    },
    {
      id: 'c-ref',
      type: 'presentation',
      tone: 'consequence',
      label: 'Three months later',
      text: `Mr Sandhu is seen in rheumatology after his GP re-refers him. By then the finger is stiffer, and an X-ray shows early erosive change in the distal joint of his left middle finger. The rheumatologist says this was probably preventable, and starts treatment straight away.`,
      next: 'ult-results'
    },
    {
      id: 'c-ref-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Your consultant',
      text: `Your consultant stops you before the prescription is sent. &ldquo;No baseline bloods, no hepatitis screen, an eGFR of 41, weekend drinking, and nobody has explained that it is a weekly dose. We do not start methotrexate from the ED.&rdquo; You write a clear referral instead.`,
      next: 'ult-results'
    },
    {
      id: 'ult-results',
      type: 'presentation',
      tone: 'results',
      label: 'Four weeks later: review of the gout',
      text: `The flare has settled completely and he has had no further attacks, but he is worried about the next one.<br><br>
<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td><strong>Serum urate (flare settled)</strong></td><td><strong>488 &micro;mol/L</strong></td><td>200&ndash;430</td></tr>
<tr><td>Creatinine / eGFR</td><td>134 &micro;mol/L / 43 mL/min/1.73 m&sup2;</td><td>59&ndash;104 / &gt;90</td></tr>
<tr><td>Liver tests</td><td>Normal</td><td></td></tr>
<tr><td>Blood pressure</td><td>150/90 mmHg</td><td></td></tr>
<tr><td>Total cholesterol / HbA1c</td><td>5.9 mmol/L / 43 mmol/mol</td><td></td></tr>
</table>
The urate that read 352 &micro;mol/L during the flare is now 488. He asks whether he will need tablets forever.`,
      next: 'ult-q'
    },
    {
      id: 'ult-q',
      type: 'decision',
      stage: 'Manage',
      prompt: 'How do you plan the long-term treatment of his gout?',
      options: [
        {
          label: 'Start low-dose allopurinol with colchicine cover, titrate to a urate target, and review his diuretic and CV risk',
          rating: 'best',
          feedback: `He has risk factors that make recurrence likely: kidney disease, a thiazide, alcohol, weight and a persistently raised urate. Start allopurinol low (kidney function lowers the starting dose), increase gradually with regular urate checks to a target below 360 &micro;mol/L (some guidance suggests lower if he has tophi or frequent flares), and cover the start with low-dose colchicine, reduced for his kidneys, to blunt the flares that early treatment can provoke. NSAIDs are not an option for him. Ask whether the thiazide can be changed, and review blood pressure, lipids and alcohol.`,
          next: 'comm-q'
        },
        {
          label: 'Start allopurinol 100 mg daily with a plan to increase it, and leave the prophylaxis and other medicines to his GP',
          rating: 'good',
          feedback: `The drug, the starting dose and the titration are right. But when urate falls, deposited crystals mobilise and flares often increase for the first months, and an unprepared patient may stop the tablet. Prophylaxis and the contributing medicines belong in the plan from the start.`,
          next: 'c-ult'
        },
        {
          label: 'Give allopurinol to take only when he feels an attack coming, as his urate was normal in the flare',
          rating: 'poor',
          feedback: `Allopurinol does not treat an attack and does not work on demand. It must be taken every day to keep the urate below target. The normal reading during the flare was the misleading one, and the 488 today is the real baseline.`,
          next: 'c-ult'
        },
        {
          label: 'Start allopurinol 300 mg daily so that his urate falls fast, without cover, as his kidneys are stable',
          rating: 'unsafe',
          feedback: `Starting too high raises the risk of flares and of allopurinol hypersensitivity, which is more common in kidney disease and can be severe. Start low and titrate to target, adjusting for kidney function, with prophylaxis.`,
          next: 'c-ult-unsafe'
        }
      ],
      reasoning: `Preventing flares is a different task from treating one. Indications for urate-lowering therapy include recurrent flares, tophi, joint damage, CKD stage 3 or worse, and a diuretic that cannot be stopped, and he has several. I start low and increase over weeks while checking urate and kidney function, aiming for a target. On timing, current UK teaching (BSR 2017) is to start once the flare has settled, which is what I do here. If he had already been on allopurinol, I would not stop it for a flare. Other guidance (ACR 2020) allows starting during a flare with anti-inflammatory cover, so neither approach is wrong. I also treat the person: BP, lipids, alcohol, weight, and whether I can swap the thiazide.`
    },
    {
      id: 'c-ult',
      type: 'presentation',
      tone: 'consequence',
      label: 'Three months on',
      text: `Mr Sandhu has had two more flares since starting, and he is sure the tablet is making things worse. He stops it at week eight because &ldquo;it hurts again&rdquo;. His urate is still 470. The plan is restarted with prophylaxis and a clear explanation of why attacks can increase at first.`,
      next: 'comm-q'
    },
    {
      id: 'c-ult-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Ten days later',
      text: `Mr Sandhu returns with a painful, hot ankle, an itchy rash across his trunk and a temperature of 38.1&deg;C. His eGFR is 36 and his liver tests are mildly abnormal. The allopurinol is stopped for a possible hypersensitivity reaction and he is referred for assessment. He has lost confidence in the treatment, and it will be difficult to restart.`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'He says, &ldquo;So it is my beer. If I stop drinking, can I stop the tablets?&rdquo; How do you reply?',
      options: [
        {
          label: 'Say diet and alcohol help but are not the whole story, and daily tablets work only if he takes them',
          rating: 'best',
          feedback: `Gout is mostly about how the body makes and clears urate, and lifestyle change alone rarely brings the level down far enough for someone like him. You acknowledge that cutting back on beer and spirits, losing weight, avoiding sugary drinks and keeping hydrated all help. You explain that flares may increase early on, that he should keep taking the tablet when well, and that you will plan for flares around his shifts. This respects him without blaming him.`,
          next: 'conclusion'
        },
        {
          label: 'Advise cutting out beer, red meat and shellfish entirely, and say the tablets can be reviewed in a year',
          rating: 'good',
          feedback: `Diet advice is part of the picture and reducing alcohol will help. But overpromising what diet can do sets him up to feel he has failed when the urate stays high, and a year is too long without checking the level. Lifestyle supports the tablets and does not replace them.`,
          next: 'c-comm'
        },
        {
          label: 'Tell him gout is caused by drinking, and that if he cannot stop he should not bother with the tablets',
          rating: 'poor',
          feedback: `Blaming him is inaccurate, and a reliable way to make him disengage. Many people with gout drink little. Linking the tablet to a moral failing makes poor adherence more likely.`,
          next: 'c-comm'
        },
        {
          label: 'Reassure him it is fine to carry on as before, now that the knee has been treated',
          rating: 'poor',
          feedback: `This sounds kind but leaves him unprepared. Alcohol and weight still matter, he needs to know about the long-term plan and the early flares, and he needs to understand that the psoriatic arthritis is a separate condition with its own treatment.`,
          next: 'c-comm'
        }
      ],
      reasoning: `People hear &ldquo;gout&rdquo; and think &ldquo;beer&rdquo;, and the message that follows is usually blame. In truth, most of a person&rsquo;s urate comes from the body&rsquo;s own production and how the kidneys clear it, and he has risk factors for both. I want him to take a tablet every day for years, so he needs to understand why. I offer one or two achievable changes, explain that flares may increase for the first months, agree what he will do in a flare, including not driving a bus with a hot knee, and make clear that the psoriatic arthritis is a separate condition. I use teach-back to check what he has understood.`
    },
    {
      id: 'c-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'The next visit',
      text: `Mr Sandhu comes back with another flare. He stopped his tablet during a stretch of good days, has eaten almost nothing but salad since, and feels embarrassed. His urate is 455. In a longer conversation you explain what the tablet does, why it has to be daily, and that gout is not a punishment.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: psoriatic arthritis and gout (dual pathology).</strong><br><br>
Mr Sandhu&rsquo;s knee settled and the synovial fluid culture was negative. Four weeks after the flare his urate was well above target. He started allopurinol at a low dose with colchicine cover and a plan to titrate to a target below 360 &micro;mol/L, and his GP reviewed his diuretic and cardiovascular risk. Rheumatology confirmed psoriatic arthritis affecting a digit, entheses and nails, and discussed a DMARD.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>A hot swollen joint is aspirated before you treat it, even when you already have a good reason to suspect gout.</li>
<li>A normal serum urate during a flare does not exclude gout. Crystals are the test, and the urate that matters is the one measured after the flare.</li>
<li>One diagnosis may not explain everything. A chronic sausage digit, nail disease, heel pain and hidden psoriasis make psoriatic arthritis; the crystals make gout; he has both.</li>
<li>Look where patients do not: scalp, behind the ears, natal cleft, umbilicus and nails. On brown and black skin, look for violaceous or grey scaly plaques.</li>
<li>Match the flare treatment to the comorbidities. An NSAID is a poor choice with CKD, an ACE inhibitor, a diuretic and a past ulcer.</li>
<li>Prevention is a separate task: low-dose allopurinol with prophylaxis, titrated to target, with a review of diuretic, alcohol, weight and cardiovascular risk.</li>
<li>Refer suspected psoriatic arthritis early, and do not start methotrexate from the ED.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;You have two different joint conditions at the same time. One is gout, where crystals build up in a joint and cause very painful attacks. The other is psoriatic arthritis, which is linked to your skin and nail changes and needs its own treatment. Tablets can control both, but you need to keep taking them even when you feel well.&rdquo;<br><br>
<strong>Safety-netting:</strong> a hot, swollen joint with a fever or feeling generally unwell needs same-day review, because infection can coexist with crystals. A rash or fever after starting allopurinol, vomiting, diarrhoea or reduced urine output while on a diuretic, an ACE inhibitor or an anti-inflammatory all need prompt review.`,
      keyLearning: [
        'Aspirate an acute hot swollen joint before treating it, and send crystals, Gram stain and culture, even when you expect gout.',
        'Serum urate can be normal or low during a gout flare. Crystals make the diagnosis; repeat the urate a few weeks after the flare settles.',
        'Do not anchor: gout and psoriatic arthritis can coexist, and one diagnosis may not explain all the features.',
        'Examine for hidden psoriasis in the scalp, behind the ears, natal cleft and umbilicus, and check the nails. On brown and black skin, plaques look violaceous or grey with scale.',
        'Choose flare treatment by comorbidity: avoid NSAIDs with CKD, an ACE inhibitor, a diuretic and a past ulcer. A short steroid course or reduced-dose colchicine is safer.',
        'Start urate-lowering therapy low, titrate to a urate target and cover with flare prophylaxis. Do not stop it if a flare occurs in someone already taking it.',
        'Refer suspected psoriatic arthritis early. A DMARD such as methotrexate can treat skin and joints, but it needs baseline tests and monitoring.'
      ],
      relatedTests: ['Synovial fluid microscopy for crystals', 'Serum urate (after the flare)', 'Renal function', 'Nail and skin examination', 'Hand and foot X-rays', 'CRP'],
      goingFurther: `<strong>Classification:</strong> the CASPAR criteria classify psoriatic arthritis in someone with inflammatory articular disease (joint, spine or entheseal) who scores at least 3 points. Current psoriasis scores 2 points. A past or family history of psoriasis, psoriatic nail dystrophy, a negative rheumatoid factor, current or past dactylitis, and juxta-articular new bone formation on X-ray score 1 point each. They are classification criteria developed for research, not diagnostic criteria.<br><br>
<strong>Domains of psoriatic disease:</strong> peripheral arthritis, axial disease, enthesitis, dactylitis, skin and nail disease, and the comorbidities (metabolic syndrome, cardiovascular disease, uveitis, inflammatory bowel disease). Treatment is chosen to cover the domains that are active in that patient.<br><br>
<strong>Conventional DMARDs versus biologics:</strong> methotrexate (or leflunomide, or sulfasalazine) is the usual first step for peripheral arthritis, and methotrexate also helps psoriasis. Evidence is weaker for axial disease and enthesitis. If conventional DMARDs fail or are not tolerated, biologic therapy is considered under NICE criteria: TNF inhibitors, IL-17 inhibitors and IL-12/23 or IL-23 inhibitors, with JAK inhibitors for selected patients. The choice depends on which domains are active (IL-17 inhibitors are attractive for severe skin or axial disease, TNF inhibitors for coexisting uveitis or inflammatory bowel disease) and on safety. Early treatment limits damage.<br><br>
<strong>Allopurinol and genetics:</strong> HLA-B*58:01 is associated with severe cutaneous reactions to allopurinol, and its frequency varies by ancestry (higher in people of Han Chinese, Thai and Korean descent, and also increased in people of African descent). Some centres screen before starting. If allopurinol is not tolerated or not effective, febuxostat is an alternative, with a caution in people with cardiovascular disease.<br><br>
<strong>Starting urate-lowering therapy in a flare:</strong> BSR 2017 suggests starting once the flare has settled, but not stopping if the patient is already on treatment. The 2020 ACR guideline allows starting during a flare with anti-inflammatory cover. Neither is wrong, and this is a point on which you should follow local practice.`
    }
  ]
};
