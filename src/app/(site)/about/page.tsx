import Link from "next/link";
import { Badge, SectionHeading } from "@/components/UI";
import { BrainIllustration } from "@/components/HeroIllustration";
import { teamPlaceholders, whyChoose } from "@/data/site";

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Badge>Our Purpose</Badge>
          <h1 className="mt-5 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
            Where Instructional Design Meets{" "}
            <span className="gradient-text">Creative Vision</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted">
            Born in 2022, Edventure eLearning Hub was founded with one mission — to make workplace
            learning genuinely engaging, beautifully designed, and results-driven.
          </p>
        </div>
        <BrainIllustration />
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:grid-cols-2">
          <div className="relative flex h-72 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100">
            <div className="relative text-[120px] leading-none">🏔️</div>
            <span className="absolute right-10 top-10 text-3xl">🚩</span>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">Our Story</h2>
            <div className="section-underline my-4" />
            <p className="mb-4 text-sm leading-relaxed text-muted md:text-base">
              Edventure eLearning Hub was established in 2022 by Vartika Jain, an experienced
              Instructional Designer with a passion for transforming dry training content into
              compelling learning journeys.
            </p>
            <p className="mb-4 text-sm italic leading-relaxed text-muted md:text-base">
              What started as a vision — that learning doesn't have to be boring — has grown into
              a full-service eLearning studio. Vartika leads a multidisciplinary team of Storyline
              developers, graphic designers, video artists, and instructional designers who
              collectively bring expertise, creativity, and precision to every project.
            </p>
            <p className="text-sm leading-relaxed text-muted md:text-base">
              We work across industries, serving clients from energy giants to health & wellness
              brands — delivering content that educates, engages, and empowers.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-8 md:grid-cols-2 md:p-14">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-primary">
              Our Philosophy
            </p>
            <div className="section-underline mb-4" />
            <h2 className="mb-4 font-heading text-2xl font-bold text-ink md:text-3xl">
              Storytelling is our superpower.
            </h2>
            <p className="text-sm leading-relaxed text-muted md:text-base">
              Every module we create starts with a story. Not slides. Not bullet points. A
              narrative that puts the learner at the center — with context, conflict, and
              resolution. Because that's how humans learn.
            </p>
          </div>
          <div className="relative flex h-56 items-center justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple text-6xl shadow-xl animate-float-slow">
              💡
            </div>
            <span className="absolute left-4 top-2 text-3xl">🎯</span>
            <span className="absolute right-6 top-6 text-3xl">🧑</span>
            <span className="absolute bottom-4 left-10 text-3xl">❤️</span>
            <span className="absolute bottom-2 right-4 text-3xl">⚙️</span>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionHeading title="The Team" center={false} />
              <p className="mt-3 text-sm italic text-muted">Meet the minds behind the magic:</p>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-primary hover:underline">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamPlaceholders.map((m, i) => (
              <div
                key={i}
                className="card-hover overflow-hidden rounded-2xl border border-slate-100 bg-lightbg shadow-sm"
              >
                <div
                  className={`flex h-48 items-center justify-center bg-gradient-to-br ${m.color} font-heading text-4xl font-bold text-white`}
                >
                  {m.initials}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-navy py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="mb-8 font-heading text-2xl font-bold text-white md:text-3xl">
              Why choose <span className="gradient-text">edVenture?</span>
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyChoose.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-900 text-lg">
                    {item.icon}
                  </span>
                  <p className="text-sm leading-relaxed text-indigo-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative flex h-56 w-56 items-center justify-center">
              <div className="text-[130px] leading-none">🏆</div>
              <span className="absolute right-6 top-4 text-3xl">⭐</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
