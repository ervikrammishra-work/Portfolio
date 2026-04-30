// components/SectionDivider.jsx
// Thin horizontal divider with optional label

import React from 'react';
import styles from './SectionDivider.module.css';

export default function SectionDivider({ label }) {
  return (
    <div className={styles.divider}>
      <div className={styles.line} />
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.line} />
    </div>
  );
}
