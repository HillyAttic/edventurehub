import { Badge, SectionHeading } from "@/components/UI";
import { PhilosophyIllustration } from "@/components/HeroIllustration";
import { pillars, processSteps } from "@/data/site";

export default function Philosophy() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Badge>Our Philosophy</Badge>
          <h1 className="mt-5 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
            We Build <span className="gradient-text-warm">Learning That Works.</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted">
            Four pillars, one relentless process — designed to make every learning moment count.
          </p>
        </div>
        <PhilosophyIllustration />
      </section>

      {/* 4 PILLARS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="The edVenture Edge — 4 Pillars" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="card-hover flex flex-col rounded-2xl border border-slate-100 bg-lightbg p-6"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-badgebg text-2xl">
                  {p.icon}
                </div>
                <h3 className={`mb-3 font-heading text-lg font-bold ${p.color}`}>{p.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-6 flex gap-1.5">
                  {[0, 1, 2, 3].map((d) => (
                    <span
                      key={d}
                      className={`h-1.5 w-1.5 rounded-full ${d === i % 4 ? "bg-primary" : "bg-slate-200"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <SectionHeading title="Our Process" />
        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-slate-200 lg:block" />
          {processSteps.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              <div className={`relative flex h-16 w-16 items-center justify-center rounded-full ${step.color} text-2xl text-white shadow-lg`}>
                {step.icon}
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-ink shadow">
                  {step.num}
                </span>
              </div>
              <h3 className={`mt-4 font-heading text-base font-bold ${step.text}`}>{step.title}</h3>
              <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
