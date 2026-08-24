import Link from "next/link";
import { navLinks, contactInfo } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-100 pb-28 pt-14">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.4fr_1fr_1.4fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple text-lg font-bold text-white">
              e
            </span>
            <span className="font-heading text-lg font-bold text-ink">edVenture</span>
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
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm transition hover:bg-primary hover:text-white"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-ink">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="transition hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-ink">
            Contact
          </h4>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>
              📧{" "}
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                {contactInfo.email}
              </a>
            </li>
            <li>
              📞{" "}
              <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                {contactInfo.phone}
              </a>
            </li>
            <li>📍 {contactInfo.location}</li>
            <li>
              🔗{" "}
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] border-t border-slate-200 px-5 pt-6 text-center text-xs text-muted">
        © 2024 edVenture eLearning Hub. All rights reserved.
      </div>
    </footer>
  );
}
