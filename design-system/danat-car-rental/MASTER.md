# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

> **SOURCE OF TRUTH:** This file documents `src/app/globals.css`. That file is the
> implementation; this file must always match it. If you change one, change the other.

---

**Project:** Danat Car Rental (Danat Aldonia Rent a Car)
**Generated:** 2026-05-05 19:13:38
**Last synced with `src/app/globals.css`:** 2026-10-25
**Category:** Automotive / Luxury Car Rental

---

## Global Rules

### Color Palette

Gold-on-black luxury. The site is **dark-only** (`color-scheme: dark` on `html`) — there is
no light mode. Never introduce light backgrounds or red accents.

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary (page background) | `#050505` | `--bg-primary` |
| Secondary (alt section background) | `#0A0A0A` | `--bg-secondary` |
| CTA/Accent (gold) | `#C5A021` | `--accent-gold` |
| Background (same as Primary) | `#050505` | `--bg-primary` |
| Text | `#FFFFFF` | `--text-primary` |

**Full token set as declared in `:root`:**

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#050505` | Page background (set on `body`) |
| `--bg-secondary` | `#0A0A0A` | Alternating section background |
| `--surface-primary` | `#111111` | Card background |
| `--surface-secondary` | `#161616` | Nested surface |
| `--surface-elevated` | `#1F1F1F` | Raised surface / popover |
| `--accent-gold` | `#C5A021` | Primary accent, CTAs, links, focus ring |
| `--accent-gold-light` | `#D4B445` | Gradient high end, hover brightening |
| `--accent-gold-dark` | `#A6871B` | Gradient low end |
| `--accent-gold-glow` | `rgba(197, 160, 33, 0.4)` | Hover glow shadow color |
| `--accent-white` | `#FFFFFF` | Gradient terminus on primary hover |
| `--text-primary` | `#FFFFFF` | Headings, body copy |
| `--text-secondary` | `#B0B0B0` | Supporting copy |
| `--text-muted` | `#707070` | Captions, meta, disabled |
| `--border-subtle` | `rgba(197, 160, 33, 0.15)` | Default card/divider border |
| `--border-medium` | `rgba(197, 160, 33, 0.3)` | Hover border, secondary button border |
| `--border-strong` | `rgba(197, 160, 33, 0.5)` | Emphasis border |

**Tailwind theme colors** (declared in `@theme`, usable as `text-gold`, `bg-gold-dark`, etc.):

| Tailwind token | Value |
|----------------|-------|
| `--color-gold` | `#C5A021` |
| `--color-gold-light` | `#D4B445` |
| `--color-gold-dark` | `#A6871B` |

**Helper classes:** `.text-gold` → `color: var(--accent-gold)`, `.bg-gold` → `background-color: var(--accent-gold)`.

**Color Notes:** Near-black base (`#050505`) with a single antique-gold accent (`#C5A021`).
All borders are translucent gold, never grey. No red, no blue, no slate.

### Typography

- **Heading Font:** Outfit (`font-weight: 700`, `line-height: 1.1`, `letter-spacing: -0.02em`)
- **Body Font:** Inter (`line-height: 1.6`, antialiased)
- **Display/Editorial Font:** Fraunces (variable: `opsz`, `wght`, `SOFT`) — opt-in via `.display-serif`, never global
- **Arabic / RTL Font:** Cairo — applied to `body` and all headings under `[dir="rtl"]`
- **Mood:** luxury, editorial, high-contrast, confident, Dubai-premium
- **Google Fonts:** [Inter + Outfit + Cairo + Fraunces](https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600;700;800|Outfit:wght@300;400;500;600;700;800|Cairo:wght@300;400;500;600;700;800;900|Fraunces:opsz,wght,SOFT@9..144,300..900,0..100)

**Font stacks (exact):**

```css
body            { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
h1,h2,h3,h4,h5,h6 { font-family: 'Outfit', sans-serif; }
.display-serif  { font-family: 'Fraunces', 'Outfit', Georgia, serif; }
[dir="rtl"] body { font-family: 'Cairo', system-ui, -apple-system, sans-serif; }
[dir="rtl"] h1..h6, [dir="rtl"] .display-serif { font-family: 'Cairo', sans-serif; font-style: normal; }
```

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&family=Cairo:wght@300;400;500;600;700;800;900&family=Fraunces:opsz,wght,SOFT@9..144,300..900,0..100&display=swap');
```

**Editorial utilities:**

| Class | Purpose |
|-------|---------|
| `.display-serif` | Fraunces headline, `font-weight: 400`, `letter-spacing: -0.02em`, `font-variation-settings: "SOFT" 30, "opsz" 144` |
| `.display-serif-italic` | Fraunces italic, `font-weight: 300`, `letter-spacing: -0.01em` |
| `.eyebrow` | Gold spaced caps, `11px`, `font-weight: 600`, `letter-spacing: 0.25em`, with a 32px gold hairline via `::before` |
| `.editorial-number` | Oversized step marker, Fraunces 300, `clamp(7rem, 18vw, 14rem)`, `color: rgba(197, 160, 33, 0.15)` |

### Spacing Variables

`globals.css` does not declare `--space-*` tokens. The declared layout tokens are:

| Token | Value | Usage |
|-------|-------|-------|
| `--container-width` | `1280px` | Max content width (`.container`) |
| `--header-height` | `80px` | Fixed navbar height — offset fixed-nav content by this |

**Container:** `.container` = `max-width: var(--container-width); margin: 0 auto; padding: 0 24px;`

**Spacing scale in use** (literal px values, applied directly — match these, don't invent new steps):

| Value | Usage |
|-------|-------|
| `8px` | Scroller top padding |
| `10px` | Button icon gap |
| `12px` | Eyebrow gap |
| `14px` / `32px` | Button padding (vertical / horizontal) |
| `24px` | Container gutter, card/scroller gap |
| `32px` | Card padding, scroller bottom padding |

### Radii

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `8px` | Small controls, chips |
| `--radius-md` | `14px` | Inputs, medium surfaces |
| `--radius-lg` | `24px` | Cards |
| `--radius-full` | `999px` | Buttons, pills, circular chevrons |

### Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | `0.2s cubic-bezier(0.4, 0, 0.2, 1)` | Links, small controls, chevrons |
| `--transition-smooth` | `0.4s cubic-bezier(0.4, 0, 0.2, 1)` | Buttons, cards |

Magnetic wrapper uses its own curve: `transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)`.

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-subtle` | `0 4px 12px rgba(0, 0, 0, 0.6)` | Subtle lift |
| `--shadow-medium` | `0 8px 32px rgba(0, 0, 0, 0.8)` | Card hover, modals, dropdowns |
| `--shadow-glow` | `0 0 25px rgba(197, 160, 33, 0.15)` | Gold ambient glow on primary CTA |

Shadows on a near-black background are deep black at high opacity — not the soft 5–15%
shadows used on light UIs. Lift is communicated by the gold border and glow, not by grey shadow.

---

## Component Specs

### Buttons

```css
/* Shared base — every button gets .btn */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: var(--transition-smooth);
  border: none;
  gap: 10px;
}

/* Primary Button — gold gradient on black text */
.btn-primary {
  background: linear-gradient(135deg, var(--accent-gold-dark), var(--accent-gold));
  color: var(--bg-primary);
  box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--accent-gold-glow);
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-white));
}

/* Secondary Button — gold text on transparent */
.btn-secondary {
  background: transparent;
  color: var(--accent-gold);
  border: 1px solid var(--border-medium);
}

.btn-secondary:hover {
  background: rgba(197, 160, 33, 0.05);
  border-color: var(--accent-gold);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .btn-primary:hover,
  .btn-secondary:hover { transform: none; }
}
```

### Cards

```css
.card {
  background: var(--surface-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition-smooth);
}

.card:hover {
  border-color: var(--border-medium);
  box-shadow: var(--shadow-medium);
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .card:hover { transform: none; }
}
```

### Inputs

No `.input` class exists in `globals.css`. Build inputs from the declared tokens — dark
surface, translucent gold border, gold focus ring:

```css
.input {
  background: var(--surface-secondary);
  color: var(--text-primary);
  padding: 14px 16px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  font-family: inherit;   /* globals.css already sets this on form elements */
  font-size: 16px;        /* keep >=16px to stop iOS zoom-on-focus */
  transition: var(--transition-fast);
}

.input::placeholder { color: var(--text-muted); }

.input:focus-visible {
  border-color: var(--accent-gold);
  outline: 2px solid var(--accent-gold);
  outline-offset: 3px;
}
```

Global focus ring (already in `globals.css`, keyboard-nav only — do not remove or override
with `outline: none`):

```css
:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 3px;
  border-radius: 4px;
}
```

### Modals

No `.modal` class exists in `globals.css`. Use the `.glass` utility plus the pattern already
shipped in `src/components/common/CookieConsent.tsx`:

```css
/* Glass utility as declared in globals.css */
.glass {
  background: rgba(17, 17, 17, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-subtle);
}

.modal-overlay {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

.modal {
  background: rgba(5, 5, 5, 0.98);   /* near-black, never white */
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-medium);
  max-width: 500px;
  width: 90%;
}
```

### Fleet Scroller

Horizontal snap-scrolling card rail with edge fades and circular chevrons.

```css
.fleet-scroller {
  display: flex;
  align-items: stretch;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline-start: 24px;
  scroll-behavior: smooth;
  padding: 8px 24px 32px;
  margin: 0 -24px;            /* bleed past the container gutter */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;      /* plus ::-webkit-scrollbar { display: none } */
}

.fleet-scroller > * {
  flex: 0 0 min(360px, 82vw);
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
}
```

- `.fleet-scroller-wrap::after` — right fade, always on, `linear-gradient(to left, #000 15%, transparent)`, `80px` wide, inset `top: 8px / bottom: 32px`, `z-index: 2`.
- `.fleet-scroller-wrap.can-scroll-left::before` — left fade, same geometry mirrored, added by JS only once scrolled.
- `.scroller-chevron` — `48px` circle, `background: rgba(255, 255, 255, 0.04)`, `1px solid var(--border-subtle)`, gold icon, `var(--transition-fast)`. Hover: `rgba(197, 160, 33, 0.08)` + `--border-medium` + `scale(1.05)`. Disabled: `opacity: 0.3`, `cursor: not-allowed`, `transform: none`.

### Animations

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-fadeInUp { animation: fadeInUp 0.6s ease forwards; }
```

`.magnetic-wrap` is the baseline for cursor-following buttons
(`transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)`, `will-change: transform`) and is forced to
`transform: none !important` under `prefers-reduced-motion`.

---

## Style Guidelines

**Style:** Editorial Luxury (dark)

**Keywords:** Gold-on-black, editorial typography, serif display headlines, spaced-caps
eyebrows, oversized step numerals, hairline gold borders, glassmorphism, restrained motion,
generous negative space

**Best For:** Luxury car rental, premium automotive showcase, high-end hospitality,
concierge services, Dubai/GCC premium market

**Key Effects:** Gold gradient CTAs with ambient glow, `translateY` lift on hover (buttons
-2px, cards -4px), horizontal snap scrollers with edge fades, magnetic buttons,
`fadeInUp` scroll reveals, 12px backdrop blur on glass surfaces, smooth 200–400ms easing

### Page Pattern

**Pattern Name:** Hero-Centric + Feature-Rich

- **CTA Placement:** Above fold, repeated in a closing Final CTA section
- **Section Order:** Hero > Trust Bar > Featured Fleet > Fleet Segments > Why Choose Us > How It Works > Reviews > FAQ > Final CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ **Light backgrounds** — the site is dark-only (`color-scheme: dark`). Never `#F8FAFC`, `white`, or any light surface.
- ❌ **Red / slate / blue accents** — gold `#C5A021` is the only accent. No `#DC2626`, no `#1E293B`.
- ❌ **Grey borders** — borders are translucent gold (`--border-subtle/medium/strong`).
- ❌ **Soft light-UI shadows** — no `rgba(0,0,0,0.05–0.15)`. Use `--shadow-subtle/medium/glow`.
- ❌ **Hardcoded hex values** — reference the `:root` tokens or the `.text-gold` / `.bg-gold` helpers.
- ❌ **Renaming tokens** — use `--accent-gold`, not `--color-cta`; `--bg-primary`, not `--color-background`.
- ❌ Static product pages
- ❌ Poor UX

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Use `translateY`, not scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio on the dark base; do not go below `--text-muted` (`#707070`) for meaningful copy
- ❌ **Instant state changes** — Always use `--transition-fast` or `--transition-smooth`
- ❌ **Invisible focus states** — Never `outline: none` without replacing the gold `:focus-visible` ring
- ❌ **Latin fonts in RTL** — Arabic content uses Cairo; `.display-serif` italics must reset to `font-style: normal` in RTL

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] Colors come from `:root` tokens — no stray hex values
- [ ] Dark mode is the only mode — no light surfaces introduced
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states use `--transition-fast` / `--transition-smooth`
- [ ] Dark mode: text contrast 4.5:1 minimum against `#050505`
- [ ] Focus states visible — gold `:focus-visible` ring intact
- [ ] `prefers-reduced-motion` respected (transforms disabled)
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind the fixed navbar (`--header-height: 80px`)
- [ ] No horizontal scroll on mobile (`body` already sets `overflow-x: hidden`)
- [ ] RTL checked — Cairo applied, layout mirrored
- [ ] This file still matches `src/app/globals.css`
