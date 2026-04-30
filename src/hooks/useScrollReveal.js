// hooks/useScrollReveal.js
// Triggers CSS reveal animations when elements enter the viewport

import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all elements with the .reveal class.
 * When they enter the viewport, the .visible class is added, triggering the CSS animation.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    // Graceful fallback for older browsers: show content immediately.
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observed = new WeakSet();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after revealing for performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    const observeElement = (el) => {
      if (!(el instanceof Element) || observed.has(el)) {
        return;
      }
      observed.add(el);
      observer.observe(el);
    };

    const observeAllReveals = (root = document) => {
      if (root instanceof Element && root.matches('.reveal')) {
        observeElement(root);
      }
      root.querySelectorAll?.('.reveal').forEach(observeElement);
    };

    // Observe initial elements.
    observeAllReveals(document);

    // Observe lazy-loaded sections/components added after initial mount.
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => observeAllReveals(node));
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, deps);
}
