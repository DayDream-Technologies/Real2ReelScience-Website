# Real 2 Reel Science – Site Professionalization TODO

Items to complete before or after launch to make the site more professional.

---

## Images & Assets

- [ ] **Hero image (Home)** – Replace placeholder with a real hero image (e.g. science/film theme, consulting, or brand imagery). Update `PLACEHOLDER_IMAGES.hero` in `src/constants.js` or use a local file in `public/images/`.
- [ ] **Services section image** – Replace placeholder with an image that fits “Script & Science Consulting.” Update `PLACEHOLDER_IMAGES.services`.
- [ ] **About / founder image** – Replace placeholder with a real photo of Emilie Lorditch. Update `PLACEHOLDER_IMAGES.about`.
- [ ] **Logo variants** – If you have a light-background or high-contrast logo variant, consider using it where it improves readability (e.g. future light sections).
- [ ] **Favicon** – Replace default Vite favicon in `public/` with a Real 2 Reel Science favicon (e.g. derived from logo).

---

## Content – Resources & Inspiration

- [ ] **Inspiration content** – The “Resources and Inspiration” page currently has only **Resources** (links, articles, podcasts). Add a dedicated **Inspiration** section, for example:
  - Science headlines or “ripped from the headlines” ideas for writers
  - Writing prompts or story sparks
  - Featured science topics or recommended reading
  - Quotes or short pieces that inspire science-based storytelling
- [ ] **Copy and links** – Review all Resources links and descriptions for accuracy and current URLs.
- [ ] **Optional: blog or news** – If you plan to add a blog or “News” section, add a placeholder route and a TODO here.

---

## Contact & Functionality

- [ ] **Contact form backend** – Form is UI-only. Connect to a real endpoint (e.g. Formspree, Netlify Forms, or your own API) and add success/error handling.
- [ ] **Social links** – Confirm Twitter/X, LinkedIn, and Instagram URLs in `src/constants.js` and add any missing platforms.

---

## SEO & Meta

- [x] **Per-page titles** – Already set in each page’s `useEffect`. Verify wording and branding (e.g. “Real 2 Reel Science – …”).
- [x] **Meta descriptions** – Unique description per route via `PageMeta` (react-helmet-async).
- [x] **Open Graph / social preview** – og:title, og:description, og:image, og:url, plus Twitter card meta in `PageMeta`.
- [x] **Sitemap / robots.txt** – `public/robots.txt` and `public/sitemap.xml` added; update URLs if domain changes.

---

## Accessibility & UX

- [x] **Focus states** – Global `:focus-visible` styles in `index.css`; Header, Footer, ContactForm, CookieConsent, and SocialIcons use visible focus outlines.
- [x] **Alt text** – Hero, services, and about images use meaningful `alt` via `ImageWithFallback`; decorative images use appropriate alt.
- [x] **Mobile nav** – Hamburger menu on viewports ≤768px; nav collapses into a toggle menu.
- [x] **Reduced motion** – Body gradient and header/footer gradient animations disabled when `prefers-reduced-motion: reduce`; smooth scroll set to auto.

---

## Polish & Performance

- [x] **Loading / error states** – `ImageWithFallback` component shows "Loading…" and "Image could not be loaded" for hero, services, and about images.
- [x] **Analytics** – `Analytics` component placeholder; `CookieConsent` banner stores consent in localStorage; wire your GA/Plausible script in `Analytics.jsx` after consent.
- [x] **Legal pages** – Privacy Policy (`/privacy`) and Terms of Use (`/terms`) added; linked from footer and cookie banner.

---

## Quick reference

| Item | Location / note |
|------|------------------|
| Placeholder image URLs | `src/constants.js` → `PLACEHOLDER_IMAGES` |
| Social links | `src/constants.js` → `SOCIAL` |
| Resources & Inspiration page | `src/pages/Resources.jsx` |
| Contact form (UI) | `src/components/ContactForm.jsx` |
| Document title per page | Each page’s `useEffect` with `document.title` |

Mark items complete by changing `- [ ]` to `- [x]` as you go.
