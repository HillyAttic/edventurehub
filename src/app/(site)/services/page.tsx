"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { Badge } from "@/components/UI";

type Service = {
  no: string;
  title: string;
  description: string;
  icon: string;
  emoji: string;
};

const SERVICES: Service[] = [
  {
    no: "01",
    title: "Learning Portal Setup & Deployment",
    description:
      "Design, build, and launch a branded learning portal with seamless integrations and reporting.",
    icon: "/icons/services/portal.png",
    emoji: "🖥️",
  },
  {
    no: "02",
    title: "SCORM Module Development",
    description:
      "Interactive, standards-compliant SCORM modules that play flawlessly across every LMS.",
    icon: "/icons/services/scorm.png",
    emoji: "🧩",
  },
  {
    no: "03",
    title: "Gamified Learning Modules",
    description:
      "Game mechanics and challenges that turn passive learners into active participants.",
    icon: "/icons/services/gamified.png",
    emoji: "🎮",
  },
  {
    no: "04",
    title: "ILT & VILT Decks",
    description:
      "Facilitator-ready decks designed for engaging instructor-led and virtual classrooms.",
    icon: "/icons/services/ilt.png",
    emoji: "🎓",
  },
  {
    no: "05",
    title: "Microlearning Nuggets",
    description:
      "Bite-sized, mobile-first learning nuggets built for busy, on-the-go learners.",
    icon: "/icons/services/microlearning.png",
    emoji: "📱",
  },
  {
    no: "06",
    title: "Video-Based Training",
    description:
      "Scripted, shot, and animated training videos that simplify complex processes.",
    icon: "/icons/services/video.png",
    emoji: "🎬",
  },
  {
    no: "07",
    title: "Instructional Design Consulting",
    description:
      "Strategic guidance on learning architecture, blended pathways, and outcomes.",
    icon: "/icons/services/instructional.png",
    emoji: "💡",
  },
  {
    no: "08",
    title: "Storyboarding & Script Writing",
    description:
      "Narrative-driven storyboards and scripts that give every module a strong spine.",
    icon: "/icons/services/storyboard.png",
    emoji: "📝",
  },
  {
    no: "09",
    title: "Content Conversion & Modernization",
    description:
      "Revamp legacy PPTs and PDFs into modern, interactive digital experiences.",
    icon: "/icons/services/conversion.png",
    emoji: "🔄",
  },
  {
    no: "10",
    title: "Translation & Localization",
    description:
      "Culturally-tuned localization so your training resonates in every market.",
    icon: "/icons/services/translation.png",
    emoji: "🌐",
  },
  {
    no: "11",
    title: "Learning Campaigns",
    description:
      "End-to-end awareness and learning campaigns that drive measurable engagement.",
    icon: "/icons/services/campaigns.png",
    emoji: "🎯",
  },
  {
    no: "12",
    title: "Learning Portal Creation",
    description:
      "Branded learning portals that bring together your content in one seamless hub.",
    icon: "/icons/services/portal.png",
    emoji: "🚀",
  },
  {
    no: "13",
    title: "Promotional & Buzz Videos",
    description:
      "High-energy promotional and buzz videos that build excitement for new launches.",
    icon: "/icons/services/promo.png",
    emoji: "📣",
  },
];

function ArrowButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E4EC] bg-white text-[#8B3DFF] shadow-[0_1px_2px_rgba(23,23,43,0.05)] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-purple group-hover:text-white"
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

function IconTile({ service }: { service: Service }) {
  return (
    <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-[22px] bg-white sm:h-[112px] sm:w-[112px]">
      <img
        src={service.icon}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        onError={(e) => {
          const img = e.currentTarget;
          const span = document.createElement("span");
          span.className =
            "flex h-full w-full items-center justify-center text-4xl sm:text-5xl";
          span.textContent = service.emoji;
          img.replaceWith(span);
        }}
      />
    </div>
  );
}

function ServiceCard({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: (service: Service) => void;
}) {
  return (
    <article className="card-hover group relative flex flex-col rounded-[28px] border border-[#E4E4EC] bg-white px-3 pb-2 pt-3 shadow-[0_2px_12px_rgba(23,23,43,0.05)] sm:px-2.5 sm:pt-4">
      <IconTile service={service} />

      <p className="mt-6 text-lg font-extrabold leading-none text-[#7C3AED] sm:mt-[46px]">
        {service.no}
      </p>
      <h3 className="mt-3 line-clamp-2 font-heading text-xl font-bold leading-[1.4] text-ink sm:mt-4 sm:text-2xl">
        {service.title}
      </h3>
      <p className="mt-4 line-clamp-2 min-h-[42px] text-[14px] leading-[1.4] text-[#808595] sm:mt-11 sm:text-[15px]">
        {service.description}
      </p>

      <div className="absolute bottom-[46px] right-2">
        <ArrowButton label={`View details: ${service.title}`} onClick={() => onOpen(service)} />
      </div>
    </article>
  );
}

function ServiceCardWide({
  service,
  onOpen,
}: {
  service: Service;
  onOpen: (service: Service) => void;
}) {
  return (
    <article className="card-hover group flex w-full max-w-[570px] flex-col items-start gap-4 rounded-[28px] border border-[#E4E4EC] bg-white px-4 py-5 shadow-[0_2px_12px_rgba(23,23,43,0.05)] sm:flex-row sm:items-center sm:gap-8 sm:px-6 sm:py-4 md:gap-11 md:pl-[46px] md:pr-2.5">
      <IconTile service={service} />

      <div className="min-w-0 flex-1">
        <p className="text-lg font-extrabold leading-none text-[#7C3AED]">
          {service.no}
        </p>
        <h3 className="mt-1.5 font-heading text-xl font-bold leading-tight text-ink sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[14px] leading-[1.4] text-[#808595] sm:text-[15px]">
          {service.description}
        </p>
      </div>

      <div className="self-end sm:self-auto">
        <ArrowButton label={`View details: ${service.title}`} onClick={() => onOpen(service)} />
      </div>
    </article>
  );
}

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active) dialog.showModal();
    else dialog.close();
  }, [active]);

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 md:px-5 md:py-20 lg:py-24">
        <div>
          <Badge>Our Expertise</Badge>
          <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
            Everything You Need to Build{" "}
            <span className="gradient-text">Brilliant Learning Experiences</span>
          </h1>
          <div className="section-underline my-6" />
          <p className="max-w-lg text-base leading-relaxed text-muted">
            From strategy to screen, we handle the full spectrum of eLearning development.
          </p>
        </div>
        <Image
          src="/images/servicespage1.png"
          alt="E-learning platform capabilities"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full max-w-[760px]"
        />
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white pb-12 pt-10 sm:pb-16 sm:pt-12 lg:pb-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-5">
          <h2 className="text-center font-heading text-2xl font-bold text-ink sm:text-[32px] md:text-[38px]">
            Services
          </h2>

          {/* First 12 cards fill the 4-column grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 12).map((service) => (
              <ServiceCard key={service.no} service={service} onOpen={setActive} />
            ))}
          </div>

          {/* 13th card — wide, horizontal, centered */}
          <div className="mt-6 flex justify-center">
            <ServiceCardWide service={SERVICES[12]} onOpen={setActive} />
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-[28px] bg-white p-0 text-left text-gray-900 shadow-2xl backdrop:bg-black/50"
      >
        {active && (
          <div className="relative">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="px-6 pb-6 pt-6 sm:px-8">
              <IconTile service={active} />
              <p className="mt-5 text-lg font-extrabold leading-none text-[#7C3AED]">
                {active.no}
              </p>
              <h2 className="mt-2 pr-8 font-heading text-2xl font-bold leading-tight text-ink">
                {active.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#808595]">
                {active.description}
              </p>
              <Link
                href="/contact"
                onClick={() => dialogRef.current?.close()}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-purple px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book a free Discovery call
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        )}
      </dialog>

    </div>
  );
}
