# Portfolio Redesign Plan

## Goal
Redesign the GitHub Pages portfolio (Jekyll/Cayman theme) to match the style of an Authory-style portfolio. Reference: https://authory.com/SusanHorsburgh?collection=All-Content-c8fb9dc4c703344138eb50339ca00320f&type=PdfFile

Key features to implement:
- Large hero/banner image at the top with a color overlay
- Circular profile photo centered in/below the banner
- Sticky navigation scroll bar with topic/section filter tabs
- Project cards with images or screenshots displayed alongside text

---

## Current Stack
- Jekyll static site on GitHub Pages
- Theme: `pages-themes/cayman@v0.2.0` (remote theme)
- Styling: `assets/css/style.scss` (imports Cayman base + custom overrides)
- Layout: `_layouts/default.html` (single layout, Liquid templating)
- Content: `README.md` (main portfolio), `interesting_reads.md` (secondary page)
- No JavaScript currently — purely static HTML/CSS

---

## Files to Modify
| File | Change |
|---|---|
| `_layouts/default.html` | Add banner image, profile photo, nav tab bar |
| `assets/css/style.scss` | Banner styling, circular avatar, card grid layout, image placement |
| `README.md` | Restructure project entries to include image references |

---

## Assets Still Needed (Taylor to provide)
- [ ] **Banner/hero photo** — a wide landscape image for the top of the page
- [ ] **Profile headshot** — will be displayed as a circular avatar overlapping or sitting below the banner
- [ ] **Project screenshots or images** — one per project (6 projects total):
  1. Reinforcement Learning for Early ICU Intervention
  2. Sentiment Analysis for Political Discourse
  3. What's in a Review? (Amazon review helpfulness)
  4. Global Warming Trajectories
  5. The Vision Turing Test
  6. BYO RAG

Images should be placed in `assets/images/` once collected.

---

## Layout Decisions Still Needed
- [ ] Filter tab categories — what topics/labels should the section nav tabs have? (e.g., "All", "NLP", "ML", "Data Viz", "RAG"?)
- [ ] Project card layout — image left + text right, or image on top with text below?
- [ ] Banner style — full-bleed photo with dark overlay, or split panel?
- [ ] Color scheme — keep Cayman's teal or switch to something new?

---

## When Ready to Build
1. Drop images into `assets/images/`
2. Answer the layout decisions above
3. Ask Claude to implement — all context is here
