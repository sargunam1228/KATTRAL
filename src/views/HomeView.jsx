import React from 'react';
import { Hero } from '../components/Hero';
import { LevelCards } from '../components/LevelCards';
import { DashboardOverview } from '../components/DashboardOverview';
import { DailyWordCard } from '../components/DailyWordCard';
import { DailyStreakCard } from '../components/DailyStreakCard';
import { useApp } from '../context/AppContext';
import { Sparkles, Headphones, Mic, Pencil, Layers, Award, ArrowRight } from 'lucide-react';

export const HomeView = () => {
  const { setActiveView } = useApp();

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. JLPT Level Cards Section */}
      <LevelCards />

      {/* 3. Learner Dashboard Overview */}
      <DashboardOverview />

      {/* 4. Daily Japanese Word & Streak Section */}
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <DailyWordCard />
        </div>
        <div className="lg:col-span-5">
          <DailyStreakCard />
        </div>
      </div>

      {/* 5. Quick Practice Hub Launcher Banner */}
      <div className="container-custom">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-4 h-4" />
              <span>INTERACTIVE PRACTICE MODULES</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Practice Listening, Speaking & Writing?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Access audio listening drills, speech pronunciation recognition, HTML5 stroke writing canvas, and 3D flashcards.
            </p>
          </div>

          <button
            onClick={() => setActiveView('practice')}
            className="btn-primary py-3.5 px-8 text-base shadow-lg shrink-0"
          >
            <span>Launch Practice Hub</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
