# Real 2 Reel Science – Website (React)

A React rebuild of [real2reelscience.com](https://www.real2reelscience.com/), built with Vite, React 18, React Router, and styled-components.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Structure

- **Pages:** Home, Services & Prices, Testimonials, About, Resources and Inspiration
- **Contact form:** UI only (no submission)
- **Assets:** Logos and images are hotlinked from the live site; update `src/constants.js` if URLs change

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/servicesandprices` | Services |
| `/testimonials` | Testimonials |
| `/about` | About |
| `/resources` | Resources and Inspiration |

Contact section lives on the home page at `/#contact`.
