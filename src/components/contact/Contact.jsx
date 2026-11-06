import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ContactForm from './ContactForm';
import { personalInfo } from '../../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  Clock,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Let's Connect"
          title="Get In Touch"
          subtitle="Interested in interviewing me for an internship or full-time Data Analyst role? Reach out via direct email, LinkedIn, or the inquiry form below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick response banner */}
            <div className="p-6 rounded-2xl glass-card border border-electric-500/25">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                  Actively Interviewing
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Available for Immediate Internship & 2026/2027 Grad Opportunities
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Whether you have an opening for a Data Analyst, Business Intelligence specialist, or SQL/Python developer, I would love to connect.
              </p>
            </div>

            {/* Email Card with 1-click Copy */}
            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-electric-500/10 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.socialLinks.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.socialLinks.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className="p-2 rounded-xl text-slate-500 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {copied ? (
                    <span className="flex items-center text-xs text-emerald-500 font-medium gap-1">
                      <Check className="w-4 h-4" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Profile Card */}
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-md hover:border-cyan-400/40 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                      LinkedIn Professional Profile
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      Kasapu Prabhudeep
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </a>

            {/* GitHub Profile Card */}
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-md hover:border-cyan-400/40 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">
                      GitHub Repositories
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      github.com/kasapuprabhudeep
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </a>

            {/* Location & Timezone */}
            <div className="p-5 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>IST (UTC+5:30)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}

