/* anca-case-2: The Breathless Runner */

export default {
  id: 'anca-case-2',
  title: 'The Breathless Runner',
  summary: '69-year-old previously fit woman with breathlessness, coughing blood and extreme fatigue',
  setting: 'Emergency department',
  difficulty: 'intermediate',
  curriculum: ['RE-VASC', 'LO3', 'LO4', 'TX-MEDS', 'IX-SEROLOGY', 'IX-BLOODS', 'SK-SBAR', 'LO7'],
  objectives: [
    'Prioritise a hypoxic patient safely before settling on a diagnosis',
    'Generate a differential for haemoptysis with acute kidney injury and name the features that favour a pulmonary-renal syndrome',
    'Send ANCA and anti-GBM antibodies together, and explain why',
    'Review a drug chart in acute kidney injury and avoid NSAIDs and other nephrotoxins',
    'Escalate a pulmonary-renal syndrome urgently and explain to the family why hours matter'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'Emergency department, 21:30',
      text: `<strong>Mrs Joan Pritchard, 69, retired primary school headteacher.</strong> She runs a weekly parkrun, walks the dog daily and is rarely seen at the surgery. She is brought in by her husband Dai, a retired builder, because she cannot climb the stairs without stopping.<br><br>
The triage nurse hands you her sheet. <em>"Ten days of cough, breathless, tired out, coughing up some blood. GP gave amoxicillin five days ago and told her to take ibuprofen for the chest pain. I've put CAP and probably AKI on the board."</em><br><br>
<table>
<tr><th>Observation</th><th>Result</th></tr>
<tr><td>Respiratory rate</td><td>28 /min</td></tr>
<tr><td>SpO<sub>2</sub></td><td><strong>89%</strong> on air</td></tr>
<tr><td>Heart rate</td><td>112 /min</td></tr>
<tr><td>Blood pressure</td><td>154/88 mmHg</td></tr>
<tr><td>Temperature</td><td>37.8 °C</td></tr>
<tr><td>GCS</td><td>15</td></tr>
</table><br>
She is sitting forward, speaking in short sentences. The nurse mentions that the blood gas machine reports a haemoglobin that she thinks is "a bit low".`,
      next: 'd-abcde'
    },
    {
      id: 'd-abcde',
      type: 'decision',
      stage: 'Prioritise',
      prompt: 'What are your immediate priorities?',
      options: [
        {
          label: `Sit her up, start titrated oxygen, get IV access and bloods with a gas and ECG, and attach monitoring`,
          rating: 'best',
          feedback: `Airway and breathing come first: she is hypoxic and tachypnoeic. Oxygen to a target of 94-98% (she has no known lung disease or CO<sub>2</sub> retention) is the immediate treatment, and the bloods, gas and ECG in the same minutes let you find the cause. What would change your plan: drowsiness, a rising PaCO<sub>2</sub>, or failing to reach target on a reservoir mask, which would prompt immediate senior and critical care input.`,
          next: 'findings'
        },
        {
          label: `Give oxygen and send her for an urgent chest X-ray before taking any bloods`,
          rating: 'good',
          feedback: `Oxygen is right and a chest film will be needed. But the bloods and gas take two minutes at the bedside and need to be in the lab queue now; delaying them for the X-ray costs time in a patient with kidney injury and a falling haemoglobin.`,
          next: 'findings'
        },
        {
          label: `Take a full history and examine her carefully before changing anything`,
          rating: 'poor',
          feedback: `A thorough assessment matters, but not before treating a hypoxic patient. ABCDE means treating life-threatening problems as you find them; the history will be better once she is not struggling to speak.`,
          next: 'cons-slow-o2'
        },
        {
          label: `Give a 1 litre crystalloid bolus for her tachycardia and acute kidney injury`,
          rating: 'unsafe',
          feedback: `This applies a "sepsis plus AKI" reflex to a patient who is hypoxic with a high blood pressure and probable lung involvement. In a patient with alveolar shadowing, a large fluid bolus can worsen oxygenation. If she were clearly hypovolaemic or hypotensive you would give fluid in small, reassessed aliquots, but she is neither.`,
          next: 'cons-fluid'
        }
      ],
      reasoning: `The triage label, "pneumonia with AKI", is one possible story, and a label like that tempts you to run a protocol. But before any diagnosis she needs her hypoxia treated and her observations watched. A high blood pressure, haemoptysis and a low haemoglobin are not typical of sepsis-induced AKI, which should make you wary of reflex fluids. Treat the danger first, get the tests in, and keep the label provisional.`
    },
    {
      id: 'cons-slow-o2',
      type: 'presentation',
      label: 'Five minutes later',
      tone: 'consequence',
      text: `Mid-sentence, Mrs Pritchard slumps back and her SpO<sub>2</sub> drifts to 85%. The nurse, already holding a mask, says quietly, <em>"Can we put this on now?"</em> You do. Her saturations climb on a reservoir mask and she can speak again. The history can wait another minute.`,
      next: 'findings'
    },
    {
      id: 'cons-fluid',
      type: 'presentation',
      label: 'Twenty minutes later',
      tone: 'danger',
      text: `Half a litre in, Mrs Pritchard is more breathless and her SpO<sub>2</sub> has fallen to 84%. Crackles now reach her mid-zones. The nurse stops the infusion and fetches a reservoir mask, which brings her saturations back up. You have given fluid to a patient who was not short of it, and made her gas exchange worse.`,
      next: 'findings'
    },
    {
      id: 'findings',
      type: 'presentation',
      label: 'History, examination and first results',
      text: `Oxygen at 15 L/min via a reservoir mask brings her <strong>SpO<sub>2</sub> to 94%</strong>, respiratory rate 26. Dai fills in the history:<br>
<ul>
<li>Three months of "feeling off", aching muscles and joints, and a 4 kg weight loss. She puts it down to the menopause "even though that was twenty years ago".</li>
<li>Ten days of dry cough, then <strong>blood-streaked sputum</strong> for four days (a teaspoon at a time). Sharp, pleuritic chest pain on the right.</li>
<li><strong>Tea-coloured urine</strong> for about two weeks, and she has passed little urine today.</li>
<li>Past history: hypertension (ramipril), type 2 diabetes (metformin), raised cholesterol (atorvastatin). Ex-smoker, stopped 20 years ago. No leg swelling or calf pain, no recent travel or surgery. No hydralazine, propylthiouracil or recreational drugs.</li>
<li>Took <strong>ibuprofen 400 mg</strong> three times a day for five days, plus amoxicillin.</li>
</ul>
<strong>Examination:</strong> pale, bilateral crackles to the mid-zones with no bronchial breathing, JVP not raised, no peripheral oedema, no murmur. A <strong>non-blanching purpuric rash over both shins</strong>, palpable. No nasal crusting or sinus symptoms. No synovitis.<br><br>
<table>
<tr><th>Test</th><th>Result</th><th>Eight months ago</th></tr>
<tr><td>Haemoglobin</td><td><strong>82 g/L</strong></td><td>131 g/L</td></tr>
<tr><td>WCC / neutrophils</td><td>14.1 / 11.5 ×10⁹/L</td><td>6.8 / 4.0</td></tr>
<tr><td>Platelets</td><td>412 ×10⁹/L</td><td>288</td></tr>
<tr><td>CRP</td><td>126 mg/L</td><td>3 mg/L</td></tr>
<tr><td>Creatinine</td><td><strong>438 µmol/L</strong></td><td>72 µmol/L</td></tr>
<tr><td>Urea / K<sup>+</sup> / Na<sup>+</sup></td><td>29.0 / 5.6 / 133 mmol/L</td><td>normal</td></tr>
<tr><td>Venous gas</td><td colspan="2">pH 7.30, bicarbonate 16 mmol/L, lactate 2.1 mmol/L, glucose 9.4 mmol/L</td></tr>
</table><br>
<strong>ECG:</strong> sinus tachycardia, no peaked T waves. <strong>Chest X-ray:</strong> bilateral patchy airspace shadowing in the perihilar and mid-zones, sparing the apices and periphery; no effusion; normal heart size.`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: `Haemoptysis, hypoxia and acute kidney injury. Write down your differential in order of how dangerous each possibility is, and for each one name a finding that would count against it.`,
      reveal: `<strong>Cannot miss: a pulmonary-renal syndrome.</strong> Two organs inflamed by one process. The three important causes are:
<ul>
<li><strong>ANCA-associated vasculitis</strong> (here MPO-ANCA / microscopic polyangiitis is most likely: older adult, constitutional symptoms, purpura, lung haemorrhage, glomerulonephritis).</li>
<li><strong>Anti-GBM disease</strong> (Goodpasture): a rarer cause of the same syndrome that needs different treatment, including plasma exchange. Smokers and young men are over-represented, but it also occurs in older adults.</li>
<li><strong>SLE</strong>, which is less likely at her age without other lupus features.</li>
</ul>
<strong>Also on the list:</strong>
<ul>
<li><strong>Pneumonia with sepsis-related AKI</strong> (the triage label). Infection and vasculitis can coexist, so do not drop it.</li>
<li><strong>Pulmonary oedema or cardiorenal syndrome:</strong> against it are the normal heart size, raised blood pressure without overload, and no oedema.</li>
<li><strong>Pulmonary embolism</strong> (haemoptysis, pleuritic pain): possible, but it does not explain the AKI, anaemia and rash.</li>
<li><strong>Drug-related AKI</strong> (ibuprofen plus ramipril, "double whammy") contributing, rather than explaining everything.</li>
</ul>
<strong>Features favouring a pulmonary-renal syndrome:</strong> a falling haemoglobin with haemoptysis (bleeding into the lung), tea-coloured urine, a rash, bilateral airspace shadowing that does not fit lobar pneumonia, and renal failure that does not match a short illness.`,
      next: 'd-interpret'
    },
    {
      id: 'd-interpret',
      type: 'decision',
      stage: 'Differential',
      prompt: 'Which finding does most to move you away from pneumonia with sepsis-related AKI?',
      options: [
        {
          label: `A haemoglobin falling from 131 to 82 with haemoptysis, tea-coloured urine and a palpable rash`,
          rating: 'best',
          feedback: `Pneumonia and sepsis do not usually cause a fall in haemoglobin like this, and bleeding into the lung, blood in the urine and a vasculitic rash together point to small-vessel inflammation affecting lung, kidney and skin. Taken together they are far more discriminating than any single result. What would change your mind: fever with a clear lobar consolidation, a murmur, or a negative urine for blood.`,
          next: 'd-test'
        },
        {
          label: `Bilateral airspace shadowing on the chest film rather than a single area of consolidation`,
          rating: 'good',
          feedback: `This is a useful clue because it makes simple lobar pneumonia less likely. But bilateral shadowing also fits atypical pneumonia, pulmonary oedema and ARDS, so it narrows less than the combination of anaemia, urine and rash.`,
          next: 'd-test'
        },
        {
          label: `A CRP of 126 and a white count of 14, which show this is sepsis from a chest infection`,
          rating: 'poor',
          feedback: `Inflammatory markers are raised in both sepsis and active vasculitis, so they cannot separate them. Treating the test result rather than the whole patient keeps you on the triage label.`,
          next: 'cons-interpret'
        },
        {
          label: `A potassium of 5.6 and a low bicarbonate, which fit dehydration from poor oral intake`,
          rating: 'poor',
          feedback: `These are consequences of AKI, not clues to its cause. Dehydration does not explain tea-coloured urine, haemoptysis or anaemia, and this is anchoring on the simplest story.`,
          next: 'cons-interpret'
        }
      ],
      reasoning: `No single result separates these diagnoses, so I look for findings that cluster: bleeding in the lung, bleeding in the kidney, a drop in haemoglobin I cannot otherwise explain, and a rash. Sepsis can cause AKI, but not an unexplained haemoglobin fall or a palpable purpuric rash. Haemoptysis with AKI, in anyone, should prompt the question "is this pulmonary-renal?" because the cost of missing it is permanent kidney failure and death.`
    },
    {
      id: 'cons-interpret',
      type: 'presentation',
      label: 'A nurse interrupts',
      tone: 'consequence',
      text: `As you begin writing "CAP, AKI" in the notes, the staff nurse comes back with a urine pot and a tea-coloured sample. <em>"Does that look right for sepsis?"</em> It does not. Putting the urine, the haemoglobin and the rash side by side, you realise you were explaining each result away separately rather than looking for one process that explains all of them.`,
      next: 'd-test'
    },
    {
      id: 'd-test',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'You suspect a pulmonary-renal syndrome. Which tests do you send now?',
      options: [
        {
          label: `Urgent ANCA and anti-GBM together, urine dip and microscopy, clotting and a group and save sample`,
          rating: 'best',
          feedback: `ANCA vasculitis and anti-GBM disease look the same at the bedside but are managed differently, and either could be the answer, so both antibodies are sent at once and flagged urgent. The urine tests confirm glomerular bleeding, and the clotting and group and save prepare for a bleeding lung, line insertion or biopsy. What would change your plan: a negative result for both would make you think about SLE, infection or other causes.`,
          next: 'tests-back'
        },
        {
          label: `ANCA, anti-GBM, ANA, dsDNA and complement together with a urine dip, but no clotting or group and save`,
          rating: 'good',
          feedback: `Adding a lupus screen is reasonable because SLE is on the differential. But it widens the panel beyond what is most likely and omits the clotting and group and save, which a patient with a falling haemoglobin and an imminent line or biopsy needs.`,
          next: 'tests-back'
        },
        {
          label: `Send the ANCA alone and add other antibody tests once it has reported`,
          rating: 'poor',
          feedback: `This is the commonest trap. Anti-GBM disease can look identical to ANCA vasculitis, and it needs plasma exchange and a different pace of treatment. An ANCA-only request leaves the specialists without the second answer for another day.`,
          next: 'cons-anca-alone'
        },
        {
          label: `CT pulmonary angiogram first, to exclude a pulmonary embolism before anything else`,
          rating: 'poor',
          feedback: `PE is on the differential, but it does not explain the AKI, anaemia or rash, and the pre-test probability is low. Contrast is a further renal insult for creatinine 438 µmol/L and the scan delays the tests that matter. If imaging is needed, a non-contrast CT chest is the more sensible first step.`,
          next: 'cons-ctpa'
        }
      ],
      reasoning: `The point of testing here is to separate the diagnoses that change what I do tonight. A haemoptysis with AKI has a short list: ANCA vasculitis, anti-GBM disease and SLE, and I want to know about the first two before the nephrologist calls back. Urine microscopy shows whether the kidney lesion is glomerular. I ask for clotting and a group and save because her haemoglobin is falling and she may need a line, a biopsy or blood. I accept that results take hours, which is why I do not wait for them before calling for help.`
    },
    {
      id: 'cons-anca-alone',
      type: 'presentation',
      label: 'The lab calls',
      tone: 'consequence',
      text: `At 23:30 the biomedical scientist rings: <em>"I've only got a request for ANCA. Do you want anti-GBM added? It'll be a different assay."</em> You add it, and the second request starts its own queue behind the ANCA. A few hours of useful information have gone, and you note that the registrar will be asking for both when they arrive.`,
      next: 'tests-back'
    },
    {
      id: 'cons-ctpa',
      type: 'presentation',
      label: 'After the scan',
      tone: 'consequence',
      text: `Ninety minutes later she is back from CT, more tired and breathless after lying flat. The scan shows <strong>no pulmonary emboli</strong> but extensive bilateral ground-glass change, consistent with alveolar haemorrhage or oedema. She has now had an iodinated contrast load on top of an acute kidney injury. The tests that mattered are only now being sent.`,
      next: 'tests-back'
    },
    {
      id: 'tests-back',
      type: 'presentation',
      label: 'First results',
      tone: 'results',
      text: `<table>
<tr><th>Test</th><th>Result</th></tr>
<tr><td>Urine dip</td><td><strong>Blood +++, protein +++</strong>, no leucocytes or nitrites</td></tr>
<tr><td>Urine microscopy (preliminary)</td><td>Many dysmorphic red cells, some red cell casts</td></tr>
<tr><td>Clotting</td><td>PT and APTT normal</td></tr>
<tr><td>Repeat haemoglobin / potassium</td><td><strong>79 g/L</strong> / 5.8 mmol/L (ECG unchanged)</td></tr>
<tr><td>ANCA and anti-GBM</td><td>Pending; the immunology lab will report urgently flagged samples by the morning</td></tr>
</table><br>
The nurse hands you the drug chart: <em>"She's had her evening ramipril and metformin. She says her chest hurts more when she breathes in, and could she have something for it?"</em>`,
      next: 'd-prescribe'
    },
    {
      id: 'd-prescribe',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'What do you prescribe or change on the drug chart?',
      options: [
        {
          label: `Stop ibuprofen, hold ramipril and metformin, follow the hyperkalaemia protocol, and prescribe paracetamol`,
          rating: 'best',
          feedback: `In AKI, nephrotoxic and renally risky drugs are stopped or held: NSAIDs and ACE inhibitors reduce renal perfusion and cause hyperkalaemia, and metformin risks lactic acidosis. A potassium of 5.8 with AKI needs treatment per protocol and monitoring. Paracetamol treats pleuritic pain without harming the kidney. What would change your plan: uncontrolled pain, for which you would ask for senior advice on a renally safe opioid.`,
          next: 'd-escalate'
        },
        {
          label: `Stop ibuprofen, hold metformin and give paracetamol; leave the potassium and ramipril for the morning review`,
          rating: 'good',
          feedback: `The NSAID, metformin and analgesia are handled safely. But ramipril adds to the hyperkalaemia and renal risk, and a rising potassium of 5.8 should be managed tonight rather than waiting for the morning. Hold what is harmful now.`,
          next: 'd-escalate'
        },
        {
          label: `Leave the drug chart for pharmacy and give no analgesia until she has been reviewed by a senior`,
          rating: 'poor',
          feedback: `Waiting for others to fix a drug chart you can review yourself leaves nephrotoxic drugs running overnight and untreated pain, which will limit her breathing. Prescribers own the drug chart.`,
          next: 'cons-pain'
        },
        {
          label: `Prescribe regular naproxen for the pleuritic pain and continue her usual medicines`,
          rating: 'unsafe',
          feedback: `An NSAID in a patient with creatinine 438 µmol/L and a potassium of 5.8, on an ACE inhibitor, is a classic way to turn a bad kidney injury into a worse one. Pleuritic pain is a reasonable thing to treat, but not with nephrotoxic drugs.`,
          next: 'cons-nsaid'
        }
      ],
      reasoning: `Whenever I see AKI I look at the drug chart straight away. The usual ones are NSAIDs, ACE inhibitors or ARBs, diuretics, metformin and aminoglycosides, and contrast is a consideration for any imaging. She has taken ibuprofen alongside ramipril, which probably contributed to the injury even though the main driver is glomerulonephritis. Infection has not been excluded, so an antibiotic for possible pneumonia is reasonable after cultures, chosen per local guideline and avoiding aminoglycosides. Pain control matters, because she cannot cough or breathe deeply if it hurts.`
    },
    {
      id: 'cons-pain',
      type: 'presentation',
      label: 'Forty minutes later',
      tone: 'consequence',
      text: `Mrs Pritchard is gasping with each breath, and her oxygen saturation falls to 91% despite the mask. The nurse finds the pain score at 9/10 and the drug chart still waiting. You write up paracetamol and hold the ramipril and metformin, but the night has been worse for her than it needed to be.`,
      next: 'd-escalate'
    },
    {
      id: 'cons-nsaid',
      type: 'presentation',
      label: 'Two hours later',
      tone: 'danger',
      text: `The nurse is at the desk. <em>"She's had one dose of the naproxen and the next urine bag is near empty. Potassium on the repeat is 6.3."</em> The ECG now shows tall tented T waves. You stop the NSAID and start the hyperkalaemia protocol, but you have raised her potassium and probably accelerated the kidney injury.`,
      next: 'd-escalate'
    },
    {
      id: 'd-escalate',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'She remains hypoxic on 15 L/min with a creatinine of 438 µmol/L and a falling haemoglobin. How do you escalate?',
      options: [
        {
          label: `Phone the renal registrar and critical care outreach now, giving an SBAR of a suspected pulmonary-renal syndrome`,
          rating: 'best',
          feedback: `She is hypoxic on maximal oxygen, has severe AKI and is probably bleeding into her lungs. Both critical care and renal teams need to know tonight because she may need organ support, dialysis and early immunosuppression. Naming "suspected pulmonary-renal syndrome" helps them prioritise. What would change your plan: if the registrar advises ICU or HDU transfer directly, you follow that.`,
          next: 'specialist'
        },
        {
          label: `Refer to the medical registrar to review tonight and ask them to involve the renal and intensive care teams`,
          rating: 'good',
          feedback: `Many hospitals work this way and it is a safe route to the right place. It introduces an extra step when you already know which teams are needed, so calling them directly saves time.`,
          next: 'specialist'
        },
        {
          label: `Admit her under general medicine and ask for a renal opinion on tomorrow's ward-round list`,
          rating: 'poor',
          feedback: `This under-calls the urgency. Pulmonary-renal syndromes can deteriorate in hours, and overnight is when she is least observed. A routine next-day review treats an emergency as an inpatient task.`,
          next: 'cons-delay'
        },
        {
          label: `Hold off referring until the ANCA and anti-GBM results are back, as the diagnosis is not yet certain`,
          rating: 'unsafe',
          feedback: `The diagnosis is uncertain, but the emergency is not. Waiting for the antibody results means hours of untreated glomerulonephritis and lung bleeding, with a real risk of irreversible kidney failure and death. Refer on the clinical picture.`,
          next: 'cons-delay'
        }
      ],
      reasoning: `This patient needs a senior decision-maker tonight, not tomorrow. The pre-test probability of a pulmonary-renal syndrome is already high on the clinical picture alone, and treatment of crescentic glomerulonephritis is time-critical: the longer inflammation continues, the more of the kidney scars, and the lower the chance of coming off dialysis. I escalate on the clinical picture and do not wait for the antibodies.`
    },
    {
      id: 'cons-delay',
      type: 'presentation',
      label: 'At 03:10',
      tone: 'danger',
      text: `Mrs Pritchard's saturations are 85% on the reservoir mask, her respiratory rate is 36, and she has coughed up half a cupful of blood. Haemoglobin is 71 g/L and her urine output over the last four hours is under 10 mL an hour. The outreach team is called anyway, and the renal registrar arrives after 04:00: <em>"Why didn't someone call me at ten?"</em><br><br>
She is moved to critical care, now sicker than she needed to be.`,
      next: 'specialist'
    },
    {
      id: 'specialist',
      type: 'presentation',
      label: 'Overnight, then the next morning',
      text: `Once critical care and renal teams are involved, they assess her promptly. She is moved to the high dependency unit and a temporary dialysis catheter is placed because of her creatinine, potassium and acidosis. After specialist discussion she is given high-dose intravenous methylprednisolone before the antibody results are back, alongside investigations for infection, and the renal team plan a kidney biopsy when safe. Further contrast is avoided and she is transfused as her haemoglobin falls.<br><br>
At 08:30 the immunology lab telephones:<br>
<ul>
<li><strong>MPO-ANCA strongly positive</strong>; PR3-ANCA negative</li>
<li><strong>Anti-GBM antibody negative</strong></li>
</ul>
A trainee on the ward round says, <em>"We only needed the ANCA, didn't we?"</em>`,
      next: 'd-result'
    },
    {
      id: 'd-result',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'What do you say about sending both antibodies?',
      options: [
        {
          label: `Both were worth sending together: anti-GBM disease would have changed treatment, and the negative result now lets us rely on the ANCA`,
          rating: 'best',
          feedback: `Anti-GBM disease and ANCA vasculitis cause the same syndrome but need different treatment and have different outcomes, so you need both answers together. The two antibodies can occasionally coexist (double positivity), which is another reason not to rely on one alone. What would change your mind: a positive anti-GBM would alter treatment urgently, including plasma exchange.`,
          next: 'ward-scene'
        },
        {
          label: `Sending both was right, but a kidney biopsy is still needed before anyone can call it MPA`,
          rating: 'good',
          feedback: `Biopsy does help to confirm the diagnosis and gauge how much kidney scarring there is. But it is not the point of the question, and treatment has rightly begun on the clinical picture and antibodies without waiting for tissue.`,
          next: 'ward-scene'
        },
        {
          label: `ANCA alone would have been enough, as a positive ANCA excludes anti-GBM disease`,
          rating: 'poor',
          feedback: `A positive ANCA does not exclude anti-GBM disease; some patients are positive for both, and they behave more like anti-GBM disease in the kidney. Relying on one antibody would have missed that possibility.`,
          next: 'cons-result'
        },
        {
          label: `ANCA can be positive in older adults without disease, so we should wait for biopsy before immunosuppression`,
          rating: 'unsafe',
          feedback: `With alveolar haemorrhage and rapidly progressive glomerulonephritis, treatment is started on the clinical picture and not held for tissue. Waiting for biopsy risks irreversible loss of kidney function and further bleeding.`,
          next: 'cons-result'
        }
      ],
      reasoning: `A clinician's job with a result like this is to ask "does it fit, and what else would have fit?". MPO-ANCA positive with pulmonary haemorrhage and glomerulonephritis in an older adult is a coherent picture of microscopic polyangiitis. The negative anti-GBM matters because that is the diagnosis that would have changed what the team did tonight. The biopsy is useful for confirmation and prognosis, but treatment was started before it, and rightly so.`
    },
    {
      id: 'cons-result',
      type: 'presentation',
      label: 'On the ward round',
      tone: 'consequence',
      text: `The renal registrar answers without heat: <em>"Double-positive patients exist, and in them the kidney tends to behave like anti-GBM disease. We don't wait for biopsy when someone is bleeding into their lungs with a creatinine like this, which is why she had steroids last night."</em> You write both points on your list.`,
      next: 'ward-scene'
    },
    {
      id: 'ward-scene',
      type: 'decision',
      stage: 'Communicate',
      prompt: `Dai and their daughter Rhian, a primary school teacher, are in the relatives' room. Dai says: <em>"They told us it was a chest infection last night. Now she's on the high dependency unit and they say her kidneys have failed. Is she going to die? Will she ever run again?"</em> What do you say?`,
      options: [
        {
          label: `Say she is very seriously ill with an immune condition inflaming her lungs and kidneys; it is treatable; the next few days matter; offer regular updates`,
          rating: 'best',
          feedback: `Honest about the seriousness without using the word "dying" as a surprise, plain about the cause and the treatment, and clear about what is uncertain (her kidneys, her recovery). Promising regular updates and a named contact gives the family something to hold on to. Their question about running again acknowledges what matters to her, so it is worth saying you will come back to it.`,
          next: 'conclusion'
        },
        {
          label: `Explain the diagnosis of MPA using the antibody names and a detailed account of dialysis, steroids and plasma exchange options`,
          rating: 'good',
          feedback: `The information is accurate and honest, but at this stage the family are frightened and exhausted and will not retain it. Give two or three headline messages and offer more detail when they are ready.`,
          next: 'conclusion'
        },
        {
          label: `Reassure them that it was probably a chest infection that went to her kidneys and that she should recover with antibiotics`,
          rating: 'poor',
          feedback: `This repeats the earlier wrong label and gives false reassurance. The seriousness is real, and trust will be lost when the family realise it was not communicated.`,
          next: 'cons-comm'
        },
        {
          label: `Say it is too early to comment and suggest they speak to the consultant on tomorrow's round`,
          rating: 'poor',
          feedback: `Deferring the conversation completely leaves a frightened family without information at the worst moment. You cannot give a prognosis, but you can say how sick she is, what is being done and when they will hear more.`,
          next: 'cons-comm'
        }
      ],
      reasoning: `Families in critical care usually want three things: the truth, a plan and someone to ask. Name the seriousness plainly, say what is being done in words they can repeat, and say what is not yet known. I do not promise recovery, and I do not use the word "infection" if it is not the cause. If the question about running again comes up, I take it as a sign of who she is, and I say we will hope to aim for that once the worst has passed.`
    },
    {
      id: 'cons-comm',
      type: 'presentation',
      label: 'That afternoon',
      tone: 'consequence',
      text: `Rhian finds you in the corridor. <em>"One doctor said infection, another says her kidneys have failed because of something autoimmune, and nobody will say how ill she is. Can someone tell us the same thing?"</em> The consultant sits down with the family and goes through it from the beginning. It takes much longer than a straight answer would have done.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: microscopic polyangiitis (MPO-ANCA vasculitis) with alveolar haemorrhage and rapidly progressive (crescentic) glomerulonephritis.</strong><br><br>
Mrs Pritchard's kidney biopsy showed pauci-immune crescentic glomerulonephritis. Her lung bleeding settled over several days and her oxygen requirement fell. She remained on dialysis for a period while receiving immunosuppression; the renal team are following her closely.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>A hypoxic patient needs oxygen, access and monitoring before a diagnosis; reflex fluids are dangerous with alveolar shadowing.</li>
<li>"Pneumonia with AKI" was a triage label. The falling haemoglobin, haemoptysis, tea-coloured urine, rash and bilateral shadowing pointed to a pulmonary-renal syndrome.</li>
<li>ANCA and anti-GBM were sent together, because anti-GBM disease looks identical and is treated differently.</li>
<li>The drug chart was reviewed straight away: NSAIDs and other nephrotoxins stopped, ACE inhibitor and metformin held, potassium treated.</li>
<li>Referral to renal and critical care was made on the clinical picture, not held for the antibody results.</li>
<li>The family were told how serious the illness was, in plain language, with a plan for updates.</li>
</ol>
<strong>How you'd explain it to the patient:</strong> "Your immune system has become overactive and is inflaming the small blood vessels in your lungs and kidneys. That is why you have been coughing blood and why your kidneys have stopped working properly. It is serious, but there are treatments that calm it down, and we have started them. We are using a kidney machine to support you in the meantime. It will be a long road, and we will be honest with you about how it is going."<br><br>
<strong>Safety-netting (for later discharge):</strong> report any coughing up of blood, breathlessness, fever, reduced or dark urine, new rash or numbness at once, and attend every blood and kidney check. Because treatment suppresses immunity, any infection needs a same-day review.`,
      keyLearning: [
        'Treat hypoxia first; do not give reflex fluid boluses to a breathless patient with bilateral lung shadowing',
        'Haemoptysis with acute kidney injury should always prompt the question "pulmonary-renal syndrome?"',
        'A falling haemoglobin, haemoptysis, active urine and rash do more to point to vasculitis than any single result',
        'Send ANCA and anti-GBM together and urgently: they look the same and are treated differently',
        'In AKI, review the drug chart at once: avoid NSAIDs and aminoglycosides, and hold ACE inhibitors and metformin',
        'Escalate on the clinical picture; hours of delay can cost kidney function and are not recovered',
        'Be honest with the family about how ill the patient is, and say what is being done and when they will hear more'
      ],
      relatedTests: ['ANCA (MPO and PR3)', 'Anti-GBM antibody', 'Urine dipstick and microscopy', 'U&E and venous gas', 'FBC and group and save', 'Kidney biopsy', 'Chest X-ray'],
      goingFurther: `<strong>MPA compared with GPA.</strong> Microscopic polyangiitis is typically MPO-ANCA (pANCA) positive, affects the kidney and lung, and has no granulomatous disease or destructive upper airway involvement. Granulomatosis with polyangiitis is typically PR3-ANCA (cANCA) positive, often with ENT and lung nodules, and relapses more often. The distinction matters for relapse risk and long-term planning, but both can cause pulmonary-renal syndrome.<br><br>
<strong>Anti-GBM disease and double positivity.</strong> Anti-GBM disease is rarer, can cause rapidly progressive glomerulonephritis with lung haemorrhage, and is treated urgently with plasma exchange plus immunosuppression. A minority of patients with anti-GBM disease are also ANCA-positive (usually MPO), and a minority of ANCA vasculitis patients have anti-GBM. These "double-positive" patients are typically treated like anti-GBM disease early on, and need vasculitis relapse follow-up thereafter. Renal prognosis in anti-GBM disease is closely linked to how severe the injury is at the start of treatment.<br><br>
<strong>Plasma exchange (PLEX) and PEXIVAS.</strong> For years PLEX was added to induction in severe AAV, particularly with severe renal failure or alveolar haemorrhage. The large PEXIVAS trial found no overall benefit of adding PLEX on the combined outcome of death or end-stage kidney disease, and also showed that a reduced-dose steroid regimen was as effective with fewer infections. Subsequent guidelines differ on whether PLEX should be considered in selected patients with severe kidney failure or life-threatening lung haemorrhage; it remains standard in anti-GBM disease. Decisions are made by specialists.<br><br>
<strong>Induction and maintenance.</strong> Induction usually combines glucocorticoids with rituximab or cyclophosphamide; maintenance uses rituximab or azathioprine for a prolonged period. Prophylaxis against <em>Pneumocystis jirovecii</em>, bone protection and monitoring for infection are part of care.`
    }
  ]
};
