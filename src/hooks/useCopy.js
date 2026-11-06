import { useEffect, useRef, useState } from 'react';

/** Copies text to the clipboard and reports a short-lived "copied" state. */
export function useCopy(text, holdMs = 1600) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard permission refused — fall back to the manual pattern.
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch { /* user copies manually */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), holdMs);
  };

  return [copied, copy];
}
