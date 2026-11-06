import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  MapPin, 
  GraduationCap, 
  UserCheck
} from 'lucide-react';
import AnalyticalCanvas from './AnalyticalCanvas';
import MetricPreviewChart from './MetricPreviewChart';
import { personalInfo } from '../../data/portfolioData';

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic analytical canvas particle mesh */}
      <AnalyticalCanvas />

      {/* Radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-500/10 dark:bg-electric-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Greeting Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-electric-500/30 bg-electric-500/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-electric-600 dark:text-cyan-400">
                {personalInfo.status}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-400">
                Hi, I'm <span className="font-bold text-slate-900 dark:text-white">{personalInfo.name}</span>
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personalInfo.subHeadline.split('Business Insights')[0]}
                <span className="bg-gradient-to-r from-electric-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Business Insights.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Text & Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg font-medium text-electric-600 dark:text-cyan-300">
                Data Analyst | Python | SQL | Excel | Power BI | Tableau
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Computer Science Engineering student at <span className="font-semibold text-slate-800 dark:text-slate-200">{personalInfo.institution}</span> dedicated to transforming raw datasets into actionable business intelligence, clean predictive data models, and interactive dashboards.
              </p>

              {/* Quick credential facts */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>B.Tech CSE ({personalInfo.academicYear})</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>Recruiter-Friendly Portfolio</span>
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white
                           bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400
                           shadow-lg shadow-electric-600/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resume.filePath}
                download={personalInfo.resume.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm
                           border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-900/80 
                           text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800
                           hover:border-cyan-400/50 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links & Verified Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Connect:
              </span>
              
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.socialLinks.email}`}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-slate-900 transition-all"
                  aria-label="Email Kasapu Prabhudeep"
                  title="Email Kasapu Prabhudeep"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Profile & Live Analytics Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Profile Avatar / Photo Card Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-sm lg:max-w-none"
            >
              {/* Outer decorative ring */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-400/40 via-electric-500/20 to-slate-800/40 shadow-2xl">
                <div className="rounded-[22px] bg-slate-900 dark:bg-navy-900 p-5 overflow-hidden relative">
                  
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                      <span className="font-mono text-cyan-300 text-[11px]">CANDIDATE_PROFILE.DATA</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">B.Tech CSE 26-27</span>
                  </div>

                  {/* Profile Picture Placeholder with fallback and instructions */}
                  <div className="relative aspect-square rounded-2xl bg-gradient-to-tr from-slate-950 via-navy-900 to-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center group overflow-hidden">
                    
                    {/* Background analytical mesh in card */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                    
                    {/* Sleek Profile Photo / Avatar with Fallback */}
                    <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-electric-600 via-cyan-400 to-blue-500 p-1 shadow-xl shadow-cyan-500/20 mb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden flex items-center justify-center">
                        {personalInfo.profileImage && !imageFailed ? (
                          <img
                            src={personalInfo.profileImage}
                            alt={personalInfo.name}
                            onError={() => setImageFailed(true)}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <span className="text-cyan-400 font-extrabold text-3xl tracking-wider">
                            KP
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="relative z-10 text-lg font-bold text-white">
                      Kasapu Prabhudeep
                    </h3>
                    <p className="relative z-10 text-xs text-cyan-400 font-medium mt-0.5">
                      Aspiring Data Analyst
                    </p>

                    <p className="relative z-10 text-[11px] text-slate-400 mt-2 max-w-xs leading-relaxed">
                      JNTU-GV College of Engineering, Vizianagaram
                    </p>

                    {/* Small badge note */}
                    <div className="relative z-10 mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-[10px] text-slate-300">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Ready for Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Live Data Visual Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <MetricPreviewChart />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

