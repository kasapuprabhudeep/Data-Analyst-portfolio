import React from 'react';
import { Database, Home, ArrowLeft } from 'lucide-react';

export default function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center bg-navy-950 text-white">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
          <Database className="w-10 h-10 animate-bounce" />
        </div>
        <h1 className="text-6xl font-extrabold text-cyan-400 font-mono">404</h1>
        <h2 className="text-2xl font-bold">Query Result: Record Not Found</h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          The dataset or page you requested does not exist in this database schema.
        </p>
        <button
          onClick={onGoHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-semibold text-sm shadow-lg transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio Home</span>
        </button>
      </div>
    </div>
  );
}
