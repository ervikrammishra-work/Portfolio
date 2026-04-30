// components/Navbar.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../config.js';
import { scrollToSection } from '../utils/helpers.js';
import styles from './Navbar.module.css';

/**
 * Fixed top navigation with:
 * - Logo / name brand
 * - Nav links that scroll to sections
 * - Hamburger menu for mobile
 * - Shrink-on-scroll behaviour
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = useCallback((section) => {
    scrollToSection(section.toLowerCase());
    setMenuOpen(false);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Brand */}
        <button className={styles.brand} onClick={() => scrollToSection('hero')}>
          <span className={styles.brandAccent}>&lt;</span>
          {PERSONAL_INFO.name.split(' ')[0]}
          <span className={styles.brandAccent}> /&gt;</span>
        </button>

        {/* Desktop nav */}
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`${styles.link} ${
                  activeSection === link.toLowerCase() ? styles.active : ''
                }`}
                onClick={() => handleNav(link)}
              >
                <span className={styles.linkNum}>
                  {String(NAV_LINKS.indexOf(link) + 1).padStart(2, '0')}.
                </span>{' '}
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link, i) => (
            <button
              key={link}
              className={styles.mobileLink}
              style={{ animationDelay: `${i * 60}ms` }}
              onClick={() => handleNav(link)}
            >
              <span className={styles.linkNum}>
                {String(i + 1).padStart(2, '0')}.
              </span>{' '}
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
