import { Badge, SectionHeading } from "@/components/UI";
import { TeamworkIllustration } from "@/components/HeroIllustration";
import { workBrands, caseStudies, industries } from "@/data/site";

export default function Work() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Badge>Our Projects</Badge>
          <h1 className="mt-5 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
            Our Projects. <span className="gradient-text">Our Impact.</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted">
            We've partnered with organizations across energy, healthcare, education, and retail to
            deliver learning that works.
          </p>
        </div>
        <TeamworkIllustration />
      </section>

      {/* BRANDS */}
      <section className="border-y border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-8 text-center font-heading text-xl font-bold">
            Brands that trust <span className="gradient-text">edVenture</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {workBrands.map((b) => (
              <span
                key={b}
                className="font-heading text-lg font-bold tracking-wide text-slate-400 grayscale transition hover:text-primary hover:grayscale-0"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <SectionHeading title="Case Study Snippet" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <div
              key={i}
              className="card-hover overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  Case Study {c.id}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-lg font-bold text-ink">{c.title}</h3>
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-primary">
                  Challenge:
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted">{c.challenge}</p>
                <a href="#" className="text-sm font-semibold text-primary hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <SectionHeading title="Industries We Serve" />
          <p className="mx-auto mt-8 max-w-4xl text-sm leading-loose text-muted md:text-base">
            {industries.map((ind, i) => (
              <span key={ind}>
                <span className="font-semibold text-ink">{ind}</span>
                {i < industries.length - 1 && <span className="mx-3 text-primary">|</span>}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}
