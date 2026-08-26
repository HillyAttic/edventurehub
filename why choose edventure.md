# Why choose edVenture? — Design Prompt + Next.js Implementation

## 1) Master UI recreation prompt (for designers / AI UI tools)

Use this prompt when you want another tool (v0, Galileo, Locofy, Claude Artifacts, etc.) to recreate the section:

```
Design a modern SaaS marketing section titled "Why choose edVenture?" for a desktop web page.

LAYOUT
- Full-width section, soft lavender / very light indigo background (#EEF2FF → #F3F0FF gradient).
- Left ~60–65%: heading + 6 feature points in a clean 2-column × 3-row grid.
- Right ~35–40%: large 3D-style illustration (trophy on podium + geometric “e” logo).
- Generous whitespace, max content width ~1280px, horizontal padding ~32–48px, vertical padding ~64–80px.
- Vertically center the feature grid with the illustration.

HEADING
- Text: "Why choose edVenture?"
- "Why choose " in near-black / slate-900, extra-bold, ~36–40px.
- "edVenture?" in a smooth left-to-right gradient: blue (#2563EB) → indigo (#4F46E5) → violet (#7C3AED).
- Thin short accent underline (~56px wide, 3px tall) under the heading in blue→indigo gradient.
- Heading left-aligned above the feature grid (not centered).

FEATURE ITEMS (6 total, 2 columns)
Each row item:
- Left: 48×48px white rounded-2xl icon tile, subtle soft indigo shadow, 1px very light border.
- Inside tile: thin-stroke purple/violet (#7C3AED) line icon, ~22px, no fill.
- Right of icon: two-tone copy — bold dark title + regular medium-gray description on one flowing paragraph (15px, snug line-height).

Exact copy + icons:
1. Lightbulb — "Founded and led by a" (bold) + "practicing Instructional Designer — not a sales team"
2. Clock — "Strong Tech & Support" (bold) + "ensuring smooth delivery, hosting, and integration"
3. Layers / stacked boards — "End-to-end eLearning" (bold) + "capability under one roof"
4. Award / ribbon badge — "Competitive pricing" (bold) + "with no compromise on quality"
5. Bar chart — "Story-driven approach" (bold) + "that drives real learner engagement"
6. Calendar — "Faster turnaround" (bold) + "times that keep your projects on schedule"

Column order (LTR):
Col1: 1, 3, 5
Col2: 2, 4, 6

ILLUSTRATION (right side)
- Soft purple radial glow / circle behind the scene.
- 3-tier isometric light-lavender podium (top smaller).
- Glossy gold 3D trophy cup with handles, stem, base, cream star on the cup face.
- Purple leafy foliage framing left & right base of podium.
- Large glossy 3D geometric letter “e” logo in blue→purple gradient, sitting lower-right of podium (slightly in front).
- Tiny sparkle stars / dots around the composition.
- Clean, premium, isometric/3D product-illustration style (NOT flat cartoon, NOT photoreal).
- No extra text in the illustration.

STYLE TOKENS
- Background: #EEF2FF / #F5F3FF
- Heading dark: #0F172A
- Body muted: #64748B
- Bold body: #1E293B
- Brand violet: #7C3AED
- Icon stroke: #7C3AED
- Icon tile bg: #FFFFFF
- Soft shadow: 0 4px 14px rgba(99,102,241,0.10)
- Font: modern geometric sans (Inter / Plus Jakarta Sans / system-ui)
- Overall feel: clean edtech SaaS, airy, premium, trustworthy

RESPONSIVE
- Desktop: 2-col features + illustration on right.
- Tablet: 2-col features, illustration below or smaller on right.
- Mobile: 1-col features stacked, illustration centered below.
```

---

## 2) Image-only prompt (trophy illustration asset)

If you prefer a PNG/WebP asset instead of the inline SVG:

```
3D isometric product illustration on transparent background: a shiny gold trophy cup with dual handles and a cream star on the front, standing on a three-tier soft lavender purple podium. Purple leafy foliage around the base. A large glossy 3D geometric letter "e" logo in blue-to-violet gradient placed at the lower right, slightly in front of the podium. Soft purple circular glow behind the trophy, tiny sparkle stars around. Clean premium edtech SaaS style, soft lighting, high detail, no text other than the e logo, centered composition.
```

Midjourney / Flux additives (optional):
```
--stylize 150 --v 6  |  soft studio lighting, octane render feel, pastel purple palette, white negative space
```

---

## 3) Drop-in usage (Next.js + Tailwind + lucide-react)

```bash
npm install lucide-react
```

```tsx
// app/page.tsx  (or any page/section)
import WhyChooseEdVenture from "@/components/WhyChooseEdVenture";

export default function Page() {
  return (
    <main>
      {/* ... */}
      <WhyChooseEdVenture />
      {/* ... */}
    </main>
  );
}
```

Copy `WhyChooseEdVenture.tsx` into `components/WhyChooseEdVenture.tsx`.

Requires Tailwind CSS (you already use utility classes). No extra config needed for the gradients/`bg-clip-text`.

---

## 4) Design deltas vs your previous code

| Area | Your old code | Matched to mock |
|---|---|---|
| Background | flat `#EEF2FF` | soft indigo→violet gradient + top white fade |
| Title accent | solid `text-purple-700` on edVenture | blue→indigo→violet gradient text + short underline bar |
| Icon tiles | multi-color fills (purple/blue/pink/rose/gray) | uniform white tiles, all violet icons, soft shadow |
| Icon set | mixed | lightbulb, clock, layers, award, bar-chart, calendar |
| Typography | gray body, semibold spans | bold dark title + muted description, 15px snug |
| Grid | 2-col features | same 2×3, tighter row gap matching mock |
| Illustration | basic flat SVG trophy | richer gold trophy + 3-step podium + leaves + 3D e logo + sparkles + glow |

---

## 5) Optional: use a generated image instead of SVG

```tsx
import Image from "next/image";

// inside the right column:
<div className="relative mx-auto aspect-square w-full max-w-[340px]">
  <Image
    src="/images/edventure-trophy.png"
    alt="edVenture excellence trophy"
    fill
    className="object-contain"
    priority={false}
  />
</div>
```
