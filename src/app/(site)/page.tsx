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
      <section className="relative mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:px-8 lg:pt-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/60 text-[#6D28D9] text-sm font-semibold tracking-wide uppercase mb-6">
              <Star className="w-4 h-4 fill-current text-[#7C3AED]" />
              Elevating eLearning Experiences
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
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
          <div className="flex-1">
            <img
              src="/images/homepagebg.png"
              alt="eLearning illustration"
              className="h-auto w-full max-w-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="border-t border-slate-100 bg-white py-10 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[2px] text-muted sm:mb-10 sm:text-sm">
            Trusted by leading brands:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-10 md:gap-x-16">
            <img
              src="/images/tata power solar_logo.png"
              alt="Tata Power Solar"
              className="h-12 object-contain sm:h-16 md:h-20"
            />
            <img
              src="/images/Tata Power_logo.png"
              alt="Tata Power"
              className="h-12 object-contain sm:h-16 md:h-20"
            />
            <img
              src="/images/Reliance_logo.png"
              alt="Reliance"
              className="h-24 object-contain sm:h-32 md:h-48"
            />
            <img
              src="/images/jiva.pg.png"
              alt="Jiva Ayurveda"
              className="h-12 object-contain sm:h-16 md:h-20"
            />
            <img
              src="/images/virtuoskill.png.png"
              alt="Virtuoskill"
              className="h-12 object-contain sm:h-16 md:h-20"
            />
            <span className="pl-2 text-lg italic whitespace-nowrap text-muted">| and more...</span>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="text-center font-heading text-2xl font-bold text-ink sm:text-3xl md:text-4xl">
          What Makes Us Different
        </h2>
        <div className="section-underline mx-auto mt-3" />
        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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
      <section className="bg-white py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-2xl font-semibold text-ink sm:text-3xl md:text-4xl">
            Services Snapshot
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-primary" />
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-4 py-6 sm:mt-10 sm:px-6 sm:py-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-6">
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
                    } sm:col-span-1`}
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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative overflow-visible rounded-3xl border border-slate-200/60 bg-[#f0eef8] p-6 pt-8 sm:p-8 sm:pt-10 md:p-12 md:pt-14 lg:p-14 lg:pt-16">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto] md:gap-10">
            <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
              {/* Decorative quote marks */}
              <svg
                className="-mt-2 h-10 w-10 shrink-0 sm:-mt-4 sm:h-14 sm:w-14 md:-mt-6 md:h-20 md:w-20"
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
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
                  edVenture brought our compliance training to life with interactive storytelling —
                  our completion rates jumped significantly.&rdquo;
                </p>
                <p className="mt-4 text-xs text-muted sm:mt-5 sm:text-sm">
                  — <span className="font-bold text-ink">Client</span>, Tata Power Solar (testimonial placeholder)
                </p>
              </div>
            </div>
            <div className="hidden justify-self-end sm:block">
              <img
                src="/images/client, testimonial placeholder.png"
                alt="Client testimonial"
                className="mx-auto h-48 w-48 object-contain sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
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
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] lg:gap-10">
          <div className="relative mx-auto">
            <div className="absolute -left-4 -top-4 h-56 w-56 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-60 sm:h-64 sm:w-64 md:h-72 md:w-72" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/founder.png"
                alt="Vartika Jain, Founder"
                className="h-56 w-56 object-cover sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
              />
            </div>
          </div>
          <div>
            <p className="text-base italic leading-relaxed text-gray-700 sm:text-lg md:text-xl">
              "At edVenture, we believe every learning challenge deserves a creative solution. We
              don't just build content — we build experiences."
            </p>
            <p className="mt-3 text-xs text-muted sm:mt-4 sm:text-sm">
              — <span className="font-bold text-indigo-600">Vartika Jain</span>,{" "}
              <span className="font-bold text-ink">Founder &amp; Instructional Designer</span>
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-50 sm:mt-6 sm:text-sm"
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
