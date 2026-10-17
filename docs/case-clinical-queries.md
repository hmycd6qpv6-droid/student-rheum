# Clinical queries from the case rebuild

Each case author flagged the points where guidance is contested, where they took a position, or where they invented plausible numbers. Each item below gives the **node id** inside the case file in `js/data/cases/`. Answer with **OK**, **change to …**, or **cut**.

Part A covers points that decide which option is rated *best* or *unsafe*. If one of those is wrong, students are being taught the wrong move. Part B covers wording and illustrative numbers.

---

## A. Rating-critical (please review first)

A1–A10 reviewed 17 Oct 2026 and applied. A11–A27, Part B and Part C are still open.

| # | Case · node | Position taken | Why it's flagged | Ruling |
|---|---|---|---|---|
| A1 | **joints-case-4** · `ult-q` | ULT starts **once the flare has settled** (BSR 2017). Never stop ULT during a flare. ACR 2020 allows starting during a flare with anti-inflammatory cover. The legacy "never start allopurinol during a flare" has been removed. | The most visible correction to the old content. Check that the wording is fair to both positions. | **Resolved:** ✅ Agreed as written. |
| A2 | **joints-case-4** · `flare-q` | **Short prednisolone is rated best** for the flare (eGFR 41, ACEi + thiazide, prior ulcer). Reduced-dose colchicine is "good" and NSAID + PPI is "unsafe". The case also says "BSR suggests about 30–35 mg for a few days". | The steroid-vs-colchicine ranking, the dose figure, and giving oral steroid while synovial culture is pending (Gram stain negative). | **Resolved:** ✅ Agreed as written. |
| A3 | **joints-case-4** · `ult-q` | Start low-dose allopurinol (no number in the best option; "100 mg" appears in the good option) and titrate to **< 360 µmol/L**, lower if tophi. Starting at 300 mg in CKD is "unsafe". | The starting dose in CKD, and the target (NICE 360 vs BSR 300). | **Resolved:** ✅ Agreed as written. |
| A4 | **joints-case-5** · `proc-q` | Aspirate the knee **without stopping apixaban** (warfarin with INR in range is also acceptable). Orthopaedic-led aspiration is rated "good". | Depends on local policy. | **Resolved:** ✅ Agreed, and not a local-policy matter: aspiration on a DOAC or in-range warfarin is safe. Removed the "follow local policy" hedging from the reasoning, feedback and recap. |
| A5 | **joints-case-5** · `abx-q` | With no sepsis features: blood cultures, then aspirate, then **IV flucloxacillin at once**. With sepsis features, antibiotics don't wait. "Sepsis features" is defined loosely (NEWS2, hypotension, confusion, lactate > 2). | The timing rule and the threshold definition. | **Resolved:** ✅ Agreed as written. |
| A6 | **anca-case-5** · `esc-q` | GCA with transient visual symptoms: **prednisolone 60 mg now**, same-day ophthalmology and a fast-track call. IV methylprednisolone is "discussed" with the specialist. "Back to 15 mg" and "wait for biopsy" are unsafe. | 60 vs 40 mg, and the threshold for IV pulses with amaurosis fugax. | **Resolved:** ✅ Agreed. Reworded the reasoning, handover feedback and goingFurther: benefit of IV pulses over high-dose oral is not established even at specialist level; it is the specialist team's call and never delays the oral dose. |
| A7 | **anca-case-5** · `rx-q` | PMR: prednisolone 15 mg with a slow taper (no steps given). Bisphosphonate "where indicated", implying she qualifies (74, > 3 months of steroid). **No PPI unless on an NSAID or aspirin.** | The PPI position, and the bone-protection wording. | **Resolved:** ✅ Agreed as written. |
| A8 | **joints-case-1** · `rx-q` | Before specialist review, **NSAID + PPI is best and early steroid is "poor"** (it masks synovitis). | NG100 allows short-term glucocorticoids. Is "poor" the right rating? | **Resolved:** ✅ Agreed as written. |
| A9 | **joints-case-1** · `ref-q` | Urgent referral for persistent small-joint synovitis **despite negative RF and near-normal CRP** (NG100). No timeframe is stated. | The NG100 wording comes from the author's memory. | **Resolved:** ✅ Agreed as written. |
| A10 | **joints-case-7** · `bone-q` | After a hip fracture in an older woman, **treat without waiting for DXA** (NOGG/NICE). "DXA first, treat if T ≤ -2.5" is the trap. IV zoledronate is suggested over alendronate given her eGFR. | Current NOGG wording, the eGFR cut-off for alendronate, and the timing of zoledronate after AKI. | **Resolved:** ✏️ Changed. Now taught as a grey area: the fracture settles *whether* to treat; DXA decides *what*, gating access to osteoanabolics (romosozumab, teriparatide, abaloparatide). Best = FLS + early DXA + anabolic-first decision; IV zoledronate up front = "good" (common, protective, but blunts later anabolic response) with a new bone-clinic consequence node; "DXA, treat only if T ≤ -2.5" stays "poor". Conclusion, key learning, objectives and goingFurther updated. |
| A11 | **joints-case-7** · `xray-q` | X-ray negative with ongoing suspicion: **MRI (CT if MRI is unavailable)**, per CG124. No "within 24 h" figure is given. | Confirm the imaging route. |
| A12 | **joints-case-7** · `prescribe-q` | Analgesia at eGFR 38: paracetamol, a **cautious low-dose opioid (unnamed; pharmacy advice)**, and a fascia iliaca block. The NSAID is unsafe. Ramipril and the thiazide are paused for AKI. | Whether to name an opioid. |
| A13 | **joints-case-6** · `escalate-q` | **Emergency MRI tonight and phone spinal now.** "MRI now, call spinal after the result" is rated "good". | Pathways differ on the order. |
| A14 | **joints-case-6** · `exam-findings` | PVR 140 mL after voiding 250 mL is labelled **CES-I**, not retention. No numeric threshold is given. | The CES-I/CES-R boundary. |
| A15 | **ana-case-2** · `steroid-q` | Stop prednisolone 30 mg (5 days) **without a taper** and check BP, urine and U&E the same day. **10 mg is also rated "poor"** ("no steroid dose is known to be safe" in SSc). | The SRC steroid threshold is usually ≥ 15 mg. Is "poor" for 10 mg too harsh? |
| A16 | **ana-case-2** · `manage-q`, `crisis-q` | SRC: **captopril despite the rising creatinine and K 5.4**, with BP lowered steadily. IV fluids are flagged as potentially harmful. The 999 ambulance is best; the daughter driving is "good". | Standard teaching, but check the fluids point. |
| A17 | **ana-case-1** · `esc-q`, `manage-q` | Dip blood++/protein++ with cytopenias: **phone rheumatology the same day**, and an urgent letter is "good". **Oral ibuprofen is unsafe** and topical NSAID is "good". Steroid before the specialist plan is "poor". | The steroid rating is a judgement call. |
| A18 | **ana-case-3** · `q-invest` | GP checks CK, LFT, TFT and U&E **and stops the statin, reviewing in a few days**. This is rated "good", not "poor". | Is this the right call for a GP? |
| A19 | **ana-case-4** · `q-contra` | MCTD with unknown aPL: **switch the COCP to a progestogen-only method** (extending UKMEC 4 for SLE). | MCTD has no UKMEC entry of its own. |
| A20 | **ana-case-4** · `q-pain` | Pleurisy: **NSAID + PPI after checks is best**. Prednisolone 40 mg is "poor" (SRC risk in early SSc features). Colchicine is not mentioned. | Check the steroid reasoning in a patient who only possibly has SSc. |
| A21 | **anca-case-2** · `d-abcde` | Hypoxic and hypertensive, with bilateral shadowing: **no reflex fluid bolus** (unsafe). | Some EDs give small aliquots. |
| A22 | **anca-case-2** · `d-test` | CTPA first is "poor"; non-contrast CT is suggested instead. **ANCA + anti-GBM together** is best. | The contrast stance in AKI with possible PE. |
| A23 | **anca-case-1** · `d-interpret` | **"Send to A&E with a letter" is "good"** and an urgent clinic this week is "poor". The best answer is phoning the on-call medical or renal registrar. | Confirm the ranking. |
| A24 | **anca-case-3** · `steroid-q` | Born in an endemic area: send Strongyloides serology and stool, give **empirical ivermectin**, and **start steroids today** without delay. No dose is given. | Ivermectin schedule and local policy. |
| A25 | **anca-case-4** · `manage-q` | Skin and joint-limited drug-associated AAV: **stop the triggers and monitor closely**, with steroids or induction left to rheumatology. Cyclophosphamide is "poor"; "admit and monitor" is "good". Monitoring is "within days, then weekly". | The monitoring frequency, and the "good" rating for admission. |
| A26 | **joints-case-3** · `manage-q` | Two NSAIDs failed plus recurrent uveitis gives **biologic assessment**. Methotrexate and prednisolone are "poor". NG65 criteria are paraphrased. | The NICE TA/BASDAI specifics. |
| A27 | **joints-case-2** · `rx-q` | Haemochromatosis with possible advanced fibrosis: **no methotrexate and no steroid**. "Hold the DMARD, continue naproxen + PPI" is "good". Topical NSAID + paracetamol is preferred. | The NSAID rating with possible advanced fibrosis and diabetes. |

## B. Wording and illustrative numbers

**Facts stated qualitatively on purpose (no figures). Confirm none are overstated.**
- ANCA positivity in EGPA is "a minority" (anca-case-3).
- "Endocarditis can cause a positive ANCA" (anca-case-4).
- Levamisole features: retiform ear purpura, neutropenia, PR3+MPO, aPL, and "rarely detectable" (anca-case-4).
- The Gram stain "misses a good proportion" of septic joints (joints-case-5).
- Fever is often absent in older or diabetic patients and those on paracetamol (joints-case-5).
- HLA-B27 carried by "about 1 in 12" white Europeans (joints-case-3, `interp-q`). **This is the one figure kept.** Confirm or soften it.
- Monoclonal anti-TNF reduces uveitis more than etanercept (joints-case-3, goingFurther).
- Steroid window for TA ultrasound and biopsy: "some days" (anca-case-5).
- SRC "uncommon" in anti-centromere limited SSc (ana-case-2).
- Haemochromatosis: ferritin > ~1000 flags fibrosis risk; TSAT > 45%; arthropathy often doesn't improve with venesection (joints-case-2).
- Anti-Jo-1 often gives cytoplasmic rather than nuclear staining (ana-case-3).
- PEXIVAS summary, and PLEX remaining standard in anti-GBM disease (anca-case-2, goingFurther).

**Invented but plausible numbers. Check they look right.**
- ana-case-1: PCR 190 mg/mmol; creatinine 96 → 128.
- ana-case-2: creatinine 71 → 168, K 5.4, platelets 92 with fragments.
- ana-case-3: CK 6,200.
- ana-case-4: Wells 4.5 (HR > 100 plus "PE as likely"; the flight and COCP are noted as not being Wells items).
- anca-case-1: creatinine 81 → 176.
- anca-case-2: K 5.8, Hb 131 → 82, SpO₂ 89%.
- anca-case-3: hs-troponin 9 → 186 ng/L (reference < 14), eosinophils 5.6, EF ~40%.
- anca-case-4: neutrophils 1.1.
- joints-case-2: ferritin 1480, TSAT 89%, ALT 180 on the MTX consequence branch.
- joints-case-4: urate 352 during the flare and 488 after.
- joints-case-5: synovial WCC 71 × 10⁹/L, 95% neutrophils; CRP 94.
- joints-case-6: PVR 140 mL.
- joints-case-7: CK 2,600, eGFR 38.

**Other wording to check.**
- Methotrexate counselling (joints-case-1, `mtx-q`): no monitoring frequency, washout period or folic acid dose is given.
- Trimethoprim interaction (joints-case-1, `tmp-q`): the alternative antibiotic is left to the BNF or pharmacist.
- HLA-B\*58:01 ancestry list (joints-case-4, goingFurther).
- Candour wording about the GP's steroid injection as a possible source (joints-case-5, `comm-q`).
- GCA outcome: vision "stabilised at the level reached when treatment began" (anca-case-5 conclusion).
- Classification criteria named only, not detailed: EGPA 2022 ACR/EULAR (anca-case-3), MCTD Alarcón-Segovia/Kasukawa/Kahn (ana-case-4), EULAR/ACR 2019 SLE entry ANA ≥ 1:80 (ana-case-1).
- Hydroxychloroquine eye screening is described as baseline, then annual after several years (ana-case-1).
- FSRH: oestrogen "usually avoided" with active lupus or aPL (ana-case-1).

## C. Scope decisions made during the rebuild

1. **joints-case-2's diagnosis is now hereditary haemochromatosis arthropathy** (previously "seronegative RA"). PsA was avoided because joints-case-4 covers it. Haemochromatosis isn't named in the syllabus. The case is there for the polyarthritis reasoning, the X-ray reading and the serology-limits lesson, and its `RH-CRYSTAL` link rests on the chondrocalcinosis. Keep it, or switch to polyarticular CPPD or reactive arthritis?
2. **anca-case-4's cause is now levamisole-adulterated cocaine**, with minocycline as the red herring. The case includes a confidential, non-judgemental drug-history decision.
3. **The PMR/GCA case sits in the ANCA & Vasculitis module.** The cauda equina, septic knee and hip fracture cases sit in Joints.
4. **Syllabus gaps still uncovered by any case** are listed in `docs/curriculum/msk-syllabus-2026-27.md` §6. The main ones are OA (`CD-KNEE-OA`), fibromyalgia and persistent pain, adolescent limp/SUFE (`CD-LIMP`), compartment syndrome, open fracture, and spinal metastases.
