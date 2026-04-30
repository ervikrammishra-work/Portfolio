// utils/helpers.js
// Shared utility functions used across the portfolio

/**
 * Linearly interpolate between two values.
 * Useful for smooth camera/object movement.
 */
export const lerp = (a, b, t) => a + (b - a) * t;

/**
 * Clamp a value between min and max.
 */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/**
 * Map a value from one range to another.
 */
export const mapRange = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
};

/**
 * Scroll smoothly to a section by its ID.
 */
export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Debounce a function call.
 */
export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Generate a random float between min and max.
 */
export const randFloat = (min, max) => Math.random() * (max - min) + min;

/**
 * Format a URL for display (strip protocol + www).
 */
export const formatUrl = (url) =>
  url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
