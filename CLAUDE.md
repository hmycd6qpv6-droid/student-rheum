# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"The Autoantibody Lab" — a static, client-side rheumatology teaching web app for medical students and trainees. It covers three modules: **ANA & ENA** (including myositis antibodies), **ANCA & Vasculitis**, and **Joints & Serology** (joint patterns, RF, anti-CCP, HLA-B27, crystal arthropathies). Each module has seven tabs: IF/Joint Patterns, Antibody/Marker Index, Disease Map, Myth Busters, Quiz, Cases, and Summary.

## Development

No build tools, bundler, or package manager. Pure HTML/CSS/JS with ES modules. To run locally, serve with any static file server (files use ES module imports, so `file://` won't work):

```sh
python3 -m http.server 8000
# or
npx serve .
```

There are no tests, linters, or CI pipelines.

## Architecture

**Hub-and-spoke structure:**
- `index.html` — Hub/landing page with module cards and progress display. Loads `js/hub.js`.
- `module.html` — Module page (previously `index.html`). Loads `js/app.js`. Accepts `?module=ana|anca|joints` and `?tab=...` query params.

**JS modules (`js/`):**
- `app.js` — Module page entry point. Imports all data and modules, defines column mappers, wires renderers, exposes functions to `window` for inline `onclick` handlers, and inits event listeners including query param handling.
- `hub.js` — Hub page entry point. Renders module cards with progress data from localStorage, and quick-access links.
- `renderers.js` — Five pure rendering functions (`renderAbTable`, `renderPatterns`, `renderDiseases`, `renderMyths`, `renderSummaries`) that generate HTML strings and inject via `innerHTML`.
- `quiz.js` — Quiz state machine (`QS` object holds per-module state). Saves best scores to localStorage on completion. Exports `setQuizMode`, `resetQuiz`, `answerQ`, `navQuiz`, `jumpTo`, `renderQuiz`.
- `cases.js` — Branching clinical case engine. Vertical scrolling playthrough with presentation, reflect, decision and conclusion nodes. Options are shuffled and graded best/good/poor/unsafe; the conclusion shows a debrief of the student's choices and links to the Year 4 syllabus. Integrates with `progress.js` for persistence. Exports `initCases`, `renderCaseList`, `startCase`, `renderNode`, `advanceCase`, `revealReflect`, `selectCaseOption`.
- `navigation.js` — Module switching (ANA/ANCA/Joints), tab navigation, expandable card toggle, filter bar listeners, query param handling. Uses `activeClass()` helper for module-specific active states. Exports `switchModule`, `switchTab`, `initFromQueryParams`, `toggleCard`, `initTabListeners`, `initFilterListeners`.
- `progress.js` — localStorage persistence under `rheum-lab-progress` key. Exports `loadProgress`, `saveProgress`, `getQuizBest`, `saveQuizScore`, `getCaseProgress`, `saveCaseProgress`, `getModuleProgress`, `saveLastVisited`, `restoreLastVisited`, `resetProgress`.

**Data layer (`js/data/`):** Each file exports a single array of objects. Exception: cases live one per file in `js/data/cases/<id>.js` (default export), and `{module}-cases.js` imports them into the array. `curriculum.js` holds the Year 4 MSK syllabus codes (source: `docs/curriculum/msk-syllabus-2026-27.md`) that cases link to. Naming convention: `{module}-{content}.js`. Data files: `patterns.js`, `ana-antibodies.js`, `ana-diseases.js`, `ana-myths.js`, `ana-quiz.js`, `ana-cases.js`, `ana-summaries.js`, `anca-antibodies.js`, `anca-diseases.js`, `anca-myths.js`, `anca-quiz.js`, `anca-cases.js`, `anca-summaries.js`, `joints-patterns.js`, `joints-markers.js`, `joints-diseases.js`, `joints-myths.js`, `joints-quiz.js`, `joints-cases.js`, `joints-summaries.js`.

**CSS (`css/`):** Split into `variables.css` (design tokens), `base.css`, `layout.css`, `components.css` (includes summary card styles), `hub.css` (hub page), `cases.css` (case engine), `print.css` (print media query for summaries). Dark theme with fluorescence microscopy-inspired palette (FITC green, DAPI blue, rhodamine red, amber, cyan).

**Legacy file:** `ana-ena-teaching.html` is the original monolithic version before decomposition into modules.

## Key Conventions

- Three parallel module structures (ANA, ANCA, Joints) follow identical patterns — tabs, sections, data shapes, and rendering all mirror each other. When adding content to one module, consider the others.
- Interactive elements use inline `onclick` attributes that call functions exposed on `window` from `app.js` or `cases.js`.
- Tab navigation uses `data-module` and `data-tab` attributes; sections use `id="sec-{tab-name}"` convention.
- Antibody data objects have: `name`, `aka`, `cat` (category), `diseases` (array), `notes`, and optionally `malig` (boolean).
- Pattern data objects have: `name`, `accent`, `desc`, `svg` (inline SVG string), `antibodies`, `diseases`, and optionally `detail`, `nameColor`, `targetLabel`, `antibodyTagClass`.
- Quiz questions have: `type` ("vignette" or "tf"), `q`, `opts` (array), `correct` (index), `explanation`.
- Case data objects have: `id`, `title`, `summary`, `setting`, `difficulty`, `curriculum` (syllabus codes), `objectives`, `nodes`. Full schema and quality rules: `docs/case-authoring.md`. When adding a case file, also add it to `service-worker.js` and bump `CASE_TOTALS` in `hub.js`.
- Summary data objects have: `type` ("top5" | "comparison" | "shortcut" | "cheatsheet"), `title`, `content` (type-specific).
- CSS active states differ per module: `.active` for ANA (green), `.active-anca` for ANCA (cyan), `.active-joints` for Joints (amber).
- Joints marker data objects use `cat` values: `"sero"`, `"genetic"`, `"acute"` with corresponding CSS classes `cat-joints-sero`, `cat-joints-genetic`, `cat-joints-acute`.
- Progress is persisted in localStorage under `rheum-lab-progress` key.
