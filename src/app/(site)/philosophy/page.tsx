import Image from "next/image";
import { Badge, SectionHeading } from "@/components/UI";
import type { ReactNode } from "react";

const svg = (path: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
    strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9" aria-hidden="true">
    {path}
  </svg>
);

const IconLightbulb = svg(<path d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />);
const IconClock = svg(<path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />);
const IconTag = svg(<><path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path d="M6 6h.008v.008H6V6Z" /></>);
const IconBrush = svg(<><path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></>);
const IconSearch = svg(<path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />);
const IconScript = svg(<path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />);
const IconPlay = svg(<path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 0 1 0 1.971l-11.54 6.347a1.125 1.125 0 0 1-1.667-.985V5.653Z" />);
const IconUsers = svg(<path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />);
const IconDownload = svg(<path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />);

const pillars = [
  { icon: IconLightbulb, title: "Story-First Methodology", active: 0,
    desc: "Most eLearning fails because it lectures. We design every module around a narrative — characters, scenarios, conflict, resolution. Learning through story is not a trend; it's how the human brain is wired." },
  { icon: IconClock, title: "Faster Turnaround, Zero Compromise", active: 1,
    desc: "Speed without sacrifice. Our streamlined production process and experienced team allow us to deliver high-quality modules faster than industry standard — without cutting corners on design or instructional integrity." },
  { icon: IconTag, title: "Competitive & Transparent Pricing", active: 2,
    desc: "Enterprise-quality eLearning shouldn't be exclusive to enterprise budgets. We offer honest, competitive pricing — whether you're an MNC or a growing startup." },
  { icon: IconBrush, title: "Design That Elevates", active: 3,
    desc: "Our graphic designers and video artists don't just make things look good — they make learning feel premium. Visual quality signals credibility and keeps learners engaged." },
];

const steps = [
  { num: "01", icon: IconSearch, title: "Discovery", desc: "Understand your learning objectives, audience, and constraints",
    circleBg: "bg-rose-50", iconColor: "text-rose-500", badge: "bg-rose-400", titleColor: "text-rose-500" },
  { num: "02", icon: IconScript, title: "Storyboard", desc: "Script and structure content with a narrative arc",
    circleBg: "bg-violet-50", iconColor: "text-violet-500", badge: "bg-violet-400", titleColor: "text-violet-500" },
  { num: "03", icon: IconPlay, title: "Design & Develop", desc: "Build with Storyline, motion graphics, and visual design",
    circleBg: "bg-red-50", iconColor: "text-red-500", badge: "bg-red-400", titleColor: "text-red-500" },
  { num: "04", icon: IconUsers, title: "Review Cycles", desc: "Collaborative feedback and iteration",
    circleBg: "bg-orange-50", iconColor: "text-orange-500", badge: "bg-orange-400", titleColor: "text-orange-500" },
  { num: "05", icon: IconDownload, title: "Deliver", desc: "SCORM package, LMS upload, or as required",
    circleBg: "bg-teal-50", iconColor: "text-teal-600", badge: "bg-teal-400", titleColor: "text-teal-600" },
];

export default function Philosophy() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-16">
        <div>
          <Badge>Our Philosophy</Badge>
          <h1 className="mt-6 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[46px]">
            We Build <span className="gradient-text-purple">Learning That Works.</span>
          </h1>
          <div className="section-underline mt-6" />
        </div>

        <div className="relative flex items-center justify-center">
          <div className="dotted-grid absolute -left-4 -top-6 h-28 w-28 opacity-60" />
          <div className="absolute h-64 w-72 rounded-3xl bg-gradient-to-br from-indigo-200/60 via-purple-200/50 to-orange-200/50 blur-2xl" />
          <Image src="/images/philosophy1.png" alt="A woman and a man collaborating on an e-learning module"
            width={720} height={560} priority className="relative w-full max-w-[560px]" />
        </div>
      </section>

      {/* 4 PILLARS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionHeading title="The edVenture Edge — 4 Pillars" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title}
                className="card-hover flex flex-col items-center rounded-3xl border border-purple-100/70 bg-gradient-to-b from-[#f5f2ff] to-white p-8 text-center shadow-xl shadow-indigo-100/50">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-badgebg text-purple-600">
                  {p.icon}
                </div>
                <h3 className="mb-3 font-heading text-lg font-bold">
                  <span className="gradient-text-purple">{p.title}</span>
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-6 flex gap-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === p.active ? "bg-primary" : "bg-slate-300"}`} />
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
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 border-t-2 border-dashed border-slate-200 lg:block" />
          {steps.map((s) => (
            <div key={s.num} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div className={`flex h-20 w-20 items-center justify-center rounded-full ${s.circleBg} shadow-[0_14px_34px_-14px_rgba(0,0,0,0.28)]`}>
                  <span className={s.iconColor}>{s.icon}</span>
                </div>
                <span className={`absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full ${s.badge} text-[11px] font-bold text-white shadow`}>
                  {s.num}
                </span>
              </div>
              <h3 className={`mt-5 font-heading text-base font-bold ${s.titleColor}`}>{s.title}</h3>
              <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
