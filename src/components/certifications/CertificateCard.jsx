import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar,
  Sparkles,
  Eye
} from 'lucide-react';

export default function CertificateCard({ cert, index, onPreview }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 
                 p-6 shadow-md hover:shadow-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-electric-500/10 text-electric-600 dark:text-cyan-400 border border-electric-500/20">
            {cert.issuer}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <ShieldCheck className="w-3 h-3" />
            {cert.badge}
          </span>
        </div>

        {/* Certificate Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
          {cert.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
          {cert.description}
        </p>

        {/* Covered Skills / Topics */}
        <div className="mt-4 space-y-1.5">
          <span className="block text-[11px] uppercase tracking-wider font-semibold text-slate-400">
            Key Competencies Verified:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {cert.topics.map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={() => onPreview(cert)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-400 transition-colors"
        >
          <Eye className="w-3.5 h-3.5 text-cyan-400" />
          <span>Preview Credential</span>
        </button>

        {cert.verificationUrl && (
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-500 hover:text-cyan-400"
          >
            <span>Verify</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

