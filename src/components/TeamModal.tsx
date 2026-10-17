"use client";

import { useRef } from "react";
import { X } from "lucide-react";

const TEAM = [
  { name: "Aruna", email: "aruna@edventurehub.com" },
  { name: "Ayushi Bhatt", email: "ayushi@edventurehub.com" },
  { name: "Bishal Saha", email: "bishal@edventurehub.com" },
  { name: "Brindha", email: "brindha@edventurehub.com" },
  { name: "Fatima Hasan", email: "fatima@edventurehub.com" },
  { name: "Kalpana", email: "kalpana@edventurehub.com" },
  { name: "Madeeha", email: "madeeha@edventurehub.com" },
  { name: "Md Shakir", email: "shakir@edventurehub.com" },
  { name: "Paritosh Jain", email: "admin@edventurehub.com" },
  { name: "Rajeshwari", email: "rajeshwari@edventurehub.com" },
  { name: "Statha Paul", email: "statha@edventurehub.com" },
  { name: "Vartika Jain", email: "vartika@edventurehub.com" },
  { name: "Vignesh K", email: "vignesh@edventurehub.com" },
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
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#FFFDF5] px-3 py-2.5"
            >
              <img
                src="/icons/services/user-circle-svgrepo-com.svg"
                alt=""
                className="h-9 w-9 shrink-0"
              />
              <div className="min-w-0 text-left">
                <p className="truncate text-sm font-semibold">{member.name}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="block truncate text-xs text-gray-500 hover:text-purple-600"
                >
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </dialog>
    </>
  );
}
