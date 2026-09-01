"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Working with Edventure has been a wonderful experience. What truly stands out for us is Vartika's ability to understand children's mindspace and translate that understanding into engaging and relevant content and scripts. Her openness to feedback and changes also gives us a great sense of comfort and makes the entire collaboration seamless.",
    sub: "What makes the experience even more valuable is the creativity, thoughtful design inputs, and attention to detail that she brings to every project. The projects we have worked on with Edventure so far have consistently been delivered within the agreed TAT, reflecting a strong commitment to quality and timelines.",
    name: "Neerja Chauhan",
    role: "Director, Jiva Education",
  },
  {
    text: "Working with Edventure eLearning has been a great experience. Their team is professional, responsive and committed to understanding our learning requirements. The content quality and timely support have made the overall collaboration smooth and effective. We truly appreciate their partnership and look forward to continuing this association.",
    name: "Riya Jaiswal",
    role: "Lead Associate - HR, Tata Power Renewables Energy Limited",
  },
  {
    text: "Partnering with Edventure has been a wonderful experience. Their team consistently delivers high-quality work with professionalism, creativity, and attention to detail. They are highly responsive, communicate clearly throughout the project, and always go the extra mile to ensure successful outcomes. We truly value our collaboration with Edventure and look forward to many more successful projects together.",
    name: "Priyanka Namtoar",
    role: "Lead - Capability Development, Tata Power Renewable Energy Ltd.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[current];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="relative overflow-visible rounded-3xl border border-slate-200/60 bg-[#f0eef8] p-6 pt-8 sm:p-8 sm:pt-10 md:p-12 md:pt-14 lg:p-14 lg:pt-16">
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto] md:gap-10">
          <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
            {/* Decorative quote marks */}
            <svg
              className="-mt-2 h-10 w-10 shrink-0 sm:-mt-4 sm:h-14 sm:w-14 md:-mt-6 md:h-20 md:w-20"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="quoteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#818cf8" />
                </linearGradient>
              </defs>
              <path
                d="M14 36c0 6.627-5.373 12-12 12V36c0-6.627 5.373-12 12-12v12zm24 0c0 6.627-5.373 12-12 12V36c0-6.627 5.373-12 12-12v12z"
                fill="url(#quoteGrad)"
              />
            </svg>
            <div>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
                &ldquo;{t.text}&rdquo;
              </p>
              {t.sub && (
                <p className="mt-3 text-xs leading-relaxed text-gray-500 sm:text-sm md:text-base">
                  {t.sub}
                </p>
              )}
              <p className="mt-4 text-xs text-muted sm:mt-5 sm:text-sm">
                — <span className="font-bold text-ink">{t.name}</span>, {t.role}
              </p>
            </div>
          </div>
          <div className="hidden justify-self-end sm:block">
            <img
              src="/images/client, testimonial placeholder.png"
              alt="Client testimonial"
              className="mx-auto h-48 w-48 object-contain sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === current ? "bg-primary" : "border border-primary"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
