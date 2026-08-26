/*
 * Services section — pixel-matched to the reference design.
 *
 * - 4-column grid (12 cards) + a WIDE HORIZONTAL 13th card, centered below
 * - Icon tiles are 112px (r=22) and carry the reference illustration + pastel
 *   tint baked into the image (/public/icons/services/*.png)
 * - Big violet numbers, 24px bold titles, 15px two-line-clamped descriptions
 * - 44px circular arrow (violet →) bottom-right, fills primary→purple on hover
 *
 * Uses your existing tokens: font-heading, text-ink, card-hover,
 * from-primary, to-purple. Swap hex values for your tokens where you have
 * equivalents.
 */

type Service = {
  no: string;
  title: string;
  description: string;
  icon: string; // /public/icons/services/xxx.png
  emoji: string; // fallback if the image is missing
};

const SERVICES: Service[] = [
  { no: "01", title: "LMS Setup & Management", description: "Set up, configure, and launch your Learning Management System with seamless integrations and reporting.", icon: "/icons/services/lms.png", emoji: "🖥️" },
  { no: "02", title: "SCORM Module Development", description: "Interactive, standards-compliant SCORM modules that play flawlessly across every LMS.", icon: "/icons/services/scorm.png", emoji: "🧩" },
  { no: "03", title: "Gamified Learning Modules", description: "Game mechanics and challenges that turn passive learners into active participants.", icon: "/icons/services/gamified.png", emoji: "🎮" },
  { no: "04", title: "ILT & VILT Decks", description: "Facilitator-ready decks designed for engaging instructor-led and virtual classrooms.", icon: "/icons/services/ilt.png", emoji: "🎓" },
  { no: "05", title: "Microlearning Nuggets", description: "Bite-sized, mobile-first learning nuggets built for busy, on-the-go learners.", icon: "/icons/services/microlearning.png", emoji: "📱" },
  { no: "06", title: "Video-Based Training", description: "Scripted, shot, and animated training videos that simplify complex processes.", icon: "/icons/services/video.png", emoji: "🎬" },
  { no: "07", title: "Instructional Design Consulting", description: "Strategic guidance on learning architecture, blended pathways, and outcomes.", icon: "/icons/services/instructional.png", emoji: "💡" },
  { no: "08", title: "Storyboarding & Script Writing", description: "Narrative-driven storyboards and scripts that give every module a strong spine.", icon: "/icons/services/storyboard.png", emoji: "📝" },
  { no: "09", title: "Content Conversion & Modernization", description: "Revamp legacy PPTs and PDFs into modern, interactive digital experiences.", icon: "/icons/services/conversion.png", emoji: "🔄" },
  { no: "10", title: "Translation & Localization", description: "Culturally-tuned localization so your training resonates in every market.", icon: "/icons/services/translation.png", emoji: "🌐" },
  { no: "11", title: "Learning Campaigns", description: "End-to-end awareness and learning campaigns that drive measurable engagement.", icon: "/icons/services/campaigns.png", emoji: "🎯" },
  { no: "12", title: "Learning Portal Creation", description: "Branded learning portals that bring together your content in one seamless hub.", icon: "/icons/services/portal.png", emoji: "🚀" },
  { no: "13", title: "Promotional & Buzz Videos", description: "High-energy promotional and buzz videos that build excitement for new launches.", icon: "/icons/services/promo.png", emoji: "📣" },
];

function ArrowButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EC] bg-white text-[#8B3DFF] shadow-[0_1px_2px_rgba(23,23,43,0.05)] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple group-hover:text-white"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

function IconTile({ service }: { service: Service }) {
  return (
    <div className="h-[112px] w-[112px] shrink-0 overflow-hidden rounded-[22px] bg-white">
      <img
        src={service.icon}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        onError={(e) => {
          // Fallback: swap the broken image for the emoji
          const img = e.currentTarget;
          const span = document.createElement("span");
          span.className =
            "flex h-full w-full items-center justify-center text-5xl";
          span.textContent = service.emoji;
          img.replaceWith(span);
        }}
      />
    </div>
  );
}

/* Vertical card — first 12 services */
function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-hover group relative flex flex-col rounded-[28px] border border-[#E4E4EC] bg-white px-2.5 pb-2 pt-4 shadow-[0_2px_12px_rgba(23,23,43,0.05)]">
      <IconTile service={service} />

      <p className="mt-[46px] text-lg font-extrabold leading-none text-[#7C3AED]">
        {service.no}
      </p>
      <h3 className="mt-4 line-clamp-2 font-heading text-2xl font-bold leading-[1.4] text-ink">
        {service.title}
      </h3>
      <p className="mt-11 line-clamp-2 min-h-[42px] text-[15px] leading-[1.4] text-[#808595]">
        {service.description}
      </p>

      <div className="absolute bottom-[46px] right-2">
        <ArrowButton label={`View details: ${service.title}`} />
      </div>
    </article>
  );
}

/* Wide horizontal card — 13th service, centered below the grid */
function ServiceCardWide({ service }: { service: Service }) {
  return (
    <article className="card-hover group flex w-full max-w-[570px] items-center gap-11 rounded-[28px] border border-[#E4E4EC] bg-white py-4 pl-[46px] pr-2.5 shadow-[0_2px_12px_rgba(23,23,43,0.05)]">
      <IconTile service={service} />

      <div className="min-w-0 flex-1">
        <p className="text-lg font-extrabold leading-none text-[#7C3AED]">
          {service.no}
        </p>
        <h3 className="mt-1.5 font-heading text-2xl font-bold leading-tight text-ink">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[15px] leading-[1.4] text-[#808595]">
          {service.description}
        </p>
      </div>

      <div className="self-end">
        <ArrowButton label={`View details: ${service.title}`} />
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-white pb-20 pt-12">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-center font-heading text-[28px] font-bold text-ink sm:text-[32px] md:text-[38px]">
          Services
        </h2>

        {/* First 12 cards fill the 4-column grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 12).map((service) => (
            <ServiceCard key={service.no} service={service} />
          ))}
        </div>

        {/* 13th card — wide, horizontal, centered */}
        <div className="mt-6 flex justify-center">
          <ServiceCardWide service={SERVICES[12]} />
        </div>
      </div>
    </section>
  );
}
