---
design-system:
  name: "Aawej Monospace Tech System"
  version: "1.0.0"
  tokens:
    colors:
      dark:
        background: "#121820"
        text: "#e2e8f0"
        textMuted: "#8a99ad"
        accent: "#f6ad55"
        border: "#2e3746"
        cardBg: "#1a2330"
      light:
        background: "#ffffff"
        text: "#1a202c"
        textMuted: "#718096"
        accent: "#dd6b20"
        border: "#e2e8f0"
        cardBg: "#f7fafc"
    typography:
      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace"
      scale:
        base: "16px"
        title: "2.2rem"
        section: "1.35rem"
        meta: "0.8rem"
    spacing:
      xs: "4px"
      sm: "8px"
      md: "16px"
      lg: "24px"
      xl: "48px"
    borders:
      radiusSm: "4px"
      radiusMd: "6px"
      radiusLg: "8px"
      style: "1px solid var(--border-color)"
      styleDashed: "1px dashed var(--border-color)"
---

# Design System - DESIGN.md

This file documents the design token system and visual guidelines for the Aawej Pathan Developer Portfolio & Blog. It follows the Google Stitch open standard to guide AI agents and developers in maintaining visual consistency.

---

## 1. Visual Theme & Atmosphere
- **Concept**: Minimalist Technical Monospace (inspired by `steipete.me`).
- **Density**: Low density, generous margins, clean layouts.
- **Aesthetic**: Technical dark-mode centric, high contrast, flat borders, monospaced typography, and clean lines.

---

## 2. Color Palette & Roles
We use CSS variables to toggle between dark (default) and light themes:

| Semantic Role | Dark Token | Light Token | Purpose |
|---|---|---|---|
| `--bg-color` | `#121820` | `#ffffff` | Primary body background |
| `--text-color` | `#e2e8f0` | `#1a202c` | Main readable text |
| `--text-muted` | `#8a99ad` | `#718096` | Subheadings, dates, descriptions |
| `--border-color`| `#2e3746` | `#e2e8f0` | Container outlines and lines |
| `--accent-color`| `#f6ad55` | `#dd6b20` | Hover states, active links, badges |
| `--card-bg` | `#1a2330` | `#f7fafc` | Background for cards and badges |

---

## 3. Typography Rules
- **Primary Font**: `JetBrains Mono` (loaded via Next.js Google Fonts using `var(--font-mono)`).
- **Scale**:
  - `h1.bio-title`, `h1.page-title`: `2.2rem`, bold.
  - `h2.section-title`, `h2.post-item-title`: `1.35rem`, semi-bold.
  - Body text: `0.98rem`, line-height `1.65`.
  - Metadata (`.post-meta`): `0.8rem`.

---

## 4. Component Stylings
- **Buttons (`.action-btn`, `.toolbar-btn`)**:
  - Border radius: `6px`.
  - Border: `1px solid var(--border-color)`.
  - Background: `var(--card-bg)`.
  - Hover: `border-color` transitions to `var(--accent-color)`.
- **Cards (`.post-item-card`, `.social-card`, `.footer-card`)**:
  - Border radius: `8px`.
  - Border: `1px solid var(--border-color)`.
  - Background: `var(--card-bg)`.
  - Interactive Hover: `border-color` shifts to `var(--accent-color)`, elements translate up by `2px` (`transform: translateY(-2px)`).
- **Active Navigation Indicator**:
  - Uses `text-decoration: underline; text-decoration-style: wavy; text-decoration-color: var(--accent-color);` with a `text-underline-offset` of `6px` to represent active links on menu bars.

---

## 5. Layout Principles
- **Grid Systems**:
  - Profile layout is a `200px` left column (photo) and `1fr` right column (biography). Collapses to single column on screens `< 768px`.
  - Social grid is `repeat(auto-fit, minmax(240px, 1fr))`.
- **Dashed Borders**:
  - Major section breaks use `border-bottom: 1px dashed var(--border-color)` to maintain a "technical ledger" paper look.

---

## 6. Depth & Elevation
- **Elevation**: Flat design language. No heavy drop-shadows.
- **Subtle Elevation**: Floating headers and the theme toggles use a subtle `box-shadow` to separate them from content when scrolling.

---

## 7. Do's and Don'ts
- **DO** use `JetBrains Mono` for all text on the site.
- **DO** bind spacing and padding strictly to CSS variables or custom spacing tokens.
- **DO** use clean vector SVG brand icons inline instead of importing heavy dependencies.
- **DON'T** use Tailwind utility classes (e.g. `bg-slate-900`, `text-orange-500`) directly. Always define styles in `globals.css` using custom tokens.
- **DON'T** add saturated colors for body backgrounds. Stick to slate, charcoal, and white.

---

## 8. Responsive Behavior
- **Mobile Breakpoint**: `768px`.
- On mobile:
  - Navigation brand and links adjust spacing.
  - Biography photo aligns centrally above biography text.
  - Typography scale shrinks slightly.

---

## 9. Agent Prompt Guide
When requested to add components or screens to this workspace, use this prompt pattern:
> "Construct the new component inside `app/` (or its child routes) using semantic HTML5 elements. Apply vanilla styling inside `app/globals.css` utilizing only the design system tokens defined in `DESIGN.md` (e.g., `var(--bg-color)`, `var(--accent-color)`). Ensure active navigation tabs have wavy orange underlines."
