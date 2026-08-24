import Link from "next/link";
import { Badge, SectionHeading } from "@/components/UI";
import { BigEIllustration } from "@/components/HeroIllustration";
import { brands, servicesSnapshot, founderPhoto } from "@/data/site";

const differentiators = [
  {
    emoji: "📖",
    tint: "from-indigo-50 to-blue-50",
    title: "Story-First Design",
    desc: "Every module we build has a narrative spine — because learners engage with stories, not slides.",
  },
  {
    emoji: "🚀",
    tint: "from-blue-50 to-indigo-50",
    title: "Faster TAT",
    desc: "We deliver without cutting corners. Fast turnarounds that don't sacrifice craft.",
  },
  {
    emoji: "🏆",
    tint: "from-purple-50 to-indigo-50",
    title: "Uncompromised Quality",
    desc: "From script to screen, we obsess over detail — visuals, interactions, and learning outcomes.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Badge>⭐ Elevating eLearning Experiences</Badge>
          <h1 className="mt-5 font-heading text-[38px] font-bold leading-tight text-ink sm:text-[44px] md:text-[48px]">
            Learning That <span className="gradient-text">Sticks.</span>
            <br />
            Stories That <span className="gradient-text">Move.</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted">
            We design eLearning experiences that your learners actually remember — crafted with
            storytelling at the core, delivered with speed, and built to perform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gradient px-7 py-3 text-sm font-semibold">
              Book a Free Discovery Call →
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              See Our Work
            </Link>
          </div>
        </div>
        <BigEIllustration />
      </section>

      {/* TRUSTED BRANDS */}
      <section className="border-y border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[2px] text-muted">
            Trusted by leading brands:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {brands.map((b) => (
              <span
                key={b}
                className="font-heading text-lg font-bold tracking-wide text-slate-400 grayscale transition hover:text-primary hover:grayscale-0"
              >
                {b}
              </span>
            ))}
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
              className="card-hover rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
            >
              <div
                className={`mb-5 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${d.tint} text-6xl`}
              >
                {d.emoji}
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-ink">{d.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="Services Snapshot" />
          <div className="mt-10 flex gap-4 overflow-x-auto pb-4">
            {servicesSnapshot.map((s) => (
              <div
                key={s.label}
                className="card-hover flex min-w-[220px] flex-shrink-0 items-center gap-3 rounded-2xl border border-slate-100 bg-lightbg px-5 py-4"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-sm font-semibold text-ink">{s.label}</span>
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
            <div className="hidden justify-self-end md:flex">
              <div className="relative h-32 w-32">
                <div className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-2xl rounded-bl-none bg-primary text-3xl text-white shadow-lg">
                  🤍
                </div>
                <div className="absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center rounded-2xl rounded-br-none bg-purple text-2xl text-white shadow-lg">
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
          <div className="mx-auto h-64 w-64 overflow-hidden rounded-3xl border-4 border-white shadow-xl">
            <img src={founderPhoto} alt="Vartika Jain, Founder" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-lg italic leading-relaxed text-ink md:text-xl">
              "At edVenture, we believe every learning challenge deserves a creative solution. We
              don't just build content — we build experiences."
            </p>
            <p className="mt-4 text-sm text-muted">
              — <span className="font-semibold gradient-text">Vartika Jain</span>,{" "}
              <span className="font-semibold">Founder & Instructional Designer</span>
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
