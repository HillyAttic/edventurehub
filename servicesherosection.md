# E-learning hero visual — Next.js implementation

## 1) Prompt for a code-generation tool

> Build a polished, responsive **Next.js App Router + TypeScript + Tailwind CSS** hero section for an e-learning services page. Preserve my existing left text column: “Our Expertise”, “Everything You Need to Build Brilliant Learning Experiences”, and the supporting paragraph. Rebuild the right-side artwork as an **editable inline SVG**, not a raster image and not canvas. The visual language is premium soft 3D/neumorphic product illustration: a midnight-navy laptop centered in a pale lavender-white scene, a course dashboard on the screen, vivid indigo/violet/cobalt gradients, white rounded dashboard cards, subtle diffuse shadows, dotted curved workflow paths with arrowheads, and six floating icons (target, pencil, code brackets, play, chart bars, award). Add a small blue-purple plant at lower left, a stack of three blue-purple books in the foreground, and a blue mug at lower right. Keep all decoration inside the illustration view box, use no external libraries, make the SVG scale fluidly, and honor `prefers-reduced-motion`. Desktop layout should be two columns; the artwork must stack below the text on mobile. Avoid dark page backgrounds, heavy outlines, generic browser-window mockups, text inside the cards, and excessive glassmorphism.

## 2) Image-generation prompt (if you want a new hero asset)

> Premium 3D clay-style e-learning platform hero illustration, wide 3:2 composition. A large open midnight navy laptop in the center displays a clean course-authoring dashboard: violet video player with white play button, blue learning module card with graduation cap, white checklist, typography tile, image tile, and donut analytics tile. Pale white and lavender studio background, soft ambient lighting, tiny ground shadows. Around the laptop, floating rounded gradient tiles connected by thin lavender dashed curved paths and arrows: bullseye target at upper left, blue pencil at left, purple code brackets at lower left, violet play button upper right, blue bar chart right, violet award ribbon lower right. Foreground includes a small blue-purple leafy plant in a white pot, three stacked indigo/violet books, and a cobalt coffee mug. Glossy soft plastic surfaces, restrained highlights, modern SaaS illustration, cohesive indigo #3528d4, violet #7b46ec, and blue #1387ee palette. No words, no logos, no watermark, no people, no photorealism, no black background.

---

## 3) Use the included editable component

1. Copy `LearningExperienceVisual.tsx` to `components/LearningExperienceVisual.tsx` in your Next.js project.
2. It has **no package dependency** and works in a Server Component.
3. Replace the large second `<div>` in your current section with the following:

```tsx
import LearningExperienceVisual from "@/components/LearningExperienceVisual";

// Keep your existing left-hand content untouched.
<section className="mx-auto grid max-w-[1320px] items-center gap-8 overflow-hidden px-5 py-16 md:grid-cols-[0.86fr_1.14fr] md:gap-6 md:py-24">
  <div>
    <span className="badge-pill">Our Expertise</span>
    <h1 className="mt-5 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
      Everything You Need to Build{" "}
      <span className="gradient-text">Brilliant Learning Experiences</span>
    </h1>
    <div className="section-underline my-6" />
    <p className="max-w-lg text-base leading-relaxed text-muted">
      From strategy to screen, we handle the full spectrum of eLearning development.
    </p>
  </div>

  <div className="relative -mx-5 mt-2 sm:mx-0 md:mt-0">
    <LearningExperienceVisual className="max-w-[760px] md:translate-x-5" />
  </div>
</section>
```

The SVG has its own animation rules, so you can delete the old `animate-float`, `animate-float-slow`, and `dotted-grid` decoration used only by the original right-side markup.

## Exact-pixel option

If the uploaded reference is the licensed final asset and you need it to look *exactly* like the reference at every breakpoint, place it at `public/images/elearning-hero.png` and render it instead of rebuilding it:

```tsx
import Image from "next/image";

<Image
  src="/images/elearning-hero.png"
  alt="E-learning platform capabilities"
  width={1536}
  height={1024}
  priority
  className="h-auto w-full max-w-[760px]"
/>
```

Use the SVG component when you need editable colors, independent elements, and animation; use the image option when pixel-level fidelity to the supplied artwork is the priority.
