/* joints-case-1: The Hairdresser's Hands */

export default {
  id: 'joints-case-1',
  title: 'The Hairdresser’s Hands',
  summary: '43-year-old hairdresser with ten weeks of stiff, swollen hands and sore feet',
  setting: 'GP surgery',
  difficulty: 'beginner',
  curriculum: ['RH-RA', 'PR-POLY', 'CD-SMALL-JOINT', 'LO2', 'IX-SEROLOGY', 'TX-INFLAM', 'TX-MEDS', 'REF-NG100'],
  objectives: [
    'Separate inflammatory from mechanical joint symptoms using the most discriminating history questions',
    'Examine the hands and feet for synovitis, using the squeeze tests, and contrast it with nodal osteoarthritis',
    'Explain why a negative rheumatoid factor and a near-normal CRP do not remove the need for urgent referral',
    'Prescribe safely while waiting for the specialist, including whether to give steroids',
    'Counsel on methotrexate, with the weekly dose as the key safety message'
  ],
  nodes: [
    {
      id: 'start',
      type: 'presentation',
      label: 'GP surgery, 10:20',
      text: `<strong>Mrs Michelle Costello, 43, hairdresser</strong><br><br>
She rents a chair in a salon and is self-employed, so she is paid only for the clients she sees. She lives with her partner Dean, who drives a delivery van, and her 11-year-old daughter. She smokes about 15 cigarettes a day and drinks a few units of alcohol at weekends.<br><br>
She has come because her hands are &ldquo;not right&rdquo;. She has missed two clients this month because she could not close her fingers round the scissors, and she is worried she will lose her regulars. She says she has taken ibuprofen from the chemist &ldquo;on and off&rdquo; and it takes the edge off.<br><br>
She tells you it started about 10 weeks ago. You have 10 minutes. Your supervising GP is in the next room.`,
      next: 'hx-q'
    },
    {
      id: 'hx-q',
      type: 'decision',
      stage: 'History',
      prompt: 'Which questions will best tell you whether this is inflammatory or mechanical?',
      options: [
        {
          label: 'How long the stiffness lasts, whether movement eases it, if joints visibly swell and whether her feet are sore',
          rating: 'best',
          feedback: `These four questions separate the two patterns quickly. Inflammatory joint disease causes morning stiffness lasting an hour or more, which eases with use, visible swelling (not just pain), and often sore feet because the small joints of the toes are involved too. Mechanical pain is the reverse: short-lived stiffness, worse with use and better with rest. What would change your mind is stiffness that lasts only minutes and gets worse by the end of a working day.`,
          next: 'hx-findings'
        },
        {
          label: 'Her pain score, which hand she uses, what makes it worse and exactly which salon tasks she can no longer do',
          rating: 'good',
          feedback: `Function and work matter a great deal, and you will want to know all of this for the plan. But a pain score and a list of difficult tasks do not tell you whether the cause is inflammatory. Ask the discriminating questions first and then build the functional picture around the answer.`,
          next: 'hx-findings'
        },
        {
          label: 'Whether she has injured her hands, how many hours she is cutting hair and whether she has tingling at night',
          rating: 'poor',
          feedback: `Repetitive strain and carpal tunnel syndrome are common in hairdressers, so this is a reasonable thought. The error is anchoring on the job as the explanation before testing it. Symptoms in both hands for ten weeks that include swelling need an inflammatory explanation ruled out first.`,
          next: 'c-hx'
        },
        {
          label: 'A connective tissue checklist first: rashes, mouth ulcers, Raynaud&rsquo;s, dry eyes and a family history of lupus',
          rating: 'poor',
          feedback: `These are worth asking at some point, but starting there is searching for a rare diagnosis before you have characterised the joint pattern. The pattern of stiffness, swelling and joint distribution is the most informative part of the history, and it tells you which other questions to ask.`,
          next: 'c-hx'
        }
      ],
      reasoning: `At this point my differential is wide: inflammatory arthritis, a viral illness, osteoarthritis, a repetitive strain problem. A few cheap questions move those probabilities more than anything else. A stiffness lasting over an hour that eases with use pushes me strongly toward inflammation. Visible swelling pushes me further. Sore feet in someone with sore hands makes a systemic inflammatory arthritis more likely, because I would not expect a hairdresser&rsquo;s repetitive strain to affect the toes. I would still ask about work, function and smoking, but those shape the management more than the diagnosis.`
    },
    {
      id: 'c-hx',
      type: 'presentation',
      tone: 'consequence',
      label: 'A prompt from next door',
      text: `Your supervisor looks in and asks three things: how long is the stiffness in the morning, what happens to it when she gets going, and does she get any swelling or sore toes? You go back to Mrs Costello with these questions, and the answers change how you see her presentation.`,
      next: 'hx-findings'
    },
    {
      id: 'hx-findings',
      type: 'presentation',
      label: 'History',
      text: `<ul>
<li>Stiffness in both hands every morning for about <strong>an hour and a half</strong>. It eases as she gets going but returns after she has been sitting.</li>
<li>Her fingers look &ldquo;puffy&rdquo; and her rings no longer fit. The swelling is in the knuckles and the middle finger joints on both sides.</li>
<li>Her feet have felt like &ldquo;walking on pebbles&rdquo; first thing in the morning for about six weeks.</li>
<li>Extremely tired. She falls asleep on the sofa by 8 pm, which is not like her.</li>
<li>No back pain, no psoriasis that she knows of, no eye redness, no diarrhoea or urethral symptoms. No sore throat or fever. No mouth ulcers or Raynaud&rsquo;s.</li>
<li>Her daughter had &ldquo;slapped cheeks&rdquo; at school about three months ago, and Mrs Costello had a mild cold-like illness at that time.</li>
<li>No family history of inflammatory arthritis. Her mother has knee osteoarthritis.</li>
<li>Takes ibuprofen 400 mg when needed, about 3 to 4 times a week. No stomach problems, no asthma, no kidney disease. Not on any regular medicines.</li>
</ul>
She says: &ldquo;Is it just my age? Everyone at the salon says it&rsquo;s the hairspray and the washing.&rdquo;`,
      next: 'exam-q'
    },
    {
      id: 'exam-q',
      type: 'decision',
      stage: 'Examination',
      prompt: 'How do you examine her?',
      options: [
        {
          label: 'GALS screen, then hands and wrists with look, feel and move, with MCP and MTP squeeze tests',
          rating: 'best',
          feedback: `GALS gives you the whole picture of how she moves and where there is pain. Then looking at the hands for swelling, feeling the joints for warm, boggy tenderness and squeezing across the MCPs and MTPs picks out synovitis in joints that can look normal. The MTP squeeze is often forgotten, but the feet are commonly involved early. What would change your mind is bony, hard swelling at the DIPs with no soft tissue swelling elsewhere.`,
          next: 'exam-findings'
        },
        {
          label: 'Look, feel and move in both hands and wrists, assessing each joint for tenderness and swelling',
          rating: 'good',
          feedback: `This will find the hand synovitis, and it is where her symptoms are. But it ignores the feet, which she has told you about and which are often the first joints involved. A foot squeeze takes five seconds and adds to the number of joints you can count.`,
          next: 'exam-findings'
        },
        {
          label: 'Test grip strength, then Phalen&rsquo;s and Tinel&rsquo;s tests, since she uses scissors and a hairdryer all day',
          rating: 'poor',
          feedback: `These are sensible tests for carpal tunnel syndrome, but they do not look for synovitis. The history already tells you the problem is swelling and stiffness in several small joints on both sides, which is not what carpal tunnel looks like. This is search satisficing: finding the first plausible occupational diagnosis and stopping.`,
          next: 'c-exam'
        },
        {
          label: 'GALS and a general check, then leave the detailed joint examination to the rheumatologist',
          rating: 'poor',
          feedback: `GALS is the right opening, but you are the person deciding whether she needs referral and how urgently. That decision depends on you finding objective synovitis. Without a hands-on joint examination you cannot say whether there is persistent swelling, which is the key finding.`,
          next: 'c-exam'
        }
      ],
      reasoning: `The examination is where I turn a story into a finding. Synovitis feels soft and boggy rather than hard, and is tender when squeezed. I look first, then feel, comparing the two sides. The squeeze across the MCPs and the MTPs is quick, tells me about joints I cannot easily palpate, and a pained flinch there is a useful sign. I would ask her consent, explain what I am doing and let her tell me when it hurts. I also look for the things that point away from rheumatoid arthritis, such as hard bony nodes at the DIPs and PIPs, psoriatic nail changes and skin plaques.`
    },
    {
      id: 'c-exam',
      type: 'presentation',
      tone: 'consequence',
      label: 'Back to the couch',
      text: `Your supervisor reviews the plan and asks one question: &ldquo;Did you squeeze across her knuckles and toes?&rdquo; You hadn&rsquo;t. Mrs Costello puts her hands out on the couch again, apologetic, and you do the examination you should have done first.`,
      next: 'exam-findings'
    },
    {
      id: 'exam-findings',
      type: 'presentation',
      label: 'Examination',
      text: `Temperature 36.8&deg;C, blood pressure 126/78, pulse 78, BMI 27. GALS: gait normal. She cannot make a full fist with either hand, and she winces on squeezing the fingers together.<br><br>
<strong>Hands:</strong>
<ul>
<li>Soft, boggy, tender swelling over MCPs 2 to 4 on the right and MCPs 2 to 3 on the left. Fusiform swelling of the PIPs on the second and third fingers of the right hand.</li>
<li><strong>MCP squeeze test positive</strong> on both sides.</li>
<li>Both wrists are tender and swollen on the dorsal side, with reduced extension.</li>
<li>DIPs look and feel normal. <strong>No Heberden&rsquo;s or Bouchard&rsquo;s nodes.</strong> No nail pitting, no skin plaques, no rheumatoid nodules.</li>
</ul>
<strong>Feet:</strong> <strong>MTP squeeze test positive</strong> on both sides at the 2nd to 4th joints. No deformity. Gait is slightly cautious.<br><br>
<strong>Elsewhere:</strong> knees, elbows and shoulders are normal. Chest and heart are normal. No rash, no lymph nodes, no eye redness.`,
      next: 'ddx-reflect'
    },
    {
      id: 'ddx-reflect',
      type: 'reflect',
      label: 'Pause and think',
      prompt: 'List your differential for a symmetrical small-joint polyarthritis that has lasted ten weeks. Which features of her story point towards or away from each?',
      reveal: `<strong>A prioritised differential:</strong>
<ol>
<li><strong>Rheumatoid arthritis (RA)</strong>: symmetrical MCP, PIP, wrist and MTP synovitis, morning stiffness over an hour, fatigue, DIPs spared, smoker. The most likely, and the one where delay costs most because damage starts early.</li>
<li><strong>Viral arthritis</strong>, particularly <strong>parvovirus B19</strong>: her daughter had slapped cheeks, and this can mimic RA closely. But viral arthritis usually settles within about six weeks, and ten weeks of persistent synovitis should not be put down to a virus.</li>
<li><strong>Psoriatic arthritis</strong>: can look like RA in the hands. Check the nails, scalp, natal cleft and family history. DIP and dactylitis would favour it. None here.</li>
<li><strong>Systemic lupus erythematosus</strong>: a non-erosive arthritis with rash, mouth ulcers, Raynaud&rsquo;s or cytopenias. None here.</li>
<li><strong>Nodal osteoarthritis</strong>: Heberden&rsquo;s (DIP) and Bouchard&rsquo;s (PIP) nodes are hard and bony. It usually affects the DIPs and thumb base, and spares the MCPs and wrists. Stiffness is brief.</li>
<li><strong>Crystal arthritis</strong> (gout, CPPD): can be polyarticular but is usually episodic and asymmetrical.</li>
<li><strong>Haemochromatosis</strong>: classically the 2nd and 3rd MCPs, with bony rather than boggy swelling.</li>
<li><strong>Hypothyroidism</strong>: arthralgia, stiffness and fatigue, but little true synovitis. A TSH is cheap.</li>
</ol>
The decision that matters is not the exact label. <strong>Persistent synovitis in the small joints of the hands and feet for more than a few weeks is an inflammatory arthritis until a specialist says otherwise</strong>, and the most likely cause is RA.`,
      next: 'ix-q'
    },
    {
      id: 'ix-q',
      type: 'decision',
      stage: 'Investigate',
      prompt: 'Which blood tests do you request today?',
      options: [
        {
          label: 'FBC, CRP, ESR, urea and creatinine, liver profile and rheumatoid factor',
          rating: 'best',
          feedback: `This set answers the questions that matter. FBC and inflammatory markers describe the inflammation. Renal and liver function must be known before any NSAID or DMARD. Rheumatoid factor is the recommended first serological test for suspected RA. What would change your mind is a pattern that needs a targeted test, such as a TSH for hypothyroidism or a parvovirus IgM if the history was recent.`,
          next: 'results'
        },
        {
          label: 'Rheumatoid factor and anti-CCP only, to get to a quick answer on the diagnosis',
          rating: 'good',
          feedback: `Serology is the headline test, but without an FBC, CRP, renal function and liver profile you do not have baseline results for the next decisions: whether it is safe to give an NSAID, and what the rheumatology team will want. Serology on its own also gives a false sense that you have settled the diagnosis.`,
          next: 'results'
        },
        {
          label: 'ANA, ENA, anti-dsDNA, complement, HLA-B27, rheumatoid factor and anti-CCP, as an autoimmune screen',
          rating: 'poor',
          feedback: `An indiscriminate autoimmune panel is a classic error. A low-titre ANA is common in healthy people and in RA, and will add a distracting result with no benefit. HLA-B27 does not help with a peripheral symmetrical hand and foot pattern. Choose tests that answer a question you are actually asking.`,
          next: 'c-ix'
        },
        {
          label: 'A CRP only, because if it is normal then there is no inflammatory arthritis to worry about',
          rating: 'poor',
          feedback: `A normal CRP does not exclude early inflammatory arthritis. Plenty of patients with active synovitis have a normal or only mildly raised CRP and ESR, especially early on. This is false reassurance from a single normal test, and it leaves you with nothing to work with if it is indeed normal.`,
          next: 'c-ix'
        }
      ],
      reasoning: `My pre-test probability of inflammatory arthritis is already high from the history and examination. That means no single blood test result should stop me acting. So I choose tests for what they add: FBC (anaemia of chronic disease, platelets, baseline for DMARDs), CRP and ESR (a baseline, and useful for monitoring later), renal and liver function (needed before any NSAID or methotrexate), and rheumatoid factor because it is the standard first serological test. If RF is negative, anti-CCP is the next test to add, because it is more specific.`
    },
    {
      id: 'c-ix',
      type: 'presentation',
      tone: 'consequence',
      label: 'A narrow request',
      text: `Your supervisor looks at the request form. &ldquo;What are you going to do with an ANA of 1:80 when you get it?&rdquo; is the question for one version, and &ldquo;If the CRP is normal, are you going to ignore her swollen knuckles?&rdquo; for the other. You rewrite the request with the baseline tests that you will need whatever the result shows.`,
      next: 'results'
    },
    {
      id: 'results',
      type: 'presentation',
      tone: 'results',
      label: 'Results, two days later',
      text: `<table>
<tr><th>Test</th><th>Result</th><th>Reference</th></tr>
<tr><td>Haemoglobin</td><td>126 g/L</td><td>115&ndash;165</td></tr>
<tr><td>White cell count</td><td>8.2 &times; 10&#8313;/L</td><td>4&ndash;11</td></tr>
<tr><td>Platelets</td><td>412 &times; 10&#8313;/L</td><td>150&ndash;400</td></tr>
<tr><td>CRP</td><td>14 mg/L</td><td>&lt;5</td></tr>
<tr><td>ESR</td><td>28 mm/h</td><td>&lt;20</td></tr>
<tr><td>Creatinine / eGFR</td><td>62 &micro;mol/L / &gt;90</td><td>45&ndash;84</td></tr>
<tr><td>ALT</td><td>21 U/L</td><td>&lt;40</td></tr>
<tr><td><strong>Rheumatoid factor</strong></td><td><strong>Negative</strong> (&lt;10 IU/mL)</td><td>&lt;14</td></tr>
</table>`,
      next: 'ser-q'
    },
    {
      id: 'ser-q',
      type: 'decision',
      stage: 'Interpret',
      prompt: 'The RF is negative and the CRP only mildly raised. How do you interpret that?',
      options: [
        {
          label: 'Neither excludes RA. RF is not specific or sensitive, so add anti-CCP, which is more specific, and rely on the examination',
          rating: 'best',
          feedback: `A negative RF does not rule out RA, because many patients with RA are RF-negative, particularly early on. RF can also be positive in healthy older people and in infection, other autoimmune diseases and liver disease, so a positive RF is not diagnostic either. Anti-CCP is more specific for RA and is worth sending when RF is negative. What would change your mind is a clear alternative cause of synovitis.`,
          next: 'ref-q'
        },
        {
          label: 'RA is less likely with a negative RF, but anti-CCP could be added to check',
          rating: 'good',
          feedback: `Adding anti-CCP is correct. The weakness is the idea that a negative RF lowers the probability by much. In a woman with symmetrical synovitis in the hands and feet and a stiffness of over an hour, the examination should carry far more weight than a negative RF.`,
          next: 'ref-q'
        },
        {
          label: 'Inflammatory arthritis is unlikely, so a post-viral cause is most likely, and the tests can be repeated later',
          rating: 'poor',
          feedback: `This is treating the test result rather than the patient. She has objective synovitis in many small joints for ten weeks, and a viral arthritis would be expected to have settled by now. The question is not whether the bloods look dramatic, but whether the joints do.`,
          next: 'c-ser'
        },
        {
          label: 'The RF is the main diagnostic test and it is negative, so repeat it in three months before taking any action',
          rating: 'poor',
          feedback: `Repeating a test with limited sensitivity will usually give you the same answer, and the delay is itself harmful, because joint damage in RA begins early. RF has a role, but it does not decide this diagnosis.`,
          next: 'c-ser'
        }
      ],
      reasoning: `Think about what the tests can and cannot tell me. RF is positive in a proportion of people with RA, but is also found in healthy older people and in several other conditions, so it can neither rule RA in nor out. Anti-CCP antibodies are more specific, so a positive result adds a lot of weight, but the absence of them does not exclude RA either. CRP and ESR can be normal in early disease. So these results are inconclusive, and that is exactly the situation where the clinical picture has to lead.`
    },
    {
      id: 'c-ser',
      type: 'presentation',
      tone: 'consequence',
      label: 'A correction',
      text: `Your supervisor reads the results and then reads your note. &ldquo;She has nine swollen joints, which you have counted yourself. Which test has been done that says they&rsquo;re not swollen?&rdquo; You re-read your own examination findings and realise the blood tests were never going to overrule them.`,
      next: 'ref-q'
    },
    {
      id: 'ref-q',
      type: 'decision',
      stage: 'Escalate',
      prompt: 'What is the right plan for referral?',
      options: [
        {
          label: 'Refer urgently now for persistent synovitis, and request anti-CCP and hand and foot X-rays in parallel',
          rating: 'best',
          feedback: `This is the NICE NG100 approach. Refer urgently when there is suspected persistent synovitis of undetermined cause, especially in the small joints of the hands or feet, and do not let a normal blood test or a negative RF stop you. Requesting the extra tests in parallel means the specialist has everything at the first visit. What would change your mind is a clear non-inflammatory cause, which does not apply here.`,
          next: 'rx-q'
        },
        {
          label: 'Phone the rheumatology advice-and-guidance line first and follow their advice about referral',
          rating: 'good',
          feedback: `Advice and guidance is a legitimate route and can be quicker for uncertain cases, but this is not uncertain. She has persistent synovitis in the small joints and so needs a specialist assessment, not just advice. It is also an extra step that may add days.`,
          next: 'rx-q'
        },
        {
          label: 'Hold the referral until the anti-CCP and X-ray results are back, so the letter is stronger',
          rating: 'poor',
          feedback: `Waiting for a result before referring is a delay with a cost, since each week of untreated synovitis risks joint damage. The anti-CCP and X-ray do not change the need to refer, and you can send them off at the same time as the letter.`,
          next: 'c-ref'
        },
        {
          label: 'Make a routine referral, and repeat the bloods in six weeks to see whether the CRP and RF change',
          rating: 'poor',
          feedback: `A routine referral puts her in the long queue for a condition where there is a window of opportunity. Persistent synovitis in the small joints is a reason for urgent referral irrespective of the bloods, and repeating them in six weeks does not change that.`,
          next: 'c-ref'
        },
        {
          label: 'Tell her the blood tests are reassuring, advise rest and ibuprofen and review her again in three months',
          rating: 'unsafe',
          feedback: `This is the classic trap. &ldquo;Bloods normal, reassure, review in three months&rdquo; is false reassurance from inconclusive tests. She has objective synovitis in the small joints of the hands and feet, and in three months erosions may be developing and she may have lost the chance of the best response to treatment.`,
          next: 'c-ref-u'
        }
      ],
      reasoning: `NICE says to refer people with suspected persistent synovitis of undetermined cause, and to do so urgently if the small joints of the hands or feet are affected or more than one joint is involved. It also says not to exclude RA because of a normal acute-phase response or a negative RF. The reason is that early, effective treatment changes the outcome, and joint damage can start within months. So what I want is a referral that goes today. The remaining tests do not change whether I refer, only what the specialist has in front of them.`
    },
    {
      id: 'c-ref',
      type: 'presentation',
      tone: 'consequence',
      label: 'Later that day',
      text: `Your supervisor reads your plan at the end of the surgery. &ldquo;Persistent swelling in the small joints is a reason to refer in its own right,&rdquo; she says. &ldquo;It doesn&rsquo;t depend on the bloods.&rdquo; The urgent referral goes that afternoon with the extra tests requested at the same time. You have lost a few days, but not weeks.`,
      next: 'rx-q'
    },
    {
      id: 'c-ref-u',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss',
      text: `Your supervisor reads your notes over lunch and phones Mrs Costello at the salon. She is asked to come back, and your plan is replaced with an urgent referral. Mrs Costello is quiet on the phone, then says: &ldquo;I thought I was being told I was imagining it.&rdquo; You have to explain why the reassurance was wrong, and you have damaged some of her trust.`,
      next: 'rx-q'
    },
    {
      id: 'rx-q',
      type: 'decision',
      stage: 'Prescribe safely',
      prompt: 'She asks for something stronger while she waits for rheumatology. Her BP is 126/78, her creatinine is normal, and she has no ulcer or asthma history. She smokes. What do you prescribe?',
      options: [
        {
          label: 'One NSAID at the lowest effective dose with a PPI, stopping the ibuprofen from the chemist, plus paracetamol',
          rating: 'best',
          feedback: `NSAIDs help the pain and stiffness while she waits. The safe way is a single NSAID at the lowest effective dose for the shortest time, with gastroprotection, after checking renal function, BP and cardiovascular risk (she smokes, so this matters). Stopping the over-the-counter ibuprofen prevents double dosing. What would change your mind is a history of ulcer, kidney disease, asthma triggered by NSAIDs or high cardiovascular risk.`,
          next: 'clinic'
        },
        {
          label: 'Paracetamol and a topical NSAID, with warm-water soaks and hand exercises, avoiding oral NSAIDs',
          rating: 'good',
          feedback: `This is safe, but for a woman with active inflammation, it is likely to under-treat her symptoms. Oral NSAIDs have a role in the weeks before specialist review when the risk is low, as it is here, provided the checks are done.`,
          next: 'clinic'
        },
        {
          label: 'Prednisolone 15 mg daily for two weeks to settle the synovitis before the rheumatology appointment',
          rating: 'poor',
          feedback: `Steroids are used in RA, but not usually before the specialist has seen the patient. They can mask the swelling that the rheumatologist needs to see, make the diagnosis less certain and cause a rebound when stopped. They should be started in agreement with rheumatology, often as a bridge when a DMARD is started.`,
          next: 'c-rx-steroid'
        },
        {
          label: 'Naproxen on top of her ibuprofen for stronger cover, with no PPI as she has no indigestion',
          rating: 'unsafe',
          feedback: `Two NSAIDs together add gastrointestinal and renal risk without extra benefit. Skipping a PPI because she has no symptoms ignores that ulcers often bleed without warning. She is also a smoker, so cardiovascular risk should be assessed rather than assumed.`,
          next: 'c-rx-nsaid'
        }
      ],
      reasoning: `Two questions here. First, does she need anything stronger than paracetamol? She is struggling to work, so yes. Second, which analgesic is safe for her? An NSAID is reasonable if I check the risks that matter: kidney function (normal), BP (normal), ulcer history (none), asthma (none) and cardiovascular risk. Steroids I generally avoid before the specialist has seen the patient. They can mask synovitis, and if rheumatology think they are appropriate they can start them as part of a plan, perhaps with a DMARD.`
    },
    {
      id: 'c-rx-steroid',
      type: 'presentation',
      tone: 'consequence',
      label: 'Two weeks on',
      text: `Her hands feel almost normal for ten days, then the stiffness and swelling creep back within days of the last tablet. She also has indigestion and can&rsquo;t sleep. Her clinic appointment is still a few weeks away. The rheumatologist will later note that the steroid course clouded the examination and request an ultrasound to confirm the synovitis.`,
      next: 'clinic'
    },
    {
      id: 'c-rx-nsaid',
      type: 'presentation',
      tone: 'danger',
      label: 'Nine days later',
      text: `Mrs Costello phones the surgery with burning upper abdominal pain and a black stool. She is seen the same day. Her haemoglobin has fallen to 109 g/L from 126. Both anti-inflammatories are stopped, she is started on a PPI, and she is observed closely. She recovers, but her hands are worse without the NSAIDs, and she is anxious about tablets.`,
      next: 'clinic'
    },
    {
      id: 'clinic',
      type: 'presentation',
      tone: 'results',
      label: 'Rheumatology clinic, a few weeks later',
      text: `You sit in on her appointment. The rheumatologist examines her hands and feet, and an ultrasound shows active synovitis in several MCPs and the wrists.<br><br>
<table>
<tr><th>Test</th><th>Result</th></tr>
<tr><td><strong>Anti-CCP</strong></td><td><strong>Strongly positive</strong></td></tr>
<tr><td>Hand and foot X-rays</td><td>Soft-tissue swelling around the MCPs, no erosions yet</td></tr>
</table>
The rheumatologist explains that this is <strong>early rheumatoid arthritis</strong>. The aim is to get the disease under control quickly, using a treat-to-target approach with regular reviews, and to treat before any joint damage develops. A team will support her: a specialist nurse, a physiotherapist and an occupational therapist who can talk to her about her work and joint protection. She is offered <strong>methotrexate</strong>, to be increased stepwise by the clinic, with folic acid.<br><br>
She is keen to start: &ldquo;Whatever gets me back to work.&rdquo; The specialist nurse asks you to go through the key safety points with her and her partner Dean, while she watches.`,
      next: 'mtx-q'
    },
    {
      id: 'mtx-q',
      type: 'decision',
      stage: 'Communicate',
      prompt: 'You can only emphasise one message above all others. Which one do you choose, and how?',
      options: [
        {
          label: 'Methotrexate is taken once a week, on one agreed day; daily dosing can be fatal, so have her say it back',
          rating: 'best',
          feedback: `Accidental daily dosing is the best-known, potentially fatal methotrexate error, and a confusing instruction is a common reason. It is a message that is easily lost among the other details. Agree a day, write it on the box, and use teach-back. The other points still matter and need covering: folic acid, regular blood monitoring, alcohol, contraception, infection, vaccines. Even a patient who seems well informed should be asked to say the dosing back.`,
          next: 'tmp-q'
        },
        {
          label: 'She needs frequent blood tests, and must report mouth ulcers, a sore throat, fever or breathlessness at once',
          rating: 'good',
          feedback: `This is essential. Methotrexate can lower the blood count and affect the liver and lungs, and early reporting of mouth ulcers, a sore throat, fever or a new cough prevents harm. It is second to the weekly dosing message because a dosing error can cause these problems within days.`,
          next: 'tmp-q'
        },
        {
          label: 'No alcohol at all and reliable contraception, because methotrexate can harm the liver and an unborn baby',
          rating: 'poor',
          feedback: `Both are important. Alcohol should be kept within safe limits and pregnancy must be avoided during treatment and for a period afterwards, as methotrexate is harmful to a developing baby. But leading with them lets the single most dangerous error go unspoken, and a blanket ban on alcohol is stricter than usual advice.`,
          next: 'c-mtx'
        },
        {
          label: 'Give her the leaflet and let the pharmacist explain the dose, so you can spend the time reassuring her',
          rating: 'unsafe',
          feedback: `The leaflet is long and the pharmacist may not see her until after she has started. A dosing error can cause serious harm, and leaving the key message to others is a safety gap. Reassurance matters, but not at the expense of the one message that can be lethal.`,
          next: 'c-mtx'
        }
      ],
      reasoning: `Every one of these messages matters, but they are not equal. A patient who misses a blood test is at risk over weeks. A patient who takes methotrexate every day is at risk within days. That is why the weekly dose goes first, and I check it by asking her to tell me when and how she will take it. Then I move on to folic acid, the monitoring schedule, alcohol, contraception, reporting infections, vaccines (no live vaccines, but flu and other non-live ones are encouraged), and avoiding trimethoprim and co-trimoxazole, which can cause a severe fall in the blood count with methotrexate.`
    },
    {
      id: 'c-mtx',
      type: 'presentation',
      tone: 'danger',
      label: 'A near miss at the pharmacy',
      text: `On the day she collects the tablets, the pharmacist asks Mrs Costello when she will take them. She says: &ldquo;Every morning, with my tablets for my hands.&rdquo; The pharmacist stops her, rings the specialist nurse, and takes her through the weekly dosing in detail. No harm was done, but the clinic had missed its chance.`,
      next: 'tmp-q'
    },
    {
      id: 'tmp-q',
      type: 'decision',
      stage: 'Follow-up',
      prompt: 'Three months later she is doing well on methotrexate, with swelling much reduced. She contacts the surgery with burning on passing urine. The dipstick shows nitrites and leucocytes. The local first-line antibiotic is trimethoprim. What do you do?',
      options: [
        {
          label: 'Avoid trimethoprim and co-trimoxazole, and choose another antibiotic after checking the BNF or a pharmacist',
          rating: 'best',
          feedback: `Trimethoprim and co-trimoxazole interact with methotrexate and can cause severe bone marrow suppression, so they are avoided. Choose an alternative according to local guidance, checking renal function and interactions. Note the methotrexate on her record so the alert is visible to the next prescriber. Only specialist advice would change this, as the interaction is a well-established rule.`,
          next: 'conclusion'
        },
        {
          label: 'Ask the rheumatology nurse line or pharmacist what to give before prescribing anything',
          rating: 'good',
          feedback: `This is safe, and a sensible option if you are not sure. It is slower than looking it up yourself, and she will be symptomatic in the meantime. Having the knowledge to avoid trimethoprim at the point of prescribing saves time and risk.`,
          next: 'conclusion'
        },
        {
          label: 'Send a urine culture and wait for the result before treating, to avoid choosing the wrong antibiotic',
          rating: 'poor',
          feedback: `A culture is sensible, but waiting for it before treating symptoms leaves a woman on immunosuppression with an untreated infection for days. Send the sample and treat with a suitable antibiotic at the same time.`,
          next: 'c-tmp-poor'
        },
        {
          label: 'Prescribe the usual three-day course of trimethoprim, as it is short and routine',
          rating: 'unsafe',
          feedback: `Even a short course can cause a severe fall in white cells and platelets in someone taking methotrexate. This is one of the interactions you must know, and a default prescription from a UTI guideline will not remember it for you.`,
          next: 'c-tmp-u'
        }
      ],
      reasoning: `A UTI in someone on a DMARD should not be handled on autopilot. There are two things to think about: whether the infection needs prompt treatment (it does, as immunosuppression increases risk), and whether the usual antibiotic is safe. Trimethoprim is a folate antagonist, and so is methotrexate. Together they can suppress the bone marrow, which is why I check the BNF for every new prescription for a patient on methotrexate. The principle is the same for any new drug: check interactions, and tell her to remind every prescriber and pharmacist she takes methotrexate.`
    },
    {
      id: 'c-tmp-poor',
      type: 'presentation',
      tone: 'consequence',
      label: 'Three days later',
      text: `The urine culture grows a sensitive organism after 48 hours, and by then Mrs Costello has had three days of burning, frequency and lower abdominal pain. She has also developed a temperature and been unable to work. A suitable antibiotic is started, and she improves, but the wait was unnecessary.`,
      next: 'conclusion'
    },
    {
      id: 'c-tmp-u',
      type: 'presentation',
      tone: 'danger',
      label: 'Ten days later',
      text: `Mrs Costello returns with a sore throat, mouth ulcers and a temperature. Her blood count shows a low white cell count and a low platelet count. The trimethoprim and the methotrexate are both stopped, she is admitted for monitoring, and she recovers over several days. An incident report is filed, and the interaction is added to her record as an alert.`,
      next: 'conclusion'
    },
    {
      id: 'conclusion',
      type: 'conclusion',
      text: `<strong>Diagnosis: early rheumatoid arthritis, anti-CCP positive and RF negative.</strong><br><br>
Mrs Costello started methotrexate with folic acid, and the rheumatology team reviewed her regularly, adjusting treatment to reach remission or low disease activity. The occupational therapist helped her with joint protection and splints for work. Her swelling settled and she was back to a full list of clients by the autumn. The specialist nurse also supported her to stop smoking.<br><br>
<strong>Reasoning recap:</strong>
<ol>
<li>Inflammatory features, in order of discriminating power: prolonged morning stiffness that eases with use, visible swelling, sore feet and fatigue.</li>
<li>GALS, then the hands, with MCP and MTP squeeze tests. Soft, boggy swelling points to synovitis, whereas hard bony nodes at the DIPs and PIPs point to nodal osteoarthritis.</li>
<li>Symmetrical small-joint polyarthritis lasting more than about six weeks cannot be explained away as viral. RA is the most likely cause.</li>
<li>A negative RF and a mildly raised CRP do not exclude RA. Anti-CCP is more specific. Refer urgently for persistent synovitis whatever the bloods show.</li>
<li>Avoid steroids before the specialist has seen the patient unless agreed. Use a single NSAID with a PPI after checking renal function, BP and cardiovascular risk.</li>
<li>Methotrexate: once a week, never daily. Avoid trimethoprim and co-trimoxazole.</li>
</ol>
<strong>How you&rsquo;d explain it to the patient:</strong> &ldquo;Your joints are inflamed because your immune system is attacking the lining of the joints. It is not wear and tear, and it is not caused by your job. The treatment works best when started early, and we are aiming to get it under control so you can keep working.&rdquo;<br><br>
<strong>Safety-netting:</strong> tell her to seek help for a new sore throat, mouth ulcers, fever, unusual bruising, a new cough or breathlessness while on methotrexate. She should tell every doctor, nurse and pharmacist she takes methotrexate, and keep a monitoring record. She should avoid live vaccines and report a pregnancy or planned pregnancy before trying to conceive.`,
      keyLearning: [
        'Morning stiffness lasting over an hour that eases with use, visible swelling and sore feet point to an inflammatory arthritis.',
        'Examine the feet as well as the hands: the MCP and MTP squeeze tests find synovitis you might otherwise miss.',
        'A negative RF or normal CRP does not exclude RA. Persistent synovitis of small joints needs urgent rheumatology referral, whatever the bloods show.',
        'Anti-CCP is more specific than RF, and RF can be positive in healthy older people and in other diseases.',
        'Avoid starting steroids before specialist review unless rheumatology agree. Prescribe an NSAID with a PPI only after checking renal function, BP and cardiovascular risk.',
        'Methotrexate is a weekly drug: daily dosing is a potentially fatal error. Avoid trimethoprim and co-trimoxazole, and avoid live vaccines.',
        'RA is managed with a treat-to-target approach by a multidisciplinary team: rheumatologist, specialist nurse, physiotherapist and occupational therapist.'
      ],
      relatedTests: ['FBC', 'CRP and ESR', 'Rheumatoid factor', 'Anti-CCP antibody', 'Renal and liver function', 'X-ray of hands and feet', 'Musculoskeletal ultrasound'],
      goingFurther: `<strong>Classification:</strong> the 2010 ACR/EULAR classification criteria for RA score joint involvement (more small joints score higher), serology (RF and anti-CCP, with higher titres scoring more), acute-phase reactants and symptom duration of six weeks or more. They were developed to classify patients in research and aim to identify people at risk of persistent, erosive disease. They are not diagnostic criteria, and a patient can have RA without meeting them.<br><br>
<strong>Disease activity:</strong> the DAS28 combines tender and swollen joint counts out of 28, an acute-phase marker and the patient&rsquo;s global assessment, and is used to define the treatment target and to assess whether a response is adequate. A treat-to-target strategy involves frequent reviews and escalation of treatment until remission or low disease activity is reached.<br><br>
<strong>Treatment escalation:</strong> in NICE NG100 the first-line approach is a conventional DMARD (methotrexate is usually first), with short-term glucocorticoids as a bridge when starting or changing a DMARD. If disease remains active, combinations of conventional DMARDs are used. Persistent high disease activity despite these can lead to biologic or targeted synthetic DMARDs, under NICE technology appraisal criteria.<br><br>
<strong>Prognosis:</strong> poor prognostic factors include high anti-CCP or RF titres, a high number of swollen joints, a high acute-phase response, early erosions, smoking and a delay to treatment. Erosions on X-ray are irreversible and a sign that treatment has not been fast or effective enough. Extra-articular disease (nodules, interstitial lung disease, vasculitis) is more common in seropositive disease.`
    }
  ]
};
