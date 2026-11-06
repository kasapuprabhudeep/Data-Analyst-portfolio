import React, { useLayoutEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo as p } from '../../data/portfolioData';
import { gsap, attachMagnetic } from '../../lib/motion';

/**
 * Hero — the site's one authored moment.
 * Load choreography: masked line reveal of the name, then supporting
 * rows fade up, the portrait unveils via clip-path. The content pins
 * (motion.js) and grows quiet as Selected work rides over it.
 */
export default function Hero() {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.fromTo(
        '[data-hero-mask] > *',
        { yPercent: 115 },
        { yPercent: 0, duration: 1.1, stagger: 0.12, delay: 0.2 },
        0
      )
        .fromTo(
          '[data-hero-fade]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.09 },
          '-=0.6'
        )
        .fromTo(
          '[data-hero-portrait]',
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 0.9 },
          '-=0.55'
        )
        .fromTo(
          '[data-hero-portrait] img',
          { scale: 1.15 },
          { scale: 1, duration: 1.1 },
          '<'
        )
        .fromTo(
          '[data-hero-rule]',
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8 },
          '-=0.9'
        );
    }, sectionRef);

    const detach = attachMagnetic(ctaRef.current);
    return () => {
      detach?.();
      ctx.revert();
    };
  }, []);

  const goWork = (e) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const meta = [p.degree, p.institution, p.classOf].filter(Boolean);

  return (
    <section id="home" ref={sectionRef} className="relative bg-paper">
      <div id="home-inner" className="flex min-h-svh items-center pt-16">
        <div className="wrap grid w-full items-center gap-10 pb-20 pt-8 lg:grid-cols-12 lg:gap-8">
          {/* ── Left: the declaration ── */}
          <div className="lg:col-span-7">
            {/* Status */}
            <div
              data-hero-fade
              data-reveal-skip
              className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                <span className="dot" />
                {p.availability}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-caps text-ink-faint hidden sm:inline-block">
                {p.location}
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-display-1 text-ink">
              <span className="block overflow-hidden pb-1" data-hero-mask>
                <span className="block">Kasapu</span>
              </span>
              <span className="block overflow-hidden pb-1" data-hero-mask>
                <span className="block">
                  <em className="italic">Prabhudeep</em>
                  <span className="text-accent">.</span>
                </span>
              </span>
            </h1>

            {/* The one-sentence pitch */}
            <p
              data-hero-fade
              className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft"
            >
              {p.statement}
            </p>

            {/* Hard credential facts */}
            <p data-hero-fade className="mt-5 font-mono text-[12px] leading-relaxed text-ink-mute">
              {meta.map((fact, i) => (
                <React.Fragment key={fact}>
                  {i > 0 && <span className="mx-2 text-ink-faint">·</span>}
                  {fact}
                </React.Fragment>
              ))}
            </p>

            {/* Actions */}
            <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-3">
              <a ref={ctaRef} href="#work" onClick={goWork} className="btn btn-primary">
                View selected work
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={p.resume.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Résumé (PDF)
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Elsewhere */}
            <div data-hero-fade className="mt-10">
              <div
                data-hero-rule
                className="rule mb-5 max-w-xs"
              />
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                  Elsewhere
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={p.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    title="GitHub"
                    className="rounded-full border border-line p-2.5 text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={p.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    title="LinkedIn"
                    className="rounded-full border border-line p-2.5 text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${p.socialLinks.email}`}
                    aria-label="Email Kasapu Prabhudeep"
                    title="Email"
                    className="rounded-full border border-line p-2.5 text-ink-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: the portrait ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              data-hero-portrait
              className="relative max-w-[260px] sm:max-w-xs lg:max-w-sm aspect-[4/5] overflow-hidden rounded-card border border-line bg-paper-deep w-full shadow-lg"
            >
              <img
                src={p.portrait}
                alt={`Portrait of ${p.name}`}
                className="h-full w-full object-cover object-[50%_18%]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-hero-fade
        className="absolute inset-x-0 bottom-6 hidden items-center justify-center gap-3 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-caps text-ink-faint">Scroll</span>
        <span className="h-6 w-px bg-line-strong" />
      </div>
    </section>
  );
}
