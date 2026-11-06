import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import TimelineItem from './TimelineItem';
import Modal from '../common/Modal';
import { internshipExperience } from '../../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, FileCheck } from 'lucide-react';

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
          maxWidth="max-w-xl"
        >
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl bg-slate-950 border border-slate-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-white">
                {selectedCert.certificateTitle}
              </h4>
              <p className="text-xs text-cyan-400 mt-1">
                Issued to: Kasapu Prabhudeep
              </p>
              <p className="text-[11px] text-slate-400 max-w-sm mt-2">
                Replace this placeholder with your official certificate image scan by placing the file in <code className="text-cyan-300 font-mono">public/images/certificates/</code>.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Internship Completion</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">
                Organization: <strong>{selectedCert.company}</strong>
              </span>

              {selectedCert.verificationLink && (
                <a
                  href={selectedCert.verificationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Verification Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

