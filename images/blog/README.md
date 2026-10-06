# Blog images

Web-optimized versions of the uploaded embroidery and shipping photos. They're ready to use as featured images or inline images on BLACKFORGEX blog posts.

Each image comes in two formats: `.webp` (serve this first) and `.jpg` (fallback). Each file is at most 1600px wide and under 400KB.

| File | Size | Alt text | Suggested blog topics |
|---|---|---|---|
| shipping-cartons-ready-for-dispatch | 1536x1024 | Packed garment cartons with barcode labels staged for dispatch at the BLACKFORGEX warehouse | Order fulfilment, packaging standards |
| container-loading-export-shipment | 980x653 | Workers loading garment cartons into a shipping container for export | Export logistics, shipping to 40+ countries |
| warehouse-garment-cartons-on-pallets | 987x658 | Palletized garment cartons ready for container loading | Bulk orders, lead times, FOB/CIF shipping |
| multi-head-embroidery-machine-line | 1600x1066 | Line of multi-head embroidery machines stitching garments in production | Embroidery capacity, factory tour |
| computerized-embroidery-machine-control-panel | 1600x962 | Computerized multi-head embroidery machine with digital control panel | Digitizing, embroidery technology |
| industrial-embroidery-machines-factory-floor | 1113x1113 | Rows of industrial embroidery machines on the factory floor | Factory overview, scaling production |
| embroidery-needle-stitching-crest-closeup | 1084x813 | Close-up of an embroidery needle stitching a crest design in a hoop | Embroidered patches, crests, detail work |
| embroidery-machine-stitching-logo-on-tshirt | 1456x816 | Embroidery machine head stitching a logo onto a white t-shirt | Custom logo embroidery |
| embroidery-hoop-logo-on-black-garment | 1600x1066 | Hooped black garment with a logo being embroidered | Private label branding, streetwear |
| embroidery-logo-on-navy-fabric | 944x642 | Multi-head embroidery machine stitching logos onto navy fabric | Bulk logo embroidery, uniforms |
| embroidery-thread-cones-color-range | 1040x690 | Rainbow of embroidery thread cones mounted on a machine | Thread colour matching, design options |

## Usage

```html
<picture>
  <source srcset="images/blog/embroidery-thread-cones-color-range.webp" type="image/webp">
  <img src="images/blog/embroidery-thread-cones-color-range.jpg"
       alt="Rainbow of embroidery thread cones mounted on a machine"
       width="1040" height="690" loading="lazy">
</picture>
```

In WordPress, upload the `.jpg` or `.webp` to the media library and paste the alt text above into the Alt Text field.

## Notes

- `embroidery-machine-stitching-logo-on-tshirt` shows the misspelled placeholder text "YOUR LOGGO" and a "TAHIATOH" brand plate. Avoid it, or crop it, for anything customer-facing.
- These are embroidery and shipping images, not screen printing. They don't fill the screen-printing slots listed in `images/README.md`.
