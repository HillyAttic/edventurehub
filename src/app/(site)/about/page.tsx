import Link from "next/link";
import {
  Lightbulb,
  BookOpen,
  GraduationCap,
  Rocket,
  Search,
  FileText,
  Monitor,
  Users,
  CloudDownload,
  Calendar,
  Tag,
  BadgeCheck,
  Clock,
  ShieldCheck,
  IndianRupee,
} from "lucide-react";

/* ── Data ─── */

const pillars = [
  {
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Story-First Methodology",
    titleColor: "text-indigo-900",
    dotColor: "bg-purple-500",
    body: "Most eLearning fails because it lectures. We design every module around a narrative — characters, scenarios, conflict, resolution. Learning through story is not a trend; it's how the human brain is wired.",
    icons: (
      <>
        <Tag className="h-6 w-6 text-purple-600" />
        <IndianRupee className="h-5 w-5 text-purple-400 -ml-1 -mt-1" />
        <BadgeCheck className="h-5 w-5 text-green-500 absolute -right-1 -bottom-1" />
      </>
    ),
  },
  {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Faster Turnaround, Zero Compromise",
    titleColor: "text-blue-900",
    dotColor: "bg-blue-500",
    body: "Speed without sacrifice. Our streamlined production process and experienced team allow us to deliver high-quality modules faster than industry standard — without cutting corners on design or instructional integrity.",
    icons: (
      <>
        <Clock className="h-7 w-7 text-blue-600" />
        <ShieldCheck className="h-5 w-5 text-blue-400 absolute -right-0.5 -bottom-0.5" />
      </>
    ),
  },
  {
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Competitive & Transparent Pricing",
    titleColor: "text-purple-900",
    dotColor: "bg-purple-500",
    body: "Enterprise-quality eLearning shouldn't be exclusive to enterprise budgets. We offer honest, competitive pricing — whether you're an MNC or a growing startup.",
    icons: (
      <>
        <BookOpen className="h-7 w-7 text-violet-600" />
        <Lightbulb className="h-5 w-5 text-amber-400 absolute -right-0.5 -top-0.5" />
      </>
    ),
  },
  {
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    title: "Design That Elevates",
    titleColor: "text-sky-900",
    dotColor: "bg-sky-500",
    body: "Our graphic designers and video artists don't just make things look good — they make learning feel premium. Visual quality signals credibility and keeps learners engaged.",
    icons: (
      <>
        <GraduationCap className="h-7 w-7 text-sky-600" />
        <Rocket className="h-5 w-5 text-sky-400 absolute -right-0.5 -bottom-0.5" />
      </>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    badgeBg: "bg-pink-100 text-pink-600",
    containerBg: "bg-pink-50",
    title: "Discovery",
    titleColor: "text-pink-600",
    desc: "Understand your learning objectives, audience, and constraints",
    icon: <Search className="h-8 w-8 text-pink-500" />,
  },
  {
    num: "02",
    badgeBg: "bg-blue-100 text-blue-600",
    containerBg: "bg-blue-50",
    title: "Storyboard",
    titleColor: "text-blue-600",
    desc: "Script and structure content with a narrative arc",
    icon: <FileText className="h-8 w-8 text-blue-500" />,
  },
  {
    num: "03",
    badgeBg: "bg-pink-100 text-pink-600",
    containerBg: "bg-pink-50",
    title: "Design & Develop",
    titleColor: "text-pink-600",
    desc: "Build with Storyline, motion graphics, and visual design",
    icon: <Monitor className="h-8 w-8 text-pink-500" />,
  },
  {
    num: "04",
    badgeBg: "bg-orange-100 text-orange-500",
    containerBg: "bg-orange-50",
    title: "Review Cycles",
    titleColor: "text-orange-500",
    desc: "Collaborative feedback and iteration",
    icon: <Users className="h-8 w-8 text-orange-500" />,
  },
  {
    num: "05",
    badgeBg: "bg-teal-100 text-teal-600",
    containerBg: "bg-teal-50",
    title: "Deliver",
    titleColor: "text-teal-600",
    desc: "SCORM package, LMS upload, or as required",
    icon: <CloudDownload className="h-8 w-8 text-teal-500" />,
  },
];

/* ─ Hero Illustration ─── */

function HeroIllustration() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-xl">
      <svg viewBox="0 0 500 420" className="h-full w-full" fill="none">
        {/* Background soft gradient blobs */}
        <defs>
          <linearGradient id="beanbag" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="monitorFrame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="screenBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* Floating bookshelf on left */}
        <g transform="translate(30, 140)">
          <rect x="0" y="0" width="70" height="10" rx="3" fill="#7c3aed" opacity="0.8" />
          <rect x="5" y="-30" width="12" height="30" rx="2" fill="#a78bfa" opacity="0.9" />
          <rect x="20" y="-25" width="10" height="25" rx="2" fill="#c4b5fd" />
          <rect x="33" y="-35" width="11" height="35" rx="2" fill="#8b5cf6" />
          {/* Plant on shelf */}
          <rect x="48" y="-15" width="16" height="15" rx="2" fill="#d4a373" />
          <ellipse cx="56" cy="-25" rx="12" ry="14" fill="url(#leafGrad)" opacity="0.8" />
          <ellipse cx="50" cy="-30" rx="8" ry="10" fill="#a78bfa" opacity="0.6" />
        </g>

        {/* Beanbag chair */}
        <ellipse cx="180" cy="340" rx="80" ry="50" fill="url(#beanbag)" />
        <ellipse cx="180" cy="325" rx="70" ry="35" fill="#8b5cf6" opacity="0.5" />

        {/* Woman sitting on beanbag */}
        {/* Legs */}
        <rect x="190" y="280" width="14" height="60" rx="6" fill="#e2d1f9" />
        <rect x="210" y="280" width="14" height="60" rx="6" fill="#d4b8f0" />
        {/* Body / torso in purple outfit */}
        <ellipse cx="200" cy="260" rx="30" ry="40" fill="#7c3aed" />
        {/* Arms */}
        <rect x="170" y="250" width="12" height="30" rx="6" fill="#d4a574" transform="rotate(-15, 176, 265)" />
        <rect x="220" y="250" width="12" height="25" rx="6" fill="#d4a574" transform="rotate(20, 226, 262)" />
        {/* Head */}
        <ellipse cx="200" cy="210" rx="28" ry="32" fill="#d4a574" />
        {/* Hair */}
        <ellipse cx="200" cy="198" rx="32" ry="22" fill="#2d1b69" />
        <rect x="172" y="200" width="8" height="40" rx="4" fill="#2d1b69" />
        <rect x="220" y="200" width="8" height="35" rx="4" fill="#2d1b69" />
        {/* Face */}
        <ellipse cx="192" cy="212" rx="3" ry="2.5" fill="#1e1e1e" />
        <ellipse cx="210" cy="212" rx="3" ry="2.5" fill="#1e1e1e" />
        <path d="M194 222 Q200 227 206 222" fill="none" stroke="#1e1e1e" strokeWidth="1.5" />
        {/* Laptop on lap */}
        <rect x="175" y="270" width="50" height="8" rx="2" fill="#475569" />
        <rect x="180" y="255" width="40" height="16" rx="2" fill="#1e293b" />
        <rect x="183" y="258" width="34" height="10" rx="1" fill="#38bdf8" opacity="0.6" />

        {/* Desktop Monitor - center right */}
        <g transform="translate(260, 100)">
          {/* Monitor frame */}
          <rect x="0" y="0" width="160" height="120" rx="8" fill="url(#monitorFrame)" />
          {/* Screen */}
          <rect x="6" y="6" width="148" height="100" rx="4" fill="url(#screenBg)" />
          {/* Video interface */}
          <rect x="16" y="16" width="128" height="60" rx="4" fill="white" />
          {/* Play button */}
          <circle cx="80" cy="46" r="16" fill="#7c3aed" opacity="0.9" />
          <polygon points="75,38 75,54 90,46" fill="white" />
          {/* Video thumbnail bars */}
          <rect x="16" y="84" width="30" height="4" rx="2" fill="#94a3b8" opacity="0.5" />
          <rect x="16" y="92" width="50" height="3" rx="1.5" fill="#cbd5e1" opacity="0.4" />
          {/* Sidebar items */}
          <rect x="115" y="16" width="30" height="8" rx="2" fill="#e2e8f0" />
          <rect x="115" y="28" width="30" height="8" rx="2" fill="#e2e8f0" />
          <rect x="115" y="40" width="30" height="8" rx="2" fill="#e2e8f0" />
          {/* Monitor dots */}
          <circle cx="16" cy="3" r="2" fill="#ef4444" />
          <circle cx="24" cy="3" r="2" fill="#fbbf24" />
          <circle cx="32" cy="3" r="2" fill="#22c55e" />
          {/* Stand */}
          <rect x="70" y="120" width="20" height="16" rx="2" fill="#64748b" />
          <rect x="55" y="136" width="50" height="6" rx="3" fill="#475569" />
        </g>

        {/* Man standing on right with stylus */}
        <g transform="translate(380, 160)">
          {/* Legs */}
          <rect x="10" y="120" width="14" height="60" rx="6" fill="#1e3a5f" />
          <rect x="30" y="120" width="14" height="60" rx="6" fill="#1e3a5f" />
          {/* Shoes */}
          <ellipse cx="17" cy="182" rx="12" ry="6" fill="#1e1e1e" />
          <ellipse cx="37" cy="182" rx="12" ry="6" fill="#1e1e1e" />
          {/* Body */}
          <rect x="5" y="50" width="45" height="75" rx="8" fill="#93c5fd" />
          {/* Neck */}
          <rect x="20" y="35" width="14" height="20" rx="4" fill="#d4a574" />
          {/* Head */}
          <ellipse cx="27" cy="25" rx="22" ry="26" fill="#d4a574" />
          {/* Hair */}
          <ellipse cx="27" cy="15" rx="24" ry="16" fill="#2d1b69" />
          {/* Face */}
          <ellipse cx="20" cy="25" rx="2.5" ry="2" fill="#1e1e1e" />
          <ellipse cx="34" cy="25" rx="2.5" ry="2" fill="#1e1e1e" />
          <path d="M22 34 Q27 38 32 34" fill="none" stroke="#1e1e1e" strokeWidth="1.5" />
          {/* Arm pointing with stylus */}
          <rect x="-15" y="55" width="25" height="10" rx="5" fill="#93c5fd" transform="rotate(-25, -2, 60)" />
          {/* Stylus */}
          <line x1="-15" y1="52" x2="-40" y2="40" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          {/* Other arm */}
          <rect x="45" y="55" width="12" height="30" rx="6" fill="#93c5fd" />
          {/* Clipboard */}
          <rect x="42" y="75" width="20" height="25" rx="2" fill="#1e293b" />
        </g>

        {/* Glowing lightbulb above monitor */}
        <g transform="translate(310, 50)">
          <ellipse cx="20" cy="20" rx="16" ry="20" fill="#fbbf24" opacity="0.9" />
          <rect x="14" y="38" width="12" height="8" rx="2" fill="#f59e0b" />
          {/* Glow */}
          <circle cx="20" cy="18" r="22" fill="#fbbf24" opacity="0.15" />
          <line x1="20" y1="-8" x2="20" y2="-14" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="4" x2="38" y2="0" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="4" x2="2" y2="0" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Floating decorative elements */}
        <circle cx="450" cy="100" r="6" fill="#c4b5fd" opacity="0.5" />
        <circle cx="470" cy="130" r="4" fill="#a78bfa" opacity="0.4" />
        <circle cx="100" cy="100" r="5" fill="#e0d4fc" opacity="0.5" />

        {/* Floor shadow */}
        <ellipse cx="250" cy="380" rx="200" ry="12" fill="#e2e8f0" opacity="0.4" />
      </svg>
    </div>
  );
}

/* ── Pillar Card Icon ─── */

function PillarIcon({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <div className={`relative flex h-20 w-20 items-center justify-center rounded-full ${bg} shadow-sm`}>
      <div className="relative flex items-center justify-center">{children}</div>
    </div>
  );
}

/* ── Pagination Dots ─── */

function Dots({ activeIndex, color }: { activeIndex: number; color: string }) {
  return (
    <div className="mt-auto flex gap-1.5 pt-4">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${i === activeIndex ? color : "bg-gray-300"}`}
        />
      ))}
    </div>
  );
}

/* ─ Page ─── */

export default function About() {
  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-8 py-16 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold tracking-wider text-purple-700 uppercase">
            Our Philosophy
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            We Build{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400 bg-clip-text text-transparent">
              Learning That Works.
            </span>
          </h1>
        </div>
        <HeroIllustration />
      </section>

      {/* ══════════ 4 PILLARS ═══════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-3 text-center text-3xl font-bold text-gray-900">
            The edVenture Edge — 4 Pillars
          </h2>
          <div className="mx-auto mb-12 h-1 w-24 rounded bg-gradient-to-r from-indigo-600 to-purple-500" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="flex flex-col items-center rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <PillarIcon bg={p.iconBg}>{p.icons}</PillarIcon>
                <h3 className={`mt-5 mb-3 text-lg font-bold ${p.titleColor}`}>{p.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-500">{p.body}</p>
                <Dots activeIndex={i} color={p.dotColor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className="bg-white py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Our Process</h2>

        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 md:flex-nowrap">
          {/* Dashed connector line */}
          <div className="absolute left-10 right-10 top-12 hidden h-0.5 border-t-2 border-dashed border-gray-300 md:block" />

          {processSteps.map((s, i) => (
            <div key={i} className="relative z-10 flex w-36 flex-col items-center text-center md:w-auto md:flex-1">
              <span className={`absolute -top-2 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-xs font-bold ${s.badgeBg}`}>
                {s.num}
              </span>
              <div className={`flex h-24 w-24 items-center justify-center rounded-full ${s.containerBg} shadow-sm`}>
                {s.icon}
              </div>
              <h4 className={`mt-4 text-lg font-bold ${s.titleColor}`}>{s.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="mt-20 flex flex-col items-center justify-between gap-4 bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 px-8 py-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
            <Calendar className="h-6 w-6 text-blue-900" />
          </div>
          <div>
            <p className="text-sm text-blue-100 md:text-base">
              Not sure which format fits your need?
            </p>
            <p className="text-base font-semibold text-white md:text-lg">
              Book a Free Discovery Call — We'll help you figure it out.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-900 shadow-md transition hover:bg-gray-100"
        >
          Book a free Discovery call
          <span className="text-lg">→</span>
        </Link>
      </section>
    </div>
  );
}
