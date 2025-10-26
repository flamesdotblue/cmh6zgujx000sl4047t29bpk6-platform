import React from 'react';
import { BookOpen, TrendingUp, Award, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, sub }) => (
  <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:border-cyan-400/40 transition">
    <div className="flex items-center justify-between">
      <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center border border-white/10">
        <Icon className="h-5 w-5 text-white/80" />
      </div>
      <div className="text-xs text-white/50">{sub}</div>
    </div>
    <div className="mt-4">
      <div className="text-white/60 text-xs uppercase tracking-wider">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  </div>
);

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={BookOpen} label="Active Courses" value="6" sub="2 due today" />
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center border border-white/10">
            <TrendingUp className="h-5 w-5 text-white/80" />
          </div>
          <div className="text-xs text-white/50">This week</div>
        </div>
        <div className="mt-4">
          <div className="text-white/60 text-xs uppercase tracking-wider">Progress</div>
          <div className="text-2xl font-semibold mt-1">74%</div>
          <div className="mt-3 h-2 w-full rounded-full bg-white/10">
            <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" style={{ width: '74%' }} />
          </div>
        </div>
      </div>
      <StatCard icon={Award} label="GPA" value="3.8" sub="Top 10%" />
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center border border-white/10">
            <Clock className="h-5 w-5 text-white/80" />
          </div>
          <div className="text-xs text-white/50">Daily</div>
        </div>
        <div className="mt-4">
          <div className="text-white/60 text-xs uppercase tracking-wider">Focus Time</div>
          <div className="text-2xl font-semibold mt-1">2h 35m</div>
          <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> +18% from yesterday
          </div>
        </div>
      </div>
    </div>
  );
}
