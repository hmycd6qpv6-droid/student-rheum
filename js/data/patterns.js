export const anaPatterns = [
  {
    name: "Homogeneous",
    accent: "var(--fitc-green)",
    desc: "Diffuse, uniform staining of the entire nucleus. The most common ANA pattern.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#08110b"/><circle cx="28" cy="28" r="21" fill="none" stroke="#4ee07a" stroke-opacity="0.18"/><circle cx="28" cy="28" r="13" fill="#4ee07a" fill-opacity="0.85" stroke="#4ee07a" stroke-opacity="0.35"/></svg>',
    antibodies: ["Anti-dsDNA", "Anti-histone"],
    antibodyTagClass: "tag-antibody",
    diseases: ["SLE", "Drug-induced lupus"]
  },
  {
    name: "Speckled",
    accent: "var(--dapi-blue)",
    desc: "Discrete speckles throughout the nucleus. The classic ENA pattern \u2014 fine or coarse.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#08110b"/><circle cx="28" cy="28" r="21" fill="none" stroke="#4ee07a" stroke-opacity="0.18"/><circle cx="28" cy="28" r="13" fill="#4ee07a" fill-opacity="0.1" stroke="#4ee07a" stroke-opacity="0.35"/><circle cx="22" cy="22" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="27" cy="19.5" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="33" cy="21" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="20" cy="27.5" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="25" cy="25.5" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="31" cy="26" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="36" cy="27" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="22" cy="33" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="27" cy="31" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="33" cy="32" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="25" cy="36.5" r="1.3" fill="#4ee07a" fill-opacity="0.85"/><circle cx="31" cy="37" r="1.3" fill="#4ee07a" fill-opacity="0.85"/></svg>',
    antibodies: ["Anti-Sm", "Anti-RNP", "Anti-Ro (SSA)", "Anti-La (SSB)"],
    antibodyTagClass: "tag-antibody",
    diseases: ["SLE", "Sj\u00f6gren's", "MCTD"]
  },
  {
    name: "Centromere",
    accent: "var(--rhodamine-red)",
    desc: "Discrete dots corresponding to centromeres \u2014 count ~46 dots per cell in metaphase.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#08110b"/><circle cx="28" cy="28" r="21" fill="none" stroke="#4ee07a" stroke-opacity="0.18"/><circle cx="28" cy="28" r="13" fill="#4ee07a" fill-opacity="0.06" stroke="#4ee07a" stroke-opacity="0.35"/><circle cx="21" cy="23" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="25" cy="20" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="29" cy="19" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="33" cy="21" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="36" cy="25" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="19" cy="28" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="23" cy="27" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="27" cy="24" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="31" cy="25.5" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="35" cy="30" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="21" cy="33" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="25" cy="31" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="29" cy="29" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="33" cy="34" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="24" cy="36" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="28" cy="34" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="31" cy="38" r="0.8" fill="#4ee07a" fill-opacity="1"/><circle cx="37" cy="28.5" r="0.8" fill="#4ee07a" fill-opacity="1"/></svg>',
    antibodies: ["Anti-centromere (CENP-B)"],
    antibodyTagClass: "tag-antibody",
    diseases: ["Limited cutaneous SSc (CREST)", "Primary biliary cholangitis"]
  },
  {
    name: "Nucleolar",
    accent: "var(--amber-warn)",
    desc: "Bright staining confined to nucleoli \u2014 fewer, larger fluorescent regions within the nucleus.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#08110b"/><circle cx="28" cy="28" r="21" fill="none" stroke="#4ee07a" stroke-opacity="0.18"/><circle cx="28" cy="28" r="13" fill="#4ee07a" fill-opacity="0.1" stroke="#4ee07a" stroke-opacity="0.35"/><circle cx="23" cy="25" r="3.2" fill="#4ee07a" fill-opacity="0.85"/><circle cx="32.5" cy="23.5" r="3.2" fill="#4ee07a" fill-opacity="0.85"/><circle cx="28" cy="33" r="3.2" fill="#4ee07a" fill-opacity="0.85"/></svg>',
    antibodies: ["Anti-Scl-70", "Anti-PM-Scl", "Anti-fibrillarin", "Anti-RNA Pol III"],
    antibodyTagClass: "tag-antibody",
    diseases: ["Diffuse cutaneous SSc", "Scleroderma-myositis overlap"]
  },
  {
    name: "Cytoplasmic",
    accent: "#cc88ff",
    desc: "Staining in the cytoplasm rather than the nucleus. Technically not \"ANA\" \u2014 but reported on the same test.",
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#08110b"/><circle cx="28" cy="28" r="21" fill="#4ee07a" fill-opacity="0.45"/><circle cx="28" cy="28" r="13" fill="#08110b" stroke="#4ee07a" stroke-opacity="0.25"/></svg>',
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
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#08110b"/><circle cx="28" cy="28" r="21" fill="#4ee07a" fill-opacity="0.5"/><circle cx="22.5" cy="24.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/><circle cx="33.5" cy="24.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/><circle cx="28" cy="33.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/><circle cx="28" cy="28" r="2.6" fill="#4ee07a" fill-opacity="0.9"/></svg>',
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
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#08110b"/><circle cx="28" cy="28" r="21" fill="none" stroke="#4ee07a" stroke-opacity="0.18"/><circle cx="22.5" cy="24.5" r="6.5" fill="none" stroke="#4ee07a" stroke-width="4" stroke-opacity="0.9"/><circle cx="33.5" cy="24.5" r="6.5" fill="none" stroke="#4ee07a" stroke-width="4" stroke-opacity="0.9"/><circle cx="28" cy="33.5" r="6.5" fill="none" stroke="#4ee07a" stroke-width="4" stroke-opacity="0.9"/><circle cx="22.5" cy="24.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/><circle cx="33.5" cy="24.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/><circle cx="28" cy="33.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/></svg>',
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
    svg: '<svg viewBox="0 0 56 56"><rect width="56" height="56" fill="#08110b"/><circle cx="28" cy="28" r="21" fill="#4ee07a" fill-opacity="0.18"/><circle cx="22.5" cy="24.5" r="6.5" fill="none" stroke="#4ee07a" stroke-width="2.5" stroke-opacity="0.4"/><circle cx="33.5" cy="24.5" r="6.5" fill="none" stroke="#4ee07a" stroke-width="2.5" stroke-opacity="0.4"/><circle cx="28" cy="33.5" r="6.5" fill="none" stroke="#4ee07a" stroke-width="2.5" stroke-opacity="0.4"/><circle cx="22.5" cy="24.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/><circle cx="33.5" cy="24.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/><circle cx="28" cy="33.5" r="6.5" fill="#08110b" stroke="none" stroke-width="0" stroke-opacity="1"/></svg>',
    targetLabel: "Target Antigens",
    antibodies: ["Lactoferrin, BPI, elastase, cathepsin G"],
    antibodyTagClass: null,
    diseases: ["IBD (especially UC)", "PSC", "Autoimmune hepatitis"],
    detail: "NOT associated with primary vasculitis. Common trap \u2014 positive ANCA in IBD/liver disease \u2260 vasculitis. PR3/MPO will be negative."
  }
];
