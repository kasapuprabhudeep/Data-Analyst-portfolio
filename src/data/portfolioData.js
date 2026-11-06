/**
 * Centralized Portfolio Data for Kasapu Prabhudeep
 * 
 * NOTE TO USER:
 * All personal details, project links, certificates, and contact points
 * can be modified directly in this file without editing UI component logic.
 */

export const personalInfo = {
  name: "Kasapu Prabhudeep",
  firstName: "Prabhudeep",
  headline: "Aspiring Data Analyst",
  subHeadline: "Turning Data Into Meaningful Business Insights.",
  tags: ["Data Analyst", "Python", "SQL", "Excel", "Power BI", "Tableau"],
  status: "Available for Internships & Full-time Roles",
  location: "Vizianagaram, Andhra Pradesh, India",
  institution: "JNTU-GV College of Engineering, Vizianagaram",
  degree: "B.Tech in Computer Science and Engineering",
  academicYear: "2026–2027",
  
  careerObjective: "To become a professional Data Analyst and solve real-world business problems using data analytics, visualization, SQL, Python, and business intelligence tools.",
  
  bio: "I am a Computer Science Engineering student passionate about transforming raw data into meaningful business insights. I work with Python, SQL, Excel, Power BI, and Tableau to explore datasets, identify patterns, build interactive dashboards, and communicate data-driven insights. I enjoy solving practical business problems and continuously developing my analytical and technical skills.",
  
  socialLinks: {
    github: "https://github.com/kasapuprabhudeep",
    linkedin: "https://www.linkedin.com/in/kasapu-prabhudeep/", // Replace with your exact LinkedIn profile URL
    email: "prabhudeep.kasapu@gmail.com", // Replace with your primary email address
    phonePlaceholder: "+91 98765 43210" // Optional phone contact
  },

  resume: {
    fileName: "Kasapu_Prabhudeep_Resume.pdf",
    filePath: "/resume.pdf", // Place your PDF in the /public folder as resume.pdf
    viewPath: "/resume.pdf",
    lastUpdated: "November 2026"
  }
};

export const analyticalStrengths = [
  {
    title: "Data Cleaning & Preprocessing",
    description: "Handling missing values, outlier detection, schema restructuring, and transforming raw, messy datasets into clean, analysis-ready formats.",
    icon: "Filter"
  },
  {
    title: "SQL & Database Querying",
    description: "Writing complex multi-table joins, subqueries, CTEs, aggregation pipelines, and window functions to query relational databases efficiently.",
    icon: "Database"
  },
  {
    title: "BI & Dashboard Development",
    description: "Architecting interactive visual dashboards in Power BI and Tableau with calculated fields, DAX measures, and drill-down capabilities.",
    icon: "BarChart3"
  },
  {
    title: "Exploratory Data Analysis",
    description: "Uncovering underlying data patterns, customer behaviors, correlation matrixes, and sales drivers using Python (Pandas, NumPy, Matplotlib).",
    icon: "Search"
  },
  {
    title: "Data Storytelling & Reporting",
    description: "Bridging the gap between technical data metrics and executive business stakeholders through concise, actionable visual narratives.",
    icon: "LineChart"
  },
  {
    title: "Business Problem Solving",
    description: "Translating ambiguous business challenges—such as customer churn or inventory stockouts—into structured analytical frameworks.",
    icon: "Briefcase"
  }
];

export const skillCategories = [
  {
    category: "Programming",
    icon: "Code2",
    description: "Core languages for scripting, algorithmic data manipulation, and software fundamentals.",
    skills: [
      { name: "Python", type: "Primary", highlight: true },
      { name: "Java", type: "Core", highlight: false },
      { name: "C", type: "Foundational", highlight: false }
    ]
  },
  {
    category: "Data Analytics",
    icon: "Database",
    description: "Relational database querying, quantitative analysis, and preprocessing workflows.",
    skills: [
      { name: "SQL", type: "Primary", highlight: true },
      { name: "MySQL", type: "Relational DB", highlight: true },
      { name: "Advanced Excel", type: "Formulas & Pivot Tables", highlight: true },
      { name: "Data Cleaning", type: "Preprocessing", highlight: true },
      { name: "Exploratory Data Analysis", type: "EDA & Statistics", highlight: true }
    ]
  },
  {
    category: "Visualization & BI",
    icon: "PieChart",
    description: "Business intelligence tools for visual metrics, KPI tracking, and interactive dashboards.",
    skills: [
      { name: "Power BI", type: "Dashboards & DAX", highlight: true },
      { name: "Tableau", type: "Visual Analytics", highlight: true },
      { name: "Power Query", type: "ETL & Transformation", highlight: false },
      { name: "Data Visualization", type: "Visual Storytelling", highlight: true }
    ]
  },
  {
    category: "Web Technologies",
    icon: "Globe",
    description: "Foundational frontend technologies for web interfaces and data presentation.",
    skills: [
      { name: "HTML", type: "Markup", highlight: false },
      { name: "CSS", type: "Styling", highlight: false },
      { name: "JavaScript", type: "Scripting", highlight: false }
    ]
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    description: "Industry-standard development environments, database managers, and version control.",
    skills: [
      { name: "VS Code", type: "IDE", highlight: false },
      { name: "MySQL Workbench", type: "DB Administration", highlight: true },
      { name: "Git", type: "Version Control", highlight: false },
      { name: "GitHub", type: "Collaboration", highlight: true }
    ]
  }
];

export const projects = [
  {
    id: "retail-sales-analysis",
    title: "Retail Sales Data Analysis",
    subtitle: "End-to-End Sales Performance, Product & Demographic Analytics",
    category: "Data Analytics & BI",
    featured: true,
    technologies: ["Python", "MySQL", "Power BI", "Data Cleaning", "DAX"],
    overview: "An end-to-end retail sales analysis project focused on understanding overall store performance, category-level revenues, regional distribution, and customer purchase demographics.",
    businessProblem: "Retail managers often lack consolidated visibility into which product categories yield healthy profit margins versus high volume, and which customer cohorts exhibit the highest lifetime value.",
    keyFeatures: [
      "Extensive data cleaning and validation using Python (Pandas) to eliminate anomalies and handle missing values.",
      "Custom SQL queries to aggregate multi-year transactions, compute sales growth, and group demographic tiers.",
      "In-depth customer segmentation to identify high-value consumer groups and repeat buyers.",
      "Category-wise performance analysis comparing sales volume, revenue, and return frequency.",
      "Interactive Power BI dashboard featuring dynamic slicers, KPI summary cards, and regional heatmaps."
    ],
    metricsPreview: [
      { label: "Category Analyzed", value: "Electronics & Apparel" },
      { label: "Queries Created", value: "25+ Analytical SQL Views" },
      { label: "Dashboard Pages", value: "3 Dynamic Reports" }
    ],
    github: "https://github.com/kasapuprabhudeep", // Replace with specific repository link if separate
    liveDemo: null,
    dashboardPreviewType: "retail",
    image: "/images/projects/retail-sales.png"
  },
  {
    id: "customer-churn-analysis",
    title: "Customer Churn Analysis",
    subtitle: "Investigating Customer Attrition & Retention Patterns",
    category: "Data Analytics & BI",
    featured: true,
    technologies: ["Tableau", "Data Analytics", "EDA", "Customer Segmentation"],
    overview: "An analytical investigation designed to dissect customer churn patterns, evaluate tenure distributions, and pinpoint primary drivers behind client attrition.",
    businessProblem: "Customer acquisition costs substantially exceed retention expenses. Without granular visibility into when and why customers terminate subscriptions, retention interventions remain ineffective.",
    keyFeatures: [
      "Rigorous exploratory analysis identifying correlations between contract type, monthly charges, and churn probability.",
      "Customer cohort segmentation isolating high-risk accounts based on service tickets and tenure.",
      "Interactive Tableau worksheets linking churn rate across payment methods and demographic segments.",
      "Visual reporting dashboard enabling account managers to simulate retention intervention outcomes.",
      "Actionable recommendations formulated to target high-risk customer segments proactively."
    ],
    metricsPreview: [
      { label: "Core Focus", value: "Churn Drivers & Tenure" },
      { label: "Visual Format", value: "Interactive Tableau Story" },
      { label: "Key Segment", value: "Month-to-Month Contracts" }
    ],
    github: "https://github.com/kasapuprabhudeep",
    liveDemo: null,
    dashboardPreviewType: "churn",
    image: "/images/projects/customer-churn.png"
  },
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation & Review System",
    subtitle: "Hybrid Document & Graph Database Discovery Platform",
    category: "Full Stack & Databases",
    featured: true,
    technologies: ["Python", "Flask", "MongoDB", "Neo4j", "HTML", "CSS", "JavaScript"],
    overview: "A movie recommendation and review application that combines document-based storage for rich metadata with graph database relationships to deliver personalized movie discovery.",
    businessProblem: "Traditional relational databases struggle to efficiently model complex interconnected relationships such as user review networks, co-actors, directors, and shared genre affinities at scale.",
    keyFeatures: [
      "Utilized Neo4j graph database to model multi-hop entity relationships (actors, directors, genres, and user ratings).",
      "Integrated MongoDB for flexible document storage of movie details, user profiles, and review transcripts.",
      "Developed a Python Flask RESTful backend coordinating querying across both NoSQL databases.",
      "Responsive frontend UI for browsing catalogs, submitting ratings, and viewing graph-derived recommendations.",
      "Personalized recommendation logic utilizing graph traversals for similar movie discovery."
    ],
    metricsPreview: [
      { label: "Architecture", value: "Polyglot Persistence" },
      { label: "Databases", value: "MongoDB + Neo4j Graph" },
      { label: "Backend", value: "Python / Flask API" }
    ],
    github: "https://github.com/kasapuprabhudeep/movie-recommendation-review-system",
    liveDemo: null,
    dashboardPreviewType: "graph",
    image: "/images/projects/movie-rec.png"
  },
  {
    id: "future-ds-01",
    title: "Future Interns: Data Analytics Project 01",
    subtitle: "Dataset Preprocessing, Statistical Exploration & Visualization",
    category: "Internship Projects",
    featured: false,
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Cleaning"],
    overview: "A hands-on data science and analytics project completed during the Future Interns summer internship focusing on comprehensive dataset exploration and diagnostic analysis.",
    businessProblem: "Raw industry data frequently suffers from inconsistent formats, missing indicators, and unstandardized scales that require rigorous preparation before extracting insights.",
    keyFeatures: [
      "Applied statistical summaries to identify distributions, skewness, and variance across variables.",
      "Implemented programmatic data transformation pipelines using Pandas and NumPy.",
      "Crafted correlation heatmaps and bivariate distribution plots using Seaborn.",
      "Documented analytical deductions and step-by-step methodologies in clean Jupyter notebooks."
    ],
    metricsPreview: [
      { label: "Program", value: "Future Interns" },
      { label: "Domain", value: "Exploratory Analytics" },
      { label: "Deliverable", value: "Cleaned Data & Insights" }
    ],
    github: "https://github.com/kasapuprabhudeep",
    liveDemo: null,
    dashboardPreviewType: "stats",
    image: "/images/projects/future-ds-01.png"
  },
  {
    id: "future-ds-02",
    title: "Future Interns: Data Analytics Project 02",
    subtitle: "Hypothesis Testing, Feature Analysis & Business Insights",
    category: "Internship Projects",
    featured: false,
    technologies: ["Python", "SQL", "Data Visualization", "Statistical Analysis"],
    overview: "Second analytical project completed under the Future Interns internship, expanding into hypothesis verification, trend forecasting, and executive reporting.",
    businessProblem: "Understanding multi-variable dependencies in operational data to inform strategic decision-making and performance benchmarking.",
    keyFeatures: [
      "Formulated and evaluated data-driven hypotheses against cleaned operational datasets.",
      "Built visual reporting charts highlighting cyclical trends and seasonal anomalies.",
      "Summarized findings into structured presentation decks suited for non-technical evaluation.",
      "Demonstrated reproducible analytics workflows and clean code documentation."
    ],
    metricsPreview: [
      { label: "Program", value: "Future Interns" },
      { label: "Focus", value: "Trend & Hypothesis Testing" },
      { label: "Deliverable", value: "Analytical Report" }
    ],
    github: "https://github.com/kasapuprabhudeep",
    liveDemo: null,
    dashboardPreviewType: "trend",
    image: "/images/projects/future-ds-02.png"
  }
];

export const internshipExperience = [
  {
    id: "future-interns",
    company: "Future Interns",
    role: "Data Science & Analytics Intern",
    period: "May 2026 – July 2026",
    type: "Remote Internship",
    summary: "Engaged in hands-on data analytics assignments involving real-world datasets, structured exploratory data analysis, and visual insight generation.",
    responsibilities: [
      "Conducted thorough dataset exploration, schema auditing, and data cleaning across diverse multi-attribute datasets.",
      "Formulated analytical problem statements and leveraged Python (Pandas, NumPy) to compute core descriptive statistics.",
      "Constructed visual data charts, correlation plots, and distribution summaries to isolate trends and outliers.",
      "Authored detailed project documentation, summarizing methodologies, analytical observations, and actionable conclusions.",
      "Completed assigned milestones within structured sprint timelines, submitting verified project deliverables (FUTURE_DS_01 & FUTURE_DS_02)."
    ],
    skillsApplied: ["Python", "Data Exploration", "Data Cleaning", "Data Visualization", "Problem Solving", "Documentation"],
    hasCertificate: true,
    certificateTitle: "Future Interns – Data Science & Analytics Certificate",
    certificateImage: "/images/certificates/future-interns.png",
    verificationLink: "https://futureinterns.com/verify" // Replace with exact verification link
  },
  {
    id: "internship-studio",
    company: "Internship Studio",
    role: "Data Analytics Intern / Trainee",
    period: "Internship / Trainee Program",
    type: "Virtual Training & Project Internship",
    summary: "Underwent intensive hands-on training in core data analytics tools followed by real-world retail sales analysis and interactive business intelligence dashboard creation.",
    responsibilities: [
      "Analyzed end-to-end retail sales transaction data to evaluate revenue metrics, regional distribution, and product performance.",
      "Wrote structured MySQL queries to extract, filter, join, and aggregate transactional database records.",
      "Designed and deployed an interactive Power BI dashboard featuring dynamic filters, KPI cards, and trend visuals.",
      "Delivered structured data-driven reports translating complex dataset findings into clear business observations."
    ],
    skillsApplied: ["MySQL", "Python", "Power BI", "Retail Sales Analysis", "DAX", "Data Storytelling"],
    hasCertificate: true,
    certificateTitle: "Internship Studio – Data Analytics Trainee Certificate",
    certificateImage: "/images/certificates/internship-studio.png",
    verificationLink: "https://internshipstudio.com/verify" // Replace with exact verification link
  }
];

export const certifications = [
  {
    id: "freecodecamp-python",
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    category: "Data Analytics & Python",
    description: "Hands-on certification covering data analysis using Python, Pandas, NumPy, Matplotlib, and statistical data processing.",
    badge: "Verified Credential",
    image: "/images/certificates/freecodecamp.png",
    verificationUrl: "https://freecodecamp.org/certification/kasapuprabhudeep/data-analysis-with-python-v7", // Replace with your link
    topics: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning", "Statistical Modeling"]
  },
  {
    id: "future-interns-cert",
    title: "Data Science & Analytics",
    issuer: "Future Interns",
    category: "Industry Internship",
    description: "Practical internship certification validating dataset preprocessing, exploratory analysis, and analytical problem-solving.",
    badge: "Internship Completion",
    image: "/images/certificates/future-interns.png",
    verificationUrl: "https://futureinterns.com/verify",
    topics: ["Dataset Exploration", "Analytical Reasoning", "Python EDA", "Project Documentation"]
  },
  {
    id: "internship-studio-cert",
    title: "Data Analytics Certification",
    issuer: "Internship Studio",
    category: "Industry Training",
    description: "Trainee certification focused on practical retail analytics, MySQL querying, and Power BI dashboard engineering.",
    badge: "Trainee Credential",
    image: "/images/certificates/internship-studio.png",
    verificationUrl: "https://internshipstudio.com/verify",
    topics: ["MySQL Queries", "Power BI Dashboards", "Sales Analytics", "DAX Measures"]
  },
  {
    id: "umd-dbms",
    title: "Database Management Systems",
    issuer: "University of Maryland",
    category: "Database Engineering",
    description: "Academic credential covering relational database design, normalization, relational algebra, SQL transactions, and indexing.",
    badge: "Academic Certification",
    image: "/images/certificates/umd-dbms.png",
    verificationUrl: "https://coursera.org/verify", // Replace with exact link
    topics: ["Relational Algebra", "SQL Queries", "Schema Normalization", "Indexing", "ACID Properties"]
  },
  {
    id: "microsoft-power-bi",
    title: "Power BI Data Visualization & Analytics",
    issuer: "Microsoft / Authorized Training",
    category: "Business Intelligence",
    description: "Professional training in Power BI dashboard design, data modeling, Power Query ETL, and DAX metric formulation.",
    badge: "BI Specialization",
    image: "/images/certificates/powerbi.png",
    verificationUrl: "https://learn.microsoft.com/credentials", // Replace with exact link
    topics: ["Power BI Desktop", "Power Query ETL", "Data Modeling", "DAX Formulas", "Executive Dashboards"]
  }
];

export const educationHistory = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "JNTU-GV College of Engineering, Vizianagaram",
    academicYear: "2026–2027",
    status: "Final Year Student",
    description: "Pursuing Bachelor of Technology with a dedicated specialization in data structures, relational database management systems, programming in Python/Java/C, and modern data analytics paradigms.",
    highlights: [
      "Comprehensive coursework in Database Management Systems (DBMS), Data Structures & Algorithms, and Operating Systems.",
      "Active focus on practical data analysis, SQL database querying, and dashboard design.",
      "Collaboration on academic software engineering and database projects including polyglot movie discovery platforms."
    ]
  }
];

// Interactive mock data for real-time Recharts dashboards in the portfolio
export const liveSalesData = [
  { month: "Jan", sales: 42000, profit: 12400, target: 40000 },
  { month: "Feb", sales: 48000, profit: 14800, target: 45000 },
  { month: "Mar", sales: 55000, profit: 18200, target: 50000 },
  { month: "Apr", sales: 51000, profit: 15600, target: 52000 },
  { month: "May", sales: 63000, profit: 21500, target: 58000 },
  { month: "Jun", sales: 72000, profit: 26300, target: 65000 },
  { month: "Jul", sales: 68000, profit: 24100, target: 67000 },
  { month: "Aug", sales: 79000, profit: 29500, target: 72000 }
];

export const categoryBreakdownData = [
  { name: "Electronics", value: 38, fill: "#38BDF8" },
  { name: "Apparel", value: 26, fill: "#0284C7" },
  { name: "Home & Kitchen", value: 21, fill: "#22D3EE" },
  { name: "Books & Media", value: 15, fill: "#818CF8" }
];

export const churnCohortData = [
  { tenureGroup: "0-6 Mo", active: 62, churned: 38 },
  { tenureGroup: "7-12 Mo", active: 76, churned: 24 },
  { tenureGroup: "13-24 Mo", active: 88, churned: 12 },
  { tenureGroup: "25+ Mo", active: 94, churned: 6 }
];
