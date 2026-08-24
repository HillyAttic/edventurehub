import Link from "next/link";
import {
  Monitor,
  Package,
  Gamepad2,
  ClipboardList,
  Smartphone,
  Video,
  Star,
} from "lucide-react";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "LMS Setup & Deployment": Monitor,
  "SCORM Modules": Package,
  "Gamified Learning": Gamepad2,
  "ILT / VILT Decks": ClipboardList,
  "Microlearning Nuggets": Smartphone,
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
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-8 pt-10 pb-16 md:grid-cols-2 lg:px-16">
        <div>
          <span className="badge-pill">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            ELEVATING ELEARNING EXPERIENCES
          </span>
          <h1 className="mt-6 font-heading text-5xl font-extrabold leading-[1.1] text-ink whitespace-nowrap sm:text-6xl">
            Learning That{" "}
            <span className="text-primary">Sticks.</span>
            <br />
            Stories That{" "}
            <span className="text-purple">Move.</span>
          </h1>
          <div className="my-5 h-1 w-16 rounded bg-gradient-to-r from-indigo-600 to-purple-600" />
          <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
            We design eLearning experiences that your learners actually remember — crafted with
            storytelling at the core, delivered with speed, and built to perform.
          </p>
        </div>
        <div className="relative flex justify-center">
          <img
            src="/images/bg image 1.png"
            alt="eLearning illustration"
            className="max-h-[420px] w-auto object-contain"
          />
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="border-t border-slate-100 bg-white py-10 px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[2px] text-muted">
            Trusted by leading brands:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
            <img
              src="/images/tata power solar_logo.png"
              alt="Tata Power Solar"
              className="h-10 object-contain"
            />
            <img
              src="/images/Tata Power_logo.png"
              alt="Tata Power"
              className="h-8 object-contain"
            />
            <img
              src="/images/Reliance_logo.png"
              alt="Reliance"
              className="h-9 object-contain"
            />
            <img
              src="/images/jiva.pg.png"
              alt="Jiva Ayurveda"
              className="h-9 object-contain"
            />
            <img
              src="/images/virtuoskill.png.png"
              alt="Virtuoskill"
              className="h-8 object-contain"
            />
            <span className="italic text-muted">| and more...</span>
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
          <h2 className="text-center font-heading text-[28px] font-bold text-ink sm:text-[32px] md:text-[36px]">
            Services Snapshot
          </h2>
          <div className="section-underline mx-auto mt-3" />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: Monitor, label: "LMS Setup & Deployment" },
              { icon: Package, label: "SCORM Modules" },
              { icon: Gamepad2, label: "Gamified Learning" },
              { icon: ClipboardList, label: "ILT / VILT Decks" },
              { icon: Smartphone, label: "Microlearning Nuggets" },
              { icon: Video, label: "Video-Based Training" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-7xl px-8 py-20 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div className="grid grid-cols-[auto_1fr] items-start gap-5">
              <img
                src="/images/quote.png"
                alt=""
                className="h-12 w-12 object-contain opacity-60"
              />
              <div>
                <p className="text-base italic leading-relaxed text-gray-700 md:text-lg">
                  "edVenture brought our compliance training to life with interactive storytelling —
                  our completion rates jumped significantly."
                </p>
                <p className="mt-4 text-sm text-muted">
                  — <span className="font-bold text-ink">Client</span>, Tata Power Solar (testimonial placeholder)
                </p>
              </div>
            </div>
            <div className="hidden justify-self-end md:block">
              <img
                src="/images/client, testimonial placeholder.png"
                alt="Client testimonial"
                className="h-44 w-44 object-contain"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary" />
            <span className="h-3 w-3 rounded-full border border-primary" />
            <span className="h-3 w-3 rounded-full border border-primary" />
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
