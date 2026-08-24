"use client";

import { useState, type FormEvent } from "react";
import { Badge } from "@/components/UI";
import { ContactIllustration } from "@/components/HeroIllustration";
import { serviceOptions, contactInfo } from "@/data/site";

const quickConnect = [
  {
    icon: "✉️",
    bg: "bg-purple-100",
    color: "text-purple-600",
    title: "Email Us",
    content: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: "📞",
    bg: "bg-pink-100",
    color: "text-pink-600",
    title: "Call Us",
    content: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    icon: "📍",
    bg: "bg-blue-100",
    color: "text-blue-600",
    title: "Visit Us",
    content: contactInfo.location,
    href: undefined,
  },
  {
    icon: "in",
    bg: "bg-indigo-100",
    color: "text-indigo-700",
    title: "Follow Us",
    content: "LinkedIn",
    href: contactInfo.linkedin,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.currentTarget.reset();
  };

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Badge>Let's Collaborate</Badge>
          <h1 className="mt-5 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
            Let's Build Something <span className="gradient-text-warm">Worth Learning</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted">
            Tell us a bit about your project and let's start a conversation about what great
            learning could look like for your team.
          </p>
        </div>
        <ContactIllustration />
      </section>

      {/* GET IN TOUCH */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-primary">Get in Touch</p>
            <div className="section-underline my-3" />
            <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">
              We're Here to Help You Succeed.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
            <div className="dotted-grid mt-8 h-24 w-24 opacity-70" />
            <div className="relative mt-10 flex h-48 items-center justify-center">
              <div className="text-8xl">📮</div>
              <span className="absolute right-8 top-4 text-3xl">✈️</span>
              <span className="absolute left-6 bottom-2 text-2xl">🚩</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-100 bg-lightbg p-6 shadow-md md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Work Email *</label>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Company / Organisation
                </label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Services Interested in
                </label>
                <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition">
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Brief Project Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us a little about your project..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-gradient mt-6 flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold"
            >
              Send Message ✈️
            </button>
            {submitted && (
              <p className="mt-3 text-center text-sm font-medium text-green-600">
                Thanks! Your message has been sent — we'll be in touch shortly.
              </p>
            )}
            <p className="mt-4 text-center text-xs text-muted">
              🔒 We respect your privacy. Your information is safe with us.
            </p>
          </form>
        </div>
      </section>

      {/* QUICK CONNECT */}
      <section className="mx-auto max-w-[1200px] px-5 py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[2px] text-primary">Quick Connect</p>
          <div className="section-underline mx-auto my-3" />
          <h2 className="font-heading text-2xl font-bold text-ink md:text-3xl">
            Other Ways to Reach Us
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickConnect.map((q) => (
            <div
              key={q.title}
              className="card-hover rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm"
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${q.bg} text-xl font-bold ${q.color}`}
              >
                {q.icon}
              </div>
              <h3 className="mb-1.5 font-heading text-base font-bold text-ink">{q.title}</h3>
              {q.href ? (
                <a
                  href={q.href}
                  target={q.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm text-muted transition hover:text-primary"
                >
                  {q.title === "Follow Us" ? "LinkedIn :" : q.content}
                </a>
              ) : (
                <p className="text-sm text-muted">{q.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
