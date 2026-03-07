import { anaAntibodies } from './data/ana-antibodies.js';
import { anaDiseases } from './data/ana-diseases.js';
import { anaMyths } from './data/ana-myths.js';
import { ancaAntibodies } from './data/anca-antibodies.js';
import { ancaDiseases } from './data/anca-diseases.js';
import { ancaMyths } from './data/anca-myths.js';
import { anaPatterns, ancaPatterns } from './data/patterns.js';
import { renderAbTable, renderPatterns, renderDiseases, renderMyths, renderSummaries } from './renderers.js';
import { anaSummaries } from './data/ana-summaries.js';
import { ancaSummaries } from './data/anca-summaries.js';
import { setQuizMode, resetQuiz, answerQ, navQuiz, jumpTo } from './quiz.js';
import { switchModule, toggleCard, initTabListeners, initFilterListeners, initFromQueryParams } from './navigation.js';
import { anaCases } from './data/ana-cases.js';
import { ancaCases } from './data/anca-cases.js';
import { initCases } from './cases.js';

// ANA column mapper: category badge + malignancy flag
function anaColumnMapper(ab) {
  const cl = ab.cat === 'ena' ? 'cat-ena' : ab.cat === 'msa' ? 'cat-myositis-specific' : 'cat-myositis-associated';
  const lb = ab.cat === 'ena' ? 'ENA / Core' : ab.cat === 'msa' ? 'Myositis-Specific' : 'Myositis-Assoc';
  const ml = ab.malig ? '<div class="malig-flag">Malignancy association</div>' : '';
  return `<span class="ab-category ${cl}">${lb}</span>${ml}`;
}

// ANCA column mapper: IF pattern badge
function ancaColumnMapper(ab) {
  return `<span class="ab-category cat-anca-assoc">${ab.pattern}</span>`;
}

// Helper for ANA table rendering with filter
function renderAnaTable(filter = 'all') {
  renderAbTable({ targetId: 'anaAbTableBody', data: anaAntibodies, nameClass: 'ab-name', columnMapper: anaColumnMapper, filter });
}

// Expose functions to window for onclick attributes
window.switchModule = switchModule;
window.toggleCard = toggleCard;
window.setQuizMode = setQuizMode;
window.resetQuiz = resetQuiz;
window.answerQ = answerQ;
window.navQuiz = navQuiz;
window.jumpTo = jumpTo;

// Render all content
renderPatterns('anaPatternGrid', anaPatterns);
renderPatterns('ancaPatternGrid', ancaPatterns);
renderAnaTable();
renderAbTable({ targetId: 'ancaAbTableBody', data: ancaAntibodies, nameClass: 'ab-name-anca', columnMapper: ancaColumnMapper });
renderDiseases('anaDiseaseGrid', anaDiseases, false);
renderDiseases('ancaDiseaseGrid', ancaDiseases, true);
renderMyths('anaMythsContainer', anaMyths);
renderMyths('ancaMythsContainer', ancaMyths);
renderSummaries('anaSummaryContainer', anaSummaries);
renderSummaries('ancaSummaryContainer', ancaSummaries);
resetQuiz('ana');
resetQuiz('anca');
initCases('anaCaseContainer', anaCases, 'ana');
initCases('ancaCaseContainer', ancaCases, 'anca');

// Init event listeners
initTabListeners();
initFilterListeners(renderAnaTable);
initFromQueryParams();
