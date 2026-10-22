# Moonlight Lilies landing page

Campaign landing page for Spa Ceylon's Festive 2026 gift collection, **Moonlight Lilies**. It is a single full-screen page: the key visual on a night ground, with two buttons that send visitors to:

- **Explore the range**: https://lk.spaceylon.com/pages/festive-2026
- **Read the Legend**: https://moonlight.spaceylon.com/

## Structure

```
site/                    ← the deployable website (upload only this folder)
  index.html
  favicon.ico            ← the same icon as moonlight.spaceylon.com
  assets/css/styles.css
  assets/fonts/          ← self-hosted Cinzel (stand-in for Trajan)
  assets/img/            ← key visual (desktop and mobile versions), social share image
PRODUCT.md, DESIGN.md    ← product and design notes (not deployed)
.impeccable/             ← design-process notes (not deployed)
```

Static HTML and CSS, with no JavaScript, no build step and no dependencies.

## Run locally

```bash
python -m http.server 4173 --directory site
```

Then open http://127.0.0.1:4173/.

## Deploy

Upload the contents of `site/` to any static host (a subdomain, Netlify, Cloudflare Pages, S3, etc.). Asset paths are relative, so it also works from a subfolder.

Before launch, once the domain is known, make the social tags absolute in `index.html`: change `og:image` to the full URL of `assets/img/share.jpg` and add `<meta property="og:url" content="https://…/">`. Facebook, WhatsApp and LinkedIn ignore relative image paths.

`site/assets/img/*.webp.json` and `site/favicon.ico.json` record where each image came from. They are harmless if deployed, but you can leave them out.

## Fonts

The only live text is the two button labels, set in Trajan. Visitors with Trajan installed see the real thing; everyone else gets the self-hosted look-alike, Cinzel (SIL Open Font License). The words on the banner are part of the image. Goudy stays in the body font stack, but no Goudy text ships, so no Goudy font is downloaded. If you hold a web licence for Trajan, add its `.woff2` file and an `@font-face` rule to `styles.css`.

## Images

The page loads one key visual, chosen by screen shape:

- **Landscape screens** (desktops, laptops, tablets and phones held sideways): `banner.webp` (2400 × 800), or `banner-1200.webp` on smaller screens. These come from the key visual supplied as `WEB BANNER WITHOUT.png`.
- **Portrait screens** (phones, tablets held upright): `banner-mobile.webp` (1080 × 540), the mobile key visual. It is shown at 1.6:1, which trims only the curtain edges.
- `share.jpg` (1200 × 630): the social-sharing image, cropped from the desktop key visual.
