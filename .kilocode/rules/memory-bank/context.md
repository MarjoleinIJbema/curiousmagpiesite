# Active Context: Curious Magpie Static Site

## Current State

**Site Status**: ✅ Static HTML/CSS site ready for GitHub Pages

The site has been converted from a Next.js app to a plain static HTML/CSS site. No build step required. Hosted directly on GitHub Pages.

## Recently Completed

- [x] **Agenda update (2026-04-13)**: Added Kunstmarkt Wezup (9 aug 2026) to agenda; fixed Kunstmarkt Schoonebeek location to "Centrum van Schoonebeek (Pallertplein)"
- [x] **Design review & cleanup (2026-02-27)**:
  - Replaced agenda placeholder cards with simple "more dates coming" text
  - Accessibility: added skip-nav link, aria-expanded on hamburger, aria-hidden on decorative emoji
  - Moved all inline styles to CSS classes (hero-img-frame, about-section, contact-grid, product card rotations via nth-child, etc.)
  - CSS cleanup: removed 6 duplicate color alias variables, ~30 unused classes, unnecessary !important — reduced CSS by ~293 lines
  - Added `loading="lazy"` to all below-the-fold images
  - Updated products CTA to clarify purchase options (markets + email)

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `index.html` | Home page with hero, about, featured products, CTA | ✅ Done |
| `producten/index.html` | Products overview with 6 products + illustrations | ✅ Done |
| `agenda/index.html` | Markets agenda with upcoming + past dates | ✅ Done |
| `contact/index.html` | Contact page with email + Instagram | ✅ Done |
| `css/styles.css` | All styles: layout, components, utilities, image classes | ✅ Done |
| `js/nav.js` | Mobile hamburger menu toggle | ✅ Done |
| `images/` | SVG stub illustrations (8 files: hero, atelier, 6 products) | ✅ Stub |
| `favicon.svg` | SVG favicon (bird head + disco ball, cropped from ekster.svg) | ✅ Done |
| (no workflow needed) | GitHub Pages serves from `main` branch directly | ✅ Done |
| `.kilocode/` | AI context & recipes | ✅ Ready |

## Current Focus

Website is a static site for Curious Magpie ceramics atelier (Marjolein IJbema).

### To deploy on GitHub Pages:
1. Push to `main` branch
2. Go to GitHub repo Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `/ (root)`
3. Save — the site will be live within a minute

Pending user actions:
1. Replace SVG stub illustrations in `images/` with real product photos (swap SVG for JPG/PNG, update `src` in HTML)
2. Update email address in contact page (currently info@curiousmagpie.nl)
3. Update market dates in agenda page as needed
4. Enable GitHub Pages in repo settings (Source: "Deploy from a branch" → Branch: `main` / `/ (root)`)

## Quick Start Guide

### To edit content:

Edit the HTML files directly. No build step needed.

### To preview locally:

Open `index.html` in a browser, or use a simple HTTP server:
```bash
python3 -m http.server 8000
```

### To add a new page:

1. Create a directory with an `index.html` file
2. Copy the header/footer from an existing page
3. Add navigation links to all pages

## Recently Completed (cont.)

- [x] **Replaced LLM-generated text with real content from Marjolein**
  - Home about section: "Even voorstellen" — personal introduction by Marjolein (background, journey to ceramics, inspiration)
  - Products page intro: description of product range and invitation to visit markets

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base Next.js setup |
| Previous | Built full Curious Magpie ceramics website (4 pages + components) |
| 2026-02-22 | Converted from Next.js to plain static HTML/CSS for GitHub Pages hosting |
| 2026-02-22 | Added ekster.svg logo to header, updated to 5-color brand palette (#00679A, #207FA6, #6DB52D, #2C6C13, #FFB30F) |
| 2026-02-22 | Removed dot background pattern (solid butter bg), added 8 SVG stub illustrations for all products/hero/atelier |
| 2026-02-22 | Made green the dominant color (customer feedback), made design more playful with rounder shapes (20px/999px border-radius) |
| 2026-02-22 | Simplified header: removed duplicate name text, enlarged logo, single green stripe, solid section backgrounds |
| 2026-02-22 | Created SVG favicon from ekster.svg (cropped to head + disco ball, text removed), updated all HTML pages to reference it |
| 2026-02-22 | Moved all inline color styles to CSS classes; headers now use accent blue (#00679A); greens kept for backgrounds |
| 2026-02-26 | Replaced LLM-generated texts with real content: "Even voorstellen" on home page, product range intro on products page |
| 2026-02-27 | Design review & cleanup: accessibility fixes, CSS cleanup (-293 lines), lazy loading, removed placeholder cards, updated products CTA |
