import Link from "next/link";
import { Badge, SectionHeading } from "@/components/UI";
import { servicesSnapshot } from "@/data/site";

const differentiators = [
  {
    img: "/images/Story-First Design.png",
    title: "Story-First Design",
    desc: "Every module we build has a narrative spine — because learners engage with stories, not slides.",
    bg: "bg-indigo-50/80",
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
    bg: "bg-purple-50/80",
  },
];

const serviceIcons: Record<string, string> = {
  "LMS Setup & Deployment": "M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2 0v8h12V6H6zm3 2h6v2H9V8zm0 3h4v2H9v-2z",
  "SCORM Modules": "M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h4v2H9v-2z",
  "Gamified Learning": "M6 3h12l4 6-10 10L2 9l4-6zm2.5 2L5.2 9 12 15.8 18.8 9l-3.3-4H8.5zM12 11a2 2 0 100 4 2 2 0 000-4z",
  "ILT / VILT Decks": "M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h12v2H3v-2zm0 4h18v2H3v-2z",
  "Microlearning Nuggets": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z",
  "Video-Based Training": "M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4zM15 15H5V8h10v7z",
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <Badge>⭐ ELEVATING ELEARNING EXPERIENCES</Badge>
          <h1 className="mt-6 font-heading text-[40px] font-bold leading-[1.15] text-ink sm:text-[48px] md:text-[56px]">
            Learning That{" "}
            <span style={{ color: "#7c3aed" }}>Sticks.</span>
            <br />
            Stories That{" "}
            <span style={{ color: "#3b82f6" }}>Move.</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
            We design eLearning experiences that your learners actually remember — crafted with
            storytelling at the core, delivered with speed, and built to perform.
          </p>
        </div>
        <div className="relative">
          <img
            src="/images/bg image 1.png"
            alt="eLearning illustration"
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <section className="border-y border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[2px] text-muted">
            Trusted by leading brands:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <img
              src="/images/tata power solar_logo.png"
              alt="Tata Power Solar"
              className="h-10 object-contain opacity-80 transition hover:opacity-100"
            />
            <img
              src="/images/Tata Power_logo.png"
              alt="Tata Power"
              className="h-8 object-contain opacity-80 transition hover:opacity-100"
            />
            <span className="font-heading text-2xl font-bold tracking-tight text-blue-700 opacity-80">
              Reliance
            </span>
            <img
              src="/images/jiva.pg.png"
              alt="Jiva Ayurveda"
              className="h-8 object-contain opacity-80 transition hover:opacity-100"
            />
            <img
              src="/images/virtuoskill.png.png"
              alt="Virtuoskill"
              className="h-8 object-contain opacity-80 transition hover:opacity-100"
            />
            <span className="italic text-muted">| and more...</span>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <SectionHeading title="What Makes Us Different" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className={`card-hover overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm ${
                d.highlight ? "ring-2 ring-blue-200 bg-blue-50/50" : ""
              }`}
            >
              <div className={`${d.bg} flex items-center justify-center p-4`}>
                <img
                  src={d.img}
                  alt={d.title}
                  className="h-40 w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-lg font-bold text-ink">{d.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="Services Snapshot" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {servicesSnapshot.map((s) => (
              <div
                key={s.label}
                className="card-hover flex items-center gap-3 rounded-2xl border border-slate-100 bg-lightbg px-4 py-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-primary">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d={serviceIcons[s.label] || "M12 2a10 10 0 100 20 10 10 0 000-20z"} />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-ink leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-8 md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <div className="font-heading text-7xl leading-none text-indigo-200 md:text-8xl">❝</div>
            <div>
              <p className="text-lg font-medium leading-relaxed text-ink md:text-xl">
                "edVenture brought our compliance training to life with interactive storytelling —
                our completion rates jumped significantly."
              </p>
              <p className="mt-4 text-sm text-muted">
                — <span className="font-semibold text-ink">Client</span>, Tata Power Solar
                (testimonial placeholder)
              </p>
            </div>
            <div className="hidden justify-self-end md:block">
              <div className="relative h-36 w-36">
                <div className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-4xl text-white shadow-lg">
                  ❤️
                </div>
                <div className="absolute bottom-0 right-0 flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-2xl text-white shadow-lg">
                  💬
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="h-2.5 w-2.5 rounded-full border border-primary" />
            <span className="h-2.5 w-2.5 rounded-full border border-primary" />
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-[1200px] px-5 pb-24">
        <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
          <div className="mx-auto overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/founder.png"
              alt="Vartika Jain, Founder"
              className="h-72 w-72 object-cover md:h-80 md:w-80"
            />
          </div>
          <div>
            <p className="text-lg italic leading-relaxed text-ink md:text-xl">
              "At edVenture, we believe every learning challenge deserves a creative solution. We
              don't just build content — we build experiences."
            </p>
            <p className="mt-4 text-sm text-muted">
              — <span className="font-semibold gradient-text">Vartika Jain</span>,{" "}
              <span className="font-semibold">Founder &amp; Instructional Designer</span>
            </p>
            <Link
              href="/philosophy"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              Our Philosophy →
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-md">
              📅
            </div>
            <div>
              <p className="text-base font-medium text-white md:text-lg">
                Not sure which format fits your need?
              </p>
              <p className="text-sm text-indigo-200 md:text-base">
                Book a Free Discovery Call — We'll help you figure it out.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-sm font-bold text-ink shadow-md transition hover:shadow-lg"
          >
            Book a free Discovery call →
          </Link>
        </div>
      </section>
    </div>
  );
}
