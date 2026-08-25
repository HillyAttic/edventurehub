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
    <div className="relative mx-auto h-[280px] w-full max-w-sm">
      <svg viewBox="0 0 260 260" className="h-full w-full" fill="none">
        {/* Glow circle */}
        <circle cx="130" cy="130" r="90" fill="#EDE9FE" opacity="0.5" />

        {/* Left hand */}
        <path d="M70 180C60 160 65 130 80 120C90 113 105 115 115 125L115 180Z" fill="#C4B5FD" opacity="0.7" />
        <path d="M80 170C75 155 78 135 88 128" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />

        {/* Right hand */}
        <path d="M190 180C200 160 195 130 180 120C170 113 155 115 145 125L145 180Z" fill="#C4B5FD" opacity="0.7" />
        <path d="M180 170C185 155 182 135 172 128" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />

        {/* Lightbulb */}
        <ellipse cx="130" cy="95" rx="22" ry="28" fill="#FDE68A" opacity="0.9" />
        <ellipse cx="130" cy="95" rx="16" ry="22" fill="#FCD34D" />
        {/* Bulb base */}
        <rect x="122" y="120" width="16" height="8" rx="2" fill="#D4A373" />
        {/* Filament / heart */}
        <path
          d="M126 90C126 85 130 82 130 87C130 82 134 85 134 90C134 94 130 98 130 98C130 98 126 94 126 90Z"
          fill="#F97316"
          opacity="0.7"
        />
        {/* Glow */}
        <circle cx="130" cy="90" r="35" fill="#FDE68A" opacity="0.12" />

        {/* Surrounding icons */}
        {/* Top: Person with heart */}
        <circle cx="130" cy="38" r="16" fill="white" opacity="0.8" />
        <circle cx="130" cy="34" r="5" fill="#7C3AED" />
        <path d="M124 40C124 36 136 36 136 40L136 46H124Z" fill="#7C3AED" />
        <path d="M128 34C128 32 130 31 130 33C130 31 132 32 132 34C132 36 130 38 130 38C130 38 128 36 128 34Z" fill="#EF4444" opacity="0.8" />

        {/* Top-right: Target */}
        <circle cx="200" cy="60" r="16" fill="white" opacity="0.8" />
        <circle cx="200" cy="60" r="10" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="200" cy="60" r="5" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="200" cy="60" r="2" fill="#7C3AED" />

        {/* Top-left: Lightbulb small */}
        <circle cx="60" cy="60" r="16" fill="white" opacity="0.8" />
        <path d="M56 58C56 54 60 52 60 56C60 52 64 54 64 58C64 62 60 64 60 66C60 64 56 62 56 58Z" fill="#F59E0B" />

        {/* Bottom-left: Shield */}
        <circle cx="60" cy="170" r="16" fill="white" opacity="0.8" />
        <path d="M55 168L60 165L65 168L65 173C65 175 62 177 60 178C58 177 55 175 55 173Z" fill="#10B981" />

        {/* Bottom-right: Plant */}
        <circle cx="200" cy="170" r="16" fill="white" opacity="0.8" />
        <path d="M200 178V170" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        <path d="M200 174C196 172 194 168 194 168C194 168 198 170 200 172" fill="#10B981" />
        <path d="M200 172C204 170 206 166 206 166C206 166 202 168 200 170" fill="#34D399" />

        {/* Foliage at bottom */}
        <path d="M90 200C90 180 110 170 130 175C110 178 95 190 90 200Z" fill="#A78BFA" opacity="0.5" />
        <path d="M170 200C170 180 150 170 130 175C150 178 165 190 170 200Z" fill="#8B5CF6" opacity="0.5" />
        <path d="M100 210C105 195 120 185 130 188C120 190 108 200 100 210Z" fill="#7C3AED" opacity="0.3" />
        <path d="M160 210C155 195 140 185 130 188C140 190 152 200 160 210Z" fill="#6D28D9" opacity="0.3" />
      </svg>
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
function AvatarCard({
  hair,
  face,
  top,
  glasses = false,
  beard = false,
}: {
  hair: string;
  face: string;
  top: string;
  glasses?: boolean;
  beard?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-[#FFFDF5] p-3 shadow-sm transition hover:shadow-md">
      <svg viewBox="0 0 160 200" className="w-full" fill="none">
        {/* Body */}
        <path d="M40 200V160C40 140 60 125 80 125C100 125 120 140 120 160V200Z" fill={top} />
        {/* Neck */}
        <rect x="72" y="100" width="16" height="28" rx="6" fill={face} />
        {/* Head */}
        <ellipse cx="80" cy="70" rx="32" ry="38" fill={face} />
        {/* Hair */}
        <path d={hair} fill="#1E293B" />
        {/* Eyes */}
        <ellipse cx="68" cy="72" rx="3" ry="2.5" fill="#1E293B" />
        <ellipse cx="92" cy="72" rx="3" ry="2.5" fill="#1E293B" />
        {/* Glasses */}
        {glasses && (
          <>
            <circle cx="68" cy="72" r="10" fill="none" stroke="#4F46E5" strokeWidth="2" />
            <circle cx="92" cy="72" r="10" fill="none" stroke="#4F46E5" strokeWidth="2" />
            <line x1="78" y1="72" x2="82" y2="72" stroke="#4F46E5" strokeWidth="2" />
          </>
        )}
        {/* Smile */}
        <path d="M72 84Q80 90 88 84" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Beard */}
        {beard && (
          <path
            d="M62 80C62 95 98 95 98 80C92 88 68 88 62 80Z"
            fill="#1E293B"
            opacity="0.6"
          />
        )}
      </svg>
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
        <div className="relative overflow-hidden rounded-3xl bg-[#F5F2FF] p-8 md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="lg:max-w-xl">
            <h2 className="text-lg font-semibold text-gray-900">Our Philosophy</h2>
            <div className="mt-1 h-0.5 w-10 rounded bg-gray-900" />
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">Storytelling is our superpower.</h3>
            <div className="mt-4 space-y-2 text-base text-gray-700 md:text-lg">
              <p>
                Every module we create starts with a story. Not slides. Not bullet points. A narrative that puts the
                learner at the center — with context, conflict, and resolution.
              </p>
              <p>Because that's how humans learn.</p>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-72">
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
          <AvatarCard
            hair="M48 60C48 30 70 20 80 20C90 20 112 30 112 60C112 65 108 70 105 68C100 64 90 60 80 60C70 60 60 64 55 68C52 70 48 65 48 60Z"
            face="#FDBCB4"
            top="#1E293B"
          />
          <AvatarCard
            hair="M45 60C45 25 72 15 80 15C88 15 115 25 115 60C118 75 112 85 108 80C104 74 98 70 92 68C96 60 100 50 100 40C100 30 92 25 80 25C68 25 60 30 60 40C60 50 64 60 68 68C62 70 56 74 52 80C48 85 42 75 45 60Z"
            face="#FDBCB4"
            top="#DC2626"
            glasses
          />
          <AvatarCard
            hair="M50 60C50 28 68 18 80 18C92 18 110 28 110 60L110 100C110 102 108 104 106 104C104 104 102 102 102 100L102 65C95 70 88 72 80 72C72 72 65 70 58 65L58 100C58 102 56 104 54 104C52 104 50 102 50 100Z"
            face="#FDBCB4"
            top="#8B5CF6"
            glasses
          />
          <AvatarCard
            hair="M55 60C55 35 68 22 80 22C92 22 105 35 105 60C105 63 102 65 100 63C96 58 88 56 80 56C72 56 64 58 60 63C58 65 55 63 55 60Z"
            face="#FDBCB4"
            top="#1E3A5F"
            glasses
            beard
          />
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
