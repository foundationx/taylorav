# Taylor AV — Next.js Marketing Site

This repo now runs as a Next.js 15 app that mirrors the premium, technical aesthetic described in the brief while keeping the static marketing intent intact.

## Features
- **App router** under `app/` with `page.tsx` files for `/`, `/services/`, `/rentals/`, `/staging/`, `/about-us/`, `/contact/`, plus `app/not-found.tsx`.  
- **Shared layout** with sticky header, footer, JSON-LD schema, and global styling in `app/globals.css`.  
- **Hero scramble & fade headings** implemented as reusable client components (`components/Hero`, `components/HeroScramble`, `components/FadeHeading`).  
- **Assets** live in `public/assets` (images, logo) and `public/robots.txt` + `public/sitemap.xml` still cover SEO expectations.

## Local development

1. Install dependencies: `yarn install`  
2. If the app throws chunk errors after switching environments or interrupted builds, clear the cache: `npm run clean`
3. Spin up Next in dev mode: `yarn dev`  
3. Open `http://localhost:3000/` and navigate through the sections (Next handles routing internally).

## Deployment notes
- The app exports as a standard Next.js build (`yarn build`) and can be hosted on any platform that supports Next (including static exports if you run `next export`).  
- `robots.txt` and `sitemap.xml` are served from `public/`.  
- Update `public/assets` imagery as needed; the design uses placeholders that can be swapped in quickly.
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to enable GA4.
- Set `CONTACT_WEBHOOK_URL` to deliver contact submissions to your CRM, automation, or email pipeline. If the webhook requires auth, also set `CONTACT_WEBHOOK_BEARER_TOKEN`.
