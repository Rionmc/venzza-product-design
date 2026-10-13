# Venzza — Build Conventions

Rules for rebuilding or extending Venzza in Claude Design. The goal: any
new screen should be indistinguishable from the screens in `references/`.
When in doubt, match the references and the `components.html` catalog.

## Non-negotiables

1. **Import, don't reinvent.** Style everything from `tokens.css` +
   `components.css` and the `vz-` classes already defined. Do not invent
   new colors, new spacing values, or parallel component styles. If a
   pattern is missing, compose it from existing tokens and components.
2. **Dark theme is the default.** Every page starts
   `<html data-theme="dark">`. A full light theme exists in the same
   tokens; only use it when explicitly asked.
3. **Accent is electric lime — `#C8FF2C`** (`--cta-default` → `--lime-400`).
   There is no teal or mint in this system. If you see teal, it's wrong.

## Tokens: use roles, not raw values

Build from the **semantic role tokens**, not the raw ramps:

- Surfaces: `--bg-canvas`, `--bg-surface`, `--bg-surface-raised`, `--bg-inset`
- Text: `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-link`
- Borders: `--border-subtle`, `--border-default`, `--border-strong`, `--border-focus`
- Action: `--cta-default` / `--cta-hover` / `--cta-active` (never hard-code lime)
- Status: `--status-{success|warning|error|info}-*`
- Elevation: `--shadow-1..3`; focus: `--focus-ring`

Reaching for `--neutral-800` or `#C8FF2C` directly is the tell of a
generic rebuild. Use the role token so light/dark and future retints hold.

## Spacing, radius, type

- Spacing only from the `--space-1..13` scale (2 → 96px). No arbitrary px.
- Radius only from `--radius-xs..2xl` / `--radius-pill`. Leave
  `data-radius` unset (the tight/sharp variants are opt-in previews).
- Type: `--font-product` for UI, `--font-marketing` for headings,
  `--font-mono` for labels/metadata/eyebrows. System stacks — nothing to load.

## Do NOT use for product UI

These exist but belong to the brand/marketing showcase only (the `.mk-*`
classes). They are fenced off at the bottom of `tokens.css`:

- `--signal-*` — a lime *alias* for the marketing layer, not a second accent.
- `--mk-*` — marketing display type, glass, blur, motion, wide spacing.
- `--warm-*` — placeholder gradients standing in for photography (not final).

Building a normal product screen (dashboard, list, detail, form) with any
of these is a mistake — use the PRODUCT CANON roles instead.

## Components: what exists

Buttons (primary/secondary/tertiary/ghost/link/danger, sizes, split,
group, FAB), badges, avatars + groups, cards, inputs · select · textarea
(`vz-field`/`vz-label`/`vz-help`), checkbox, switch, floating-label +
affix fields, combobox/token input, tabs (line/pill/vertical),
breadcrumbs, pagination, steps/wizard, sidebar nav, dialogs · drawers ·
sheets, tooltips, popovers, toasts, banners, callouts, status dots +
health pills, tables + data table, lists + description lists, repeater
rows, empty states, date picker + range calendar, file upload + gallery,
progress bar + ring, checklist nav, sliders (single + range), bar/donut
charts, KPI stats, matrix, plus project/campaign organisms (project card,
campaign card, kanban, accordion) and the app-shell + onboarding layout.

Icons: paste `icons.svg` once near `<body>`, then
`<svg class="vz-icon"><use href="#i-name"/></svg>` (currentColor-driven).

## Reference screens (`references/`)

Full pages built entirely from this system. They show how components
compose — shell layout, spacing rhythm, density. Match them for whole-page
fidelity; don't just arrange correct components generically.

- `01-my-projects.html` — list / dashboard density and the app shell
- `02-project-detail.html` — detail layout, tabs, side panels
- `03-onboarding.html` — multi-step flow and empty/first-run states

## Self-check before shipping a screen

- Renders on `data-theme="dark"` with lime (`#C8FF2C`) as the only accent?
- Every color/space/radius traces to a token (no raw hex, no arbitrary px)?
- Only `vz-` components + PRODUCT CANON roles — no `--signal/--mk/--warm`?
- Layout density and shell match the closest `references/` page?

## Note on the JSON export

An earlier `venzza-design-tokens.json` export listed the signal color as
teal (`#6CE7D4`) plus a `mint` ramp. That contradicts the live app. **The
CSS in this folder is authoritative: signal is lime.** Ignore teal/mint.
