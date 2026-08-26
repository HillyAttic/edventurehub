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

/* ── Why Choose Illustration ─── */
function WhyChooseIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <img
        src="/images/aboutusfeature.png"
        alt="Edventure excellence trophy"
        className="h-auto w-full object-contain"
      />
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
  bold,
  rest,
}: {
  icon: React.ReactNode;
  bold: string;
  rest: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-white shadow-[0_4px_14px_rgba(99,102,241,0.10)]">
        {icon}
      </div>
      <p className="text-[15px] leading-snug text-slate-500">
        <span className="font-semibold text-[#1E293B]">{bold}</span> {rest}
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
      <section
        className="px-8 py-20"
        style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-4xl font-extrabold text-[#0F172A] md:text-[40px]">
              Why choose{" "}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                edVenture?
              </span>
            </h2>
            <div className="mt-3 h-[3px] w-14 rounded bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED]" />
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-8">
              <FeatureItem
                icon={<Lightbulb className="h-[22px] w-[22px] text-[#7C3AED]" strokeWidth={1.8} />}
                bold="Founded and led by a"
                rest="practicing Instructional Designer — not a sales team"
              />
              <FeatureItem
                icon={<Clock className="h-[22px] w-[22px] text-[#7C3AED]" strokeWidth={1.8} />}
                bold="Strong Tech & Support"
                rest="ensuring smooth delivery, hosting, and integration"
              />
              <FeatureItem
                icon={<Layers className="h-[22px] w-[22px] text-[#7C3AED]" strokeWidth={1.8} />}
                bold="End-to-end eLearning"
                rest="capability under one roof"
              />
              <FeatureItem
                icon={<Award className="h-[22px] w-[22px] text-[#7C3AED]" strokeWidth={1.8} />}
                bold="Competitive pricing"
                rest="with no compromise on quality"
              />
              <FeatureItem
                icon={<BarChart3 className="h-[22px] w-[22px] text-[#7C3AED]" strokeWidth={1.8} />}
                bold="Story-driven approach"
                rest="that drives real learner engagement"
              />
              <FeatureItem
                icon={<Calendar className="h-[22px] w-[22px] text-[#7C3AED]" strokeWidth={1.8} />}
                bold="Faster turnaround"
                rest="times that keep your projects on schedule"
              />
            </div>
            <div className="lg:col-span-4">
              <WhyChooseIllustration />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
