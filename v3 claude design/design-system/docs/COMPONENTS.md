# Components

Every card in the Venzza Design System (99), in catalog order. Open `components.html` to see each one live in dark and light. Build with the exact markup and classes shown there.

## Foundations

### Logo · `FoundationLogo`

The Venzza mark is a geometric V inside a perfect circle, with a diamond at its lower convergence — the point where people, ideas, brands, and creators meet. Its idea is Connection · Alignment · Value. Everything here renders from the exact source SVGs — the single source of truth. Never redraw, re-space, or approximate the mark; download the file you need.

**Classes used:** `.vzlogo`, `.vzlogo-mark`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Typography · `FoundationTypography`

Helvetica Neue carries marketing with a mono accent for labels and data; product UI runs on the native system sans so it feels at home on every device.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Spacing & elevation · `FoundationSpacingElevation`

A 4px spatial grid, a tight radius scale, and theme-aware elevation — heavier shadows in dark so depth still reads.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Buttons

### Anatomy · `ButtonAnatomy`

The parts of the buttons and the token each one draws from.

**Family:** Buttons — Buttons carry intent. One primary action per view — the electric-green CTA — with everything else stepped down in weight so the eye always knows where to go. Below: anatomy, the full variant hierarchy, sizes, the complete state matrix, icon and compound buttons.

**Classes used:** `.vz-btn`, `.vz-btn--primary`, `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Variants · `ButtonVariants`

A clear hierarchy — primary for the main action, secondary/tertiary for alternatives, ghost and text for low-emphasis, destructive for irreversible actions.

**Family:** Buttons — Buttons carry intent. One primary action per view — the electric-green CTA — with everything else stepped down in weight so the eye always knows where to go. Below: anatomy, the full variant hierarchy, sizes, the complete state matrix, icon and compound buttons.

**Classes used:** `.vz-btn`, `.vz-btn--primary`, `.vz-btn--secondary`, `.vz-btn--tertiary`, `.vz-btn--ghost`, `.vz-btn--link`, `.vz-btn--danger`, `.vz-icon`

### Usage
Buttons trigger actions; `.vz-btn` plus exactly one variant modifier.

**Markup:** `<button class="vz-btn vz-btn--primary">Label</button>`; sizes `sm` (32px) and `lg` (48px), default 40px. Icon: put `<svg class="vz-icon"><use href="#i-plus"/></svg>` before the label. Floating action: `.vz-fab` (+ `sm`), icon only, needs `aria-label`.

- `--primary` (lime `--cta-default`, `--text-on-cta`): the ONE main action per view.
- `--secondary` (outline `--border-default`): companion actions. `--tertiary`: subtle filled neutral. `--ghost`: toolbar/low emphasis. `--link`: inline, `--text-link`.
- `--danger` (`--error-500`): destructive confirm only, usually inside a dialog.
- Shape is `--radius-md`, never `--radius-pill`. Focus uses `--focus-ring`. Disabled via the `disabled` attribute (or `aria-disabled="true"`).
- Also in the CSS: split button, joined button group (`.vz-btngroup`), loading state.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Sizes · `ButtonSizes`

Three button sizes: sm (32px), default (40px) and lg (48px); icon and label scale together.

**Family:** Buttons — Buttons carry intent. One primary action per view — the electric-green CTA — with everything else stepped down in weight so the eye always knows where to go. Below: anatomy, the full variant hierarchy, sizes, the complete state matrix, icon and compound buttons.

**Classes used:** `.vz-btn`, `.vz-btn--primary`, `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### States · `ButtonStates`

Primary shown across every state. Secondary, tertiary, ghost, and destructive follow the same pattern with their own resting colors.

**Family:** Buttons — Buttons carry intent. One primary action per view — the electric-green CTA — with everything else stepped down in weight so the eye always knows where to go. Below: anatomy, the full variant hierarchy, sizes, the complete state matrix, icon and compound buttons.

**Classes used:** `.vz-btn`, `.vz-btn--primary`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Icon buttons · `ButtonIconButtons`

Square, one glyph, always with an aria-label. Same variants and sizes as text buttons.

**Family:** Buttons — Buttons carry intent. One primary action per view — the electric-green CTA — with everything else stepped down in weight so the eye always knows where to go. Below: anatomy, the full variant hierarchy, sizes, the complete state matrix, icon and compound buttons.

**Classes used:** `.vz-btn`, `.vz-btn--primary`, `.vz-icon`, `.vz-btn--secondary`, `.vz-btn--tertiary`, `.vz-btn--ghost`, `.vz-btn--danger`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Split · Group · FAB · `ButtonCompound`

Compound buttons: the split button, the joined button group and the floating action button (FAB).

**Family:** Buttons — Buttons carry intent. One primary action per view — the electric-green CTA — with everything else stepped down in weight so the eye always knows where to go. Below: anatomy, the full variant hierarchy, sizes, the complete state matrix, icon and compound buttons.

**Classes used:** `.vz-split`, `.vz-btn`, `.vz-btn--primary`, `.vz-icon`, `.vz-split-tog`, `.vz-btngroup`, `.vz-btn--secondary`, `.vz-fab`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Tokens used · `ButtonTokens`

The tokens buttons use, and what each one controls.

**Family:** Buttons — Buttons carry intent. One primary action per view — the electric-green CTA — with everything else stepped down in weight so the eye always knows where to go. Below: anatomy, the full variant hierarchy, sizes, the complete state matrix, icon and compound buttons.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Accessibility · `ButtonAccessibility`

Accessibility requirements and do/don’t rules for buttons.

**Family:** Buttons — Buttons carry intent. One primary action per view — the electric-green CTA — with everything else stepped down in weight so the eye always knows where to go. Below: anatomy, the full variant hierarchy, sizes, the complete state matrix, icon and compound buttons.

**Classes used:** `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Forms & inputs

### Anatomy · `InputAnatomy`

The parts of the form fields and the token each one draws from.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzf`, `.vzf-label`, `.vzf-ctrl`, `.vz-icon`, `.vzf-hint`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Variants · `InputVariants`

Four container treatments. Outlined is the default — use filled for dense forms, underlined/borderless for low-chrome or inline editing.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzf`, `.vzf-label`, `.vzf-ctrl`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Floating label · eyebrow · `InputFloatingLabel`

Click into a field — the label lifts to the top edge and stays visible while you type, so the field is always labelled. Available on outlined and underlined. (Two below start filled, two start empty.).

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzfloat`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Types · `InputTypes`

Same component, tuned per input type — with the right affordance built in.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzf`, `.vzf-label`, `.vzf-ctrl`, `.vzf-btn`, `.vz-icon`, `.vzf-step`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Affordances · `InputAffordances`

Field affordances: prefix and suffix text, helper text and a live character count.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzf`, `.vzf-label`, `.vzf-ctrl`, `.vzf-hint`, `.vzf-meta`, `.vzf-count`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### States · `InputStates`

Every field, every state — the reference your team checks against. Each is driven by tokens, so both themes stay correct.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzf-ctrl`, `.vz-icon`, `.vzf-hint`, `.vz-spin`

### Usage
Form fields stack a label, a control and optional help text inside `.vz-field`.

**Markup:** `<div class="vz-field"><label class="vz-label">Label</label><input class="vz-input"><span class="vz-help">Help</span></div>`. Controls: `.vz-input`, `.vz-select`, `.vz-textarea` (background `--field-bg`, border `--border-default`, hover `--border-hover`, focus `--border-focus` + `--focus-ring`).

- Required: `<span class="req">*</span>` in the label. Error: `aria-invalid="true"` on the input and `.vz-help.err`.
- Disabled: native `disabled` (fill `--bg-inset`, text `--text-disabled`).
- `.vz-field` caps at 340px; place fields in a grid for multi-column forms.
- Also in the CSS: floating-label (`.vzfloat`), affix and clearable fields (`.vzf-*`), selects/menus/combobox (`.vzsel-*`, `.vzopt`), token input (`.vztok`).

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Textarea · `InputTextarea`

Multi-line text entry that auto-grows as you type, with a character count and an error state.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzf`, `.vzf-label`, `.vz-textarea`, `.vzf-meta`, `.vzf-hint`, `.vzf-count`, `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Selection controls · `InputSelection`

Selection controls: checkbox (incl. indeterminate), radio, switch and the segmented control.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vz-check`, `.vz-switch`, `.vzseg`

### Usage
Checkboxes select independent options; `.vz-check` wraps a native checkbox and its label.

**Markup:** `<label class="vz-check"><input type="checkbox"> Label</label>`. Accent is `--lime-500` via `accent-color`. Use for multi-select and consent; use Switch for instant on/off settings.

### Usage
Switches toggle a setting that applies immediately; `.vz-switch` with a hidden checkbox and `.track`.

**Markup:** `<label class="vz-switch"><input type="checkbox" aria-label="Setting"><span class="track"></span></label>`. On = `--lime-400` track. Always give an accessible name (visible text beside it or `aria-label`).

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Repeater · `InputRepeater`

Add, remove, and reorder a set of like items — channels, links, milestones, deliverables. One row anatomy, an “Add” affordance, and an empty first run. Drag the handle to reorder; the remove control hides once you hit the minimum. This is the workhorse behind most edit-mode sections.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzrep`, `.vzrep-row`, `.vzrep-grip`, `.vz-icon`, `.vzrep-num`, `.vzrep-fields`, `.vzf`, `.vzf-ctrl`, `.vzrep-del`, `.vzrep-add`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Date & range · `InputDate`

A typeable field with a calendar popover on our overlay foundation — click to open, arrow the months, pick a day, Esc or click-away to close. The range variant selects a start then end (it auto-orders them) and offers quick presets for the common spans.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzf`, `.vzdate`, `.vzf-label`, `.vzf-ctrl`, `.vz-icon`, `.vzrange`, `.vzrange-arrow`, `.vzrange-cal`, `.vzf-hint`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Upload & media · `InputUpload`

Drag-and-drop or click to browse, with honest progress and per-file removal. The image dropzone states its target size up front; the document dropzone auto-fills a form from a dropped file; and the gallery holds multiple images you can drag to reorder. Try it — clicking or dropping simulates an upload.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzup`, `.vzup-ic`, `.vz-icon`, `.vzup-t`, `.vzup-h`, `.vz-btn`, `.vz-btn--secondary`, `.vzup-list`, `.vzup-file`, `.vzup-fic`, `.vzup-fmain`, `.vzup-fname`, `.vzup-fmeta`, `.vzup-bar`, `.vzup-fill`, `.vzup-fx`, `.vzup-fok`, `.vzgal`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Slider · `InputSlider`

Grab the handle and slide to set a value — or click the track to jump, and use ←/→ for fine control. Great for budgets and weighting. The range variant carries two handles for a min–max span; the value bubble appears while dragging.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vzf`, `.vzf-label`, `.vzsld-out`, `.vzsld`, `.vzsld-rail`, `.vzsld-fill`, `.vzsld-handle`, `.vzsld-bubble`, `.vzsld-scale`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Tokens used · `InputTokens`

The tokens form fields use, and what each one controls.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Accessibility · `InputAccessibility`

Accessibility requirements and do/don’t rules for form fields.

**Family:** Forms & inputs — The workhorse of every form. Labeled, keyboard-first, and honest about state — the brand-green focus ring is the one flourish carried system-wide. Below: anatomy, four container variants, every input type, and the complete state matrix your team can reference at a glance.

**Classes used:** `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Selects & menus

### Anatomy · `SelectAnatomy`

The parts of a select: trigger, value, caret, panel, options and the selected mark.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vzpop`, `.vzsel-trigger`, `.vzsel-value`, `.vz-icon`, `.vzsel-caret`, `.vzpop-panel`, `.vzopt`, `.vzopt-check`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Select · `Select`

Single choice from a short list. Live — click to open.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vzf`, `.vzf-label`, `.vzpop`, `.vzpop-trigger`, `.vzsel-trigger`, `.vzsel-value`, `.vz-icon`, `.vzsel-caret`, `.vzpop-panel`, `.vzopt`, `.vzopt-check`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Trigger states · `SelectStates`

Select trigger states: default, hover, focus/open, disabled and error.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vzsel-trigger`, `.vz-icon`, `.vzsel-caret`, `.vzsel-ph`, `.vzf-hint`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Multi-select · `SelectMultiSelect`

Choose several; selections become removable chips. Panel stays open while you pick.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vzf`, `.vzf-label`, `.vzpop`, `.vzpop-trigger`, `.vzsel-trigger`, `.vzsel-chips`, `.vz-icon`, `.vzsel-caret`, `.vzpop-panel`, `.vzopt`, `.vzopt-box`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Combobox · searchable · `SelectCombobox`

Type to filter a long list. Try “s”.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vzf`, `.vzf-label`, `.vzpop`, `.vzcombo-input`, `.vzpop-panel`, `.vzopt`, `.vzpop-empty`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Menu · actions · `SelectMenu`

A list of actions — with icons, shortcuts, a separator, and a destructive item.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vzpop`, `.vzpop-trigger`, `.vz-btn`, `.vz-btn--secondary`, `.vz-icon`, `.vzpop-panel`, `.vzmenu-label`, `.vzopt`, `.vzsep`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Context menu · `SelectContextMenu`

Opens at the pointer on right-click; tap or left-click also works here for touch.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vz-icon`, `.vzopt`, `.vzsep`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Token input · `SelectTokenInput`

Freeform, create-on-type entry — for interests, labels, or tags that aren’t a fixed list. Type and press Enter (or comma) to add a chip; Backspace on an empty field removes the last one; click the × to drop any chip.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vzf-label`, `.vztok`, `.vztok-chip`, `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Tokens used · `SelectTokens`

The tokens selects and menus use, and what each one controls.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Accessibility · `SelectAccessibility`

Accessibility requirements and do/don’t rules for selects and menus.

**Family:** Selects & menus — Custom triggers and floating panels for choosing from a set or firing an action — all built on one popover foundation (click-outside and Escape to close, arrow keys + Enter to navigate). Everything here is live; open a menu and try it.

**Classes used:** `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Dialogs & overlays

### Anatomy · `OverlayAnatomy`

The parts of the overlays and the token each one draws from.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

**Classes used:** `.vzdlg`, `.vzdlg-head`, `.vzdlg-title`, `.vz-btn`, `.vz-btn--ghost`, `.vzdlg-x`, `.vz-icon`, `.vzdlg-body`, `.vzdlg-foot`, `.vz-btn--primary`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Modal · `OverlayModal`

A focused task in a centered container. Try it — open, then close with the X, Cancel, Esc, or a click on the scrim.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

**Classes used:** `.vz-btn`, `.vz-btn--primary`, `.vz-btn--secondary`, `.vzdlg-backdrop`, `.vzdlg`, `.vzdlg-head`, `.vzdlg-title`, `.vz-btn--ghost`, `.vzdlg-x`, `.vz-icon`, `.vzdlg-body`, `.vzf`, `.vzf-label`, `.vzf-ctrl`, `.vzf-hint`, `.vzdlg-foot`

### Usage
Dialogs interrupt for a decision; `.vzdlg-backdrop.open` (scrim `--bg-overlay`) wrapping `.vzdlg` (`--bg-surface-raised`, `--radius-xl`, `--shadow-3`).

Parts: `.vzdlg-head` (optional `.vzdlg-ic danger|warn|info`, `.vzdlg-title`, close `.vzdlg-x` on a ghost button), `.vzdlg-body`, `.vzdlg-foot` (secondary cancel, then the primary or danger action, right-aligned). Sizes `sm` 400px, default 460px, `lg` 680px. Drawer: `.vzdlg-backdrop.right` + `.vzdrawer`; bottom sheet: `.vzdlg-backdrop.bottom` + `.vzsheet`. Trap focus, close on Esc. (The preview positions the backdrop inside the frame.)

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Confirmation & alert · `OverlayConfirmation`

Compact alertdialogs for a single decision. Destructive confirms lead with the danger icon and a red action.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

**Classes used:** `.vz-btn`, `.vz-btn--danger`, `.vz-icon`, `.vz-btn--secondary`, `.vzdlg-backdrop`, `.vzdlg`, `.vzdlg-head`, `.vzdlg-ic`, `.vzdlg-title`, `.vzdlg-body`, `.vzdlg-foot`, `.vz-btn--ghost`, `.vz-btn--primary`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Drawer & bottom sheet · `OverlayDrawerSheet`

Edge-anchored panels for secondary flows — a side drawer for settings, a bottom sheet for quick actions on touch.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

**Classes used:** `.vz-btn`, `.vz-btn--secondary`, `.vz-icon`, `.vzdlg-backdrop`, `.vzdrawer`, `.vzdlg-head`, `.vzdlg-title`, `.vz-btn--ghost`, `.vzdlg-x`, `.vzdlg-body`, `.vzf`, `.vzf-label`, `.vzf-ctrl`, `.vz-switch`, `.vzdlg-foot`, `.vz-btn--primary`, `.vzsheet`, `.vzsheet-grip`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Tooltip · `OverlayTooltip`

A short label on hover or keyboard focus — four positions. Never put essential-only info here.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

**Classes used:** `.vztip`, `.vz-btn`, `.vz-btn--secondary`, `.vztip-bubble`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Popover · `OverlayPopover`

Click-triggered rich content — more than a tooltip, less than a dialog. Built on the same popover foundation as menus.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

**Classes used:** `.vzpop`, `.vzpop-trigger`, `.vz-btn`, `.vz-btn--secondary`, `.vz-icon`, `.vzpop-panel`, `.vz-avatar`, `.vz-btn--ghost`, `.vz-btn--primary`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Coach marks · `OverlayCoachMarks`

Guided onboarding — spotlight an element and explain it, one step at a time. Press “Start tour”.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

**Classes used:** `.vz-btn`, `.vz-btn--secondary`, `.vz-icon`, `.vz-btn--primary`, `.vz-btn--ghost`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Tokens used · `OverlayTokens`

The tokens overlays use, and what each one controls.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Accessibility · `OverlayAccessibility`

Accessibility requirements and do/don’t rules for overlays.

**Family:** Dialogs & overlays — Everything that floats above the page — from a focus-trapped modal to a hover tooltip. All are keyboard-dismissible, return focus to their trigger, and share the system’s elevation and scrim tokens. Every example here is live.

**Classes used:** `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Feedback & status

### Toast · `FeedbackToast`

Transient, self-dismissing confirmation. Click to fire — hover to pause the timer, or dismiss manually.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vz-btn`, `.vz-btn--secondary`, `.vztoast`, `.vz-icon`, `.vz-icon--fill`

### Usage
Toasts confirm the result of an action briefly; `.vztoast` + `success | error | warning | info`, stacked in a `.vztoast-region` (`tr` top-right or `bc` bottom-center).

**Markup:** icon in `.ti`, title `.tt`, message `.tm`, optional actions `.ta`, dismiss `.tx`. Keep to one line of title; include an action only when it is undoable/retryable. Never put critical errors only in a toast.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Banner · `FeedbackBanner`

Page-level, persistent context. Dismissible where the message isn’t critical.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vzbanner`, `.vzbanner--info`, `.vz-icon`, `.vzbanner--warning`, `.vz-btn`, `.vz-btn--secondary`, `.vzbanner--lime`, `.vz-btn--primary`

### Usage
Banners carry page- or account-level notices across the top of content; `.vzbanner` + `--info | --success | --warning | --error | --lime`.

**Markup:** `<div class="vzbanner vzbanner--info"><svg class="vz-icon">…</svg><span class="bt">Message</span><button class="bx" aria-label="Dismiss">…</button></div>`. `--lime` is the brand announcement style (neutral-950 ground, `.accent` word in lime) — at most one on a page.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Alert · `FeedbackAlert`

Inline, in-context messages tied to a specific area. Signalled by colour and icon.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vz-alert`, `.vz-alert--success`, `.vz-icon`, `.vz-icon--fill`, `.vz-alert--info`, `.vz-alert--warning`, `.vz-alert--error`

### Usage
Alerts are persistent inline messages within content; `.vz-alert` + `--info | --success | --warning | --error`.

**Markup:** `<div class="vz-alert vz-alert--success"><span class="ic">✓</span><div><b>Title</b>Message.</div></div>`. The `.ic` disc uses `--status-*-solid`. Use for form- or section-level results; for page-wide notices use Banner, for transient confirmations use Toast.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Inline notification · `FeedbackInline`

A compact status pill for tight spaces — next to a field, a row, or a header.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vzinline`, `.vz-icon`, `.vz-spin`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Callout · `FeedbackCallout`

Emphasis inside body content — a tip, note, or caution that shouldn’t be missed.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vzcallout`, `.vz-icon`

### Usage
Callouts highlight a tip or an assistive feature inside a flow; `.vzcallout` (add `.warn` for cautionary).

**Markup:** `<div class="vzcallout"><span class="co-ic">icon</span><div><h4>Title</h4><p>Body</p></div></div>`. Ground `--bg-inset`; icon in lime. Not for errors — use Alert.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Badges, tags & chips · `FeedbackBadges`

Badges label status or category; closable tags hold user-entered values.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vz-badge`, `.vz-badge--solid`, `.vz-badge--lime`, `.vz-badge--neutral`, `.vz-badge--success`, `.vz-badge--warning`, `.vz-badge--error`, `.vztag`, `.vz-icon`

### Usage
Badges label an object's status or category; `.vz-badge` + one modifier, `--radius-pill`.

- `--success / --warning / --error`: status (`--status-*-bg/-border/-text`). `--neutral`: draft/inactive. `--lime`: new/highlight (`--cta-subtle-bg`). `--solid`: the loudest, lime fill — one per view.
- Keep text to one or two words; never use a badge as a button.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Status indicators · `FeedbackStatus`

Presence dots, system-health pills and connection states — always paired with a text label.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vzstatus`, `.vzdot`, `.vzhealth`, `.vz-icon`, `.vz-spin`

### Usage
Status dots and health pills show live state; always paired with a text label.

**Markup:** `<span class="vzstatus"><span class="vzdot online"></span>Online</span>` (`online | away | busy | offline`, add `pulse` for live). Health: `<span class="vzhealth ok|deg|down">Label</span>`. Colour is never the only signal — keep the word.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Empty states · `FeedbackEmptyStates`

An empty screen is an invitation to act, not a dead end. Icon, one line of orientation, and the single action that fills it — written in the interface’s voice. Three registers below: a full section, a compact in-card state, and a no-results state after a filter.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vzempty`, `.vzempty-ic`, `.vz-icon`, `.vzempty-actions`, `.vz-btn`, `.vz-btn--primary`, `.vz-btn--ghost`, `.vzempty-2up`, `.vz-btn--secondary`

### Usage
Empty states explain why a region is empty and offer the next step; `.vzempty` (dashed `--border-default`, `--bg-surface`).

**Markup:** `.vzempty-ic` (icon disc), `h4`, `p` (≤40ch), `.vzempty-actions`. Variants: `.compact` inside cards, `.plain` for solid-bordered raised panels. One primary action max.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Progress · `FeedbackProgress`

Show how far along something is — an upload, a multi-step form, an overall completion. Linear for inline and in-row; the ring for a compact, glanceable percent. Determinate whenever you know the total; indeterminate only when you truly don’t.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vzprog`, `.vzprog-top`, `.vzprog-track`, `.vzprog-fill`, `.vzring`, `.vz-icon`

### Usage
Progress bars show determinate completion; `.vz-spin` shows indeterminate loading.

**Markup:** `<div class="vz-prog" role="progressbar" aria-valuenow="64"><i style="width:64%"></i></div>` (the fill width is the value; lime `--lime-400` on `--bg-inset`). Also in the CSS: progress ring (`.vzring`) and checklist progress (`.vzchk-*`).

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Tokens used · `FeedbackTokens`

The tokens feedback components use, and what each one controls.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Accessibility · `FeedbackAccessibility`

Accessibility requirements and do/don’t rules for feedback components.

**Family:** Feedback & status — How the system talks back — from a fleeting toast to a persistent banner. Status colours are deliberately separate from the brand lime, so “this succeeded” never looks like “this is a button”. Everything here is live.

**Classes used:** `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Navigation

### Tabs · `NavTabs`

Switch between views in the same context. Underline for page-level, pill for compact toggles. Click or use ← / →.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vztablist`, `.vztab`, `.vz-icon`, `.vztabpanel`

### Usage
Tabs switch between views of the same object; `.vztablist` of `.vztab` buttons with `aria-selected`.

- Line tabs (default): lime `--lime-400` underline on the selected tab; optional `.tcount`.
- Pill / segmented: `.vztablist.pill` — for view toggles (List/Board), not for page sections.
- Vertical tabs exist in the CSS for settings pages. Use `role="tablist"`/`role="tab"`.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Vertical tabs · `NavVerticalTabs`

For settings and longer lists — the label reads naturally and there’s room to grow.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vz-icon`, `.vztabpanel`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Breadcrumbs · `NavBreadcrumbs`

Show the path and let people jump back up it. Collapse the middle when it gets long.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vzcrumb`, `.vz-icon`

### Usage
Breadcrumbs show location in a hierarchy; `.vzcrumb` of links, `.sep` separators and a final `.current`.


Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Pagination · `NavPagination`

Move through pages of results. Current page is filled lime; click a number to switch.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vzpage`, `.vz-icon`

### Usage
Pagination moves through pages of a list; `.vzpage` of buttons, current one `aria-current="page"` (lime).

Disable prev/next at the ends; collapse gaps with `.pdots`. Prefer it for tables; infinite scroll only for feeds.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Steps / wizard · `NavSteps`

Break a long task into stages and show progress. Use Back / Next to move the current step.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vzsteps`, `.vzstep`, `.vz-icon`, `.vz-btn`, `.vz-btn--ghost`, `.vz-btn--primary`

### Usage
Steps show position in a multi-step flow; `.vzsteps` of `.vzstep done | current | upcoming`.

Each step: `.dot` (number, or check icon when done) + `.slabel2`. Keep 3–5 steps with one-word labels. Onboarding uses the compact mono variant (`.ob-stepitem`).

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Sidebar nav · `NavSidebar`

The primary navigation for an app — grouped sections, icons, counts, and one clear active item.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vzsb`, `.vzsb-head`, `.vzsb-toggle`, `.vz-icon`, `.vzsb-item`, `.vzsb-divider`

### Usage
The app-shell sidebar (`.vznav`, 248px, `--bg-surface`, hairline right border) is the primary navigation; `.collapsed` shrinks it to a 72px icon rail.

Parts: `.vznav-head` (brand logo slot `.brandlogo` + `.vznav-collapse`), `.vznav-group` of `.vznav-item` (icon + `.vznav-t` + optional `.vznav-count`), `.vznav-div`, `.vznav-foot` (avatar + `.vznav-who`). Active item: `.active` → `--cta-subtle-bg` with lime text/icon.

The `.brandlogo` slot holds the horizontal lockup twice — `.logo-on-light` (ink) and `.logo-on-dark` (white) — and the CSS shows the right one per theme. In pages `.vznav` is sticky and 100vh tall (the preview sets it static to fit the frame). Legacy/compact variants: `.vzsb` sidebar, `.vzrail` icon rail.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Section checklist · `NavChecklist`

A section navigator that doubles as a completion tracker — each item carries a done / to-do / required marker, one clear active item, and a ring up top that shows overall progress before publishing. Click any item to switch; the ring and the “left to do” count keep everyone honest.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vzchk`, `.vzchk-head`, `.vzring`, `.vzchk-item`, `.vzchk-ic`, `.vz-icon`, `.vzchk-main`, `.vzchk-t`, `.vzchk-s`, `.vzchk-mark`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### App icon rail · `NavIconRail`

The slim primary chrome for the whole app — icon-only, with a brand mark on top and the account pinned to the bottom. Hover for a label, one clear active item. This is the collapsed end of the sidebar spectrum, for when every pixel of canvas counts.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vzrail`, `.vzrail-brand`, `.vzrail-item`, `.vz-icon`, `.vzrail-badge`, `.vzrail-spacer`, `.vzrail-avatar`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Top header · `NavTopHeader`

The top header is Venzza's primary navigation: `.vzhdr` › `.vzhdr-in` (a 60px row in a centered 1180px container), holding the brand, `.vzhdr-nav` and `.vzhdr-end`.

**Markup**
- **Brand:** `a.vzhdr-brand` holding the symbol twice, as `.logo-on-light` (symbol-black) and `.logo-on-dark` (symbol-white). The CSS shows the right one per theme.
- **Nav:** `a.vzhdr-link` items. Add `.icon` for the icon-only Home link. Mark the current page with `aria-current="page"`, which gives it `--text-primary` at 600 weight and a `--cta-default` underline (`--bw-thick`) on the bar's bottom edge.
- **Count:** `span.vzhdr-count` inside a link: lime on `--text-on-cta`, mono 11px. Give it an `aria-label` such as "2 new".
- **End:** `label.vzhdr-search` (icon + `.vz-input`), then `button.iconbtn.vzhdr-search-btn` (shown on narrow screens only), then `button.iconbtn` + `.ndot` for notifications, `.vzhdr-div`, and the account menu (see NavTopHeaderMenu).

**Tokens:** bar `--bg-surface` with a `--border-subtle` hairline; links `--text-secondary` → `--text-primary`; focus is an inset `--border-focus` ring on links and `--focus-ring` on buttons.

**Exception:** the header search field and the account trigger use `--radius-pill`, following the design reference. Every other input keeps `--radius-md`.

**Responsive:** the header is a size container, so it adapts to its own width, not the viewport. At 900px and below, search collapses to an icon button and the account trigger shows only the avatar. At 640px and below, the nav scrolls horizontally and the divider hides.

**Rules:** keep to 3–5 section links. Use exactly one `aria-current`. Use counts only for things that need attention, not totals. It can sit alone (see TopNavShellTemplate) or above the sidebar layout.

### Top header · account menu · `NavTopHeaderMenu`

The account menu in the top header: a `.vzpop.vzhdr-menu` whose trigger is `button.vzhdr-acct`, and whose panel is `.vzpop-panel.menu.right`.

**Trigger:** a `.vzav.sm.c` avatar (initials), `span.name`, then the `chevron-down` icon. It's transparent at rest, and fills with `--bg-surface-raised` (`--radius-pill`) on hover and while open. Set `aria-haspopup="menu"` and `aria-expanded`.

**Items:** `div.vzopt[role=menuitem]`, each with a 16px icon (`.vz-icon.sm`, `--text-tertiary`):
- Settings uses `settings`.
- Analytics uses `chart-bar`.
- Sign out uses `log-out`, placed after a `.vzsep`.

Sign out isn't destructive, so it doesn't take `.danger`.

**Behaviour:** the panel aligns to the trigger's right edge. Esc and outside-click close it, and arrow keys move between items, as on every `.vzpop` menu.

### Tokens used · `NavTokens`

The tokens navigation components use, and what each one controls.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Accessibility · `NavAccessibility`

Accessibility requirements and do/don’t rules for navigation components.

**Family:** Navigation — How people move through a product — switching views, tracking where they are, and stepping through flows. Everything here is live and keyboard-navigable (arrow keys move between tabs).

**Classes used:** `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Data display

### Cards · `DataCards`

A container for a single subject — static, whole-card interactive, or with a media header.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vz-card`, `.vz-stack`, `.vz-avatar`, `.vz-badge`, `.vz-badge--success`, `.vz-btn`, `.vz-btn--secondary`

### Usage
Cards group one object's summary on `--bg-surface-raised` with `--radius-xl`, hairline `--border-subtle` and `--shadow-2`.

**Markup:** `<div class="vz-card"><div class="body"><div class="kicker">…</div><h3>…</h3><p>…</p></div><div class="foot">…</div></div>`. Add `.interactive` when the whole card navigates (hover lift, focus ring). Max width 340px; lay out in a grid. For domain objects prefer the organisms: CampaignCard, project card (`.vzpc`).

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Stat / KPI tiles · `DataStats`

A single number with context and trend — the building block of dashboards.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vzstats`, `.vzstat`, `.vz-icon`

### Usage
Stat tiles show one KPI each; `.vzstat` inside a `.vzstats` auto-fill grid.

**Markup:** `.k` (icon + label, `--text-tertiary`), `.v` (value, marketing 30px/700), `.d` (delta; add `.up`/`.down`). Values are real numbers with units — no filler stats. On detail pages tiles sit on `--bg-surface` so the raised tile reads.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Data table · sortable + selectable · `DataTable`

Click Project, Environment, or Updated to sort. Use the checkboxes to select rows — the footer tracks the count.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vzdt-wrap`, `.vzdt`, `.vzdt-check`, `.vz-check`, `.vzdt-sort`, `.vz-icon`, `.vz-badge`, `.vz-badge--success`, `.vz-btn`, `.vz-btn--ghost`, `.vz-badge--warning`, `.vz-badge--error`, `.vz-badge--neutral`, `.vzdt-foot`, `.vzdt-count`, `.vzpage`

### Usage
Tables list comparable records; `.vz-table` with mono uppercase headers and hairline row dividers.

**Markup:** a plain `<table class="vz-table">` with `thead`/`tbody`. Row hover uses `--bg-surface`. In pages wrap in `.tblwrap` for horizontal scroll. Sortable/selectable data tables use `.vzdt`; comparison grids use `.vzmx`. Right-align numbers (`.tar`).

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Lists · `DataLists`

Interactive rows with an avatar and meta, and a key/value description list for details.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vzlist`, `.vzli`, `.vzav`, `.vz-icon`, `.vzdl`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Avatars · `DataAvatars`

Avatars by size, with presence dots, and stacked into groups with a +N overflow.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vzav`, `.vzavgroup`

### Usage
Avatars show a person by initials; `.vzav` + size `xs | sm | md | lg | xl` + optional colour `b | c | d` (default lime).

Presence: `<span class="pres online|away|busy"></span>` inside. Groups: `.vzavgroup` with a trailing `.more` count. Two initials, uppercase.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Charts · `DataCharts`

Lightweight, token-driven charts for the shapes that show up most in a project profile — a distribution and a share-of-total. Values live in text, not just colour, so they read for everyone and in both themes. Bars use a single accent for ordinal data; the donut uses the categorical palette.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vzbars`, `.vzbar`, `.vzbar-l`, `.vzbar-track`, `.vzbar-fill`, `.vzbar-v`, `.vzdonut`, `.vzdonut-ring`, `.vzdonut-center`, `.vzdonut-legend`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Matrix · `DataMatrix`

A comparison grid for what’s included across tiers — deliverables down the side, packages across the top. The first column and header stay pinned as you scroll, and each cell toggles inclusion. Click any cell to try it.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vzmx-wrap`, `.vzmx`, `.vzmx-cell`, `.vz-icon`, `.vzmx-price`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Project card · `DataProjectCard`

The entry point into a project — cover, status, the two numbers that matter, and who’s on it. This is what a Projects grid is built from; the whole card is the click target into the detail view.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vzpc-grid`, `.vzpc`, `.vzpc-media`, `.vzpc-status`, `.vzpc-body`, `.vzpc-org`, `.vzpc-meta`, `.vz-icon`, `.vzpc-foot`, `.vzavgroup`, `.vzav`, `.vz-btn`, `.vz-btn--secondary`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Tokens used · `DataTokens`

The tokens data-display components use, and what each one controls.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Accessibility · `DataAccessibility`

Accessibility requirements and do/don’t rules for data-display components.

**Family:** Data display — Surfaces for showing content and records — cards, metrics, tables, lists, and people. The table below is live: click a column header to sort, and the checkboxes to select.

**Classes used:** `.vz-icon`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Templates

### Projects dashboard · `DashboardTemplate`

The projects landing — search and status filters over a responsive grid of project cards, with an empty state when nothing matches. Type in the search or switch filters to see it react.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.tpl-head`, `.tpl-htitle`, `.tpl-hactions`, `.vz-btn`, `.vz-btn--primary`, `.vz-icon`, `.tpl-body`, `.tpl-toolbar`, `.vzf`, `.vzf-ctrl`, `.tpl-filter`, `.vzpc-grid`, `.vzpc`, `.vzpc-media`, `.vzpc-status`, `.vzpc-body`, `.vzpc-org`, `.vzpc-meta`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Project · Manage view (owner) · `ProjectDetailTemplate`

The creator’s private workspace for a single project — edit each section, track setup progress, and publish to the marketplace once the required sections are done. Sponsors can’t see a project until it’s published. Flip the state below to see how the status and publish bar change once it goes live.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.tpl-statetoggle`, `.tpl-head`, `.tpl-back`, `.vz-icon`, `.tpl-xnav`, `.tpl-hgroup`, `.tpl-htitle`, `.vz-badge`, `.vz-badge--neutral`, `.vz-badge--success`, `.tpl-hactions`, `.vz-btn`, `.vz-btn--ghost`, `.vz-btn--secondary`, `.tpl-detail-scroll`, `.tpl-secnav`, `.tpl-content`, `.tpl-hero`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Create new project · `CreateProjectTemplate`

The full-screen entry point — no modal, no checklist. Fill Project Basics to get started, watch Project Strength climb, then Continue into the project, where each remaining section is filled in inline, card by card.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.tpl-createhead`, `.tpl-createhead-t`, `.vz-btn`, `.vz-btn--secondary`, `.vz-icon`, `.tpl-createbody`, `.vzstrength`, `.vzstrength-top`, `.vzstrength-lbl`, `.vzstrength-pct`, `.vzstrength-track`, `.vzstrength-fill`, `.vzstrength-hint`, `.vzdisclose`, `.vzdisclose-l`, `.vzdisclose-sub`, `.vzdisclose-chev`, `.tpl-formcard`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### App shell · `AppShellTemplate`

The frame everything lives in — the icon rail, a top bar with search and account, and a scrolling content region. Here it wraps a dashboard view (KPIs + project cards); drop any template into the content area for a complete app layout.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.tpl-shell`, `.tpl-shell-grid`, `.vznav`, `.vznav-head`, `.vznav-collapse`, `.vz-icon`, `.vznav-group`, `.vznav-item`, `.vznav-t`, `.vznav-div`, `.vznav-count`, `.tpl-shell-main`, `.tpl-shell-topbar`, `.tpl-shell-topright`, `.vzf`, `.tpl-shell-search`, `.vzf-ctrl`, `.tpl-iconbtn`…

### Usage
The app shell is the frame every product screen uses: `.shell` = `.vznav` sidebar + `.main` (`.topbar` 60px with hairline bottom border, then `.canvas` max 1180px).

Page anatomy inside `.canvas`: `.phdr` (h1 in `--font-marketing` 22px/600 + the one primary action), `.ptool` toolbar (pill tabs left, `.ptool__r` filters right), content (`.tblwrap` + `.vz-table`, card grids, `.vzstats`). Top bar: `.srch.tsearch` search, `.iconbtn`s with `.ndot` unread dot, avatar. The diamond motif appears as `.pj .di` (a 9px lime-outlined rotated square) marking project rows.

Build every screen from this frame; do not invent new chrome. (Preview fixes the shell height to fit the frame.)

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Top-nav app shell · `TopNavShellTemplate`

The app frame for top navigation: `.vzhdr` above a `main.canvas` (max-width 1180px, matching `.vzhdr-in`), so the header and content edges line up.

**Use it** when a product area needs few top-level sections and lots of horizontal room, which is the planned default. Inside the canvas, the page anatomy is the same as AppShellTemplate: `.phdr` (an h1 and the one primary action), then a toolbar, then content.

**Sidebar:** for dense tool areas, you can still put the sidebar layout (`.shell` with `.vznav`) under the header. In that case, drop `.vznav-head`, because the brand lives in the header.

### Campaigns · landing · `CampaignsTemplate`

Your campaigns at a glance — role, dates, budget vs spent, and tags. Owner cards carry a delete; participant cards don’t. Built on the campaign-card organism.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.tpl-head`, `.tpl-htitle`, `.tpl-hactions`, `.vz-btn`, `.vz-btn--primary`, `.vz-icon`, `.tpl-body`, `.vzpc-grid`, `.vzcamp`, `.vzcamp-top`, `.vzrole`, `.vzcamp-date`, `.vzcamp-h`, `.vzcamp-org`, `.vzcamp-desc`, `.vzcamp-tags`, `.vzcamp-tag`, `.vzcamp-fin`…

### Usage
Campaign cards summarize one campaign in the Campaigns grid; `.vzcamp` inside `.vzcamp-grid`.

Parts: `.vzcamp-top` (`.vzrole owner|participant` + `.vzcamp-date`), `.vzcamp-h` (h4 + `.vzcamp-org`), `.vzcamp-desc`, `.vzcamp-tags`, `.vzcamp-fin` (two `.k`/`.v` figures), `.vzcamp-foot` (actions + `.vzcamp-del`). Kanban (`.vzkb`) and accordion (`.vzacc`) organisms live beside it in the CSS.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Create campaign · `NewCampaignTemplate`

The new-campaign flow — a form-section card beside a document-upload panel with an AI auto-fill callout. Reuses inputs, the date range, the dropzone, and buttons.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.tpl-head`, `.tpl-htitle`, `.tpl-hactions`, `.tpl-back`, `.vz-icon`, `.tpl-body`, `.tpl-create-grid`, `.tpl-formcard`, `.tpl-formcard-h`, `.tpl-formbody`, `.vzf`, `.vzf-label`, `.vzf-ctrl`, `.vzrange`, `.vzrange-arrow`, `.vzrange-cal`, `.tpl-formfoot`, `.vz-btn`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Campaign board · `CampaignBoardTemplate`

A campaign’s workspace — collapsible detail sections and a negotiations Kanban (Wishlist / Negotiating / Done). Drag cards between columns; counts and empty states update. Built on the accordion and Kanban organisms.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.tpl-head`, `.tpl-back`, `.vz-icon`, `.tpl-hactions`, `.vz-btn`, `.vz-btn--secondary`, `.vz-btn--primary`, `.tpl-body`, `.tpl-headsub`, `.vzrole`, `.vzacc`, `.vzacc-head`, `.vzacc-body`, `.vzkb`, `.vzkb-col`, `.vzkb-head`, `.vzkb-count`, `.vzkb-body`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### New project modal · `NewProjectTemplate`

A focused create flow — the essentials in a modal, with the full editor available after. Built on the dialog system + form components; the field surfaces stay raised on the darker modal. Click to open.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.vz-btn`, `.vz-btn--primary`, `.vz-icon`, `.vzdlg-backdrop`, `.vzdlg`, `.vzdlg-head`, `.vzdlg-title`, `.vz-btn--ghost`, `.vzdlg-x`, `.vzdlg-body`, `.vzf`, `.vzf-label`, `.vzf-ctrl`, `.vzdlg-newgrid`, `.vzpop`, `.vzpop-trigger`, `.vzsel-trigger`, `.vzsel-value`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Edit project · packages · `EditProjectTemplate`

The sponsorship-packages editor — a deliverable inventory, package creation, the deliverables matrix (click cells), and per-package pricing with installments and public visibility. Built from the form, matrix, and toggle components.

**Family:** Templates — Working screens assembled from this kit — not mockups. Every control below is live: open menus, drag rows, pick dates, switch sections. These are the blueprints your developers lift straight into the app.

**Classes used:** `.tpl-head`, `.tpl-htitle`, `.tpl-hactions`, `.tpl-back`, `.vz-icon`, `.vz-btn`, `.vz-btn--primary`, `.tpl-body`, `.tpl-formcard`, `.tpl-formcard-h`, `.tpl-formbody`, `.vzdlv-list`, `.vzdlv-row`, `.vzdlv-fields`, `.vzf`, `.vzlabel-sm`, `.vzf-ctrl`, `.vzselect-static`…

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Marketing blocks

### Hero · `MarketingHero`

Where the brand turns up the volume: green on near-black, generous type, one clear action.

**Family:** Marketing blocks — Where the brand turns up the volume: green on near-black, generous type, one clear action.

**Classes used:** `.vz-btn`, `.vz-btn--primary`, `.vz-btn--ghost`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Pricing · `MarketingPricing`

Pricing tiers for marketing pages; the featured plan is raised with a lime eyebrow and primary action.

**Family:** Marketing blocks — Where the brand turns up the volume: green on near-black, generous type, one clear action.

**Classes used:** `.vz-btn`, `.vz-btn--secondary`, `.vz-btn--primary`

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

## Brand

### Brand overview · `BrandOverview`

The expressive side of Venzza — bolder type, brighter surfaces, and layouts built to be seen. Same DNA as the product, turned up for the world outside the app.

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Typography · `BrandTypography`

Brand headlines use Space Grotesk — a modern grotesque with just enough character to feel like Venzza, set oversized and tight. Body stays on the product sans for readability. Swap the display face any time via --brand-display.

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Color · `BrandColor`

Same palette as product, applied with volume. In product, lime is a thin line of intent (CTAs only). In brand, lime becomes the stage — full fields, poster contrast, and gradients against ink.

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Layout & grid · `BrandLayout`

Marketing layouts trade density for drama — oversized headlines, generous space, and asymmetric compositions that lead the eye. A few core arrangements to build from.

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Patterns & texture · `BrandPatterns`

Two families that share one logic. Gradients give brand surfaces atmosphere and depth; geometry, drawn from the mark, carries meaning — every device traces back to points connecting into value. Both are tuned for ink canvases and never compete with the logo.

**Classes used:** `.bgrad-grid`, `.bgrad`, `.bpat-grid`, `.bpat`

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Motion · `BrandMotion`

Where product motion is quiet feedback, brand motion is confident and kinetic — entrances that reveal, geometry that assembles, hover states with a little swagger. Always purposeful, never busy. Every effect below is live and respects prefers-reduced-motion.

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Voice & tone · `BrandVoice`

Venzza sounds like a sharp creative partner — bold, direct, culturally fluent, and always on the creator’s side. Short sentences. Real verbs. No corporate fog.

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Marketing components (WIP) · `BrandMarketingComponents`

The marketing site’s components, reconciled onto our tokens and previewed on their native dark surface. Anything that diverges from the product design system is marked Brand-only so it stays a candidate, not a silent override.

**Classes used:** `.mk-badge`, `.mk-stage`, `.mk-group`, `.mk-ghead`, `.mk-p`, `.mk-btnrow`, `.mk-stage--pad`, `.mk-disp1`, `.mk-leadtype`, `.mk-navbar`, `.mk-tabs`, `.mk-tab`, `.mk-meterwrap`, `.mk-mrow`, `.mk-meter`, `.mk-meter__f`, `.mk-linkcard`

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

**Status: work in progress.** Shown for review; not product canon.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Marketing tokens (WIP) · `BrandMarketingTokens`

Styles imported from the Venzza marketing site, staged in the Brand space — a quarantined layer, not product-system canon yet. The foundations (neutral & lime ramps, spacing 1–13, radius, type stacks) are identical to ours, so everything here sits above the shared spine. Below: what’s new, what conflicts, and what I recommend promoting.

**Classes used:** `.mk-callout`, `.mk-group`, `.mk-ghead`, `.mk-badge`, `.mk-badge--promote`, `.mk-p`, `.mk-stage`, `.mk-caption`, `.mk-swatch-inline`, `.mk-swgrid`, `.mk-sw`, `.mk-chip`, `.mk-tablewrap`, `.mk-table`, `.mk-ok`, `.mk-fail`, `.mk-typemeta`, `.mk-disp1`…

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

**Status: work in progress.** Shown for review; not product canon.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.

### Square logo (WIP) · `BrandSquareLogo`

A square-tile take on the Venzza mark, brought in to explore an alternate logo direction with the team. This is a temporary exploration — not the locked product logo, and it doesn’t change any system tokens or the canonical mark. Every tile renders and downloads from the exact source SVGs. Click any logo to enlarge it for review.

**Classes used:** `.sqx-wip`, `.sqx-group`, `.sqx-grouphead`, `.sqx-grid`, `.sqx-card`, `.sqx-stage`, `.sqx-enlarge`, `.sqx-meta`, `.sqx-scale`, `.sqx-scell`

Brand-space specimen: marketing surfaces only. Product UI follows the product rules in the brand book.

**Status: work in progress.** Shown for review; not product canon.

Build with the exact markup and classes shown in the preview; every value comes from tokens in `components/bundle.css`.
