// Base URL for hotlinked assets from live site
export const SITE_BASE = 'https://www.real2reelscience.com'

// Canonical site URL for SEO (sitemap, Open Graph). Update for production.
export const SITE_URL = 'https://www.real2reelscience.com'

// Used in public/robots.txt and public/sitemap.xml – keep in sync with SITE_URL

// Logo (local asset in public/images); use BASE_URL so it works on GitHub Pages
const base = import.meta.env.BASE_URL
export const LOGO_HEADER = `${base}images/logo.png`
export const LOGO_FOOTER = `${base}images/logo.png`

// Social links (update with real URLs from live site)
export const SOCIAL = {
  twitter: 'https://twitter.com/real2reelscience',
  linkedin: 'https://www.linkedin.com/company/real2reelscience',
  instagram: 'https://www.instagram.com/real2reelscience',
}

// Placeholder images (replace with real assets when available)
export const PLACEHOLDER_IMAGES = {
  hero: 'https://placehold.co/1200x400/1b2838/ff9f1c?text=Real+2+Reel+Science',
  services: 'https://placehold.co/800x300/243447/f8f6f3?text=Script+%26+Science+Consulting',
  about: 'https://placehold.co/600x400/243447/ff9f1c?text=Emilie+Lorditch',
}
