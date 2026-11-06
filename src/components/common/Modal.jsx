import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

/**
 * Accessible modal, paper-styled, pure CSS transitions.
 *  • Escape closes · backdrop click closes · focus is trapped inside.
 *  • Focus returns to the trigger element on close.
 */
export default function Modal({ isOpen, onClose, title, children }) {
  const panelRef = useRef(null);
  const [rendered, setRendered] = useState(isOpen);
  const [entering, setEntering] = useState(false);

  /* Mount / unmount with a two-frame delay so CSS transitions run */
  useEffect(() => {
    if (isOpen) {
      setRendered(true);
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setEntering(true)));
      return () => cancelAnimationFrame(raf);
    }
    setEntering(false);
    const t = setTimeout(() => setRendered(false), 240);
    return () => clearTimeout(t);
  }, [isOpen]);

  /* Lock scroll, listen for Escape / Tab, manage focus */
  useEffect(() => {
    if (!isOpen) return undefined;
    const prevFocus = document.activeElement;

    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (prevFocus?.focus) prevFocus.focus();
    };
  }, [isOpen, onClose]);

  if (!rendered) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className={`modal-backdrop ${entering ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={`modal-panel ${entering ? 'is-open' : ''}`}
      >
        <div className="flex items-start justify-between gap-6 border-b border-line px-6 py-5 md:px-9">
          <h3 className="font-display text-display-3 pt-1">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="mt-1 rounded-full border border-line p-2 text-ink-mute transition-colors duration-200 hover:border-ink hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="px-6 py-6 md:px-9 md:py-8">{children}</div>
      </div>
    </div>
  );
}
