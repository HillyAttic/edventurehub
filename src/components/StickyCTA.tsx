"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const pathname = usePathname();
  const isContact = pathname === "/contact";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#0c0054] via-[#0038ff] to-[#00a8ff] px-4 py-3 sm:px-6 sm:py-4 shadow-[0_-8px_24px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 sm:flex-row">
        {/* Left: Icon + Text */}
        <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="bg-white p-2.5 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
            {isContact ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0c0054]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#0c0054]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zM14.25 12h.008v.008H14.25V12zm0 3h.008v.008H14.25V15zm0 2.25h.008v.008H14.25v-.008zM16.5 12h.008v.008H16.5V12zm0 3h.008v.008H16.5V15z" />
              </svg>
            )}
          </div>
          <div className="text-white">
            <h3 className="font-medium text-sm sm:text-base leading-snug">
              {isContact ? "Ready to start?" : "Not sure which format fits your need?"}
            </h3>
            <p className="text-white/90 text-xs sm:text-sm leading-snug">
              {isContact
                ? "Whether you have a brief ready or just an idea — we're the right people to talk to."
                : "Book a Free Discovery Call — We'll help you figure it out."}
            </p>
          </div>
        </div>

        {/* Right: CTA Button */}
        <Link
          href="/contact"
          className="shrink-0 bg-white text-[#0c0054] font-semibold px-5 py-2.5 rounded-full hover:bg-slate-100 transition-all flex items-center gap-2 text-sm shadow-sm"
        >
          <span>{isContact ? "Start a conversation" : "Book a free Discovery call"}</span>
          <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
