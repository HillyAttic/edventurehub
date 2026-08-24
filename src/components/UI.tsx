import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="badge-pill">{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  center = true,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-bold uppercase tracking-[2px] ${
            light ? "text-indigo-300" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-[28px] font-bold sm:text-[32px] md:text-[36px] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div className={`section-underline mt-3 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export function DotGrid({ className = "" }: { className?: string }) {
  return <div className={`dotted-grid h-28 w-28 opacity-70 ${className}`} />;
}

export function FloatingIcon({
  emoji,
  className = "",
  delay = "",
}: {
  emoji: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-lg ${delay} ${className}`}
    >
      {emoji}
    </div>
  );
}
