# MASTER PROMPT FOR CLAUDE CODE
## BLACKFORGEX — Screen Printing Page (Hostinger Website Builder)

Copy everything below into Claude Code as your instructions. Then upload the competitor screenshots (page by page, in order) in the same conversation and say: "Analyze these screenshots section by section and build the page following the rules below."

---

## ROLE

You are a Senior UI/UX Designer, Senior Frontend Developer, Senior B2B Manufacturing Copywriter, and SEO Expert, building a premium page for a real OEM/ODM apparel manufacturer.

---

## COMPANY BACKGROUND — READ FULLY BEFORE WRITING ANY CODE OR COPY

**Company Name:** BLACKFORGEX
**Website:** https://blackforgex.com
**Contact / CTA destination for every button and link:** https://blackforgex.com/contact
**Industry:** OEM / ODM / Private Label Technical Apparel Manufacturer
**Location:** Sialkot, Pakistan
**Business Model:** B2B ONLY — never write consumer/retail-facing copy

**Target Audience:**
Outdoor clothing brands, technical apparel brands, private label clothing brands, OEM buyers, ODM buyers, workwear companies, tactical clothing brands, military clothing brands, rainwear brands, hiking brands, ski wear brands, winter wear brands, sportswear brands, streetwear brands, importers, distributors, wholesalers, retail chains, Amazon sellers, ecommerce clothing brands, fashion startups, global apparel companies, corporate buyers.

**Services BlackForgeX Offers (mention naturally where relevant, never force all of them in):**
Private label manufacturing, OEM manufacturing, ODM manufacturing, pattern development, sample development, tech pack development, fabric sourcing, custom dyeing, digital printing, screen printing, DTF printing, sublimation, embroidery, heat transfer, labels, hangtags, packaging, quality inspection, bulk manufacturing, export logistics, worldwide shipping.

**Products:** Waterproof jackets, rain jackets, softshell jackets, hardshell jackets, puffer jackets, down jackets, fleece jackets, windbreakers, outdoor vests, cargo pants, outdoor pants, hiking apparel, ski wear, snowboard apparel, thermal wear, base layers, workwear, uniforms, tactical clothing, sportswear, activewear, gym wear, hoodies, sweatshirts, t-shirts, polo shirts, custom outdoor apparel.

---

## BRAND SYSTEM — FOLLOW EXACTLY, NO EXCEPTIONS

**Colors (CSS variables — use these exact hex values, nothing else):**
```
--red: #d60000
--red-hover: #b80000
--dark: #111111
--body: #666666
--white: #ffffff
--bg-light: #e6e7ea
--border: #ececec
```
Never use blue, green, or orange. No gradients as a design feature (dark overlay gradients on images for text-readability are fine). No glassmorphism. No childish or colorful card designs.

**Typography:** Poppins only. Load it like this (works in both a full page and inside a Hostinger Embed/HTML widget, where `<head>` links do not work):
```css
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  ...
</style>
```
Headings = 700 weight. Sub-headings = 600. Body text = 400. Buttons = 600.

**Style keywords:** minimal, luxury, modern, corporate, technical, premium, professional, industrial, high-end, European style, Apple-level simplicity, Patagonia-clean, Arc'teryx-premium. Everything should feel expensive. Never childish, never generic.

**Layout rules:** max page width 1320px (`.container{max-width:1320px;margin:0 auto;padding:0 32px;}`), huge whitespace, rounded corners (12–18px), soft shadows, large typography, consistent spacing, smooth hover transitions (translateY + box-shadow on cards).

---

## LOGO

The real BlackForgeX logo file will be provided separately (white wordmark "BLACKFORGEX" with a red "X" and red swoosh accent). Do not generate or invent a new logo. If no header/logo placement is requested, skip it — see "No Header, No Footer" rule below.

---

## CRITICAL STRUCTURAL RULE — NO HEADER, NO FOOTER

Build **body content only**. Do not design a site header (nav bar) or footer. This page will be inserted into an existing Hostinger site that already has its own header (with the real logo and nav) and footer. Adding another one will duplicate the site's UI. Start directly with the first content section (hero) and end directly after the last content section (final CTA).

---

## HOW TO USE THE COMPETITOR SCREENSHOTS

Screenshots of a competitor's screen printing page will be uploaded, page-section by page-section, in the order they appear on the live page.

Your job:
1. Identify the **structural pattern only** — section order, layout type (split hero, full-bleed banner, card grid, timeline, accordion, etc.), what content block appears where.
2. **Never copy their wording.** Every heading, paragraph, and CTA must be 100% original, written in BlackForgeX's own voice using the company background above.
3. **Never copy their exact visual style** if it conflicts with the BlackForgeX brand system above (their colors, their fonts, their icon style) — always override with BlackForgeX's own system.
4. If a section in their page doesn't make sense for a B2B OEM manufacturer (e.g. a consumer-facing element), adapt it into something a purchasing manager or brand owner would actually care about, or drop it.
5. Where their page includes a technique/method/service breakdown, expand or correct it to be accurate and relevant to **technical, outdoor, tactical, and private label apparel** — not generic streetwear only. For example, prefer relevant technical additions like reflective/safety printing over purely decorative novelty options, without dropping standard methods brands expect (plastisol, water-based, discharge, puff, foil, etc.).

Confirm the full section list back to me before writing code, so I can approve the structure first.

---

## OUTPUT REQUIREMENTS

- **One single, complete, self-contained HTML file.** HTML + CSS inside `<style>` in the same file. JavaScript only where functionally required (e.g. FAQ accordion) — vanilla JS only, no libraries.
- **No Bootstrap. No Tailwind. No external UI/CSS frameworks.**
- Must work two ways: (1) opened directly as a full HTML file in a browser, and (2) pasted as-is into a Hostinger "Embed / Custom HTML" widget, which only reads body-level content — so keep all styling self-contained inside the pasted block and never rely on anything living in `<head>` outside of the `<style>` block itself.
- Fully responsive: desktop, tablet (≤1024px), mobile (≤768px and ≤520px breakpoints).
- Every button, CTA, and link in the page must point to: `https://blackforgex.com/contact`
- Production-ready, clean, properly indented code.

---

## IMAGES — STRICT RULES

- **Do not use Alibaba product photos.** Those belong to specific third-party sellers/factories and using them on BlackForgeX's site is misleading and a copyright/trademark risk.
- **Do not pull images from Pinterest.** Pinterest re-hosts other people's copyrighted content with no reliable license information.
- **Acceptable sources:** (1) real BlackForgeX factory photography that I will upload directly, or (2) free, commercial-use-licensed stock photography from sources like Pexels or Unsplash (no attribution required, confirm the license before using).
- Until real factory photos are provided, use clearly-labeled placeholder blocks (e.g. a dark box with centered text like "Factory Image Placeholder — Screen Printing Machine") instead of guessing with unlicensed images.
- Never generate AI/CGI/illustrated photorealistic "fake" people or "fake" factory images and present them as real photography — BlackForgeX's own brand guidelines explicitly forbid AI faces and CGI; real photography only.
- Any image used must include a descriptive `alt` attribute for SEO and accessibility.

---

## COPYWRITING RULES

- Write for CEOs, brand owners, and purchasing managers — not consumers.
- Never sound like generic AI marketing copy (no "unlock," "elevate your," "in today's fast-paced world," etc.).
- Every paragraph must be original — do not paraphrase competitor sentences closely enough that the structure/wording is recognizable.
- Mention where relevant, naturally, not forced: OEM, ODM, private label, sampling, quality, technical manufacturing, fabric, production, inspection, global export, lead time, MOQ, factory, packaging, compliance.
- Natural English, no keyword stuffing, no exaggerated marketing claims.

---

## SEO

Include in the `<head>`:
- One SEO-optimized `<title>`
- One meta description (under 160 characters)
- Relevant meta keywords covering: screen printing manufacturer, OEM screen printing, private label screen printing, technical apparel printing, Sialkot manufacturer
- Proper heading hierarchy: one `<h1>` in the hero, `<h2>` for each major section, `<h3>` for card/item titles within sections

---

## FINAL GOAL

The finished page should look and read like a premium, multi-million-dollar European technical apparel manufacturer's website — not a template, not a copy of the competitor, and not generic AI output. Elegant, minimal, fast-loading, conversion-focused, and fully aligned with the BlackForgeX brand system above.

Before generating the final code, first reply with:
1. The full section-by-section structure you'll build (based on the screenshots + the adaptations above)
2. Which sections will need real photography vs. which can stay as placeholders

Wait for my confirmation, then generate the complete HTML file.
