# Prompt to Recreate the "Our Projects. Our Impact." Section

## Design Description

Create a hero section for an edVenture (eLearning Solutions) website featuring a two-column layout. The left column contains text content and the right column displays an illustrative SVG graphic.

### Layout Requirements
- **Layout**: Two-column grid on desktop (60/40 split), single column on mobile
- **Max width**: 1200px, centered
- **Padding**: 80px vertical (40px on mobile), 20px horizontal
- **Background**: White/transparent

### Left Column (Text Content)
1. **Badge/Pill**: "OUR PROJECTS" - small uppercase pill badge with purple border, purple text, rounded full, light purple background
2. **Heading**: "Our Projects. Our Impact." - Bold, 44px on desktop (34px mobile), dark ink color
   - "Our Impact." uses a gradient text effect (indigo → purple → violet)
3. **Underline**: A short horizontal line/separator below the heading
4. **Paragraph**: "We've partnered with organizations across energy, healthcare, education, and retail to deliver learning that works." - Muted gray color, max width, relaxed line height

### Right Column (Illustration)
A flat-style illustration with the following elements arranged in a decorative composition:
- **Background elements**: Soft pastel colored rounded rectangles/cards with icons representing:
  - Energy (wind turbine, solar panel) - top area
  - Healthcare (shield/plus) - top right
  - Education (graduation cap) - left area
  - Retail/Shopping (cart icon) - right area
- **Globe**: A large semi-transparent globe/earth shape in the center background (light purple tones)
- **Main characters**: Two people shaking hands in the center (a man in blue, a woman in purple)
- **Side characters**: Two women on left and right with laptops (working)
- **Bottom characters**: Two people at desks/computers (illustrative figures)
- **Plant elements**: Small green leaf/plant decorations at bottom corners
- **Color palette**: 
  - Primary: Indigo (#4F46E5), Purple (#7C3AED), Violet (#9F7AEA)
  - Secondary: Blue (#3B82F6), Sky (#93C5FD)
  - Accents: Yellow/Amber (#F59E0B), Green (#10B981)
  - Skin tones: Peach/pink (#FDBCB4)
  - Backgrounds: Light purple (#E8E0F0), Light blue (#E0F2FE)
  - Text: Dark (#1E293B), Muted (#94A3B8)
- **Style**: Flat vector illustration, soft shadows, rounded corners, friendly/professional
- **Overlay**: Soft blur/gradient glow behind the illustration (indigo/purple/sky gradient)

### Typography
- Font: Sans-serif (system font or Inter/Poppins)
- Heading: Bold (700-800 weight)
- Body: Regular (400-500 weight), 16px, line-height 1.75

### Responsive Behavior
- Mobile: Single column, stacked (text above illustration)
- Tablet/Desktop: Side-by-side grid
- Illustration scales proportionally

### CSS Classes Used
- `.badge-pill` - Purple bordered pill badge
- `.gradient-text` - Indigo→purple→violet gradient text
- `.section-underline` - Short horizontal line separator
- `.text-ink` - Dark text color
- `.text-muted` - Gray muted text

### Technical Implementation
- Next.js App Router component
- Tailwind CSS for styling
- Inline SVG for the illustration (no external images)
- Responsive design with media queries or Tailwind breakpoints
- Smooth hover/animation effects optional

### Color Variables
```
--ink: #1a1a2e or similar dark
--muted: #6b7280 or similar gray
--indigo: #4F46E5
--purple: #7C3AED
--violet: #9F7AEA
--blue: #3B82F6
--sky: #93C5FD
--amber: #F59E0B
--green: #10B981
--peach: #FDBCB4
--light-purple: #E8E0F0
--light-blue: #E0F2FE
```