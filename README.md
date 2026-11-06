# Kasapu Prabhudeep — Portfolio

Personal portfolio for **Kasapu Prabhudeep**, data analyst — Python, SQL, Excel, Power BI, Tableau.
Built with React 18, Vite, Tailwind CSS and GSAP (ScrollTrigger). Single light theme, editorial
"paper" design system.

---

## Operating the site (no code required)

**All content lives in one file: `src/data/portfolioData.js`.** Open it, edit the labeled sections,
save — the site updates. Every field has a comment explaining what it controls.

| You want to… | Do this |
|---|---|
| Change a name, line, email or link | Edit `personalInfo` at the top of the data file |
| Update the résumé | Replace `public/Prabhudeep_Resume.pdf`, then update `resume.lastUpdated` |
| Change your photo | Replace `public/profile.jpeg` (portrait, ~4:5 crop works best) |
| Add a project | Copy the last object in `projects` and fill every field |
| Add a certificate | Add an object to `certifications` with a real verify URL |
| Fill internship dates | Set `period` on the role in `experience` |
| Hide something (e.g. no live demo) | Set its field to `""` — the UI adapts, nothing breaks |

**Rules baked into the file:** only facts you can prove; every link must be a real URL; empty
strings hide blocks instead of breaking them.

---

## What's on the page

Six sections, in reading order:

1. **Hero** — name, one-sentence pitch, credential facts, résumé + work CTAs, portrait
2. **Selected work** — filterable case list (filters derive themselves from project categories); each row opens a full case study
3. **About** — narrative, six strengths, grouped toolkit
4. **Experience** — internship ledger with verifiable certificates
5. **Credentials** — certification rows (each links to its real proof) + education
6. **Contact** — copy-email, GitHub/LinkedIn, mailto-composing form, résumé band

Plus: responsive nav with active-section marker and a full-screen mobile menu, and a footer colophon.

## Design & motion system

- **Palette:** warm paper `#FAF8F4`, ink `#1C1A15`, signal orange `#E4572E` — no gradients, no glows.
- **Type:** Newsreader (display) · Hanken Grotesk (body) · IBM Plex Mono (data labels).
- **Motion:** one GSAP load choreography in the hero (masked line reveal + portrait clip-path),
  once-per-element scroll reveals driven by ScrollTrigger, a pinned hero curtain into Selected
  work, magnetic CTA, underline-draw links, press-scale buttons. All motion is disabled under
  `prefers-reduced-motion` — content simply shows.
- Motion engine: `src/lib/motion.js`. Reveal hooks used in markup: `data-reveal`,
  `data-reveal-line`, `data-hero-*`.

## Development

```bash
npm install        # once
npm run dev        # local dev server → http://localhost:3000
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

## Verifying visually (optional dev tool)

`shots.mjs` drives your installed Chrome headless against the preview server and screenshots
every section at desktop / tablet / phone widths, the case-study dialog, and the mobile menu:

```bash
npm run build
npm run preview &          # leave running
node shots.mjs "http://localhost:4173/"   # writes PNGs into shots/
```

Requires Chrome installed at the default path and `puppeteer-core` (already a dev-dependency).

## Deploying (Vercel)

1. Push this repo to GitHub.
2. vercel.com → *Add New Project* → import the repo (Vite preset auto-detected).
3. Build command `npm run build`, output `dist`. Deploy.

Custom domain: Vercel → Project → Settings → Domains.

## Notes & known facts

- Every project row links to its public GitHub repository; certificates link to Google Drive
  verification documents.
- Project screenshot slots are intentionally empty: cards render as typographic rows until you
  drop real screenshots into `public/images/projects/` and set each project's `image` field.
  **No placeholder art ships with the site.**
- The og:image was removed rather than pointing at a file that doesn't exist. To re-enable
  LinkedIn previews, create a 1200×630 PNG, put it at `public/og-preview.png`, and add
  `<meta property="og:image" content="/og-preview.png" />` to `index.html`.
- Education years (`2023 – 2027`) should match your definitive enrollment record — verify once.

## License

MIT — see `LICENSE`.
