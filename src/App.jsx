import React from 'react';
import Header from './components/Header';
import HeroSpline from './components/HeroSpline';
import StatsOverview from './components/StatsOverview';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mt-6">
          <HeroSpline />
        </section>
        <section className="mt-10">
          <StatsOverview />
        </section>
        <section className="mt-10 mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white/90">Your Courses</h2>
          <p className="text-sm text-white/50 mt-1">Continue where you left off. Stay curious.</p>
          <CourseList />
        </section>
      </main>
    </div>
  );
}

export default App;
