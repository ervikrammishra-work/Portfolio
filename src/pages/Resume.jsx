// pages/Resume.jsx
import React from 'react';
import { PERSONAL_INFO, EXPERIENCE, SKILLS } from '../config.js';
import styles from './Resume.module.css';

/**
 * Resume section:
 * - Download button for PDF resume
 * - Inline resume preview with key highlights
 */
export default function Resume() {
  return (
    <section id="resume" className={`section ${styles.resume}`}>
      <div className="container">
        <p className="section-label">05. Resume</p>

        <div className={styles.layout}>
          {/* Left: CTA */}
          <div className={`${styles.left} reveal`}>
            <h2 className="section-title">My Resume</h2>
            <p className={styles.desc}>
              A full overview of my experience, education, and technical skills.
              Available to download as a PDF, or preview the highlights below.
            </p>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadIcon />
              Download PDF
            </a>

            {/* Quick stats */}
            <div className={styles.stats}>
              {[
                { label: 'Years of Experience', value: 'Fresher' },
                { label: 'Projects Shipped', value: '3+ ' },
                
                { label: 'Open Source Contributions', value: '20+' },
              ].map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statVal}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Inline preview */}
          <div className={`${styles.right} reveal`} style={{ transitionDelay: '120ms' }}>
            <div className={styles.preview}>
              <div className={styles.previewHeader}>
                <span className={styles.previewDots}>
                  <span /><span /><span />
                </span>
                <span className={styles.previewTitle}>resume.pdf</span>
              </div>

              <div className={styles.previewBody}>
                {/* Name block */}
                <div className={styles.resumeName}>{PERSONAL_INFO.name}</div>
                <div className={styles.resumeTitle}>{PERSONAL_INFO.title}</div>
                <div className={styles.resumeContact}>
                  {PERSONAL_INFO.email} · {PERSONAL_INFO.location}
                </div>

                <div className={styles.resumeDivider} />

                {/* Experience summary */}
                <div className={styles.resumeSection}>
                  <div className={styles.resumeSectionTitle}>Experience</div>
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className={styles.resumeExp}>
                      <div className={styles.resumeExpRole}>{exp.role}</div>
                      <div className={styles.resumeExpMeta}>
                        {exp.company} · {exp.period}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.resumeDivider} />

                {/* Key skills */}
                <div className={styles.resumeSection}>
                  <div className={styles.resumeSectionTitle}>Core Skills</div>
                  <div className={styles.resumeSkillsTags}>
                    {Object.values(SKILLS).flat().slice(0, 8).map((s) => (
                      <span key={s.name} className={styles.resumeSkillTag}>
                        {s.name.split(' / ')[0]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Blur overlay hinting full resume */}
                <div className={styles.blurOverlay}>
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download
                    className={styles.previewDownloadBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadIcon />
                    Download Full Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}
