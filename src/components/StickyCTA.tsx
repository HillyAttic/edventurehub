"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  if (isContact) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#2A1B8F] via-[#1733D9] to-[#00A6E8] py-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 px-5 md:flex-row">
          <div className="flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2A2A4A]">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                <circle cx="8.5" cy="12" r="1" fill="currentColor" stroke="none"></circle>
                <circle cx="12.5" cy="12" r="1" fill="currentColor" stroke="none"></circle>
                <circle cx="16.5" cy="12" r="1" fill="currentColor" stroke="none"></circle>
              </svg>
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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#0c0054] via-[#0038ff] to-[#00a8ff] px-4 py-3 sm:px-6 sm:py-4 shadow-[0_-8px_24px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="bg-white p-2.5 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0c0054]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <div className="text-white">
            <h3 className="font-medium text-sm sm:text-base leading-snug">Ready to start?</h3>
            <p className="text-white/90 text-xs sm:text-sm leading-snug">Whether you have a brief ready or just an idea — we're the right people to talk to.</p>
          </div>
        </div>

        <Link
          href="/contact"
          className="shrink-0 bg-white text-[#0c0054] font-semibold px-5 py-2.5 rounded-full hover:bg-slate-100 transition-all flex items-center gap-2 text-sm shadow-sm"
        >
          <span>Start a conversation</span>
          <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
