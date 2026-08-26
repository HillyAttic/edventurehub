# edVenture Contact Page — Prompts & Style Spec

Attach the screenshot (`contactpage.jpg`) together with the **Master Prompt** below when asking
any AI coding tool (v0, Cursor, Copilot, Lovable, or this agent) to rebuild the page. The two
**Illustration Prompts** regenerate the 3D artwork (already generated for you in
`images/hero-illustration.png` and `images/mailbox-illustration.png`).

---

## 1 · Master Prompt (design → code)

> Build a "Contact" page for an eLearning design studio called **edVenture** with
> Next.js (App Router) + Tailwind CSS. Fonts: **Poppins** (headings), **Inter** (body).
> Palette: primary indigo-violet `#4B2FE2`; accent gradient `#8A0FE8 → #249CF2`; ink
> `#0E1220`; muted grey `#5B6472`; hero background lavender `#F4F4FB`; light section
> background `#F7F8FC`; input borders `#DCDFE9`; placeholders `#98A0B3`. Content max-width
> 1200px, horizontal padding 20px. No emoji anywhere — use inline lucide-style SVG line icons.
>
> **1. Fixed white header, 76px tall:** left — hexagon gradient logo (violet→blue) with a
> white "e" curve + wordmark "edVenture" ("Venture" in `#4B2FE2`) and tiny uppercase tagline
> "IMMERSIVE ELEARNING SOLUTIONS"; right — nav links Home / About / Services / Work /
> Contact, 15px medium, dark grey.
>
> **2. Hero on `#F4F4FB`, two columns:** left — small uppercase pill badge
> "LET'S COLLABORATE" (lavender bg `#EEECFA`, thin border, purple text, letter-spaced);
> below it a huge 3-line Poppins-bold heading: "Let's Build / Something /
> **Worth Learning**" where "Worth Learning" is purple→blue gradient clipped text.
> Right — 3D illustration of a woman at a desk with laptop (image asset), no card/box around it.
>
> **3. White "Get in Touch" section, columns `[1fr_1.35fr]`:** left — uppercase purple label
> "GET IN TOUCH" + short 40×3px purple underline; bold heading "We're Here to Help You
> Succeed."; muted paragraph "Tell us about your project and we'll get back to you within 24
> hours."; below that the 3D purple-mailbox illustration. Right — white rounded-2xl card with
> big soft shadow containing a **placeholder-only** form (no visible labels): 2-column grid
> with inputs "Full Name *", "Work Email *", "Company / Organisation", "Phone Number";
> full-width select "Services Interested in" with chevron icon; full-width textarea "Brief
> Project Description"; full-width submit button with horizontal navy→blue gradient
> (`#150F66 → #0B4AE0`), white bold label "Send Message" centred and a white circle holding a
> blue send icon pinned to the right end; below, tiny centred muted line with a lock icon:
> "We respect your privacy. Your information is safe with us."
>
> **4. Light `#F7F8FC` "Quick Connect" section:** centred uppercase purple label + short
> underline + heading "Other Ways to Reach Us"; a 4-up grid of white bordered rounded cards,
> each with a 64px pastel circle + line icon (violet envelope, pink smartphone, teal map-pin,
> blue LinkedIn glyph), bold title, small muted detail. Cards: Email Us →
> admin@edventurehub.com; Call Us → +91-9582232050; Visit Us → Delhi, India; Follow Us →
> "LinkedIn :" + full underlined profile URL.
>
> **5. Full-width bottom CTA bar** with horizontal gradient `#2A1B8F → #1733D9 → #00A6E8`:
> left — white rounded-2xl square with a dark chat-bubble icon + two lines of white text
> "Whether you have a brief ready / or just an idea — we're the right people to talk to.";
> right — white pill button "Book a free Discovery call →" with blue bold text.
>
> Inputs: rounded-lg, 1px `#DCDFE9` border, px-4 py-3, 14px text, purple focus ring.
> Cards lift slightly on hover. Keep generous vertical rhythm (py-16/20 per section).

---

## 2 · Illustration prompts (AI image generation)

### Hero illustration → `public/images/hero-illustration.png`

> Modern soft 3D clay-render illustration for an eLearning website hero, purple and indigo
> palette, on a solid very light lavender background (hex #F4F4FB). A smiling young woman with
> long dark hair, wearing a bright purple sweater, sits behind a dark indigo desk typing on an
> open dark laptop. On the desk: a small purple potted plant on the left and a pale lavender
> mug on the right. Floating around her in the air: a glossy purple rounded-square icon
> containing a white envelope (upper left), a purple paper airplane leaving a dashed looping
> trail (upper right), a purple speech bubble with three white dots (right side), two soft
> white 3D clouds, tiny purple sparkle stars, and small dotted-grid patterns in the corners.
> Clean minimal composition, soft shadows, smooth matte 3D style, no text, no watermark.

### Mailbox illustration → `public/images/mailbox-illustration.png`

> Soft 3D clay-render illustration in a purple palette, isolated on a solid white background.
> A glossy indigo-purple mailbox standing on a short post, its door open, with a pink-red flag
> raised on top. Stylized purple and lavender leaves and plants grow around the base. A small
> purple paper airplane flies up to the right leaving a dashed looping trail behind it. Behind
> the mailbox is a large soft pale-lavender organic blob shape, with a tiny dotted-grid accent
> on the left edge. Smooth matte 3D style, soft studio lighting, no text, no watermark.

---

## 3 · What changed vs. your old code

- Hero: removed the paragraph, underline and emoji-circle collage → replaced with the real 3D
  hero illustration on a full-width `#F4F4FB` band; heading now breaks into 3 lines with the
  gradient on "Worth Learning".
- Form: dropped the labels-above-inputs layout → placeholder-only fields inside a floating
  white card, exactly like the mock; custom chevron on the select; gradient button with the
  white circular send icon at the right edge.
- Left column: added the mailbox illustration under the copy (with the dotted-grid accent).
- Quick Connect cards: emoji badges replaced with line-icon SVGs in pastel circles; LinkedIn
  card now shows the full underlined URL.
- Added the missing full-width gradient "Book a free Discovery call" CTA bar at the bottom.
- Added the fixed 76px header (logo + nav) shown in the mock.
