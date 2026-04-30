// components/ProjectCard.jsx
// Reusable card component for displaying a single project

import React from 'react';
import styles from './ProjectCard.module.css';

/**
 * @param {Object} project - project data object from config.js
 */
export default function ProjectCard({ project }) {
  const { title, description, tags, github, live, year } = project;

  return (
    <article className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.iconRow}>
          {/* Folder icon */}
          <svg className={styles.folderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v8.25m19.5 0A2.25 2.25 0 0119.5 16.5h-15a2.25 2.25 0 01-2.25-2.25V6a2.25 2.25 0 012.25-2.25h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H19.5a2.25 2.25 0 012.25 2.25v1.5"
            />
          </svg>
          <span className={styles.year}>{year}</span>
        </div>

        {/* Links */}
        <div className={styles.links}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer"
              aria-label={`${title} GitHub`} className={styles.iconLink}>
              <GitHubIcon />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer"
              aria-label={`${title} live demo`} className={styles.iconLink}>
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Tags */}
      <ul className={styles.tags}>
        {tags.map((tag) => (
          <li key={tag} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* --- Icon sub-components --- */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}
