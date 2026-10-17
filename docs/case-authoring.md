# Case authoring guide

How to write a clinical case for the case engine (`js/cases.js`). Cases teach **diagnostic reasoning**, not fact recall. The student should leave each case able to do something they couldn't do before: build a prioritised differential, pick the test that changes management, spot the emergency, or explain the plan to a patient.

The audience is **Year 4 medical students** on the MSK module. The curriculum is [`docs/curriculum/msk-syllabus-2026-27.md`](curriculum/msk-syllabus-2026-27.md), and its codes are in `js/data/curriculum.js`.

## File layout

One case per file in `js/data/cases/<id>.js`, with a default export:

```js
/* joints-case-5: The Night-Shift Knee */

export default {
  id: 'joints-case-5',            // must match the filename
  title: 'The Night-Shift Knee',  // "The ___ ___"; must not give away the diagnosis
  summary: '71-year-old with a hot, swollen knee and no fever',  // presenting complaint only
  setting: 'Emergency department', // where the encounter happens
  difficulty: 'intermediate',     // beginner | intermediate | advanced
  curriculum: ['EM-SEPTIC', 'PR-HOTJOINT', 'IX-SYNOVIAL', 'LO4', 'CD-HOT-KNEE'],
  objectives: [                   // 2–5 items, shown in the debrief as "What this case practised"
    'Explain why a normal temperature does not exclude septic arthritis',
    '…'
  ],
  nodes: [ /* see below */ ]
};
```

The module files (`js/data/ana-cases.js` etc.) import these and export the arrays.

## Node types

All `text`, `prompt`, `reveal`, `feedback` and `reasoning` fields are HTML strings. Write them as template literals. Allowed tags: `strong`, `em`, `br`, `p`, `ul`, `ol`, `li`, `table`, `tr`, `th`, `td`, `span`. No `onclick`, scripts or links.

### `presentation`: information the student reads

```js
{ id: 'start', type: 'presentation', label: 'Emergency department, 02:40',
  text: `…`, next: 'first-q' }
```

- `label` (optional): a short heading such as `History`, `Examination`, `Results`, `Six weeks later`.
- `tone` (optional): `results` (blue edge) for investigation results, `consequence` (amber) for what happens after a weaker choice, or `danger` (red) for harm or a near miss.

### `reflect`: commit to an answer before the reveal

```js
{ id: 'ddx-reflect', type: 'reflect', label: 'Pause and think',
  prompt: 'Before you examine her: what are your top three differentials, and which one can you not afford to miss?',
  reveal: `…expert's prioritised list, with the feature that separates each…`,
  next: 'exam' }
```

The student types a free-text answer (not marked), then reveals the expert answer. Use this for *generating* differentials, not just recognising them. Every case needs at least one.

### `decision`: a graded choice

```js
{ id: 'first-q', type: 'decision', stage: 'Prioritise',
  prompt: 'What is the most important next step?',
  options: [
    { label: '…', rating: 'best',   feedback: `…`, next: 'aspirate' },
    { label: '…', rating: 'good',   feedback: `…`, next: 'aspirate' },
    { label: '…', rating: 'poor',   feedback: `…`, next: 'delay-consequence' },
    { label: '…', rating: 'unsafe', feedback: `…`, next: 'abx-first-consequence' }
  ],
  reasoning: `…how an expert thinks about this step, shown whatever the student picks…` }
```

- **`stage`**: the reasoning step, which is shown above the prompt and in the debrief. Use one of: `History`, `Examination`, `Differential`, `Prioritise`, `Investigate`, `Interpret`, `Escalate`, `Manage`, `Prescribe safely`, `Communicate`, `Handover`, `Follow-up`.
- **Options**: 3–5. The engine **shuffles** them, so order doesn't matter. Exactly one is rated `best`.
  - `best`: what a good FY1 or senior student should do.
  - `good`: defensible but second-best (e.g. right idea, wrong order).
  - `poor`: a common error that delays or misleads but is unlikely to cause harm in itself.
  - `unsafe`: would plausibly harm the patient (missed emergency, wrong drug, false reassurance). Use it where a real trap exists. Most cases should contain at least one.
- **`feedback`** (2–4 sentences): say *why*. For non-best options, name the reasoning error (anchoring, premature closure, search satisficing, base-rate neglect, false reassurance from a normal test, treating the test result rather than the patient, ordering an indiscriminate panel). For the best option, also say what would change your mind.
- **`reasoning`** (3–6 sentences): an expert thinking aloud, shown after any choice. Talk in terms of probability: what was the pre-test likelihood, which finding shifts it, and what would make you change course. It must add something beyond the feedback.
- After a choice the student sees their feedback, the reasoning, and how every other option rated. Keep all labels **similar in length and tone**, so the best answer isn't the longest or most hedged.

### `conclusion`: the debrief

```js
{ id: 'conclusion', type: 'conclusion',
  text: `<strong>Diagnosis: …</strong><br><br>What happened next… <br><br><strong>Reasoning recap:</strong><ol><li>pivot 1</li>…</ol><strong>How you'd explain it to the patient:</strong> …<br><br><strong>Safety-netting:</strong> …`,
  keyLearning: ['…', '…'],   // 4–7 short, memorable statements
  relatedTests: ['Synovial fluid microscopy', 'Blood cultures'],
  goingFurther: `…optional specialist depth beyond Year 4 core…` }
```

The engine adds the student's decision path with ratings, a score, and the case's curriculum links.

## What makes a good case

1. **Information unfolds the way it does in clinic.** Start with the presenting complaint and setting. History, examination, bedside tests and results arrive in stages, each one after a decision. Don't put the diagnosis in the title, summary or opening text.
2. **Every path has at least four decisions** (aim for 5–7), covering different stages. A typical arc: History or Examination → Differential (reflect) → Prioritise or Escalate → Investigate → Interpret → Manage or Prescribe → Communicate or Handover.
3. **Distractors are real errors.** Each wrong option should be something a student or junior doctor actually does. Examples: sending an "autoimmune screen", being reassured by a normal CRP, starting antibiotics before aspirating, treating an ANA of 1:80 as lupus, missing GCA in someone with PMR, or calling cauda equina "sciatica".
4. **Wrong choices have consequences, not lectures.** Route a `poor` or `unsafe` choice to a short `presentation` node with `tone: 'consequence'` or `'danger'` that shows what happens next ("The cultures from after the antibiotics come back sterile…", "At 06:00 she has painless urinary retention…"). Then rejoin the main path. Don't repeat the feedback text there; move the story on. A `good` choice can go straight on, or to a short note.
5. **Results look real.** Use UK units and reference ranges (µmol/L, mmol/L, ×10⁹/L, g/L, mg/L), tables for panels, and include the incidental or ambiguous result that tests interpretation.
6. **The whole patient.** Include function, work, carers, mood, beliefs, medicines and comorbidity (LO1), consent and dignity during examination (LO8) where it fits naturally, and equitable assessment where relevant (e.g. erythema and rashes on darker skin, interpreters, health literacy). Vary names, ages, ethnicities, sexes and settings across cases.
7. **Include at least one communication or handover decision** where it fits: the SBAR call, explaining a diagnosis, safety-netting, or shared decision-making.
8. **Year 4 core on the main path, specialist depth in `goingFurther`.** For recognition-level topics (SLE, SSc, myositis, vasculitis) the main path is recognise → red flags → sensible tests → urgency → who to refer to → what to tell the patient. ENA subtypes, biologic choice, PLEX and trial data go in `goingFurther`.

## Curriculum links

- `curriculum` lists 4–8 codes from `js/data/curriculum.js`, most important first. Only presentation and case-discussion codes (`PR-`, `CD-`) appear on the case card, because condition codes would give away the diagnosis. Include at least one `PR-` code.
- Include at least one `LO` code, at least one condition or presentation code, and any `EM-`, `IX-`, `TX-`, `SK-`, `CD-` or `REF-` code the case **genuinely exercises through a decision**. Don't list a code for a passing mention.

## Clinical content

- Reference: UK practice, meaning NICE (NG100, NG226, NG59, NG38 and other relevant NICE guidance), BSR guidelines, then EULAR where the UK has no guidance. Use British spelling and UK drug names.
- Doses only where they are standard teaching (e.g. prednisolone 15 mg for PMR; 40–60 mg for GCA without visual loss). Defer to "senior/BNF" otherwise.
- Where guidance is contested or you're unsure, take the mainstream, conservative UK position, write it so it isn't wrong under the alternative, and **flag it** for clinical review rather than guessing.

## Validate

```bash
node /path/to/validate-case.mjs js/data/cases/<id>.js
```

The validator checks the schema, links, reachability, cycles, curriculum codes, at least four decisions on every path, and that exactly one option per decision is rated best.
