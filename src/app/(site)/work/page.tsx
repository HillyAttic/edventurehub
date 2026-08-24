import { Badge, SectionHeading } from "@/components/UI";
import { TeamworkIllustration } from "@/components/HeroIllustration";
import { caseStudies, industries } from "@/data/site";

const brandLogos: { name: string; img: string }[] = [
  {
    name: "Tata Power Solar",
    img: "/images/tata power solar_logo.png",
  },
  {
    name: "Tata Power",
    img: "/images/Tata Power_logo.png",
  },
  {
    name: "Jindal Steel",
    img: "/images/jindal steel.png.png",
  },
  {
    name: "Jiva Ayurveda",
    img: "/images/jiva.pg.png",
  },
  {
    name: "Virtuoskill",
    img: "/images/virtuoskill.png.png",
  },
];

const textBrands = ["RELIANCE"];

export default function Work() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Badge>Our Projects</Badge>
          <h1 className="mt-5 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
            Our Projects.{" "}
            <span className="gradient-text">Our Impact.</span>
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
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1200px] px-5">
          <p className="mb-8 text-center font-heading text-xl font-bold text-gray-800">
            Brands that trust <span className="font-bold text-indigo-800">edVenture</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 py-8">
            {brandLogos.map((b) => (
              <div key={b.name} className="flex items-center justify-center">
                <img
                  src={b.img}
                  alt={b.name}
                  className="h-10 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
            {textBrands.map((b) => (
              <span
                key={b}
                className="font-heading text-xl font-bold tracking-wide text-slate-500"
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
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-blue-100 bg-[#F0F6FF] p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-md">
                  Case Study {c.id}
                </span>
              </div>
              <div className="p-2 pt-4">
                <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">
                  {c.title} Challenge:
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{c.challenge}</p>
                <a href="#" className="mt-4 flex items-center gap-1 text-sm font-semibold text-sky-600 hover:underline">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mt-16">
        <h2 className="mb-6 text-center font-heading text-3xl font-bold text-gray-900">
          Industries We Serve
        </h2>
        <div className="bg-[#F3F4F6] px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center text-lg font-medium text-gray-800 md:gap-4">
            {industries.map((ind, i) => (
              <span key={ind}>
                <span className="font-semibold text-gray-800">{ind}</span>
                {i < industries.length - 1 && <span className="mx-2 text-gray-400">|</span>}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
