# PRODUCT.md

## Product truth

- **Who/what:** Personal portfolio of Kasapu Prabhudeep — final-year B.Tech CSE student
  (Class of 2027, JNTU-GV College of Engineering, Vizianagaram), aspiring data analyst.
- **Buyer (audience):** recruiters and hiring managers for data-analyst internships and
  entry-level roles.
- **One main action:** review the selected work / résumé, then contact by email.
- **Success mode:** a recruiter understands the candidate's capability in under 30 seconds and
  can verify every claim (repos, certificates) in one click.
- **Content honesty rule:** nothing on the page may be invented. Every metric, certificate and
  link maps to a real artifact. Empty optional fields render as omitted blocks, never placeholders.

## Decisions (user interview, 2026-11-06)

- Theme: light editorial paper (single mode — dark mode removed by decision).
- Accent: signal orange `#E4572E`.
- Status: final year, graduating 2027 ("Available for internships & full-time roles").
- Projects: the current five, each linked to its real repository (churn → FUTURE_DS_02).
- Certificates: typographic credential rows + verification links (drawn mock certificate images
  deleted).
- Phone: removed entirely (data had a fake placeholder).
- Stack: React + Vite + Tailwind retained; animation migrated to GSAP (user requirement);
  framer-motion and recharts (fake dashboards) removed.
- Operator model: single `src/data/portfolioData.js` controls all content; empty string hides
  any block safely.
