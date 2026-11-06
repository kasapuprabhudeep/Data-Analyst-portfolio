import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import Modal from '../common/Modal';
import { personalInfo } from '../../data/portfolioData';
import { 
  FileDown, 
  Eye, 
  FileText, 
  CheckCircle, 
  Sparkles, 
  Clock, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function ResumeSection() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Curriculum Vitae"
          title="Resume & Professional Summary"
          subtitle="Download or preview my recruiter-optimized single-page resume detailing technical proficiencies, project milestones, and internship achievements."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl glass-card p-8 md:p-10 border border-electric-500/30 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Summary (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400">
                  <FileText className="w-4 h-4" />
                  <span>FORMAT: ATS-FRIENDLY PDF</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Ready to add analytical firepower to your data team?
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tailored specifically for Data Analyst, Business Intelligence, and Data Engineering roles. Highlights real-world database querying with SQL, predictive exploratory analysis with Python, and executive dashboards designed in Power BI and Tableau.
                </p>

                <div className="space-y-2 pt-2">
                  {[
                    "Standard 1-page recruiter & ATS-compliant layout",
                    "Clearly categorized SQL, Python, Power BI & Tableau skills",
                    "Detailed business problem & impact statements for all projects",
                    "Verified Future Interns & Internship Studio experiences"
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={personalInfo.resume.filePath}
                    download={personalInfo.resume.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white
                               bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400
                               shadow-lg shadow-electric-600/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Official Resume</span>
                  </a>

                  <button
                    onClick={() => setIsPreviewOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm
                               border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-900 
                               text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800
                               hover:border-cyan-400/50 shadow-sm transition-all duration-200"
                  >
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span>Preview Document</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Last revised: {personalInfo.resume.lastUpdated}</span>
                </div>
              </div>

              {/* Right Column: Visual Document Preview (5 cols) */}
              <div className="lg:col-span-5">
                <div 
                  onClick={() => setIsPreviewOpen(true)}
                  className="cursor-pointer rounded-2xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-slate-800 p-5 shadow-2xl relative group hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
                    <span className="font-mono text-cyan-400 font-semibold">{personalInfo.resume.fileName}</span>
                    <span className="text-[10px] text-slate-400 font-mono">PDF Preview</span>
                  </div>

                  <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/80">
                    <div className="text-center pb-2 border-b border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{personalInfo.name}</h4>
                      <p className="text-[10px] text-cyan-400 font-medium">Aspiring Data Analyst</p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="h-2 w-3/4 bg-slate-300 dark:bg-slate-700 rounded"></div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-2 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
                    </div>

                    <div className="pt-2">
                      <div className="h-2.5 w-1/3 bg-cyan-500/30 rounded mb-1"></div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-2 w-4/5 bg-slate-200 dark:bg-slate-800 rounded"></div>
                    </div>

                    <div className="pt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:scale-105 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to View Full Document</span>
                    </div>
                  </div>

                  <p className="text-center text-[10px] text-slate-400 mt-3">
                    Easy replace: drop your <code className="text-cyan-400 font-mono">resume.pdf</code> into <code className="text-cyan-400 font-mono">/public</code>
                  </p>
                </div>
              </div>

            </div>

          </motion.div>
        </div>

      </div>

      {/* Resume Document Modal */}
      <Modal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title="Resume Document Preview"
        maxWidth="max-w-4xl"
      >
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
                <p className="text-xs text-cyan-400 font-medium">{personalInfo.headline} • {personalInfo.institution}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{personalInfo.location}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.resume.filePath}
                  download={personalInfo.resume.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-electric-600 hover:bg-electric-500 shadow transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
                <a
                  href={personalInfo.resume.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Tab</span>
                </a>
              </div>
            </div>

            {/* Document Details Body */}
            <div className="mt-6 space-y-6 text-xs sm:text-sm">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-cyan-400 text-xs mb-2">
                  Professional Objective
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {personalInfo.careerObjective}
                </p>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-cyan-400 text-xs mb-2">
                  Education
                </h4>
                <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                  <span>{personalInfo.degree}</span>
                  <span>{personalInfo.academicYear}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">{personalInfo.institution}</p>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-cyan-400 text-xs mb-2">
                  Technical Core
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  <strong>Languages:</strong> Python, Java, C, SQL<br />
                  <strong>Analytics & BI:</strong> MySQL, Advanced Excel, Power BI, Tableau, Power Query<br />
                  <strong>Tools:</strong> VS Code, MySQL Workbench, Git, GitHub
                </p>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-cyan-400 text-xs mb-2">
                  Internships
                </h4>
                <p className="text-slate-700 dark:text-slate-300">
                  • <strong>Future Interns:</strong> Data Science & Analytics Intern (May 2026 – July 2026)<br />
                  • <strong>Internship Studio:</strong> Data Analytics Intern / Trainee
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
