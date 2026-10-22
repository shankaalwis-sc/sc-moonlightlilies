---
name: Moonlight Lilies
description: Spa Ceylon Festive 2026. The key visual's palace night on one screen, lit by lantern blush and with the key video filling the screen and cream-gold Trajan lettering.
colors:
  night-950: "#121118"
  night-900: "#1b1a23"
  lotus-500: "#f97983"
  lotus-300: "#fcb6a0"
  gold-50: "#fef3ca"
  gold-100: "#f6e3aa"
  gold-300: "#e3c47a"
  ink: "#2a1012"
  text: "#ecdfc9"
  rule-strong: "rgb(211 175 55 / 0.55)"
typography:
  kicker:
    fontFamily: "Goudos, \"Goudy Old Style\", \"Sorts Mill Goudy\", Georgia, serif"
    fontSize: "clamp(1.125rem, 0.8rem + 1.1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.2
  name:
    fontFamily: "\"Trajan Pro 3\", \"Trajan Pro\", Trajan, \"Cinzel\", \"Times New Roman\", serif"
    fontSize: "clamp(1.75rem, 0.9rem + 3.2vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "0.04em"
  tagline:
    fontFamily: "Goudos, \"Goudy Old Style\", \"Sorts Mill Goudy\", Georgia, serif"
    fontSize: "clamp(1rem, 0.8rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.2
    fontFamily: "\"Trajan Pro 3\", \"Trajan Pro\", Trajan, \"Cinzel\", \"Times New Roman\", serif"
    fontSize: "clamp(0.8125rem, 0.7rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  hairline: "1px"
  button: "2px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.gold-100}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "1.17em 2.34em 1.05em"
    height: "4.15em"
  button-primary-hover:
    backgroundColor: "{colors.gold-50}"
    textColor: "{colors.ink}"
  button-quiet:
    backgroundColor: "rgb(18 17 24 / 0.8)"
    textColor: "{colors.gold-50}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "1.17em 2.34em 1.05em"
    height: "4.15em"
  button-quiet-hover:
    backgroundColor: "rgb(211 175 55 / 0.12)"
    textColor: "{colors.gold-50}"
---

# Design System: Moonlight Lilies

## Overview

**Creative North Star: "The Night of the Legend"**

The page is the palace night of the supplied key visual, and nothing more: one screen filled edge to edge by the key video, darkened at top and bottom. Lettering is cream-gold: Trajan capitals for the name and labels, Goudy italic for "Presenting" and the tagline, as lettered on the banner. Colour beyond night and gold arrives only as light: the low lantern-blush glow behind the actions, the warm underglow beneath the primary button, the coral of a text selection.

The world is brief-pinned to the client's key visual ("use the same fonts same colors"), so the banner remains the source of truth for hue, type and atmosphere even though the page now shows the key video. Density is minimal and ceremonial: one video, one title, two actions. Ornament is restricted to the world's own materials: fine gold hairlines and a single stroked arrow.

**Key Characteristics:**
- One night-slate ground filling exactly one screen; no light grounds, no further sections.
- Cream-gold Trajan capitals for every label; no running text on the page.
- Lotus coral and blush appear only as light, never as fills of any size.
- Gold hairlines draw the quiet button's border and the primary button's printed inner rule.
- Motion is lamplight: the palace brightens, then the actions rise; nothing slides in from the side.

## Colors

A night palette lit from within: two night tones, a three-step gold for lettering and focus, and two lotus tones held back for light.

### Primary
- **Title Cream-Gold** (gold-50): the quiet button's label and the primary button's hover fill. Matches the banner's title lettering.
- **Lantern Parchment** (gold-100): the primary button fill; one step warmer than the lettering so the button reads as a printed object.

### Secondary
- **Burnished Gold** (gold-300): the focus outline and the quiet button's hover border.
- **Strong Gold Hairline** (rule-strong): old gold at 55%, the quiet button's resting border. The same old-gold hue tints the quiet button's hover ground at 12%.

### Tertiary (light only)
- **Lotus Coral** (lotus-500): the text selection only.
- **Lantern Blush** (lotus-300): the hero's low radial glow (10%) and the primary button's underglow (45%, 60% on hover).

### Neutral
- **Palace Night** (night-900): the page ground and the hero; the theme colour.
- **Lake Night** (night-950): the quiet button's ground at 80% and the text colour on a selection.
- **Curtain Ink** (ink): the oxblood of the theatre curtains, kept as the text on cream-gold; its 22% tint draws the primary button's inner rule.
- **Moon Parchment** (text): the base text colour.

### Named Rules
**The Lamplight Rule.** Lotus coral and blush are light sources. They fill a glow, a shadow or a selection; they never fill a section, a card or a button.

**The One Ground Rule.** The only surface is Palace Night, warmed by a low blush glow. Lake Night appears only under the quiet button. A second ground needs a reason in the key visual.

## Typography

**Display Font:** Trajan Pro 3 / Trajan Pro / Trajan (licensed, used when installed), with self-hosted Cinzel as the stand-in
**Body Font:** Goudos / Goudy Old Style (licensed, used when installed), with self-hosted Sorts Mill Goudy italic as the stand-in; italic only

**Character:** Roman inscriptional capitals over an old-style italic. Trajan carries the name and labels at weight 400 with open tracking; Goudy italic carries "Presenting" and the tagline. The h1 is live text on the video's top scrim, recreating the banner's lettering: kicker clamp(1.125rem, 0.8rem + 1.1vw, 2rem), name clamp(1.75rem, 0.9rem + 3.2vw, 4rem) uppercase at 0.04em, tagline clamp(1rem, 0.8rem + 0.6vw, 1.5rem) at 30ch.

### Hierarchy
- **Label** (400, clamp(0.8125rem, 0.7rem + 0.25vw, 1.125rem), 1.2, 0.2em, uppercase): button text. The label size drives the whole button, which is sized in em.

### Named Rules
**The Licensed First Rule.** Every stack names the brand's licensed face first and its free stand-in second. Never ship a stack that skips to a system serif for display.

**The No Bold Rule.** Trajan stays at weight 400 with tracking for emphasis; font-synthesis-weight is off.

## Layout

One centred column on one screen. The hero fills exactly the viewport (min-height of the vh token: 100svh, falling back to 100vh), places the title at the top and the actions at the bottom over the full-screen video, and pads clamp(1rem, 4vh, 3rem) top and bottom. Gutters are fluid (gutter token) and apply to the actions.

The video fills the whole screen (object-fit: cover), cropping to the screen's shape. The title sits at the top and the actions at the bottom (space-between, padded clamp(1.5rem, 6vh, 4rem) above and clamp(1.5rem, 7vh, 4.5rem) below), each over a night scrim: a vertical gradient from 82% night at the top, clear from 45% to 62%, back to 85% night at the bottom.

The actions use a fluid gap of clamp(1rem, 0.6rem + 0.5vw, 1.5rem). At 760px and below they stack full-width up to 24rem.

### Named Rules
**The One Screen Rule.** The page is one full-screen hero at every size. Nothing sits above or below it.

## Elevation & Depth

Depth comes from light, not lifted surfaces. The hero is a flat night ground shaded by one low blush radial glow (55% by 45% at 50% 62%, 10%). Only the primary button carries a shadow, because it sits over warm lamplight on water.

### Shadow Vocabulary
- **Lamplight underglow** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.4), 0 16px 28px -18px rgb(252 182 160 / 0.45)`): the primary button at rest; hover strengthens to 0.5 and `0 20px 34px -18px` at 0.6.

### Named Rules
**The Warm Shadow Rule.** A shadow under a lettered control is warm blush light, offset low and blurred. No black shadows ship.

## Shapes

Nearly square. Buttons turn a 2px corner; the primary button's printed inner rule sits 4px inside at 1px radius. The video runs edge to edge with no mask or frame; the night scrim does the work. Lines are 1px gold hairlines. The stroked arrow (1.1 stroke, round caps and joins) is the only drawn mark.

## Components

### Buttons
Printed and lamp-lit: a cream card with an engraved rule, sitting over warm light.
- **Shape:** gently squared (2px), 1px border. Padding, height, gap and arrow are all in em (min height 4.15em, padding 1.17em 2.34em 1.05em, gap 1.05em), so the whole button grows with its fluid label on large displays.
- **Primary:** gold-100 fill, ink text, label type, an inset 1px ink rule at 22% drawn 4px inside the edge, the lamplight underglow. An inline SVG arrow (1.85em by 0.92em, 1.1 stroke) follows the label.
- **Hover / Focus:** primary brightens to gold-50 and lifts 2px with a stronger glow; the arrow travels 4px right (0.45s); active presses down 1px. Focus is a 2px gold-300 outline at 4px offset. Transitions use ease-out cubic-bezier(0.16, 1, 0.3, 1), 0.3s for colour and 0.5s for lift and glow.
- **Quiet:** night-950 at 80% with a rule-strong border and gold-50 text; hover tints the ground with old gold at 12% and moves the border to gold-300.

### Feathered Key-Visual Hero (signature)
The whole page. The key video (1080x1080, about 15s, served from the Spa Ceylon Shopify CDN; autoplay, muted, looping, playsinline, aria-hidden) fills the screen behind a night scrim. The h1 is live text at the top with a soft dark text shadow; Explore the range (primary) and Read the Legend (quiet) sit at the bottom.
- **Unveil:** on load the video brightens from 0.4 and saturates from 0.7 while its scale settles from 1.03 (2.4s): the lamps come up.
- **Rise:** the actions rise 10px from 30% opacity after 0.8s (1.4s).
- **Reduced motion:** both animations run only under prefers-reduced-motion: no-preference. Under reduce, transitions and animations collapse to 0.01ms with one iteration.

## Do's and Don'ts

### Do:
- **Do** take every hue from the key visual; it is the authority for colour and type in this world.
- **Do** set labels in the Trajan stack at weight 400 with 0.2em tracking, uppercase.
- **Do** draw borders and rules as 1px gold hairlines.
- **Do** keep lotus and blush as light: glows, underglow, selection.
- **Do** keep one primary (cream-gold) action, paired with at most one quiet button.
- **Do** keep text on the scrimmed top and bottom bands, leaving the middle of the video clear.
- **Do** gate entrance motion behind prefers-reduced-motion.

### Don't:
- **Don't** add sections below the hero; the page is one full-screen hero (user direction, 22 October 2026).
- **Don't** add a header, footer or top bar (user direction, 22 October 2026).
- **Don't** list products or prices on the page (user direction).
- **Don't** place text in the middle of the video, or remove the scrim behind the title and actions.
- **Don't** fill a section, card or button with lotus coral or blush.
- **Don't** introduce a light ground.
- **Don't** bold Trajan or set the display stack without its licensed faces first.
- **Don't** frame, round or shrink the video; it fills the screen (user direction).
- **Don't** add ornament outside the world's own set: gold hairlines and the stroked arrow.
