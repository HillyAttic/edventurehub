import { Badge, SectionHeading } from "@/components/UI";
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
  {
    name: "Reliance",
    img: "/images/Reliance_logo.png",
  },
];

export default function Work() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:px-5 md:py-20 lg:py-24">
        {/* Left Column - Text Content */}
        <div>
          <Badge>OUR PROJECTS</Badge>
          <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
            Our Projects.{" "}
            <span className="gradient-text">Our Impact.</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted">
            We&apos;ve partnered with organizations across energy, healthcare, education,
            and retail to deliver learning that works.
          </p>
        </div>

        {/* Right Column - Illustration */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Soft glow background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100/60 via-purple-50/40 to-sky-100/40 blur-xl" />
          <img
            src="/images/work1.png"
            alt="Our Projects - Our Impact"
            className="relative w-full rounded-3xl"
          />
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto px-4 sm:px-5">
          <p className="mb-6 text-center font-heading text-lg font-bold text-gray-800 sm:mb-8 sm:text-xl">
            Brands that trust <span className="font-bold text-indigo-800">edVenture</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 py-4 sm:py-6">
            {brandLogos.map((b) => (
              <div key={b.name} className="flex items-center justify-center">
                <img
                  src={b.img}
                  alt={b.name}
                  className={`w-auto object-contain transition hover:scale-105 ${
                    b.name === "Reliance"
                      ? "h-14 sm:h-20 md:h-24"
                      : b.name === "Jindal Steel"
                      ? "h-12 sm:h-16 md:h-20"
                      : "h-10 sm:h-12 md:h-14"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-5 sm:py-16 lg:py-20">
        <SectionHeading title="Case Study Snippet" />
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 md:grid-cols-3">
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
      <section className="py-12 sm:py-16 lg:py-20">
        <h2 className="mb-8 px-4 text-center font-heading text-2xl font-bold text-gray-900 sm:mb-10 sm:px-5 sm:text-3xl">
          Industries We Serve
        </h2>
        <div className="bg-[#F3F4F8] mx-4 rounded-xl px-4 py-4 sm:mx-5 sm:px-6 sm:py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm font-semibold text-gray-800 sm:gap-x-3 sm:text-lg">
            {industries.flatMap((ind, i) =>
              i < industries.length - 1
                ? [<span key={ind}>{ind}</span>, <span key={`sep-${i}`} className="text-gray-400">|</span>]
                : [<span key={ind}>{ind}</span>]
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
