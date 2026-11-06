import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3
            bg-electric-500/10 border border-electric-500/30 text-electric-400
            dark:bg-electric-500/10 dark:border-electric-500/30 dark:text-cyan-400`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative accent line */}
      <div className={`mt-5 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-1 w-12 rounded-full bg-gradient-to-r from-electric-500 to-cyan-400"></span>
        <span className="h-1 w-2 rounded-full bg-cyan-400"></span>
      </div>
    </div>
  );
}

