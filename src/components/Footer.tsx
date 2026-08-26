import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { navLinks, contactInfo } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pb-28 pt-10 sm:pt-14">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:gap-10 sm:px-6 sm:grid-cols-[1.4fr_1fr_1.4fr] lg:px-8">
        <div>
          <Link href="/">
            <Image
              src="/images/branding_edVenture-5.png"
              alt="edVenture"
              width={200}
              height={54}
              className="h-[52px] w-auto object-contain"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            edVenture eLearning Hub is a story-first eLearning design studio founded in 2022 by
            Vartika Jain — crafting engaging, high-impact learning experiences for modern
            workforces.
          </p>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0a66c2] shadow-sm ring-1 ring-slate-200 transition hover:bg-[#0a66c2] hover:text-white"
            aria-label="LinkedIn"
          >
            <ExternalLink className="h-[18px] w-[18px]" />
          </a>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-xs font-bold uppercase tracking-widest text-ink/70">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-xs font-bold uppercase tracking-widest text-ink/70">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition">
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>{contactInfo.location}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] border-t border-slate-200 px-4 py-6 sm:px-6 text-center text-xs text-muted lg:px-8">
        © 2024 edVenture eLearning Hub. All rights reserved.
      </div>
    </footer>
  );
}
