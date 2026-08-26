# Our Projects Section – Complete Implementation

## 📋 Prompt to Recreate This Design

Use the following prompt with any AI image/design tool (DALL-E, Midjourney, Figma AI, etc.) to recreate the illustration:

```
Create a flat vector illustration for an eLearning platform website section called "Our Projects. Our Impact." 

The illustration should feature:
- A large semi-transparent globe/earth in the center background with soft purple tones
- Two people shaking hands in the center (a man in blue, a woman in purple) - representing partnership
- Various icon cards floating around the globe:
  - Energy: wind turbine and solar panel icons (top-left area)
  - Healthcare: shield with plus sign (top-right area)  
  - Education: graduation cap icon (top-center area)
  - Retail: shopping cart icon (right area)
- Two women on the sides working with laptops
- Two people sitting at desks with computers at the bottom
- Small green plant/leaf decorations at bottom corners
- Location pins on the globe

Style: Flat vector, soft pastel colors, friendly and professional
Color palette: Indigo (#4F46E5), Purple (#7C3AED), Violet (#9F7AEA), Blue (#3B82F6), Sky (#93C5FD), Amber (#F59E0B), Green (#10B981)
Background: White with soft gradient glow (indigo/purple/sky)
Soft shadows, rounded corners throughout
No text in the illustration
Professional eLearning/education platform aesthetic
```

---

## 🏗️ Next.js Implementation

### File Structure
```
your-nextjs-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── OurProjectsSection.tsx
├── tailwind.config.ts
├── package.json
└── next.config.js
```

### 1. Install Dependencies

```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
npm install
```

### 2. Setup Tailwind Config

**tailwind.config.ts** – Already included in this project. Key custom colors:
- `ink`: Dark text color (#1a1a2e)
- `muted`: Gray text color (#6b7280)
- `indigo`, `purple`, `violet`, `blue`, `sky`, `amber`, `green`, `peach`
- `light-purple`, `light-blue`

### 3. Add Google Fonts

In `layout.tsx`, add:
```tsx
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
```

### 4. Use the Component

In your page:
```tsx
import OurProjectsSection from "@/components/OurProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <OurProjectsSection />
    </main>
  );
}
```

---

## 🎨 Design Specification

### Layout
- **Max Width**: 1200px
- **Grid**: 2 columns on desktop (60/40 split), 1 column on mobile
- **Padding**: 80px vertical, 20px horizontal

### Left Column (Text)
1. **Badge**: "OUR PROJECTS" – Purple bordered pill, uppercase, 13px, rounded full
2. **Heading**: "Our Projects. Our Impact." – Bold 44px, dark ink
   - "Our Impact." uses indigo → purple → violet gradient
3. **Underline**: 60px wide, 4px height, gradient (indigo → purple → violet)
4. **Paragraph**: 16px, muted gray, relaxed line height, max-width 512px

### Right Column (Illustration)
- SVG illustration with soft glow background
- Flat vector style with rounded corners
- Color palette: Indigo/Purple/Violet primary, Blue/Sky secondary, Amber/Green accents
- Characters: Peach skin tones, blue/purple clothing
- Globe: Light purple with dashed grid lines
- Location pins: Purple and blue
- Card backgrounds: Light purple, light blue, light amber
- Plant decorations: Green and mint

### Responsive Breakpoints
- **Mobile** (< 768px): Single column, stacked
- **Desktop** (≥ 768px): Side-by-side grid

---

## 📝 Key CSS Classes

| Class | Description |
|-------|-------------|
| `.badge-pill` | Purple bordered pill badge |
| `.gradient-text` | Indigo→Purple→Violet gradient text |
| `.section-underline` | Short horizontal gradient line |
| `.text-ink` | Dark text color |
| `.text-muted` | Gray muted text |
| `.font-heading` | Inter/Poppins font family |

---

## 🚀 Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the section.