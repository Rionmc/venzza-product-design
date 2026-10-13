# Venzza Design System

This folder is the code copy of the **Venzza Design System** artifact in Claude, which is the single source of truth. Change the system there, then sync it here. Don't edit these files on their own.

| File | What it is |
|---|---|
| `tokens.css` | Every token: colour ramps, semantic colours (dark and light), spacing, radius, borders, shadows, type and the brand/marketing layer. |
| `components.css` | The full `vz-` component and layout library. It `@import`s `tokens.css`. |
| `venzza.js` | Mounts the 108-icon sprite and exposes `window.Venzza` (`mountIcons()`, `icon(name, cls)`). |
| `icons.svg` | The same sprite as a file (`<symbol id="i-…">`). |
| `tokens.json` | Tokens as data: themes, colours with usage notes, type styles, spacing, radius, shadow. |
| `components.html` | A browsable catalog of all 99 cards (foundations, components, templates, brand), with a dark/light toggle. |
| `logos/` | The 12 logo source SVGs. |
| `docs/` | `Logo.md`, `Brand.md`, `Voice.md`, `Motion.md`, and `COMPONENTS.md` (guidance for every card). |

Venzza is an electric-lime brand on a dark, enterprise-grade product theme. Every screen is built from this system: the tokens, the `vz-` component classes in `components.css`, and the icon sprite. Nothing is invented or approximated. If something is missing, compose it from existing tokens and primitives, or propose an addition (see the last section).

## Non-negotiable rules

- **Theme.** Dark is the default: set `data-theme="dark"` on `<html>`. The light theme uses the same tokens, so switch themes by changing that attribute. Never hard-code a colour.
- **Colour.** Reference tokens only, never hex. The accent is `--cta-default` (`--lime-400`, #C8FF2C), with `--text-on-cta` on top of it. Surfaces step `--bg-canvas` → `--bg-surface` → `--bg-surface-raised`, with `--bg-inset` for wells. Text uses `--text-primary` / `--text-secondary` / `--text-tertiary`. Borders use `--border-subtle` / `--border-default` / `--border-strong`.
- **Type.** `--font-marketing` (Helvetica Neue) is for headings and figures, `--font-product` (system SF Pro / Segoe / Roboto) for all UI text, and `--font-mono` for labels, metadata, counts and code. Don't use any other font. System fonts only, so there is nothing to download.
- **Spacing and shape.** Use `--space-1…13` (2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px). Buttons and inputs take `--radius-md`. `--radius-pill` is only for chips, badges, counts and tracks, never buttons. Cards, stat tiles and dialogs take `--radius-xl`. Borders are `--bw-hairline`. Depth comes from `--shadow-1…3`. Every focus-visible state is `--focus-ring`.
- **Components.** Reuse the classes exactly: `vz-btn` (+ `--primary/secondary/tertiary/ghost/link/danger`, `sm`/`lg`), `vz-field`/`vz-label`/`vz-input`/`vz-select`/`vz-textarea`/`vz-help`, `vz-badge`, `vz-card`, `vz-alert`, `vz-table`, `vztablist`/`vztab`, `vzstat`, `vzav`, `vz-prog`, `vzdlg`, `vztoast`, `vzsteps`, `vznav`. Don't restyle or rename them, and don't build parallel components.
- **Layout.** Every product screen uses the app shell: the `.vznav` sidebar plus `.main` (the 60px `.topbar` and a `.canvas` up to 1180px wide). Content sits in rounded cards on `--bg-surface` separated by hairline dividers.

## Consuming

Load `components.css`, which imports `tokens.css`. It is the full stylesheet, apart from the contrast adjustments listed under Visual foundations, including `--focus-ring`, the `--signal-*` and `--mk-*` layers, and the `data-radius="tight|sharp"` previews. Then load `venzza.js`. It mounts the icon sprite and exposes `window.Venzza` (`mountIcons()`, `icon(name, cls)`, `icons`).

```html
<html data-theme="dark">
  <link rel="stylesheet" href="components.css">
  <script src="venzza.js"></script>
  <button class="vz-btn vz-btn--primary"><svg class="vz-icon"><use href="#i-plus"/></svg>New project</button>
</html>
```

## Content fundamentals

- **Voice:** direct, calm and operational. You're talking to a producer running campaigns, not selling to them. Write in second person and sentence case.
- **Buttons** start with a verb and use one or two words: "New project", "Open project", "Retry", "Delete". Put destructive actions in a dialog that names the object: "Delete project?", then "**Aurora Field Sessions** and its 4 packages will be removed. This can't be undone."
- **Labels and metadata** go in mono uppercase: `.eyebrow`, `.vz-table th`, `.kicker`. Dates look like "Oct 12 – Nov 30". Figures are compact: "480K", "2.4M", "$12.4K".
- **Status words** are short and always sit beside their colour: Published, Draft, In review, Operational, Degraded.
- **No emoji.** The only glyphs are the ✓, i and ! inside `.vz-alert .ic`.

## Visual foundations

- **Colour.** The product is neutral-first. Lime is spent sparingly, only on the primary action, the active nav item (`--cta-subtle-bg` with lime text), the current or done step, selected tab underlines, the current page and progress fills. Status colour always comes through the `--status-{success|warning|error|info}-{bg|border|solid|text}` quartets. `--signal-*` and `--mk-*` are the marketing layer. Don't use them in product UI.
- **Surfaces.** In dark: canvas is neutral-950, surface is neutral-900, raised is neutral-800, and fields sit in wells on neutral-950 (`--field-bg`). On detail pages, stat tiles (`--bg-surface-raised`) sit on `--bg-surface` so they read as raised.
- **Type scale.** Marketing: stat value 30/700 (-0.02em), page title 22/600 (-0.02em), dialog title 19/600, card title 18/700, section title 16/700, callout title 15. Product: body 14/1.5, label 13/500, caption 12. Mono: 11px uppercase, tracked .06–.14em. Marketing display type (`--brand-display`, `--mk-display-*`) is for the marketing site only.
- **Borders and shadows.** Use a hairline `--border-subtle` for every divider and outline. `--shadow-2` goes on cards and `--shadow-3` on overlays (dialogs, drawers, toasts, FAB) and card hover. On hover, borders go up one step (`--border-strong`) and interactive cards lift 2px.
- **States.** Hover moves one surface or border step. Focus is `--focus-ring` (a 2px lime ring plus a 4px 25% lime halo). Disabled uses `--cta-disabled` / `--text-disabled`, or opacity .42 on tabs and pagination. Invalid inputs use `aria-invalid="true"`, which gives an `--error-500` border and `.vz-help.err`.
- **Motif.** The circled-V mark and its rotated-square "diamond". In product UI the diamond appears as `.pj .di`, a 9px lime-outlined square rotated 45°, marking project rows.
- **Motion.** Short and functional: .12–.2s transitions, and toasts slide in. `prefers-reduced-motion` turns animation off globally.
- **Contrast.** Every text token passes 4.5:1 on canvas and surfaces in dark. In light, `--text-tertiary` is neutral-600 (≈4.35:1 on white). That is the darkest step that stays distinct from `--text-secondary`, so keep tertiary for metadata, never for essential copy. In light, lime text on lime fills uses `--lime-800` (≈7.3:1) and lime icons use `--lime-700`. `--status-warning-text` is warning-800 in light (≈5.7:1). Destructive menu items use `--status-error-text` in dark. These contrast adjustments were approved on 2026-10-01 and are the only places the system departs from the original source CSS.

## How the Components view is organised

It follows the design library in the same order:

- **Foundations:** logo, typography, spacing and elevation.
- **Component families:** Buttons, Forms & inputs, Selects & menus, Dialogs & overlays, Feedback & status, Navigation, Data display. Each family has an Anatomy card, a card for every variant and state, a Tokens card and an Accessibility card.
- **Templates:** Dashboard, Project detail, Create project, App shell, Top-nav app shell, Campaigns, New campaign, Campaign board, New project, Edit project.
- **Marketing blocks.**
- **Brand:** the expressive dialect, used for marketing surfaces only.

**Navigation model:** the top header (`.vzhdr`, see NavTopHeader) is the primary navigation going forward. Use TopNavShellTemplate for new screens. The sidebar (`.vznav`) stays available for dense tool areas, placed under the header.

Build screens by starting from the closest template and composing components exactly as their previews show: the same markup, the same classes, no new styles.

## Iconography

Use only the sprite: 108 symbols with the `i-` prefix, made up of the 46 from `icons.svg` plus the 61 your design library uses and `log-out` for the header account menu, all mounted by `venzza.js`. The icons are stroke icons on a 24×24 grid with a 2px stroke (`--icon-stroke`) and round caps and joins, Lucide-style. Render them as `<svg class="vz-icon"><use href="#i-name"/></svg>`. They inherit `currentColor`, so they theme automatically. Sizes are `.sm` 16px, the default 20px, and `.lg` 24px. `.vz-icon--fill` gives solid glyphs. Don't draw icons or import them from anywhere else. Filled state pairs (`star-fill`, `heart-fill`, `bell-fill`, `bookmark-fill`, `flag-fill`, `circle-fill`) mark selected or active states, and the status badges (`circle-check-fill`, `circle-x-fill`, `circle-alert-fill`, `info-fill`) knock out to `--icon-knockout`. If a screen needs an icon that isn't in the sprite, propose adding it rather than drawing one.

## Logo

Use only the source SVGs in `logos/`, and never redraw the mark. For the forms, clear space, minimum sizes, colour rules and lockup proportions, see `docs/Logo.md`.

## Extending the system

When a request can't be met with existing tokens or components, don't deviate silently. Say what is missing and propose an addition that follows the existing conventions: a `vz`-prefixed class built only from existing tokens, with states (hover, focus via `--focus-ring`, disabled) and both themes covered.
