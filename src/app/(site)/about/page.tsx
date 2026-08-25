import Link from "next/link";
import {
  Lightbulb, Target, PenTool, PieChart, Type, PlayCircle,
  ShieldCheck, Heart, Leaf, Play, Award, Clock, Calendar,
  Box, BarChart3, Layers,
} from "lucide-react";

/* ── Hero Brain Illustration ─── */
function BrainHeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Brain Image */}
      <img
        src="/images/aboutus2.png"
        alt="Edventure eLearning illustration"
        className="h-auto w-full"
      />
    </div>
  );
}

/* ── Mountain Story Illustration ─── */
function MountainIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <img
        src="/images/aboutusmountain.png"
        alt="Edventure eLearning illustration"
        className="h-auto w-full rounded-2xl"
      />
    </div>
  );
}

/* ── Philosophy Illustration ─── */
function PhilosophyArt() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <img
        src="/images/aboutustestimonials.png"
        alt="Our Philosophy - Storytelling illustration"
        className="h-auto w-full"
      />
    </div>
  );
}

/* ── Trophy Illustration ─── */
function TrophyIllustration() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-md">
      <svg viewBox="0 0 320 280" className="h-full w-full" fill="none">
        {/* Pedestal */}
        <rect x="100" y="220" width="120" height="16" rx="4" fill="#E0D4FC" />
        <rect x="110" y="204" width="100" height="16" rx="4" fill="#EDE4FD" />
        <rect x="120" y="188" width="80" height="16" rx="4" fill="#F5F0FF" />

        {/* Trophy cup */}
        <path d="M135 188L135 120C135 110 140 105 150 105H170C180 105 185 110 185 120L185 188H135Z" fill="#FBBF24" />
        <path d="M135 188L135 120C135 110 140 105 150 105H160L160 188H135Z" fill="#F59E0B" />
        {/* Cup rim */}
        <rect x="130" y="100" width="60" height="10" rx="4" fill="#F59E0B" />
        {/* Handles */}
        <path d="M135 115C120 115 115 125 115 140C115 150 122 155 132 152" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M185 115C200 115 205 125 205 140C205 150 198 155 188 152" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" fill="none" />
        {/* Star on cup */}
        <polygon
          points="160,125 163,133 172,133 165,138 167,147 160,142 153,147 155,138 148,133 157,133"
          fill="#FEF3C7"
        />

        {/* "e" ribbon logo */}
        <g transform="translate(220, 160)">
          <rect x="0" y="0" width="50" height="50" rx="12" fill="#4F46E5" />
          <rect x="2" y="2" width="46" height="46" rx="10" fill="#7C3AED" />
          <text x="25" y="36" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="serif">
            e
          </text>
        </g>

        {/* Foliage */}
        <g transform="translate(240, 210)">
          <ellipse cx="0" cy="0" rx="18" ry="26" fill="#8B5CF6" opacity="0.5" />
          <ellipse cx="12" cy="5" rx="14" ry="20" fill="#A78BFA" opacity="0.4" />
        </g>
        <g transform="translate(70, 215)">
          <ellipse cx="0" cy="0" rx="16" ry="22" fill="#7C3AED" opacity="0.4" />
          <ellipse cx="-10" cy="4" rx="12" ry="18" fill="#A78BFA" opacity="0.35" />
        </g>

        {/* Sparkles */}
        <path d="M230 140L232 146L238 148L232 150L230 156L228 150L222 148L228 146Z" fill="#FBBF24" opacity="0.6" />
        <path d="M250 180L251 184L255 185L251 186L250 190L249 186L245 185L249 184Z" fill="#A78BFA" opacity="0.5" />
        <circle cx="260" cy="150" r="2" fill="#818CF8" opacity="0.4" />
        <circle cx="210" cy="130" r="1.5" fill="#A78BFA" opacity="0.4" />
      </svg>
    </div>
  );
}

/* ── Team Avatars ─── */
function AvatarCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-[#FFFDF5] shadow-sm transition hover:shadow-md">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

/* ── Why-Choose Feature Item ─── */
function FeatureItem({
  icon,
  iconBg,
  bold,
  rest,
}: {
  icon: React.ReactNode;
  iconBg: string;
  bold: string;
  rest: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg}`}>
        {icon}
      </div>
      <p className="text-sm leading-relaxed text-gray-600">
        <span className="font-semibold text-gray-900">{bold}</span> {rest}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════ */

export default function About() {
  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-8 py-16 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold tracking-wider text-purple-700 uppercase">
            Our Purpose
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Where Instructional Design Meets{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-400 bg-clip-text text-transparent">
              Creative Vision
            </span>
          </h1>
          <div className="mt-4 h-1 w-16 rounded bg-gradient-to-r from-purple-600 to-indigo-600" />
          <p className="mt-6 max-w-lg text-lg text-gray-600">
            Born in 2022, Edventure eLearning Hub was founded with one mission — to make workplace learning genuinely
            engaging, beautifully designed, and results-driven.
          </p>
        </div>
        <BrainHeroIllustration />
      </section>

      {/* ══════════ OUR STORY ═══════════ */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-8 py-16 lg:grid-cols-2">
        <MountainIllustration />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <div className="mt-2 h-1 w-12 rounded bg-gradient-to-r from-purple-600 to-indigo-600" />
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              Edventure eLearning Hub was established in 2022 by{" "}
              <strong className="text-gray-900">Vartika Jain</strong>, an experienced Instructional Designer with a
              passion for transforming dry training content into compelling learning journeys.
            </p>
            <p>
              What started as a vision — <em>that learning doesn't have to be boring</em> — has grown into a full-service
              eLearning studio. Vartika leads a multidisciplinary team of Storyline developers, graphic designers, video
              artists, and instructional designers who collectively bring expertise, creativity, and precision to every
              project.
            </p>
            <p>
              We work across industries, serving clients from energy giants to health &amp; wellness brands — delivering
              content that educates, engages, and empowers.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ PHILOSOPHY BANNER ═══════════ */}
      <section className="mx-auto my-8 max-w-7xl px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#edeafb] p-6 md:px-14 md:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:pr-10">
          <div className="lg:max-w-xl">
            <h2 className="text-lg font-semibold text-gray-900">Our Philosophy</h2>
            <div className="mt-2 h-0.5 w-9 rounded bg-gray-600" />
            <h3 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">Storytelling is our superpower.</h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
              <p>
                Every module we create starts with a story. Not slides. Not bullet points. A narrative that puts the
                learner at the center — with context, conflict, and resolution.
              </p>
              <p>Because that's how humans learn.</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center lg:mt-0 lg:w-96">
            <PhilosophyArt />
          </div>
        </div>
      </section>

      {/* ═══════════ THE TEAM ═══════════ */}
      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            The <span className="underline decoration-purple-400 decoration-2 underline-offset-4">Team</span>
          </h2>
          <p className="mt-2 text-gray-600">Meet the minds behind the magic:</p>
        </div>
        <p className="mt-4 text-right text-sm font-semibold text-gray-600 hover:text-purple-600">
          View all →
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
          <AvatarCard src="/images/team1.png" alt="Team member 1" />
          <AvatarCard src="/images/team2.png" alt="Team member 2" />
          <AvatarCard src="/images/team3.png" alt="Team member 3" />
          <AvatarCard src="/images/team4.png" alt="Team member 4" />
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE ═══════════ */}
      <section className="bg-[#EEF2FF] px-8 py-16">
        <h2 className="mx-auto mb-10 max-w-7xl text-3xl font-extrabold text-gray-900 md:text-4xl">
          Why choose <span className="text-purple-700">edVenture?</span>
        </h2>
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
            <FeatureItem
              icon={<Lightbulb className="h-6 w-6 text-purple-600" />}
              iconBg="bg-purple-50"
              bold="Founded and led"
              rest="by a practicing Instructional Designer — not a sales team"
            />
            <FeatureItem
              icon={<Clock className="h-6 w-6 text-blue-600" />}
              iconBg="bg-blue-50"
              bold="Strong Tech & Support"
              rest="ensuring smooth delivery, hosting, and integration"
            />
            <FeatureItem
              icon={<Layers className="h-6 w-6 text-pink-600" />}
              iconBg="bg-pink-50"
              bold="End-to-end eLearning"
              rest="capability under one roof"
            />
            <FeatureItem
              icon={<Award className="h-6 w-6 text-rose-600" />}
              iconBg="bg-rose-50"
              bold="Competitive pricing"
              rest="with no compromise on quality"
            />
            <FeatureItem
              icon={<BarChart3 className="h-6 w-6 text-gray-600" />}
              iconBg="bg-gray-100"
              bold="Story-driven approach"
              rest="that drives real learner engagement"
            />
            <FeatureItem
              icon={<Calendar className="h-6 w-6 text-purple-600" />}
              iconBg="bg-purple-50"
              bold="Faster turnaround"
              rest="times that keep your projects on schedule"
            />
          </div>
          <div className="lg:col-span-4">
            <TrophyIllustration />
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="mt-16 flex flex-col items-center justify-between gap-4 bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 px-8 py-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
            <Calendar className="h-6 w-6 text-blue-900" />
          </div>
          <div>
            <p className="text-sm text-blue-100 md:text-base">Not sure which format fits your need?</p>
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
