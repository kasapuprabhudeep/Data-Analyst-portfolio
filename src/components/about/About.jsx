import React from 'react';
import { personalInfo, bio, strengths, toolkit } from '../../data/portfolioData';
import SectionHead from '../common/SectionHead';

/** About — bio narrative on the left, strengths ledger on the right. */
export default function About() {
  return (
    <section id="about" className="bg-paper">
      <div className="wrap py-24 md:py-32">
        <SectionHead title="About" meta={`Vizianagaram, India · ${personalInfo.classOf}`} />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Narrative */}
          <div className="lg:col-span-6">
            <div className="space-y-5">
              {bio.map((paragraph, i) => (
                <p
                  key={i}
                  data-reveal
                  className={`max-w-[56ch] leading-relaxed text-ink-soft ${
                    i === 0 ? 'text-[17.5px] text-ink' : 'text-[16px]'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <p
              data-reveal
              className="mt-8 font-display text-2xl italic text-ink"
              aria-hidden="true"
            >
              — {personalInfo.firstName}
            </p>
          </div>

          {/* Strengths ledger */}
          <div className="lg:col-span-6">
            <h3
              data-reveal
              className="mb-4 font-mono text-[11px] uppercase tracking-caps text-ink-mute"
            >
              What I bring
            </h3>
            <ol className="border-t border-line">
              {strengths.map((strength, i) => (
                <li
                  key={strength.title}
                  data-reveal
                  className="flex gap-5 border-b border-line py-[1.1rem] sm:gap-7"
                >
                  <span
                    className="font-mono text-[12px] leading-7 text-accent-deep tabular"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-medium text-ink">{strength.title}</h4>
                    <p className="mt-1 max-w-[52ch] text-[15px] leading-relaxed text-ink-mute">
                      {strength.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Toolkit strip */}
        <div className="mt-20">
          <h3 data-reveal className="mb-5 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
            Toolkit
          </h3>
          <div data-reveal className="grid border-t border-line pt-7 gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-5">
            {toolkit.map((group) => (
              <div key={group.group}>
                <p className="mb-2.5 font-mono text-[12px] text-accent-deep">{group.group}</p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[14.5px] text-ink-soft">
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
