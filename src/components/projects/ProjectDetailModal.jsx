import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import Modal from '../common/Modal';

/** Full case study dialog for one project. */
export default function ProjectDetailModal({ project, onClose }) {
  return (
    <Modal isOpen={!!project} onClose={onClose} title={project ? project.title : ''}>
      {project && (
        <div className="space-y-8">
          <p className="font-display text-xl leading-snug text-ink-soft md:text-2xl">
            {project.tagline}
          </p>

          {project.overview && (
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                Overview
              </p>
              <p className="max-w-[68ch] text-[15.5px] leading-relaxed text-ink">
                {project.overview}
              </p>
            </div>
          )}

          {project.problem && (
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                The business question
              </p>
              <p className="max-w-[68ch] text-[15.5px] leading-relaxed text-ink-soft">
                {project.problem}
              </p>
            </div>
          )}

          {project.contributions?.length > 0 && (
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-caps text-ink-mute">
                What I did
              </p>
              <ol className="border-t border-line">
                {project.contributions.map((item, i) => (
                  <li key={i} className="flex gap-4 border-b border-line py-3.5 text-[15px] leading-relaxed text-ink">
                    <span className="font-mono text-[12px] leading-6 text-accent-deep tabular">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {project.stack?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 border-t border-line pt-6">
            {(project.repo || project.github) && (
              <a
                href={project.repo || project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github className="h-4 w-4" />
                View repository
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Open live demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
