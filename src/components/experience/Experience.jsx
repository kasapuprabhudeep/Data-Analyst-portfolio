import React from 'react';
import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { experience } from '../../data/portfolioData';
import SectionHead from '../common/SectionHead';

/** Experience — internship ledger with verifiable proof links. */
export default function Experience() {
  return (
    <section id="experience" className="bg-paper-deep">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="Experience"
          meta={`${experience.length} internships · certificates verifiable`}
        />

        <ol className="border-t border-line">
          {experience.map((role) => (
            <li key={role.id} data-reveal className="border-b border-line">
              <div className="grid gap-6 py-9 md:py-10 lg:grid-cols-12 lg:gap-8">
                {/* When & where */}
                <div className="lg:col-span-3">
                  <p className="font-mono text-[12px] text-ink-mute">
                    {role.period || role.kind}
                  </p>
                  {role.period && (
                    <p className="mt-1 font-mono text-[11px] text-ink-faint">{role.kind}</p>
                  )}
                </div>

                {/* The role */}
                <div className="lg:col-span-9">
                  <h3 className="font-display text-display-3 text-ink">{role.role}</h3>
                  <p className="mt-0.5 font-medium text-ink-soft">{role.organization}</p>

                  <p className="mt-4 max-w-[64ch] leading-relaxed text-ink-soft">
                    {role.summary}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {role.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-[15px] leading-relaxed">
                        <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                          —
                        </span>
                        <span className="max-w-[70ch] text-ink">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {role.tools.map((tool) => (
                        <span key={tool} className="chip !text-[11px]">
                          {tool}
                        </span>
                      ))}
                    </div>
                    {role.proof?.url && (
                      <a
                        href={role.proof.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-ext text-[14px] font-medium"
                      >
                        <BadgeCheck className="h-4 w-4 text-accent-deep" />
                        {role.proof?.label || 'Verify certificate'}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
