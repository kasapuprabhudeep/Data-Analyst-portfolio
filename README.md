# 📊 Kasapu Prabhudeep — Premium Data Analyst Portfolio

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.1-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Recharts](https://img.shields.io/badge/Recharts-2.13-22D3EE)](https://recharts.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A high-performance, recruiter-friendly personal portfolio website crafted for **Kasapu Prabhudeep**, an aspiring Data Analyst and final-year Computer Science Engineering student at **JNTU-GV College of Engineering, Vizianagaram (2026–2027)**.

Designed with inspiration from modern enterprise technology interfaces—featuring dark navy aesthetics, electric cyan accents, interactive Recharts data dashboards, verified project breakdowns, and comprehensive resume management.

---

## 🌟 Key Features

- 🎯 **Executive Recruiter Clarity**: Communicates technical capabilities, core competencies, education, and internship milestones within the first five seconds.
- 📈 **Interactive Live Data Dashboards**: Embedded Recharts analytics models demonstrating real-time SQL and Power BI/Tableau visual logic directly inside the portfolio.
- 🎨 **Navy & Electric Cyan Theme**: Inspired by cutting-edge analytics platforms with dark mode / light mode persistence via `localStorage`.
- 📁 **Centralized Editable Architecture**: Modify all personal data, social links, project descriptions, and credentials in a single configuration file (`src/data/portfolioData.js`).
- 💼 **Deep-Dive Project Case Studies**: Detailed modal views covering business problem statements, methodologies, SQL queries, DAX metrics, and direct GitHub repositories.
- 📄 **1-Click Resume Management**: Download and preview resume with a single click. Easily replace `public/resume.pdf` without touching application code.
- 🛡️ **Zero Fake Data Guarantees**: Honest, verified entries without fabricated percentage bars or simulated contact success states. Direct native email client dispatch.
- 📱 **Fully Responsive & Accessible**: Optimized for mobile devices, tablets, and ultra-wide displays with keyboard navigation and smooth scrolling.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Library** | React.js (v18.3) with functional components & hooks |
| **Build Tool** | Vite (v5.4) with manual Rollup chunk splitting |
| **Styling** | Tailwind CSS (v3.4) with custom Navy & Cyan design tokens |
| **Animations** | Framer Motion (v11) for subtle scroll reveals & dialog transitions |
| **Visualizations** | Recharts (v2.13) for interactive area charts, bar charts, and cohort retention diagrams |
| **Icons** | Lucide React |

---

## 📂 Project Architecture

```
d:/Prabhudeep_Portfolio/
├── public/
│   ├── favicon.svg                # High-resolution vector data logo
│   └── resume.pdf                 # Replaceable resume document
├── src/
│   ├── assets/                    # Static image scans & illustrations
│   ├── components/
│   │   ├── about/
│   │   │   └── About.jsx          # Professional introduction & 6 core competencies
│   │   ├── certifications/
│   │   │   ├── CertificateCard.jsx# Gallery card with verification links
│   │   │   └── Certifications.jsx # Certificate gallery & preview modal
│   │   ├── common/
│   │   │   ├── Footer.jsx         # Footer with social links & copyright
│   │   │   ├── Modal.jsx          # Reusable accessible dialog container
│   │   │   ├── Navbar.jsx         # Sticky navigation with mobile drawer
│   │   │   ├── NotFound.jsx       # 404 query fallback component
│   │   │   ├── ScrollToTop.jsx    # Floating back-to-top button
│   │   │   ├── SectionHeader.jsx  # Consistent section title & badge component
│   │   │   └── ThemeToggle.jsx    # Light / Dark mode switcher
│   │   ├── contact/
│   │   │   ├── Contact.jsx        # Contact info, copy-email button, cards
│   │   │   └── ContactForm.jsx    # Validated contact form with mailto dispatch
│   │   ├── education/
│   │   │   └── Education.jsx      # JNTU-GV B.Tech CSE educational timeline
│   │   ├── experience/
│   │   │   ├── Experience.jsx     # Future Interns & Internship Studio timeline
│   │   │   └── TimelineItem.jsx   # Alternating timeline milestone node
│   │   ├── hero/
│   │   │   ├── AnalyticalCanvas.jsx # Subtle background particle data mesh
│   │   │   ├── Hero.jsx           # Powerful opening with CTA buttons
│   │   │   └── MetricPreviewChart.jsx # Interactive live KPI area chart
│   │   ├── projects/
│   │   │   ├── LiveDataDashboardPreview.jsx # Recharts interactive project preview
│   │   │   ├── ProjectCard.jsx    # Filterable project card
│   │   │   ├── ProjectDetailModal.jsx # Full case study & business problem modal
│   │   │   └── Projects.jsx       # Category tabs & showcase grid
│   │   └── resume/
│   │       └── ResumeSection.jsx  # Dedicated resume section & document viewer
│   ├── data/
│   │   └── portfolioData.js       # 🔑 CENTRAL EDITABLE DATA SOURCE
│   ├── hooks/
│   │   ├── useScrollSpy.js        # Active navigation link tracker
│   │   └── useTheme.js            # Light/Dark mode state synchronization
│   ├── styles/
│   │   └── index.css              # Tailwind layers & custom analytical styling
│   ├── App.jsx                    # Root layout orchestration
│   └── main.jsx                   # React DOM entry point
├── index.html                     # SEO metadata, OpenGraph tags, web fonts
├── package.json                   # Script definitions & dependencies
├── tailwind.config.js             # Navy color palette and keyframes
└── vite.config.js                 # Rollup chunk optimization
```

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm or yarn

### 1. Clone or Open Workspace
```bash
cd d:/Prabhudeep_Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, chunked production bundle in the `dist/` directory ready for deployment.

---

## ✏️ How to Personalize & Update Content

You do not need to hunt through component code to update your profile. Everything is consolidated inside:

👉 `src/data/portfolioData.js`

### 1. Update Contact & Social Media
```javascript
export const personalInfo = {
  name: "Kasapu Prabhudeep",
  socialLinks: {
    github: "https://github.com/kasapuprabhudeep",
    linkedin: "https://www.linkedin.com/in/YOUR_USERNAME/",
    email: "your.email@example.com"
  }
};
```

### 2. Update Resume
Simply place your updated PDF in:
`public/resume.pdf`
The website will immediately serve your new PDF across all download and preview buttons.

### 3. Add or Modify Projects
Add items to the `projects` array in `src/data/portfolioData.js`:
```javascript
{
  id: "retail-sales-analysis",
  title: "Retail Sales Data Analysis",
  category: "Data Analytics & BI",
  technologies: ["Python", "MySQL", "Power BI"],
  businessProblem: "Your business problem description...",
  keyFeatures: ["Feature 1", "Feature 2"],
  github: "https://github.com/kasapuprabhudeep/your-repo"
}
```

---

## 🌐 Deployment Guide: Vercel (Recommended)

Vercel provides zero-configuration hosting with instant global CDN distribution, automatic HTTPS, and automatic Git previews.

### Method 1: Deploy with Git & Vercel Dashboard (Easiest)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete premium data analyst portfolio"
   git branch -M main
   git remote add origin https://github.com/kasapuprabhudeep/Data-Analyst-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com/) and sign in with GitHub.
   - Click **"Add New Project"** -> **"Import"** next to your repository.
   - Framework Preset will automatically detect **Vite**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **"Deploy"**.

Your website will be live in under 60 seconds with a free `.vercel.app` domain!

---

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel

# Deploy to production
vercel --prod
```

---

## 🔗 How to Connect Your Custom Domain

Once your site is live on Vercel:

1. Purchase your desired domain (e.g. `prabhudeep.dev`, `kasapuprabhudeep.com`) from Namecheap, GoDaddy, Google Domains, or Cloudflare.
2. In your Vercel Dashboard, select your portfolio project.
3. Navigate to **Settings** -> **Domains**.
4. Enter your custom domain (e.g. `prabhudeep.dev`) and click **Add**.
5. Configure your DNS records at your domain provider as shown by Vercel:
   - **Type A**: `@` -> `76.76.21.21`
   - **CNAME**: `www` -> `cname.vercel-dns.com`
6. Vercel will automatically provision a free SSL certificate within a few minutes.

---

## 👨‍💻 Candidate Profile Summary

- **Name**: Kasapu Prabhudeep
- **Role**: Aspiring Data Analyst
- **Institution**: JNTU-GV College of Engineering, Vizianagaram (B.Tech CSE 2026–2027)
- **Primary Stack**: Python, SQL, MySQL, Advanced Excel, Power BI, Tableau, Power Query
- **GitHub**: [github.com/kasapuprabhudeep](https://github.com/kasapuprabhudeep)
- **Movie Recommendation System Repo**: [github.com/kasapuprabhudeep/movie-recommendation-review-system](https://github.com/kasapuprabhudeep/movie-recommendation-review-system)

---

## 📄 License
This portfolio is open source and available under the [MIT License](LICENSE).

