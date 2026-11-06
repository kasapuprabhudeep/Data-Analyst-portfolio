# DESIGN.md — the editorial paper system

Single committed visual world. Old navy-cyan glass/gradient look is the anti-reference:
never reintroduce gradients, glows, glassmorphism, grid-mesh backgrounds or terminal cosplay.

## Tokens

| Token | Value | Use |
|---|---|---|
| `paper` | `#FAF8F4` | page base |
| `paper.deep` | `#F3EFE7` | alternating section ground, cards |
| `paper.sunken` | `#EBE6DC` | reserved for deeper wells |
| `ink` | `#1C1A15` | headlines, primary buttons |
| `ink.soft` | `#433F37` | body |
| `ink.mute` | `#6F6A5E` | secondary (≥4.5:1 on paper) |
| `ink.faint` | `#A19B8C` | decorative metadata only |
| `accent` | `#E4572E` | graphics, rules' highlights, the name's full stop |
| `accent.deep` | `#BE3A16` | links and accent text (≈6.7:1 on paper) |
| `line` | `#E3DED3` | hairline dividers |
| `line.strong` | `#CFC9BB` | input borders, ghost button borders |

Radii: cards 14px (`rounded-card`), controls 10px/pills; no razor-sharp geometric style.

## Typography

- **Display: Newsreader** — section headings (`display-2`, ≤3.5rem) and hero name
  (`display-1`, ≤6rem, second word italic). The orange full stop after names/headings is the
  brand mark.
- **Body: Hanken Grotesk** — 15–17.5px, measure ≤62ch.
- **Data: IBM Plex Mono** — genuine data/context labels only: chips, layering metadata,
  mono uppercase `[11px] tracking-caps` labels. Not decoration.
- Scale ramps `display-1/2/3` are in `tailwind.config.js`.

## Components (exactly one system)

- **Buttons:** `.btn-primary` (ink solid → accent-deep on hover) and `.btn-ghost` (hairline border
  → ink border on hover). Both: press `scale(0.97)`, 160–180ms var(--ease-out). Nothing else.
- **Links:** `.link` underline draws left→right; `.link-ext` arrow links for external proof.
- **Chips:** `.chip` mono pills for stacks/metadata; `.chip-active` ink fill.
- **Case rows:** index · category · serif title · tagline · stack chips · arrow. Hover lifts
  nothing — row tint, title color shift, arrow nudge only.
- **Modal:** paper panel, 12px radius, one soft offset shadow (`0 32px 64px -24px`), backdrop
  blur 3px, enter/exit 200–260ms.

## Motion (GSAP)

- One authored moment: **hero load choreography** — masked name lines, fade-up rows, portrait
  clip-path reveal, rule draw.
- One pinned moment: **hero curtain** — `#home-inner` pins (`pinSpacing: false`) and fades as
  Selected work rides over (scrubbed progress).
- Everything else: once-reveals via `[data-reveal]` batches and `[data-reveal-line]` rule draws,
  expo.out easings.
- Hover layer is CSS: underline draws, nav dual-label slides, arrow nudges, press scales,
  magnetic CTA (pointer-fine only).
- `prefers-reduced-motion`: JS timelines skipped, CSS forces visible, smooth-scroll off.

## Section rhythm

Sections alternate `paper` / `paper-deep`; every section: `.wrap` (max 1200px), h2 first with a
strong hairline below it, generous py (6–8rem). No eyebrows/kickers before headings (craft floor
ban); side metadata carries reader facts, not ornament.
