export const jointsPatterns = [
  {
    name: "Symmetric Polyarthritis",
    accent: "var(--amber-joints)",
    desc: "Bilateral involvement of MCPs, PIPs, wrists, and MTPs — the hallmark of rheumatoid arthritis.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#140f0a"/><line x1="28" y1="8" x2="28" y2="22" stroke="#333" stroke-width="1.5"/><circle cx="28" cy="6" r="3" fill="none" stroke="#333" stroke-width="1"/><line x1="28" y1="14" x2="18" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="14" x2="38" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="22" y2="38" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="34" y2="38" stroke="#333" stroke-width="1.2"/><line x1="22" y1="38" x2="20" y2="48" stroke="#333" stroke-width="1"/><line x1="34" y1="38" x2="36" y2="48" stroke="#333" stroke-width="1"/><circle cx="18" cy="22" r="2.5" fill="#ffcc00" opacity="0.8"/><circle cx="38" cy="22" r="2.5" fill="#ffcc00" opacity="0.8"/><circle cx="15" cy="25" r="1.8" fill="#ffcc00" opacity="0.7"/><circle cx="41" cy="25" r="1.8" fill="#ffcc00" opacity="0.7"/><circle cx="13" cy="28" r="1.5" fill="#ffcc00" opacity="0.6"/><circle cx="43" cy="28" r="1.5" fill="#ffcc00" opacity="0.6"/><circle cx="20" cy="48" r="1.5" fill="#ffcc00" opacity="0.5"/><circle cx="36" cy="48" r="1.5" fill="#ffcc00" opacity="0.5"/></svg>',
    antibodies: ["RF (IgM)", "Anti-CCP", "HLA-DR4"],
    diseases: ["Rheumatoid Arthritis", "SLE"],
    targetLabel: "Key Markers",
    antibodyTagClass: "tag-joints",
    detail: "Symmetric small joint polyarthritis is the classic RA pattern. Early morning stiffness >30 minutes, MCP squeeze test positive, and bilateral involvement distinguish inflammatory from mechanical. MTP involvement (forefoot squeeze) is often the earliest sign."
  },
  {
    name: "Asymmetric Oligoarthritis",
    accent: "var(--amber-joints)",
    desc: "2\u20134 joints, typically large, with asymmetric distribution \u2014 classic for reactive arthritis and SpA.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#140f0a"/><line x1="28" y1="8" x2="28" y2="22" stroke="#333" stroke-width="1.5"/><circle cx="28" cy="6" r="3" fill="none" stroke="#333" stroke-width="1"/><line x1="28" y1="14" x2="18" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="14" x2="38" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="22" y2="38" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="34" y2="38" stroke="#333" stroke-width="1.2"/><line x1="22" y1="38" x2="20" y2="48" stroke="#333" stroke-width="1"/><line x1="34" y1="38" x2="36" y2="48" stroke="#333" stroke-width="1"/><circle cx="34" cy="38" r="3" fill="#ffcc00" opacity="0.8"/><circle cx="18" cy="22" r="2.5" fill="#ffcc00" opacity="0.6"/><circle cx="36" cy="48" r="2" fill="#ffcc00" opacity="0.5"/></svg>',
    antibodies: ["HLA-B27", "RF negative", "CRP elevated"],
    diseases: ["Reactive Arthritis", "PsA (oligoarticular)", "Enteropathic Arthritis"],
    targetLabel: "Key Markers",
    antibodyTagClass: "tag-joints",
    detail: "Asymmetric oligoarthritis involving large joints (knee, ankle) is the hallmark of the seronegative spondyloarthropathies. Look for preceding infection (reactive), skin/nail changes (PsA), or IBD symptoms (enteropathic). Dactylitis (\u2018sausage digit\u2019) is a strong clue."
  },
  {
    name: "Axial Predominant",
    accent: "var(--amber-joints)",
    desc: "Sacroiliac joints and spine \u2014 inflammatory back pain pattern, classic for ankylosing spondylitis.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#140f0a"/><!-- Vertebrae column --><rect x="24" y="5" width="8" height="3.5" rx="1" fill="#333"/><rect x="24" y="10" width="8" height="3.5" rx="1" fill="#333"/><rect x="24" y="15" width="8" height="3.5" rx="1" fill="#333"/><rect x="24" y="20" width="8" height="3.5" rx="1" fill="#333"/><rect x="24" y="25" width="8" height="3.5" rx="1" fill="#333"/><!-- Sacrum (wider) --><rect x="21" y="31" width="14" height="6" rx="1.5" fill="#333"/><!-- Iliac wings --><path d="M21 34 Q10 30 9 38 Q11 45 21 45" fill="none" stroke="#333" stroke-width="1.5"/><path d="M35 34 Q46 30 47 38 Q45 45 35 45" fill="none" stroke="#333" stroke-width="1.5"/><!-- Highlighted spine joints --><rect x="24" y="5" width="8" height="3.5" rx="1" fill="#ffcc00" opacity="0.5"/><rect x="24" y="10" width="8" height="3.5" rx="1" fill="#ffcc00" opacity="0.55"/><rect x="24" y="15" width="8" height="3.5" rx="1" fill="#ffcc00" opacity="0.6"/><rect x="24" y="20" width="8" height="3.5" rx="1" fill="#ffcc00" opacity="0.7"/><rect x="24" y="25" width="8" height="3.5" rx="1" fill="#ffcc00" opacity="0.75"/><!-- SI joints highlighted --><circle cx="21" cy="34" r="2.5" fill="#ffcc00" opacity="0.95"/><circle cx="35" cy="34" r="2.5" fill="#ffcc00" opacity="0.95"/></svg>',
    antibodies: ["HLA-B27", "CRP/ESR elevated", "RF negative"],
    diseases: ["Ankylosing Spondylitis", "Non-radiographic axSpA"],
    targetLabel: "Key Markers",
    antibodyTagClass: "tag-joints",
    detail: "Inflammatory back pain: onset <40 years, insidious, improves with exercise, worse at rest, night pain. Sacroiliitis on MRI (bone marrow oedema) is key for early diagnosis. HLA-B27 positive in ~90% AS. Modified New York criteria still reference radiographic sacroiliitis."
  },
  {
    name: "DIP-Predominant",
    accent: "var(--amber-joints)",
    desc: "Distal interphalangeal joints with nail changes and dactylitis \u2014 classic psoriatic arthritis pattern.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#140f0a"/><line x1="28" y1="8" x2="28" y2="22" stroke="#333" stroke-width="1.5"/><circle cx="28" cy="6" r="3" fill="none" stroke="#333" stroke-width="1"/><line x1="28" y1="14" x2="18" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="14" x2="38" y2="22" stroke="#333" stroke-width="1.2"/><line x1="18" y1="22" x2="13" y2="28" stroke="#333" stroke-width="1"/><line x1="38" y1="22" x2="43" y2="28" stroke="#333" stroke-width="1"/><line x1="28" y1="22" x2="22" y2="38" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="34" y2="38" stroke="#333" stroke-width="1.2"/><line x1="22" y1="38" x2="20" y2="48" stroke="#333" stroke-width="1"/><line x1="34" y1="38" x2="36" y2="48" stroke="#333" stroke-width="1"/><circle cx="13" cy="28" r="2" fill="#ffcc00" opacity="0.9"/><circle cx="43" cy="28" r="2" fill="#ffcc00" opacity="0.9"/><circle cx="15" cy="26" r="1.5" fill="#ffcc00" opacity="0.6"/><circle cx="41" cy="26" r="1.5" fill="#ffcc00" opacity="0.6"/><circle cx="38" cy="22" r="3.5" fill="#ffcc00" opacity="0.4"/></svg>',
    antibodies: ["RF usually negative", "Anti-CCP usually negative", "HLA-B27 (axial PsA)"],
    diseases: ["Psoriatic Arthritis", "Inflammatory OA (differential)"],
    targetLabel: "Key Markers",
    antibodyTagClass: "tag-joints",
    detail: "DIP involvement distinguishes PsA from RA (RA spares DIPs). Look for nail pitting, onycholysis, and dactylitis. PsA has 5 patterns (Moll & Wright): DIP-predominant, asymmetric oligoarthritis, symmetric polyarthritis (RA-like), axial, and arthritis mutilans."
  },
  {
    name: "Monoarthritis",
    accent: "var(--amber-joints)",
    desc: "Single acutely inflamed joint \u2014 crystal arthropathy or septic arthritis until proven otherwise.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#140f0a"/><line x1="28" y1="8" x2="28" y2="22" stroke="#333" stroke-width="1.5"/><circle cx="28" cy="6" r="3" fill="none" stroke="#333" stroke-width="1"/><line x1="28" y1="14" x2="18" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="14" x2="38" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="22" y2="38" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="34" y2="38" stroke="#333" stroke-width="1.2"/><line x1="22" y1="38" x2="20" y2="48" stroke="#333" stroke-width="1"/><line x1="34" y1="38" x2="36" y2="48" stroke="#333" stroke-width="1"/><circle cx="34" cy="38" r="4" fill="#ffcc00" opacity="0.9"/><circle cx="34" cy="38" r="6" fill="#ffcc00" opacity="0.2"/></svg>',
    antibodies: ["Serum urate", "Synovial fluid crystals", "Joint aspirate culture"],
    diseases: ["Gout", "CPPD (Pseudogout)", "Septic Arthritis"],
    targetLabel: "Key Investigations",
    antibodyTagClass: "tag-joints",
    detail: "Acute monoarthritis is a medical emergency until septic arthritis is excluded. Aspirate the joint BEFORE antibiotics. MSU crystals: needle-shaped, negatively birefringent (gout). CPP crystals: rhomboid, weakly positively birefringent (pseudogout). Crystal disease and sepsis can coexist."
  },
  {
    name: "Polyarticular with Axial",
    accent: "var(--amber-joints)",
    desc: "Combined peripheral joint and spinal involvement \u2014 think enteropathic arthritis or advanced PsA.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#140f0a"/><line x1="28" y1="8" x2="28" y2="22" stroke="#333" stroke-width="1.5"/><circle cx="28" cy="6" r="3" fill="none" stroke="#333" stroke-width="1"/><line x1="28" y1="14" x2="18" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="14" x2="38" y2="22" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="22" y2="38" stroke="#333" stroke-width="1.2"/><line x1="28" y1="22" x2="34" y2="38" stroke="#333" stroke-width="1.2"/><line x1="22" y1="38" x2="20" y2="48" stroke="#333" stroke-width="1"/><line x1="34" y1="38" x2="36" y2="48" stroke="#333" stroke-width="1"/><circle cx="28" cy="18" r="1.8" fill="#ffcc00" opacity="0.6"/><circle cx="25" cy="25" r="1.8" fill="#ffcc00" opacity="0.5"/><circle cx="31" cy="25" r="1.8" fill="#ffcc00" opacity="0.5"/><circle cx="18" cy="22" r="2" fill="#ffcc00" opacity="0.7"/><circle cx="34" cy="38" r="2.5" fill="#ffcc00" opacity="0.7"/><circle cx="20" cy="48" r="1.5" fill="#ffcc00" opacity="0.5"/></svg>',
    antibodies: ["HLA-B27", "RF negative", "Faecal calprotectin"],
    diseases: ["Enteropathic Arthritis", "PsA (polyarticular + axial)", "Advanced AS"],
    targetLabel: "Key Markers",
    antibodyTagClass: "tag-joints",
    detail: "Peripheral + axial involvement suggests SpA with widespread disease. Enteropathic arthritis affects ~20% of IBD patients \u2014 peripheral arthritis often mirrors gut disease activity, while axial disease runs independently. Screen for IBD in any seronegative inflammatory arthritis."
  }
];
