import React from 'react';
import { Search, Bell, Settings, User, Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 grid place-items-center shadow-lg shadow-cyan-500/20">
            <Rocket className="h-5 w-5 text-neutral-950" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">NovaLearn</div>
            <div className="text-[11px] text-white/50 -mt-0.5">Student Dashboard</div>
          </div>
        </div>

        <div className="ml-auto hidden md:flex items-center gap-3">
          <div className="relative w-[360px]">
            <input
              type="text"
              placeholder="Search courses, topics, or mentors"
              className="w-full h-10 rounded-xl bg-white/5 border border-white/10 pl-10 pr-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/30"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
          </div>
          <button className="relative h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Bell className="h-5 w-5 text-white/80" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-rose-500 text-[10px] grid place-items-center">3</span>
          </button>
          <button className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <Settings className="h-5 w-5 text-white/80" />
          </button>
          <div className="h-10 w-10 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 grid place-items-center">
            <User className="h-5 w-5 text-white/80" />
          </div>
        </div>

        <div className="ml-auto md:hidden flex items-center gap-2">
          <button className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10">
            <Search className="h-5 w-5 text-white/80" />
          </button>
          <button className="h-10 w-10 grid place-items-center rounded-xl bg-white/5 border border-white/10">
            <Bell className="h-5 w-5 text-white/80" />
          </button>
          <div className="h-10 w-10 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 grid place-items-center">
            <User className="h-5 w-5 text-white/80" />
          </div>
        </div>
      </div>
    </header>
  );
}
