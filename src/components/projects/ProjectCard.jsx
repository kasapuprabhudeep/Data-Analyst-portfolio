import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Eye, 
  Layers, 
  BarChart3, 
  ChevronRight, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import LiveDataDashboardPreview from './LiveDataDashboardPreview';

export default function ProjectCard({ project, onOpenDetails, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 
                 shadow-lg hover:shadow-2xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      <div>
        {/* Visual Header / Chart Preview */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-navy-950/60 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-electric-500/10 text-electric-600 dark:text-cyan-400 border border-electric-500/20 font-semibold">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                Featured Project
              </span>
            )}
          </div>

          {/* Embedded Mini Visual Preview */}
          <div className="mt-1">
            <LiveDataDashboardPreview type={project.dashboardPreviewType} />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-electric-600 dark:text-cyan-300 mt-1">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            {project.overview}
          </p>

          {/* Business Problem Snippet */}
          <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-xs">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-slate-600 dark:text-slate-300 leading-snug line-clamp-2">
                <span className="font-semibold text-slate-800 dark:text-slate-200">Business Problem:</span> {project.businessProblem}
              </p>
            </div>
          </div>

          {/* Key Features Bullet Points */}
          <div className="mt-4 space-y-1.5">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 mt-2 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center justify-between gap-2 pt-4">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-600 dark:text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>Case Study Details</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                aria-label={`View GitHub repository for ${project.title}`}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Application"
                aria-label={`View live demo for ${project.title}`}
                className="p-2 rounded-xl bg-electric-600 hover:bg-electric-500 text-white shadow transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

