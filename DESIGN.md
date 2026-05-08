# Design System — Svetlana Zhevlakova Portfolio

## 1. Visual Theme & Atmosphere

This portfolio embodies **editorial minimalism** — the design itself recedes so that the work takes center stage. Where Apple uses cinematic black-and-white drama, this system is quieter: a single white canvas, a single typeface, a single grayscale family. The page never competes with the case studies it presents.

Overused Grotesk is the typographic anchor. It is a contemporary grotesque with warmth — less mechanical than Helvetica, less quirky than Söhne. Its key characteristic here is that **headlines run at weight 400 (Regular)**, not bold, giving the portfolio an editorial, magazine-like restraint. Titles use 600 (SemiBold) to establish hierarchy without shouting. Weights above 600 almost never appear.

The color story is deliberately narrow: a ten-step grayscale from near-white (`#fafafa`) to near-black (`#212121`) handles everything. There is no chromatic accent in the visible UI — the single exception is the focus ring blue (`#2563eb`), which appears only for keyboard navigation accessibility and must never be used decoratively.

The one expressive element is **glassmorphism**, used exclusively on floating UI: the sticky navigation header and the Table of Contents. A semi-transparent white backdrop with `backdrop-blur-md` creates a sense of layering without adding visual weight to the page itself.

**Key Characteristics:**
- Overused Grotesk — single typeface, weights 300–800
- White page canvas (`#ffffff`) — sections never change background color
- Grayscale-only palette — no decorative color accents
- Headlines at `font-normal` (400) — weight restraint creates editorial calm
- Flat cards with a single border — no shadows, no elevation games
- Glassmorphism on floating UI only — `backdrop-blur-md` + semi-transparent white
- Pill-shaped TOC items (9999px radius) — the only full-round element
- Single breakpoint: 1280px — clean mobile-first split


## 2. Color Palette & Roles

### Neutral Scale (Primitives)

| Token | Hex | Primary Use |
|-------|-----|-------------|
| `primary50` | `#fafafa` | Tag backgrounds, button text on dark |
| `primary100` | `#f5f5f5` | KPI card backgrounds, card hover state |
| `primary200` | `#eeeeee` | Tag borders, media section background |
| `primary300` | `#e0e0e0` | Card borders, media section borders |
| `primary400` | `#bdbdbd` | Inactive/disabled states |
| `primary500` | `#9e9e9e` | Placeholder text |
| `primary600` | `#757575` | Supporting text, captions, secondary labels |
| `primary700` | `#616161` | Mid-weight text |
| `primary800` | `#424242` | Tag text, button hover state, link hover |
| `primary900` | `#212121` | Primary text, button default background |

### Base Colors

| Token | Hex | Role |
|-------|-----|------|
| `light` | `#ffffff` | Page background, card backgrounds |
| `light-alpha10` | `rgb(255 255 255 / 10%)` | Content item (TOC) default background |
| `dark` | `#212121` | Alias for primary900 |

### Status & Functional

| Token | Hex | Role |
|-------|-----|------|
| `success` | `#079455` | Success states |
| `warning` | `#ffb200` | Warning states |
| `error` | `#d92d20` | Error states |
| `focus-ring-default` | `#2563eb` | Keyboard focus rings — **not decorative** |

### Semantic Token Map (Light Theme)

**Page & Sections**
- Page background: `primary50` / `#ffffff`
- Section primary text: `primary900`
- Section secondary/caption text: `primary600`

**Cards (CaseCard)**
- Default bg: `#ffffff`
- Default border: `primary300` (`#e0e0e0`)
- Hover bg: `primary100` (`#f5f5f5`)
- Hover border: `primary300` (unchanged)
- Primary text: `primary900`
- Supporting text: `primary600`

**Tags**
- Background: `primary50` (`#fafafa`)
- Border: `primary200` (`#eeeeee`)
- Text: `primary800` (`#424242`)

**Buttons — Primary**
- Default bg: `primary900` (`#212121`)
- Hover bg: `primary800` (`#424242`)
- Text/icon: `primary50` (`#fafafa`)

**Buttons — Link**
- Default text/icon: `primary900`
- Hover text/icon: `primary800`
- Hover underline color: `primary800`

**Content Items / TOC (Glass)**
- Default bg: `rgb(255 255 255 / 10%)`
- Default text: `primary600`
- Hover/active text: `primary900`
- Hover underline: `primary900`
- Active dot icon: `primary900`
- Contrast bg (over images): `rgba(0, 0, 0, 0.35)`
- Contrast text (all states): `primary50`

**KPI Cards**
- Background: `primary100` (`#f5f5f5`)
- Border: `primary100`
- Primary text: `primary900`
- Supporting text: `primary600`

**Media Sections**
- Background: `primary200` (`#eeeeee`)
- Border: `primary300` (`#e0e0e0`)


## 3. Typography Rules

### Font Family

**Overused Grotesk** — locally hosted, loaded as WOFF2.

```
font-family: "Overused Grotesk", ui-sans-serif, system-ui, -apple-system,
             Segoe UI, Roboto, Helvetica, Arial, sans-serif;
```

Available weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black). Italic variants available for all weights.

### Type Scale

| Role | Mobile Size | Mobile Line-Height | Desktop Size | Desktop Line-Height | Weight |
|------|------------|-------------------|--------------|---------------------|--------|
| H1 Headline | 32px | 40px | 48px | 56px | 400 (Regular) |
| H2 Headline | 24px | 36px | 32px | 40px | 400 (Regular) |
| H3 Headline | 18px | 28px | 20px | 32px | 400 (Regular) |
| Callout | 20px | 32px | 24px | 36px | 400 (Regular) |
| Title | 18px | 28px | 20px | 32px | 600 (SemiBold) |
| Paragraph Base | 16px | 24px | 18px | 28px | 400 (Regular) |
| Paragraph Small | 14px | 20px | 16px | 24px | 400 (Regular) |
| Caption | 12px | 16px | 14px | 20px | 400 (Regular) |

### Principles

- **Weight restraint**: Headlines are `font-normal` (400). This is intentional — it signals editorial confidence rather than visual force. `font-semibold` (600) is reserved for Titles and KPI labels only. `font-bold` (700) and above almost never appear in content.
- **No negative letter-spacing**: Unlike many contemporary systems, this design uses default letter-spacing at all sizes. Overused Grotesk's natural spacing is part of its character.
- **Functional line-heights**: Line-heights are spacious enough to read comfortably, never compressed. Headlines range from 40px/32px (mobile) to 56px (desktop). Body text always breathes.
- **Single typeface**: Never mix in system fonts or other typefaces. Overused Grotesk handles the full range from captions to display.


## 4. Component Stylings

### Primary Button

```
Background:  primary900 (#212121)
Hover bg:    primary800 (#424242)
Text/icon:   primary50  (#fafafa)
Padding:     8px (vertical) × 16px (horizontal)
Radius:      12px (radius-xs)
Border:      none
Font:        Overused Grotesk, Paragraph Base size, weight 400
Icon:        optional leftIcon / rightIcon, 16px
Focus:       2px solid #2563eb, 2px offset
```

Use for primary actions: "Contact me", "View resume", form submissions.

### Link Button

```
Text/icon:   primary900 default → primary800 on hover
Background:  transparent
Underline:   animated, expands from center (scaleX 0→1), 200ms ease
Gap:         4px between text and icon
Font:        Overused Grotesk, Paragraph Base size, weight 400
Focus:       2px solid #2563eb, 2px offset
```

Use for navigation-style actions: "View case study", "See project", inline CTAs.

### Tag / Badge

```
Background:  primary50  (#fafafa)
Border:      1px solid primary200 (#eeeeee)
Text:        primary800 (#424242)
Padding:     4px (vertical) × 12px (horizontal)
Radius:      12px (radius-xs)
Font:        Overused Grotesk, Paragraph Small size, weight 400
Display:     inline-flex, centered
```

Use for case study labels: "B2B2C", "Marketplace", "R&D", "AI", etc. Max 2 per card.

### Case Card (CaseCard)

```
Background:  #ffffff (default) → primary100 (#f5f5f5) on hover
Border:      1px solid primary300 (#e0e0e0) — unchanged on hover
Radius:      24px (radius-xl)
Padding:     16px (mobile) / 20px (desktop)
Max-width:   748px
Height:      200px
Shadow:      none
Transition:  background color change, no scale or shadow
```

Content layout (top to bottom): Tags (max 2) → H2 Title → Supporting focus text (Paragraph Base, primary600).

### Navigation Header (Glass)

```
Position:    fixed top-0, full width, z-50
Background:  rgba(255, 255, 255, 0.78)
Blur:        backdrop-blur-md
Padding:     5px vertical
Nav links:   About, Resume (external), LinkedIn (external)
CTA:         Primary Button "Contact me"
Logo:        LogoButton — 52px circle, primary900 bg, primary50 text, "SZ" initials, 28px font
Mobile:      Hamburger menu → full-screen overlay (same glass style, backdrop-blur-xl)
```

The glass header is the only element with blur. It floats above page content without obscuring it.

### Glass Content Item (TOC Navigation)

```
Radius:      9999px (radius-full / pill)
Background:  rgb(255 255 255 / 10%) default | rgba(0, 0, 0, 0.35) contrast
Blur:        backdrop-blur-md
Padding:     16px (vertical, mobile) / 12px (vertical, desktop) × 16px (horizontal)
Gap to mark: 4px

States:
  Default:   text primary600
  Hover:     text primary900 + animated center-outward underline (200ms)
  Active:    text primary900 + dot indicator (right side)

Contrast mode (over images):
  Default/hover/active text: primary50 (#fafafa)
  Background:                rgba(0, 0, 0, 0.35)
  Transition between tones:  500ms ease-out

Focus:       2px solid #2563eb, 2px offset
```

### KPI Card

```
Background:  primary100 (#f5f5f5)
Border:      1px solid primary100 (invisible — blends with bg)
Radius:      24px (radius-xl)
Padding:     16px (mobile) / 20px (desktop)
Primary text: primary900, Title size, weight 600
Supporting:  primary600, Paragraph Small size
Icon:        24px, optional
Shadow:      none
```

### Logo Button

```
Size:        52px × 52px
Radius:      9999px (full circle)
Background:  primary900 default → primary800 hover
Text:        primary50, 28px, Overused Grotesk, weight 400
Content:     "SZ" initials
Focus:       2px solid #2563eb, 2px offset
```

### Icon Button

```
Height:      44px
Icon:        24px
Padding:     8px (vertical) × 16px (horizontal)
Radius:      12px (radius-xs)
Variants:    default (primary900 icon) / variant2 (primary600 icon)
```

Used for hamburger menu toggle and close.

### Footer

```
Text:        Caption size (12px mobile / 14px desktop), primary600
Layout:      Flex row — name + year (left), Privacy Policy link (right)
Link:        underline, 2px offset
Padding:     5px vertical, grid margin horizontal
```


## 5. Layout Principles

### The Single Breakpoint

The entire layout hinges on one boundary: **1280px**. Everything below is mobile; everything at or above is desktop. There are no intermediate tablet breakpoints.

```css
/* Mobile-first base, then desktop override */
@media (min-width: 1280px) { ... }
```

### Grid & Container

| Property | Mobile | Desktop |
|----------|--------|---------|
| Grid columns | 4 | 12 |
| Grid margin (horizontal) | 16px | 44px |
| Grid gutter | 12px | 16px |
| Grid vertical padding | 24px | 48px |
| Section max-width | 600px | 800px |
| Section-to-section gap | 48px | 48px |
| Section-to-subsection gap | 20px | 20px |
| Section-to-title gap | 8px | 8px |
| Card horizontal padding | 16px | 20px |
| Card vertical padding | 16px | 20px |
| Content item v-padding | 16px | 12px |
| Content item h-padding | 16px | 16px |

### Spacing Scale

4px base unit. All spacing is drawn from this set of CSS custom properties:

`0` / `4px` / `8px` / `12px` / `16px` / `20px` / `24px` / `28px` / `32px` / `36px` / `40px` / `44px` / `48px`

### Border Radius Scale

| Name | Value | Use |
|------|-------|-----|
| `radius-none` | `0px` | Sharp corners |
| `radius-xs` | `12px` | Buttons, tags, icon buttons, media image corners |
| `radius-xl` | `24px` | Cards (CaseCard, KPI), media section containers (mobile) |
| `radius-full` | `9999px` | Content item pills, logo button circle |

### Page Layout Pattern

All pages use the same structure: fixed glass nav → white page body (sections flex column) → footer. Sections are separated by 48px gaps. Content is center-aligned within a max-width container (600px/800px). There are no alternating background colors between sections — white is the only canvas.

### Case Study Layout (Desktop)

Three-column grid at the section level:
- Left: Table of Contents (fixed sidebar, glass items)
- Center: Main content (800px max-width)
- Right: (used for image grids and media)

Hero image grid on case pages: one main large image + two smaller side images arranged in a CSS grid.


## 6. Depth & Elevation

This system is almost entirely flat. Depth is expressed through **color contrast** (border vs. background) and **blur**, not shadows.

| Level | Treatment | Where Used |
|-------|-----------|------------|
| Flat (Level 0) | No shadow, solid white bg | All cards, page, footer |
| Card border | 1px solid `#e0e0e0` | CaseCard, tags — creates edge definition without lift |
| Glass (Level 1) | `backdrop-blur-md` + `rgba(255,255,255,0.78)` | Sticky nav header, mobile menu |
| Contrast glass | `backdrop-blur-md` + `rgba(0,0,0,0.35)` | TOC items when over image/media zones |

**There are no box shadows anywhere in the system.** Elevation is never used to signal hierarchy — only blur signals "this UI floats above content."


## 7. Animations & Interactions

### Center-Outward Underline (Link Button & Content Items)

```css
/* Pseudo-element underline, initially collapsed */
transform: scaleX(0);
transform-origin: center;

/* On hover */
transform: scaleX(1);
transition: transform 200ms ease;
```

This is the signature interaction of the system. It appears on Link Buttons and Content Item (TOC) hover states. The animation starts from the center and expands toward both ends, giving a reveal quality to the hover.

### Glass Tone Transition (TOC Items)

When the Table of Contents detects it is scrolling over a media/image section, it switches from default tone (light glass) to contrast tone (dark glass). The switch is:

```css
transition: color 500ms ease-out,
            background-color 500ms ease-out,
            border-color 500ms ease-out;
```

500ms is intentionally slow — it should feel like a gradual adaptation, not a flash.

### Card Hover

Background color change from `#ffffff` to `#f5f5f5`. No transition duration specified — it is immediate, which feels crisp rather than animated.

### Focus Ring

Every interactive element uses:
```css
outline: 2px solid #2563eb;
outline-offset: 2px;
```

Applied via `focus-visible` (not `focus`) so it only appears for keyboard users. This is a non-negotiable accessibility requirement.

### Video Autoplay (Case Pages)

`ScrollAutoplayVideo` uses `IntersectionObserver` at 50% threshold. Videos are `muted`, `loop`, `playsInline`. Controls are visible. This is progressive enhancement — no animation system involvement needed.


## 8. Do's and Don'ts

### Do
- Use Overused Grotesk at `font-normal` (400) for all headlines — the editorial restraint is intentional
- Keep the page background white at all times — sections never change canvas color
- Use `primary900` for the primary button background — pure near-black, not pure black
- Use `radius-xs` (12px) for buttons and tags, `radius-xl` (24px) for cards, `radius-full` (9999px) for pills
- Apply glassmorphism (`backdrop-blur-md` + semi-transparent white) exclusively to floating navigation elements
- Animate underlines from center outward using `scaleX` at 200ms for all link-style interactions
- Include a `focus-visible` ring (`2px solid #2563eb`, `2px offset`) on every interactive element
- Use 48px for all section-to-section gaps — this is the defining breathing room of the layout
- Keep cards flat: border only, no shadow, background change on hover is the only depth cue

### Don't
- Don't introduce colored backgrounds on any page section — white is the only canvas
- Don't use weight 700 (Bold) or above on any content — 600 is the ceiling, and even that is rare
- Don't add box shadows to cards, containers, or buttons — the system has none
- Don't add gradients or textures to any surface
- Don't use `#2563eb` decoratively — it is reserved exclusively for keyboard focus rings
- Don't create new accent colors — the entire color budget is the grayscale scale
- Don't add a second typeface — Overused Grotesk covers all use cases
- Don't use border radius larger than `24px` on rectangular elements (`9999px` is only for circle/pill shapes)
- Don't add hover transitions longer than 500ms — the 500ms glass tone transition is already the maximum


## 9. Responsive Behavior

### The 1280px Split

Everything below 1280px is the mobile layout. Everything at 1280px and above is desktop. There are no intermediate steps.

### What Changes at 1280px

| Property | Mobile (< 1280px) | Desktop (≥ 1280px) |
|----------|-------------------|---------------------|
| H1 size | 32px / 40px lh | 48px / 56px lh |
| H2 size | 24px / 36px lh | 32px / 40px lh |
| H3 size | 18px / 28px lh | 20px / 32px lh |
| Callout | 20px / 32px lh | 24px / 36px lh |
| Para base | 16px / 24px lh | 18px / 28px lh |
| Para small | 14px / 20px lh | 16px / 24px lh |
| Caption | 12px / 16px lh | 14px / 20px lh |
| Grid margin | 16px | 44px |
| Grid gutter | 12px | 16px |
| Grid v-padding | 24px | 48px |
| Grid columns | 4 | 12 |
| Section max-width | 600px | 800px |
| Card padding | 16px | 20px |
| Media section radius | 24px | 12px |
| Navigation | Hamburger → full-screen menu | Full horizontal nav |
| TOC | Hidden | Fixed left sidebar |
| Case hero grid | Single column stack | Multi-column grid |

### Touch Targets

- Buttons: 8px × 16px padding → minimum ~40px touch height
- Icon buttons: 44px height (explicit, meets WCAG minimum)
- TOC items: 44px+ effective touch area (generous pill padding)
- Navigation links: 44px+ effective touch area


## 10. Token Quick Reference

For fast lookups when writing code:

```
Page background:      #ffffff
Primary text:         #212121  (primary900)
Secondary text:       #757575  (primary600)
Card border:          #e0e0e0  (primary300)
Card hover bg:        #f5f5f5  (primary100)
Button bg:            #212121  (primary900)
Button hover bg:      #424242  (primary800)
Button text:          #fafafa  (primary50)
Tag bg:               #fafafa  (primary50)
Tag border:           #eeeeee  (primary200)
Tag text:             #424242  (primary800)
KPI bg:               #f5f5f5  (primary100)
Nav glass bg:         rgba(255, 255, 255, 0.78)
TOC glass bg:         rgb(255 255 255 / 10%)
TOC contrast bg:      rgba(0, 0, 0, 0.35)
Focus ring:           #2563eb
Success:              #079455
Warning:              #ffb200
Error:                #d92d20

Radius xs:            12px   (buttons, tags)
Radius xl:            24px   (cards, KPI)
Radius full:          9999px (pills, logo circle)

Spacing unit:         4px base
Button padding:       8px × 16px
Card padding:         16px (mobile) / 20px (desktop)
Section gap:          48px
Section max-width:    600px (mobile) / 800px (desktop)
Grid margin:          16px (mobile) / 44px (desktop)
Breakpoint:           1280px
```
