/**
 * GSAP motion engine for the editorial portfolio.
 *
 * Principles (from the design system):
 *  • Reveal ONCE — nothing loops, nothing scrubs except the pinned hero.
 *  • Strong ease-out everywhere; UI transitions stay interactive.
 *  • prefers-reduced-motion: everything rests, nothing stays hidden.
 *
 * Usage: call useEditorialMotion() once, at the app root.
 */
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function useEditorialMotion() {
  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      // Content must never stay hidden under reduced motion.
      gsap.set('[data-reveal]', { opacity: 1, y: 0 });
      gsap.set('[data-reveal-line]', { scaleX: 1, opacity: 1 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      /* Hairline rules draw across when they enter */
      gsap.utils.toArray('[data-reveal-line]').forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: line, start: 'top 88%', once: true },
        });
      });

      /* Standard content reveal — fades once, staggered per batch */
      gsap.set('[data-reveal]', { y: 26 });
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.09,
            overwrite: true,
          }),
      });

      /* The one pinned moment: hero content holds while the first
         section rides over it. */
      ScrollTrigger.create({
        trigger: '#home',
        start: 'top top',
        end: '+=38%',
        pin: '#home-inner',
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set('#home-inner', { opacity: 1 - p * 0.9 });
        },
      });
    });

    // Recalculate once fonts/images settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 600);

    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t);
      ctx.revert();
    };
  }, []);
}

/** Subtle magnetic pull on a button (desktop pointers only). */
export function attachMagnetic(el) {
  if (!el) return undefined;
  if (!window.matchMedia('(pointer: fine)').matches) return undefined;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

  const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });

  const move = (e) => {
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    xTo(dx * 0.16);
    yTo(dy * 0.22);
  };
  const leave = () => {
    xTo(0);
    yTo(0);
  };

  el.addEventListener('pointermove', move);
  el.addEventListener('pointerleave', leave);
  return () => {
    el.removeEventListener('pointermove', move);
    el.removeEventListener('pointerleave', leave);
  };
}
