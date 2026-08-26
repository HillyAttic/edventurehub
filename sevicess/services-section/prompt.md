# Design Prompt — "Services" Section (exact-match spec v2)

> Copy-paste into ChatGPT / Claude / Cursor or hand to a developer:

Build a **Services** section for a learning-technology website with this exact design:

**Layout.** Full-width white section (48px top / 80px bottom padding), content capped at 1200px with 20px side padding. Centered heading "Services" — bold, 38px on desktop (28px mobile / 32px tablet), near-black ink (#17172B), no underline, no badge. 32px spacing between the heading and the grid.

**Grid.** A 13-service layout: the first **12 cards** form a 4-column grid (24px gap; 2 columns on tablet, 1 on mobile), filling exactly 3 rows. The **13th card is different** — a wide **horizontal** card (≈570px wide) sitting alone in the last row, **horizontally centered**.

**Vertical card (12).** White surface, 28px radius, 1px border #E4E4EC, shadow 0 2px 12px rgba(23,23,43,.05), padding 16px top / 10px sides / 8px bottom, flex column, equal heights per row. Hover: lift 6px + soft violet shadow, 300ms ease.
- **Icon tile** — 112×112px, 22px radius, holding a flat illustration on a soft pastel tint (lavender / pink / mint / peach — one tint per card, brighter toward the center, rounded square).
- **Index number** — "01"–"12", 18px extra-bold, violet #7C3AED, ~46px below the tile.
- **Title** — 24px bold, ink #17172B, line-height 1.4, max 2 lines.
- **Description** — 15px, gray #808595, line-height 1.4, clamped to exactly 2 lines with ellipsis, ~44px below the title.
- **Arrow button** — 44px circle, white, 1px #E4E4EC border, **violet → arrow (#8B3DFF)**, absolutely positioned bottom-right (8px from right, ~46px from bottom, so it floats beside the description). On card hover: fills with a primary→purple gradient, arrow turns white.

**Wide card (13).** Same surface/border/shadow; horizontal flex row, 44px gap: icon tile (112px, left) · text block (number, one-line 24px title, 2-line-clamped description) · 44px arrow circle at the bottom-right. 46px left padding, 16px top/bottom.

**Content (13 cards).** LMS Setup & Management · SCORM Module Development · Gamified Learning Modules · ILT & VILT Decks · Microlearning Nuggets · Video-Based Training · Instructional Design Consulting · Storyboarding & Script Writing · Content Conversion & Modernization · Translation & Localization · Learning Campaigns · Learning Portal Creation · Promotional & Buzz Videos.
