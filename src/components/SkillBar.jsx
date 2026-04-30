// components/SkillBar.jsx
// Animated skill proficiency bar

import React, { useEffect, useRef, useState } from 'react';
import styles from './SkillBar.module.css';

/**
 * @param {string} name  - skill name
 * @param {number} level - proficiency 0–100
 */
export default function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.skill} ref={barRef}>
      <div className={styles.label}>
        <span className={styles.name}>{name}</span>
        <span className={styles.level}>{level}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}
