import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  ExternalLink,
  Building2
} from 'lucide-react';

export default function TimelineItem({ exp, index, onPreviewCertificate }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Central timeline marker for desktop / left marker for mobile */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-2xl bg-white dark:bg-navy-900 border-2 border-electric-500 flex items-center justify-center text-electric-600 dark:text-cyan-400 shadow-md shadow-electric-500/20 z-10">
        <Briefcase className="w-5 h-5" />
      </div>

      <div className={`md:w-1/2 ${isEven ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
        <div className="rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 p-6 md:p-7 shadow-lg hover:border-cyan-400/40 transition-all duration-300 group">
          
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono font-semibold text-electric-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {exp.company}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-cyan-400 transition-colors">
                {exp.role}
              </h3>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <Calendar className="w-3 h-3 text-cyan-400" />
                {exp.period}
              </span>
              <span className="block text-[11px] text-slate-400 mt-1">
                {exp.type}
              </span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            {exp.summary}
          </p>

          {/* Responsibilities */}
          <div className="space-y-2 mb-5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Key Contributions & Technical Workflow:
            </h4>
            <ul className="space-y-1.5">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Applied Badges */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            {exp.skillsApplied.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-electric-500/10 text-electric-700 dark:text-cyan-300 border border-electric-500/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Certificate Action */}
          {exp.hasCertificate && (
            <div className="mt-4 pt-3 flex items-center justify-between">
              <button
                onClick={() => onPreviewCertificate(exp)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                <Award className="w-4 h-4 text-cyan-400" />
                <span>View Certificate Placeholder</span>
              </button>

              <span className="text-[10px] text-slate-400 font-mono">
                Editable Verification
              </span>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
}
