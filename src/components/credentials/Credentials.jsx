import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { certifications, educationHistory } from '../../data/portfolioData';
import SectionHead from '../common/SectionHead';

/**
 * Credentials — typographic ledger of what can be verified. No mock
 * certificate artwork; every row carries its real verification link.
 */
export default function Credentials() {
  return (
    <section id="credentials" className="bg-paper">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="Credentials"
          meta={`${certifications.length} certificates · each links to proof`}
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Certifications */}
          <div className="lg:col-span-7">
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
              Certifications
            </h3>
            <ul className="border-t border-line" data-reveal>
              {certifications.map((cert) => (
                <li key={cert.id} className="border-b border-line py-5">
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <h4 className="text-[16.5px] font-medium text-ink">{cert.title}</h4>
                      <p className="mt-1 font-mono text-[12px] text-ink-mute">
                        {cert.issuer} · {cert.category}
                      </p>
                      <p className="mt-2 max-w-[56ch] text-[14.5px] leading-relaxed text-ink-mute">
                        {cert.description}
                      </p>
                    </div>
                    {(cert.verify?.url || cert.verificationUrl) && (
                      <a
                        href={cert.verify?.url || cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-ext mt-1 shrink-0 text-[13.5px] font-medium"
                      >
                        <ShieldCheck className="h-4 w-4 text-accent-deep" />
                        Verify
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="lg:col-span-5">
            <h3 className="mb-4 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
              Education
            </h3>
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                data-reveal
                className="rounded-card border border-line bg-paper-deep p-7 md:p-8"
              >
                <h4 className="font-display text-2xl leading-snug text-ink">{edu.degree}</h4>
                <p className="mt-2 text-[15px] text-ink-soft">{edu.institution}</p>
                <p className="mt-3 font-mono text-[12px] text-ink-mute">
                  {edu.academicYear} · {edu.status}
                </p>

                <ul className="mt-6 border-t border-line">
                  {edu.focus.map((item, i) => (
                    <li key={i} className="border-b border-line py-3 text-[14.5px] leading-relaxed text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
