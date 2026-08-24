"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy px-5 py-4 shadow-[0_-8px_24px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-3 text-center text-sm text-white sm:text-left">
          <span className="text-xl">{isContact ? "💬" : "📅"}</span>
          <p className="max-w-2xl leading-snug">
            {isContact ? (
              <>
                Whether you have a brief ready or just an idea — we're the right people to talk
                to.
              </>
            ) : (
              <>
                Not sure which format fits your need?{" "}
                <span className="font-semibold">
                  Book a Free Discovery Call — We'll help you figure it out.
                </span>
              </>
            )}
          </p>
        </div>
        <Link
          href="/contact"
          className="btn-outline-light w-full flex-shrink-0 px-6 py-2.5 text-center text-sm font-semibold sm:w-auto"
        >
          Book a free Discovery call →
        </Link>
      </div>
    </div>
  );
}
