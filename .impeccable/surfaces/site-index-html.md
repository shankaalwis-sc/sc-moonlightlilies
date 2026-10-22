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
- Action: Explore the range (lk.spaceylon.com/pages/festive-2026) is primary; Read the Legend (moonlight.spaceylon.com) is secondary. Both sit on the key visual; there is nothing else to click.
- Proof and content: the key visual itself, which shows the range, the queen and the palace night, plus one line of copy. No prices, no invented claims.
- User direction (22 October 2026): the page is a single full-screen hero. Removed in turn: the header and footer, the product listings, the closing quote, then the Legend retelling and The Collection band. Phones load the user's dedicated 1080x540 mobile key visual.
- Constraints: the key visual's fonts and colours (user-pinned). The banner carries baked-in words, so the hero exposes them as text.

## Direction contract

THESIS: The page is the night of the legend: the key visual's palace night becomes the whole screen, and the collection is presented on that stage. It refuses the category default of a banner strip above a product grid.

OWN-WORLD: A night-slate sky (#1b1a23) with a low lantern-blush glow behind the actions. Cream-gold Trajan capitals (#fef3ca) on the buttons, and a Goudy italic narrative voice. Lotus coral and lantern blush appear only as light (the glow, the button underglow, text selection), never as fields. The key visual is feathered into the night with no frame, and nothing else ornaments the page. As shipped; DESIGN.md is the system of record.

STORY: The visitor sees the collection presented on a stage, the queen enthroned beside the gifts under the palace night. They understand this is Spa Ceylon's festive collection, then click Explore the range, or Read the Legend to hear the story behind it.

FIRST VIEWPORT: The whole page is one screen at every size (user direction). There is no top bar. The key visual sits centred in the night, sized to the screen so the actions always fit. On landscape screens the 3:1 desktop plate narrows on short laptops, overscans the width by up to 12% on tall screens, and never upscales past 2400px. Portrait screens load the 2:1 mobile plate at 1.6:1, so the title, the gifts and the queen's face stay in frame. The primary Explore the range button (cream-gold fill, oxblood text) and Read the Legend (gold outline) overlap the plate's lower fade and scale with the screen, and one Goudy italic line follows.

FORM: brief-pinned world (the supplied key visual's palace night), position 1 of 1. Signature moment: the unveil, as the palace's lamps come up when the page opens (brightness and saturation rise while the plate settles). The Legend's lamp-kindling path was retired with the Legend section. seed: none. The roll was available but deliberately skipped, because the user's brief pinned the world: "use the same fonts same colors" as the supplied key visual.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

The palace lamps coming up on the key visual as the page opens, with the two cream-gold and gold-outline actions rising onto its lower fade.

## Unresolved

- Hosting target and domain are not decided.
- Analytics tag (the Legend site uses Matomo at analytics.mkthq.xyz) is not added; the owner decides.
- Resolved: phones now load the user's mobile key visual, so the queen, her face and the gifts stay in frame on portrait screens. Its 1080px width is slightly soft on high-density tablets held upright.
- With no header or footer, the Spa Ceylon logo appears nowhere on the page. The brand name appears only in the hero note and the meta tags.
- og:image and og:url must become absolute URLs once the domain is chosen.
