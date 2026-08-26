"use client";

import React from "react";

export default function OurProjectsSection() {
  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
      {/* Left Column - Text Content */}
      <div>
        <span className="badge-pill">OUR PROJECTS</span>

        <h1 className="mt-5 font-heading text-[34px] font-bold leading-tight text-ink sm:text-[40px] md:text-[44px]">
          Our Projects. <span className="gradient-text">Our Impact.</span>
        </h1>

        <div className="section-underline my-6"></div>

        <p className="max-w-lg text-base leading-relaxed text-muted">
          We&apos;ve partnered with organizations across energy, healthcare, education,
          and retail to deliver learning that works.
        </p>
      </div>

      {/* Right Column - Illustration */}
      <div className="relative mx-auto w-full max-w-xl">
        {/* Soft glow background */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100/60 via-purple-50/40 to-sky-100/40 blur-xl"></div>

        {/* Main SVG Illustration */}
        <svg
          viewBox="0 0 600 420"
          className="relative w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ─── Background ellipses (globe base) ─── */}
          <ellipse cx="300" cy="210" rx="200" ry="140" fill="#E8E0F0" opacity="0.4" />
          <ellipse cx="300" cy="210" rx="180" ry="120" fill="none" stroke="#D5CCE8" strokeWidth="1" strokeDasharray="4 4" />

          {/* ─── Globe grid lines (decorative) ─── */}
          <ellipse cx="300" cy="210" rx="120" ry="100" fill="none" stroke="#D5CCE8" strokeWidth="0.6" opacity="0.5" />
          <ellipse cx="300" cy="210" rx="60" ry="100" fill="none" stroke="#D5CCE8" strokeWidth="0.6" opacity="0.5" />
          <ellipse cx="300" cy="210" rx="200" ry="50" fill="none" stroke="#D5CCE8" strokeWidth="0.6" opacity="0.5" />
          <ellipse cx="300" cy="210" rx="200" ry="90" fill="none" stroke="#D5CCE8" strokeWidth="0.6" opacity="0.5" />

          {/* ─── Location pins on globe ─── */}
          <g transform="translate(240, 100)">
            <path d="M6 0C2.69 0 0 2.69 0 6C0 10 6 16 6 16C6 16 12 10 12 6C12 2.69 9.31 0 6 0Z" fill="#7C3AED" opacity="0.6" />
            <circle cx="6" cy="6" r="2.5" fill="#fff" opacity="0.8" />
          </g>
          <g transform="translate(350, 80)">
            <path d="M6 0C2.69 0 0 2.69 0 6C0 10 6 16 6 16C6 16 12 10 12 6C12 2.69 9.31 0 6 0Z" fill="#3B82F6" opacity="0.6" />
            <circle cx="6" cy="6" r="2.5" fill="#fff" opacity="0.8" />
          </g>

          {/* ─── Top-left card: Energy (wind + solar) ─── */}
          <rect x="60" y="20" width="80" height="80" rx="16" fill="#E8E0F0" opacity="0.8" />
          {/* Wind turbine */}
          <g transform="translate(80, 35)">
            <rect x="16" y="28" width="3" height="22" rx="1.5" fill="#4F46E5" />
            <circle cx="17.5" cy="26" r="4" fill="#4F46E5" />
            <path d="M17.5 26L10 16" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M17.5 26L25 18" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M17.5 26L17.5 14" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          {/* Solar panel */}
          <g transform="translate(88, 52)">
            <rect x="0" y="8" width="22" height="14" rx="2" fill="#3B82F6" opacity="0.7" transform="rotate(-10 11 15)" />
            <line x1="3" y1="10" x2="3" y2="20" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
            <line x1="8" y1="10" x2="8" y2="20" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
            <line x1="13" y1="10" x2="13" y2="20" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
            <line x1="18" y1="10" x2="18" y2="20" stroke="#fff" strokeWidth="0.5" opacity="0.4" />
          </g>

          {/* ─── Top-right card: Healthcare (shield + plus) ─── */}
          <rect x="460" y="20" width="80" height="80" rx="16" fill="#E0F2FE" opacity="0.8" />
          <g transform="translate(485, 35)">
            <rect x="6" y="2" width="28" height="30" rx="6" fill="#3B82F6" />
            <path d="M20 10V22M14 16H26" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* ─── Top-center card: Education (graduation cap) ─── */}
          <rect x="200" y="5" width="80" height="70" rx="16" fill="#F0E7FF" opacity="0.8" />
          <g transform="translate(222, 18)">
            <path d="M18 4L2 12L18 20L34 12L18 4Z" fill="#7C3AED" />
            <path d="M8 16V24C8 24 12 28 18 28C24 28 28 24 28 24V16" fill="#7C3AED" opacity="0.6" />
            <path d="M32 12V24" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* ─── Right card: Retail (shopping cart) ─── */}
          <rect x="500" y="130" width="70" height="70" rx="16" fill="#FEF3C7" opacity="0.6" />
          <g transform="translate(515, 145)">
            <path d="M6 6L10 6L14 20H24L28 10H12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="16" cy="26" r="3" fill="#F59E0B" />
            <circle cx="24" cy="26" r="3" fill="#F59E0B" />
          </g>

          {/* ─── Bottom-left person (sitting at desk) ─── */}
          <g transform="translate(40, 280)">
            {/* Desk */}
            <rect x="0" y="60" width="120" height="6" rx="3" fill="#D5CCE8" />
            <rect x="10" y="66" width="6" height="40" rx="2" fill="#D5CCE8" />
            <rect x="104" y="66" width="6" height="40" rx="2" fill="#D5CCE8" />
            {/* Laptop/Screen */}
            <rect x="25" y="30" width="50" height="30" rx="3" fill="#94A3B8" />
            <rect x="28" y="33" width="44" height="24" rx="2" fill="#DBEAFE" />
            {/* Head */}
            <circle cx="70" cy="10" r="14" fill="#FDBCB4" />
            <path d="M56 10C56 0 84 0 84 10C84 16 80 20 76 22C74 22 72 18 70 18C68 18 66 22 64 22C60 20 56 16 56 10Z" fill="#1E293B" />
            {/* Body */}
            <rect x="58" y="24" width="24" height="38" rx="8" fill="#9F7AEA" />
            {/* Arms */}
            <path d="M58 34L42 50" stroke="#9F7AEA" strokeWidth="6" strokeLinecap="round" />
            <path d="M82 34L75 50" stroke="#9F7AEA" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* ─── Bottom-right person (sitting at desk) ─── */}
          <g transform="translate(430, 280)">
            {/* Desk */}
            <rect x="0" y="60" width="120" height="6" rx="3" fill="#D5CCE8" />
            <rect x="10" y="66" width="6" height="40" rx="2" fill="#D5CCE8" />
            <rect x="104" y="66" width="6" height="40" rx="2" fill="#D5CCE8" />
            {/* Laptop/Screen */}
            <rect x="25" y="30" width="50" height="30" rx="3" fill="#94A3B8" />
            <rect x="28" y="33" width="44" height="24" rx="2" fill="#DBEAFE" />
            {/* Head */}
            <circle cx="50" cy="10" r="14" fill="#FDBCB4" />
            <path d="M36 10C36 2 64 2 64 10C64 14 60 16 56 16C54 12 52 10 50 10C48 10 46 12 44 16C40 16 36 14 36 10Z" fill="#4A3728" />
            {/* Body */}
            <rect x="38" y="24" width="24" height="38" rx="8" fill="#93C5FD" />
            {/* Arms */}
            <path d="M38 34L45 50" stroke="#93C5FD" strokeWidth="6" strokeLinecap="round" />
            <path d="M62 34L78 50" stroke="#93C5FD" strokeWidth="6" strokeLinecap="round" />
          </g>

          {/* ─── Central characters: People shaking hands ─── */}
          <g transform="translate(190, 100)">
            {/* ── Person 1 (left, blue shirt) ── */}
            <g>
              {/* Legs */}
              <rect x="50" y="120" width="14" height="60" rx="6" fill="#E2D8CC" />
              <rect x="76" y="120" width="14" height="60" rx="6" fill="#E2D8CC" />
              {/* Body */}
              <rect x="38" y="50" width="64" height="78" rx="16" fill="#93C5FD" />
              {/* Head */}
              <circle cx="70" cy="30" r="24" fill="#FDBCB4" />
              {/* Hair */}
              <path d="M46 30C46 8 94 8 94 30C94 38 90 44 84 46C80 42 76 38 70 38C64 38 60 42 56 46C50 44 46 38 46 30Z" fill="#1E293B" />
              {/* Eyes */}
              <circle cx="62" cy="28" r="2.5" fill="#1E293B" />
              <circle cx="78" cy="28" r="2.5" fill="#1E293B" />
              {/* Smile */}
              <path d="M64 36Q70 42 76 36" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Arms */}
              <path d="M38 64L18 80" stroke="#93C5FD" strokeWidth="10" strokeLinecap="round" />
              <path d="M102 64L130 76" stroke="#93C5FD" strokeWidth="10" strokeLinecap="round" />
            </g>

            {/* ── Person 2 (right, purple shirt) ── */}
            <g>
              {/* Legs */}
              <rect x="140" y="120" width="14" height="60" rx="6" fill="#E8D5C4" />
              <rect x="166" y="120" width="14" height="60" rx="6" fill="#E8D5C4" />
              {/* Body */}
              <rect x="128" y="50" width="64" height="78" rx="16" fill="#9F7AEA" />
              {/* Head */}
              <circle cx="160" cy="30" r="24" fill="#FDBCB4" />
              {/* Hair (longer, feminine) */}
              <path d="M136 30C136 8 184 8 184 30C184 40 180 48 174 50C176 56 180 66 180 76C180 78 178 80 176 80C174 80 172 78 172 76C172 66 170 56 168 50C164 46 160 42 160 42C160 42 156 46 152 50C150 56 148 66 148 76C148 78 146 80 144 80C142 80 140 78 140 76C140 66 144 56 146 50C140 48 136 40 136 30Z" fill="#4A3728" />
              {/* Face overlay */}
              <circle cx="160" cy="30" r="20" fill="#FDBCB4" />
              {/* Eyes */}
              <circle cx="152" cy="28" r="2.5" fill="#1E293B" />
              <circle cx="168" cy="28" r="2.5" fill="#1E293B" />
              {/* Smile */}
              <path d="M154 36Q160 42 166 36" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Arms */}
              <path d="M128 64L100 76" stroke="#9F7AEA" strokeWidth="10" strokeLinecap="round" />
              <path d="M192 64L212 80" stroke="#9F7AEA" strokeWidth="10" strokeLinecap="round" />
            </g>

            {/* Handshake area (overlap) */}
            <ellipse cx="115" cy="74" rx="12" ry="8" fill="#FDBCB4" />
          </g>

          {/* ─── Bottom-left plant ─── */}
          <g transform="translate(20, 340)">
            <rect x="8" y="20" width="20" height="24" rx="4" fill="#C4B5E0" />
            <path d="M18 20C18 8 4 -2 4 -2C4 -2 10 10 18 20Z" fill="#34D399" />
            <path d="M18 20C18 8 32 -2 32 -2C32 -2 26 10 18 20Z" fill="#10B981" />
          </g>

          {/* ─── Bottom-right plant ─── */}
          <g transform="translate(555, 340)">
            <rect x="8" y="20" width="20" height="24" rx="4" fill="#C4B5E0" />
            <path d="M18 20C18 8 4 -2 4 -2C4 -2 10 10 18 20Z" fill="#34D399" />
            <path d="M18 20C18 8 32 -2 32 -2C32 -2 26 10 18 20Z" fill="#10B981" />
          </g>

          {/* ─── Left woman with laptop ─── */}
          <g transform="translate(10, 180)">
            {/* Laptop */}
            <rect x="30" y="60" width="35" height="22" rx="3" fill="#94A3B8" />
            <rect x="33" y="63" width="29" height="16" rx="2" fill="#DBEAFE" />
            {/* Body */}
            <rect x="32" y="20" width="26" height="44" rx="12" fill="#E0D4F7" />
            {/* Head */}
            <circle cx="45" cy="10" r="12" fill="#FDBCB4" />
            {/* Hair */}
            <path d="M33 10C33 0 57 0 57 10C57 16 54 20 50 22C48 22 46 18 45 18C44 18 42 22 40 22C36 20 33 16 33 10Z" fill="#1E293B" />
            {/* Eyes */}
            <circle cx="41" cy="9" r="1.5" fill="#1E293B" />
            <circle cx="49" cy="9" r="1.5" fill="#1E293B" />
            {/* Arms */}
            <path d="M32 34L20 48" stroke="#E0D4F7" strokeWidth="5" strokeLinecap="round" />
            <path d="M58 34L72 48" stroke="#E0D4F7" strokeWidth="5" strokeLinecap="round" />
            {/* Legs */}
            <rect x="35" y="64" width="8" height="28" rx="4" fill="#E2D8CC" />
            <rect x="47" y="64" width="8" height="28" rx="4" fill="#E2D8CC" />
          </g>

          {/* ─── Right woman with laptop ─── */}
          <g transform="translate(440, 180)">
            {/* Laptop */}
            <rect x="15" y="60" width="35" height="22" rx="3" fill="#94A3B8" />
            <rect x="18" y="63" width="29" height="16" rx="2" fill="#DBEAFE" />
            {/* Body */}
            <rect x="18" y="20" width="26" height="44" rx="12" fill="#D4E0F7" />
            {/* Head */}
            <circle cx="31" cy="10" r="12" fill="#FDBCB4" />
            {/* Hair */}
            <path d="M19 10C19 0 43 0 43 10C43 16 40 20 36 22C34 22 32 18 31 18C30 18 28 22 26 22C22 20 19 16 19 10Z" fill="#1E293B" />
            {/* Eyes */}
            <circle cx="27" cy="9" r="1.5" fill="#1E293B" />
            <circle cx="35" cy="9" r="1.5" fill="#1E293B" />
            {/* Arms */}
            <path d="M18 34L6 48" stroke="#D4E0F7" strokeWidth="5" strokeLinecap="round" />
            <path d="M44 34L58 48" stroke="#D4E0F7" strokeWidth="5" strokeLinecap="round" />
            {/* Legs */}
            <rect x="21" y="64" width="8" height="28" rx="4" fill="#E8D5C4" />
            <rect x="33" y="64" width="8" height="28" rx="4" fill="#E8D5C4" />
          </g>
        </svg>
      </div>
    </section>
  );
}