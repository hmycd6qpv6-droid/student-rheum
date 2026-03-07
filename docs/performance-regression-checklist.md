# Performance Regression Checklist

Run these checks after changing module content, navigation, rendering, or fonts.

## Cold Loads

- Open `module.html?module=ana`
- Open `module.html?module=anca&tab=anca-cases`
- Open `module.html?module=joints&tab=joints-summary`
- Confirm the first visible module and tab are correct with no flash of other modules.

## Navigation

- Switch between `Joints`, `ANA`, and `ANCA` from the module toolbar.
- Revisit a previously opened module and confirm switching feels immediate.
- Switch between tabs and confirm only the active tab is visible.

## Lazy Tabs

- Open each `Quiz`, `Cases`, and `Summary` tab once per module.
- Reopen the same tab and confirm content is already present.
- Confirm quiz interactions still work after leaving and returning to the tab.
- Confirm case progress still shows `In progress` and `Completed` states.

## Filters And State

- In ANA, switch antibody filters between `All`, `ENA / Core`, `Myositis-Specific`, and `Myositis-Associated`.
- In Joints, switch marker filters between `All`, `Serological`, `Genetic`, and `Acute Phase`.
- Confirm filter buttons and table rows stay in sync after switching tabs away and back.

## Persistence

- From the hub, open each module card and confirm the selected module is restored on reload.
- Complete at least one quiz and confirm hub progress still reflects the saved score.
- Start and complete at least one case and confirm hub progress still reflects completion.

## Fonts And Print

- Load `index.html` and `module.html` with network throttling or blocked external font requests and confirm typography falls back cleanly.
- Open print preview from a non-summary tab and confirm only the active module/tab prints.
- Open print preview from a summary tab and confirm summary tables/cards print correctly.
