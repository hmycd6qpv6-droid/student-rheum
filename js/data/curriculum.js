/* curriculum.js — Year 4 MSK syllabus 2026/27, keyed by the codes in
   docs/curriculum/msk-syllabus-2026-27.md. Cases reference these codes. */

export const curriculumGroups = {
  LO: 'Learning outcome',
  PR: 'Presentation',
  RH: 'Core rheumatology',
  OR: 'Core orthopaedics',
  RE: 'Recognition level',
  EM: 'Emergency',
  IX: 'Investigations',
  TX: 'Management',
  SK: 'Clinical skill',
  CD: 'Case discussion',
  REF: 'Guidance',
  FOUND: 'Applied foundations'
};

export const curriculum = {
  LO1: { short: 'Focused MSK history', text: 'Take a focused history covering pain, stiffness, swelling, injury mechanism, systemic symptoms, medicines, function, work and psychosocial context.' },
  LO2: { short: 'GALS & regional exam', text: 'Perform a GALS screen and focused regional examination; identify synovitis, deformity, gait disturbance and neurovascular compromise.' },
  LO3: { short: 'Prioritised differential', text: 'Build a prioritised differential for acute monoarthritis, polyarthritis, regional pain, back pain, trauma and limp.' },
  LO4: { short: 'Emergencies & SBAR', text: 'Recognise emergencies, seek senior help promptly and communicate an initial assessment using SBAR.' },
  LO5: { short: 'Select & interpret tests', text: 'Select and interpret relevant blood tests, synovial fluid results and basic imaging; explain limitations and avoid unnecessary testing.' },
  LO6: { short: 'Initial care & referral', text: 'Propose evidence-informed initial care, referral and follow-up, incorporating analgesic safety, rehabilitation and shared decisions.' },
  LO7: { short: 'Explain & safety-net', text: 'Explain common diagnoses, uncertainty, treatment risks and specific safety-netting advice in accessible language.' },
  LO8: { short: 'Consent, dignity, handover', text: 'Demonstrate consent, dignity, equitable assessment, safeguarding awareness and safe handover.' },

  FOUND: { short: 'Applied foundations', text: 'Regional anatomy; nerves, dermatomes and myotomes; bone healing; inflammatory versus mechanical pain; joint damage, crystal deposition and bone fragility.' },

  'PR-HOTJOINT': { short: 'Acute hot swollen joint', text: 'Acute hot swollen joint.' },
  'PR-MONO': { short: 'Chronic monoarthritis', text: 'Chronic monoarthritis.' },
  'PR-POLY': { short: 'Polyarthritis', text: 'Symmetrical and asymmetrical polyarthritis.' },
  'PR-STIFF': { short: 'Stiffness & widespread pain', text: 'Stiffness and widespread pain.' },
  'PR-BACK': { short: 'Back or neck pain', text: 'Back or neck pain with and without neurological symptoms.' },
  'PR-REGIONAL': { short: 'Regional joint pain', text: 'Shoulder, elbow, wrist, hand, hip, knee, ankle and foot pain.' },
  'PR-INJURY': { short: 'Limb injury', text: 'Limb injury, deformity or inability to bear weight.' },
  'PR-FALL': { short: 'Falls & fragility fracture', text: 'Falls and fragility fracture.' },
  'PR-PROSTHESIS': { short: 'Painful prosthetic joint', text: 'Painful or swollen prosthetic joint.' },
  'PR-LIMP': { short: 'Limp in a child', text: 'Limp in a child or adolescent.' },
  'PR-BONE': { short: 'Bone pain or mass', text: 'Unexplained bone pain, swelling or mass.' },
  'PR-WEAK': { short: 'Proximal weakness', text: 'Proximal muscle weakness.' },

  'RH-RA': { short: 'Rheumatoid arthritis', text: 'Rheumatoid arthritis.' },
  'RH-SPA': { short: 'Spondyloarthritis', text: 'Spondyloarthritis, including ankylosing spondylitis, psoriatic and reactive arthritis.' },
  'RH-PMR': { short: 'PMR & GCA', text: 'Polymyalgia rheumatica and giant cell arteritis.' },
  'RH-INFECT': { short: 'MSK infection', text: 'MSK infections, including septic arthritis and osteomyelitis.' },
  'RH-OA': { short: 'Osteoarthritis', text: 'Osteoarthritis.' },
  'RH-CRYSTAL': { short: 'Gout & pseudogout', text: 'Gout and pseudogout.' },
  'RH-OP': { short: 'Osteoporosis', text: 'Osteoporosis and fragility fractures.' },
  'RH-FIBRO': { short: 'Fibromyalgia & persistent pain', text: 'Fibromyalgia and persistent pain.' },

  'OR-FRACTURE': { short: 'Fractures & dislocations', text: 'Common upper and lower limb fractures and dislocations, including hip and scaphoid fractures.' },
  'OR-KNEE': { short: 'Meniscal & ligament injury', text: 'Meniscal and ligament injuries.' },
  'OR-SPINE': { short: 'Back pain, sciatica, stenosis', text: 'Mechanical back pain, sciatica and spinal stenosis.' },
  'OR-SOFT': { short: 'Soft tissue disorders', text: 'Soft tissue disorders, including Achilles rupture, rotator cuff disorders, adhesive capsulitis, shoulder instability, epicondylitis, carpal tunnel syndrome, trigger finger, patellofemoral pain, greater trochanteric pain and plantar heel pain.' },

  'RE-SLE': { short: 'SLE', text: 'Recognise presentations and appropriate referral for systemic lupus erythematosus.' },
  'RE-SSC': { short: 'Systemic sclerosis', text: 'Recognise presentations and appropriate referral for systemic sclerosis.' },
  'RE-MYOSITIS': { short: 'Inflammatory myopathy', text: 'Recognise presentations and appropriate referral for inflammatory myopathy.' },
  'RE-VASC': { short: 'Vasculitis', text: 'Recognise presentations and appropriate referral for vasculitis.' },
  'RE-TUMOUR': { short: 'Bone tumours & metastases', text: 'Recognise presentations and appropriate referral for bone tumours and skeletal metastases.' },
  'RE-PAGET': { short: 'Paget disease', text: 'Recognise presentations and appropriate referral for Paget disease.' },
  'RE-AVN': { short: 'Avascular necrosis', text: 'Recognise presentations and appropriate referral for avascular necrosis.' },
  'RE-JIA': { short: 'JIA', text: 'Recognise presentations and appropriate referral for juvenile idiopathic arthritis.' },
  'RE-PAEDHIP': { short: 'DDH, Perthes, SUFE', text: 'Recognise presentations and appropriate referral for developmental dysplasia of the hip, Perthes disease and slipped upper femoral epiphysis.' },

  'EM-SEPTIC': { short: 'Septic arthritis', text: 'Recognise an acutely painful restricted joint, including without fever. Arrange urgent senior assessment; understand aspiration, cultures and antimicrobial pathways. Crystals do not exclude infection.' },
  'EM-CES': { short: 'Cauda equina / cord compression', text: 'Elicit new bladder, bowel or sexual dysfunction, saddle sensory change and neurological deficits. Escalate urgently through the emergency spinal pathway; recognise the need for urgent imaging.' },
  'EM-COMPART': { short: 'Compartment syndrome', text: 'Recognise escalating pain, pain on passive stretch and evolving neurovascular findings. Normal pulses do not exclude compartment syndrome. Seek immediate surgical review.' },
  'EM-OPENFX': { short: 'Open fracture & major injury', text: 'Use ABCDE, identify wounds and neurovascular compromise, minimise movement and escalate. Explain immobilisation, antibiotics, tetanus assessment and specialist management principles.' },
  'EM-GCA': { short: 'Giant cell arteritis', text: 'Identify new headache, jaw claudication and visual symptoms, especially with PMR. Recognise threatened vision and the need for immediate senior-led treatment and referral.' },
  'EM-MALIG': { short: 'Malignancy & unstable spine', text: 'Recognise concerning persistent pain, cancer history, systemic features and progressive neurological symptoms. Use urgent local cancer or spinal pathways.' },

  'IX-BLOODS': { short: 'Bloods in context', text: 'Use FBC, CRP or ESR, renal and liver function, calcium and relevant targeted tests in clinical context. Normal inflammatory markers do not rule out every serious condition.' },
  'IX-SEROLOGY': { short: 'Serology & its limits', text: 'Explain the role and limitations of rheumatoid factor, anti-CCP, ANA, HLA-B27 and serum urate. Avoid indiscriminate autoimmune panels.' },
  'IX-SYNOVIAL': { short: 'Synovial fluid', text: 'Interpret synovial fluid cell count, microscopy, Gram stain and culture alongside the presentation; understand sampling and antibiotic timing in the context of sepsis.' },
  'IX-XRAY': { short: 'Plain radiographs', text: 'Read a plain radiograph systematically: identity and view, alignment, bone, joint spaces and soft tissue. Recognise common fractures, dislocations, degenerative change and erosions.' },
  'IX-IMAGING': { short: 'US, MRI, CT, DXA', text: 'Explain when ultrasound, MRI, CT and DXA can answer a clinical question. Recognise occult fracture and limitations of normal initial imaging.' },

  'TX-OA': { short: 'OA & mechanical pain care', text: 'Explain therapeutic exercise, self-management, weight management where appropriate, functional support and indications for specialist opinion.' },
  'TX-INFLAM': { short: 'Inflammatory arthritis care', text: 'Recognise persistent synovitis and timely rheumatology referral; explain early disease-modifying treatment, monitoring and multidisciplinary care.' },
  'TX-CRYSTAL': { short: 'Crystal arthritis care', text: 'Distinguish acute flare care from prevention; explain indications and principles of urate-lowering treatment and comorbidity review.' },
  'TX-FRACTURE': { short: 'Fracture care', text: 'Understand analgesia, immobilisation, operative versus non-operative principles, complications, follow-up and return to activity.' },
  'TX-BONE': { short: 'Bone health', text: 'Assess falls and fracture risk; explain exercise, nutrition, vitamin D where indicated, bone protection and fracture liaison services.' },
  'TX-PAIN': { short: 'Persistent pain care', text: 'Assess mood, sleep, disability and beliefs; develop realistic goals with physiotherapy and other appropriate services.' },
  'TX-MEDS': { short: 'Medicines safety', text: 'Benefits and harms of analgesics, NSAIDs, corticosteroids, DMARDs, biologics and osteoporosis medicines: renal, GI and CV risk, interactions, gastroprotection, infection risk, monitoring, pregnancy and opioid harms.' },
  'TX-PROC': { short: 'Aspiration, injection & periop', text: 'Purpose, consent, asepsis, contraindications and complications of joint aspiration and injection; perioperative assessment, thromboprophylaxis, and recognising postoperative infection, VTE and neurovascular complications.' },

  'SK-EXAM': { short: 'GALS & look-feel-move', text: 'GALS screening; focused regional examination using look, feel and move.' },
  'SK-GAIT': { short: 'Gait & special tests', text: 'Gait assessment; active and passive movement; special tests interpreted with the history rather than in isolation.' },
  'SK-LIMB': { short: 'Injured limb NV exam', text: 'Documented motor, sensory and vascular examination of an injured limb, including reassessment after an intervention.' },
  'SK-NEURO': { short: 'Spinal neuro exam', text: 'A focused neurological examination for spinal symptoms, adapted to pain, disability, consent and dignity.' },
  'SK-SBAR': { short: 'Notes, requests & SBAR', text: 'A concise clinical note, problem list, investigation request and SBAR referral or handover.' },

  'CD-KNEE-OA': { short: 'Older adult, knee pain', text: 'An older adult with knee pain: clinical diagnosis, function, exercise and shared decisions.' },
  'CD-HOT-KNEE': { short: 'Hot swollen knee', text: 'A hot swollen knee: infection risk, aspiration and urgent escalation.' },
  'CD-SMALL-JOINT': { short: 'New small-joint swelling', text: 'New small-joint swelling: inflammatory pattern and referral despite inconclusive blood tests.' },
  'CD-BACK-BLADDER': { short: 'Back pain + bladder symptoms', text: 'Back pain with new bladder symptoms: emergency prioritisation and handover.' },
  'CD-FALL-HIP': { short: 'Fall with hip pain', text: 'A fall with hip pain: injury, delirium risk, bone health and rehabilitation.' },
  'CD-LIMP': { short: 'Adolescent limp', text: 'An adolescent with a limp and knee pain: examine the hip and identify urgent pathology.' },

  'REF-MLA': { short: 'GMC MLA content map', text: 'GMC MLA content map (assessments from September 2026).', url: 'https://www.gmc-uk.org/education/medical-licensing-assessment/mla-content-map' },
  'REF-NG100': { short: 'NICE NG100 (RA)', text: 'NICE NG100 Rheumatoid arthritis in adults.', url: 'https://www.nice.org.uk/guidance/ng100' },
  'REF-NG226': { short: 'NICE NG226 (OA)', text: 'NICE NG226 Osteoarthritis in over 16s.', url: 'https://www.nice.org.uk/guidance/ng226' },
  'REF-NG59': { short: 'NICE NG59 (back pain)', text: 'NICE NG59 Low back pain and sciatica in over 16s.', url: 'https://www.nice.org.uk/guidance/ng59' },
  'REF-NG38': { short: 'NICE NG38 (fractures)', text: 'NICE NG38 Fractures (non-complex).', url: 'https://www.nice.org.uk/guidance/ng38' }
};

export function curriculumGroup(code) {
  const prefix = code.split('-')[0].replace(/\d+$/, '');
  return curriculumGroups[prefix] || '';
}
