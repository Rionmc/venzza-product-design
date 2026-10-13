# Venzza prototype

A clickable, self-contained export of **Venzza Product Design v2**, taken October 12, 2026. It runs offline: no server, no sign-in, no internet needed.

## Open it

- **On your computer:** double-click `index.html` in this folder. It opens on the prototype map.
- **On GitHub Pages:** push this folder to a repository, then go to **Settings › Pages**, choose **Deploy from a branch**, and pick the branch and folder that hold `index.html`. The site opens on the prototype map.

## Find your way around

Start on the **prototype map** (`prototype/PN-Flow.dc.html`; `index.html` opens it for you). The main path at the top walks the core story; **Every screen** lists all screens by section, with the same numbers used in the design file.

Every screen has a small control bar in the bottom-left corner:

| Control | What it does |
|---|---|
| **Start here** | Back to the prototype map. |
| **‹ ›** | Previous or next screen in the current section. |
| **Screen label** | Section and screen number, e.g. “4.6 · Live page, seen by sponsors”. Use it when giving feedback. |
| **Show clickable** | Outlines everything you can click. Stays on until you turn it off. |
| **Restart** | Resets the screen to its starting state (selections, open panels, wishlist adds). |
| **×** | Hides the bar for screenshots or presenting. The **Prototype** tab brings it back. |

A link to a screen that isn’t part of this export stays put and says so.

## What’s included

| Section | What’s in it |
|---|---|
| Start here | Prototype map, decisions and rules, developer spec, design notes |
| Onboarding | Guided setup for campaigns and projects, every step and state |
| Projects | Home, the project editor, packages, preview and publish, creating a project |
| Campaigns | Campaigns list, creating, the campaign page, deliverables, negotiation, editing |
| Marketplace | Browsing, search, campaign matching, saving to wishlists, the public project page and gallery |
| Components | Source components, header and search, notifications |

Not included: Light mode, Explorations and Archive.

## Good to know

- **It’s a snapshot.** Changes made in the design file after October 12, 2026 aren’t here. Export again to update.
- **Sample data.** Names, numbers, moods and prices are illustrative.
- **Desktop first.** Designed for laptop and desktop screens (1280px and up).
- **Files:** everything lives in `prototype/`. Each screen is one `.dc.html` page. Styles are in `ds/` (Venzza Design System) and `shared/`; images, the prototype controls and the rendering scripts are in `assets/`. `assets/vendor/` holds React 18.3.1 and the Design tool’s runtime that draws the screens.
