import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-electric-500/50 
                 bg-slate-900/60 border-slate-700/60 text-amber-400 hover:text-amber-300 hover:border-amber-400/40 hover:bg-slate-800/80
                 dark:bg-navy-900/80 dark:border-slate-800 dark:text-cyan-400 dark:hover:text-cyan-300 dark:hover:border-cyan-500/40"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
