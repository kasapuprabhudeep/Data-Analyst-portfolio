import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { educationHistory } from '../../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Academic Background"
          title="Formal Engineering Education"
          subtitle="Undergraduate computer science engineering grounding in relational database systems, algorithms, computing architecture, and software development."
        />

        <div className="max-w-4xl mx-auto">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 p-8 md:p-10 shadow-xl hover:border-cyan-400/40 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-electric-500/10 border border-electric-500/25 flex items-center justify-center text-electric-600 dark:text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-mono font-semibold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full mb-2">
                      {edu.status}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-electric-600 dark:text-cyan-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-mono text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Graduation: {edu.academicYear}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Vizianagaram, Andhra Pradesh</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.description}
              </p>

              {/* Coursework & Focus Areas */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  Key Coursework & Competencies:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {edu.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
