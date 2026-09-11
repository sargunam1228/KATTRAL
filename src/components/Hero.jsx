import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, Flame, BookOpen } from 'lucide-react';

export const Hero = () => {
  const { setActiveView, isN4Unlocked } = useApp();

  return (
    <section className="relative pt-8 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 dark:bg-red-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/90 border border-red-200 dark:border-red-700/80 text-red-600 dark:text-red-300 text-xs font-black tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-red-500 dark:text-red-400" />
              <span>JLPT N5 & N4 DEDICATED PLATFORM</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Master Japanese <br />
              <span className="text-red-600 dark:text-red-500 font-black tracking-tight drop-shadow-none [filter:none]">
                with KATTRAL
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-slate-100 drop-shadow-sm">
              Your simple path from Japanese beginner to JLPT N4.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-200 font-medium max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Learn Hiragana, Katakana, Kanji, Vocabulary, Grammar, Listening and more with structured N5 and N4 lessons. Explained clearly in English.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs font-bold text-slate-800 dark:text-slate-100 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0" />
                <span>Structured English Explanations</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0" />
                <span>Writing Canvas & Audio</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0" />
                <span>Mock JLPT Quizzes</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setActiveView('n5')}
                className="btn-primary w-full sm:w-auto text-base py-3.5 px-8 justify-center shadow-lg shadow-red-600/40 font-extrabold tracking-wide"
              >
                <span>Start N5 Learning</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveView('n4')}
                className="btn-secondary w-full sm:w-auto text-base py-3.5 px-8 justify-center font-extrabold tracking-wide text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-700/80 bg-white dark:bg-slate-900/90 hover:border-red-500 hover:text-red-500"
              >
                <BookOpen className="w-5 h-5 text-red-500 dark:text-red-400 shrink-0" />
                <span>Explore N4</span>
              </button>
            </div>
          </div>

          {/* Right Column: KATTRAL Animated Logo Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Radial Glow */}
            <div className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-red-500/20 dark:bg-red-500/25 blur-3xl animate-pulse-glow pointer-events-none" />

            {/* Main Logo Container Frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-square rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 dark:from-slate-850 dark:to-slate-950 border border-slate-700/80 p-6 sm:p-8 shadow-2xl flex items-center justify-center overflow-hidden">
              
              {/* Radial Accent Ring */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12)_0%,transparent_70%)] pointer-events-none" />

              {/* KATTRAL Animated Logo */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-2 transition-all duration-700 ease-out animate-float">
                <img
                  src="/kattral_logo.jpg"
                  alt="KATTRAL Logo"
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
