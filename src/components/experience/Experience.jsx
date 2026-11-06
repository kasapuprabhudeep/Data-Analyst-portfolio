import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import TimelineItem from './TimelineItem';
import Modal from '../common/Modal';
import { internshipExperience } from '../../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, FileCheck, Eye } from 'lucide-react';

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Professional Timeline"
          title="Internship & Industry Experience"
          subtitle="Real-world data analytics roles executing end-to-end exploratory analysis, database querying, and business intelligence reporting."
        />

        {/* Timeline container */}
        <div className="relative mt-12 md:mt-16">
          {/* Vertical spine line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-electric-500 via-cyan-400 to-electric-600/20" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {internshipExperience.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                exp={exp}
                index={index}
                onPreviewCertificate={(item) => setSelectedCert(item)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.certificateTitle || "Internship Certificate"}
          maxWidth="max-w-3xl"
        >
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-2xl">
              <img
                src={selectedCert.certificateImage}
                alt={`${selectedCert.company} Certificate`}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Organization: <strong className="text-slate-800 dark:text-slate-200">{selectedCert.company}</strong>
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Internship Completion
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.certificateImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open Full Document</span>
                </a>

                {selectedCert.verificationLink && (
                  <a
                    href={selectedCert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-electric-600 hover:bg-electric-500 text-white shadow transition-colors"
                  >
                    <span>Verification Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

