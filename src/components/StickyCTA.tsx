"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#2A1B8F] via-[#1733D9] to-[#00A6E8] py-4">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-5 md:flex-row">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2A2A4A]">
            {isContact ? (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                <circle cx="8.5" cy="12" r="1" fill="currentColor" stroke="none"></circle>
                <circle cx="12.5" cy="12" r="1" fill="currentColor" stroke="none"></circle>
                <circle cx="16.5" cy="12" r="1" fill="currentColor" stroke="none"></circle>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <rect x="7" y="13" width="3" height="3" rx="0.5" fill="currentColor" stroke="none"></rect>
              </svg>
            )}
          </span>
          <p className="text-[15px] font-medium leading-relaxed text-white">
            Whether you have a brief ready<br className="hidden md:block" /> or just an idea — we're the right people to talk to.
          </p>
        </div>
        <Link
          href="/contact"
          className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-[15px] font-bold text-[#1733D9] shadow-lg transition hover:bg-blue-50"
        >
          Book a free Discovery call
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
