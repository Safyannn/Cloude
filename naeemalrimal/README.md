# ورشة نعيم حداد الرمال — Naeem Al-Rimal website

A complete, premium, production-ready static website for a welding & custom
ironworks business in Riyadh. Plain HTML, CSS, and vanilla JS — **no build step,
no framework**. Upload it as-is to shared hosting (Hostinger `public_html`).

## Pages
`index.html` (Home) · `about.html` (About) · `services.html` (12 services) ·
`projects.html` (filterable gallery) · `contact.html` (form + Google Map).

## Structure
```
naeemalrimal/
├── *.html            5 pages (Arabic, RTL)
├── css/styles.css    one shared design system (colours, type, components, motion)
├── js/main.js        one shared script (nav, reveals, counters, filter, sparks)
├── fonts/            self-hosted Cairo + Tajawal (Arabic + Latin, woff2)
└── media/            image/video slots per service — see media/README.md
```

## Features
- Arabic **RTL** throughout, self-hosted Arabic fonts (fast, no external CDN).
- Light premium theme — exact brand palette (ivory `#f7f4ee`, charcoal `#1c1d1f`,
  ember `#D1551F`, brushed brass `#A98249`).
- Sticky header that **shrinks on scroll**, shared footer, consistent nav.
- Floating **WhatsApp** button (`wa.me/966546359392`) on every page, gently pulsing.
- WhatsApp-first CTAs everywhere; the contact form opens WhatsApp pre-filled.
- Scroll-reveal + blur-fade animations, hover states, **animated counters**, and an
  ambient spark canvas in the hero (all respect `prefers-reduced-motion`).
- Projects gallery **filterable by the same 12 service categories**; deep-links work
  (e.g. `projects.html#security-fences`).
- Google Map embedded on Contact (coords `24.829636, 46.797263`).
- SEO: per-page Arabic `<title>` + meta description, `LocalBusiness` structured data,
  alt text on every image. Fully responsive, mobile-first.

## Motion inspiration
Rebuilt natively in CSS/JS from the Magic UI / React Bits vocabulary the project
uses — blur-fade text reveals, scroll-triggered reveals, a marquee trust strip, an
animated grid backdrop, and smooth hover states. (The live MCP registries are
blocked by this environment's network policy, so the patterns were reimplemented
without a framework dependency — same premium feel, zero runtime deps.)

## Add your photos
The site runs now with on-brand placeholder tiles. Drop real photos into the
`media/` folders using the documented names and they appear automatically — see
**`media/README.md`**.

## Deploy to Hostinger
Upload the **contents** of this folder into `public_html/` (so
`public_html/index.html`, `public_html/css/`, …). Enable the free SSL. Done.
