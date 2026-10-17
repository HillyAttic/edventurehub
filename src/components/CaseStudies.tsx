"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { caseStudies } from "@/data/site";

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const active = openIndex === null ? null : caseStudies[openIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active) dialog.showModal();
    else dialog.close();
  }, [active]);

  return (
    <>
      <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 md:grid-cols-3">
        {caseStudies.map((c, i) => (
          <div
            key={c.id}
            className="flex flex-col overflow-hidden rounded-3xl border border-blue-100 bg-[#F0F6FF] p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-44 w-full overflow-hidden rounded-2xl">
              <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
              <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-md">
                Case Study {c.id}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-2 pt-4">
              <h3 className="mb-2 font-heading text-lg font-bold text-gray-900">{c.title} Challenge:</h3>
              <p className="text-sm leading-relaxed text-gray-600">{c.challenge}</p>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="mt-auto flex items-center gap-1 self-start pt-4 text-sm font-semibold text-sky-600 hover:underline"
              >
                Read More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setOpenIndex(null)}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="m-auto w-[calc(100%-2rem)] max-w-5xl rounded-3xl bg-white p-0 text-left text-gray-900 shadow-2xl backdrop:bg-black/50"
      >
        {active && (
          <div className="relative grid max-h-[85vh] md:grid-cols-2">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-white/85 p-1.5 text-gray-700 backdrop-blur-md hover:bg-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-48 sm:h-56 md:h-full md:min-h-[22rem]">
              <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-md">
                Case Study {active.id}
              </span>
            </div>
            <div className="min-h-0 overflow-y-auto px-6 py-5">
              <h2 className="pr-10 font-heading text-2xl font-bold text-gray-900">{active.title}</h2>
              {[
                ["The Challenge", active.challenge],
                ["Our Approach", active.approach],
                ["The Solution", active.solution],
                ["The Outcome", active.outcome],
              ].map(([heading, body]) => (
                <div key={heading} className="mt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-sky-600">{heading}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
