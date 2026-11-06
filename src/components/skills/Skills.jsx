import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import SkillCard from './SkillCard';
import { skillCategories } from '../../data/portfolioData';
import { Sparkles, Terminal, Layers } from 'lucide-react';

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Programming', 'Data Analytics', 'Visualization & BI', 'Developer Tools'];

  const filteredCategories = selectedFilter === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.category.toLowerCase().includes(selectedFilter.toLowerCase().split(' ')[0]));

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Technical Skills"
          title="Analytical Toolkit & Core Technologies"
          subtitle="Honest, recruiter-aligned inventory of languages, database engines, BI tools, and software development utilities. No fabricated percentage bars."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                selectedFilter === filter
                  ? 'bg-electric-600 border-electric-500 text-white shadow-md shadow-electric-600/30'
                  : 'bg-white dark:bg-navy-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-cyan-400/50 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Core Competencies Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-electric-500/20 bg-gradient-to-r from-navy-900/40 via-navy-850/60 to-navy-900/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Data Analyst Foundation Stack
                </h4>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                  Fluent in extracting raw relational data with <strong>SQL / MySQL</strong>, processing & aggregating with <strong>Python (Pandas)</strong>, and modeling executive dashboards in <strong>Power BI & Tableau</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Industry Standard Workflow
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

