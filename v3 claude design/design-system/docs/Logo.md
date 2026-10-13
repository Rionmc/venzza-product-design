# Logo

The Venzza mark is a geometric **V inside a perfect circle**, with a **diamond** at its lower convergence: the point where people, ideas, brands and creators meet. Its idea is **Connection · Alignment · Value**. Every placement uses the exact source SVGs in the **Logos** asset group. Never redraw, re-space or approximate the mark.

## The forms

| Form | Files | Use |
|---|---|---|
| Horizontal lockup (default) | `lockup-horizontal-black.svg` / `-white.svg` | App chrome, headers, most placements |
| Stacked | `lockup-stacked-black.svg` / `-white.svg` | Narrow or square spaces |
| Symbol | `symbol-black.svg` / `-white.svg` / `symbol-knockout.svg` | Avatars, the collapsed sidebar (`.vznav-mark`), social |
| Wordmark | `wordmark-black.svg` / `-white.svg` | When the symbol is already present nearby |
| V glyph | `glyph-v-black.svg` / `-white.svg` | Favicon |
| App icon | `app-icon.svg` | Store and home-screen tiles |

Every form ships **black** (`--logo-ink`, #0A0A0B) for light surfaces and **white** (`--logo-white`) for dark surfaces.

## Construction

- **Circle:** a perfect 600 × 600 field, geometric rather than optical.
- **V:** sits at the optical center, balanced, and never touches the edge.
- **Diamond:** marks the convergence point, and is also the unit for clear space.

The proportions are fixed, so always use the files.

## Clear space and minimum sizes

- Keep **1 diamond unit** (the width of the center diamond) clear on all four sides. Nothing enters that zone: no type, imagery or edges.
- Symbol and wordmark: **24px** digital (10mm / 8mm in print). V glyph favicon: **16px**.

## Color

The mark is black or white. Venzza electric lime (`--lime-400`) may be used in primary-action contexts only, and no other colors are allowed. Over photography or colour fields, use `symbol-knockout.svg`, which reveals the background through the V. Never recolour the solid symbol.

## Lockup proportions (D = symbol diameter)

- **Horizontal:** wordmark cap height = 0.54 × D; gap = 0.41 × D; symbol and wordmark share one vertical center.
- **Stacked:** wordmark width = 2.0 × D; gap = 0.18 × D; symbol and wordmark share one horizontal center.

## In UI

Inline the horizontal lockup in `.brandlogo` as two spans, `.logo-on-light` (black) and `.logo-on-dark` (white), and the CSS shows the right one for each theme. For a single-SVG placement, `.vzlogo[data-tone="black|white|knockout"]` sets the ink, and `--logo-h` sets the size.

## Incorrect usage

Never stretch, distort, rotate, recolour (outside the rule above), add effects to, or change the internal spacing of the lockup, and always hold contrast against the background.
