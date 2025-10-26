import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
      <Spline
        scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full p-6 sm:p-8">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Learn in a future-forward space
            </h1>
            <p className="mt-2 text-white/70 max-w-xl">
              Explore immersive, interactive education. Track progress, master skills, and stay motivated with a dashboard designed for clarity and flow.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-cyan-400 text-neutral-900 px-4 py-2 text-sm font-semibold shadow-[0_8px_30px_rgb(34,211,238,0.35)] hover:brightness-95 transition">
                Start Learning
              </button>
              <button className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
                View Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
