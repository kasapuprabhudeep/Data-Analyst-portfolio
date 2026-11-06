import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useActiveSection } from '../../hooks/useActiveSection';

const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

const OverLay_LINKS = [{ id: 'home', label: 'Home' }, ...NAV_LINKS];

/**
 * Editorial top bar. Transparent over the hero, paper + hairline when
 * scrolled. Mobile uses a full-screen overlay menu.
 */
export default function Navbar({ sectionIds }) {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Freeze the page under the overlay */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const goTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          scrolled
            ? 'border-line bg-paper/85 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between">
          {/* Wordmark */}
          <a
            href="#home"
            onClick={goTo('home')}
            className="font-display text-xl leading-none tracking-tight text-ink"
            aria-label="Back to top — Kasapu Prabhudeep"
          >
            Kasapu Prabhudeep<span className="text-accent">.</span>
          </a>

          {/* Desktop links — dim label slides away on hover */}
          <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={goTo(id)}
                aria-current={active === id ? 'true' : undefined}
                className={`group relative block h-[1.05em] overflow-hidden font-mono text-[13px] leading-[1.05em] ${
                  active === id ? 'text-ink' : 'text-ink-mute'
                } transition-colors duration-200`}
              >
                {active === id && (
                  <span className="absolute -left-3.5 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent" />
                )}
                <span className="block transition-transform duration-200 ease-out group-hover:-translate-y-full">
                  {label}
                </span>
                <span className="absolute inset-0 block translate-y-full text-accent-deep transition-transform duration-200 ease-out group-hover:translate-y-0">
                  {label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Availability readout */}
            <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-caps text-ink-mute lg:inline-flex">
              <span className="dot" />
              Open to work
            </span>

            {/* Résumé — opens the PDF viewer */}
            <a
              href={personalInfo.resume.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-4 !py-2 !text-[13px] hidden sm:inline-flex"
            >
              Résumé
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="rounded-control border border-line p-2 text-ink transition-colors duration-200 hover:border-ink md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[70] flex flex-col bg-paper transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!menuOpen && undefined}
      >
        <div className="wrap flex h-16 items-center justify-between">
          <span className="font-display text-xl tracking-tight text-ink">
            Kasapu Prabhudeep<span className="text-accent">.</span>
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="rounded-control border border-line p-2 text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center gap-2">
          {OverLay_LINKS.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={goTo(id)}
              className={`font-display text-display-2 text-ink transition-all duration-500 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{
                transitionDelay: menuOpen ? `${80 + i * 55}ms` : '0ms',
                transitionTimingFunction: 'var(--ease-drawer)',
              }}
            >
              {label}
              {i % 2 === 1 && <span className="text-accent">.</span>}
            </a>
          ))}
        </nav>

        <div className="wrap pb-10">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
            <span className="dot" />
            {personalInfo.availability}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px]">
            <a className="link" href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="link" href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="link" href={`mailto:${personalInfo.socialLinks.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
