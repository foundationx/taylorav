# Content Needed — Taylor AV Website
Replace all placeholder content below with real information before launch.

---

## 🧑‍🤝‍🧑 TEAM (About page — `app/about-us/page.tsx`)

The `teamMembers` array at the top of the file contains 4 placeholder entries.
For each real team member, provide:

| Field | Placeholder | Replace with |
|-------|-------------|--------------|
| `name` | "Alex Taylor" | Real full name |
| `title` | "Founder & Technical Director" | Real job title |
| `bio` | Generic placeholder bio | 1–2 sentence real bio |
| `initials` | "AT" | First + last initial |

> Also provide a headshot photo (recommended: 400×400px, square crop) to upgrade
> the initials avatar to a real photo. Save to `/public/assets/team/` and update the component.

---

## 📸 PORTFOLIO (Portfolio page — `app/portfolio/page.tsx`)

The `projects` array contains 9 placeholder projects using stock site images.
For each real project, provide:

| Field | Notes |
|-------|-------|
| `title` | Real project/event name (or venue + event type if confidential) |
| `tag` | Confirm or update the event category tag |
| `location` | City, UT or venue name |
| `description` | 1–2 sentences describing the scope and what Taylor AV delivered |
| `image` | Real production photo. Recommended: 1200×800px. Save to `/public/assets/portfolio/` |
| `imageAlt` | Descriptive alt text for the photo |

> Priority: replace with real production photography. Even 3–4 genuine show photos
> outperform 9 stock images for trust and conversion.

---

## 💬 TESTIMONIALS (Home page — `app/page.tsx`)

The `testimonials` array has 3 entries. These may be real — confirm the following:

- [ ] Are "Jordan Blake", "Serena Lowe", and "Marcus Diaz" real clients?
- [ ] Are their quotes accurate and approved for public use?
- [ ] Can you provide headshot photos for each? (Recommended: 80×80px circle crop)
- [ ] Can you provide company logo SVGs for "North Rim Agency", "Summit Tech", "Western Lights Collective"?

> If real, add photos. If placeholder, replace with actual verified client testimonials.
> Google Reviews or direct email approval from clients is ideal.

---

## 📹 VIDEO / SIZZLE REEL (Home page — sizzle reel section)

The sizzle reel section currently loops `hero-loop.mp4` (existing asset).

Provide a real production highlight reel:
- [ ] MP4 file, H.264, ideally 60–90 seconds, 1080p minimum
- [ ] If you have a YouTube showreel, provide the URL so we can embed it in a modal
- Save the file as `/public/assets/sizzle-reel.mp4` and update the `src` in `app/page.tsx`

---

## 🏛️ TRUST BAR (Home page — `components/TrustBar.tsx`)

Verify these statistics are accurate:

| Stat | Current Value | Confirm |
|------|---------------|---------|
| Shows annually | 250+ | ☐ |
| Touring crews | 18 active | ☐ |
| Stage support | 24/7 | ☐ |
| In business since | 2008 | ☐ |
| State Contract # | #VC195059 | ☐ |

Update `components/TrustBar.tsx` with any corrections.

---

## 📊 STATS BAR (Home page — `app/page.tsx`)

The `heroStats` array:
- "250+ Shows annually" — ☐ confirm
- "18 Touring crews" — ☐ confirm
- "24/7 Stage support" — ☐ confirm

---

## 🎨 ABOUT PAGE QUOTE (`app/about-us/page.tsx`)

There is a pull-quote at the bottom of the about page:
> "There are plenty of integrators, but the people behind the gear are what truly count..."

- [ ] Is this a real client quote? If so, attribute it with a real name, title, and company.
- [ ] If placeholder, replace with a verified testimonial.

---

## 📍 CONTACT PAGE

- [ ] Confirm the Google Maps pin for `12963 Redwood Rd, Riverton, UT 84065` is correct
- [ ] Confirm `+1 (801) 520-1699` is the correct main line
- [ ] Confirm office hours (currently Mon–Fri 08:00–18:00 in JSON-LD)

---

## 📱 SOCIAL MEDIA HANDLES

Currently in `app/layout.tsx` (JSON-LD) and `components/Footer.tsx`:

| Platform | Current URL | Confirm active |
|----------|-------------|----------------|
| Instagram | instagram.com/taylorav | ☐ |
| LinkedIn | linkedin.com/company/taylor-av | ☐ |
| YouTube | youtube.com/@taylorav | ☐ |

Update the URLs in both files if the handles are different.

---

## 🔍 INSIGHTS / BLOG (`lib/insights.ts`)

3 placeholder blog posts exist. These are guides, not real articles.
- [ ] Review and confirm/rewrite the content in each post
- [ ] Add more posts (recommended: 1–2 per month for SEO)
- [ ] Post titles, dates, and descriptions are in `lib/insights.ts`

---

## 🖼️ LOGO

- [ ] Confirm `/public/assets/logo.png` and `/public/assets/logo.svg` are the final approved versions
- [ ] Confirm favicon `/public/icon.png` matches the brand

---

## 🔧 ENVIRONMENT VARIABLES (not content, but required for launch)

Set in your deployment environment (AWS Amplify):

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 tracking ID |
| `CONTACT_WEBHOOK_URL` | CRM webhook URL for contact form submissions |
| `CONTACT_WEBHOOK_BEARER_TOKEN` | Optional auth token for the webhook |
