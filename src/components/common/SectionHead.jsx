import React from 'react';

/**
 * Shared section header. No eyebrows, no badges — heading carries its
 * own weight; the side note (meta) is reader information, not decoration.
 */
export default function SectionHead({ title, meta }) {
  return (
    <div className="mb-10 md:mb-14">
      <div data-reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <h2 className="font-display text-display-2 text-ink">
          {title}
          <span className="text-accent">.</span>
        </h2>
        {meta && <p className="pb-1.5 font-mono text-[12px] text-ink-mute">{meta}</p>}
      </div>
      <div data-reveal-line className="rule rule-strong mt-5" />
    </div>
  );
}
