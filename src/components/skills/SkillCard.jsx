import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  PieChart, 
  Globe, 
  Wrench, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

const categoryIcons = {
  Code2: Code2,
  Database: Database,
  PieChart: PieChart,
  Globe: Globe,
  Wrench: Wrench
};

export default function SkillCard({ category, index }) {
  const IconComponent = categoryIcons[category.icon] || Database;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800/80 
                 p-6 shadow-md hover:shadow-xl hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/25 flex items-center justify-center text-electric-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-white">
                {category.category}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {category.skills.length} core proficiencies
              </p>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
          {category.description}
        </p>

        {/* Skill Badges List */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                skill.highlight
                  ? 'bg-electric-500/10 text-electric-700 dark:text-cyan-300 border border-electric-500/30 font-semibold shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {skill.highlight ? (
                <Sparkles className="w-3 h-3 text-cyan-400" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              )}
              <span>{skill.name}</span>
              {skill.type && (
                <span className="text-[10px] text-slate-400 dark:text-slate-500 ml-1 font-mono">
                  ({skill.type})
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recruiter-friendly verified badge */}
      <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-mono text-[10px]">
          <CheckCircle className="w-3 h-3 text-emerald-500" />
          Production / Project Tested
        </span>
      </div>
    </motion.div>
  );
}
