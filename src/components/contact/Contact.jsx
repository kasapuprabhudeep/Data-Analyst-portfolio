import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, FileDown, FileText } from 'lucide-react';
import { personalInfo as p } from '../../data/portfolioData';
import SectionHead from '../common/SectionHead';
import { useCopy } from '../../hooks/useCopy';
import { attachMagnetic } from '../../lib/motion';
import { useLayoutEffect, useRef } from 'react';

/**
 * Contact — direct email with copy affordance, a mailto-composing
 * form (no fake success states — it opens the visitor's mail client),
 * plus the résumé band.
 */
export default function Contact() {
  const [copied, copy] = useCopy(p.socialLinks.email);
  const [note, setNote] = useState('');
  const sendRef = useRef(null);

  useLayoutEffect(() => attachMagnetic(sendRef.current), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name').trim();
    const from = data.get('email').trim();
    const message = data.get('message').trim();

    const subject = encodeURIComponent(`Portfolio inquiry — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${p.socialLinks.email}?subject=${subject}&body=${body}`;
    setNote('Opening your email client. If nothing opened, write to me directly below.');
  };

  const field =
    'w-full border-0 border-b border-line-strong bg-transparent py-2.5 text-[15.5px] text-ink transition-colors duration-200 placeholder:text-ink-faint focus:border-accent focus:outline-none focus:ring-0';

  return (
    <section id="contact" className="bg-paper-deep">
      <div className="wrap py-24 md:py-32">
        <SectionHead title="Contact" meta={p.location} />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Direct lines */}
          <div className="lg:col-span-5">
            <div data-reveal>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                Email
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${p.socialLinks.email}`}
                  className="font-display text-2xl text-ink link md:text-[1.7rem]"
                >
                  {p.socialLinks.email}
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="chip"
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-accent-deep" /> : <Copy className="h-3.5 w-3.5" />}
                  <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
                  <span className="sr-only" aria-live="polite">
                    {copied ? 'Email copied' : ''}
                  </span>
                </button>
              </div>
            </div>

            <ul data-reveal className="mt-8 divide-y divide-line border-y border-line">
              <li>
                <a
                  href={p.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 transition-colors duration-200"
                >
                  <span>
                    <span className="text-[15px] font-medium text-ink">GitHub</span>{' '}
                    <span className="font-mono text-[12.5px] text-ink-mute">
                      github.com/{p.socialLinks.github.split('/').pop()}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-accent-deep" />
                </a>
              </li>
              <li>
                <a
                  href={p.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 transition-colors duration-200"
                >
                  <span>
                    <span className="text-[15px] font-medium text-ink">LinkedIn</span>{' '}
                    <span className="font-mono text-[12.5px] text-ink-mute">
                      in/{p.socialLinks.linkedin.replace(/\/+$/, '').split('/').pop()}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-accent-deep" />
                </a>
              </li>
            </ul>

            <p data-reveal className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
              <span className="dot" />
              {p.availability}
            </p>
          </div>

          {/* Form — composes a real mail, honestly labeled */}
          <div className="lg:col-span-7" data-reveal>
            <form onSubmit={handleSubmit} className="space-y-7" noValidate={false}>
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                    Your name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder="Priya Sharma" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                    Your email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What do you need? Role, timeline, context — anything helps."
                  className={`${field} resize-y`}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button ref={sendRef} type="submit" className="btn btn-primary">
                  Send message
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <p aria-live="polite" className="font-mono text-[11px] text-ink-mute">
                  {note || 'Opens your email client — no message is stored on this site.'}
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Résumé band */}
        <div
          data-reveal
          className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-card border border-line bg-paper p-7 md:p-8"
        >
          <div className="flex items-center gap-5">
            <span className="rounded-full border border-line p-3 text-ink">
              <FileText className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-2xl text-ink">Résumé</h3>
              <p className="font-mono text-[12px] text-ink-mute">
                PDF · last updated {p.resume.lastUpdated}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={p.resume.filePath} download={p.resume.fileName} className="btn btn-primary">
              <FileDown className="h-4 w-4" />
              Download
            </a>
            <a
              href={p.resume.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              View
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
