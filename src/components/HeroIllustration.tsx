import type { ReactNode } from "react";
import { FloatingIcon, DotGrid } from "./UI";

export function BigEIllustration() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[380px]">
      <DotGrid className="absolute -top-4 right-0 sm:right-4" />
      <div className="absolute h-64 w-64 rounded-full bg-gradient-to-br from-indigo-200/60 to-purple-200/60 blur-2xl" />
      <div className="relative flex h-56 w-56 items-center justify-center rounded-[40%] bg-gradient-to-br from-primary via-indigo-500 to-purple text-[140px] font-extrabold leading-none text-white shadow-2xl sm:h-64 sm:w-64">
        e
        <span className="absolute -bottom-3 left-6 text-4xl">🧑‍💻</span>
        <span className="absolute -right-4 top-6 text-4xl">👩‍💻</span>
        <span className="absolute -left-6 bottom-8 text-3xl">🧑‍</span>
      </div>
      <FloatingIcon emoji="▶️" className="left-2 top-4 animate-float" />
      <FloatingIcon emoji="📊" className="left-4 bottom-6 animate-float-slow" />
      <FloatingIcon emoji="📈" className="right-2 top-1/3 animate-float" />
      <FloatingIcon emoji="🎓" className="right-8 bottom-2 animate-float-slow" />
    </div>
  );
}

export function BrainIllustration() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[380px]">
      <DotGrid className="absolute -top-4 right-0" />
      <div className="absolute h-60 w-60 rounded-full bg-gradient-to-br from-indigo-200/70 to-purple-200/70 blur-2xl" />
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple text-7xl shadow-2xl animate-float-slow">
        🧠
      </div>
      <div className="absolute bottom-6 h-4 w-48 rounded-full bg-indigo-200/70 blur-sm" />
      <FloatingIcon emoji="💻" className="left-4 top-10 animate-float" />
      <FloatingIcon emoji="💡" className="right-4 top-6 animate-float-slow" />
      <FloatingIcon emoji="📝" className="left-2 bottom-16 animate-float" />
      <FloatingIcon emoji="✅" className="right-2 bottom-14 animate-float-slow" />
    </div>
  );
}

export function LaptopIllustration() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-xl items-center justify-center sm:h-[460px]">
      <DotGrid className="absolute -top-4 right-0" />
      <div className="absolute h-72 w-80 rounded-3xl bg-gradient-to-br from-indigo-200/60 to-purple-200/60 blur-2xl" />

      {/* 3D Laptop */}
      <div className="relative">
        {/* Laptop Screen */}
        <div className="relative h-64 w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
          <div className="flex items-center gap-1.5 bg-slate-700/50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
          </div>
          {/* Video Interface */}
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-4">
            <div className="h-32 w-full rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600">
              <div className="flex h-full items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-slate-600">
                <div className="h-full w-1/3 rounded-full bg-purple-400" />
              </div>
              <span className="text-xs text-slate-400">02:34</span>
            </div>
            <div className="grid w-full grid-cols-3 gap-2">
              <div className="h-12 rounded bg-slate-700" />
              <div className="h-12 rounded bg-slate-700" />
              <div className="h-12 rounded bg-slate-700" />
            </div>
          </div>
        </div>
        {/* Laptop Base */}
        <div className="relative mx-auto h-3 w-96 -mt-1 rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-lg" />
        <div className="relative mx-auto h-2 w-[420px] -mt-1 rounded-b-2xl bg-gradient-to-b from-slate-200 to-slate-300" />
      </div>

      {/* Floating Icons */}
      <div className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg animate-float">
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>

      <div className="absolute right-8 top-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg animate-float-slow">
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg animate-float">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg animate-float-slow">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      </div>

      <div className="absolute bottom-16 left-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg animate-float">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      <div className="absolute bottom-12 right-12 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg animate-float-slow">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 15l-2 5h4l-2-5zM6 12l-2 5h4l-2-5zM18 12l-2 5h4l-2-5z" />
          <circle cx="12" cy="8" r="4" />
        </svg>
      </div>

      {/* Books at base */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-1">
        <div className="h-10 w-16 rounded bg-gradient-to-b from-blue-500 to-blue-600" />
        <div className="h-8 w-14 rounded bg-gradient-to-b from-purple-500 to-purple-600" />
        <div className="h-12 w-12 rounded bg-gradient-to-b from-cyan-400 to-blue-500" />
      </div>

      {/* Coffee mug */}
      <div className="absolute bottom-10 right-20 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-b from-blue-500 to-blue-600 shadow-md animate-float">
        <span className="text-lg"></span>
      </div>
    </div>
  );
}

export function TeamworkIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100/60 via-purple-50/40 to-sky-100/40 blur-xl" />
      <svg viewBox="0 0 600 420" className="relative w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* World map outline */}
        <ellipse cx="300" cy="210" rx="200" ry="140" fill="#E8E0F0" opacity="0.4" />
        <ellipse cx="300" cy="210" rx="180" ry="120" fill="none" stroke="#D5CCE8" strokeWidth="1" strokeDasharray="4 4" />

        {/* Location pins */}
        <g transform="translate(220, 130)">
          <path d="M12 2C7.58 2 4 5.58 4 10C4 16 12 24 12 24C12 24 20 16 20 10C20 5.58 16.42 2 12 2Z" fill="#7C3AED" opacity="0.6" />
          <circle cx="12" cy="10" r="4" fill="#fff" opacity="0.7" />
        </g>
        <g transform="translate(360, 110)">
          <path d="M12 2C7.58 2 4 5.58 4 10C4 16 12 24 12 24C12 24 20 16 20 10C20 5.58 16.42 2 12 2Z" fill="#3B82F6" opacity="0.6" />
          <circle cx="12" cy="10" r="4" fill="#fff" opacity="0.7" />
        </g>

        {/* Top-left: Solar/Wind icon card */}
        <rect x="60" y="20" width="80" height="80" rx="16" fill="#E8E0F0" opacity="0.8" />
        <g transform="translate(80, 40)">
          <rect x="18" y="20" width="3" height="25" rx="1.5" fill="#4F46E5" />
          <circle cx="19.5" cy="18" r="4" fill="#4F46E5" />
          <path d="M19.5 18L12 10" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
          <path d="M19.5 18L27 12" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
          <path d="M19.5 18L19.5 6" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
          <rect x="30" y="38" width="24" height="16" rx="2" fill="#3B82F6" opacity="0.7" transform="rotate(-15 42 46)" />
        </g>

        {/* Top-right: Healthcare icon card */}
        <rect x="460" y="20" width="80" height="80" rx="16" fill="#E0F2FE" opacity="0.8" />
        <g transform="translate(485, 42)">
          <rect x="12" y="4" width="16" height="32" rx="3" fill="#3B82F6" />
          <rect x="4" y="12" width="32" height="16" rx="3" fill="#3B82F6" />
        </g>

        {/* Top-center: Graduation cap */}
        <rect x="200" y="5" width="80" height="70" rx="16" fill="#F0E7FF" opacity="0.8" />
        <g transform="translate(222, 22)">
          <path d="M18 4L2 12L18 20L34 12L18 4Z" fill="#7C3AED" />
          <path d="M8 16V24C8 24 12 28 18 28C24 28 28 24 28 24V16" fill="#7C3AED" opacity="0.6" />
          <path d="M32 12V24" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Right: Shopping cart icon card */}
        <rect x="500" y="130" width="70" height="70" rx="16" fill="#FEF3C7" opacity="0.6" />
        <g transform="translate(520, 148)">
          <path d="M6 6L10 6L14 20H24L28 10H12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="16" cy="26" r="3" fill="#F59E0B" />
          <circle cx="24" cy="26" r="3" fill="#F59E0B" />
        </g>

        {/* Bottom-left: Woman at laptop */}
        <g transform="translate(40, 280)">
          <rect x="0" y="60" width="120" height="6" rx="3" fill="#D5CCE8" />
          <rect x="10" y="66" width="6" height="40" rx="2" fill="#D5CCE8" />
          <rect x="104" y="66" width="6" height="40" rx="2" fill="#D5CCE8" />
          <rect x="25" y="30" width="50" height="30" rx="3" fill="#94A3B8" />
          <rect x="28" y="33" width="44" height="24" rx="2" fill="#DBEAFE" />
          <circle cx="70" cy="10" r="14" fill="#FDBCB4" />
          <path d="M56 10C56 0 84 0 84 10C84 16 80 20 76 22C74 22 72 18 70 18C68 18 66 22 64 22C60 20 56 16 56 10Z" fill="#1E293B" />
          <rect x="58" y="24" width="24" height="38" rx="8" fill="#9F7AEA" />
          <path d="M58 34L42 50" stroke="#9F7AEA" strokeWidth="6" strokeLinecap="round" />
          <path d="M82 34L75 50" stroke="#9F7AEA" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* Bottom-right: Man at laptop */}
        <g transform="translate(430, 280)">
          <rect x="0" y="60" width="120" height="6" rx="3" fill="#D5CCE8" />
          <rect x="10" y="66" width="6" height="40" rx="2" fill="#D5CCE8" />
          <rect x="104" y="66" width="6" height="40" rx="2" fill="#D5CCE8" />
          <rect x="25" y="30" width="50" height="30" rx="3" fill="#94A3B8" />
          <rect x="28" y="33" width="44" height="24" rx="2" fill="#DBEAFE" />
          <circle cx="50" cy="10" r="14" fill="#FDBCB4" />
          <path d="M36 10C36 2 64 2 64 10C64 14 60 16 56 16C54 12 52 10 50 10C48 10 46 12 44 16C40 16 36 14 36 10Z" fill="#4A3728" />
          <rect x="38" y="24" width="24" height="38" rx="8" fill="#93C5FD" />
          <path d="M38 34L45 50" stroke="#93C5FD" strokeWidth="6" strokeLinecap="round" />
          <path d="M62 34L78 50" stroke="#93C5FD" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* Center: Two professionals shaking hands */}
        <g transform="translate(190, 100)">
          {/* Man (left) - blue shirt */}
          <g>
            <rect x="50" y="120" width="14" height="60" rx="6" fill="#E2D8CC" />
            <rect x="76" y="120" width="14" height="60" rx="6" fill="#E2D8CC" />
            <rect x="38" y="50" width="64" height="78" rx="16" fill="#93C5FD" />
            <circle cx="70" cy="30" r="24" fill="#FDBCB4" />
            <path d="M46 30C46 8 94 8 94 30C94 38 90 44 84 46C80 42 76 38 70 38C64 38 60 42 56 46C50 44 46 38 46 30Z" fill="#1E293B" />
            <circle cx="62" cy="28" r="2.5" fill="#1E293B" />
            <circle cx="78" cy="28" r="2.5" fill="#1E293B" />
            <path d="M64 36Q70 42 76 36" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M38 64L18 80" stroke="#93C5FD" strokeWidth="10" strokeLinecap="round" />
            <path d="M102 64L130 76" stroke="#93C5FD" strokeWidth="10" strokeLinecap="round" />
          </g>

          {/* Woman (right) - purple blazer */}
          <g>
            <rect x="140" y="120" width="14" height="60" rx="6" fill="#E8D5C4" />
            <rect x="166" y="120" width="14" height="60" rx="6" fill="#E8D5C4" />
            <rect x="128" y="50" width="64" height="78" rx="16" fill="#9F7AEA" />
            <circle cx="160" cy="30" r="24" fill="#FDBCB4" />
            <path d="M136 30C136 8 184 8 184 30C184 40 180 48 174 50C176 56 180 66 180 76C180 78 178 80 176 80C174 80 172 78 172 76C172 66 170 56 168 50C164 46 160 42 160 42C160 42 156 46 152 50C150 56 148 66 148 76C148 78 146 80 144 80C142 80 140 78 140 76C140 66 144 56 146 50C140 48 136 40 136 30Z" fill="#4A3728" />
            <circle cx="160" cy="30" r="20" fill="#FDBCB4" />
            <circle cx="152" cy="28" r="2.5" fill="#1E293B" />
            <circle cx="168" cy="28" r="2.5" fill="#1E293B" />
            <path d="M154 36Q160 42 166 36" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M128 64L100 76" stroke="#9F7AEA" strokeWidth="10" strokeLinecap="round" />
            <path d="M192 64L212 80" stroke="#9F7AEA" strokeWidth="10" strokeLinecap="round" />
          </g>

          {/* Handshake overlap */}
          <ellipse cx="115" cy="74" rx="12" ry="8" fill="#FDBCB4" />
        </g>

        {/* Decorative plant - bottom left */}
        <g transform="translate(20, 340)">
          <rect x="8" y="20" width="20" height="24" rx="4" fill="#C4B5E0" />
          <path d="M18 20C18 8 4 -2 4 -2C4 -2 10 10 18 20Z" fill="#34D399" />
          <path d="M18 20C18 8 32 -2 32 -2C32 -2 26 10 18 20Z" fill="#10B981" />
        </g>

        {/* Decorative plant - bottom right */}
        <g transform="translate(555, 340)">
          <rect x="8" y="20" width="20" height="24" rx="4" fill="#C4B5E0" />
          <path d="M18 20C18 8 4 -2 4 -2C4 -2 10 10 18 20Z" fill="#34D399" />
          <path d="M18 20C18 8 32 -2 32 -2C32 -2 26 10 18 20Z" fill="#10B981" />
        </g>
      </svg>
    </div>
  );
}

export function ContactIllustration() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[380px]">
      <DotGrid className="absolute -top-4 right-0" />
      <div className="absolute h-60 w-60 rounded-full bg-gradient-to-br from-indigo-200/60 to-purple-200/60 blur-2xl" />
      <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple text-7xl shadow-2xl">
        👩‍💻
      </div>
      <FloatingIcon emoji="✉️" className="left-2 top-6 animate-float" />
      <FloatingIcon emoji="💬" className="right-0 top-2 animate-float-slow" />
      <FloatingIcon emoji="✈️" className="left-0 bottom-10 animate-float" />
      <FloatingIcon emoji="☁️" className="right-6 bottom-2 animate-float-slow" />
    </div>
  );
}

export function PhilosophyIllustration() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[380px]">
      <DotGrid className="absolute -top-4 right-0" />
      <div className="absolute h-60 w-72 rounded-3xl bg-gradient-to-br from-indigo-200/60 via-purple-200/50 to-orange-200/50 blur-2xl" />
      <div className="relative grid grid-cols-2 gap-6">
        <span className="text-6xl animate-float">🧑‍💻</span>
        <span className="text-6xl animate-float-slow">👨‍🏫</span>
      </div>
      <FloatingIcon emoji="🪴" className="left-0 bottom-0 animate-float-slow" />
      <FloatingIcon emoji="💡" className="right-0 top-0 animate-float" />
      <FloatingIcon emoji="▶️" className="right-4 bottom-6 animate-float-slow" />
    </div>
  );
}
