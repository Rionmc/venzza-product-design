# Venzza Design System

The complete, canonical design language for Venzza — an electric‑lime brand on a dark, enterprise‑grade product theme. This folder is the **import‑ready source of truth**, regenerated **verbatim** from the app's single‑source stylesheet: same tokens, same component rules, pixel‑for‑pixel.

## Files

| File | Purpose |
|------|---------|
| `tokens.css` | The full token layer, verbatim — every color ramp, semantic color (light + dark), spacing, radius (incl. tight/sharp previews), border, shadow, and type token, plus the brand/marketing signal layer. |
| `components.css` | The entire component + layout library, verbatim. `@import`s `tokens.css`. Together the two files equal the original stylesheet exactly. |
| `icons.svg` | The icon sprite (`<symbol id="i-…">`) used across components. |
| `components.html` | A visual catalog rendered from the real CSS + sprite. Open it to see the system. |
| `USAGE.md` | **Build conventions** — the rules Claude Design should follow so rebuilds match (dark default, semantic tokens only, canon vs non-canon, self-check). Read this first. |
| `references/` | Full app pages built entirely from this system (my-projects, project detail, onboarding). Import these as example compositions so generated screens match how Venzza actually assembles — not just correct components arranged generically. |

Loading `components.css` alone is enough (it imports the tokens). Split into two files only so the tokens are easy to read and reuse.

## Brand

- **Accent:** electric lime — `--cta-default` → `--lime-400` `#C8FF2C`
- **Theme:** dark by default (`--bg-canvas` `#131517`); a full light theme ships in the same tokens (toggle `data-theme` on `<html>`).
- **Type:** `--font-marketing` (Helvetica Neue), `--font-product` (system SF Pro / Segoe / Roboto stack), `--font-mono` (SF Mono stack). System fonts — nothing to download.
- **Motif:** rotated‑square "diamond" mark; squared Venzza logo.

## Tokens

Primitives `--neutral-50…950`, `--lime-50…950`, and `--success/warning/error/info-*` ramps; semantic `--bg-*`, `--text-*`, `--border-*`, `--cta-*`, `--status-*`; `--space-1…13`, `--radius-xs…pill`, `--bw-*`, `--shadow-1…3`, `--focus-ring`; and the `--signal-*` / `--mk-*` brand layer.

## Components (`vz-` and friends)

Buttons (primary/secondary/tertiary/ghost/link/danger, sizes, split, group, FAB), badges, avatars + groups, cards, inputs · select · textarea (`vz-field`/`vz-label`/`vz-help`), checkbox, switch, floating‑label + affix fields, selects/menus/combobox/token input, tabs (line + pill + vertical), breadcrumbs, pagination, steps/wizard, sidebar nav, dialogs · drawers · sheets, tooltips, popovers, toasts, banners, callouts, status dots + health pills, tables + data table, lists + description lists, repeater rows, empty states, date picker + range calendar, file upload + gallery, progress bar + ring, checklist nav, sliders (single + range), bar/donut charts, KPI stats, matrix, plus campaign/project organisms (project card, campaign card, kanban, accordion) and the app‑shell + onboarding layout so full pages render 1:1.

## Usage

```html
<html data-theme="dark">
<head><link rel="stylesheet" href="components.css"></head>
<body>
  <button class="vz-btn vz-btn--primary">Get started</button>
  <!-- icons: paste icons.svg once near <body>, then: -->
  <svg class="vz-icon"><use href="#i-plus"/></svg>
</body>
```

## Importing into Claude Design

Claude Design imports a design system from a **GitHub repo**, **design files/uploads**, or a **local codebase via `/design-sync`**. This folder is committed to the repo — add it as the source and import **`tokens.css` + `components.css`** (the real values). `components.html` is the human‑readable catalog; `icons.svg` is the sprite.

For full‑page layout references (how these components compose into real screens), the app pages in the parent `v2/` folder — onboarding, project detail, campaign detail, lists — are built entirely from this system.

> Regenerated verbatim from the canonical single‑source stylesheet, so the imported system matches the app down to the token and the pixel.
