// App.jsx — Root component: composes all sections
import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './pages/Hero.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

// Lazy-load below-the-fold sections for performance
const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Skills = lazy(() => import('./pages/Skills.jsx'));
const Resume = lazy(() => import('./pages/Resume.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

/**
 * Main App — assembles portfolio sections.
 * Uses React.lazy + Suspense for code-splitting below the fold.
 * useScrollReveal wires up the IntersectionObserver for .reveal elements.
 */
export default function App() {
  // Initialize scroll-triggered reveal animations
  useScrollReveal([]);

  return (
    <>
      <Navbar />

      <main>
        {/* Hero is above-the-fold — never lazy */}
        <Hero />

        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Resume />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

/** Minimal loading placeholder for lazy sections */
function SectionSkeleton() {
  return (
    <div
      style={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '24px',
          height: '24px',
          border: '2px solid var(--border-subtle)',
          borderTopColor: 'var(--accent-primary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
