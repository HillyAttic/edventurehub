"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      pathname === path ? "text-primary" : "text-slate-600"
    }`;

  const mobileClass = (path: string) =>
    `rounded-lg px-3 py-2.5 text-sm font-medium ${
      pathname === path ? "bg-badgebg text-primary" : "text-slate-600 hover:bg-slate-50"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white/70"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/images/branding_edVenture-5.png"
            alt="edVenture"
            width={220}
            height={60}
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className={desktopClass(link.path)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 md:hidden"
        >
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-white shadow-md transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-t border-slate-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={mobileClass(link.path)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
