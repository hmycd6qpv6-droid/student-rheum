export const jointsPatterns = [
  {
    name: "Symmetric Polyarthritis",
    accent: "var(--amber-joints)",
    desc: "Bilateral involvement of MCPs, PIPs, wrists, and MTPs — the hallmark of rheumatoid arthritis.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#F6F3EC"/><g fill="none" stroke="#CDC5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="7.5" r="4"/><path d="M28 12v18M20 15h16M23 30h10"/><path d="M20 15l-3 9-2 8-1 4M36 15l3 9 2 8 1 4M23 30l-1 11-1 10-3 1M33 30l1 11 1 10 3 1"/></g><circle cx="15" cy="32" r="2.2" fill="#8C520A"/><circle cx="41" cy="32" r="2.2" fill="#8C520A"/><circle cx="14" cy="36" r="2.2" fill="#8C520A"/><circle cx="42" cy="36" r="2.2" fill="#8C520A"/><circle cx="19" cy="51.5" r="2.2" fill="#8C520A"/><circle cx="37" cy="51.5" r="2.2" fill="#8C520A"/></svg>',
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
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#F6F3EC"/><g fill="none" stroke="#CDC5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="7.5" r="4"/><path d="M28 12v18M20 15h16M23 30h10"/><path d="M20 15l-3 9-2 8-1 4M36 15l3 9 2 8 1 4M23 30l-1 11-1 10-3 1M33 30l1 11 1 10 3 1"/></g><circle cx="34" cy="41" r="3" fill="#8C520A"/><circle cx="21" cy="51" r="2.4" fill="#8C520A"/><circle cx="17" cy="24" r="2.4" fill="#8C520A"/></svg>',
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
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#F6F3EC"/><g fill="none" stroke="#CDC5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="7.5" r="4"/><path d="M28 12v18M20 15h16M23 30h10"/><path d="M20 15l-3 9-2 8-1 4M36 15l3 9 2 8 1 4M23 30l-1 11-1 10-3 1M33 30l1 11 1 10 3 1"/></g><path d="M28 12v18" stroke="#8C520A" stroke-width="3" stroke-linecap="round"/><circle cx="24.5" cy="30" r="2.4" fill="#8C520A"/><circle cx="31.5" cy="30" r="2.4" fill="#8C520A"/></svg>',
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
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#F6F3EC"/><g fill="none" stroke="#CDC5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="7.5" r="4"/><path d="M28 12v18M20 15h16M23 30h10"/><path d="M20 15l-3 9-2 8-1 4M36 15l3 9 2 8 1 4M23 30l-1 11-1 10-3 1M33 30l1 11 1 10 3 1"/></g><path d="M14 36l-.6 3M42 36l.6 3" stroke="#CDC5B5" stroke-width="2.5" stroke-linecap="round"/><circle cx="13.4" cy="39.2" r="2" fill="#8C520A"/><circle cx="42.6" cy="39.2" r="2" fill="#8C520A"/></svg>',
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
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#F6F3EC"/><g fill="none" stroke="#CDC5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="7.5" r="4"/><path d="M28 12v18M20 15h16M23 30h10"/><path d="M20 15l-3 9-2 8-1 4M36 15l3 9 2 8 1 4M23 30l-1 11-1 10-3 1M33 30l1 11 1 10 3 1"/></g><circle cx="34" cy="41" r="6" fill="#8C520A" fill-opacity="0.2"/><circle cx="34" cy="41" r="3.4" fill="#8C520A"/></svg>',
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
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#F6F3EC"/><g fill="none" stroke="#CDC5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="28" cy="7.5" r="4"/><path d="M28 12v18M20 15h16M23 30h10"/><path d="M20 15l-3 9-2 8-1 4M36 15l3 9 2 8 1 4M23 30l-1 11-1 10-3 1M33 30l1 11 1 10 3 1"/></g><path d="M28 12v18" stroke="#8C520A" stroke-width="3" stroke-linecap="round"/><circle cx="24.5" cy="30" r="2.2" fill="#8C520A"/><circle cx="31.5" cy="30" r="2.2" fill="#8C520A"/><circle cx="15" cy="32" r="2.2" fill="#8C520A"/><circle cx="34" cy="41" r="2.2" fill="#8C520A"/><circle cx="21" cy="51" r="2.2" fill="#8C520A"/><circle cx="42" cy="36" r="2.2" fill="#8C520A"/></svg>',
    antibodies: ["HLA-B27", "RF negative", "Faecal calprotectin"],
    diseases: ["Enteropathic Arthritis", "PsA (polyarticular + axial)", "Advanced AS"],
    targetLabel: "Key Markers",
    antibodyTagClass: "tag-joints",
    detail: "Peripheral + axial involvement suggests SpA with widespread disease. Enteropathic arthritis affects ~20% of IBD patients \u2014 peripheral arthritis often mirrors gut disease activity, while axial disease runs independently. Screen for IBD in any seronegative inflammatory arthritis."
  }
];
