# BLACKFORGEX — SUBLIMATION PRINTING PAGE
## Revision Notes (Give This to Claude Code Along With the Original Package)

Two fixes needed on the current build:

---

## FIX 1 — SEO TEXT SECTIONS: CENTER THEM, DON'T SIDE-POSITION

The long-form text sections (Section 7 "How Dye Sublimation Actually Gets a Design Into the Fabric", Section 8 "Why Sublimated Graphics Outlast Standard Printed Designs", Section 9 "What to Actually Check Before Choosing a Sublimation Manufacturer" from the content brief) are currently laid out as a side-positioned/split block. Change this to a **centered, single-column layout**:

```css
.text-block {
  max-width: 820px;
  margin: 0 auto 56px;
  text-align: center;
}
```

Each heading + its two paragraphs should sit centered in the middle of the page width, one block stacked after another — not aligned to one side with empty space next to it. This matches the centered text-block pattern already used on the Screen Printing and Cut & Sew pages for consistency across the site.

---

## FIX 2 — REPLACE PROCESS-SHOT IMAGES WITH LIFESTYLE/MODEL IMAGES

The images currently used (fabric printing close-up, heat press action shots) are being replaced. The hero and banner sections should use **a model wearing printed apparel** — a lifestyle shot, not a manufacturing process shot — matching the tone of the reference screenshot (a model wearing a bold printed shirt outdoors).

Since BlackForgeX manufactures technical, outdoor and sportswear apparel (not casual streetwear), use **sportswear/athletic jersey lifestyle photography** instead of a casual patterned shirt — this stays on-brand while matching the "person wearing the product" style the reference shows.

### Updated Image Assignments

**Hero Section**
**File label:** hero-athlete-wearing-jersey
**URL:** `https://images.pexels.com/photos/11357267/pexels-photo-11357267.jpeg?auto=compress&cs=tinysrgb&w=1600`
**Description:** Athlete wearing a red sports jersey on a field — real lifestyle/product-in-use shot, on-brand for sportswear sublimation printing. Use with a left-to-right or bottom dark gradient overlay so the hero heading and body text stay readable, matching the reference screenshot's light-overlay style.

**Full-Color Intro Banner / Inquire Now Section**
**File label:** banner-athlete-jersey-lifestyle
**URL:** `https://images.pexels.com/photos/14435681/pexels-photo-14435681.jpeg?auto=compress&cs=tinysrgb&w=1400`
**Description:** Model wearing a sports jersey — second lifestyle shot for the banner/CTA section, keeping the "customer wearing the product" visual consistent with the hero.

Keep the other two method-stripe images (heat press action shots, `7703649` and `7703684`) as-is — those sections are about the printing process itself, not the finished product, so a process shot is the correct fit there. Only the hero and the main lifestyle banner needed the swap.

---

## LICENSE NOTE

Both new images are from Pexels, free for commercial use, no attribution required — same license basis as the rest of the image manifest.
