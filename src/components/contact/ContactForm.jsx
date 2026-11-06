import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, User, MessageSquare, Tag } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'success' | 'ready-to-send' | null

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Direct, transparent email transmission via mailto
    // This ensures no fake submission occurs and the recruiter's native client / webmail dispatches real messages
    const mailtoUrl = `mailto:${personalInfo.socialLinks.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Prabhudeep,\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n--\nSent from your portfolio website.`
    )}`;

    window.location.href = mailtoUrl;
    setSubmittedStatus('dispatched');
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xl">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        Send a Direct Message
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
        Fill out this verified form to send an inquiry directly to {personalInfo.socialLinks.email}.
      </p>

      {submittedStatus === 'dispatched' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-600 dark:text-emerald-400 text-xs">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Email Client Dispatched</p>
            <p className="mt-0.5">Your email compose window was triggered with your message pre-filled. If it didn't open automatically, write directly to <span className="font-mono underline">{personalInfo.socialLinks.email}</span>.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        
        {/* Name Input */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Your Name / Company *
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins (Acme Analytics)"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all ${
                errors.name
                  ? 'border-rose-500 ring-1 ring-rose-500'
                  : 'border-slate-200 dark:border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
              }`}
            />
          </div>
          {errors.name && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Your Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. sarah@company.com"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all ${
                errors.email
                  ? 'border-rose-500 ring-1 ring-rose-500'
                  : 'border-slate-200 dark:border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Subject Input */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Subject *
          </label>
          <div className="relative">
            <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Data Analyst Internship / Full-time Opportunity"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all ${
                errors.subject
                  ? 'border-rose-500 ring-1 ring-rose-500'
                  : 'border-slate-200 dark:border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
              }`}
            />
          </div>
          {errors.subject && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
            Your Message *
          </label>
          <div className="relative">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please share details regarding your team, the role scope, or any project questions..."
              className={`w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-950/80 border text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all ${
                errors.message
                  ? 'border-rose-500 ring-1 ring-rose-500'
                  : 'border-slate-200 dark:border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
              }`}
            />
          </div>
          {errors.message && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white
                     bg-gradient-to-r from-electric-600 to-cyan-500 hover:from-electric-500 hover:to-cyan-400
                     shadow-lg shadow-electric-600/30 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-[0.99]"
        >
          <Send className="w-4 h-4" />
          <span>Send Message via Email Client</span>
        </button>

        <p className="text-[11px] text-slate-400 text-center pt-1">
          Guaranteed direct routing without simulated fake delivery states.
        </p>

      </form>
    </div>
  );
}

