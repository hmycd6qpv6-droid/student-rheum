/* joints-case-6: The Third Week */

export default {
  id: 'joints-case-6',
  title: 'The Third Week',
  summary: '46-year-old delivery driver with three weeks of sciatica, now with pain in both legs',
  setting: 'Emergency department',
  difficulty: 'intermediate',
  curriculum: ['EM-CES', 'CD-BACK-BLADDER', 'PR-BACK', 'OR-SPINE', 'SK-NEURO', 'SK-SBAR', 'LO4', 'LO8', 'IX-IMAGING', 'REF-NG59'],
  objectives: [
    'Ask about bladder, bowel, saddle and sexual symptoms sensitively in anyone with back pain and leg symptoms',
    'Explain why opioids must not be assumed to explain new urinary symptoms',
    'Say why a normal examination does not exclude early cauda equina syndrome',
    'Escalate suspected cauda equina syndrome for emergency MRI and spinal advice',
    'Hand over concisely using SBAR, and explain urgency and possible surgery honestly'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Emergency department, 20:50',
      text: `<strong>Mr Tomasz Kowalski, 46, self-employed parcel delivery driver</strong><br><br>
His wife Agnieszka has driven him in after he rang the GP surgery at 17:30. The GP who phoned back said that worse pain in both legs needed to be seen today, and sent him to the ED. He is standing in the waiting room because sitting hurts.<br><br>
<strong>What he tells you:</strong>
<ul>
<li>Left buttock and leg pain, down to the outside of the foot, for 3 weeks. It began after lifting a heavy box into his van. His GP diagnosed sciatica.</li>
<li>For the last 2 days the pain has spread to the <strong>right leg</strong> as well. It is worse on coughing, and he cannot sleep.</li>
<li>He takes co-codamol 30/500 two tablets four times a day, and naproxen 500 mg twice a day with omeprazole. &ldquo;They hardly touch it.&rdquo;</li>
<li>He is worried about his van. He is the only earner, they have two children aged 9 and 12, and he has not worked for a week.</li>
<li>When you mention his waterworks he shrugs: &ldquo;A bit slow. It is the co-codamol, my wife says. I am blocked up too.&rdquo;</li>
</ul>
Observations are normal. The triage note reads: &ldquo;Sciatica, no red flags.&rdquo;`,
      next: 'history-q'
    },
    {
      id: 'history-q',
      type: 'decision',
      stage: 'History',
      prompt: 'Which questions do you ask next?',
      options: [
        {
          label: 'Ask privately about bladder, bowel, saddle numbness, sexual function and leg weakness, explaining why',
          rating: 'best',
          feedback: `Back pain with new leg symptoms must prompt direct questions about the bladder (hesitancy, straining, poor sensation of fullness, leaking), bowel, numbness around the genitals and buttocks, and sexual function. People rarely volunteer these symptoms, and often feel embarrassed or think they are unrelated. Asking him alone, in plain words, and saying why you ask, gives you the history. What would change your mind is a clear, specific denial of every one, but even then the examination still matters.`,
          next: 'history-findings'
        },
        {
          label: 'Ask about bladder and bowel, but skip saddle numbness and sexual function as they may embarrass him',
          rating: 'good',
          feedback: `Asking about bladder and bowel is right, and doing it sensitively matters. But saddle sensation and sexual dysfunction are core questions, and sometimes the only positive ones. Embarrassment is a reason to ask carefully, not a reason to leave the question out.`,
          next: 'c-history'
        },
        {
          label: 'Rely on the triage note, then ask about the pain character, his sleep and whether the naproxen is helping',
          rating: 'poor',
          feedback: `A triage entry of &ldquo;no red flags&rdquo; is only as good as the questions that were asked, and here nobody has asked them. Accepting it is premature closure, and it leaves the one thing that could change his outcome unexplored.`,
          next: 'c-history'
        },
        {
          label: 'Ask about the lifting injury, previous back trouble, his job and which painkillers have worked before',
          rating: 'poor',
          feedback: `This is a thorough pain history, and useful for later. But it is all about the mechanical story. The question that matters most is missing: do any of his symptoms suggest that the nerves to the bladder, bowel or saddle area are involved?`,
          next: 'c-history'
        }
      ],
      reasoning: `Prevalence is on my side with sciatica: most people with it have a nerve root problem that settles, and cauda equina syndrome is rare. But the harm from a missed case is large and permanent, so my threshold for asking is low, and the questions cost nothing. Spread of pain to both legs raises the stakes on its own. I sit down, offer to speak to him without his wife present, and say, &ldquo;I am going to ask some personal questions about your bladder, bowels and sex life, because they tell me whether the nerves at the base of your spine are affected.&rdquo; Then I ask each question separately, in plain words.`
    },
    {
      id: 'c-history',
      type: 'presentation',
      tone: 'consequence',
      label: 'The registrar steps in',
      text: `Your registrar reads the note and asks to hear the history again. She asks his wife to wait outside and says, &ldquo;I need to ask some private questions, because with back pain they are the whole point.&rdquo; Mr Kowalski goes quiet, then answers properly. It adds about 15 minutes to the assessment.`,
      next: 'history-findings'
    },
    {
      id: 'history-findings',
      type: 'presentation',
      label: 'The private history',
      text: `Once he understands why you are asking, Mr Kowalski talks more freely:
<ul>
<li><strong>Bladder:</strong> for 3 days he has had to wait and strain to start, the stream is weak, and in the last day he has not felt his bladder filling. &ldquo;I only go because the clock says so.&rdquo; A little dribbling in his boxers this afternoon. No pain on passing urine.</li>
<li><strong>Bowel:</strong> constipated for 5 days, which he puts down to co-codamol. No leaking. He is not sure when he last noticed passing wind.</li>
<li><strong>Saddle:</strong> &ldquo;It is odd wiping myself. I can&rsquo;t feel the paper properly on the left.&rdquo; Numbness down the back of the left thigh.</li>
<li><strong>Sexual function:</strong> difficulty getting an erection for 3 days. &ldquo;I thought it was stress.&rdquo;</li>
<li><strong>Legs:</strong> the left foot feels heavy and he has tripped on a kerb. No fever, no weight loss, no night sweats, no injecting drug use. Not diabetic.</li>
<li><strong>Past history:</strong> a melanoma was removed from his upper back 6 years ago and he was discharged from dermatology after 5 years. Ex-smoker, stopped 8 years ago. No other illness. No drug allergies.</li>
</ul>`,
      next: 'anchor-q'
    },
    {
      id: 'anchor-q',
      type: 'decision',
      stage: 'Differential',
      prompt: 'His urinary hesitancy began after he started co-codamol. How do you use that?',
      options: [
        {
          label: 'Treat as possible cauda equina syndrome, with opioids as a contributor that cannot be assumed to explain it',
          rating: 'best',
          feedback: `Opioids genuinely cause constipation and urinary hesitancy, which is why this is a trap. But he also has reduced bladder sensation, saddle numbness, erectile difficulty and bilateral leg pain, which opioids do not explain together. One tidy explanation for a cluster of symptoms is a cue to ask what else would explain them. You cannot call the opioid the cause without objective assessment. What would change your mind is a normal examination and bladder scan, though even those would not be conclusive.`,
          next: 'ddx-reflect'
        },
        {
          label: 'Examine and bladder scan him, but if the scan is normal attribute the urinary symptoms to the opioids',
          rating: 'good',
          feedback: `Doing the examination and scan is exactly right. The weakness is the plan to stop once the scan looks normal. Early cauda equina syndrome can cause altered sensation and a poor stream while the bladder still empties, so a scan without retention does not close the question.`,
          next: 'ddx-reflect'
        },
        {
          label: 'Stop the co-codamol, start a laxative and ask him to ring the GP if the symptoms continue',
          rating: 'poor',
          feedback: `Reducing the opioid and treating constipation are sensible, but this plan makes the drug the answer and leaves the cause unexamined. You would be waiting for a response to a change in medicines while nerve damage may be progressing.`,
          next: 'c-anchor'
        },
        {
          label: 'Explain the symptoms as opioid side effects, switch his analgesia and discharge with GP follow-up',
          rating: 'unsafe',
          feedback: `This is anchoring on a plausible drug effect while ignoring saddle numbness, erectile difficulty and the loss of bladder sensation. If it is cauda equina syndrome, discharge means he could progress to painless retention and permanent loss of bladder, bowel and sexual function within hours to days.`,
          next: 'c-anchor'
        }
      ],
      reasoning: `Anchoring means keeping the first neat explanation and filtering out what does not fit. Opioids can slow the stream, but they do not take away the feeling of a full bladder, numb the perineum, or cause erectile dysfunction that began days later. The probability of cauda equina syndrome in a man with sciatica is low. In a man with sciatica <em>and</em> a new loss of bladder sensation, saddle numbness and bilateral symptoms, it is not low at all. I can hold the opioid as a contributor and still act on the other explanation, since the cost of being wrong is so much greater.`
    },
    {
      id: 'c-anchor',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss',
      text: `Before the discharge is finalised, the nurse who took the history asks whether anyone has checked his bladder, as he told her he &ldquo;cannot tell when he needs to go&rdquo;. Your registrar overhears and stops the discharge: &ldquo;Back pain with new bladder symptoms is cauda equina until proven otherwise.&rdquo; You are asked to start again and examine him properly.`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'List the serious causes of back pain with leg symptoms that you must not miss in this man. Which features in his story point towards or away from each one?',
      reveal: `<strong>The can't-miss causes:</strong>
<ol>
<li><strong>Cauda equina syndrome (CES)</strong>, usually from a large central disc prolapse. Features: bilateral or alternating leg symptoms, altered bladder sensation, hesitancy or retention, bowel change, saddle numbness, sexual dysfunction. <strong>He has several.</strong></li>
<li><strong>Metastatic compression of the cord or cauda equina.</strong> The clue is a previous cancer. He had a melanoma 6 years ago, which can recur late and spread to bone and spine. Look for progressive pain at night, pain that is worse lying flat, weight loss and thoracic pain. Same-day imaging is needed either way, and the radiologist may extend the scan to the whole spine.</li>
<li><strong>Spinal infection</strong> (discitis, vertebral osteomyelitis, epidural abscess). Features: fever, raised inflammatory markers, recent bacteraemia or procedure, injecting drug use, diabetes or immunosuppression. He has none, but an abscess can present without fever early on.</li>
<li><strong>Vertebral fracture.</strong> Trauma, osteoporosis, long-term steroids or cancer. A lifting injury at 46 with no other risk factors makes this less likely.</li>
<li><strong>Abdominal aortic aneurysm.</strong> Consider in older people with back pain and vascular risk. At 46 it is unlikely, but it is on the list.</li>
<li><strong>Inflammatory back pain</strong> (axial spondyloarthritis). Young onset, morning stiffness, improves with movement. It does not cause bladder symptoms, and his pain is worse with movement and cough, so it is unlikely here.</li>
</ol>
CES, metastatic compression and infection can all injure nerves permanently, and all need <strong>urgent MRI</strong>. This is why you do not need to decide between them before escalating: the first action is the same.`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'How do you examine him?',
      options: [
        {
          label: 'Examine the legs, check saddle sensation, and arrange a perianal examination, with explanation, consent and a chaperone',
          rating: 'best',
          feedback: `A focused spinal neurological examination covers power by myotome, sensation by dermatome, reflexes and straight-leg raise, plus the saddle area and the perianal examination. Explain each step, ask consent, offer a chaperone, and keep him covered as much as you can. A senior should do or confirm the rectal examination. What would change your mind is a plainly normal saddle area with a normal bladder scan, though that still would not exclude it.`,
          next: 'exam-findings'
        },
        {
          label: 'Examine the back and legs fully, but leave the saddle area and rectal examination for the spinal team',
          rating: 'good',
          feedback: `Doing a careful leg examination is right, and many students feel uncomfortable with intimate examination. But a simple test of saddle sensation does not need a specialist and takes a minute, and leaving it out means the referral is made with less information. The decision about a rectal examination is for a senior, but it should not be forgotten.`,
          next: 'c-exam'
        },
        {
          label: 'Do the saddle sensation and rectal examination first as the key signs, then briefly check the legs',
          rating: 'poor',
          feedback: `The key signs are right, but starting with the most intimate part, without explanation or a chaperone, undermines the consent and dignity a good examination needs. It also risks an embarrassed patient who is less willing to engage. Begin with the legs and work towards the sensitive areas, explaining as you go.`,
          next: 'c-exam'
        },
        {
          label: 'Test straight-leg raise and left ankle power, then document the findings as in sciatica and move on',
          rating: 'poor',
          feedback: `This is a satisficing examination: you found what you were looking for (a root problem) and stopped. A limited exam of one leg will not identify bilateral or sacral involvement, and the examination is the only objective evidence you will have.`,
          next: 'c-exam'
        }
      ],
      reasoning: `I tell him what I am going to do and why, offer a chaperone, and check he is comfortable before starting. I work from the feet up: tone, power (hip flexion, knee extension, ankle dorsiflexion and plantarflexion, great toe extension), reflexes (knee and ankle), then sensation by dermatome, finishing with the saddle area. For an intimate examination I need his consent and a chaperone, and a senior usually performs the digital rectal examination to assess tone and voluntary squeeze. Alongside this I want a <strong>post-void bladder scan</strong>, which is quick and non-invasive. None of this should delay the scan: a normal finding at the bedside will not rule out CES.`
    },
    {
      id: 'c-exam',
      type: 'presentation',
      tone: 'consequence',
      label: 'Starting again',
      text: `Mr Kowalski goes tense and says, &ldquo;Is this really necessary?&rdquo; Your registrar steps in, explains in plain words what she will check and why, offers a chaperone and says he can stop at any point. He relaxes, agrees to the complete examination, and thanks her afterwards. It takes 10 minutes longer than it should have.`,
      next: 'exam-findings'
    },
    {
      id: 'exam-findings',
      type: 'presentation',
      tone: 'results',
      label: 'Examination findings',
      text: `Observations: temperature 36.8&deg;C, heart rate 84, blood pressure 138/86, oxygen saturation 98% on air. He is lying on his side, in pain. No spinal deformity. Mild midline lumbar tenderness.<br><br>
<strong>Legs:</strong>
<ul>
<li>Power 5/5 throughout on the right. Left great toe extension 4/5 and left ankle dorsiflexion 4+/5. Plantarflexion 5/5 on both sides.</li>
<li>Knee jerks present on both sides. <strong>Left ankle jerk reduced</strong>, right present.</li>
<li>Straight-leg raise reproduces left leg pain at about 40 degrees, and raising the right leg also provokes <strong>left leg pain</strong> (crossed).</li>
<li>Reduced light touch and pinprick over the left posterior thigh and calf, and in a patchy area over the left buttock.</li>
</ul>
<strong>Saddle and perianal (with explanation, consent and a chaperone, performed by your registrar):</strong>
<ul>
<li>Reduced pinprick sensation in the left perianal area. Right side normal.</li>
<li>Anal tone <strong>normal</strong> on digital examination. Voluntary squeeze present.</li>
</ul>
<strong>Bladder scan:</strong> he passes 250 mL and the <strong>post-void residual is 140 mL</strong>.`,
      next: 'interpret-q'
    },
    {
      id: 'interpret-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'The anal tone is normal and the weakness is mild. What do you conclude?',
      options: [
        {
          label: 'Subtle signs do not exclude early CES; the history, saddle sensation and residual volume warrant emergency MRI',
          rating: 'best',
          feedback: `Normal anal tone, near-normal power and no frank retention are all common in <em>early or incomplete</em> cauda equina syndrome. The picture is of symptoms already present (altered bladder sensation, saddle numbness, sexual dysfunction) with a residual volume that is not normal. A normal examination lowers the likelihood a little but does not exclude it. This is the moment at which MRI changes outcome, since function is lost progressively.`,
          next: 'escalate-q'
        },
        {
          label: 'Probably CES-I, but with normal tone and no retention I should ask a senior whether tonight needs a scan',
          rating: 'good',
          feedback: `Involving a senior is wise, and you should never feel you must decide alone. But you already have enough to escalate. Asking <em>whether</em> a scan is needed risks being told to wait, when the question is simply how quickly it can be done.`,
          next: 'c-interpret'
        },
        {
          label: 'The normal anal tone and good power are reassuring, so this is most likely a bad sciatic root problem',
          rating: 'poor',
          feedback: `This is false reassurance from a normal finding. Anal tone and power are late signs: by the time they fall, damage is established. When the history is this specific, a normal examination does not outweigh it.`,
          next: 'c-interpret'
        },
        {
          label: 'The residual is below the level of retention, so the bladder symptoms are not significant yet',
          rating: 'poor',
          feedback: `Retention is the late stage of the disease. Altered urinary sensation, difficulty starting and a raised residual before retention is the stage at which surgery gives the best chance of recovery. Waiting for a bigger number means waiting for worse nerve damage.`,
          next: 'c-interpret'
        }
      ],
      reasoning: `The probability of CES comes from the whole picture, not one sign. For: bilateral leg symptoms, loss of bladder sensation, hesitancy and straining, saddle numbness, erectile difficulty and a lateralised neurological deficit. Against: preserved tone, mild weakness and no retention. Those last three are what an <em>early</em> case looks like, and early is exactly when we want to find it. The cost of a negative MRI is a few hours and a scan. The cost of a missed incomplete CES is lifelong bladder, bowel and sexual dysfunction. I would act.`
    },
    {
      id: 'c-interpret',
      type: 'presentation',
      tone: 'consequence',
      label: 'A senior steps in',
      text: `You present the case to your registrar, who goes through the findings again. &ldquo;Altered bladder sensation, saddle numbness, erectile difficulty, a raised residual and bilateral symptoms,&rdquo; she says. &ldquo;That is CES until a scan says otherwise. Normal tone just tells us he has not got there yet.&rdquo;`,
      next: 'escalate-q'
    },
    {
      id: 'escalate-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'It is 22:00. What is the right plan?',
      options: [
        {
          label: 'Request an emergency MRI tonight and phone the on-call spinal team now, as per the local pathway',
          rating: 'best',
          feedback: `Suspected CES is a surgical emergency. The scan is done urgently on the same day, whatever the hour, and the spinal team should know before the result so that decisions about surgery or transfer are not delayed. Follow your local CES pathway, which says who to call and when. What would change your mind is a scan showing no compression, which only the scan can tell you.`,
          next: 'ix-q'
        },
        {
          label: 'Request an emergency MRI tonight and plan to phone the spinal team when the result is available',
          rating: 'good',
          feedback: `Getting the scan quickly is right. But if you only call when the result is back, the spinal team cannot plan theatre, anaesthetic cover or transfer in advance, and an out-of-hours transfer can take hours. Early notification is part of the escalation.`,
          next: 'c-escalate-good'
        },
        {
          label: 'Request a routine MRI, refer him to physiotherapy and ask his GP to review him next week',
          rating: 'unsafe',
          feedback: `This treats suspected CES as ordinary sciatica. Routine MRI lists run for days or weeks, and in that time he could progress to retention. Once the bladder has stopped working, recovery is much less likely.`,
          next: 'c-escalate-unsafe'
        },
        {
          label: 'Keep him in overnight with analgesia and book the first MRI slot on tomorrow morning&rsquo;s list',
          rating: 'unsafe',
          feedback: `Overnight is a long time for nerves under pressure. A planned wait until the morning list is a decision to delay, and it ignores that emergency MRI for suspected CES should be available around the clock. If his bladder fails overnight it may go unnoticed.`,
          next: 'c-escalate-unsafe'
        },
        {
          label: 'Insert a urinary catheter, give stronger analgesia and send him home with community nursing support',
          rating: 'unsafe',
          feedback: `A catheter treats the bladder and not the cause. It also hides a key sign, because you lose the ability to monitor for retention. Sending him home means the compression is neither imaged nor relieved.`,
          next: 'c-escalate-unsafe'
        }
      ],
      reasoning: `The time that matters is the time to decompression, and it starts when we recognise the problem. Every hour I spend waiting is an hour his nerves are squeezed. So I do two things at once: I get the scan booked as an emergency, and I phone the spinal team so they are expecting him. I also check whether this hospital hosts the spinal service, since if it does not he may need transfer, which takes time. In the meantime he stays nil by mouth in case he needs theatre, and I keep him on the ward where his bladder can be scanned again.`
    },
    {
      id: 'c-escalate-good',
      type: 'presentation',
      tone: 'consequence',
      label: 'A short delay',
      text: `The scan is done at 23:30. When you phone, the spinal registrar says, &ldquo;I wish I&rsquo;d known two hours ago. I could have arranged anaesthetic cover and been ready to review him as the scan finished.&rdquo; The delay costs about an hour.`,
      next: 'ix-q'
    },
    {
      id: 'c-escalate-unsafe',
      type: 'presentation',
      tone: 'danger',
      label: 'Overruled',
      text: `At 22:40 the ED consultant reviews the plan and overturns it: &ldquo;Suspected cauda equina gets scanned tonight and the spinal team hear about it now. It does not wait for a list or a clinic.&rdquo; She orders the emergency MRI and phones the on-call spinal registrar herself. You are asked to record in the notes why the earlier plan was changed. The change loses nearly an hour.`,
      next: 'ix-q'
    },
    {
      id: 'ix-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'What do you request and arrange while he waits for the scan?',
      options: [
        {
          label: 'Emergency MRI of the lumbar spine noting the melanoma, plus bloods, nil by mouth and repeat bladder scans',
          rating: 'best',
          feedback: `MRI is the investigation of choice. It shows compression of the cauda equina and also tumour, infection and fracture. Stating the melanoma history on the request lets the radiologist extend to the whole spine if needed. Bloods (FBC, U&amp;E, CRP, clotting, group and save) are what surgeons and anaesthetists need. Keeping him fasted and rescanning the bladder prepares for theatre and watches for progression.`,
          next: 'mri-results'
        },
        {
          label: 'Emergency MRI of the lumbar spine with the clinical details, plus bloods, but nothing about fasting or the bladder',
          rating: 'good',
          feedback: `The right scan and the right bloods. But if he is going to theatre and has just eaten, surgery is delayed, and without repeat bladder scans a change to retention can go unnoticed overnight. Think ahead to what the next two hours need.`,
          next: 'c-ix'
        },
        {
          label: 'Lumbar spine X-ray and CRP first, then request the MRI if either of those tests is abnormal',
          rating: 'poor',
          feedback: `A plain film cannot show nerve compression, and a normal X-ray or CRP does not reduce the need for MRI in suspected CES. Using a weak test to decide whether to do the right one builds delay into the pathway.`,
          next: 'c-ix'
        },
        {
          label: 'CT of the lumbar spine because it is quicker, and rely on that to decide the next step',
          rating: 'poor',
          feedback: `CT shows bone well and can show a large disc, but soft tissue detail is poor and a negative CT does not exclude compression. It is a fallback if MRI is contraindicated or unavailable. As the first choice it is the wrong tool.`,
          next: 'c-ix'
        }
      ],
      reasoning: `The question for the scan is whether something is compressing the cauda equina, and what. MRI answers both. The request form is part of the investigation: if I write &ldquo;sciatica&rdquo; the scan may be reported on a routine basis, but &ldquo;suspected CES, urinary hesitancy, reduced saddle sensation, previous melanoma&rdquo; tells the radiologist the urgency and the cancer question. I also think about what happens after: if the answer is a disc, he may need theatre within hours, so he stays nil by mouth and I get bloods and a group and save done now.`
    },
    {
      id: 'c-ix',
      type: 'presentation',
      tone: 'consequence',
      label: 'Catching up',
      text: `The radiographer rings: the request lacks the details needed to protocol the scan as an emergency. Your registrar corrects the form, the scan is moved forward, and the missing preparation for theatre is sorted. The pathway is slower than it needed to be, but the scan is still done within the hour.`,
      next: 'mri-results'
    },
    {
      id: 'mri-results',
      type: 'presentation',
      tone: 'results',
      label: 'MRI reported, 00:15',
      text: `<strong>Large central disc prolapse at L4/5 causing severe compression of the cauda equina.</strong> The thecal sac is almost obliterated at that level. No other level is affected, there is no vertebral destruction, no abnormal marrow signal, no collection and no mass.<br><br>
The radiologist has reviewed the whole spine: no metastatic disease. The on-call spinal registrar has seen the images and is coming to review him. She asks for a clear handover from you before she arrives.`,
      next: 'handover-q'
    },
    {
      id: 'handover-q',
      type: 'decision',
      stage: 'Handover',
      prompt: 'Which SBAR do you give to the spinal registrar?',
      options: [
        {
          label: 'S: 46M, 3 weeks sciatica, now bilateral, urinary hesitancy, L saddle numbness. B: melanoma, co-codamol. A: CES-I, PVR 140 mL, normal tone. R: review now for decompression.',
          rating: 'best',
          feedback: `This states the problem in the first line, gives the key positives (saddle numbness, bladder sensation) and negatives (normal tone), the objective number (residual 140 mL), the relevant background and a clear ask. A listener can act on it in 20 seconds. What would improve it further is the time symptoms began and his fasting status.`,
          next: 'comm-q'
        },
        {
          label: 'S: Man with sciatica and some bladder symptoms. B: melanoma, on co-codamol. A: disc on MRI. R: please can you see him when you get a chance?',
          rating: 'good',
          feedback: `The right problem and the right background. But &ldquo;some bladder symptoms&rdquo; hides the essential detail, there is no objective data (residual volume, tone, saddle findings) and the ask is vague and does not convey urgency. The spinal team have to start the history again.`,
          next: 'c-handover'
        },
        {
          label: 'S: He came in at 20:50 after the GP rang, then bloods, then the history, then examination, then the scan showed a disc. R: so I am calling you.',
          rating: 'poor',
          feedback: `A chronological story is a natural way to tell it, but the listener has to wait for the point. SBAR is built to put the situation, the assessment and what you want at the front, so the busy person on the other end of the phone hears the key thing first.`,
          next: 'c-handover'
        },
        {
          label: 'S: Back pain patient, probably opioid effects on the bladder. B: ex-smoker, lifting injury. A: disc on MRI. R: can he be seen in clinic?',
          rating: 'unsafe',
          feedback: `This undersells the case. Calling the bladder symptoms &ldquo;probably opioid&rdquo; repeats the anchoring error and invites a low-priority response. Asking for a clinic appointment when you need an emergency review means the person at the other end hears this as non-urgent.`,
          next: 'c-handover'
        }
      ],
      reasoning: `A good SBAR gets the right person moving. The first sentence must say what I want them to worry about (suspected incomplete cauda equina syndrome from a large L4/5 disc), the second what makes me say so (timeline, bladder, saddle), and then the objective data: residual volume, tone, power, scan. The background line is short: past cancer, anticoagulants (none), fasting time. The ask has to be specific: &ldquo;I would like you to review him now for emergency decompression.&rdquo; I would read it back if asked to repeat anything. Writing it in the notes afterwards makes it auditable.`
    },
    {
      id: 'c-handover',
      type: 'presentation',
      tone: 'consequence',
      label: 'Clarifying',
      text: `The spinal registrar interrupts: &ldquo;Hold on. Is he in retention? What is the tone? Has he got saddle numbness? When did it start?&rdquo; She has to ask every question that a clear SBAR would have answered. She reaches the right plan, but the call takes three times as long as it should, and the theatre team are told later than they might have been.`,
      next: 'comm-q'
    },
    {
      id: 'comm-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'The registrar has decided he needs an operation. How do you talk to Mr Kowalski and his wife?',
      options: [
        {
          label: 'Explain a disc pressing on nerves, that surgery is likely and urgent, and that recovery is uncertain, then check understanding',
          rating: 'best',
          feedback: `This is honest about what is wrong, why it is urgent and that surgery is likely, and it is honest that recovery of bladder, bowel and sexual function cannot be promised. Speaking plainly and checking understanding lets him take part in the decision. If he asks a question you cannot answer, ask the surgeon to talk to him rather than guessing.`,
          next: 'conclusion'
        },
        {
          label: 'Explain that a disc is pressing on nerves and that the spinal team will explain what happens next',
          rating: 'good',
          feedback: `Leaving the details of the operation to the surgeon is reasonable, because they take the consent. But saying nothing about urgency or surgery leaves him unprepared, and it is hard for him to see why he is being kept nil by mouth. A general explanation of the likely plan is still your job.`,
          next: 'c-comm'
        },
        {
          label: 'Tell him it is precautionary and probably nothing serious, to avoid frightening him before surgery',
          rating: 'poor',
          feedback: `False reassurance is a failure of honesty. He is about to consent to an operation, and he needs to understand why. Playing down the risk to bladder and sexual function now will feel like a betrayal if recovery is incomplete.`,
          next: 'c-comm'
        },
        {
          label: 'Explain that the MRI shows a large L4/5 prolapse with cauda equina compression needing a discectomy',
          rating: 'poor',
          feedback: `Every word is accurate, and none of it is understandable. Jargon leaves a frightened patient and his wife with nothing to hold on to. Use words they use (&ldquo;the bundle of nerves at the bottom of your spine&rdquo;) and check back what they have understood.`,
          next: 'c-comm'
        }
      ],
      reasoning: `I want him to hear three things in plain words: what is wrong (the soft cushion between two bones in your back has bulged out and is squashing the bundle of nerves that control your bladder, bowel and legs), why it is urgent (the sooner the pressure is taken off, the better the chance of recovery), and what is likely to happen (an operation tonight or very early tomorrow). I will be honest that we cannot promise everything will recover and that some people have lasting problems with bladder, bowel or sex. I also ask about what worries him, like the children and his van. I ask him to say back what he has understood, and I record that the spinal team will take formal consent.`
    },
    {
      id: 'c-comm',
      type: 'presentation',
      tone: 'consequence',
      label: 'An hour later',
      text: `Agnieszka asks the nurse why her husband must not eat, and whether he is going to be okay. He says to her quietly, &ldquo;They did not say it was an operation.&rdquo; You sit down with them both, go through what is wrong and what will happen, answer their questions about work and the children, and make sure the spinal registrar knows they have questions for the consent discussion.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: incomplete cauda equina syndrome (CES-I) from a large central L4/5 disc prolapse.</strong><br><br>
Mr Kowalski had an emergency decompression and discectomy in the early hours of the morning. His bladder sensation, saddle numbness and leg symptoms improved over the following weeks, though he was told that recovery of bladder and sexual function can take months and may be incomplete. He had follow-up from the spinal team, physiotherapy, and support from the continence service.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Back pain and leg symptoms: always ask about bladder, bowel, saddle numbness and sexual function, privately and in plain words.</li>
<li>Do not let opioids explain new bladder symptoms. A cluster of findings needs one explanation that covers all of them.</li>
<li>Consider the can't-miss list: CES, malignant compression, infection, fracture. All of them need urgent MRI.</li>
<li>Examine with consent, dignity and a chaperone. Normal tone, near-normal power and no retention do not exclude early CES.</li>
<li>Emergency MRI the same day and an immediate call to the on-call spinal team. Hand over with SBAR and give an honest explanation.</li>
</ol>
<strong>How you'd explain it to the patient:</strong> &ldquo;A cushion between two bones in your back has bulged out and is squashing the nerves that control your bladder, bowel and legs. It needs an operation soon to take the pressure off. The sooner it is done, the better the chance of recovery, but I can&rsquo;t promise everything will return to normal.&rdquo;<br><br>
<strong>Safety-netting for everyone with sciatica:</strong> give <em>written</em> advice, and say it aloud. Seek urgent help (ED, and say &ldquo;I am worried about cauda equina syndrome&rdquo;) for: new difficulty passing urine, not feeling the bladder fill, leaking urine or stool, numbness around the genitals, buttocks or inner thighs, new sexual difficulty, or weakness or pain spreading to both legs. Do not wait for the next appointment. Document the advice in the notes.`,
      keyLearning: [
        'Ask every patient with back pain and leg symptoms about bladder, bowel, saddle sensation and sexual function. They rarely volunteer them.',
        'A plausible drug effect (opioids) can hide a serious cause. Look for a single explanation for the whole cluster.',
        'A normal examination, normal anal tone or no retention does not exclude early cauda equina syndrome.',
        'Suspected CES needs a same-day emergency MRI and an immediate call to the spinal team, not a routine scan or a catheter and discharge.',
        'A previous cancer widens the differential to metastatic compression. The first action, urgent MRI, is the same.',
        'Use SBAR: the problem first, the key positives and negatives with numbers, and a clear ask.',
        'Give every patient with sciatica written advice on cauda equina symptoms, and record that you did.'
      ],
      relatedTests: ['Post-void bladder scan', 'Emergency MRI lumbar spine', 'Whole-spine MRI', 'FBC, U&E, CRP and clotting', 'Lower-limb neurological examination', 'Digital rectal examination'],
      goingFurther: `<strong>Staging:</strong> clinicians often use CES-S (suspected, with symptoms but no objective signs), CES-I (incomplete, with altered urinary sensation, reduced desire to void, poor stream or need to strain, but with preserved voluntary control) and CES-R (established retention with overflow, and often loss of anal tone). Outcome is best if decompression happens before CES-R, which is why the aim is to find it at the CES-I stage or earlier. The staging is a communication tool and does not replace judgement.<br><br>
<strong>Timing of surgery:</strong> the principle is decompression as soon as practicable once compression is confirmed, particularly before retention develops. Once in CES-R, decompression still helps, but outcomes for bladder function are worse. The exact timing in hours is debated and varies, so follow your local spinal service.<br><br>
<strong>Pathways and guidance:</strong> NICE NG59 (low back pain and sciatica in over 16s) says to assess for specific causes, including cauda equina, and not to offer routine imaging for sciatica without a clinical reason. The national GIRFT pathway for suspected CES emphasises emergency MRI access around the clock, a local pathway agreed between ED, radiology and the spinal service, and clear patient information. No single sign rules the diagnosis out.<br><br>
<strong>Medicolegal:</strong> delayed or missed CES is a recurrent source of clinical negligence claims. Common themes are no documented enquiry about bladder, bowel and saddle symptoms, reassurance from a normal examination, no written safety-net advice, and delay to MRI. Contemporaneous notes that record what you asked, what was found and what advice was given are your best protection and a sign of good practice.`
    }
  ]
};
