# BLACKFORGEX — Image Upload Guide

Upload real BlackForgeX factory/product photography into the folder matching each page. Claude Code will pick images up from here and wire them into the pages, replacing the dark placeholder blocks.

## How to upload (GitHub website)

1. Open the repo on github.com and **switch to the working branch** (`claude/skills-inventory-check-q1p592`) using the branch dropdown.
2. Open the folder for the page (e.g. `images/screen-printing/`).
3. Click **Add file → Upload files**, drag your photos in, and press **Commit changes**.

## Rules for every image

- **Format:** JPG (or WebP). Keep each file **under 400 KB** — compress before uploading if possible (tinypng.com works fine). If you can't compress, upload anyway and Claude will optimize.
- **Naming:** lowercase, hyphens, descriptive — e.g. `screen-printing-machine-01.jpg`, `waterproof-jacket-seam-taping.jpg`. No spaces, no Urdu/special characters in filenames.
- **Real photography only** — no Alibaba photos, no Pinterest images, no AI-generated images (brand rule).
- Landscape (wide) shots work best for heroes; either orientation is fine for cards.

## What each folder needs

### `logo/`
| File | Notes |
|---|---|
| `blackforgex-logo.png` | White wordmark with red X, transparent background (PNG/SVG) |

### `home/` — 8 images
| Suggested filename | Where it appears |
|---|---|
| `hero-production-floor.jpg` | Hero (wide shot of factory/production floor) |
| `jackets-outerwear.jpg` | Product card — Jackets & Outerwear |
| `technical-pants.jpg` | Product card — Outdoor & Technical Pants |
| `workwear-uniforms.jpg` | Product card — Workwear & Uniforms |
| `tactical-clothing.jpg` | Product card — Tactical Clothing |
| `winter-wear.jpg` | Product card — Ski, Snowboard & Winter Wear |
| `sportswear.jpg` | Product card — Sportswear & Activewear |
| `knitwear.jpg` | Product card — Hoodies, Sweatshirts, T-Shirts & Polos |

### `screen-printing/` — 7 images
| Suggested filename | Where it appears |
|---|---|
| `hero-screen-printing-machine.jpg` | Hero (printing press / carousel machine) |
| `plastisol-print.jpg` | Method card — Plastisol |
| `water-based-print.jpg` | Method card — Water-Based |
| `puff-print.jpg` | Method card — Puff |
| `discharge-print.jpg` | Method card — Discharge |
| `reflective-print.jpg` | Method card — Reflective & Safety |
| `foil-print.jpg` | Method card — Foil |

### Pages not built yet
These folders are ready — upload whatever real photos you have and Claude will plan each page around them:

- `about-us/` — factory exterior, team, production floor, QC area
- `services-hub/`, `cut-and-sew/`, `private-label/`, `sublimation/`, `embroidery/`, `packaging/`, `tech-pack/`
- `products-hub/`, `jackets/`, `pants/`, `workwear/`, `tactical/`, `winter-wear/`, `sportswear/`, `knitwear/`

You don't need every image before a page is built — pages launch with labeled placeholders, and images are swapped in when you upload them.
