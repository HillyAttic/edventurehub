import Link from "next/link";
import { Badge, SectionHeading } from "@/components/UI";
import { LaptopIllustration } from "@/components/HeroIllustration";
import { services } from "@/data/site";

const serviceIcons: Record<string, string> = {
  "01": "M3 3h18v18H3V3zm4 4h10v6H7V7zm0 8h4v4H7v-4zm6 0h4v4h-4v-4z",
  "02": "M12 2L2 7v10l10 5 10-5V7L12 2zm-2 5h4v4h-4V7zm0 6h4v4h-4v-4z",
  "03": "M21 6H3a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3z",
  "04": "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
  "05": "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78l3.4-1.72-3.4-1.72v3.44z",
  "06": "M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z",
  "07": "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5zm0-4h14v3H5zm0-4h14v3H5z",
  "08": "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
  "09": "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z",
  "10": "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z",
  "11": "M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v4h2v-4h1l5 4v-3.18C15.16 16.3 17 14.34 17 12c0-2.76-2.24-5-5-5H4z",
  "12": "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z",
  "13": "M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v4h2v-4h1l5 4v-3.18C15.16 16.3 17 14.34 17 12c0-2.76-2.24-5-5-5H4z",
};

const iconGradients = [
  "from-orange-400 to-red-500",
  "from-purple-400 to-pink-500",
  "from-yellow-400 to-orange-500",
  "from-blue-400 to-indigo-500",
  "from-pink-400 to-rose-500",
  "from-teal-400 to-emerald-500",
  "from-indigo-400 to-purple-500",
  "from-rose-400 to-pink-500",
  "from-amber-400 to-yellow-500",
  "from-cyan-400 to-blue-500",
  "from-green-400 to-teal-500",
  "from-violet-400 to-purple-500",
  "from-fuchsia-400 to-pink-500",
];

const iconBgs = [
  "bg-orange-50",
  "bg-purple-50",
  "bg-yellow-50",
  "bg-blue-50",
  "bg-pink-50",
  "bg-teal-50",
  "bg-indigo-50",
  "bg-rose-50",
  "bg-amber-50",
  "bg-cyan-50",
  "bg-green-50",
  "bg-violet-50",
  "bg-fuchsia-50",
];

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
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`card-hover group flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm ${
                  s.num === "13" ? "sm:col-span-2 lg:col-span-4 lg:mx-auto lg:max-w-[380px]" : ""
                }`}
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${iconBgs[i % iconBgs.length]} shadow-sm`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${iconGradients[i % iconGradients.length]} shadow-md`}>
                    <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                      <path d={serviceIcons[s.num] || "M12 2a10 10 0 100 20 10 10 0 000-20z"} />
                    </svg>
                  </div>
                </div>
                <p className="mb-1 text-xs font-bold text-purple-600">{s.num}</p>
                <h3 className="mb-2 font-heading text-base font-bold leading-snug text-ink">
                  {s.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                <button className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-slate-500 transition group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple group-hover:text-white">
                  →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="bg-gradient-to-r from-indigo-900 via-blue-700 to-sky-500 py-10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-5">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-md">
              <svg className="h-7 w-7 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
              </svg>
            </div>
            <div>
              <p className="text-base font-medium text-white md:text-lg">
                Not sure which format fits your need?
              </p>
              <p className="text-sm text-blue-200 md:text-base">
                Book a Free Discovery Call — We'll help you figure it out.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-900 shadow-md transition hover:bg-gray-100"
          >
            Book a free Discovery call →
          </Link>
        </div>
      </section>
    </div>
  );
}
