# Vita Gohel — Portfolio / EPK

A digital portfolio and electronic press kit for Vita Gohel, Creative & Brand Leader.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Aesthetic

Editorial-luxe, sitting between the warm magazine feel of Aura Agency and the cinematic gallery treatment of Adam Savitch's photography portfolio. Warm bone/cream base with two cinematic dark sections (Selected Work and Contact) for rhythm.

- **Display type:** Fraunces (variable serif with SOFT and WONK axes for editorial italic moments)
- **Body type:** Manrope (clean modern sans, intentionally NOT Inter)
- **Palette:** Warm bone (`#F4EFE8`), deep ink (`#1A1612`), sepia (`#A88E6F`), deep ink black (`#0E0B08`)
- **Texture:** Subtle SVG grain overlay across the entire site for warmth

## Sections

1. **Hero** — Massive italic serif name, current role callout
2. **About (01)** — Editorial bio with restrained stat grid (numbers folded in, not boastful)
3. **Selected Work (02)** — Dark cinematic section with animated laptop + phone mockups showing scrolling beauty content
4. **Career (03)** — All ten roles as editorial entries; highlight numbers (176%, 150%, 35%, etc.) woven into the narrative prose, never as standalone stat blocks
5. **Brands (04)** — Animated marquee of all ten company names in italic display serif
6. **Aesthetic (05)** — Editorial photo mosaic (stock placeholders for now)
7. **Contact (06)** — Big closing statement with email + LinkedIn buttons

---

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy

Two options, depending on your preference:

**Option A — Netlify with Next.js adapter (default)**
Just push to GitHub and connect the repo to Netlify. Netlify auto-detects Next.js and uses their adapter. No extra config needed.

**Option B — Static export (matches your other Site Sauce builds)**
In `next.config.js`, uncomment the line:
```js
output: 'export',
```
Then your build output goes to `/out` and deploys as pure static files like your other sites.

---

## What needs to be swapped when Vita sends real assets

This is built so swapping is fast. Search-and-replace targets:

### 1. Email address
File: `app/components/Contact.tsx`
Currently: `vita.gohel@gmail.com` (from the transcript — confirm with Vita; the transcript had a transcription error but this is the intended address)

### 2. Device mockup imagery (Selected Work section)
File: `app/components/Work.tsx`
The laptop mockup currently shows a 3-frame animated reel using Unsplash stock. When Vita sends real assets:
- Replace the URLs in the `LaptopMockup` and `PhoneMockup` functions with screenshots of LBLA Beauty, Alterna, Neutrogena, etc.
- The browser bar text says `lblabeauty.com` — change as needed when showing other brands.

### 3. Editorial gallery images
File: `app/components/Gallery.tsx`
Five Unsplash stock images. Swap the `images` array with real campaign/portfolio shots when received.

### 4. Hero background photo
File: `app/components/Hero.tsx`
The faint image behind the name. Currently a soft beauty editorial photo. Could be swapped for an LBLA campaign image when available.

### 5. About section copy
File: `app/components/About.tsx`
Currently uses Vita's LinkedIn About copy, lightly adapted. Easy to refine in one place.

### 6. Career entries
File: `app/components/Experience.tsx`
The `roles` array at the top. Each role's `body` field is full prose with key numbers folded in.

### 7. Brand list
File: `app/components/BrandWall.tsx`
The `brands` array at the top.

### 8. Headshot (when received)
Not currently in the build. When Vita sends a headshot, the cleanest place to add it is alongside the About bio — right column, asymmetric. I can wire that in fast.

---

## Notes for adding real brand logos

Right now the brand section uses elegant typography for company names rather than logos, which is a deliberate editorial choice (looks like exhibition listings rather than a vendor wall). If Vita prefers actual logos, swap `BrandWall.tsx` to render SVGs. Real brand logos require attribution/permission considerations — using their official press kits is the safe path.

---

## Performance / SEO

- Fonts loaded via `next/font/google` (no external requests at runtime)
- Smooth scroll, scroll-margin set per section for clean anchor jumps
- Metadata + OpenGraph in `app/layout.tsx`
- All animations use `viewport={{ once: true }}` so they don't re-trigger on scroll-up
- Image lazy loading enabled on the gallery
