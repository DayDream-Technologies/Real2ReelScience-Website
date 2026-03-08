import { useEffect } from 'react'

/**
 * Placeholder for analytics (e.g. Google Analytics, Plausible).
 * Load your analytics script only after cookie consent is given.
 * Check localStorage for 'r2r-cookie-consent' === 'accepted' before initializing.
 */
export default function Analytics() {
  useEffect(() => {
    try {
      const consent = localStorage.getItem('r2r-cookie-consent')
      if (consent !== 'accepted') return

      // Example: Google Analytics
      // if (window.gtag) window.gtag('config', 'G-XXXXXXXXXX');
      //
      // Example: Plausible
      // const script = document.createElement('script');
      // script.defer = true;
      // script.dataset.domain = 'real2reelscience.com';
      // script.src = 'https://plausible.io/js/script.js';
      // document.head.appendChild(script);
    } catch {
      // ignore
    }
  }, [])

  return null
}
