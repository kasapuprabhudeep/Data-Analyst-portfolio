import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import CertificateCard from './CertificateCard';
import Modal from '../common/Modal';
import { certifications } from '../../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, CheckCircle, Eye } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-navy-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Verified Credentials"
          title="Professional Certifications & Training"
          subtitle="Accredited credentials and internship certifications validating skills in Python data analysis and practical industry projects."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onPreview={(c) => setSelectedCert(c)}
            />
          ))}
        </div>

        {/* Verification transparency banner */}
        <div className="mt-12 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-navy-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>All certificate verification links and image scans are easily editable directly in <code className="text-cyan-400 font-mono">src/data/portfolioData.js</code>.</span>
          </div>
          <span className="font-mono text-cyan-400 font-semibold flex-shrink-0">
            {certifications.length} Verified Certifications
          </span>
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          maxWidth="max-w-3xl"
        >
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-2xl">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} Document`}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Issuer: <strong className="text-slate-800 dark:text-slate-200">{selectedCert.issuer}</strong>
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {selectedCert.badge}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open in Full Tab</span>
                </a>

                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-electric-600 hover:bg-electric-500 text-white shadow transition-colors"
                  >
                    <span>Verify Credential</span>
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

