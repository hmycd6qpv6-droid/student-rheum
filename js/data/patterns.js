export const anaPatterns = [
  {
    name: "Homogeneous",
    accent: "var(--fitc-green)",
    desc: "Diffuse, uniform staining of the entire nucleus. The most common ANA pattern.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#0d1a0f"/><circle cx="28" cy="28" r="18" fill="#1a4a1a" stroke="#39ff14" stroke-width="0.5" opacity="0.9"/><circle cx="28" cy="28" r="17" fill="#2a6a1a" opacity="0.6"/><circle cx="28" cy="28" r="15" fill="#39ff14" opacity="0.25"/></svg>',
    antibodies: ["Anti-dsDNA", "Anti-histone"],
    antibodyTagClass: "tag-antibody",
    diseases: ["SLE", "Drug-induced lupus"]
  },
  {
    name: "Speckled",
    accent: "var(--dapi-blue)",
    desc: "Discrete speckles throughout the nucleus. The classic ENA pattern \u2014 fine or coarse.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#0d0f1a"/><circle cx="28" cy="28" r="18" fill="#1a1a3a" stroke="#4488ff" stroke-width="0.5" opacity="0.9"/><circle cx="20" cy="22" r="2" fill="#4488ff" opacity="0.7"/><circle cx="32" cy="20" r="1.5" fill="#4488ff" opacity="0.5"/><circle cx="26" cy="32" r="2" fill="#4488ff" opacity="0.6"/><circle cx="35" cy="30" r="1.5" fill="#4488ff" opacity="0.4"/><circle cx="24" cy="26" r="1" fill="#4488ff" opacity="0.8"/><circle cx="30" cy="26" r="1.8" fill="#4488ff" opacity="0.5"/><circle cx="22" cy="34" r="1.2" fill="#4488ff" opacity="0.6"/><circle cx="34" cy="24" r="1" fill="#4488ff" opacity="0.7"/></svg>',
    antibodies: ["Anti-Sm", "Anti-RNP", "Anti-Ro (SSA)", "Anti-La (SSB)"],
    antibodyTagClass: "tag-antibody",
    diseases: ["SLE", "Sj\u00f6gren's", "MCTD"]
  },
  {
    name: "Centromere",
    accent: "var(--rhodamine-red)",
    desc: "Discrete dots corresponding to centromeres \u2014 count ~46 dots per cell in metaphase.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#1a0d12"/><circle cx="28" cy="28" r="18" fill="#2a1a24" stroke="#ff3366" stroke-width="0.5" opacity="0.9"/><circle cx="20" cy="22" r="1" fill="#ff3366" opacity="0.8"/><circle cx="25" cy="20" r="1" fill="#ff3366" opacity="0.8"/><circle cx="30" cy="21" r="1" fill="#ff3366" opacity="0.8"/><circle cx="35" cy="23" r="1" fill="#ff3366" opacity="0.8"/><circle cx="22" cy="27" r="1" fill="#ff3366" opacity="0.8"/><circle cx="27" cy="26" r="1" fill="#ff3366" opacity="0.8"/><circle cx="32" cy="27" r="1" fill="#ff3366" opacity="0.8"/><circle cx="24" cy="32" r="1" fill="#ff3366" opacity="0.8"/><circle cx="29" cy="31" r="1" fill="#ff3366" opacity="0.8"/><circle cx="34" cy="32" r="1" fill="#ff3366" opacity="0.8"/><circle cx="26" cy="36" r="1" fill="#ff3366" opacity="0.8"/><circle cx="31" cy="35" r="1" fill="#ff3366" opacity="0.8"/></svg>',
    antibodies: ["Anti-centromere (CENP-B)"],
    antibodyTagClass: "tag-antibody",
    diseases: ["Limited cutaneous SSc (CREST)", "Primary biliary cholangitis"]
  },
  {
    name: "Nucleolar",
    accent: "var(--amber-warn)",
    desc: "Bright staining confined to nucleoli \u2014 fewer, larger fluorescent regions within the nucleus.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#1a150d"/><circle cx="28" cy="28" r="18" fill="#2a2a1a" stroke="#ffaa00" stroke-width="0.5" opacity="0.9"/><circle cx="23" cy="25" r="4" fill="#ffaa00" opacity="0.5"/><circle cx="33" cy="24" r="3.5" fill="#ffaa00" opacity="0.4"/><circle cx="28" cy="33" r="4.5" fill="#ffaa00" opacity="0.45"/></svg>',
    antibodies: ["Anti-Scl-70", "Anti-PM-Scl", "Anti-fibrillarin", "Anti-RNA Pol III"],
    antibodyTagClass: "tag-antibody",
    diseases: ["Diffuse cutaneous SSc", "Scleroderma-myositis overlap"]
  },
  {
    name: "Cytoplasmic",
    accent: "#cc88ff",
    desc: "Staining in the cytoplasm rather than the nucleus. Technically not \"ANA\" \u2014 but reported on the same test.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#140d1a"/><circle cx="28" cy="28" r="22" fill="#2a1a3a" opacity="0.5"/><circle cx="28" cy="28" r="18" fill="none" stroke="#cc88ff" stroke-width="0.5" opacity="0.6"/><circle cx="28" cy="28" r="10" fill="#140d1a" stroke="#cc88ff" stroke-width="0.3" opacity="0.4"/><circle cx="18" cy="20" r="1.5" fill="#cc88ff" opacity="0.4"/><circle cx="38" cy="22" r="1" fill="#cc88ff" opacity="0.3"/><circle cx="20" cy="36" r="1.2" fill="#cc88ff" opacity="0.35"/><circle cx="36" cy="35" r="1.5" fill="#cc88ff" opacity="0.4"/><circle cx="16" cy="28" r="1" fill="#cc88ff" opacity="0.3"/><circle cx="40" cy="28" r="1.3" fill="#cc88ff" opacity="0.35"/></svg>',
    antibodies: ["Anti-Jo-1", "Anti-SRP", "Anti-ribosomal P", "Anti-mitochondrial"],
    antibodyTagClass: "tag-antibody",
    diseases: ["Antisynthetase syndrome", "SLE (neuropsychiatric)", "PBC"]
  }
];

export const ancaPatterns = [
  {
    name: "c-ANCA (Cytoplasmic)",
    accent: "var(--cyan-anca)",
    nameColor: "var(--cyan-anca)",
    desc: "Diffuse, granular staining of the neutrophil cytoplasm with central interlobular accentuation. Nucleus remains unstained.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#0a1214"/><circle cx="28" cy="28" r="20" fill="#0d2228" stroke="#00e5ff" stroke-width="0.4" opacity="0.8"/><circle cx="28" cy="28" r="8" fill="#0a1214" opacity="0.7"/><circle cx="20" cy="22" r="2.5" fill="#00e5ff" opacity="0.35"/><circle cx="36" cy="22" r="2" fill="#00e5ff" opacity="0.3"/><circle cx="20" cy="34" r="2" fill="#00e5ff" opacity="0.3"/><circle cx="36" cy="34" r="2.5" fill="#00e5ff" opacity="0.35"/><circle cx="28" cy="18" r="1.8" fill="#00e5ff" opacity="0.25"/><circle cx="28" cy="38" r="1.8" fill="#00e5ff" opacity="0.25"/><circle cx="17" cy="28" r="1.5" fill="#00e5ff" opacity="0.3"/><circle cx="39" cy="28" r="1.5" fill="#00e5ff" opacity="0.3"/><circle cx="23" cy="26" r="1.8" fill="#00e5ff" opacity="0.4"/><circle cx="33" cy="30" r="1.8" fill="#00e5ff" opacity="0.4"/></svg>',
    targetLabel: "Target Antigen",
    antibodies: ["PR3 (Proteinase-3)"],
    antibodyTagClass: "tag-anca",
    diseases: ["GPA (Granulomatosis with Polyangiitis)"],
    detail: "c-ANCA/PR3 is ~90% specific for GPA when IF pattern AND ELISA are concordant. Always confirm IF with antigen-specific testing."
  },
  {
    name: "p-ANCA (Perinuclear)",
    accent: "var(--amber-warn)",
    nameColor: "var(--amber-warn)",
    desc: "Staining concentrated around the nucleus. Artefact of ethanol fixation \u2014 MPO migrates to the nuclear membrane.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#0a1214"/><circle cx="28" cy="28" r="20" fill="#0d2228" stroke="#ffaa00" stroke-width="0.3" opacity="0.6"/><circle cx="28" cy="28" r="10" fill="#1a150d" stroke="#ffaa00" stroke-width="2.5" opacity="0.5"/><circle cx="28" cy="28" r="8" fill="#ffaa00" opacity="0.15"/><circle cx="28" cy="28" r="6" fill="#1a150d" opacity="0.6"/></svg>',
    targetLabel: "Target Antigen",
    antibodies: ["MPO (Myeloperoxidase)"],
    antibodyTagClass: "tag-anca",
    diseases: ["MPA", "EGPA", "Pauci-immune GN"],
    detail: "p-ANCA/MPO = hallmark of MPA. Also ~40% EGPA. NB: p-ANCA on IF can be caused by non-vasculitis antibodies (anti-lactoferrin in IBD) \u2014 always confirm with MPO ELISA."
  },
  {
    name: "Atypical ANCA (x-ANCA)",
    accent: "var(--rhodamine-red)",
    nameColor: "var(--rhodamine-red)",
    desc: "Neither classic c-ANCA nor p-ANCA. Flat, diffuse or mixed \u2014 typically PR3/MPO ELISA negative.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#0a1214"/><circle cx="28" cy="28" r="20" fill="#1a1218" stroke="#ff3366" stroke-width="0.3" opacity="0.6"/><circle cx="28" cy="28" r="10" fill="none" stroke="#ff3366" stroke-width="0.8" opacity="0.3" stroke-dasharray="2,2"/><circle cx="22" cy="24" r="2" fill="#ff3366" opacity="0.25"/><circle cx="34" cy="24" r="1.5" fill="#ff3366" opacity="0.2"/><circle cx="28" cy="34" r="1.8" fill="#ff3366" opacity="0.2"/><circle cx="28" cy="22" r="1.2" fill="#ff3366" opacity="0.3"/></svg>',
    targetLabel: "Target Antigens",
    antibodies: ["Lactoferrin, BPI, elastase, cathepsin G"],
    antibodyTagClass: null,
    diseases: ["IBD (especially UC)", "PSC", "Autoimmune hepatitis"],
    detail: "NOT associated with primary vasculitis. Common trap \u2014 positive ANCA in IBD/liver disease \u2260 vasculitis. PR3/MPO will be negative."
  }
];
