# Theme, Skin Color, and Font Audit

Date: March 28, 2026
Project: portfolio-project

## 1) Executive Summary

This project has:

- 5 selectable skin colors (accent theme colors)
- 2 theme modes (light and dark)
- 2 primary Google fonts (Poppins and Clicker Script)

Theme mode changes the neutral surfaces and text contrast. Skin color changes the accent system used across text, backgrounds, borders, hover/focus states, glows, and decorative elements.

## 2) Skin Colors Used

## 2.1 Total Skin Colors

Total selectable skin colors: 5

Defined in:

- components/Navbar.tsx
- components/StyleSwitcher.tsx

## 2.2 Exact Skin Color Values

1. color-1: #ec1839 (rgb: 236, 24, 57)
2. color-2: #fa5b0f (rgb: 250, 91, 15)
3. color-3: #37b182 (rgb: 55, 177, 130)
4. color-4: #1854b4 (rgb: 24, 84, 180)
5. color-5: #f021b2 (rgb: 240, 33, 178)

Default skin color at startup:

- #ec1839 from app/globals.css

## 2.3 Human-Friendly Color Names (Approximate)

1. #ec1839: Crimson Red
2. #fa5b0f: Vivid Orange
3. #37b182: Teal Green
4. #1854b4: Royal Blue
5. #f021b2: Magenta Pink

## 3) How Skin Color Works in the Code

## 3.1 Core Variables

Skin is controlled by CSS custom properties:

- --skin-color
- --skin-color-rgb

When a user selects a color, the code updates both variables on document.documentElement.

## 3.2 Runtime Update Points

- components/Navbar.tsx
  - setProperty('--skin-color', hex)
  - setProperty('--skin-color-rgb', rgb)
- components/StyleSwitcher.tsx
  - setProperty('--skin-color', hex)
  - setProperty('--skin-color-rgb', rgb)

## 3.3 Utility Mapping in Tailwind

tailwind.config.ts maps:

- skin -> var(--skin-color)
- accent -> var(--skin-color)

This allows usage of classes such as text-skin, bg-skin, border-skin across the app.

## 4) What Changes When Skin Color Changes

When skin changes from one color to another, all UI connected to the skin token updates immediately.

## 4.1 Visual Elements Affected

- Accent text and icons (text-skin)
- Accent backgrounds (bg-skin, bg-skin/x)
- Accent borders (border-skin, border-skin/x)
- Hover and focus highlights
- Shadow/glow effects using rgba(var(--skin-color-rgb), alpha)
- Decorative lines, dots, pills, chips, and gradient accents
- Selection highlight color
- Scrollbar thumb color
- Timeline dots/vertical connectors
- CTA buttons and active navigation pills

## 4.2 Measured Usage Counts

Counts in .ts, .tsx, and .css files:

- text-skin: 83
- bg-skin: 55
- border-skin: 38
- --skin-color: 58
- --skin-color-rgb: 29

These counts indicate skin is broadly integrated as the global accent system.

## 4.3 Typical Perceived Effect by Color Choice

- Red/orange skins: stronger urgency/energy feel
- Teal/blue skins: cleaner and calmer technical feel
- Magenta skin: bolder and more expressive brand feel

Behavior is functionally identical for all 5 skins; the differences are visual identity and emphasis intensity.

## 5) Theme Modes (Light and Dark)

## 5.1 Mode Count and Mechanism

Total modes: 2

- Light mode (default)
- Dark mode (.dark class)

Mechanism:

- Tailwind dark mode strategy is class-based (darkMode: "class")
- Toggle button adds/removes dark class on document.documentElement

## 5.2 Theme Token Changes by Mode

In app/globals.css, these variables switch:

Light mode tokens:

- --bg-black-900: #f2f2fc
- --bg-black-100: #fdf9ff
- --bg-black-50: #e8dfec
- --text-black-900: #302e4d
- --text-black-700: #504e70

Dark mode tokens:

- --bg-black-900: #151515
- --bg-black-100: #222222
- --bg-black-50: #393939
- --text-black-900: #ffffff
- --text-black-700: #e9e9e9

Note: skin color token is not replaced by dark mode. Skin persists independently.

## 5.3 Dark Mode Marker Counts in Code

- .dark {: 2
- dark: utility usage: 14
- classList.toggle('dark'): 2
- darkMode: "class": 1

## 6) Combined Behavior: Skin Change Inside Light/Dark

## 6.1 In Light Mode

- Accent appears on pale backgrounds
- Contrast is moderate to strong depending on selected skin
- Hover glows feel lighter and softer

## 6.2 In Dark Mode

- Same accent appears more vivid against dark neutrals
- Borders and glows look stronger due to high contrast
- Accent-driven highlights become visually more prominent

## 6.3 What Does Not Change

- Layout structure
- Component logic
- Content
- Spacing and typography scales

Only color-related presentation changes.

## 7) Fonts Used in This Project

## 7.1 Primary Fonts

1. Poppins (Google Font)
   - Weights: 200, 300, 400, 500, 600, 700
   - Subset: latin
   - CSS variable: --font-poppins
   - Role: default sans font for body and most UI

2. Clicker Script (Google Font)
   - Weight: 400
   - Subset: latin
   - CSS variable: --font-clicker
   - Role: decorative script font (branding/logo style)

## 7.2 Tailwind Font Family Mapping

- font-sans -> var(--font-poppins), sans-serif
- font-script -> var(--font-clicker), cursive

## 7.3 Where Font Setup Is Defined

- app/layout.tsx
- tailwind.config.ts
- app/globals.css

## 8) Related Color Constants (Non-Skin, Important Context)

## 8.1 PWA and Browser Theme Color

These are fixed white currently:

- app/layout.tsx viewport themeColor: #ffffff
- app/manifest.ts theme_color: #ffffff
- app/manifest.ts background_color: #ffffff

This is independent from runtime dark mode and skin color.

## 8.2 Admin Dashboard Additional Palette

Admin dashboard defines an additional chart palette:

- #10b981
- #3b82f6
- #f59e0b
- #ec4899
- #8b5cf6

File:

- app/admin/dashboard/page.tsx

These are chart colors and separate from the global skin selector.

## 9) Implementation Notes and Observations

1. Theme and skin selections are not persisted in localStorage/sessionStorage.
   - Result: after a full page reload, values return to defaults unless browser keeps runtime state.

2. StyleSwitcher component exists but is not wired into RootLayout currently.
   - Active theme controls in the running UI are in Navbar.

3. Most components rely on tokenized colors (good for theme consistency).

## 10) Practical Impact Summary

Changing skin color causes immediate global accent changes in:

- Navigation active styles
- Buttons and calls-to-action
- Card hover borders and glow effects
- Icons and emphasized text
- Decorative gradients and highlights
- Selection/scrollbar/timeline accents

Switching light/dark changes the neutral design system:

- page background
- cards and muted surfaces
- text contrast hierarchy

Using both together gives a matrix of visual outcomes:

- 5 skin variants x 2 modes = 10 visual theme combinations

## 11) File References Used for This Audit

- app/globals.css
- tailwind.config.ts
- app/layout.tsx
- app/manifest.ts
- components/Navbar.tsx
- components/StyleSwitcher.tsx
- app/admin/dashboard/page.tsx

---

Generated by repository code inspection on March 28, 2026.
