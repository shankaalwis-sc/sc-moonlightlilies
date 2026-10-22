# Moonlight Lilies landing page

Campaign landing page for Spa Ceylon's Festive 2026 gift collection, **Moonlight Lilies**. It opens on the key visual, tells the Legend in five short beats, and sends visitors to:

- **Explore the range**: https://lk.spaceylon.com/pages/festive-2026
- **Read the Legend**: https://moonlight.spaceylon.com/

## Structure

```
site/                    ← the deployable website (upload only this folder)
  index.html
  assets/css/styles.css
  assets/js/main.js      ← lights the Legend's lamps as each chapter scrolls into view
  assets/fonts/          ← self-hosted Cinzel + Sorts Mill Goudy (stand-ins for Trajan and Goudy)
  assets/img/            ← key visual, Legend cover (WebP), social share image
  assets/svg/            ← gold lily line art (favicon and Collection mark)
PRODUCT.md, DESIGN.md    ← product and design notes (not deployed)
.impeccable/             ← design-process notes (not deployed)
```

Static HTML, CSS and a few lines of JS, with no build step and no dependencies.

## Run locally

```bash
python -m http.server 4173 --directory site
```

Then open http://127.0.0.1:4173/.

## Deploy

Upload the contents of `site/` to any static host (a subdomain, Netlify, Cloudflare Pages, S3, etc.). Asset paths are relative, so it also works from a subfolder.

Before launch, once the domain is known, make the social tags absolute in `index.html`: change `og:image` to the full URL of `assets/img/share.jpg` and add `<meta property="og:url" content="https://…/">`. Facebook, WhatsApp and LinkedIn ignore relative image paths.

`site/assets/img/**/*.webp.json` files record where each image came from. They are harmless if deployed, but you can leave them out.

## Fonts

The brand faces come first in every font stack: Trajan for headings and labels, Goudy for body text. Visitors with them installed see the real thing. Everyone else gets the self-hosted look-alikes, Cinzel and Sorts Mill Goudy (both SIL Open Font License). If you hold a web licence for Trajan or Goudos, add their `.woff2` files and `@font-face` rules to `styles.css`.

## Images

- `banner.webp` (2400 × 800) and `banner-1200.webp`: the Moonlight Lilies key visual (supplied as `WEB BANNER WITHOUT.png`). Phones show a crop centred on the lettering.
- `share.jpg` (1200 × 630): the social-sharing image, cropped from the key visual.
- `legend-cover.webp`: the cover of The Legend of the Moonlight Lilies, from moonlight.spaceylon.com.
