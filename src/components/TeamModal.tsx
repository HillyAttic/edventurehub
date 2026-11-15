"use client";

import { useRef } from "react";
import { X } from "lucide-react";

const TEAM = [
  { name: "Paritosh Jain", role: "Finance Head", email: "admin@edventurehub.com", primary: true },
  { name: "Vartika Jain", role: "Founder, ID", email: "vartika@edventurehub.com", primary: true },
  { name: "Aruna", role: "Jr. SL Developer", email: "aruna@edventurehub.com" },
  { name: "Ayushi Bhatt", role: "Storyline Developer", email: "ayushi@edventurehub.com" },
  { name: "Bishal Saha", role: "Storyline Developer", email: "bishal@edventurehub.com" },
  { name: "Brindha", role: "Team Lead, SL Developer", email: "brindha@edventurehub.com" },
  { name: "Fatima Hasan", role: "Graphic Designer", email: "fatima@edventurehub.com" },
  { name: "Kalpana", role: "Storyline Developer", email: "kalpana@edventurehub.com" },
  { name: "Madeeha", role: "Team Lead, Graphic Designer", email: "madeeha@edventurehub.com" },
  { name: "Md Shakir", role: "Motion Graphic Artist", email: "shakir@edventurehub.com" },
  { name: "Rajeshwari", role: "Instructional Designer", email: "rajeshwari@edventurehub.com" },
  { name: "Statha Paul", role: "Instructional Designer", email: "statha@edventurehub.com" },
  { name: "Vignesh K", role: "Sr. Motion Graphic Designer", email: "vignesh@edventurehub.com" },
];

export default function TeamModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="text-sm font-semibold text-gray-600 hover:text-purple-600"
      >
        View all →
      </button>

      <dialog
        ref={dialogRef}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="m-auto w-[calc(100%-2rem)] max-w-4xl rounded-3xl bg-white p-0 text-left text-gray-900 shadow-2xl backdrop:bg-black/50"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-bold">The Team</h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid max-h-[80vh] grid-cols-1 gap-2.5 overflow-y-auto px-5 py-5 sm:grid-cols-2 md:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.email}
              className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 ${
                member.primary
                  ? "border-purple-300 bg-purple-50 ring-1 ring-purple-200"
                  : "border-gray-100 bg-[#FFFDF5]"
              }`}
            >
              <img
                src="/icons/services/user-circle-svgrepo-com.svg"
                alt=""
                className="h-9 w-9 shrink-0"
              />
              <div className="min-w-0 text-left">
                <p className="truncate text-sm font-semibold">{member.name}</p>
                <p className="truncate text-xs font-medium text-purple-700">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="block truncate text-xs text-gray-500 hover:text-purple-600"
                >
                  {member.email}
                </a>
                {member.primary && (
                  <span className="mt-1 inline-block rounded-full bg-purple-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Primary contact
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </dialog>
    </>
  );
}
