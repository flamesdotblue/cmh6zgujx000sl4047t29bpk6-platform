import React from 'react';

const CourseItem = ({ title, tag, progress, colorFrom, colorTo }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition">
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-sm text-white/50">{tag}</div>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
      </div>
      <button className="shrink-0 inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium hover:bg-white/10 transition">
        Continue
      </button>
    </div>
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs text-white/60">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-2 rounded-full"
          style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})` }}
        />
      </div>
    </div>
  </div>
);

export default function CourseList() {
  const courses = [
    { title: 'Foundations of Machine Learning', tag: 'Data Science', progress: 62, from: '#22d3ee', to: '#3b82f6' },
    { title: 'Environmental Systems & Sustainability', tag: 'Earth Science', progress: 35, from: '#34d399', to: '#10b981' },
    { title: 'Human-Computer Interaction', tag: 'Design', progress: 81, from: '#f472b6', to: '#c084fc' },
    { title: 'Algorithms & Complexity', tag: 'Computer Science', progress: 48, from: '#fb923c', to: '#f97316' },
  ];

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {courses.map((c) => (
        <CourseItem
          key={c.title}
          title={c.title}
          tag={c.tag}
          progress={c.progress}
          colorFrom={c.from}
          colorTo={c.to}
        />
      ))}
    </div>
  );
}
