# Bionic Brand Guidelines

Extracted from Webflow export (March 2026). This is the single source of truth for the Bionic visual identity.

---

## Colours

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#FAF9F4` | Page background (warm off-white) |
| **Black** | `#000000` | Primary text, headings, logo |
| **Accent** | `#FF6B00` | Webflow original orange accent |
| **Accent (current site)** | `#E8705A` | Salmon accent used on bionic.global |

### Neutral Scale

| Token | Hex | Usage |
|-------|-----|-------|
| Darkest | `#242121` | Dark sections, footer |
| Darker | `#3B3835` | Secondary dark |
| Dark | `#4C4945` | Dark text variant |
| Neutral | `#6C6661` | Body text, secondary text |
| Light | `#B4B0AC` | Muted text, placeholders |
| Lighter | `#D1CDCA` | Borders, dividers |
| Lightest | `#F3F3F2` | Hover states, subtle backgrounds |

### System Colours

| Token | Hex | Usage |
|-------|-----|-------|
| Success | `#027A48` | Success states |
| Success Light | `#ECFDF3` | Success backgrounds |
| Error | `#B42318` | Error states |
| Error Light | `#FEF3F2` | Error backgrounds |

---

## Typography

### Font Families

| Role | Font | Weights | Source |
|------|------|---------|--------|
| **Body / Editorial** | Gambetta | Regular (400), Medium (500), Semibold (600), Bold (700) | Custom OTF |
| **Headings / UI** | GeneralSans | Semibold (600) | Custom OTF |
| **Logo** | Naoko AA | Bold | SVG wordmark only |

### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| h1 | GeneralSans | 3.5rem (56px) | 600 | 1.2 | -2px |
| h2 | GeneralSans | 3rem (48px) | 600 | 1.2 | -1px |
| h3 | GeneralSans | 2.5rem (40px) | 600 | 1.2 | — |
| h4 | GeneralSans | 2rem (32px) | 600 | 1.3 | — |
| h5 | GeneralSans | 1.5rem (24px) | 600 | 1.4 | — |
| h6 | GeneralSans | 1.25rem (20px) | 600 | 1.4 | — |
| Body | Gambetta | 1rem (16px) | 500 | 1.7 | — |
| Body medium | Gambetta | 1.125rem (18px) | 500 | 1.5 | — |
| Body large | Gambetta | 1.375rem (22px) | 500 | 1.5 | — |
| Small / Tiny | Gambetta | 0.875rem (14px) | 500 | 1.5 | — |

---

## Spacing Scale

| Token | Value |
|-------|-------|
| tiny | 0.25rem (4px) |
| xxsmall | 0.5rem (8px) |
| xsmall | 1rem (16px) |
| small | 1.5rem (24px) |
| medium | 2rem (32px) |
| large | 3rem (48px) |
| xlarge | 4rem (64px) |
| xxlarge | 5rem (80px) |
| huge | 6rem (96px) |
| xhuge | 7rem (112px) |
| xxhuge | 10rem (160px) |

---

## Layout

| Property | Value |
|----------|-------|
| Container max-width | 80rem (1280px) |
| Content max-width (xlarge) | 64rem (1024px) |
| Content max-width (large) | 48rem (768px) |
| Content max-width (medium) | 35rem (560px) |
| Global padding (sides) | 5% |
| Section padding (small) | varies by breakpoint |
| Section padding (medium) | varies by breakpoint |
| Section padding (large) | varies by breakpoint |

---

## Navigation

| Property | Value |
|----------|-------|
| Min height | 4.5rem (72px) |
| Padding | 0 5% |
| Layout | CSS Grid: 1fr max-content 1fr |
| Link padding | 0.5rem 1rem |
| Link hover | background-color: rgba(0,0,0,0.05) |
| Link border-radius | 0.5rem |
| Link gap | 0.25rem |

---

## Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---------|-----------|------|--------|--------|---------|
| Default | white | black | 1px solid black | 0.5rem | 0.5rem 1.5rem |
| Primary | black | white | 1px solid black | 0.5rem | 0.5rem 1.5rem |
| Inverted | black | white | 1px solid white | 0.5rem | 0.5rem 1.5rem |
| Link | transparent | black | none | — | 0.25rem 0 |
| Link Inverted | transparent | white | none | — | 0.25rem 0 |

---

## Form Inputs

| Property | Value |
|----------|-------|
| Border | 1px solid `#B4B0AC` |
| Border radius | 0.5rem |
| Min height | 2.75rem |
| Padding | 0.5rem 0.75rem |
| Font size | 1rem |
| Line height | 1.6 |
| Focus border | 1px solid black |
| Focus shadow | 0 0 0 4px rgba(0,0,0,0.1) |
| Textarea min-height | 11.25rem |

---

## Logo

The BIONIC wordmark uses the **Naoko AA** typeface in bold. It exists as two SVG files:

- `bionic-logo.svg` — Master logo (larger, used in nav center)
- `bionic-logo-nav.svg` — Compact version (used in footer)

The logo should always appear in solid black on light backgrounds. On dark backgrounds, invert to white.

---

## Background Texture

The site uses a subtle paper-like texture (`background-texture.jpg`) applied as a fixed background image over the `#FAF9F4` base colour. This gives the site its distinctive warm, tactile feel.

```css
body {
  background-color: #FAF9F4;
  background-image: url('/images/background-texture.jpg');
  background-size: cover;
  background-attachment: fixed;
}
```

---

## Image Assets (from Webflow)

| File | Description |
|------|-------------|
| `Header.jpg` | Homepage hero header image |
| `about-image-1.jpg` | About page — dark artwork (1280×660) |
| `About-image-2.jpg` | About page — secondary image |
| `about-image-3.jpg` | About page — tertiary image |
| `Image-Subscribe.png` | Subscribe section visual |
| `background-texture.jpg` | Paper texture overlay |
| `bionic-logo.svg` | Master BIONIC logo |
| `bionic-logo-nav.svg` | Compact nav logo |
| `favicon.png` | Browser favicon |

---

## Key Differences: Webflow vs Current Site

| Property | Webflow Original | Current bionic.global |
|----------|-----------------|----------------------|
| Background | `#FDFDFC` | `#FAF9F4` (user corrected) |
| Accent | `#FF6B00` (orange) | `#E8705A` (salmon) |
| Body font | Gambetta Medium | Inter (needs updating) |
| Heading font | GeneralSans Semibold | Playfair Display (needs updating) |
| Body line-height | 1.7 | 1.8 |
| Body font-weight | 500 (Medium) | 400 (Regular) |
| Button radius | 0.5rem | rounded-full (needs updating) |
