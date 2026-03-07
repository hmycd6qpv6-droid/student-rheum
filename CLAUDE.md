# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"The Autoantibody Lab" — a static, client-side rheumatology teaching web app for medical students and trainees. It covers two modules: **ANA & ENA** (including myositis antibodies) and **ANCA & Vasculitis**. Each module has five tabs: IF Patterns, Antibody Index, Disease Map, Myth Busters, and Quiz.

## Development

No build tools, bundler, or package manager. Pure HTML/CSS/JS with ES modules. To run locally, serve with any static file server (files use ES module imports, so `file://` won't work):

```sh
python3 -m http.server 8000
# or
npx serve .
```

There are no tests, linters, or CI pipelines.

## Architecture

**Entry point:** `index.html` loads CSS files and bootstraps via `<script type="module" src="js/app.js">`.

**JS modules (`js/`):**
- `app.js` — Entry point. Imports all data and modules, defines column mappers (ANA category badges, ANCA pattern badges), wires `renderAnaTable` with filter support, exposes functions to `window` for inline `onclick` handlers, calls all renderers, and inits event listeners.
- `renderers.js` — Four pure rendering functions (`renderAbTable`, `renderPatterns`, `renderDiseases`, `renderMyths`) that generate HTML strings and inject via `innerHTML` into container elements.
- `quiz.js` — Quiz state machine (`QS` object holds per-module state). Exports `setQuizMode`, `resetQuiz`, `answerQ`, `navQuiz`, `jumpTo`, `renderQuiz`.
- `navigation.js` — Module switching (ANA/ANCA), tab navigation, expandable card toggle, filter bar listeners.

**Data layer (`js/data/`):** Each file exports a single array of objects. Naming convention: `{module}-{content}.js` (e.g., `ana-antibodies.js`, `anca-quiz.js`). Data files: `patterns.js` (exports both `anaPatterns` and `ancaPatterns`), `ana-antibodies.js`, `ana-diseases.js`, `ana-myths.js`, `ana-quiz.js`, `anca-antibodies.js`, `anca-diseases.js`, `anca-myths.js`, `anca-quiz.js`.

**CSS (`css/`):** Split into `variables.css` (design tokens/custom properties), `base.css`, `layout.css`, `components.css`. Dark theme with fluorescence microscopy-inspired palette (FITC green, DAPI blue, rhodamine red, amber, cyan).

**Legacy file:** `ana-ena-teaching.html` is the original monolithic version before decomposition into modules. The active app is `index.html`.

## Key Conventions

- Two parallel module structures (ANA and ANCA) follow identical patterns — tabs, sections, data shapes, and rendering all mirror each other. When adding content to one module, consider the other.
- Interactive elements use inline `onclick` attributes that call functions exposed on `window` from `app.js`.
- Tab navigation uses `data-module` and `data-tab` attributes; sections use `id="sec-{tab-name}"` convention.
- Antibody data objects have: `name`, `aka`, `cat` (category), `diseases` (array), `notes`, and optionally `malig` (boolean).
- Pattern data objects have: `name`, `accent`, `desc`, `svg` (inline SVG string), `antibodies`, `diseases`, and optionally `detail`, `nameColor`, `targetLabel`, `antibodyTagClass`.
- Quiz questions have: `type` ("vignette" or "tf"), `q`, `opts` (array), `correct` (index), `explanation`.
- CSS active states differ per module: `.active` for ANA, `.active-anca` for ANCA (cyan accent).
