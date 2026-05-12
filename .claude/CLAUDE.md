# Portfolio Website — Project Instructions

## Design System

Before implementing any UI, styling, or component change, read `DESIGN.md` at the project root.
All visual decisions — colors, typography, spacing, radii, shadows, interactions — must conform to it.

Key rules to enforce automatically:
- Single typeface: Overused Grotesk only. No other font families.
- Grayscale palette only (`#fafafa` → `#212121`). No decorative color accents.
- No box shadows anywhere. Depth via border (`#e0e0e0`) and blur only.
- Headlines at `font-normal` (400). `font-semibold` (600) for Titles/KPI only. Never bold (700+) in content.
- Three border radii: `12px` (buttons/tags), `24px` (cards), `9999px` (pills/logo).
- Section gaps: `48px`. Single breakpoint: `1280px`.
- Glassmorphism (`backdrop-blur-md` + semi-transparent white) on floating UI only (nav header, TOC).
- Focus rings: `2px solid #2563eb`, `outline-offset: 2px`, `focus-visible` only — never decorative.
