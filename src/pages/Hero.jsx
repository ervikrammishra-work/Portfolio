// pages/Hero.jsx
import React, { useEffect, useRef } from 'react';
import HeroCanvas from '../components/HeroCanvas.jsx';
import { PERSONAL_INFO } from '../config.js';
import { scrollToSection } from '../utils/helpers.js';
import styles from './Hero.module.css';

/**
 * Hero section:
 * - Full-viewport Three.js background
 * - Name, title, tagline
 * - CTA buttons
 */
export default function Hero() {
  const textRef = useRef(null);

  // Entrance animation: stagger children
  useEffect(() => {
    const children = textRef.current?.children;
    if (!children) return;
    Array.from(children).forEach((el, i) => {
      el.style.animationDelay = `${i * 120 + 200}ms`;
      el.classList.add(styles.fadeInUp);
    });
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Three.js background */}
      <HeroCanvas />

      {/* Gradient overlays */}
      <div className={styles.gradientBottom} />
      <div className={styles.gradientLeft} />

      {/* Text content */}
      <div className={styles.content}>
        <div ref={textRef} className={styles.textStack}>
          <p className={styles.greeting}>
            <span className={styles.mono}>01.</span> Hello, I'm
          </p>

          <h1 className={styles.name}>{PERSONAL_INFO.name}</h1>

          <h2 className={styles.title}>{PERSONAL_INFO.title}</h2>

          <p className={styles.tagline}>{PERSONAL_INFO.tagline}</p>

          <div className={styles.cta}>
            <button
              className={styles.btnPrimary}
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowIcon />
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollHint}>
          <div className={styles.mouse}>
            <div className={styles.wheel} />
          </div>
          <span className={styles.scrollLabel}>Scroll</span>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  );
}
