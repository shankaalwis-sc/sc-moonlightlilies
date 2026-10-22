---
name: Moonlight Lilies
description: Spa Ceylon Festive 2026. The key visual's palace night on one screen, lit by lantern blush and lettered in cream-gold Trajan.
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
  text-soft: "#c9b79c"
  rule-strong: "rgb(211 175 55 / 0.55)"
typography:
  note:
    fontFamily: "Goudos, \"Goudy Old Style\", \"Sorts Mill Goudy\", Georgia, serif"
    fontSize: "clamp(1.0625rem, 0.95rem + 0.3vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "\"Trajan Pro 3\", \"Trajan Pro\", Trajan, \"Cinzel\", \"Times New Roman\", serif"
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

The page is the palace night of the supplied key visual, and nothing more: one screen of dark slate sky with the key visual centred in it, its edges dissolving into the night. Lettering is cream-gold Trajan capitals, the same voice as the title on the banner; the visitor is spoken to in Goudy italic, the storytelling voice. Colour beyond night and gold arrives only as light: the low lantern-blush glow behind the actions, the warm underglow beneath the primary button, the coral of a text selection.

The world is brief-pinned to the client's key visual ("use the same fonts same colors"), so the banner is the source of truth for hue, type and atmosphere. Density is minimal and ceremonial: one plate, two actions, one line. Ornament is restricted to the world's own materials: fine gold hairlines and a single stroked arrow.

**Key Characteristics:**
- One night-slate ground filling exactly one screen; no light grounds, no further sections.
- Cream-gold Trajan capitals for every label; Goudy italic for the one line that speaks to the visitor.
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
- **Faded Parchment** (text-soft): the italic note.

### Named Rules
**The Lamplight Rule.** Lotus coral and blush are light sources. They fill a glow, a shadow or a selection; they never fill a section, a card or a button.

**The One Ground Rule.** The only surface is Palace Night, warmed by a low blush glow. Lake Night appears only under the quiet button. A second ground needs a reason in the key visual.

## Typography

**Display Font:** Trajan Pro 3 / Trajan Pro / Trajan (licensed, used when installed), with self-hosted Cinzel as the stand-in
**Body Font:** Goudos / Goudy Old Style (licensed, used when installed), with self-hosted Sorts Mill Goudy italic as the stand-in

**Character:** Roman inscriptional capitals over an old-style book face. Trajan carries the brand's authority at weight 400 with open tracking; Goudy's italic is the storyteller. The page title is the key visual itself: the h1 wraps the picture, and its alt text carries the baked-in words.

### Hierarchy
- **Label** (400, clamp(0.8125rem, 0.7rem + 0.25vw, 1.125rem), 1.2, 0.2em, uppercase): button text. The label size drives the whole button, which is sized in em.
- **Note** (italic, clamp(1.0625rem, 0.95rem + 0.3vw, 1.5rem), 1.6, 48ch, text-soft): the single line under the actions.

### Named Rules
**The Licensed First Rule.** Every stack names the brand's licensed face first and its free stand-in second. Never ship a stack that skips to a system serif for display.

**The Italic Narrator Rule.** Goudy italic is the voice that speaks to the visitor. It is the only Goudy face shipped; roman reading text would need the roman face restored first.

**The No Bold Rule.** Trajan stays at weight 400 with tracking for emphasis; font-synthesis-weight is off.

## Layout

One centred column on one screen. The hero fills exactly the viewport (min-height of the vh token: 100svh, falling back to 100vh), stacks the plate, actions and note as a centred column, and pads clamp(1rem, 4vh, 3rem) top and bottom. Gutters are fluid (gutter token) and apply to the actions and the note.

The plate is sized to the screen so the actions and note always fit. A reserve of clamp(9rem, 26% of the screen height, 14rem) is held back for them. On landscape screens the 3:1 plate is min(112%, 150rem, (screen height − reserve) × 3) wide: a short laptop narrows it, a tall screen lets it overscan the width by up to 12% (trimming only the feathered curtain edges), and it never upscales past the artwork's 2400px. Portrait screens load the 2:1 mobile key visual and show it at 1.6:1, object-position 62% 50%, at min(100%, (screen height − reserve) × 1.6), so the title, the gifts and the queen's face stay in frame.

The actions overlap the plate's lower fade by 5% of its width, clamped between 1.25rem and 5rem, with a fluid gap of clamp(1rem, 0.6rem + 0.5vw, 1.5rem). At 760px and below they stack full-width up to 24rem and overlap by a fixed 1.5rem. The note sits clamp(1.25rem, 2.5vh, 2rem) below them.

### Named Rules
**The One Screen Rule.** The page is one full-screen hero at every size. Nothing sits above or below it.

## Elevation & Depth

Depth comes from light, not lifted surfaces. The hero is a flat night ground shaded by one low blush radial glow (55% by 45% at 50% 62%, 10%). Only the primary button carries a shadow, because it sits over warm lamplight on water.

### Shadow Vocabulary
- **Lamplight underglow** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.4), 0 16px 28px -18px rgb(252 182 160 / 0.45)`): the primary button at rest; hover strengthens to 0.5 and `0 20px 34px -18px` at 0.6.

### Named Rules
**The Warm Shadow Rule.** A shadow under a lettered control is warm blush light, offset low and blurred. No black shadows ship.

## Shapes

Nearly square. Buttons turn a 2px corner; the primary button's printed inner rule sits 4px inside at 1px radius. The key visual is clipped by gradient masks, never by a frame or radius. On landscape it feathers over 7% each side and dissolves vertically from 6% to 66%, fading out by 99%; on portrait the side feather tightens to 4% and the vertical holds from 5% to 72%. Lines are 1px gold hairlines. The stroked arrow (1.1 stroke, round caps and joins) is the only drawn mark.

## Components

### Buttons
Printed and lamp-lit: a cream card with an engraved rule, sitting over warm light.
- **Shape:** gently squared (2px), 1px border. Padding, height, gap and arrow are all in em (min height 4.15em, padding 1.17em 2.34em 1.05em, gap 1.05em), so the whole button grows with its fluid label on large displays.
- **Primary:** gold-100 fill, ink text, label type, an inset 1px ink rule at 22% drawn 4px inside the edge, the lamplight underglow. An inline SVG arrow (1.85em by 0.92em, 1.1 stroke) follows the label.
- **Hover / Focus:** primary brightens to gold-50 and lifts 2px with a stronger glow; the arrow travels 4px right (0.45s); active presses down 1px. Focus is a 2px gold-300 outline at 4px offset. Transitions use ease-out cubic-bezier(0.16, 1, 0.3, 1), 0.3s for colour and 0.5s for lift and glow.
- **Quiet:** night-950 at 80% with a rule-strong border and gold-50 text; hover tints the ground with old gold at 12% and moves the border to gold-300.

### Feathered Key-Visual Hero (signature)
The whole page. The h1 wraps a picture: portrait screens get the 1080x540 mobile key visual, landscape screens a 1200w/2400w srcset of the 3:1 plate; each orientation preloads only its own image. The plate is masked to dissolve into the night on all sides and sized as described in Layout. Below it sit Explore the range (primary) and Read the Legend (quiet), then the italic note.
- **Unveil:** on load the plate brightens from 0.4 and saturates from 0.7 while its scale settles from 1.03 (2.4s): the lamps come up on the palace.
- **Rise:** the actions and the note rise 10px from 30% opacity after 0.8s (1.4s).
- **Reduced motion:** both animations run only under prefers-reduced-motion: no-preference. Under reduce, transitions and animations collapse to 0.01ms with one iteration.

## Do's and Don'ts

### Do:
- **Do** take every hue from the key visual; it is the authority for colour and type in this world.
- **Do** set labels in the Trajan stack at weight 400 with 0.2em tracking, uppercase.
- **Do** use Goudy italic in text-soft for the line that speaks to the visitor.
- **Do** draw borders and rules as 1px gold hairlines.
- **Do** keep lotus and blush as light: glows, underglow, selection.
- **Do** keep one primary (cream-gold) action, paired with at most one quiet button.
- **Do** size the plate to the screen so the actions and note stay on the first screen.
- **Do** gate entrance motion behind prefers-reduced-motion.

### Don't:
- **Don't** add sections below the hero; the page is one full-screen hero (user direction, 22 October 2026).
- **Don't** add a header, footer or top bar (user direction, 22 October 2026).
- **Don't** list products or prices on the page (user direction).
- **Don't** serve phones the desktop plate in portrait; they load the dedicated mobile key visual (user direction).
- **Don't** fill a section, card or button with lotus coral or blush.
- **Don't** introduce a light ground.
- **Don't** bold Trajan or set the display stack without its licensed faces first.
- **Don't** frame or round the key visual; it dissolves into the night through masks.
- **Don't** add ornament outside the world's own set: gold hairlines and the stroked arrow.
