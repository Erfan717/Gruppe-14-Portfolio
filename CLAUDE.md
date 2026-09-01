# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static portfolio site for a student group's bachelor project (Gruppe 14). Plain HTML/CSS/JS — no build step, no package manager, no dependencies, no tests, and no server-side code. All user-facing copy is Norwegian (`<html lang="no">`); keep new copy in Norwegian, and use proper æ/ø/å (the README is the lone ASCII-only holdout).

## Running

Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
```

There is nothing to build, lint, or test — changes are visible on reload.

## Architecture

Five sibling pages ([index.html](index.html), [about.html](about.html), [projects.html](projects.html), [bachelor.html](bachelor.html), [contact.html](contact.html)), all linking the single [styles.css](styles.css) and [script.js](script.js). There is no templating or includes: **the `<header>` nav and `<footer>` are copy-pasted inline into every page**. Changing the logo, group name, nav links, or footer means editing all five files. Each page marks its own nav item with `class="active"`.

[script.js](script.js) runs on every page and is wired purely through data attributes, so behavior is opt-in per page by adding the attribute — currently just `[data-year]`, filled with the current year in every footer.

[script.js](script.js) is therefore tiny — a `[data-year]` fill for the footers and nothing else. Keep that data-attribute pattern if you add behavior.

[styles.css](styles.css) is the whole design system: palette and fonts as custom properties on `:root` (warm paper `--paper`, terracotta `--accent`, serif `--display` for headings), then flat utility-ish class names (`.container`, `.section`, `.page-hero`, `.intro-grid`, `.project-grid`, `.timeline`, `.contact-layout`, `.dark-band`). Responsive handling is one `@media (max-width: 760px)` block at the bottom that collapses the grids — add mobile overrides there rather than scattering media queries.

## Contact page

[contact.html](contact.html) deliberately has **no form and no backend**. It is a `.contact-card` explaining why someone would get in touch, plus a `mailto:` button to `mariusgg@student.uia.no`. A form would need a server to hold an email-API key, which this project intentionally does not have — so if you are asked to "make the contact form work", the answer is that it is a mailto link by design.

## Markup style

Page bodies are written very densely — [about.html](about.html), [projects.html](projects.html), [bachelor.html](bachelor.html) and [contact.html](contact.html) put whole sections on one line. [index.html](index.html) is broken across a few more lines. Match whichever style the file you are editing already uses.

## Known rough edges

- `.timeline-year` in [styles.css](styles.css) uses `var(--teal)`, which is never defined; that text falls back to inherited color.
- `index.html` references `assets/group-presentation.mp4`, but the `assets/` directory does not exist yet.
- All photos are hotlinked from Unsplash URLs, so the site needs network access to look right.
- The README text is ASCII-only (`portefoljeside`, `Apne`, `ma`) while the pages use proper Norwegian characters.
