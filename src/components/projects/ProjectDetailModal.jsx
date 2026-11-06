import React from 'react';
import Modal from '../common/Modal';
import { 
  Github, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  Database,
  BarChart2
} from 'lucide-react';
import LiveDataDashboardPreview from './LiveDataDashboardPreview';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="max-w-4xl">
      <div className="space-y-6">
        
        {/* Subtitle & Category */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <p className="text-sm font-medium text-electric-600 dark:text-cyan-400">
              {project.subtitle}
            </p>
            <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
              Category: {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold
                           bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700
                           border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold
                           bg-electric-600 text-white hover:bg-electric-500 shadow-md transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Technologies Badges */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
            Technologies & Tools Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-electric-500/10 text-electric-700 dark:text-cyan-300 border border-electric-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Business Problem Statement */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                The Business Problem
              </h4>
              <p className="mt-1 text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Visualization / Architecture Component */}
        <div>
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <BarChart2 className="w-4 h-4 text-cyan-400" />
            Analytical Preview / Visual Model:
          </h4>
          <LiveDataDashboardPreview type={project.dashboardPreviewType} />
        </div>

        {/* Overview & Key Implementation Features */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
            Methodology & Key Features:
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables / Scope */}
        {project.metricsPreview && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            {project.metricsPreview.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 text-center">
                <span className="block text-[11px] text-slate-400">{item.label}</span>
                <span className="block text-xs md:text-sm font-bold text-slate-900 dark:text-white mt-0.5">{item.value}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </Modal>
  );
}

