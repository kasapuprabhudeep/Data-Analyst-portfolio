import React from 'react';
import { personalInfo } from '../../data/portfolioData';

/** Colophon footer — small, factual, with a real back-to-top affordance. */
export default function Footer() {
  const year = new Date().getFullYear();

  const toTop = (e) => {
    e.preventDefault();
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-line bg-paper">
      <div className="wrap flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        <p className="font-mono text-[12px] text-ink-mute">
          © {year} {personalInfo.name} · {personalInfo.role}
        </p>
        <p className="font-mono text-[12px] text-ink-faint">
          Built with React, Tailwind CSS &amp; GSAP
        </p>
        <a href="#home" onClick={toTop} className="link-ext font-mono text-[12px] text-ink-mute">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
