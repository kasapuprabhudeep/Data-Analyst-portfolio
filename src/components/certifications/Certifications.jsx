import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import CertificateCard from './CertificateCard';
import Modal from '../common/Modal';
import { certifications } from '../../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, CheckCircle } from 'lucide-react';

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
          maxWidth="max-w-lg"
        >
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl bg-slate-950 border border-slate-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                <Award className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
                {selectedCert.issuer}
              </span>

              <h4 className="text-base font-bold text-white mt-1">
                {selectedCert.title}
              </h4>

              <p className="text-xs text-cyan-400 mt-1">
                Credential Awarded to: Kasapu Prabhudeep
              </p>

              <p className="text-[11px] text-slate-400 max-w-sm mt-3">
                Place your high-resolution scanned certificate image in <code className="text-cyan-300 font-mono">{selectedCert.image}</code> to automatically display your official document.
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{selectedCert.badge}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">
                Issuer: <strong>{selectedCert.issuer}</strong>
              </span>

              {selectedCert.verificationUrl && (
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Verify Credential Online</span>
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

