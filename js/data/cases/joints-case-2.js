/* joints-case-2: The Borrowed Label */

export default {
  id: 'joints-case-2',
  title: 'The Borrowed Label',
  summary: '54-year-old farmer with years of sore knuckles, referred as seronegative inflammatory arthritis',
  setting: 'Rheumatology outpatient clinic',
  difficulty: 'intermediate',
  curriculum: ['PR-POLY', 'RH-CRYSTAL', 'LO3', 'IX-XRAY', 'IX-BLOODS', 'IX-SEROLOGY', 'TX-MEDS', 'LO7'],
  objectives: [
    'Explain why “seronegative” is a description and not a diagnosis, and build a structured differential for it',
    'Choose examination findings and targeted tests instead of an autoimmune panel',
    'Read a hand radiograph systematically and recognise a pattern that does not fit rheumatoid arthritis',
    'Interpret a raised ferritin with a high transferrin saturation',
    'Avoid immunosuppression based on an unconfirmed label, and explain an inherited diagnosis to a patient and family'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Rheumatology clinic, 14:00',
      text: `<strong>Mr Gareth Llewellyn, 54, dairy farmer</strong><br><br>
He farms with his son near Carmarthen. His wife Sian, who does the farm accounts, has come with him. They have a son and a daughter, who is a nurse in Cardiff.<br><br>
<strong>The referral letter from his GP reads:</strong> &ldquo;3 years of bilateral hand pain. Rheumatoid factor and anti-CCP negative, ESR and CRP normal. Seronegative inflammatory arthritis, ?seronegative RA. Naproxen helps a little. Please assess and start DMARD therapy.&rdquo;<br><br>
He says: &ldquo;I can still milk, but I can&rsquo;t grip a gate latch in the morning, and I&rsquo;ve dropped a mug of tea more than once. The tablets from the doctor take the edge off.&rdquo; He seems tired and a little low. He mentions that he has lost interest in many things.`,
      next: 'hx-q'
    },
    {
      id: 'hx-q',
      type: 'decision',
      stage: 'History',
      prompt: 'The letter gives you a label. What history do you take?',
      options: [
        {
          label: 'A wide history covering skin, eyes, bowel, genital symptoms, alcohol, diabetes and liver disease in relatives',
          rating: 'best',
          feedback: `&ldquo;Seronegative&rdquo; tells you what the blood tests did not show, not what the disease is. Many conditions give a seronegative arthritis: psoriatic arthritis, reactive arthritis, crystal disease, haemochromatosis, osteoarthritis and others, and each has different clues outside the joints. A wide history is how you find them. What would change your mind is a patient whose joint pattern is already unmistakable and who has no other symptoms.`,
          next: 'hx-findings'
        },
        {
          label: 'How long the morning stiffness lasts, which joints swell, and what eases the pain',
          rating: 'good',
          feedback: `This is the right start for deciding if the pain is inflammatory, and it is where most clinicians begin. But it assumes the question is how to classify the arthritis. It does not look for causes elsewhere in the body, which is where a hidden diagnosis is most likely to show.`,
          next: 'hx-findings'
        },
        {
          label: 'Farm tasks, past injuries and falls, since repetitive use explains most hand pain in farmers',
          rating: 'poor',
          feedback: `This swaps one label for another. Occupational wear is a real factor in hand osteoarthritis, but you would expect the DIPs and thumb bases, not an unusual pattern. Asking only about work is anchoring on the occupation, and leaves out systemic clues.`,
          next: 'c-hx'
        },
        {
          label: 'Accept the GP&rsquo;s label and go straight to the examination, since the history has already been taken',
          rating: 'poor',
          feedback: `A referral label is someone else&rsquo;s hypothesis, and repeating it forward without checking it is how a wrong diagnosis becomes established. Take your own history, because the GP did not have the benefit of three years of progression.`,
          next: 'c-hx'
        }
      ],
      reasoning: `Before I ask anything, I note that the label &ldquo;seronegative RA&rdquo; is a description of negative tests. The pre-test probability that a man in his fifties with three years of hand pain, normal inflammatory markers and negative serology has RA is low, so I am reluctant to start from there. I want a wide history, because the clues to the alternatives are almost all outside the joints: psoriasis, a past gut or urethral infection, diabetes, alcohol, liver disease and a family history of any of these. I also ask about his mood and his energy, and how he is managing on the farm.`
    },
    {
      id: 'c-hx',
      type: 'presentation',
      tone: 'consequence',
      label: 'A prompt from the registrar',
      text: `Your registrar listens to the first few minutes and then asks: &ldquo;Does he have any psoriasis, bowel or eye problems? Is he diabetic? Does anyone in the family have liver problems? What about his drinking?&rdquo; You put those questions to Mr Llewellyn, and the story widens.`,
      next: 'hx-findings'
    },
    {
      id: 'hx-findings',
      type: 'presentation',
      label: 'History',
      text: `<ul>
<li>Pain and aching in the knuckles of both hands for about 3 years, worse with use. Morning stiffness lasts <strong>less than 30 minutes</strong>. The joints are sometimes puffy but not red or hot.</li>
<li>Both ankles ache and he has stopped walking the fields for pleasure. He has been told it is wear and tear.</li>
<li>No psoriasis, no back pain, no eye redness, no diarrhoea, no urethral discharge or recent infection. No sexual risk factors.</li>
<li><strong>Type 2 diabetes</strong>, diagnosed 18 months ago, on metformin.</li>
<li>Tired for years. Lost his libido and has had erectile difficulty for about two years. He mentions this quietly, when Sian steps out to get him a drink.</li>
<li>Alcohol: about 25 units a week, mostly beer in the evenings.</li>
<li><strong>Family history:</strong> his father died at 63 of &ldquo;liver trouble&rdquo; and had diabetes and a weak heart. An uncle was also diabetic and &ldquo;turned a funny colour&rdquo;.</li>
<li>No steroids, no regular medicines other than metformin and naproxen 500 mg twice daily.</li>
</ul>
He says: &ldquo;Everyone says I&rsquo;ve got a farmer&rsquo;s tan. I&rsquo;ve been like it for years.&rdquo;`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: '&ldquo;Seronegative&rdquo; means only that RF and anti-CCP are negative. Build a differential for a long-standing, seronegative hand and ankle arthritis in a man of 54. What would you look for to separate each cause?',
      reveal: `<strong>A structured differential:</strong>
<ol>
<li><strong>Seronegative rheumatoid arthritis</strong>: real, but less likely here. You would expect longer morning stiffness, boggy synovitis, and a raised CRP and ESR while active. Three years of untreated active RA would usually have left erosions.</li>
<li><strong>Psoriatic arthritis</strong>: look at the skin, scalp, natal cleft and nails, and ask about dactylitis and family history. It can precede the skin disease.</li>
<li><strong>Spondyloarthritis and reactive arthritis</strong>: inflammatory back pain, enthesitis, eye inflammation, and a gut or genital infection a few weeks before onset. Ask a sexual health history.</li>
<li><strong>Osteoarthritis</strong>: common, but in the 2nd and 3rd MCPs and ankles it is <em>unusual</em>, and these joints are not typically involved by use. The question &ldquo;why this distribution?&rdquo; prompts a search for a cause.</li>
<li><strong>Crystal arthropathy</strong>: gout or calcium pyrophosphate disease (CPPD). CPPD in someone under about 60 is a flag to look for a metabolic cause.</li>
<li><strong>Haemochromatosis arthropathy</strong>: the diagnosis that links the diabetes, tiredness, loss of libido, grey-bronze skin tone, family history, raised liver enzymes and the pattern of 2nd and 3rd MCP involvement.</li>
<li><strong>Other</strong>: hypothyroidism, hyperparathyroidism, sarcoidosis and, rarely, paraneoplastic arthritis.</li>
</ol>
Notice that several of these have their clues outside the joint, and that some of them make methotrexate a poor idea.`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'Which examination will be most informative?',
      options: [
        {
          label: 'Which hand joints are involved and whether swelling is bony or boggy, then skin, nails, eyes, abdomen and ankles',
          rating: 'best',
          feedback: `The distribution and the quality of the swelling separate the diagnoses. Bony enlargement of the 2nd and 3rd MCPs is quite different from boggy synovitis of the MCPs and PIPs. Looking at the skin, nails and eyes, and palpating the liver, tests the other diagnoses on your list. What would change your mind is boggy, warm synovitis across several joints, which would push RA higher.`,
          next: 'exam-findings'
        },
        {
          label: 'A full GALS screen, then count tender and swollen joints to calculate a disease-activity score',
          rating: 'good',
          feedback: `A systematic screen is good practice. But a joint count assumes the diagnosis is inflammatory arthritis, and a disease-activity score is for monitoring a diagnosis you have already made. It does not help you decide what the diagnosis is.`,
          next: 'exam-findings'
        },
        {
          label: 'Grip strength, then tests for carpal tunnel syndrome and trigger finger, since he works with his hands',
          rating: 'poor',
          feedback: `These can be abnormal in farmers, but they do not answer the question of why he has a seronegative arthritis with fatigue and diabetes. This is another form of anchoring on his occupation.`,
          next: 'c-exam'
        },
        {
          label: 'Examine the hands for synovitis only, since that is what the referral asks about',
          rating: 'poor',
          feedback: `Following the referral question too narrowly is a form of search satisficing. The questions that matter are about what else is going on in this man, and the answers are in his skin, liver and ankles, not only his hands.`,
          next: 'c-exam'
        }
      ],
      reasoning: `Now I need to move from a wide history to discriminating signs. The distribution of the hand joints is the single most useful sign: RA favours MCPs, PIPs and wrists in a diffuse pattern, while the 2nd and 3rd MCPs alone suggest a metabolic cause. I also feel the swelling itself, because hard bony enlargement is different from soft synovitis. Then I look for what a rheumatologist might forget: skin colour (taking care to compare covered and uncovered sites, and on this man the &ldquo;farmer&rsquo;s tan&rdquo; needs a second look), nails and scalp for psoriasis, the liver edge, and the ankles.`
    },
    {
      id: 'c-exam',
      type: 'presentation',
      tone: 'consequence',
      label: 'A second look',
      text: `Your registrar re-examines Mr Llewellyn with you. &ldquo;Which joints are involved? Is it bony or boggy? What colour is his skin on the parts that don&rsquo;t see the sun? Can you feel his liver?&rdquo; You repeat the examination with those questions in mind.`,
      next: 'exam-findings'
    },
    {
      id: 'exam-findings',
      type: 'presentation',
      label: 'Examination',
      text: `Blood pressure 138/86, pulse 72, BMI 29, temperature normal.<br><br>
<strong>Hands:</strong>
<ul>
<li>Firm, <strong>bony enlargement of the 2nd and 3rd MCP joints on both sides</strong>, tender on squeezing, with reduced flexion. Little soft or boggy swelling.</li>
<li>The 4th and 5th MCPs, PIPs and DIPs are largely normal. Wrists have mildly reduced extension.</li>
<li>Nails normal. No skin plaques in the scalp, behind the ears or in the natal cleft. No dactylitis or tophi.</li>
</ul>
<strong>Skin:</strong> a slate-grey bronze tone over his forearms and face, which looks darker than expected for the time of year. The inner upper arms and abdomen, which do not see the sun, are also unusually dark, so this is not just a &ldquo;farmer&rsquo;s tan&rdquo;.<br><br>
<strong>Abdomen:</strong> liver edge palpable 2 cm below the costal margin, smooth and firm. No ascites. No spider naevi.<br><br>
<strong>Ankles:</strong> bony swelling and reduced movement on both sides. Knees: mild crepitus. Spine: normal. Eyes: not red.`,
      next: 'ix-q'
    },
    {
      id: 'ix-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which tests do you request?',
      options: [
        {
          label: 'Ferritin and fasting transferrin saturation, liver profile, HbA1c and X-rays of the hands and wrists',
          rating: 'best',
          feedback: `Each test answers a question that your examination raised. A grey tone, a smooth liver edge, diabetes, loss of libido and a family history make iron overload the leading unifying diagnosis, and ferritin with transferrin saturation is the screening test. The X-ray tests what the joints show. What would change your mind is a normal transferrin saturation, which makes haemochromatosis very unlikely.`,
          next: 'xray-result'
        },
        {
          label: 'X-rays of hands and feet, urate, bone profile, TSH and CRP, aimed at crystal and metabolic causes',
          rating: 'good',
          feedback: `These are sensible tests for CPPD and metabolic bone and thyroid causes, and the X-rays will be useful. But the list leaves out the single most likely unifying diagnosis, because ferritin and transferrin saturation are not on it. A good panel is targeted at your leading diagnosis.`,
          next: 'xray-result'
        },
        {
          label: 'ANA, ENA, anti-dsDNA, HLA-B27, complement and repeat RF and anti-CCP, to cover autoimmune causes',
          rating: 'poor',
          feedback: `An autoimmune panel is the classic response to an unexplained seronegative arthritis. It answers none of the questions the examination raised, and positives such as a low-titre ANA create more problems than they solve. Repeating RF and anti-CCP will not change a negative result.`,
          next: 'c-ix'
        },
        {
          label: 'MRI of both hands to look for early synovitis or erosions that plain films may miss',
          rating: 'poor',
          feedback: `MRI is sensitive for subtle inflammation, but nothing in the examination suggests a hidden synovitis, and the question is a cause, not the grade of inflammation. It would be an expensive scan that could not answer the question that matters.`,
          next: 'c-ix'
        }
      ],
      reasoning: `I choose tests by asking what each could change. If I think the diagnosis is a metabolic arthropathy, then ferritin and transferrin saturation are the screen, and a fasting sample is preferred as transferrin saturation rises after a meal. The liver profile and HbA1c tell me about the organs that iron most commonly damages. A plain film is cheap and will show me the joint pattern. I leave out the autoimmune panel, because I would need a clinical reason for each test in it.`
    },
    {
      id: 'c-ix',
      type: 'presentation',
      tone: 'consequence',
      label: 'Narrowing down',
      text: `Your consultant looks over the request and asks what you are looking for. &ldquo;Which of these tests would change what we do for this man? What about the colour of his skin, the diabetes and his father&rsquo;s liver?&rdquo; You revise the request, adding ferritin and fasting transferrin saturation, a liver profile, HbA1c and hand X-rays.`,
      next: 'xray-result'
    },
    {
      id: 'xray-result',
      type: 'presentation',
      tone: 'results',
      label: 'Hand and wrist X-rays, PA views',
      text: `You look at the films with your registrar. The patient&rsquo;s name and the date are correct, the views are PA and the penetration is adequate.<br><br>
<ul>
<li><strong>Alignment:</strong> normal. No subluxation.</li>
<li><strong>Bone:</strong> normal mineralisation. <strong>No periarticular osteopenia</strong> and <strong>no marginal erosions</strong>.</li>
<li><strong>Joints:</strong> the 2nd and 3rd MCP joints on both sides show narrowed joint space, subchondral cysts, squared-off metacarpal heads and <strong>small hook-shaped osteophytes</strong> on the radial side. The 4th and 5th MCPs, PIPs and DIPs are largely spared. The radiocarpal joints show mild narrowing.</li>
<li><strong>Soft tissue:</strong> no swelling around the MCPs. No tophi. A fine, linear calcification lies within the <strong>triangular fibrocartilage</strong> of both wrists.</li>
</ul>`,
      next: 'xray-q'
    },
    {
      id: 'xray-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'How do you interpret this film?',
      options: [
        {
          label: 'Degenerative change in an unusual place, with chondrocalcinosis and no erosions, pointing to a metabolic arthropathy',
          rating: 'best',
          feedback: `Reading the film systematically makes the pattern clear. RA would give periarticular osteopenia and marginal erosions across MCPs, PIPs and wrists, and none are present. Osteoarthritis-like change in the 2nd and 3rd MCPs, with hook osteophytes and cartilage calcification at the wrist, is typical of iron-related arthropathy and CPPD. What would change your mind is marginal erosions or osteopenia, which would put inflammatory arthritis back in play.`,
          next: 'bloods'
        },
        {
          label: 'Calcium pyrophosphate arthropathy, given the cartilage calcification, to be treated as CPPD',
          rating: 'good',
          feedback: `Chondrocalcinosis does point to CPPD, so this is a reasonable reading. But it stops one step early. CPPD in a man of 54 is a cue to ask why, and the screen for the causes (haemochromatosis, hyperparathyroidism, hypomagnesaemia and thyroid disease) belongs in the reasoning.`,
          next: 'bloods'
        },
        {
          label: 'Erosive change in the 2nd and 3rd MCPs, consistent with seronegative rheumatoid arthritis',
          rating: 'poor',
          feedback: `The squared bone ends and cysts can look like erosions at a glance, but the features of RA are missing: there is no periarticular osteopenia, no marginal erosions and no involvement of the PIPs and wrists to the same degree. This is confirmation bias, where the film is read to fit the referral label.`,
          next: 'c-xray'
        },
        {
          label: 'Primary osteoarthritis of the hands, common at his age, needing only analgesia and exercise',
          rating: 'poor',
          feedback: `The change is degenerative in type, but the distribution is wrong: primary hand OA favours the DIPs, PIPs and thumb base, not the 2nd and 3rd MCPs. Calling it OA stops asking the question that matters, which is why the joints in this distribution are damaged.`,
          next: 'c-xray'
        }
      ],
      reasoning: `I read a hand film the same way every time: identity and view, alignment, bone density, then joints (which, what kind of change), then soft tissue and calcification. This film has no osteopenia and no marginal erosions, which are the two things I expect in RA. What it does have is damage at the 2nd and 3rd MCPs with hook osteophytes, and calcified cartilage. That is a pattern, not a diagnosis, but it makes a metabolic cause the leading hypothesis and it makes methotrexate look pointless.`
    },
    {
      id: 'c-xray',
      type: 'presentation',
      tone: 'consequence',
      label: 'Walking through the film again',
      text: `Your registrar asks you to go through it once more: &ldquo;Is the bone density reduced? Where are the marginal erosions? Which joints are spared? What is that line in the wrist?&rdquo; Step by step, the pattern you had imposed on the film falls away.`,
      next: 'bloods'
    },
    {
      id: 'bloods',
      type: 'presentation',
      tone: 'results',
      label: 'Blood results',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td><strong>Ferritin</strong></td><td><strong>1480 &micro;g/L</strong></td><td>30&ndash;400</td></tr>
<tr><td><strong>Fasting transferrin saturation</strong></td><td><strong>89%</strong></td><td>&lt;45</td></tr>
<tr><td>ALT</td><td>68 U/L</td><td>&lt;40</td></tr>
<tr><td>AST</td><td>52 U/L</td><td>&lt;40</td></tr>
<tr><td>Albumin / bilirubin</td><td>41 g/L / 12 &micro;mol/L</td><td>35&ndash;50 / &lt;21</td></tr>
<tr><td>HbA1c</td><td>58 mmol/mol</td><td>on metformin</td></tr>
<tr><td>Haemoglobin / platelets</td><td>152 g/L / 188 &times; 10&#8313;/L</td><td>normal</td></tr>
<tr><td>CRP / ESR</td><td>3 mg/L / 6 mm/h</td><td>&lt;5 / &lt;20</td></tr>
</table>`,
      next: 'iron-q'
    },
    {
      id: 'iron-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'How do you interpret the ferritin and transferrin saturation?',
      options: [
        {
          label: 'Iron overload is likely; confirm with HFE genotyping and assess the liver, as ferritin alone can mislead',
          rating: 'best',
          feedback: `Ferritin is an acute-phase protein that also rises with alcohol, fatty liver and inflammation, so on its own it can mislead. The transferrin saturation is what points to iron overload, and with a normal CRP the ferritin is unlikely to be inflammatory. HFE genotyping confirms the commonest cause, and a ferritin this high means the liver needs staging. What would change your mind is a normal transferrin saturation with a raised ferritin, which suggests alcohol or fatty liver.`,
          next: 'genotype'
        },
        {
          label: 'Refer to hepatology for the diagnosis and let them arrange genotyping and any further tests',
          rating: 'good',
          feedback: `Hepatology involvement is needed. But the rheumatologist can send HFE genotyping now, and the diagnosis is not only a liver problem. Referring without giving the question a clear framing delays confirmation and leaves the arthropathy and other organs with no one directing them.`,
          next: 'genotype'
        },
        {
          label: 'Ferritin is an acute-phase protein, so repeat it in three months with a CRP to see if it settles',
          rating: 'poor',
          feedback: `It is true that ferritin rises with inflammation. But the CRP is normal, and the transferrin saturation is high, which ferritin from inflammation would not produce. Waiting three months postpones the work-up of a condition that is damaging his liver, and treatable.`,
          next: 'c-iron'
        },
        {
          label: 'The raised ALT and 25 units a week of alcohol explain it, so advise abstinence and recheck LFTs in 3 months',
          rating: 'poor',
          feedback: `Alcohol can raise ferritin and ALT, but it does not usually produce a saturation of 89%. This is anchoring on the alcohol history. He may have both, and heavy drinking worsens liver damage in haemochromatosis, but you need to look for the primary cause.`,
          next: 'c-iron'
        }
      ],
      reasoning: `A ferritin of 1480 is high, but ferritin is a poor discriminator on its own because it is an acute-phase protein that also rises with alcohol and fatty liver. The transferrin saturation is the discriminator: when both are high, and the CRP is normal, iron overload is much more likely than a reactive rise. HFE testing for the C282Y change is the next step, and a ferritin above about 1000 is a flag for significant liver fibrosis, so the liver needs staging. He may also have alcohol-related damage, so both things need addressing.`
    },
    {
      id: 'c-iron',
      type: 'presentation',
      tone: 'consequence',
      label: 'The consultant intervenes',
      text: `Your consultant reads the results. &ldquo;A ferritin of nearly 1500 with a saturation of 89% is iron overload until proven otherwise. We aren&rsquo;t waiting three months, and we aren&rsquo;t putting this on the beer.&rdquo; The HFE test is sent that afternoon and the liver work-up is started.`,
      next: 'genotype'
    },
    {
      id: 'genotype',
      type: 'presentation',
      tone: 'results',
      label: 'Confirmatory tests, ten days later',
      text: `<ul>
<li><strong>HFE genotype: C282Y homozygous.</strong></li>
<li>Liver elastography: stiffness in a range that means <strong>advanced fibrosis cannot be excluded</strong>. Ultrasound shows a bright liver and no focal lesion.</li>
<li>ECG normal. No breathlessness or palpitations.</li>
</ul>
The diagnosis is <strong>hereditary haemochromatosis</strong>, with iron-related arthropathy, probable diabetes related to the iron, and possible hypogonadism. The &ldquo;seronegative RA&rdquo; label does not hold.`,
      next: 'manage-q'
    },
    {
      id: 'manage-q',
      type: 'decision',
      stage: 'Manage',
      prompt: 'What is the right next step in organising his care?',
      options: [
        {
          label: 'Refer to hepatology or the local haemochromatosis service for venesection and liver staging, and review diabetes, heart and hormones',
          rating: 'best',
          feedback: `Treatment is venesection to remove iron, and the biggest risk is the liver, so hepatology (or the local service) should lead, with the liver staged properly. Iron also affects the pancreas, heart and pituitary-gonadal axis, so these need review in parallel. What would change your mind is a low ferritin and a normal liver, which would make the case less urgent.`,
          next: 'rx-q'
        },
        {
          label: 'Refer to hepatology for liver staging and venesection, and leave the review of diabetes, heart and hormones to the GP',
          rating: 'good',
          feedback: `Hepatology is the right place for venesection and liver staging. But leaving everything else with the GP, without saying so, is likely to see the heart and hormone review slip. Name the other organs in your letter, and ask for the checks.`,
          next: 'rx-q'
        },
        {
          label: 'Refer to haematology for venesection alone; the liver enzymes are only mildly raised so the liver can wait',
          rating: 'poor',
          feedback: `The ALT is only mildly raised, but liver enzymes do not reflect fibrosis and the ferritin is high with a stiff liver on elastography. Cirrhosis changes the surveillance he needs, including for liver cancer, so staging is not optional.`,
          next: 'c-manage'
        },
        {
          label: 'Keep him in rheumatology follow-up and recheck the ferritin in six months before deciding on treatment',
          rating: 'poor',
          feedback: `Further iron loading damages organs, and venesection works best before cirrhosis. The rheumatology clinic cannot deliver the main treatment, and deferring it is not a neutral choice.`,
          next: 'c-manage'
        }
      ],
      reasoning: `Haemochromatosis is a multi-system disease, and my job in rheumatology is to recognise it and hand it on well. The main treatment is regular venesection, and the main risk is cirrhosis, so liver staging and a hepatology plan come first. I also check for other iron targets: diabetes control, the heart (ECG, and an echo if he has symptoms) and the pituitary-gonadal axis, because the loss of libido may have a treatable endocrine cause. I note that the arthropathy often does not improve with venesection, so he will still need rheumatology input for the hands.`
    },
    {
      id: 'c-manage',
      type: 'presentation',
      tone: 'consequence',
      label: 'A phone call',
      text: `The hepatology registrar rings after reading your letter. &ldquo;I can start venesection, but I need the liver properly staged first, and someone needs to look at his heart and his hormones. Can you let the GP and the diabetes team know that this is not just a diabetic with arthritis?&rdquo; The referral is rewritten and the other teams are told.`,
      next: 'rx-q'
    },
    {
      id: 'rx-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'The GP asked you to start a DMARD. What do you prescribe for his hands today?',
      options: [
        {
          label: 'No methotrexate or steroids; paracetamol, a topical NSAID, heat and hand therapy, pending liver and renal review',
          rating: 'best',
          feedback: `The label that justified a DMARD no longer holds. Methotrexate is hepatotoxic and risky in a liver with possible advanced fibrosis, and it would not treat this arthropathy. Steroids would worsen his diabetes. Simple analgesia and hand therapy are safe, and oral NSAIDs can be revisited once his liver and kidneys are assessed. What would change your mind is an inflammatory arthritis co-existing with this, which can be reconsidered later.`,
          next: 'comm-q'
        },
        {
          label: 'Hold the DMARD, but continue naproxen with a PPI until the hepatology review',
          rating: 'good',
          feedback: `Holding the DMARD is correct, and he may need an NSAID for the pain. But with possible advanced liver fibrosis and diabetes, regular oral NSAIDs carry a real risk of bleeding and renal injury. A simpler approach is safer until the liver and kidneys have been assessed.`,
          next: 'comm-q'
        },
        {
          label: 'Prednisolone 15 mg daily as a bridge, since he has a seronegative inflammatory arthritis',
          rating: 'poor',
          feedback: `The premise is wrong. The film and the blood tests do not show an inflammatory arthritis, steroids will not treat iron arthropathy and they will push up his blood glucose. This is treating a label.`,
          next: 'c-rx-poor'
        },
        {
          label: 'Methotrexate with folic acid as the GP requested, with liver tests monitored in the first month',
          rating: 'unsafe',
          feedback: `Methotrexate can injure the liver, and he has probable advanced fibrosis, heavy alcohol intake and diabetes, all of which raise that risk. It would also not treat the cause of his arthropathy. Monitoring does not make an unnecessary and risky drug safe.`,
          next: 'c-rx-mtx'
        }
      ],
      reasoning: `The question to ask before any prescription is: what is this drug for, and what is the evidence it will work in this disease? The only reason to give methotrexate or prednisolone was the working diagnosis of inflammatory arthritis, and the evidence now says that it is not. Iron-related arthropathy does not respond to DMARDs, and the drugs carry real harm here: liver toxicity, bone marrow effects and, with steroids, worse diabetes. So I do the safe thing and reassess if he turns out to have a coexisting inflammatory arthritis.`
    },
    {
      id: 'c-rx-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Three weeks on',
      text: `His hands are no better. His blood glucose has risen, and he has been getting up at night to pass urine and has a constant thirst. His diabetic nurse changes his treatment. The steroids are stopped and the hepatology plan carries on.`,
      next: 'comm-q'
    },
    {
      id: 'c-rx-mtx',
      type: 'presentation',
      tone: 'danger',
      label: 'Two weeks on',
      text: `His routine blood test shows an ALT of 180 U/L, much higher than before. The practice nurse phones the clinic. The methotrexate is stopped, his liver tests are followed until they settle, and the hepatology team have an additional concern in a liver already at risk. The hands, of course, are no better.`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'Mr and Mrs Llewellyn ask: &ldquo;Is it the drink? Will this fix my hands? Is my liver ruined? Could our children have it?&rdquo; How do you answer?',
      options: [
        {
          label: 'Explain an inherited iron condition, venesection as treatment, honest limits for the hands, and testing for relatives',
          rating: 'best',
          feedback: `This answers each of the four questions honestly: it is inherited and not caused by drink (though alcohol worsens liver damage), venesection is effective but the joint damage may not reverse, his liver will be assessed, and first-degree relatives can be offered testing. Check understanding by asking them to say it back, and offer written information. What would change your approach is a patient who wants to hear less at one time, in which case split it over visits.`,
          next: 'conclusion'
        },
        {
          label: 'Explain the iron overload and venesection, and leave the genetics and testing of relatives to the specialist nurse',
          rating: 'good',
          feedback: `The core is right and the nurse can do the detail. But the children were part of their question, and leaving the family question out entirely may make them think it is unimportant. A sentence now, and the detail later, is better.`,
          next: 'conclusion'
        },
        {
          label: 'Say the iron will be removed by venesection and that his hand pain should clear in a few months',
          rating: 'poor',
          feedback: `This is reassurance that is not safe to give. Venesection protects the liver and other organs, but arthropathy often does not improve, and the bony damage is already there. False hope now leads to disappointment and loss of trust later.`,
          next: 'c-comm'
        },
        {
          label: 'Say that drinking has caused it, he should stop completely and the liver will then recover',
          rating: 'poor',
          feedback: `This blames him for an inherited condition and promises recovery that cannot be guaranteed. Alcohol adds to liver damage in haemochromatosis and should be kept low, but it is not the cause. Blame discourages honest conversations about drinking.`,
          next: 'c-comm'
        }
      ],
      reasoning: `They have asked four direct questions, so I answer four. It is a gene he inherited from both parents, so it is not his fault, and drink is not the cause, but it makes liver damage worse. Venesection is a good treatment for the iron, and most of the benefit is for his liver and other organs, but the hands may not get better and he will still need help with pain. First-degree relatives are offered testing, which is a practical and kind thing to say now, because his daughter is a nurse and will ask. I am honest about the liver: we will know more after staging.`
    },
    {
      id: 'c-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'The first venesection session',
      text: `The nurse finds that Mr Llewellyn expects his hands to improve within weeks, and Sian believes his drinking is to blame. His daughter has rung the department to ask why nobody has mentioned that she and her brother should be tested. The nurse spends an hour going over the diagnosis, correcting each point and arranging family screening.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: hereditary haemochromatosis (HFE C282Y homozygous) with iron-related arthropathy, previously labelled &ldquo;seronegative RA&rdquo;.</strong><br><br>
Mr Llewellyn began regular venesection under hepatology, and his liver was staged. His diabetes and hormone levels were reviewed. His ferritin fell and his energy improved. His hands did not recover fully, but hand therapy and analgesia helped, and he kept milking. His daughter and son were offered testing.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>&ldquo;Seronegative&rdquo; is a description of two negative blood tests, not a diagnosis. Build a differential and look for clues outside the joints.</li>
<li>Diabetes, tiredness, loss of libido, a grey-bronze skin tone, liver enlargement and a family history of liver disease point to iron overload.</li>
<li>Distribution matters: 2nd and 3rd MCP involvement is not typical of RA or primary OA.</li>
<li>Read the film systematically. No osteopenia and no marginal erosions argues against RA; hook osteophytes and chondrocalcinosis suggest a metabolic cause.</li>
<li>Ferritin plus transferrin saturation, then HFE genotype. A very high ferritin means the liver needs staging.</li>
<li>Do not start a DMARD on a label. Methotrexate is hazardous in a liver at risk and would not help.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;You inherited a gene that makes your body absorb too much iron. It has built up in your liver, pancreas and joints. We can remove the iron by taking blood regularly, which protects the liver and other organs. It may not reverse the changes in your hands, and we will help you manage those. Your children can be tested.&rdquo;<br><br>
<strong>Safety-netting:</strong> report abdominal swelling, jaundice, vomiting blood, black stools, breathlessness, palpitations or swollen ankles. Keep alcohol low, avoid iron and vitamin C supplements, and do not eat raw shellfish.`,
      keyLearning: [
        '&ldquo;Seronegative&rdquo; means two blood tests were negative. It is not a diagnosis, and it should prompt a differential, not a DMARD.',
        'The distribution of joint involvement is a major clue: bony enlargement of the 2nd and 3rd MCPs suggests haemochromatosis or CPPD, not RA.',
        'CPPD or chondrocalcinosis under about 60 should lead to a metabolic screen, including iron studies.',
        'Ferritin is an acute-phase protein that rises with alcohol and fatty liver. A high transferrin saturation is the discriminator.',
        'Read a hand film systematically. RA gives periarticular osteopenia and marginal erosions. Their absence matters.',
        'Do not start methotrexate on an unconfirmed label, especially if the liver may be at risk.',
        'Haemochromatosis is inherited. First-degree relatives should be offered testing, and joint damage may not improve with venesection.'
      ],
      relatedTests: ['Ferritin', 'Fasting transferrin saturation', 'HFE genotype', 'Liver profile', 'Liver elastography', 'HbA1c', 'X-ray of hands and wrists', 'ECG'],
      goingFurther: `<strong>Genetics:</strong> most UK patients are homozygous for the C282Y change in HFE. C282Y/H63D compound heterozygotes seldom develop significant overload unless there is another cause, such as alcohol or fatty liver. Penetrance is incomplete: many homozygotes never develop significant disease, and men are affected earlier than women because women lose iron through menstruation and pregnancy.<br><br>
<strong>Arthropathy:</strong> it is one of the commonest and earliest presenting features, and typically involves the 2nd and 3rd MCPs, with hook-like osteophytes on the radial side, but also wrists, hips, knees and ankles. Chondrocalcinosis is frequent. It is thought to result from iron-related damage to cartilage and often coexists with CPPD. Unlike the liver, it often progresses despite iron depletion, which is why early recognition matters. Treatment is symptomatic: analgesia, NSAIDs when safe, colchicine for acute CPPD flares, hand therapy and sometimes surgery.<br><br>
<strong>Management of iron overload:</strong> venesection aims to bring the ferritin down to a low-normal target and then maintain it. Patients with cirrhosis need regular surveillance for hepatocellular carcinoma. Complications of untreated disease include cirrhosis, diabetes, cardiomyopathy, hypogonadism and skin pigmentation. Exact thresholds and regimens are set by local specialist services.<br><br>
<strong>Other mimics:</strong> psoriatic arthritis, reactive arthritis and polyarticular CPPD are all causes of &ldquo;seronegative&rdquo; arthritis. A secondary cause of CPPD should be sought in younger patients, including hyperparathyroidism, hypomagnesaemia and hypophosphatasia.`
    }
  ]
};
