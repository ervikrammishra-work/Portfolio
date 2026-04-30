// pages/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { PROJECTS } from '../config.js';
import styles from './Projects.module.css';

/**
 * Projects section:
 * - Featured project highlight
 * - Grid of all project cards
 * - Filter tabs (All / Featured)
 */
export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'featured'
    ? PROJECTS.filter((p) => p.featured)
    : PROJECTS;

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <p className="section-label">03. Work</p>

        <div className={styles.header}>
          <h2 className="section-title">Selected Projects</h2>

          {/* Filter tabs */}
          <div className={styles.filters}>
            {['all', 'featured'].map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="reveal"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`${styles.moreCta} reveal`}>
          <p className={styles.moreText}>More on GitHub</p>
          <a
            href="https://github.com/alexrivera"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreLink}
          >
            View all repositories
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
