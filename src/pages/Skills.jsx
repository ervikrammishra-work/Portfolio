// pages/Skills.jsx
import React from 'react';
import SkillBar from '../components/SkillBar.jsx';
import { SKILLS } from '../config.js';
import styles from './Skills.module.css';

/**
 * Skills section:
 * - Three categorized columns (Frontend, Backend, Tools)
 * - Animated progress bars
 */
export default function Skills() {
  const categories = Object.entries(SKILLS);

  const categoryIcons = {
    Frontend: <FrontendIcon />,
    Backend: <BackendIcon />,
    Tools: <ToolsIcon />,
  };

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <p className="section-label">04. Skills</p>
        <h2 className="section-title">Technical Toolkit</h2>

        <div className={styles.grid}>
          {categories.map(([category, skills], ci) => (
            <div
              key={category}
              className={`${styles.category} reveal`}
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>
                  {categoryIcons[category]}
                </span>
                <h3 className={styles.categoryTitle}>{category}</h3>
              </div>

              <div className={styles.skillsList}>
                {skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud of technologies */}
        <div className={`${styles.tagCloud} reveal`}>
          <p className={styles.tagCloudLabel}>Also familiar with</p>
          <div className={styles.tags}>
            {[
              'Rust', 'Swift', 'WASM', 'Cloudflare Workers',
              'PlanetScale', 'Turso', 'tRPC', 'Bun', 'Deno',
              'Astro', 'SvelteKit', 'Tauri', 'Electron', 'Nx',
            ].map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* SVG Icons */
function FrontendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}
