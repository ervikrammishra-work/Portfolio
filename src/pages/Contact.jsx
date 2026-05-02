// pages/Contact.jsx
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../config.js';
import styles from './Contact.module.css';

/**
 * Contact section:
 * - Email form powered by backend API
 * - Social links
 */
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = `Submission failed with status ${response.status}`;
        try {
          const data = await response.json();
          if (data?.error) {
            errorMessage = data.error;
          }
        } catch {
          // Keep fallback status message if response is not JSON.
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      setSubmitError(error.message || 'Unable to send right now. Please email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <p className="section-label">06. Contact</p>

        <div className={styles.layout}>
          {/* Left: copy */}
          <div className={`${styles.left} reveal`}>
            <h2 className="section-title">Let's Work Together</h2>
            <p className={styles.desc}>
              Whether you have a project in mind, a role to fill, or just want
              to talk tech — my inbox is open. I'll get back to you within 24 hours.
            </p>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={styles.emailLink}
            >
              {PERSONAL_INFO.email}
            </a>

            {/* Social links */}
            <div className={styles.socials}>
              <SocialLink href={PERSONAL_INFO.social.github} label="GitHub">
                <GitHubIcon />
              </SocialLink>
              
              <SocialLink href={PERSONAL_INFO.social.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href={PERSONAL_INFO.social.twitter} label="Twitter">
                <TwitterIcon />
              </SocialLink>
            </div>
          </div>

          {/* Right: form */}
          <div className={`${styles.right} reveal`} style={{ transitionDelay: '120ms' }}>
            {submitted ? (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>✓</span>
                <p>Message sent! I'll be in touch soon.</p>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>

                {submitError && <p className={styles.errorText}>{submitError}</p>}

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>
            Designed & Built by{' '}
            <span className={styles.footerAccent}>{PERSONAL_INFO.name}</span>
            {' '}· {new Date().getFullYear()}
          </p>
          <p className={styles.footerMono}>
            <span className={styles.mono}>Built with React + Three.js</span>
          </p>
        </div>
      </footer>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={styles.socialLink}
    >
      {children}
      <span>{label}</span>
    </a>
  );
}

/* Icons */
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}



function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
