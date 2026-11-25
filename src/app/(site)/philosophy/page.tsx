import Image from "next/image";
import { BookOpen, Zap, BadgeDollarSign, Palette, Search, FileText, Monitor, MessageSquare, CloudDownload } from "lucide-react";
import { Badge, SectionHeading } from "@/components/UI";

const pillars = [
  { Icon: BookOpen, title: "Story-First Methodology", active: 0,
    desc: "Most eLearning fails because it lectures. We design every module around a narrative — characters, scenarios, conflict, resolution. Learning through story is not a trend; it's how the human brain is wired." },
  { Icon: Zap, title: "Faster Turnaround, Zero Compromise", active: 1,
    desc: "Speed without sacrifice. Our streamlined production process and experienced team allow us to deliver high-quality modules faster than industry standard — without cutting corners on design or instructional integrity." },
  { Icon: BadgeDollarSign, title: "Competitive & Transparent Pricing", active: 2,
    desc: "Enterprise-quality eLearning shouldn't be exclusive to enterprise budgets. We offer honest, competitive pricing — whether you're an MNC or a growing startup." },
  { Icon: Palette, title: "Design That Elevates", active: 3,
    desc: "Our graphic designers and video artists don't just make things look good — they make learning feel premium. Visual quality signals credibility and keeps learners engaged." },
];

const steps = [
  { num: "01", Icon: Search, title: "Discovery", desc: "Understand your learning objectives, audience, and constraints",
    badge: "bg-rose-400", titleColor: "text-rose-500", iconColor: "#f43f5e", bg: "bg-rose-50" },
  { num: "02", Icon: FileText, title: "Storyboard", desc: "Script and structure content with a narrative arc",
    badge: "bg-violet-400", titleColor: "text-violet-500", iconColor: "#8b5cf6", bg: "bg-violet-50" },
  { num: "03", Icon: Monitor, title: "Design & Develop", desc: "Build with Storyline, motion graphics, and visual design",
    badge: "bg-red-400", titleColor: "text-red-500", iconColor: "#ef4444", bg: "bg-red-50" },
  { num: "04", Icon: MessageSquare, title: "Review Cycles", desc: "Collaborative feedback and iteration",
    badge: "bg-orange-400", titleColor: "text-orange-500", iconColor: "#f97316", bg: "bg-orange-50" },
  { num: "05", Icon: CloudDownload, title: "Deliver", desc: "SCORM package, LMS upload, or as required",
    badge: "bg-teal-400", titleColor: "text-teal-600", iconColor: "#0d9488", bg: "bg-teal-50" },
];

export default function Philosophy() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-2 md:px-5 md:py-16">
        <div>
          <Badge>Our Philosophy</Badge>
          <h1 className="mt-6 font-heading text-3xl font-bold leading-tight text-ink sm:text-[40px] md:text-[46px]">
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
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5">
          <SectionHeading title="The edVenture Edge — 4 Pillars" />

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {pillars.map((p) => (
              <div key={p.title}
                className="card-hover flex flex-col items-center rounded-3xl border border-purple-100/70 bg-gradient-to-b from-[#f5f2ff] to-white p-6 text-center shadow-xl shadow-indigo-100/50 sm:p-8">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-white sm:mb-6 sm:h-28 sm:w-28">
                  <p.Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
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
      <section className="mx-auto max-w-[1200px] px-4 py-12 sm:px-5 sm:py-16 lg:py-20">
        <SectionHeading title="Our Process" />

        <div className="relative mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-14 hidden h-0.5 border-t-2 border-dashed border-slate-200 lg:block lg:top-16" />
          {steps.map((s) => (
            <div key={s.num} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div className={`flex h-24 w-24 items-center justify-center rounded-full sm:h-28 sm:w-28 lg:h-32 lg:w-32 ${s.bg}`}>
                  <s.Icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14" style={{ color: s.iconColor }} fill={s.iconColor} fillOpacity={0.15} strokeWidth={1.8} />
                </div>
                <span className={`absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full ${s.badge} text-[11px] font-bold text-white shadow`}>
                  {s.num}
                </span>
              </div>
              <h3 className={`mt-4 font-heading text-base font-bold sm:mt-5 ${s.titleColor}`}>{s.title}</h3>
              <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-muted sm:max-w-[200px] sm:text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
