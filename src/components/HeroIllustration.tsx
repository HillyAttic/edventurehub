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
        <span className="absolute -left-6 bottom-8 text-3xl">🧑‍🎓</span>
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
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[380px]">
      <DotGrid className="absolute -top-4 right-0" />
      <div className="absolute h-60 w-72 rounded-3xl bg-gradient-to-br from-indigo-200/60 to-purple-200/60 blur-2xl" />
      <div className="relative flex h-48 w-72 flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-purple shadow-2xl">
        <div className="flex items-center gap-1.5 bg-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-yellow-200" />
          <span className="h-2 w-2 rounded-full bg-green-300" />
        </div>
        <div className="flex flex-1 items-center justify-center text-6xl">💻</div>
      </div>
      <FloatingIcon emoji="✅" className="left-0 top-6 animate-float" />
      <FloatingIcon emoji="▶️" className="right-0 top-10 animate-float-slow" />
      <FloatingIcon emoji="⚙️" className="left-6 bottom-2 animate-float" />
      <FloatingIcon emoji="📈" className="right-6 bottom-4 animate-float-slow" />
      <FloatingIcon emoji="🧩" className="right-14 top-0 animate-float" />
    </div>
  );
}

export function TeamworkIllustration() {
  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[380px]">
      <DotGrid className="absolute -top-4 right-0" />
      <div className="absolute h-60 w-60 rounded-full bg-gradient-to-br from-indigo-200/60 to-purple-200/60 blur-2xl" />
      <div className="relative grid grid-cols-2 gap-4">
        <span className="text-6xl animate-float">🧑‍💻</span>
        <span className="text-6xl animate-float-slow">👩‍⚕️</span>
        <span className="text-6xl animate-float-slow">🤝</span>
        <span className="text-6xl animate-float">👨‍🏫</span>
      </div>
      <FloatingIcon emoji="⚕️" className="left-0 top-2 animate-float" />
      <FloatingIcon emoji="📄" className="right-0 bottom-2 animate-float-slow" />
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
