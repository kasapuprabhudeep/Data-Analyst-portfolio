/**
 * ════════════════════════════════════════════════════════════════════
 *  PRABHUDEEP'S PORTFOLIO — EDIT EVERYTHING HERE
 * ════════════════════════════════════════════════════════════════════
 *
 *  This one file controls the text, links, projects, experience,
 *  certificates and résumé shown on the website. You never need to
 *  touch the component files to update content.
 *
 *  RULES OF THUMB
 *  • Fill a field with ""  → that block quietly disappears (no broken UI).
 *  • Every link must start with https:// (except email:, which starts
 *    with mailto:).
 *  • Only write facts you can prove. The site never invents numbers.
 *
 *  QUICK RECIPES
 *  • New résumé ............ replace  public/Prabhudeep_Resume.pdf
 *                            then bump `resume.lastUpdated` below.
 *  • New photo ............. replace  public/profile.jpeg
 *  • New project ........... copy the last object in `projects` and fill
 *                            every field (keep ids unique, lowercase-dash).
 *  • New certificate ....... add an object to `certifications` with
 *                            a Google Drive / issuer verify link.
 *  ════════════════════════════════════════════════════════════════════
 */

/* ── 1. Who I am ────────────────────────────────────────────────── */

export const personalInfo = {
  name: "Kasapu Prabhudeep",
  firstName: "Prabhudeep",
  role: "Data Analyst",
  roleAlt: "Aspiring Data Analyst", // used where humility fits (e.g. footer)
  statement:
    "Final-year computer science student turning messy retail and business data into decisions — with Python, SQL, Excel, Power BI and Tableau.",
  location: "Vizianagaram, Andhra Pradesh, India",
  availability: "Available for internships & full-time roles",
  nickname: "KP", // monogram in the navbar
  degree: "B.Tech · Computer Science & Engineering",
  institution: "JNTU-GV College of Engineering, Vizianagaram",
  classOf: "Class of 2027",

  portrait: "/profile.jpeg", // replace public/profile.jpeg to change photo

  socialLinks: {
    email: "kasapuprabhudeep@gmail.com",
    github: "https://github.com/kasapuprabhudeep",
    linkedin: "https://www.linkedin.com/in/kasapurabhudeep/",
  },

  resume: {
    fileName: "Prabhudeep_Resume.pdf", // download name shown in browsers
    filePath: "/Prabhudeep_Resume.pdf", // file it actually serves
    lastUpdated: "November 2026", // told to visitors — keep it true
  },
};

/* ── 2. Career objective (About section intro) ──────────────────── */

export const careerObjective =
  "To become a professional data analyst and solve real business problems with Python, SQL, visualization and business intelligence.";

export const bio = [
  "I'm a computer science engineering student at JNTU-GV, Vizianagaram, working my way from spreadsheets to sources: cleaning datasets, querying relational databases, and building dashboards that make a business question answerable in one screen.",
  "The tools I use most are Python (Pandas · NumPy), SQL, Excel, Power BI and Tableau. What I care about is the reporting layer — turning query output into something a manager can actually act on, without a walkthrough.",
  "I'm looking for an internship or full-time role where real data flows and the work compounds. Every case study below links to its public repository, so the evidence is directly on the table.",
];

/* ── 3. What I bring (numbered strengths in About) ───────────────── */

export const strengths = [
  {
    title: "Data cleaning & preprocessing",
    description:
      "Missing values, outliers, schema restructuring — raw exports turned into analysis-ready tables.",
  },
  {
    title: "SQL & database querying",
    description:
      "Multi-table joins, CTEs, aggregations and window functions against relational databases.",
  },
  {
    title: "BI & dashboard development",
    description:
      "Interactive Power BI and Tableau dashboards with calculated fields, DAX measures and drill-downs.",
  },
  {
    title: "Exploratory data analysis",
    description:
      "Distributions, correlations and segments — pattern-hunting in Python with Pandas and NumPy.",
  },
  {
    title: "Data storytelling & reporting",
    description:
      "Converting query output into concise visual narratives that non-technical stakeholders can read.",
  },
  {
    title: "Business problem framing",
    description:
      "Ambiguous situations — churn, stockouts, margin pressure — turned into structured analytical questions.",
  },
];

/* ── 4. Toolkit (grouped skills, shown inside About) ─────────────── */
/* type within skillCategories-style groups: keep each group to one row */

export const toolkit = [
  { group: "Analysis", items: ["Python", "Pandas", "NumPy", "SQL", "MySQL", "Advanced Excel"] },
  { group: "Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Power Query"] },
  { group: "Backend & data", items: ["Flask", "MongoDB", "Neo4j"] },
  { group: "Fundamentals", items: ["Java", "C", "HTML", "CSS", "JavaScript"] },
  { group: "Workflow", items: ["Git", "GitHub", "VS Code", "MySQL Workbench", "Jupyter"] },
];

/* ── 5. Projects (Selected work) ────────────────────────────────── */
/*
 * `image` is an OPTIONAL screenshot. Leave "" → the site renders a clean
 * typographic row (no fake previews). To use a screenshot: drop the file
 * into public/images/projects/ and set image: "/images/projects/name.png".
 * `liveDemo` only ever shows when you provide a working URL.
 */

export const projects = [
  {
    id: "retail-sales-analysis",
    title: "Retail sales analysis",
    tagline: "End-to-end sales performance, category revenue and customer demographics",
    category: "Data Analytics & BI",
    featured: true,
    stack: ["Python", "MySQL", "Power BI", "DAX"],
    overview:
      "An end-to-end retail analysis that looks at store performance by category, revenue by region, and who the customers actually are.",
    problem:
      "Managers lacked a consolidated view of which product categories earn healthy margins versus raw volume, and which customer cohorts were worth keeping.",
    contributions: [
      "Cleaned and validated multi-year transaction data with Python (Pandas), handling anomalies and missing values.",
      "Wrote SQL aggregations across transactions to compute sales growth and group customers into demographic tiers.",
      "Segmented customers to isolate high-value and repeat-buyer groups.",
      "Built a Power BI dashboard with dynamic slicers, KPI cards and regional heatmaps.",
    ],
    repo: "https://github.com/kasapuprabhudeep/Sales-dashboard-analysis",
    liveDemo: "",
    image: "",
  },
  {
    id: "customer-churn-analysis",
    title: "Customer churn analysis",
    tagline: "Retention patterns, tenure risk and churn drivers — Tableau story",
    category: "Data Analytics & BI",
    featured: true,
    stack: ["Tableau", "EDA", "Customer segmentation"],
    overview:
      "An analytical study of customer attrition: when customers leave, why, and which intervention actually makes sense.",
    problem:
      "Acquisition costs far exceed retention costs — but without knowing when and why subscribers cancel, retention spending fires blind.",
    contributions: [
      "Explored correlations between contract type, monthly charges, tenure and churn probability.",
      "Segmented cohorts to isolate high-risk accounts.",
      "Built linked Tableau worksheets comparing churn across payment methods and demographics.",
      "Closed with written recommendations targeting the riskiest segments first.",
    ],
    repo: "https://github.com/kasapuprabhudeep/FUTURE_DS_02",
    liveDemo: "",
    image: "",
  },
  {
    id: "movie-recommendation-system",
    title: "Movie recommendation & review system",
    tagline: "Flask app on a polyglot stack — MongoDB documents + Neo4j graph",
    category: "Full Stack & Databases",
    featured: true,
    stack: ["Python", "Flask", "MongoDB", "Neo4j"],
    overview:
      "A discovery app where document storage handles rich movie metadata and a graph database handles the relationships that drive recommendations.",
    problem:
      "Relational schemas model poorly the very thing recommendations depend on: multi-hop relationships between users, reviews, co-actors and genres.",
    contributions: [
      "Modelled actors, directors, genres and user ratings as a Neo4j graph with multi-hop traversals.",
      "Stored movie details, profiles and reviews as MongoDB documents.",
      "Built a Flask backend coordinating queries across both databases.",
      "Shipped a responsive frontend for browsing, rating and graph-derived 'similar movies'.",
    ],
    repo: "https://github.com/kasapuprabhudeep/movie-recommendation-review-system",
    liveDemo: "",
    image: "",
  },
  {
    id: "future-ds-01",
    title: "Future Interns — analytics project 01",
    tagline: "Dataset preprocessing, statistical exploration and visual reporting",
    category: "Internship Projects",
    featured: false,
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    overview:
      "First deliverable of the Future Interns data science internship: prepare a raw industry dataset, then interrogate it.",
    problem:
      "Raw industry data arrives with inconsistent formats and missing indicators that break analysis before it starts.",
    contributions: [
      "Audited schemas and cleaned the dataset programmatically with Pandas.",
      "Profiled distributions, skewness and variance across variables.",
      "Produced correlation heatmaps and bivariate plots in Seaborn.",
      "Documented every method step in reproducible notebooks.",
    ],
    repo: "https://github.com/kasapuprabhudeep/FUTURE_DS_01",
    liveDemo: "",
    image: "",
  },
  {
    id: "future-ds-02",
    title: "Future Interns — analytics project 02",
    tagline: "Churn and retention reporting delivered as a Tableau story",
    category: "Internship Projects",
    featured: false,
    stack: ["Python", "SQL", "Tableau"],
    overview:
      "Second deliverable of the internship: the customer retention study shown above, framed and reported to an internship standard.",
    problem:
      "Retention reporting had to hold up as a standalone artifact for non-technical evaluation.",
    contributions: [
      "Built the retention analysis end-to-end in Tableau.",
      "Structured findings into a story format readable without analyst context.",
      "Backed every visual with a reproducible query or notebook.",
    ],
    repo: "https://github.com/kasapuprabhudeep/FUTURE_DS_02",
    liveDemo: "",
    image: "",
  },
];

/* ── 6. Experience ──────────────────────────────────────────────── */
/* Leave `period: ""` if you don't have exact dates — the UI adapts. */

export const experience = [
  {
    id: "future-interns",
    organization: "Future Interns",
    role: "Data Science & Analytics Intern",
    kind: "Remote internship",
    period: "May 2026 – Jul 2026", // ← update here when dates change
    summary:
      "Internship structured around dataset preparation, exploratory analysis and documented reporting — delivered as two graded projects.",
    highlights: [
      "Cleaned and audited diverse multi-attribute datasets before any analysis ran.",
      "Computed descriptive statistics and distribution profiles with Pandas and NumPy.",
      "Built visual reports — distribution charts, correlation plots — to isolate trends and outliers.",
      "Delivered both graded projects (see Future Interns 01 & 02 in Selected work).",
    ],
    tools: ["Python", "SQL", "Tableau", "Pandas"],
    proof: {
      label: "Verify certificate",
      url: "https://drive.google.com/file/d/1_WEuvtMgW4JPFc-PsHWp2_DqeXi1sS_N/view?usp=sharing",
    },
  },
  {
    id: "internship-studio",
    organization: "Internship Studio",
    role: "Data Analytics Intern / Trainee",
    kind: "Virtual training & project internship",
    period: "", // ← fill in real dates when known
    summary:
      "Structured training in core analytics tools, applied to an end-to-end retail sales analysis with a business intelligence dashboard.",
    highlights: [
      "Analyzed retail transactions for revenue, regional spread and product performance.",
      "Wrote structured MySQL queries — filters, joins and aggregations over transactional records.",
      "Designed and deployed an interactive Power BI dashboard with dynamic filters and KPI cards.",
      "Reported findings as structured summaries for non-technical readers.",
    ],
    tools: ["MySQL", "Power BI", "Python", "DAX"],
    proof: {
      label: "Verify certificate",
      url: "https://drive.google.com/file/d/1S9wtxbQou2G0jBaKsfx1W9MRB0hm4S5E/view?usp=sharing",
    },
  },
];

/* ── 7. Certifications (credential rows with verify links) ──────── */

export const certifications = [
  {
    id: "freecodecamp-python",
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    category: "Python & statistics",
    description: "Pandas, NumPy, Matplotlib and statistical processing, assessed by project.",
    verify: {
      label: "Verify credential",
      url: "https://drive.google.com/file/d/1belqZ1sTeEdKYirE3bbh6LwkE4TczCxB/view?usp=sharing",
    },
  },
  {
    id: "future-interns-cert",
    title: "Data Science & Analytics",
    issuer: "Future Interns",
    category: "Industry internship",
    description: "Certified completion of the internship's dataset and reporting track.",
    verify: {
      label: "Verify credential",
      url: "https://drive.google.com/file/d/1_WEuvtMgW4JPFc-PsHWp2_DqeXi1sS_N/view?usp=share_link",
    },
  },
  {
    id: "internship-studio-cert",
    title: "Data Analytics",
    issuer: "Internship Studio",
    category: "Industry training",
    description: "Trainee credential for retail analytics, MySQL querying and Power BI work.",
    verify: {
      label: "Verify credential",
      url: "https://drive.google.com/file/d/1S9wtxbQou2G0jBaKsfx1W9MRB0hm4S5E/view?usp=sharing",
    },
  },
];

/* ── 8. Education ───────────────────────────────────────────────── */

export const educationHistory = [
  {
    degree: "B.Tech · Computer Science & Engineering",
    institution: "JNTU-GV College of Engineering, Vizianagaram",
    academicYear: "2023 – 2027", // ← keep this the class timeline you can defend
    status: "Final-year student",
    focus: [
      "Core coursework: DBMS, data structures & algorithms, operating systems",
      "Practical thread kept on SQL querying and dashboard design",
      "Project work includes a polyglot-database discovery application",
    ],
  },
];
