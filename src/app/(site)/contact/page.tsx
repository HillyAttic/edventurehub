"use client";

import Image from "next/image";
import { useState, type FormEvent, type SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const SERVICES = [
  "LMS Setup",
  "SCORM Modules",
  "Gamified Learning",
  "ILT/VILT Decks",
  "Microlearning",
  "Video-Based Training",
  "Instructional Design Consulting",
  "Storyboarding",
  "Content Conversion",
  "Translation",
  "Learning Campaigns",
  "Learning Portal",
  "Promotional Videos",
];

const inputCls =
  "w-full rounded-lg border border-[#DCDFE9] bg-white px-4 py-3 text-sm text-[#101331] " +
  "placeholder-[#98A0B3] outline-none transition focus:border-[#4B2FE2] focus:ring-4 focus:ring-[#4B2FE2]/10";

/* ------------------------------------------------------------------ */
/* Inline SVG icons (lucide-style, no emoji)                           */
/* ------------------------------------------------------------------ */

type IconProps = SVGProps<SVGSVGElement>;

const ChevronDownIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const SendIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const LockIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="18" height="11" x="3" y="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const MailIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect width="14" height="20" x="5" y="2" rx="2" />
    <path d="M12 18h.01" />
  </svg>
);

const MapPinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const LinkedInIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" {...p}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.11 20.45H3.55V9h3.56v11.45Z" />
  </svg>
);

const ChatIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <circle cx="8.5" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="12.5" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const ArrowRightIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="bg-[#F4F4FB]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-14 md:grid-cols-[1fr_1.15fr] md:py-16">
        <div>
          <span className="inline-block rounded-full border border-[#E3E0F6] bg-[#EEECFA] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#4B2FE2]">
            Let&apos;s Collaborate
          </span>
          <h1 className="mt-6 font-heading text-[36px] font-bold leading-[1.18] tracking-tight text-[#0E1220] sm:text-[42px] md:text-[46px]">
            Let&apos;s Build
            <br />
            Something
            <br />
            <span className="bg-gradient-to-r from-[#8A0FE8] to-[#249CF2] bg-clip-text text-transparent">
              Worth Learning
            </span>
          </h1>
        </div>
        <div className="relative mx-auto w-full max-w-[640px]">
          <Image
            src="/images/hero-illustration.png"
            alt="3D illustration of a designer working on a laptop surrounded by mail, chat and paper-plane icons"
            width={1280}
            height={720}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Get in touch + form                                              */
/* ------------------------------------------------------------------ */

function ContactSection() {
  const [service, setService] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    // TODO: wire this to your API / email service
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 md:grid-cols-[1fr_1.35fr]">
        {/* Left column */}
        <div>
          <p className="text-[15px] font-extrabold uppercase tracking-[0.06em] text-[#4B2FE2]">
            Get in Touch
          </p>
          <div className="mt-3 h-[3px] w-10 rounded bg-[#4B2FE2]" />
          <h2 className="mt-5 font-heading text-[28px] font-bold leading-snug text-[#0E1220] md:text-[31px]">
            We&apos;re Here to Help You Succeed.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5B6472]">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="relative mt-4 max-w-[420px]">
            <Image
              src="/images/mailbox-illustration.png"
              alt="3D illustration of a purple mailbox with a paper plane"
              width={1280}
              height={720}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-white p-6 shadow-[0_18px_50px_-12px_rgba(35,32,90,0.16)] ring-1 ring-[#EEEFF6] md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required type="text" name="name" placeholder="Full Name *" className={inputCls} />
            <input required type="email" name="email" placeholder="Work Email *" className={inputCls} />
            <input type="text" name="company" placeholder="Company / Organisation" className={inputCls} />
            <input type="tel" name="phone" placeholder="Phone Number" className={inputCls} />

            <div className="relative sm:col-span-2">
              <select
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                aria-label="Services Interested in"
                className={
                  inputCls +
                  " appearance-none pr-10 " +
                  (service === "" ? "text-[#98A0B3]" : "text-[#101331]")
                }
              >
                <option value="">Services Interested in</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="text-[#101331]">
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5B6472]" />
            </div>

            <textarea
              name="message"
              rows={5}
              placeholder="Brief Project Description"
              className={inputCls + " resize-none sm:col-span-2"}
            />
          </div>

          <button
            type="submit"
            className="relative mt-6 w-full rounded-lg bg-gradient-to-r from-[#150F66] via-[#1223C4] to-[#0B4AE0] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition hover:brightness-110"
          >
            {sent ? "Message Sent ✓" : "Send Message"}
            <span className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0B4AE0]">
              <SendIcon />
            </span>
          </button>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-[#8A93A3]">
            <LockIcon /> We respect your privacy. Your information is safe with us.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Quick connect                                                    */
/* ------------------------------------------------------------------ */

function QuickConnectSection() {
  const cards = [
    {
      title: "Email Us",
      iconBg: "bg-[#E6DEFB]",
      iconColor: "text-[#7C4DEC]",
      Icon: MailIcon,
      body: (
        <a href="mailto:admin@edventurehub.com" className="text-[13px] text-[#5B6472] transition hover:text-[#4B2FE2]">
          admin@edventurehub.com
        </a>
      ),
    },
    {
      title: "Call Us",
      iconBg: "bg-[#FBE1EC]",
      iconColor: "text-[#E85D9A]",
      Icon: PhoneIcon,
      body: (
        <a href="tel:+91-9582232050" className="text-[13px] text-[#5B6472] transition hover:text-[#4B2FE2]">
          +91-9582232050
        </a>
      ),
    },
    {
      title: "Visit Us",
      iconBg: "bg-[#DFF3F1]",
      iconColor: "text-[#0FA3A3]",
      Icon: MapPinIcon,
      body: <p className="text-[13px] text-[#5B6472]">Delhi, India</p>,
    },
    {
      title: "Follow Us",
      iconBg: "bg-[#D9E8F8]",
      iconColor: "text-[#0A66C2]",
      Icon: LinkedInIcon,
      body: (
        <p className="text-[12px] leading-relaxed text-[#5B6472]">
          LinkedIn :{" "}
          <a
            href="https://www.linkedin.com/in/edventure-elearning-hub-2660b7242/"
            target="_blank"
            rel="noreferrer"
            className="break-all underline transition hover:text-[#0A66C2]"
          >
            https://www.linkedin.com/in/edventure-elearning-hub-2660b7242/
          </a>
        </p>
      ),
    },
  ];

  return (
    <section className="bg-[#F7F8FC] py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="text-center">
          <p className="text-[15px] font-extrabold uppercase tracking-[0.06em] text-[#4B2FE2]">
            Quick Connect
          </p>
          <div className="mx-auto mt-3 h-[3px] w-16 rounded bg-[#4B2FE2]" />
          <h2 className="mt-5 font-heading text-[26px] font-bold text-[#0E1220] md:text-[30px]">
            Other Ways to Reach Us
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ title, iconBg, iconColor, Icon, body }) => (
            <div
              key={title}
              className="rounded-xl border border-[#EEEFF6] bg-white px-6 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
                <Icon />
              </div>
              <h3 className="mb-1.5 font-heading text-[15px] font-bold text-[#0E1220]">{title}</h3>
              {body}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Bottom discovery-call CTA bar                                    */
/* ------------------------------------------------------------------ */

function DiscoveryCtaBar() {
  return (
    <section className="bg-gradient-to-r from-[#2A1B8F] via-[#1733D9] to-[#00A6E8] py-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 px-5 md:flex-row">
        <div className="flex items-center gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2A2A4A]">
            <ChatIcon />
          </span>
          <p className="text-[15px] font-medium leading-relaxed text-white">
            Whether you have a brief ready
            <br className="hidden md:block" /> or just an idea — we&apos;re the right people to talk to.
          </p>
        </div>
        <a
          href="/contact"
          className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#1733D9] shadow-lg transition hover:bg-blue-50"
        >
          Book a free Discovery call <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <QuickConnectSection />
      <DiscoveryCtaBar />
    </div>
  );
}
