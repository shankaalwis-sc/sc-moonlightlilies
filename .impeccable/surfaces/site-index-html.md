---
version: 1
slug: "site-index-html"
primary_target: "site/index.html"
related_targets: []
---

## Scope

`site/index.html`: the Moonlight Lilies Festive 2026 campaign landing page. Mode: **Persuade**. Build path: code-led (no image generation in this session).

## Surface strategy

- Audience: Spa Ceylon gift shoppers in Sri Lanka, often on phones, arriving from campaign channels.
- Action: Explore the range (lk.spaceylon.com/pages/festive-2026) is primary; Read the Legend (moonlight.spaceylon.com) is secondary. The page closes on The Collection with a single View the collection button to the range.
- Proof and content: the key visual (which shows the range), the Legend's own story beats and its cover. No prices, no invented claims.
- User direction (22 October 2026): no header, no footer, no product listings. Everything from the Beauty & Fragrance feature down was cut, including the closing quote, and replaced by the View the collection button.
- Constraints: the key visual's fonts and colours (user-pinned). The banner carries baked-in words, so the hero exposes them as text.

## Direction contract

THESIS: The page is the night of the legend. The key visual's palace night is the ground, and the lake of lamps is the reading path. It refuses the category default of a light product grid under a hero banner.

OWN-WORLD: Night-slate sky (#1b1a23 deepening to #121118) and one closing oxblood band (#2a1012 with an #632825 glow) like the curtains. Cream-gold Trajan capitals (#fef3ca) and a Goudy italic narrative voice. Lotus coral (#f97983) and lantern blush (#fcb6a0) appear only as light, never as large fields. Gold hairlines rule the sections, the key visual is feathered into the night with no frame, and gold lily line art is the only ornament. As shipped; DESIGN.md is the system of record.

STORY: The visitor sees the collection presented on a stage in the key visual and reads the legend in five short beats (beauty shared, not taken). They come to believe the gifts carry that meaning, then click Explore the range or View the collection, or read the Legend first.

FIRST VIEWPORT: No top bar (user direction). The 3:1 key visual spans the full width from the top of the page, its edges dissolving into the night; phones crop it to a 1.3:1 window on the lettering. Overlapping the banner's lower fade sit the primary Explore the range button (cream-gold fill, oxblood text) and Read the Legend (gold outline). Both buttons are visible at 1440x900 and at 390x844, and the Legend's opening shows below them on desktop.

FORM: brief-pinned world (the supplied key visual's palace night), position 1 of 1. Signature interaction: lamps kindle one by one down the Legend path as each chapter enters view. seed: none. The roll was available but deliberately skipped, because the user's brief pinned the world: "use the same fonts same colors" as the supplied key visual.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

Lamps lighting one by one down the lake of the Legend, ending at the open book.

## Unresolved

- Hosting target and domain are not decided.
- Analytics tag (the Legend site uses Matomo at analytics.mkthq.xyz) is not added; the owner decides.
- Phones crop the key visual to its lettering, so the queen shows only as an arm, the throne and the edge of her gown. A portrait or square master of the key visual would let a `<picture>` source restore her at 600px and below.
- With no header or footer, the Spa Ceylon logo appears nowhere on the page. The brand name appears only in the hero note and the meta tags.
- og:image and og:url must become absolute URLs once the domain is chosen.
