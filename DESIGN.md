---
name: Moonlight Lilies
description: Spa Ceylon Festive 2026. The key visual's palace night, lit by lotus lamps and lettered in cream-gold Trajan.
colors:
  night-950: "#121118"
  night-900: "#1b1a23"
  oxblood-900: "#2a1012"
  oxblood-600: "#632825"
  lotus-600: "#e0646b"
  lotus-500: "#f97983"
  lotus-300: "#fcb6a0"
  gold-50: "#fef3ca"
  gold-100: "#f6e3aa"
  gold-300: "#e3c47a"
  gold-500: "#d3af37"
  gold-700: "#9e7128"
  ink: "#2a1012"
  text: "#ecdfc9"
  text-soft: "#c9b79c"
  rule: "rgb(211 175 55 / 0.26)"
  rule-strong: "rgb(211 175 55 / 0.55)"
typography:
  display:
    fontFamily: "\"Trajan Pro 3\", \"Trajan Pro\", Trajan, Cinzel, \"Times New Roman\", serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.06em"
  headline:
    fontFamily: "\"Trajan Pro 3\", \"Trajan Pro\", Trajan, Cinzel, \"Times New Roman\", serif"
    fontSize: "clamp(2rem, 4.2vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.05em"
  title:
    fontFamily: "\"Trajan Pro 3\", \"Trajan Pro\", Trajan, Cinzel, \"Times New Roman\", serif"
    fontSize: "clamp(1.15rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.1em"
  dek:
    fontFamily: "Goudos, \"Goudy Old Style\", \"Sorts Mill Goudy\", Georgia, serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Goudos, \"Goudy Old Style\", \"Sorts Mill Goudy\", Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  note:
    fontFamily: "Goudos, \"Goudy Old Style\", \"Sorts Mill Goudy\", Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "\"Trajan Pro 3\", \"Trajan Pro\", Trajan, Cinzel, \"Times New Roman\", serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.2em"
rounded:
  hairline: "1px"
  button: "2px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  measure: "72rem"
  section-y: "clamp(5rem, 11vw, 9rem)"
  beat: "clamp(2.5rem, 5vw, 3.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.gold-100}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0.95rem 1.9rem 0.85rem"
    height: "3.375rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-50}"
    textColor: "{colors.ink}"
  button-primary-large:
    backgroundColor: "{colors.gold-100}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0.95rem 2.6rem 0.85rem"
    height: "3.875rem"
  button-quiet:
    backgroundColor: "rgb(18 17 24 / 0.8)"
    textColor: "{colors.gold-50}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "0.95rem 1.9rem 0.85rem"
    height: "3.375rem"
  button-quiet-hover:
    backgroundColor: "rgb(211 175 55 / 0.12)"
    textColor: "{colors.gold-50}"
  textlink:
    textColor: "{colors.gold-100}"
    typography: "{typography.body}"
  textlink-hover:
    textColor: "{colors.gold-50}"
  lamp-marker:
    size: "3.5rem"
  book-cover:
    width: "minmax(15rem, 24rem)"
---

# Design System: Moonlight Lilies

## Overview

**Creative North Star: "The Night of the Legend"**

The page is the palace night of the supplied key visual, extended downward: a dark slate sky that deepens toward the lake, then gives way to the oxblood of the theatre curtains. Lettering is cream-gold Trajan capitals, the same voice as the title on the banner; the narrative speaks in Goudy, and the italic is its storytelling voice. Colour beyond night, oxblood and gold arrives only as light: the coral and blush of lotus lamps, their pools on the water, the warm underglow beneath a button.

The world is brief-pinned to the client's key visual ("use the same fonts same colors"), so the banner is the source of truth for hue, type and atmosphere. Density is low and ceremonial: wide section padding, a single centred column at the open and close, a two-column book-and-path spread in the middle. Ornament is restricted to the world's own materials: gold hairlines, the lotus lamp, the gold lily line art.

**Key Characteristics:**
- Night-slate and oxblood grounds; no light sections.
- Cream-gold Trajan capitals for every heading and label; Goudy for reading, italic for the narrator.
- Lotus coral and blush appear only as light, never as fills of any size.
- Gold hairlines (26% and 55% gold) draw every rule, border and path.
- Motion is lamplight: things brighten, kindle and flicker; nothing slides in from the side.

## Colors

A night palette lit from within: two dark grounds, a five-step gold for lettering and rules, and three lotus tones held back for light.

### Primary
- **Title Cream-Gold** (gold-50): the colour of every heading and of the lamp flame; the hover state of the primary button. Matches the banner's title lettering.
- **Lantern Parchment** (gold-100): the primary button fill and the textlink colour; one step warmer than the headings so the button reads as a printed object.

### Secondary
- **Old Gold** (gold-500): the source of every hairline. Rules are this hue at 26% (rule) or 55% (rule-strong); the lamp's water lines use it at 55% opacity.
- **Burnished Gold** (gold-300): focus outlines, unlit-lamp headings, the lamp petal stroke, and the quiet button's hover border.
- **Antique Brass** (gold-700): the scrollbar thumb only.

### Tertiary (light only)
- **Lotus Coral** (lotus-500): the lit lamp's front petal and the text selection.
- **Deep Lotus** (lotus-600): the lamp's side petals, so the flower has form.
- **Lantern Blush** (lotus-300): the lamp's radial pool, the hero's low radial glow (10%), and the primary button's underglow (45%, 60% on hover).

### Neutral
- **Palace Night** (night-900): the page ground and the hero; the theme colour.
- **Lake Night** (night-950): where the Legend section deepens (gradient over 30rem); the quiet button's ground at 80%.
- **Curtain Oxblood** (oxblood-900): the closing Collection ground. Also serves as ink, the text on cream-gold.
- **Velvet Oxblood** (oxblood-600): the raised light at the top of the Collection band (radial, 55%).
- **Moon Parchment** (text): body copy.
- **Faded Parchment** (text-soft): italic deks, notes and captions.

### Named Rules
**The Lamplight Rule.** Lotus coral, deep lotus and blush are light sources. They fill a petal, a glow, a pool or a shadow; they never fill a section, a card or a button.

**The Two Grounds Rule.** Surfaces are night (900 or 950) or oxblood (900 with a 600 glow). A third ground needs a reason in the key visual.

## Typography

**Display Font:** Trajan Pro 3 / Trajan Pro / Trajan (licensed, used when installed), with self-hosted Cinzel as the stand-in
**Body Font:** Goudos / Goudy Old Style (licensed, used when installed), with self-hosted Sorts Mill Goudy (roman and italic) as the stand-in

**Character:** Roman inscriptional capitals over an old-style book face. Trajan carries the brand's authority at weight 400 with open tracking; Goudy's italic is the storyteller, used for every dek, note, caption and the textlink.

### Hierarchy
- **Display** (400, clamp(2.25rem, 5vw, 3.75rem), 1.15, 0.06em): the closing section title.
- **Headline** (400, clamp(2rem, 4.2vw, 3.4rem), 1.1, 0.05em): the Legend title.
- **Title** (400, clamp(1.15rem, 1.6vw, 1.375rem), 0.1em): chapter titles beside each lamp.
- **Dek** (italic, clamp(1.25rem, 1.9vw, 1.5rem), 1.45, 36 to 38ch): the line under a section title, in text-soft.
- **Body** (400, 1.1875rem, 1.6; 1.125rem at 760px and below; 60ch): chapter text.
- **Note / Caption** (italic, 1.125rem and 1.0625rem, text-soft, 48ch): the hero note and the book caption.
- **Label** (400, 0.8125rem, 0.2em, uppercase): button text; 0.875rem on the large button, 0.16em tracking on phones.

### Named Rules
**The Licensed First Rule.** Every stack names the brand's licensed face first and its free stand-in second. Never ship a stack that skips to a system serif for display.

**The Italic Narrator Rule.** Goudy italic is the voice that speaks to the visitor (deks, notes, captions, the textlink). Roman Goudy is the story itself.

**The No Bold Rule.** Headings stay at weight 400 with tracking for emphasis; font-synthesis-weight is off.

## Layout

Centred, ceremonial and wide. Gutters are fluid (gutter token), content width caps at the measure token (72rem). The hero is full-bleed: the 3:1 key visual spans the viewport with its edges feathered into the night, and the actions overlap its lower fade by up to 4.75rem. The Legend is a two-column spread (book column minmax(15rem, 24rem), story column fills), with the book sticky at 3rem; at 960px it collapses to one column with the book centred at min(17rem, 64vw). The close is a single centred column.

Vertical rhythm is generous: sections pad clamp(4rem, 8vw, 7rem) to clamp(6rem, 12vw, 10rem); chapters are separated by the beat token. At 760px and below the hero crops to a 1.3:1 window on the lettering (object-position 55% 50%), and buttons stack full-width up to 24rem.

## Elevation & Depth

Depth comes from light, not lifted surfaces. Sections are flat grounds shaded by radial glows (blush in the hero, velvet oxblood at the top of the Collection) and a vertical night gradient in the Legend. Only two objects carry shadows: the primary button, which sits over warm lamplight on water, and the book cover, which is a physical object resting at an angle.

### Shadow Vocabulary
- **Lamplight underglow** (`box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.4), 0 16px 28px -18px rgb(252 182 160 / 0.45)`): the primary button at rest; hover strengthens to 0.5 and `0 20px 34px -18px` at 0.6.
- **Book rest** (`box-shadow: 0 2px 0 rgb(211 175 55 / 0.25), 0 36px 60px -24px rgb(0 0 0 / 0.85), 0 12px 24px -12px rgb(0 0 0 / 0.6)`): the cover, with a gold bottom edge and a deep dark fall.

### Named Rules
**The Warm Shadow Rule.** A shadow under a lettered control is warm blush light, offset low and blurred; black shadows belong only to physical objects such as the book.

## Shapes

Nearly square. Buttons turn a 2px corner; the primary button's printed inner rule sits 4px inside at 1px radius. The key visual is clipped by gradient masks, never by a frame or radius: horizontally it feathers over 7% each side, vertically it dissolves from 66% to 99%. Lines are 1px gold hairlines throughout: the Collection's top border, the quiet button's border, and the vertical path of light between lamps (rule-strong fading to rule). The gold lily line art is the only standalone ornament.

## Components

### Buttons
Printed and lamp-lit: a cream card with an engraved rule, sitting over warm light.
- **Shape:** gently squared (2px), 1px border, min height 3.375rem.
- **Primary:** gold-100 fill, ink text, label type, an inset 1px oxblood rule at 22% drawn 4px inside the edge, the lamplight underglow. An inline SVG arrow (1.5rem by 0.75rem, 1.1 stroke) follows the label.
- **Hover / Focus:** primary brightens to gold-50 and lifts 2px with a stronger glow; the arrow travels 4px right; active presses down 1px. Focus is a 2px gold-300 outline at 4px offset. Transitions use ease-out cubic-bezier(0.16, 1, 0.3, 1), 0.3s for colour and 0.5s for lift.
- **Quiet:** night-950 at 80% with a rule-strong border and gold-50 text; hover tints the ground with gold at 12% and the border to gold-300.
- **Large:** 3.875rem tall, 2.6rem inline padding, 0.875rem label; used for the single closing action.

### Textlink
An italic Goudy link in gold-100, underlined at 1px with gold at 45%, offset 0.28em, followed by the arrow. Hover moves to gold-50, the underline to gold-300, the arrow 3px right. Used as the lesser alternative beside a quiet button.

### Lotus-Lamp Marker (signature)
A 3.5rem inline SVG: a cream-gold flame, a lotus of one coral front petal and two deep-lotus side petals stroked in gold-300, two gold water lines, and a blush radial pool behind. Each lamp heads a chapter on the Legend's path, joined to the next by a 1px gold hairline.
- **Unlit (JS on, before view):** petals transparent with a gold outline at 55%, no flame (scaled to 0.3, opacity 0), no pool, chapter title in gold-300.
- **Lit:** petals fill (1.1s), pool fades up (1.6s), flame rises (1.2s after 0.3s), title brightens to gold-50 (1s), then the flame flickers on a 3.2s loop.
- **Kindling:** an IntersectionObserver (bottom root margin -30%) lights each chapter as it enters view, and lights any chapter already scrolled past. Without JS or IntersectionObserver every lamp is lit.

### Book Cover
The Legend cover as an object: rotated -2.5deg, a gold 2px bottom edge, a deep black fall, and a spine shading gradient over its left 14% so it reads as a book, not a card. Hover straightens to -0.5deg and lifts 6px (0.8s). Captioned below in italic text-soft.

### Feathered Key-Visual Hero
The banner is the page's h1 (its alt text carries the baked-in words), full width at 3:1, masked to dissolve into the night on all sides. On load it unveils: brightness rises from 0.4 and saturation from 0.7 while the scale settles from 1.03 (2.4s); the actions and note rise 10px from 30% opacity after 0.8s (1.4s). Phones crop to a 1.3:1 window centred on the lettering with srcset sizes at 231vw.

### Motion and Reduced Motion
All animations run only under prefers-reduced-motion: no-preference. Under reduce, transitions and animations collapse to 0.01ms with one iteration and smooth scrolling is off, so lamps appear lit without kindling or flicker.

## Do's and Don'ts

### Do:
- **Do** take every hue from the key visual; it is the authority for colour and type in this world.
- **Do** set headings and labels in the Trajan stack at weight 400 with tracking (0.05em to 0.2em), and reading text in the Goudy stack.
- **Do** use Goudy italic in text-soft for deks, notes and captions.
- **Do** draw rules, borders and paths as 1px gold hairlines (rule or rule-strong).
- **Do** keep lotus and blush as light: petals, pools, glows, underglow.
- **Do** keep one primary (cream-gold) action per view, paired with at most a quiet button or a textlink.
- **Do** gate entrance motion behind prefers-reduced-motion and make every lamp lit without JS.

### Don't:
- **Don't** add a header, footer or top bar (user direction, 22 October 2026).
- **Don't** list products or prices on the page; the page ends at The Collection with one View the collection button (user direction).
- **Don't** fill a section, card or button with lotus coral or blush.
- **Don't** introduce a light ground or a product grid under the hero.
- **Don't** bold Trajan or set the display stack without its licensed faces first.
- **Don't** frame or round the key visual; it dissolves into the night through masks.
- **Don't** add ornament outside the world's own set: gold hairlines, the lotus lamp and the gold lily line art.
