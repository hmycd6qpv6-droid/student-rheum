export const ancaAntibodies = [
  {name:"PR3-ANCA",aka:"Proteinase-3",pattern:"c-ANCA",diseases:["GPA"],notes:"~90% GPA. Titre may correlate with activity but routine monitoring controversial. Can be seen in limited GPA (ENT-only)."},
  {name:"MPO-ANCA",aka:"Myeloperoxidase",pattern:"p-ANCA",diseases:["MPA","EGPA","Pauci-immune GN","Drug-induced vasculitis"],notes:"Hallmark of MPA. Also ~40% EGPA. Drug-induced ANCA vasculitis (hydralazine, PTU, minocycline) is usually MPO-positive."},
  {name:"Anti-GBM",aka:"Glomerular Basement Membrane",pattern:"\u2014",diseases:["Goodpasture's","Double-positive vasculitis"],notes:"Not an ANCA \u2014 but must be checked alongside. ~30% of anti-GBM patients are also ANCA (usually MPO) positive. 'Double-positive' disease behaves more like vasculitis."},
  {name:"Atypical ANCA",aka:"x-ANCA (lactoferrin, BPI, elastase)",pattern:"Atypical",diseases:["IBD (especially UC)","PSC","Autoimmune hepatitis"],notes:"NOT associated with primary vasculitis. Positive ANCA in IBD/liver disease \u2260 vasculitis. PR3/MPO will be negative."},
];
