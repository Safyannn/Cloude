# Aperture — Photography Studio

A single-page, image-forward landing page for a photography studio. Editorial and
minimal: warm neutrals, a single restrained cognac accent, high-contrast Didone
display type, and motion whose only job is to frame the work.

## Run it

It's a static page — open `index.html` in any browser, or serve the folder:

```bash
cd aperture
python3 -m http.server 8080   # then visit http://localhost:8080
```

An internet connection is needed the first time for Google Fonts (Bodoni Moda +
Hanken Grotesk) and the placeholder photography. The animation libraries are
**vendored** in `vendor/` (GSAP, ScrollTrigger, Lenis, Three.js) so the motion
works with no CDN dependency.

## What's in it

- **Hero** — full-bleed WebGL displacement image-sequence (Three.js) with mouse
  parallax and a quiet, blur-fade headline.
- **Marquee**, **portfolio grid** with clip-path/mask reveals and inner parallax,
  a **pinned horizontal archive**, a roman-numeral **services** list with a
  cursor-following hover preview, an **about** section, dark **testimonials**,
  an elegant **booking** form, and a footer wordmark reveal.
- **Lenis** momentum scrolling, a custom lens cursor, and a scroll-progress iris.
- Single-context **WebGL hover distortion** on gallery thumbnails, with a full CSS
  fallback. Respects `prefers-reduced-motion` and degrades gracefully without WebGL.

## Swapping in real work

The images use `picsum.photos` placeholders. Replace the `src` values on the
`<img data-gl …>` tags (portfolio + archive), the hero `HERO_IMAGES` array and
`#hero-fallback` in the script, and the `data-preview` attributes on the service
rows. Keep the aspect ratios (the layout classes `ratio-tall`, `ratio-port`,
etc.) for the intended composition. Studio name, copy, and contact details are
plain text in `index.html`.
