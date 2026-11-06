import React, { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import SectionHead from '../common/SectionHead';
import ProjectDetailModal from './ProjectDetailModal';

/**
 * Selected work — an editorial case list, not a card grid.
 * Rows open a case-study dialog; filters derive themselves from the data.
 */
export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeId, setActiveId] = useState(null);

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    []
  );
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="work" className="relative z-10 bg-paper-deep">
      <div className="wrap py-24 md:py-32">
        <SectionHead
          title="Selected work"
          meta={`${projects.length} case studies · source code public`}
        />

        {/* Category filters — derived, never hard-coded */}
        <div data-reveal className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`chip ${filter === category ? 'chip-active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <p data-reveal className="mb-4 text-[13.5px] text-ink-mute">
          {shown.length} {shown.length === 1 ? 'project' : 'projects'} — open any row for the full
          case study.
        </p>

        {/* Case rows */}
        <ul className="border-t border-line" data-reveal>
          {shown.map((project, i) => (
            <li key={project.id} className="border-b border-line">
              <button
                type="button"
                onClick={() => setActiveId(project.id)}
                className="case-row group w-full text-left"
              >
                <span className="case-index tabular" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="min-w-0">
                  <span className="mb-2 block font-mono text-[10.5px] uppercase tracking-caps text-ink-faint">
                    {project.category}
                  </span>
                  <span className="block font-display text-display-3 text-ink transition-colors duration-200 group-hover:text-accent-deep">
                    {project.title}
                  </span>
                  <span className="mt-1.5 block max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">
                    {project.tagline}
                  </span>
                  <span className="mt-3.5 flex flex-wrap items-center gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip !text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </span>
                </span>

                <ArrowUpRight className="case-arrow h-5 w-5" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ProjectDetailModal project={active} onClose={() => setActiveId(null)} />
    </section>
  );
}
