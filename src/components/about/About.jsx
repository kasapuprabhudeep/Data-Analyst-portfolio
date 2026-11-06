import React from 'react';
import { motion } from 'framer-motion';
import { 
  Filter, 
  Database, 
  BarChart3, 
  Search, 
  LineChart, 
  Briefcase, 
  Compass, 
  CheckCircle2, 
  Quote, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { personalInfo, analyticalStrengths } from '../../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Filter: Filter,
  Database: Database,
  BarChart3: BarChart3,
  Search: Search,
  LineChart: LineChart,
  Briefcase: Briefcase
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="About Me"
          title="Turning Raw Data Into Actionable Insights"
          subtitle="Recruiter-focused overview of my analytical philosophy, practical toolset, and commitment to business intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Career Objective (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Primary Quote Box */}
            <div className="relative p-6 sm:p-7 rounded-2xl glass-card border border-electric-500/20 shadow-xl overflow-hidden">
              <Quote className="absolute -top-2 -right-2 w-20 h-20 text-electric-500/10 dark:text-cyan-400/10 pointer-events-none" />
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Professional Statement
              </h3>

              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
                "{personalInfo.bio}"
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{personalInfo.name}</span>
                <span>{personalInfo.degree}</span>
              </div>
            </div>

            {/* Career Objective Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-electric-500/10 text-cyan-400 mt-1">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Career Objective
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {personalInfo.careerObjective}
                  </p>
                </div>
              </div>
            </div>

            {/* What Recruiters Value */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
                Recruiter Alignment Checklist:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Clean, production-grade Python & SQL code",
                  "Structured data cleaning & missing value handling",
                  "DAX measures & dynamic Power BI slicers",
                  "Interactive Tableau visual storytelling",
                  "End-to-end data pipeline mindset",
                  "Collaborative Git & GitHub version control"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: 6 Core Analytical Competencies (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {analyticalStrengths.map((strength, index) => {
                const IconComponent = iconMap[strength.icon] || BarChart3;
                return (
                  <div
                    key={strength.title}
                    className="p-5 rounded-2xl bg-white dark:bg-navy-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-electric-500/10 dark:bg-electric-500/15 border border-electric-500/20 flex items-center justify-center text-electric-600 dark:text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                      {strength.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick action card */}
            <div className="mt-5 p-4 rounded-xl border border-electric-500/30 bg-gradient-to-r from-electric-950/30 to-navy-900/50 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Looking for verified project implementations?</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Explore retail sales, customer churn, and database architectures.</p>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
              >
                <span>Jump to Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
