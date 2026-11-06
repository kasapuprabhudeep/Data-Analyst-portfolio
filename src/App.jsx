import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Certifications from './components/certifications/Certifications';
import Education from './components/education/Education';
import ResumeSection from './components/resume/ResumeSection';
import Contact from './components/contact/Contact';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'certifications',
  'education',
  'resume',
  'contact'
];

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const activeSection = useScrollSpy(SECTION_IDS, 100);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative selection:bg-electric-500 selection:text-white">
      
      {/* Background mesh grid */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 dark:opacity-20 z-0" />

      {/* Navigation Bar */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />

    </div>
  );
}
