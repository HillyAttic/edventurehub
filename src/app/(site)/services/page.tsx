import { Badge, SectionHeading } from "@/components/UI";
import { LaptopIllustration } from "@/components/HeroIllustration";
import { services } from "@/data/site";

export default function Services() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Badge>Our Expertise</Badge>
          <h1 className="mt-5 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
            Everything You Need to Build{" "}
            <span className="gradient-text">Brilliant Learning Experiences</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted">
            From strategy to screen, we handle the full spectrum of eLearning development.
          </p>
        </div>
        <LaptopIllustration />
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="Services" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.num}
                className={`card-hover group flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm ${
                  s.num === "13" ? "sm:col-span-2 lg:col-span-4 lg:mx-auto lg:w-1/4" : ""
                }`}
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-2xl text-white shadow-md`}
                >
                  {s.icon}
                </div>
                <p className="mb-1 text-xs font-bold text-primary">{s.num} —</p>
                <h3 className="mb-2 font-heading text-base font-bold leading-snug text-ink">
                  {s.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                <button className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-badgebg text-primary transition group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple group-hover:text-white">
                  →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
