import Link from "next/link";
import {
  Monitor,
  LayoutGrid,
  Gamepad2,
  Presentation,
  BookOpen,
  Video,
  Star,
} from "lucide-react";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "LMS Setup & Deployment": Monitor,
  "SCORM Modules": LayoutGrid,
  "Gamified Learning": Gamepad2,
  "ILT / VILT Decks": Presentation,
  "Microlearning Nuggets": BookOpen,
  "Video-Based Training": Video,
};

const differentiators = [
  {
    img: "/images/Story-First Design.png",
    title: "Story-First Design",
    desc: "Every module we build has a narrative spine — because learners engage with stories, not slides.",
    bg: "bg-indigo-50",
  },
  {
    img: "/images/Faster TAT.png",
    title: "Faster TAT",
    desc: "We deliver without cutting corners. Fast turnarounds that don't sacrifice craft.",
    bg: "bg-blue-50",
    highlight: true,
  },
  {
    img: "/images/Uncompromised Quality.png",
    title: "Uncompromised Quality",
    desc: "From script to screen, we obsess over detail — visuals, interactions, and learning outcomes.",
    bg: "bg-purple-50",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-8 pt-10 pb-16 lg:px-16">
        <img
          src="/images/bg image 1.png"
          alt="eLearning illustration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/60 text-[#6D28D9] text-sm font-semibold tracking-wide uppercase mb-6">
            <Star className="w-4 h-4 fill-current text-[#7C3AED]" />
            Elevating eLearning Experiences
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Learning That{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#00A3FF] bg-clip-text text-transparent">Sticks.</span>
            <br />
            Stories That{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#00A3FF] bg-clip-text text-transparent">Move.</span>
          </h1>
          <div className="my-5 h-1 w-16 rounded bg-gradient-to-r from-indigo-600 to-purple-600" />
          <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
            We design eLearning experiences that your learners actually remember — crafted with
            storytelling at the core, delivered with speed, and built to perform.
          </p>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="border-t border-slate-100 bg-white py-14 px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[2px] text-muted">
            Trusted by leading brands:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
            <img
              src="/images/tata power solar_logo.png"
              alt="Tata Power Solar"
              className="h-20 object-contain"
            />
            <img
              src="/images/Tata Power_logo.png"
              alt="Tata Power"
              className="h-20 object-contain"
            />
            <img
              src="/images/Reliance_logo.png"
              alt="Reliance"
              className="h-48 object-contain"
            />
            <img
              src="/images/jiva.pg.png"
              alt="Jiva Ayurveda"
              className="h-20 object-contain"
            />
            <img
              src="/images/virtuoskill.png.png"
              alt="Virtuoskill"
              className="h-20 object-contain"
            />
            <span className="pl-2 text-lg italic text-muted">| and more...</span>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="mx-auto max-w-7xl px-8 py-20 lg:px-16">
        <h2 className="text-center font-heading text-[28px] font-bold text-ink sm:text-[32px] md:text-[36px]">
          What Makes Us Different
        </h2>
        <div className="section-underline mx-auto mt-3" />
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className={`card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${
                d.highlight ? "ring-1 ring-blue-200" : ""
              }`}
            >
              <div className={`${d.bg} flex items-center justify-center p-6`}>
                <img
                  src={d.img}
                  alt={d.title}
                  className="h-48 w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="bg-white py-20 px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-[32px] font-semibold text-ink sm:text-[36px] md:text-[40px]">
            Services Snapshot
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-primary" />
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 py-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {[
                { icon: Monitor, label: "LMS Setup & Deployment", color: "text-blue-600" },
                { icon: LayoutGrid, label: "SCORM Modules", color: "text-purple-600" },
                { icon: Gamepad2, label: "Gamified Learning", color: "text-blue-600" },
                { icon: Presentation, label: "ILT / VILT Decks", color: "text-purple-600" },
                { icon: BookOpen, label: "Microlearning Nuggets", color: "text-blue-600" },
                { icon: Video, label: "Video-Based Training", color: "text-purple-600" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className={`flex items-center gap-3 ${
                      i < 5 ? "lg:border-r lg:border-slate-200 lg:pr-6" : ""
                    }`}
                  >
                    <Icon className={`h-8 w-8 ${s.color}`} />
                    <span className="text-base font-semibold text-gray-700">
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-7xl px-8 py-20 lg:px-16">
        <div className="relative overflow-visible rounded-3xl border border-slate-200/60 bg-[#f0eef8] p-10 pt-12 md:p-14 md:pt-16">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div className="flex items-start gap-4 md:gap-6">
              {/* Decorative quote marks */}
              <svg
                className="-mt-4 h-16 w-16 shrink-0 md:-mt-6 md:h-20 md:w-20"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="quoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
                <path
                  d="M14 36c0 6.627-5.373 12-12 12V36c0-6.627 5.373-12 12-12v12zm24 0c0 6.627-5.373 12-12 12V36c0-6.627 5.373-12 12-12v12z"
                  fill="url(#quoteGrad)"
                />
              </svg>
              <div>
                <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                  edVenture brought our compliance training to life with interactive storytelling —
                  our completion rates jumped significantly.&rdquo;
                </p>
                <p className="mt-5 text-sm text-muted">
                  — <span className="font-bold text-ink">Client</span>, Tata Power Solar (testimonial placeholder)
                </p>
              </div>
            </div>
            <div className="hidden justify-self-end md:block">
              <img
                src="/images/client, testimonial placeholder.png"
                alt="Client testimonial"
                className="h-72 w-72 object-contain md:h-80 md:w-80"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="h-2.5 w-2.5 rounded-full border border-primary" />
            <span className="h-2.5 w-2.5 rounded-full border border-primary" />
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-7xl px-8 pb-24 lg:px-16">
        <div className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <div className="relative mx-auto">
            <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-60" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/founder.png"
                alt="Vartika Jain, Founder"
                className="h-72 w-72 object-cover md:h-80 md:w-80"
              />
            </div>
          </div>
          <div>
            <p className="text-lg italic leading-relaxed text-gray-700 md:text-xl">
              "At edVenture, we believe every learning challenge deserves a creative solution. We
              don't just build content — we build experiences."
            </p>
            <p className="mt-4 text-sm text-muted">
              — <span className="font-bold text-indigo-600">Vartika Jain</span>,{" "}
              <span className="font-bold text-ink">Founder &amp; Instructional Designer</span>
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
