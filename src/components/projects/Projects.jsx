import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import { projects } from '../../data/portfolioData';
import { FolderGit2, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filterTabs = ['All', 'Data Analytics & BI', 'Full Stack & Databases', 'Internship Projects'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Featured Projects"
          title="Analytical Projects & Business Dashboards"
          subtitle="Explore practical applications combining Python exploratory data analysis, MySQL database querying, and interactive Power BI & Tableau dashboards."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                selectedFilter === tab
                  ? 'bg-electric-600 border-electric-500 text-white shadow-md shadow-electric-600/30 font-semibold'
                  : 'bg-white dark:bg-navy-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-cyan-400/50 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenDetails={(p) => setActiveProjectModal(p)}
            />
          ))}
        </div>

        {/* Recruiter assurance banner */}
        <div className="mt-12 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-navy-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>All code repositories, SQL queries, and Power BI models are structured with clean commit logs and modular scripts.</span>
          </div>
          <span className="font-mono text-cyan-500 font-semibold flex-shrink-0">
            5 Documented Projects
          </span>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={activeProjectModal}
        isOpen={!!activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
}
