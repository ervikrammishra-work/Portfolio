// pages/About.jsx
import React from 'react';
import { PERSONAL_INFO, EXPERIENCE } from '../config.js';
import styles from './About.module.css';

/**
 * About Me section:
 * - Professional bio
 * - Experience timeline
 */
export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <p className="section-label">02. About</p>

        <div className={styles.grid}>
          {/* Bio column */}
          <div className={`${styles.bioCol} reveal`}>
            <h2 className="section-title">About Me</h2>

            <div className={styles.bio}>
              <p>{PERSONAL_INFO.bio}</p>
              <p>
                When I'm not building, I'm exploring AI as a work tool and
                experimenting with new features to improve productivity and user experience.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>{PERSONAL_INFO.location}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className={styles.infoLink}>
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Status</span>
                <span className={styles.available}>
                  <span className={styles.dot} />
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Experience column */}
          <div className={`${styles.expCol} reveal`} style={{ transitionDelay: '150ms' }}>
            <h3 className={styles.expTitle}>Experience</h3>
            <div className={styles.timeline}>
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <div className={styles.roleHeader}>
                      <span className={styles.role}>{exp.role}</span>
                      <span className={styles.period}>{exp.period}</span>
                    </div>
                    <span className={styles.company}>@ {exp.company}</span>
                    <p className={styles.expDesc}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
