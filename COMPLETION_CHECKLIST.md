# European Birch / RPL International — Completion Checklist

Source: https://europeanbirch.com
Repository: pixelrisemedia1/europeanbirch.com
Status: IN PROGRESS — unchecked items are not verified complete.
Rule: Check an item only after comparing against the source or testing the public deployment and recording evidence in the commit/issue/notes.

## 1. Routes and source pages
- [ ] Home
- [ ] About Us
- [ ] Plywood
- [ ] Partners
- [ ] Contact

## 2. Images, video, documents and other media
- [ ] assets/plywood-boards.webp — verify source image, exact crop/position and hero dimensions
- [ ] assets/plywood-stacks.webp — verify all board/background placements and crop
- [ ] assets/logs.webp — verify source relationship and placement; do not retain if not used by source
- [ ] Audit every source logo, mill/partner mark, plywood grade/sample photo, decorative graphic and contact/map image

## 3. Site-specific content and functionality
- [ ] Make each of the five routes match its original page content and layout independently; current route fallback selects sections from one page
- [ ] Verify Home hero, headline, subhead, CTA, imagery, page lengths, section order and all product/partner highlights
- [ ] Verify About Us history, founding year, service claims, certification wording and accompanying imagery against source
- [ ] Verify Plywood categories, thicknesses, sizes, grades, product descriptions, downloads and inquiry CTAs against source
- [ ] Verify Partners content, partner/mill names and logos; avoid invented or placeholder partner claims
- [ ] Verify Contact addresses, phone, hours, office labels, map and every form field/validation/destination
- [ ] Make route navigation work from header, footer, in-page links, direct load and refresh; preserve useful browser history
- [ ] Remove duplicate/hidden section behavior once dedicated page content is accurately implemented

## Shared production acceptance checks
- [ ] Verify source route inventory against the live source and archived export; record date and evidence for each route.
- [ ] Compare each page at matching desktop, tablet and mobile viewports; record unresolved visual differences.
- [ ] Audit every image, logo, icon, video, poster, caption, document and embedded asset; verify local/independent URL, dimensions, crop, alt text and successful public loading.
- [ ] Confirm no Base44 media URLs, SDK/runtime, API, auth, storage, form or database dependency remains in the copied site or its public requests.
- [ ] Verify every navigation destination, CTA, form, menu, carousel, modal, filter and document link; no dead controls or fake success states.
- [ ] Verify accurate title/description/social metadata, favicon, headings, canonical URL plan, robots/sitemap when appropriate and not-found behavior.
- [ ] Check keyboard use, focus visibility, contrast, labels, alt text, reduced-motion, mobile touch targets and responsive reflow.
- [ ] Check spelling, dates, claims, addresses, phone numbers, email addresses, legal content and document versions against approved source material.
- [ ] Check browser console, failed network requests, broken links, 404s, image loading and performance on desktop/mobile.
- [ ] Verify GitHub Actions deployment succeeds; open the live deployed copy in a fresh session and directly load/refresh every route.
- [ ] Record final verification date, deployed commit, public URL, and any remaining limitation. Custom domain/DNS is intentionally deferred until requested.

## Verified audit notes — 2026-11-27
- [x] Inspected source and copied homepages; the copy has distinct Home, AboutUs, Plywood, Partners and Contact route links.
- [x] Fixed the footer Plywood link in both `index.html` and `404.html`; GitHub Pages commits were created.
- [ ] Verify that latest footer fix has deployed and that all five routes present the right original page content, imagery, and layout rather than hidden/filtered home sections.
- [ ] Compare source and copy image files, page screenshots, contact form behavior and mobile navigation.

### European Birch media verification detail
- [x] Source homepage audit captured a plywood-board hero image and a plywood-layer background image; it also references a separate Unsplash photographic background.
- [ ] Map each source image/background to the correct local file or approved independent asset; verify the additional background is not missing and compare its crop, contrast overlay and focal point.

## Repository-level checks
- [x] Inspected the repository file tree and confirmed the root homepage file and deployment workflow path.
- [x] Compared local asset filenames against references in the root homepage HTML.
- [x] Scanned the root homepage HTML for Base44, Supabase, and Unsplash URL references: none found in `index.html`.
- [ ] Scan every repository file, document, metadata field and deployed network request for any remaining third-party/Base44 runtime or media dependency.
- [ ] Confirm all listed local assets are source-matched and used in the appropriate page; unused files are not removed until their role is understood.
- [ ] Verify the latest deployment for this checklist commit and smoke-test every route and asset after deployment.

## European Birch source inventory (checked 2026-11-27)
- [x] Confirmed visible navigation routes: Home, AboutUs, Plywood, Partners and Contact.
- [x] Confirmed source homepage contains an image hero and a background plywood-layer image; no video or downloadable document element was present in the captured homepage media inventory.
- [ ] Inspect the four non-home routes directly to capture their exact page text, images, forms and layout before deciding how the copy should implement them.
