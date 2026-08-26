# Services Section — Integration Guide (v2, exact match)

## Files
- `Services.tsx` — drop-in Next.js (App Router) component, pixel-matched to the reference
- `prompt.md` — the as-is design prompt (v2 spec)
- `preview.html` — live visual preview (open in a browser)
- `icons/services/*.png` — **all 13 tiles cropped directly from your reference screenshot**
  (illustration + pastel tint baked in, ~15KB each)

## Steps
1. **Copy the icons** into your app:
   ```
   /public/icons/services/{lms,scorm,gamified,ilt,microlearning,video,instructional,
   storyboard,conversion,translation,campaigns,portal,promo}.png
   ```
2. **Add the component**, e.g. `app/services/Services.tsx`, then `<ServicesSection />`.
3. **Tokens** (already yours, so it should just work): `font-heading`, `text-ink`,
   `card-hover`, `from-primary`, `to-purple`.
   If `card-hover` is not defined yet:
   ```css
   .card-hover { transition: transform .3s ease, box-shadow .3s ease; }
   .card-hover:hover { transform: translateY(-6px); box-shadow: 0 16px 32px -12px rgba(124, 58, 237, .22); }
   ```
4. `line-clamp-2` is built into Tailwind v3.3+ / v4.
5. Icons are optional — missing image → automatic emoji fallback.

## What changed vs. the reference in v2
- Icon tiles now 112px (was 64) with the **exact reference illustrations** (cropped from your
  screenshot, tint included) — no more AI-generated stand-ins.
- 13th card is now **wide + horizontal** (icon left, text middle, arrow bottom-right),
  centered below the grid at ~570px (was a narrow vertical card).
- Bigger violet numbers (18px), bigger titles (24px), airier spacing, violet arrow (was dark).
- Section spacing tuned: pt-12 / pb-20, 32px heading→grid gap.
